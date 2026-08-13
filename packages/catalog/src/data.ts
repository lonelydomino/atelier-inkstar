import type { Collection, CollectionId, MarketplaceLink, Product } from "./types";

/** Shop + marketing catalog seed (static until Phase 3 Supabase). */
export const products: Product[] = [
  {
    id: "lady-of-the-scales",
    baseSku: "E7-LADYSCALES",
    name: "Lady of the Scales",
    character: "Lady of the Scales",
    franchise: "Epic Seven",
    accent: "#7ec8ff",
    image: "/products/lady-of-the-scales.png",
    description:
      "A celestial balance of steel and silk — premium vinyl with a glossy laminate finish, cut by hand for a clean collectible edge.",
    category: "standard",
    spicy: false,
    available: true,
    collections: ["treasure", "epic-seven"],
  },
  {
    id: "seductive-devil",
    baseSku: "AI-SEDDEVIL",
    name: "Seductive Devil",
    character: "Seductive Devil",
    franchise: "Atelier Original",
    accent: "#ff6b8a",
    image: "/products/makima.png",
    description:
      "A spicy atelier original — rich color, glossy laminate, and a clean hand-cut edge for collectors who like a little heat.",
    category: "spicy",
    spicy: true,
    available: true,
    collections: ["treasure", "spicy"],
  },
  {
    id: "nami-robin",
    baseSku: "OP-NAMIROBIN",
    name: "Nami & Robin",
    character: "Nami & Robin",
    franchise: "One Piece",
    accent: "#ff8c42",
    image: "/products/nami-robin.png",
    description:
      "A dual-character treasure for One Piece collectors — bold linework, saturated print, hand-finished vinyl.",
    category: "spicy",
    spicy: true,
    available: true,
    collections: ["treasure", "one-piece", "spicy"],
  },
  {
    id: "rhianna-luciella",
    baseSku: "E7-RHIANNALUCIELLA",
    name: "Rhianna & Luciella",
    character: "Rhianna & Luciella",
    franchise: "Epic Seven",
    accent: "#c9a0ff",
    image: "/products/rhianna-luciella.png",
    description:
      "Paired elegance from Epic Seven — soft glow accents on premium vinyl, laminated and cut in the atelier.",
    category: "standard",
    spicy: false,
    available: true,
    collections: ["treasure", "epic-seven"],
  },
  {
    id: "setsuka",
    baseSku: "E7-SETSUKA",
    name: "Setsuka",
    character: "Setsuka",
    franchise: "Epic Seven",
    accent: "#e85d75",
    image: "/products/setsuka.png",
    description:
      "Sharp elegance and floral heat — a spicy Epic Seven piece finished in glossy laminated vinyl.",
    category: "spicy",
    spicy: true,
    available: true,
    collections: ["treasure", "epic-seven", "spicy"],
  },
  {
    id: "tamamo",
    baseSku: "FGO-TAMAMO",
    name: "Tamamo no Mae",
    character: "Tamamo no Mae",
    franchise: "Fate/Grand Order",
    accent: "#ffb6cc",
    image: "/products/tamamo.png",
    description:
      "Foxfire charm for Fate collectors — premium print, soft-pink warmth, and a clean hand-cut silhouette.",
    category: "spicy",
    spicy: true,
    available: true,
    collections: ["treasure", "fate", "spicy"],
  },
  {
    id: "nurse-aria",
    baseSku: "E7-NURSEARIA",
    name: "Nurse Aria",
    character: "Nurse Aria",
    franchise: "Epic Seven",
    accent: "#b388ff",
    image: "/products/nurse-aria.png",
    description:
      "Sweet care with a dangerous smile — spicy Epic Seven vinyl, laminated for lasting color.",
    category: "spicy",
    spicy: true,
    available: true,
    collections: ["treasure", "epic-seven", "spicy"],
  },
  {
    id: "unohana",
    baseSku: "BLEACH-UNOHANA",
    name: "Retsu Unohana",
    character: "Retsu Unohana",
    franchise: "Bleach",
    accent: "#9b7bff",
    image: "/products/unohana.png",
    description:
      "Quiet grace, deadly history — a Bleach collectible on premium vinyl with atelier-cut edges.",
    category: "spicy",
    spicy: true,
    available: true,
    collections: ["treasure", "bleach", "spicy"],
  },
];

/** Marketing homepage featured grid — same seed catalog for now. */
export const featuredProducts = products;

export const collections: Collection[] = [
  {
    id: "treasure",
    name: "Treasure Collection",
    description: "Featured atelier stickers available now.",
  },
  {
    id: "epic-seven",
    name: "Epic Seven",
    description: "Heroes and villains from Orbis, cut in vinyl.",
  },
  {
    id: "chainsaw-man",
    name: "Chainsaw Man",
    description: "Devil hunters and control, sticker-sized.",
  },
  {
    id: "one-piece",
    name: "One Piece",
    description: "Crew energy for collectors who chase the next island.",
  },
  {
    id: "fate",
    name: "Fate",
    description: "Servants rendered for the glass case — and the laptop lid.",
  },
  {
    id: "bleach",
    name: "Bleach",
    description: "Soul Society icons with atelier finish.",
  },
  {
    id: "spicy",
    name: "Spicy",
    description: "Heat-forward pieces for collectors who want the vibe.",
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

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCollection(collectionId: CollectionId): Product[] {
  return products.filter((product) => product.collections.includes(collectionId));
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (candidate) =>
        candidate.id !== product.id &&
        (candidate.franchise === product.franchise ||
          candidate.collections.some((c) => product.collections.includes(c))),
    )
    .slice(0, limit);
}

export function getFranchises(): string[] {
  return [...new Set(products.map((product) => product.franchise))].sort();
}
