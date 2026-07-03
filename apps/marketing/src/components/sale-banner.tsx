import Link from "next/link";
import { animeExpoSale2026, isPromotionActive } from "@/lib/promotions";

export function SaleBanner() {
  if (!isPromotionActive(animeExpoSale2026)) return null;

  const { headline, datesLabel, ctaHref, ctaLabel } = animeExpoSale2026;

  return (
    <div
      role="status"
      aria-live="polite"
      className="sale-banner fixed inset-x-0 top-16 z-40 overflow-hidden border-b border-ink-gold/30"
    >
      <div className="sale-banner-shine pointer-events-none absolute inset-0" aria-hidden />
      <div className="section-shell relative flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center sm:gap-x-4">
        <span className="sale-banner-sparkle hidden text-ink-gold sm:inline" aria-hidden>
          ✦
        </span>
        <p className="text-sm font-semibold tracking-wide sm:text-base">
          <span className="shimmer-text">{headline}</span>{" "}
          <span className="text-white">{datesLabel} !</span>
        </p>
        <span className="sale-banner-sparkle hidden text-ink-gold sm:inline" aria-hidden>
          ✦
        </span>
        <Link
          href={ctaHref}
          className="ml-1 rounded-full border border-ink-gold/50 bg-ink-gold/10 px-3 py-0.5 text-xs font-bold tracking-wider text-ink-gold uppercase transition hover:bg-ink-gold/20 sm:ml-2 sm:px-4 sm:py-1 sm:text-[0.7rem]"
        >
          {ctaLabel} →
        </Link>
      </div>
    </div>
  );
}
