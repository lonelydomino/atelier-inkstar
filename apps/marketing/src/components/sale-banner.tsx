import { animeExpoSale2026, isPromotionActive } from "@/lib/promotions";

export function SaleBanner() {
  if (!isPromotionActive(animeExpoSale2026)) return null;

  const { headline, datesLabel, discountLabel } = animeExpoSale2026;

  return (
    <div
      role="status"
      aria-live="polite"
      className="sale-banner fixed inset-x-0 top-16 z-40 overflow-hidden border-b border-ink-gold/30"
    >
      <div className="sale-banner-shine pointer-events-none absolute inset-0" aria-hidden />
      <div className="section-shell relative flex min-h-[5rem] items-center justify-center py-6 text-center sm:min-h-[6.25rem] sm:py-7">
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <span className="sale-banner-sparkle text-2xl text-ink-gold sm:text-3xl" aria-hidden>
            ✦
          </span>
          <p className="flex flex-col items-center gap-1.5 sm:gap-2">
            <span className="sale-banner-headline">{headline}</span>
            <span className="sale-banner-subline">
              <span className="sale-banner-dates">{datesLabel}</span>{" "}
              <span className="sale-banner-discount">{discountLabel}</span>
            </span>
          </p>
          <span className="sale-banner-sparkle text-2xl text-ink-gold sm:text-3xl" aria-hidden>
            ✦
          </span>
        </div>
      </div>
    </div>
  );
}
