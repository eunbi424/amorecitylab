import { NextResponse } from "next/server";
import { buildAdaptiveCardPayload, formatSubmittedAt, validateInquiry, type QnaInquiry } from "@/lib/qna";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEBHOOK_TIMEOUT_MS = 10_000;

async function sendEmailJs(inquiry: QnaInquiry, submittedAt: string) {
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  if (!publicKey || !serviceId || !templateId) return;

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: inquiry.name,
        from_name: inquiry.name,
        contact: inquiry.contact,
        email: inquiry.contact,
        topic: inquiry.topic,
        message: inquiry.message,
        submittedAt,
        title: "아모레시티랩 Q&A 문의",
      },
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error(`[qna] EmailJS 전송 실패 status=${response.status} detail=${detail.slice(0, 200)}`);
  }
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const result = validateInquiry(payload);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, message: "입력값을 다시 확인해 주세요.", errors: result.errors },
      { status: 422 },
    );
  }

  // 웹훅 URL은 서버 환경변수에서만 읽는다 (NEXT_PUBLIC_ 접두사 사용 금지)
  const webhookUrl = process.env.TEAMS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[qna] TEAMS_WEBHOOK_URL 환경변수가 설정되지 않았습니다. .env.local 을 확인하세요.");
    return NextResponse.json(
      { ok: false, message: "알림 채널이 설정되지 않았습니다. 관리자에게 문의해 주세요." },
      { status: 500 },
    );
  }

  const submittedAt = formatSubmittedAt();
  const card = buildAdaptiveCardPayload(result.data, submittedAt);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
      cache: "no-store",
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error(`[qna] Teams 웹훅 전송 실패 status=${response.status} detail=${detail.slice(0, 300)}`);
      return NextResponse.json(
        { ok: false, message: "알림 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." },
        { status: 502 },
      );
    }
  } catch (error) {
    const reason = error instanceof Error ? error.name : "UnknownError";
    console.error(`[qna] Teams 웹훅 호출 중 오류 reason=${reason}`);
    return NextResponse.json(
      { ok: false, message: "알림 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 502 },
    );
  }

  try {
    await sendEmailJs(result.data, submittedAt);
  } catch (error) {
    const reason = error instanceof Error ? error.name : "UnknownError";
    console.error(`[qna] EmailJS 호출 중 오류 reason=${reason}`);
  }

  console.info(`[qna] 문의 접수 완료 name=${result.data.name} topic=${result.data.topic}`);

  return NextResponse.json({
    ok: true,
    message: "문의가 등록되었습니다. 담당자 Teams 채널로 즉시 전달됩니다.",
    submittedAt,
  });
}

export async function GET() {
  return NextResponse.json({ ok: false, message: "POST 메서드만 지원합니다." }, { status: 405 });
}
