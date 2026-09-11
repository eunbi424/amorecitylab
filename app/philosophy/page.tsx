import type { Metadata } from "next";
import Link from "next/link";
import HistoryTable from "@/components/HistoryTable";
import PageHero from "@/components/PageHero";
import PhilosophyIcon from "@/components/PhilosophyIcon";
import SectionHeading from "@/components/SectionHeading";
import { history, philosophy } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "시티랩 철학",
  description: philosophy.definition,
};

export default function PhilosophyPage() {
  return (
    <>
      <PageHero eyebrow={philosophy.eyebrow} title={philosophy.headline} description={philosophy.definition} />

      {/* Story */}
      <section className="container-lab py-section">
        <div className="grid gap-2xl lg:grid-cols-[240px_1fr]">
          <p className="eyebrow lg:sticky lg:top-[112px] lg:self-start">Our Story</p>
          <div className="max-w-2xl space-y-lg">
            {philosophy.story.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 12)}
                className={
                  index === 0
                    ? "text-body-lg leading-loose text-ink-primary"
                    : "text-body leading-loose text-ink-secondary"
                }
              >
                {paragraph}
              </p>
            ))}
            <p className="pt-sm text-caption text-ink-tertiary">
              참고 ·{" "}
              <a
                href={philosophy.source.href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-primary"
              >
                {philosophy.source.label}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Three values */}
      <section className="border-y border-line-subtle bg-surface-ivory py-section">
        <div className="container-lab">
          <SectionHeading
            eyebrow="Three Values"
            title="시티랩이 지향하는 가치"
            description={"데이터를 객관적으로 읽고, 피부를 진심으로 들여다보며,\n개인에게 꼭 맞는 맞춤 솔루션을 제안합니다."}
          />

          <ol className="mt-2xl grid gap-px bg-line-subtle md:grid-cols-3">
            {philosophy.pillars.map((pillar) => (
              <li key={pillar.no} className="bg-white p-lg md:p-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-lilac text-ink-primary">
                  <PhilosophyIcon name={pillar.icon} />
                </div>
                <p className="mt-lg font-mono text-caption text-secondary">{pillar.no}</p>
                <h3 className="mt-sm whitespace-pre-line text-h3">{pillar.title}</h3>
                <p className="mt-1 text-caption uppercase tracking-[0.14em] text-ink-tertiary">{pillar.titleEn}</p>
                <p className="mt-md text-caption leading-relaxed text-ink-secondary">{pillar.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* History */}
      <section className="py-section">
        <div className="container-lab">
          <SectionHeading eyebrow={history.eyebrow} title={history.title} description={history.lead} />
          <div className="mt-2xl">
            <HistoryTable />
          </div>
          <Link
            href="/history"
            className="link-underline mt-xl inline-block text-caption uppercase tracking-eyebrow text-primary"
          >
            View full history
          </Link>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-surface-inverse py-section text-white">
        <div className="container-lab">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="whitespace-pre-line text-h2 display-serif leading-snug text-white md:text-h1">
              {`“${philosophy.quote.text}”`}
            </p>
            <footer className="mt-xl text-caption uppercase tracking-eyebrow text-white/45">
              {philosophy.quote.attribution}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Stats */}
      <section className="container-lab py-section">
        <dl className="grid grid-cols-2 gap-lg md:grid-cols-4">
          {philosophy.stats.map((stat) => (
            <div key={stat.label} className="border-t border-ink-primary pt-md">
              <dd className="font-display text-[2.5rem] font-light leading-none text-ink-primary">
                {stat.value}
                {stat.unit ? <span className="ml-1 text-body text-secondary">{stat.unit}</span> : null}
              </dd>
              <dt className="mt-sm text-caption text-ink-secondary">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-2xl flex flex-wrap gap-sm">
          <Link
            href="/researchers#ko-eunbi"
            className="inline-flex items-center rounded-pill bg-primary px-lg py-4 text-caption text-white transition-colors duration-fast hover:bg-primary-800"
          >
            고은비 연구원 소개
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center rounded-pill border border-ink-primary px-lg py-4 text-caption text-ink-primary transition-colors duration-fast hover:bg-ink-primary hover:text-white"
          >
            진단 프로그램
          </Link>
        </div>
      </section>
    </>
  );
}
