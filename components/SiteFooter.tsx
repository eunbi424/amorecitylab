import Image from "next/image";
import Link from "next/link";
import { brand, location, navigation, site } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="bg-surface-inverse text-white">
      <div className="container-lab py-3xl">
        <div className="grid gap-2xl lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src={brand.logoWhite.src}
              alt="CITY LAB diagnosis & consulting"
              width={brand.logoWhite.width}
              height={brand.logoWhite.height}
              className="h-[52px] w-auto"
            />
            <p className="mt-md text-[0.625rem] tracking-[0.24em] text-white/50">AMOREPACIFIC</p>
            <p className="mt-md max-w-sm whitespace-pre-line text-caption leading-relaxed text-white/60">
              {"정밀 진단 맞춤 뷰티 솔루션을 제공하는 도심 속 피부 연구소.\n데이터를 기반으로 개인 맞춤 솔루션을 설계합니다."}
            </p>
            <p className="mt-sm whitespace-pre-line text-caption italic text-white/40">{site.taglineEn}</p>
          </div>

          <div>
            <p className="eyebrow">Menu</p>
            <ul className="mt-md space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-caption text-white/70 transition-colors duration-fast hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Visit</p>
            <ul className="mt-md space-y-3 text-caption text-white/70">
              <li>{location.address}</li>
              <li>{site.email}</li>
              <li className="pt-2 text-white/50">{location.hoursSummary}</li>
            </ul>
          </div>
        </div>

        <div className="mt-3xl border-t border-white/10 pt-lg text-[0.6875rem] text-white/40">
          <p>© {new Date().getFullYear()} AMOREPACIFIC Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
