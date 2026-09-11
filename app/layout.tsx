import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["아모레시티랩", "아모레퍼시픽", "정밀 진단", "BASIC", "INTENSIVE", "Amore City Lab"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* 빌드 타임 폰트 다운로드 없이 동작하도록 CDN link 사용 (오프라인 시 시스템 폰트로 폴백) */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-caption focus:text-white"
        >
          본문으로 건너뛰기
        </a>
        <SiteHeader />
        <main id="main" className="min-h-screen pt-[72px]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
