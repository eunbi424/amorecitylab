import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { programs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "진단 프로그램",
  description: "아모레시티랩 BASIC · INTENSIVE 정밀 진단 프로그램 안내입니다.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="정밀 측정을 통한 1:1 맞춤 솔루션 진단"
        description={"BASIC (택 1) | 피부 또는 두피 집중 진단\nINTENSIVE | 피부·두피 통합 진단 및 미래 피부 예측"}
        meta={[
          { label: "프로그램", value: "BASIC · INTENSIVE" },
          { label: "소요시간", value: "30분 / 60분" },
          { label: "예약", value: "온라인 사전 예약" },
        ]}
      />

      {/* 프로그램 요약 */}
      <section className="border-b border-line-subtle bg-surface-ivory py-xl">
        <div className="container-lab grid gap-lg md:grid-cols-2">
          {programs.map((program) => (
            <a
              key={program.slug}
              href={`#${program.slug}`}
              className="flex flex-col justify-between border border-line bg-white px-lg py-lg transition-colors duration-fast hover:border-primary"
            >
              <span>
                <span className="text-eyebrow uppercase tracking-eyebrow text-secondary">{program.no}</span>
                <span className="mt-1 block font-display text-h3">{program.name}</span>
                <span className="mt-1 block text-caption text-ink-tertiary">{program.focus}</span>
              </span>
              <span className="mt-md flex items-baseline justify-between gap-sm border-t border-line-subtle pt-md text-caption text-ink-secondary">
                <span>{program.duration}</span>
                <span className="text-right text-ink-tertiary">{program.price}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {programs.map((program, programIndex) => (
        <section
          key={program.slug}
          id={program.slug}
          className={`scroll-mt-[88px] py-section ${programIndex % 2 === 1 ? "bg-surface-ivory" : ""} ${
            programIndex > 0 ? "border-t border-line-subtle" : ""
          }`}
        >
          <div className="container-lab">
            <div className="grid gap-lg lg:grid-cols-[1fr_1fr] lg:gap-2xl">
              <div>
                <p className="eyebrow">{program.no}</p>
                <h2 className="mt-md text-display-2 display-serif">{program.name}</h2>
                <p className="mt-2xs text-caption uppercase tracking-[0.18em] text-ink-tertiary">{program.nameEn}</p>
              </div>
              <div className="lg:pt-2xl">
                <p className="text-body-lg leading-loose text-ink-secondary">{program.summary}</p>
                <p className="mt-md text-caption leading-relaxed text-ink-tertiary">{program.summaryEn}</p>
              </div>
            </div>

            <dl className="mt-2xl grid grid-cols-2 gap-lg border-y border-ink-primary py-lg lg:grid-cols-4">
              <div>
                <dt className="text-eyebrow uppercase text-ink-tertiary">소요시간</dt>
                <dd className="mt-2xs text-body text-ink-primary">{program.duration}</dd>
              </div>
              <div>
                <dt className="text-eyebrow uppercase text-ink-tertiary">서비스 조건</dt>
                <dd className="mt-2xs text-body text-ink-primary">{program.price}</dd>
              </div>
              <div>
                <dt className="text-eyebrow uppercase text-ink-tertiary">정원 · 방식</dt>
                <dd className="mt-2xs text-body text-ink-primary">{program.capacity}</dd>
              </div>
              <div>
                <dt className="text-eyebrow uppercase text-ink-tertiary">측정 범위</dt>
                <dd className="mt-2xs text-body text-ink-primary">{program.focus}</dd>
              </div>
            </dl>

            <div className="mt-2xl grid gap-2xl lg:grid-cols-2">
              <div>
                <h3 className="text-h3">서비스 내용</h3>
                <ul className="mt-lg divide-y divide-line-subtle border-y border-line-subtle">
                  {program.services.map((service) => (
                    <li key={service} className="flex gap-md py-3.5">
                      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span className="text-caption leading-relaxed text-ink-secondary">{service}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-xl text-body text-ink-primary">사용 장비</h4>
                <ul className="mt-md flex flex-wrap gap-2">
                  {program.devices.map((device) => (
                    <li
                      key={device}
                      className="border border-line bg-white px-2.5 py-1.5 text-[0.6875rem] tracking-[0.04em] text-ink-secondary"
                    >
                      {device}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-h3">서비스 조건</h3>
                <ul className="mt-lg space-y-md">
                  {program.conditions.map((condition, index) => (
                    <li key={condition} className="flex gap-md">
                      <span className="font-mono text-caption text-secondary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-caption leading-relaxed text-ink-secondary">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3xl">
              <h3 className="text-h3">진행 방식</h3>
              <ol className="mt-lg grid gap-px bg-line-subtle md:grid-cols-2 lg:grid-cols-4">
                {program.steps.map((step) => (
                  <li key={step.step} className="bg-white p-lg">
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-[1.75rem] font-light text-primary">{step.step}</span>
                      <span className="text-eyebrow uppercase text-ink-tertiary">{step.time}</span>
                    </div>
                    <h4 className="mt-md text-body text-ink-primary">{step.title}</h4>
                    <p className="mt-xs text-caption leading-relaxed text-ink-secondary">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-2xl flex flex-wrap gap-sm">
              <a
                href={program.bookingUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center rounded-pill bg-primary px-lg py-4 text-caption text-white transition-colors duration-fast hover:bg-primary-800"
              >
                {program.name} 예약하기
              </a>
              <a
                href={program.bookingUrlGlobal}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center rounded-pill border border-ink-primary px-lg py-4 text-caption text-ink-primary transition-colors duration-fast hover:bg-ink-primary hover:text-white"
              >
                Book {program.name} (Global)
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
