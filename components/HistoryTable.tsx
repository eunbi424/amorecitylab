import { history } from "@/lib/site-data";

type HistoryTableProps = {
  limit?: number;
};

export default function HistoryTable({ limit }: HistoryTableProps) {
  const rows = limit ? history.items.slice(-limit) : history.items;

  return (
    <>
      {/* 데스크톱: 기간 / 세부내용 / 연구성과 3열 */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-y border-ink-primary">
              <th className="w-[160px] py-md pr-md text-eyebrow uppercase tracking-eyebrow text-ink-tertiary">
                {history.columns.period}
              </th>
              <th className="py-md pr-md text-eyebrow uppercase tracking-eyebrow text-ink-tertiary">
                {history.columns.detail}
              </th>
              <th className="py-md text-eyebrow uppercase tracking-eyebrow text-ink-tertiary">
                {history.columns.outcome}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.period}-${row.detail}`} className="border-b border-line-subtle align-top">
                <th scope="row" className="py-lg pr-md font-display text-body font-normal text-ink-primary">
                  {row.period}
                </th>
                <td className="py-lg pr-md text-caption leading-relaxed text-ink-primary">{row.detail}</td>
                <td className="py-lg whitespace-pre-line text-caption leading-relaxed text-ink-secondary">
                  {row.outcome}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 모바일: 의미 단위로 쌓는 카드 */}
      <ul className="divide-y divide-line-subtle border-y border-ink-primary md:hidden">
        {rows.map((row) => (
          <li key={`${row.period}-${row.detail}`} className="grid gap-sm py-lg">
            <p className="font-display text-body text-ink-primary">{row.period}</p>
            <div>
              <p className="text-eyebrow uppercase tracking-eyebrow text-ink-tertiary">{history.columns.detail}</p>
              <p className="mt-1 text-caption leading-relaxed text-ink-primary">{row.detail}</p>
            </div>
            <div>
              <p className="text-eyebrow uppercase tracking-eyebrow text-ink-tertiary">{history.columns.outcome}</p>
              <p className="mt-1 whitespace-pre-line text-caption leading-relaxed text-ink-secondary">
                {row.outcome}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
