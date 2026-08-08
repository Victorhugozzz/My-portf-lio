interface SectionHeadingProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">
        <span aria-hidden="true" className="eyebrow__line" />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}
