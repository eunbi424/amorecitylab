type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-narrow text-center" : "max-w-narrow"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={`mt-sm whitespace-pre-line break-keep text-h2 display-serif md:text-h1 ${
          tone === "dark" ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-md whitespace-pre-line break-keep text-body-lg ${tone === "dark" ? "text-white/65" : "text-ink-secondary"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
