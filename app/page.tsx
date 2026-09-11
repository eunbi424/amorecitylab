import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import HistoryTable from "@/components/HistoryTable";
import { brand, history, news, philosophy, programs, researchers, site } from "@/lib/site-data";

export default function HomePage() {
  const featured = news.filter((item) => item.featured).concat(news.filter((item) => !item.featured)).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-ivory">
        <div className="relative min-h-[520px] md:min-h-[680px]">
          <Image
            src={brand.space.src}
            alt={brand.space.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-surface-ivory via-surface-ivory/90 to-surface-ivory/25"
            aria-hidden
          />
          <div className="container-lab relative flex min-h-[520px] flex-col justify-center py-3xl md:min-h-[680px] md:py-4xl">
            <div className="reveal max-w-3xl">
              <p className="eyebrow">Amorepacific · City Lab</p>
              <h1 className="mt-lg break-keep text-h1 display-serif md:text-display-2">
                정밀 진단 맞춤 뷰티 솔루션을 제공하는
                <br />
                도심 속 피부 연구소
              </h1>
              <p className="mt-md whitespace-pre-line font-display text-h3 font-light tracking-[-0.01em] text-primary">
                {site.taglineEn}
              </p>
              <p className="mt-lg max-w-xl whitespace-pre-line break-keep text-body-lg text-ink-secondary">
                {site.description}
              </p>

              <div className="mt-xl flex flex-wrap items-center gap-sm">
                <Link
                  href="/programs"
                  className="inline-flex items-center rounded-pill bg-primary px-lg py-4 text-caption text-white transition-colors duration-fast hover:bg-primary-800"
                >
                  진단 프로그램 보기
                </Link>
                <Link
                  href="/philosophy"
                  className="inline-flex items-center rounded-pill border border-ink-primary bg-white/70 px-lg py-4 text-caption text-ink-primary backdrop-blur-sm transition-colors duration-fast hover:bg-ink-primary hover:text-white"
                >
                  시티랩 철학
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-line-subtle">
          <dl className="container-lab grid grid-cols-2 divide-line-subtle md:grid-cols-4 md:divide-x">
            {philosophy.stats.map((stat) => (
              <div key={stat.label} className="border-b border-line-subtle px-0 py-lg md:border-b-0 md:px-md">
                <dt className="text-caption text-ink-tertiary">{stat.label}</dt>
                <dd className="mt-2xs font-display text-[2rem] font-light text-ink-primary">
                  {stat.value}
                  <span className="ml-1 text-body text-secondary">{stat.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Philosophy preview */}
      <section className="container-lab py-section">
        <SectionHeading
          eyebrow="Philosophy"
          title={"정밀 진단과\n홀리스틱 뷰티 솔루션"}
          description={philosophy.definition}
        />

        <div className="mt-2xl grid gap-px border border-line-subtle bg-line-subtle md:grid-cols-3">
          {philosophy.pillars.map((pillar) => (
            <div key={pillar.no} className="group bg-white p-lg transition-colors duration-base hover:bg-surface-ivory">
              <p className="font-mono text-caption text-secondary">{pillar.no}</p>
              <h3 className="mt-sm text-h3">{pillar.title}</h3>
              <p className="mt-1 text-caption uppercase tracking-[0.14em] text-ink-tertiary">{pillar.titleEn}</p>
              <p className="mt-md text-caption leading-relaxed text-ink-secondary">{pillar.body}</p>
            </div>
          ))}
        </div>

        <Link
          href="/philosophy"
          className="link-underline mt-xl inline-block text-caption uppercase tracking-eyebrow text-primary"
        >
          Read our story
        </Link>
      </section>

      {/* History */}
      <section className="border-y border-line-subtle bg-surface-ivory py-section">
        <div className="container-lab">
          <div className="flex flex-wrap items-end justify-between gap-lg">
            <SectionHeading eyebrow={history.eyebrow} title={history.title} description={history.lead} />
            <Link
              href="/history"
              className="link-underline text-caption uppercase tracking-eyebrow text-primary"
            >
              View all
            </Link>
          </div>
          <div className="mt-2xl">
            <HistoryTable />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-surface-inverse py-section text-white">
        <div className="container-lab">
          <SectionHeading
            eyebrow="Programs"
            title="BASIC / INTENSIVE PROGRAM"
            description={"피부 또는 두피 진단 중 선택하여 정밀 측정하는 BASIC,\n피부, 두피 정밀 측정과 미래 피부를 예측하는 INTENSIVE."}
            tone="dark"
          />

          <div className="mt-2xl grid gap-lg md:grid-cols-2">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/programs#${program.slug}`}
                className="group flex flex-col justify-between border border-white/15 p-lg transition-colors duration-base hover:border-secondary md:p-xl"
              >
                <div>
                  <p className="text-eyebrow uppercase tracking-eyebrow text-secondary">{program.no}</p>
                  <h3 className="mt-md text-h2 display-serif text-white">{program.name}</h3>
                  <p className="mt-2xs text-caption uppercase tracking-[0.14em] text-white/40">{program.nameEn}</p>
                  <p className="mt-md text-caption leading-relaxed text-white/65">{program.summary}</p>
                  <p className="mt-sm text-[0.75rem] leading-relaxed text-white/40">{program.summaryEn}</p>
                </div>
                <dl className="mt-xl grid grid-cols-2 gap-md border-t border-white/10 pt-md">
                  <div>
                    <dt className="text-eyebrow uppercase text-white/40">소요시간</dt>
                    <dd className="mt-1 text-caption text-white">{program.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow uppercase text-white/40">서비스 조건</dt>
                    <dd className="mt-1 text-caption text-white">{program.price}</dd>
                  </div>
                </dl>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Researchers */}
      <section className="container-lab py-section">
        <SectionHeading
          eyebrow="Researchers"
          title="아모레 시티랩의 피부 전문가를 소개합니다."
          description={"과학적인 데이터 기반으로 고객의 피부를 들여다 보고\n고객의 건강한 피부를 위해 함께 고민합니다."}
        />

        <ul className="mt-2xl grid grid-cols-2 gap-lg md:grid-cols-3 lg:grid-cols-5">
          {researchers.map((person) => (
            <li key={person.id}>
              <Link href={`/researchers#${person.id}`} className="group block">
                <figure className="relative aspect-[3/4] overflow-hidden border border-line-subtle bg-white">
                  <Image
                    src={person.portrait}
                    alt={`${person.name} ${person.credential} 프로필 사진`}
                    fill
                    sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 220px"
                    className="object-cover object-top transition-transform duration-slow ease-standard group-hover:scale-[1.04]"
                  />
                </figure>
                <p className="mt-md text-eyebrow uppercase tracking-eyebrow text-ink-tertiary">{person.badge}</p>
                <h3 className="mt-2xs text-body text-ink-primary transition-colors duration-fast group-hover:text-primary">
                  {person.name}
                  <span className="ml-1.5 text-caption text-primary">{person.credential}</span>
                </h3>
                <p className="mt-0.5 text-caption text-ink-tertiary">{person.nameEn}</p>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/researchers"
          className="link-underline mt-xl inline-block text-caption uppercase tracking-eyebrow text-primary"
        >
          Meet all 5 researchers
        </Link>
      </section>

      {/* Location */}
      <section className="border-y border-line-subtle bg-surface-ivory py-section">
        <div className="container-lab">
          <SectionHeading
            eyebrow="Location & Space"
            title={"용산, 한강대로 100\n아모레퍼시픽 세계본사 2층"}
          />
          <figure className="mt-xl">
            <div className="relative aspect-[3/2] w-full overflow-hidden lg:aspect-[21/9]">
              <Image
                src={brand.space.src}
                alt={brand.space.alt}
                fill
                sizes="92vw"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* News */}
      <section className="container-lab py-section">
        <div className="flex flex-wrap items-end justify-between gap-lg">
          <SectionHeading eyebrow="News & Press" title="시티랩의 최근 소식" />
          <Link
            href="/news"
            className="link-underline text-caption uppercase tracking-eyebrow text-primary"
          >
            View all
          </Link>
        </div>

        <ul className="mt-2xl divide-y divide-line-subtle border-t border-line-subtle">
          {featured.map((item) => (
            <li key={item.id} className="group py-lg">
              <a href={item.href} target="_blank" rel="noreferrer noopener" className="block">
                <div className="flex flex-wrap items-center gap-sm">
                  <span className="border border-line px-2 py-1 text-eyebrow uppercase text-ink-tertiary">
                    {item.category}
                  </span>
                  <time className="text-caption text-ink-tertiary" dateTime={item.date}>
                    {item.date.replace(/-/g, ". ")}
                  </time>
                </div>
                <h3 className="mt-sm text-h3 transition-colors duration-fast group-hover:text-primary">{item.title}</h3>
                <p className="mt-xs max-w-2xl text-caption leading-relaxed text-ink-secondary">{item.summary}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-section text-white">
        <div className="container-lab flex flex-col items-start justify-between gap-xl lg:flex-row lg:items-center">
          <div className="max-w-narrow">
            <p className="eyebrow">Q&amp;A</p>
            <h2 className="mt-sm whitespace-pre-line text-h1 display-serif text-white">Contact Us</h2>
            <p className="mt-md text-body-lg text-white/70">
              진단 프로그램, 예약, 방문 관련 문의를 남겨주시면 담당 연구원에게 전달됩니다.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center rounded-pill bg-white px-lg py-4 text-caption text-primary transition-colors duration-fast hover:bg-secondary hover:text-white"
          >
            문의 등록하기
          </Link>
        </div>
      </section>
    </>
  );
}
