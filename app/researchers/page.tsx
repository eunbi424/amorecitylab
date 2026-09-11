import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { researchers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "연구원 소개",
  description: "시티랩의 연구는 고객을 만나는 현장에서 시작됩니다. 아모레퍼시픽 기술연구원 소속의 박사연구원, 측정연구원이 함께 고객의 데이터를 읽습니다.",
};

function CredentialList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="border-b border-line-subtle pb-2xs text-eyebrow uppercase tracking-eyebrow text-ink-tertiary">
        {title}
      </h3>
      <ul className="mt-md space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-sm text-caption leading-relaxed text-ink-secondary">
            <span className="mt-[0.62em] h-px w-2.5 shrink-0 bg-accent-lilac" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResearchersPage() {
  return (
    <>
      <PageHero
        eyebrow="Researchers"
        title="아모레 시티랩의 피부 전문가"
        description={"시티랩의 연구는 고객을 만나는 현장에서 시작됩니다.\n아모레퍼시픽 기술연구원 소속의 박사연구원, 측정연구원이 함께 고객의 데이터를 읽습니다."}
      />

      <section className="container-lab py-section">
        <ul className="divide-y divide-line border-t border-line">
          {researchers.map((person, index) => (
            <li key={person.id} id={person.id} className="scroll-mt-[88px] py-xl md:py-2xl">
              <div className="grid gap-lg md:grid-cols-[260px_1fr] md:gap-2xl">
                {/* 포트레이트 */}
                <div>
                  <figure className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden border border-line-subtle bg-white">
                    <Image
                      src={person.portrait}
                      alt={`${person.name} ${person.credential} 프로필 사진`}
                      fill
                      sizes="(max-width: 768px) 70vw, 260px"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </figure>
                </div>

                {/* 프로필 본문 */}
                <div>
                  <div className="flex flex-wrap items-center gap-sm">
                    <span className="bg-accent-lilac px-2.5 py-1 text-eyebrow uppercase tracking-eyebrow text-ink-primary">
                      {person.badge}
                    </span>
                    <span className="font-mono text-caption text-ink-tertiary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-md flex flex-wrap items-baseline gap-md">
                    <h2 className="text-h2 display-serif">{person.name}</h2>
                    <span className="text-body text-primary">{person.credential}</span>
                  </div>
                  <p className="mt-1 text-caption tracking-[0.08em] text-ink-tertiary">{person.nameEn}</p>

                  <div className="mt-xl grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
                    <CredentialList title="학력 · 경력" items={person.education} />
                    {person.research.length > 0 ? (
                      <CredentialList title="연구분야" items={person.research} />
                    ) : null}
                    <CredentialList title="자격증" items={person.certifications} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
