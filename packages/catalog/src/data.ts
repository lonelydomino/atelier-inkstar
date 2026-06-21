import type { FeaturedProduct, MarketplaceLink } from "./types";

/** Phase 1 featured stickers — product mockups in apps/marketing/public/products/ */
export const featuredProducts: FeaturedProduct[] = [
  {
    id: "makima",
    baseSku: "CSM-MAKIMA",
    name: "Makima Eclipse",
    character: "Makima",
    franchise: "Chainsaw Man",
    accent: "#ff6b8a",
    image: "/products/makima.png",
  },
  {
    id: "unohana",
    baseSku: "BLEACH-UNOHANA",
    name: "Unohana After Dark",
    character: "Retsu Unohana",
    franchise: "Bleach",
    accent: "#9b7bff",
    image: "/products/unohana.png",
  },
  {
    id: "tamamo",
    baseSku: "FGO-TAMAMO",
    name: "Tamamo Celestine",
    character: "Tamamo no Mae",
    franchise: "Fate/Grand Order",
    accent: "#ffb6cc",
    image: "/products/tamamo.png",
  },
  {
    id: "lady-of-the-scales",
    baseSku: "LOS-LADY",
    name: "Lady of the Scales",
    character: "Lady of the Scales",
    franchise: "Original",
    accent: "#7ec8ff",
    image: "/products/lady-of-the-scales.png",
  },
  {
    id: "maid-luna",
    baseSku: "E7-MAIDLUNA",
    name: "Maid Luna",
    character: "Maid Luna",
    franchise: "Epic Seven",
    accent: "#d4af37",
    image: "/products/maid-luna.png",
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
    href: "https://shop.tiktok.com/us/store/atelierinkstar/7494648125875652077",
    accent: "#25f4ee",
  },
  {
    id: "ebay",
    name: "eBay",
    description: "Collectible finds & rare editions",
    href: "https://www.ebay.com/usr/atelierinkstarshop",
    accent: "#e53238",
  },
];
