/**
 * Q&A 문의 도메인 타입 · 검증 · Teams Adaptive Card 페이로드 빌더.
 * 이 모듈은 서버에서만 사용된다 (클라이언트 번들에 포함되지 않도록 route handler에서만 import).
 */

export type QnaInquiry = {
  name: string;
  contact: string;
  message: string;
  topic: string;
};

export type ValidationResult =
  | { ok: true; data: QnaInquiry }
  | { ok: false; errors: Record<string, string> };

const LIMITS = {
  name: { min: 1, max: 40 },
  contact: { min: 4, max: 120 },
  message: { min: 5, max: 2000 },
} as const;

export const QNA_TOPICS = [
  "BASIC 프로그램 문의",
  "INTENSIVE 프로그램 문의",
  "예약 · 방문 문의",
  "제휴 · 취재 문의",
  "기타 문의",
] as const;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** 연락처는 이메일 또는 전화번호 둘 중 하나로 받는다. */
function isValidContact(contact: string): boolean {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact);
  const isPhone = /^[0-9+\-() .]{8,20}$/.test(contact);
  return isEmail || isPhone;
}

export function validateInquiry(payload: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const body = (payload ?? {}) as Record<string, unknown>;

  const name = asTrimmedString(body.name);
  const contact = asTrimmedString(body.contact);
  const message = asTrimmedString(body.message);
  const topic = asTrimmedString(body.topic) || QNA_TOPICS[4];

  if (name.length < LIMITS.name.min) errors.name = "이름을 입력해 주세요.";
  else if (name.length > LIMITS.name.max) errors.name = `이름은 ${LIMITS.name.max}자 이내로 입력해 주세요.`;

  if (contact.length < LIMITS.contact.min) errors.contact = "연락처 또는 이메일을 입력해 주세요.";
  else if (contact.length > LIMITS.contact.max) errors.contact = "연락처가 너무 깁니다.";
  else if (!isValidContact(contact)) errors.contact = "이메일 또는 전화번호 형식으로 입력해 주세요.";

  if (message.length < LIMITS.message.min) errors.message = "문의 내용을 5자 이상 입력해 주세요.";
  else if (message.length > LIMITS.message.max)
    errors.message = `문의 내용은 ${LIMITS.message.max}자 이내로 입력해 주세요.`;

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data: { name, contact, message, topic } };
}

/** 한국 시간(KST) 기준 등록 시각 문자열. */
export function formatSubmittedAt(date: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
  return `${parts} (KST)`;
}

/**
 * Microsoft Teams(Power Automate Workflows) 수신 웹훅용 Adaptive Card 페이로드.
 * 카드에는 [이름] · [문의 내용] · [등록 시각]이 반드시 표시된다.
 */
export function buildAdaptiveCardPayload(inquiry: QnaInquiry, submittedAt: string) {
  return {
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        contentUrl: null,
        content: {
          $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
          type: "AdaptiveCard",
          version: "1.4",
          msteams: { width: "Full" },
          body: [
            {
              type: "Container",
              style: "emphasis",
              bleed: true,
              items: [
                {
                  type: "TextBlock",
                  text: "AMORE CITY LAB",
                  size: "Small",
                  weight: "Bolder",
                  spacing: "None",
                  isSubtle: true,
                },
                {
                  type: "TextBlock",
                  text: "새로운 Q&A 문의가 등록되었습니다",
                  size: "Large",
                  weight: "Bolder",
                  wrap: true,
                  spacing: "Small",
                },
              ],
            },
            {
              type: "FactSet",
              spacing: "Medium",
              facts: [
                { title: "이름", value: inquiry.name },
                { title: "문의 유형", value: inquiry.topic },
                { title: "연락처", value: inquiry.contact },
                { title: "등록 시각", value: submittedAt },
              ],
            },
            {
              type: "TextBlock",
              text: "문의 내용",
              weight: "Bolder",
              spacing: "Medium",
              separator: true,
            },
            {
              type: "TextBlock",
              text: inquiry.message,
              wrap: true,
              spacing: "Small",
            },
          ],
        },
      },
    ],

    /**
     * Power Automate 플로우에서 본문을 직접 파싱하는 경우를 위한 평면 필드.
     * Teams 카드 렌더링에는 영향을 주지 않는다.
     */
    name: inquiry.name,
    topic: inquiry.topic,
    contact: inquiry.contact,
    message: inquiry.message,
    submittedAt,
  };
}
