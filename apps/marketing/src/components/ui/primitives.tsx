import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <p className="text-xs font-semibold tracking-[0.28em] text-ink-gold uppercase">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}

type LuxuryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function LuxuryButton({
  href,
  children,
  variant = "primary",
}: LuxuryButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-linear-to-r from-ink-gold to-[#f0d78c] text-ink-navy shadow-[0_12px_40px_rgba(212,175,55,0.25)] hover:brightness-110"
      : "border border-white/15 bg-white/5 text-white hover:border-ink-gold/50 hover:bg-white/8";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition ${styles}`}
    >
      {children}
    </a>
  );
}
