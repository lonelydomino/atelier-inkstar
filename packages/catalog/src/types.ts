export type ProductCategory = "standard" | "spicy";

export type CollectionId =
  | "treasure"
  | "epic-seven"
  | "chainsaw-man"
  | "one-piece"
  | "fate"
  | "bleach"
  | "spicy";

/** Canonical product shape used by shop + marketing featured grid. */
export type Product = {
  id: string;
  baseSku: string;
  name: string;
  character: string;
  franchise: string;
  accent: string;
  image: string;
  description: string;
  category: ProductCategory;
  spicy: boolean;
  available: boolean;
  collections: CollectionId[];
};

/** @deprecated Prefer Product — kept as alias for marketing imports. */
export type FeaturedProduct = Product;

export type MarketplaceLink = {
  id: string;
  name: string;
  description: string;
  href: string;
  accent: string;
};

export type Collection = {
  id: CollectionId;
  name: string;
  description: string;
};
