
const Badge = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseStyles =
    "inline-flex w-fit items-center gap-1.5 rounded-full font-medium whitespace-nowrap transition-colors";

  const variants = {
    primary:
      "bg-primary/10 text-primary",

    secondary:
      "bg-secondary text-secondary-foreground",

    success:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",

    warning:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400",

    danger:
      "bg-red-500/10 text-red-600 dark:text-red-400",

    outline:
      "border border-border bg-transparent text-muted-foreground",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={[
        baseStyles,
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
};

export default Badge;
