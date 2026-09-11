import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QnaForm from "@/components/QnaForm";
import { faq, location, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Q&A 문의하기",
  description: "아모레시티랩 진단 프로그램 및 방문 관련 문의를 남겨주세요.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Q&A"
        title="Contact Us"
        description="진단 프로그램, 예약, 방문 관련 문의를 남겨주시면 담당 연구원에게 전달됩니다."
      />

      <section className="container-lab py-section">
        <div className="grid gap-3xl lg:grid-cols-[1.4fr_1fr]">
          {/* 문의 폼 */}
          <div>
            <h2 className="text-h3">문의 등록</h2>
            <p className="mt-xs text-caption text-ink-tertiary">
              <span className="text-state-error">*</span> 표시는 필수 입력 항목입니다.
            </p>
            <div className="mt-lg">
              <QnaForm />
            </div>
          </div>

          {/* 사이드 정보 */}
          <aside className="space-y-2xl">
            <div className="border border-line bg-surface-ivory p-lg">
              <p className="eyebrow">Direct Contact</p>
              <ul className="mt-md space-y-md">
                <li>
                  <p className="text-caption text-ink-tertiary">이메일</p>
                  <p className="mt-1 text-body text-ink-primary">{site.email}</p>
                </li>
                <li>
                  <p className="text-caption text-ink-tertiary">방문</p>
                  <p className="mt-1 text-caption leading-relaxed text-ink-primary">{location.address}</p>
                </li>
              </ul>
              <div className="mt-lg border-t border-line pt-md">
                <p className="text-caption text-ink-tertiary">운영 시간</p>
                <ul className="mt-2xs space-y-1">
                  {location.hours.map((item) => (
                    <li key={item.day} className="text-caption text-ink-secondary">
                      {item.day} · {item.time}
                    </li>
                  ))}
                </ul>
                <p className="mt-2xs text-caption leading-relaxed text-ink-tertiary">{location.hoursNote}</p>
              </div>
            </div>

            <div>
              <p className="eyebrow">FAQ</p>
              <ul className="mt-md divide-y divide-line-subtle border-y border-line-subtle">
                {faq.map((item) => (
                  <li key={item.q} className="py-md">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-sm text-caption text-ink-primary">
                        <span>{item.q}</span>
                        <span
                          className="mt-1 shrink-0 text-body leading-none text-secondary transition-transform duration-fast group-open:rotate-45"
                          aria-hidden
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-sm text-caption leading-relaxed text-ink-secondary">{item.a}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
