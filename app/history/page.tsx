import type { Metadata } from "next";
import Link from "next/link";
import HistoryTable from "@/components/HistoryTable";
import PageHero from "@/components/PageHero";
import { history } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "운영·연구 연혁",
  description: history.lead,
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow={history.eyebrow}
        title={history.title}
        description={history.lead}
      />

      <section className="container-lab py-section">
        <HistoryTable />

        <div className="mt-2xl flex flex-wrap gap-sm">
          <Link
            href="/researchers"
            className="inline-flex items-center rounded-pill bg-primary px-lg py-4 text-caption text-white transition-colors duration-fast hover:bg-primary-800"
          >
            연구원 소개
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
