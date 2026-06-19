/** Canonical paths for copied brand assets in /public */
export const brandAssets = {
  wordmark: "/brand/wordmark.png",
  emblem: "/brand/emblem.png",
  /**
   * TEMP: chizuru1.png — Milo will replace after editing a final hero render.
   * Source: Desktop/Atelier Inkstar/02 Mascots/Chizuru/chizuru1.png
   * Used by: hero section + Chizuru mascot section (same file).
   */
  chizuruHero: "/chizuru/hero.png",
  decor: {
    starlineLeft: "/decor/starline-left.png",
    starlineRight: "/decor/starline-right.png",
  },
} as const;
