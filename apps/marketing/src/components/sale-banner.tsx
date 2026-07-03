import { animeExpoSale2026, isPromotionActive } from "@/lib/promotions";

export function SaleBanner() {
  if (!isPromotionActive(animeExpoSale2026)) return null;

  const { headline, datesLabel } = animeExpoSale2026;

  return (
    <div
      role="status"
      aria-live="polite"
      className="sale-banner fixed inset-x-0 top-16 z-40 overflow-hidden border-b border-ink-gold/30"
    >
      <div className="sale-banner-shine pointer-events-none absolute inset-0" aria-hidden />
      <div className="section-shell relative flex min-h-[4.5rem] items-center justify-center py-5 text-center sm:min-h-[5.5rem] sm:py-6">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span
            className="sale-banner-sparkle text-xl text-ink-gold sm:text-2xl md:text-3xl"
            aria-hidden
          >
            ✦
          </span>
          <p className="sale-banner-copy flex flex-col items-center gap-1 text-xl tracking-wide sm:text-2xl md:text-3xl">
            <span className="sale-banner-headline shimmer-text">{headline}</span>
            <span className="sale-banner-dates text-white">{datesLabel}</span>
          </p>
          <span
            className="sale-banner-sparkle text-xl text-ink-gold sm:text-2xl md:text-3xl"
            aria-hidden
          >
            ✦
          </span>
        </div>
      </div>
    </div>
  );
}
