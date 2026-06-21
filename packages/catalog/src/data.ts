import type { FeaturedProduct, MarketplaceLink } from "./types";

/** Phase 1 featured stickers — replace image URLs when assets are in R2. */
export const featuredProducts: FeaturedProduct[] = [
  {
    id: "mythra",
    baseSku: "XC2-MYTHRA",
    name: "Mythra Radiant",
    character: "Mythra",
    franchise: "Xenoblade Chronicles 2",
    accent: "#7ec8ff",
  },
  {
    id: "makima",
    baseSku: "CSM-MAKIMA",
    name: "Makima Eclipse",
    character: "Makima",
    franchise: "Chainsaw Man",
    accent: "#ff6b8a",
  },
  {
    id: "ahri",
    baseSku: "LOL-AHRI",
    name: "Ahri Celestine",
    character: "Ahri",
    franchise: "League of Legends",
    accent: "#ffb6cc",
  },
  {
    id: "setsuka",
    baseSku: "SC-SETSUKA",
    name: "Setsuka Moonpetal",
    character: "Setsuka",
    franchise: "Soulcalibur",
    accent: "#e8d4ff",
  },
  {
    id: "vivian",
    baseSku: "ZZZ-VIVIAN",
    name: "Vivian Starshade",
    character: "Vivian",
    franchise: "Zenless Zone Zero",
    accent: "#d4af37",
  },
];

export const marketplaceLinks: MarketplaceLink[] = [
  {
    id: "etsy",
    name: "Etsy",
    description: "Handcrafted listings & limited drops",
    href: "https://atelierinkstar.etsy.com",
    accent: "#f1641e",
  },
  {
    id: "tiktok",
    name: "TikTok Shop",
    description: "Live drops & trending releases",
    href: "https://www.tiktok.com/shop",
    accent: "#25f4ee",
  },
  {
    id: "ebay",
    name: "eBay",
    description: "Collectible finds & rare editions",
    href: "https://ebay.com",
    accent: "#e53238",
  },
];
