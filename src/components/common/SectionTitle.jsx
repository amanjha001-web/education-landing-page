
const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div
      className={[
        "flex max-w-3xl flex-col gap-3",
        alignment[align] || alignment.center,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <span
          className={[
            "text-sm font-semibold uppercase tracking-wider text-primary",
            eyebrowClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className={[
            "text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
            titleClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={[
            "max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg",
            descriptionClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
