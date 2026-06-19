export type VariantSize = "3IN" | "4IN" | "5IN" | "6IN";

export type GeneratedVariant = {
  sku: string;
  size: VariantSize;
  price: number;
};

const DEFAULT_SIZES: VariantSize[] = ["3IN", "4IN", "5IN", "6IN"];

const DEFAULT_PRICING: Record<VariantSize, number> = {
  "3IN": 4.49,
  "4IN": 5.49,
  "5IN": 6.49,
  "6IN": 7.49,
};

/** Auto-generate size variants from a base SKU (Phase 2 catalog engine). */
export function generateVariants(
  baseSku: string,
  options?: {
    sizes?: VariantSize[];
    pricing?: Partial<Record<VariantSize, number>>;
    overrides?: Partial<Record<VariantSize, number>>;
  },
): GeneratedVariant[] {
  const sizes = options?.sizes ?? DEFAULT_SIZES;
  const pricing = { ...DEFAULT_PRICING, ...options?.pricing };
  const overrides = options?.overrides ?? {};

  return sizes.map((size) => ({
    sku: `${baseSku}-${size}`,
    size,
    price: overrides[size] ?? pricing[size],
  }));
}
