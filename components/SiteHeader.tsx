"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, navigation, site } from "@/lib/site-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-base ease-standard ${
        scrolled || open ? "border-line-subtle bg-white/90 backdrop-blur-md" : "border-transparent bg-white"
      }`}
    >
      <div className="container-lab flex h-[72px] items-center justify-between gap-lg">
        <Link href="/" className="flex items-center gap-md" aria-label={`${site.name} 홈`}>
          <Image
            src={brand.logoInk.src}
            alt="CITY LAB diagnosis & consulting"
            width={brand.logoInk.width}
            height={brand.logoInk.height}
            priority
            className="h-[34px] w-auto"
          />
          <span className="hidden border-l border-line pl-md text-[0.625rem] tracking-[0.24em] text-ink-tertiary sm:block">
            AMOREPACIFIC
          </span>
        </Link>

        <nav className="hidden items-center gap-md xl:gap-xl lg:flex" aria-label="주요 메뉴">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-caption transition-colors duration-fast ${
                  active ? "text-primary" : "text-ink-secondary hover:text-ink-primary"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/programs"
            className="inline-flex items-center rounded-pill bg-primary px-md py-2.5 text-caption text-white transition-colors duration-fast hover:bg-primary-800"
          >
            진단 예약하기
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        >
          <span
            className={`block h-px w-6 bg-ink-primary transition-transform duration-fast ease-standard ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink-primary transition-transform duration-fast ease-standard ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line-subtle bg-white transition-[max-height] duration-base ease-standard lg:hidden ${
          open ? "max-h-[640px]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="container-lab flex flex-col py-sm" aria-label="모바일 메뉴">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline justify-between border-b border-line-subtle py-4 last:border-b-0"
            >
              <span className="text-body text-ink-primary">{item.label}</span>
              <span className="text-eyebrow uppercase text-ink-tertiary">{item.labelEn}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
