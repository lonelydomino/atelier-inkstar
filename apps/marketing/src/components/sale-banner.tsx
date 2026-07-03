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
        <p className="text-lg font-semibold tracking-wide sm:text-xl md:text-2xl">
          <span className="sale-banner-sparkle mr-2 text-lg text-ink-gold sm:text-xl md:text-2xl" aria-hidden>
            ✦
          </span>
          <span className="shimmer-text">{headline}</span>{" "}
          <span className="text-white">{datesLabel} !</span>
          <span className="sale-banner-sparkle ml-2 text-lg text-ink-gold sm:text-xl md:text-2xl" aria-hidden>
            ✦
          </span>
        </p>
      </div>
    </div>
  );
}
