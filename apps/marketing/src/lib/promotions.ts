export type Promotion = {
  id: string;
  headline: string;
  datesLabel: string;
  discountLabel: string;
  start: Date;
  end: Date;
  ctaHref: string;
  ctaLabel: string;
};

/** Anime Expo 2026 — auto-hides after July 6 (Pacific) */
export const animeExpoSale2026: Promotion = {
  id: "anime-expo-2026",
  headline: "Anime Expo 2026 Sale!",
  datesLabel: "July 2 - July 6 !",
  discountLabel: "25% off!",
  start: new Date("2026-07-02T00:00:00-07:00"),
  end: new Date("2026-07-07T00:00:00-07:00"),
  ctaHref: "#marketplaces",
  ctaLabel: "Shop the sale",
};

export function isPromotionActive(
  promotion: Promotion,
  now: Date = new Date(),
): boolean {
  return now >= promotion.start && now < promotion.end;
}
