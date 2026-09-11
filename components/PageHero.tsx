type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  meta?: readonly { label: string; value: string }[];
};

export default function PageHero({ eyebrow, title, description, meta }: PageHeroProps) {
  return (
    <section className="border-b border-line-subtle bg-surface-ivory">
      <div className="container-lab py-2xl md:py-3xl">
        <div className="reveal max-w-narrow">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-md whitespace-pre-line break-keep text-h1 display-serif md:text-display-2">{title}</h1>
          {description ? (
            <p className="mt-lg max-w-xl whitespace-pre-line break-keep text-body-lg text-ink-secondary">
              {description}
            </p>
          ) : null}
        </div>

        {meta && meta.length > 0 ? (
          <dl className="mt-2xl grid grid-cols-2 gap-lg border-t border-line pt-lg md:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-eyebrow uppercase text-ink-tertiary">{item.label}</dt>
                <dd className="mt-2xs text-body text-ink-primary">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
