import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { brand, location } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "위치 및 공간",
  description: `${location.address} — 아모레시티랩의 공간 소개와 오시는 길입니다.`,
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow={location.eyebrow}
        title="도심 속에서 만나는 피부 연구소"
        description="아모레퍼시픽 세계본사 2층, 아모레용산 시티랩입니다."
        meta={[
          { label: "위치", value: "서울 용산 아모레퍼시픽" },
          { label: "층", value: "세계본사 2F" },
        ]}
      />

      {/* 공간 실사 이미지 */}
      <section className="border-b border-line-subtle">
        <figure>
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src={brand.space.src}
              alt={brand.space.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </figure>
      </section>

      {/* 주소 · 운영시간 · 연락처 */}
      <section className="container-lab py-section">
        <div className="grid gap-2xl lg:grid-cols-3">
          <div className="border-t border-ink-primary pt-md">
            <p className="eyebrow">Address</p>
            <p className="mt-md text-body leading-relaxed text-ink-primary">{location.address}</p>
            <p className="mt-2xs text-caption text-ink-tertiary">{location.addressEn}</p>
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline mt-md inline-block text-caption uppercase tracking-eyebrow text-primary"
            >
              네이버 지도에서 보기
            </a>
          </div>

          <div className="border-t border-ink-primary pt-md">
            <p className="eyebrow">Hours</p>
            <ul className="mt-md space-y-3">
              {location.hours.map((item) => (
                <li key={item.day} className="flex items-baseline justify-between gap-md">
                  <span className="text-caption text-ink-secondary">{item.day}</span>
                  <span className="text-body text-ink-primary">{item.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-md text-caption leading-relaxed text-ink-tertiary">{location.hoursNote}</p>
          </div>

          <div className="border-t border-ink-primary pt-md">
            <p className="eyebrow">Contact</p>
            <ul className="mt-md space-y-3">
              {location.contact.map((item) => (
                <li key={item.label}>
                  <p className="text-caption text-ink-tertiary">{item.label}</p>
                  <p className="mt-1 text-body text-ink-primary">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="container-lab py-section">
        <SectionHeading eyebrow="Directions" title="오시는 길" />

        <div className="mt-2xl grid gap-2xl lg:grid-cols-[1fr_1.1fr]">
          <ul className="divide-y divide-line border-y border-line">
            {location.transit.map((item) => (
              <li key={item.type} className="grid gap-xs py-lg md:grid-cols-[100px_1fr] md:gap-md">
                <span className="text-body text-ink-primary">{item.type}</span>
                <span className="text-caption leading-loose text-ink-secondary">{item.detail}</span>
              </li>
            ))}
          </ul>

          {/* 지도 자리 — 외부 지도 SDK 없이 정적 플레이스홀더로 표현 */}
          <a
            href={location.mapUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden border border-line bg-surface-muted p-lg transition-colors duration-base hover:border-primary"
          >
            <div className="absolute inset-0 hairline-grid opacity-60" aria-hidden />
            <div
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-primary/5"
              aria-hidden
            />
            <div
              className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              aria-hidden
            />
            <div className="relative">
              <p className="eyebrow">Amore City Lab</p>
              <p className="mt-2xs text-body text-ink-primary">{location.name}</p>
              <p className="mt-1 text-caption text-primary">네이버 지도로 열기</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
