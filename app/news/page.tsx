import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { news } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "기사 · 소식",
  description: "시티랩의 주요 안내와 보도자료를 모아 소개합니다.",
};

const categoryLabel: Record<string, string> = {
  Press: "보도",
  Notice: "공지",
  Research: "연구",
  Event: "행사",
};

function formatDate(date: string) {
  return date.replace(/-/g, ". ");
}

export default function NewsPage() {
  const items = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow="News & Press"
        title="시티랩 소식"
        description="시티랩의 주요 안내와 보도자료를 모아 소개합니다."
      />

      <section className="container-lab py-section">
        <ul className="divide-y divide-line-subtle border-t border-ink-primary">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group grid gap-sm py-lg md:grid-cols-[120px_1fr_140px] md:items-baseline md:gap-lg"
              >
                <div className="flex items-center gap-sm md:block">
                  <time className="text-caption text-ink-tertiary" dateTime={item.date}>
                    {formatDate(item.date)}
                  </time>
                  <span className="text-eyebrow uppercase text-secondary md:mt-1 md:block">
                    {categoryLabel[item.category]}
                  </span>
                </div>

                <div>
                  <h3 className="text-h3 transition-colors duration-fast group-hover:text-primary">{item.title}</h3>
                  <p className="mt-xs max-w-2xl text-caption leading-relaxed text-ink-secondary">{item.summary}</p>
                </div>

                <p className="text-caption text-ink-tertiary md:text-right">{item.source}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
