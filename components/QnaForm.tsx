"use client";

import { useState } from "react";
import { QNA_TOPICS } from "@/lib/qna";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const initialForm = { name: "", contact: "", topic: QNA_TOPICS[0] as string, message: "" };

const fieldClass =
  "mt-2xs w-full border border-line bg-white px-sm py-3.5 text-body text-ink-primary transition-colors duration-fast placeholder:text-ink-tertiary focus:border-primary focus:outline-none";

export default function QnaForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [agreed, setAgreed] = useState(false);

  const sending = status.kind === "sending";

  function update(field: keyof typeof initialForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    setStatus({ kind: "sending" });
    setErrors({});

    try {
      // 웹훅은 서버 라우트에서만 호출된다. 클라이언트는 자체 API만 호출.
      const response = await fetch("/api/qna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setStatus({ kind: "error", message: data.message ?? "문의 등록에 실패했습니다. 잠시 후 다시 시도해 주세요." });
        return;
      }

      setForm(initialForm);
      setAgreed(false);
      setStatus({ kind: "success", message: data.message ?? "문의가 정상적으로 등록되었습니다." });
    } catch {
      setStatus({ kind: "error", message: "네트워크 오류가 발생했습니다. 연결 상태를 확인해 주세요." });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-lg">
      <div className="grid gap-lg md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-caption text-ink-primary">
            이름 <span className="text-state-error">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={40}
            autoComplete="name"
            placeholder="홍길동"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2xs text-caption text-state-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact" className="text-caption text-ink-primary">
            연락처 또는 이메일 <span className="text-state-error">*</span>
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            maxLength={120}
            autoComplete="email"
            placeholder="010-1234-5678 또는 name@example.com"
            value={form.contact}
            onChange={(e) => update("contact", e.target.value)}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "contact-error" : undefined}
            className={fieldClass}
          />
          {errors.contact ? (
            <p id="contact-error" className="mt-2xs text-caption text-state-error">
              {errors.contact}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="text-caption text-ink-primary">
          문의 유형
        </label>
        <select
          id="topic"
          name="topic"
          value={form.topic}
          onChange={(e) => update("topic", e.target.value)}
          className={`${fieldClass} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B0C0C' stroke-width='1.5'><path d='M6 9l6 6 6-6'/></svg>\")",
          }}
        >
          {QNA_TOPICS.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-caption text-ink-primary">
          문의 내용 <span className="text-state-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          maxLength={2000}
          placeholder="문의하실 내용을 자유롭게 남겨주세요. 진단 예약 문의의 경우 희망 날짜를 함께 적어주시면 빠르게 안내드릴 수 있습니다."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y leading-relaxed`}
        />
        <div className="mt-2xs flex items-start justify-between gap-md">
          {errors.message ? (
            <p id="message-error" className="text-caption text-state-error">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="shrink-0 text-caption text-ink-tertiary">{form.message.length} / 2000</span>
        </div>
      </div>

      <label className="flex items-start gap-sm text-caption leading-relaxed text-ink-secondary">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
        />
        <span>
          문의 응대를 위한 개인정보(이름, 연락처) 수집 및 이용에 동의합니다. 수집된 정보는 문의 회신 목적으로만
          사용되며 처리 완료 후 파기됩니다. <span className="text-state-error">*</span>
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-md pt-2xs">
        <button
          type="submit"
          disabled={sending || !agreed}
          className="inline-flex items-center rounded-pill bg-primary px-xl py-4 text-caption text-white transition-colors duration-fast hover:bg-primary-800 disabled:cursor-not-allowed disabled:bg-ink-tertiary"
        >
          {sending ? "전송 중…" : "문의 등록하기"}
        </button>
        <p className="text-caption text-ink-tertiary">등록 시 담당자 Teams 채널로 즉시 알림이 전송됩니다.</p>
      </div>

      <div aria-live="polite" role="status">
        {status.kind === "success" ? (
          <p className="border-l-2 border-primary bg-primary-50 px-md py-sm text-caption text-primary-700">
            {status.message}
          </p>
        ) : null}
        {status.kind === "error" ? (
          <p className="border-l-2 border-state-error bg-red-50 px-md py-sm text-caption text-state-error">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
