export type VariantSize = "3IN" | "4IN" | "5IN" | "6IN";

export type PricingPlatform = "website" | "ebay" | "etsy";

export type GeneratedVariant = {
  sku: string;
  size: VariantSize;
  price: number;
  platform: PricingPlatform;
};

const DEFAULT_SIZES: VariantSize[] = ["3IN", "4IN", "5IN", "6IN"];

/** Website storefront ladder (Phase 2 / Phase 3 plan). */
export const WEBSITE_PRICING: Record<VariantSize, number> = {
  "3IN": 5.49,
  "4IN": 7.49,
  "5IN": 9.49,
  "6IN": 11.49,
};

export const EBAY_PRICING: Record<VariantSize, number> = {
  "3IN": 7.49,
  "4IN": 9.49,
  "5IN": 11.49,
  "6IN": 13.49,
};

export const ETSY_PRICING: Record<VariantSize, number> = {
  "3IN": 5.99,
  "4IN": 7.99,
  "5IN": 9.99,
  "6IN": 11.99,
};

const PLATFORM_PRICING: Record<PricingPlatform, Record<VariantSize, number>> = {
  website: WEBSITE_PRICING,
  ebay: EBAY_PRICING,
  etsy: ETSY_PRICING,
};

export function sizeLabel(size: VariantSize): string {
  return size.replace("IN", '"');
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function priceRangeLabel(
  baseSku: string,
  platform: PricingPlatform = "website",
): string {
  const variants = generateVariants(baseSku, { platform });
  const prices = variants.map((v) => v.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  if (min === max) return formatPrice(min);
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}

/** Auto-generate size variants from a base SKU. */
export function generateVariants(
  baseSku: string,
  options?: {
    sizes?: VariantSize[];
    platform?: PricingPlatform;
    pricing?: Partial<Record<VariantSize, number>>;
    overrides?: Partial<Record<VariantSize, number>>;
  },
): GeneratedVariant[] {
  const sizes = options?.sizes ?? DEFAULT_SIZES;
  const platform = options?.platform ?? "website";
  const pricing = {
    ...PLATFORM_PRICING[platform],
    ...options?.pricing,
  };
  const overrides = options?.overrides ?? {};

  return sizes.map((size) => ({
    sku: `${baseSku}-${size}`,
    size,
    price: overrides[size] ?? pricing[size],
    platform,
  }));
}
