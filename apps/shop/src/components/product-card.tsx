import Image from "next/image";
import Link from "next/link";
import {
  formatPrice,
  generateVariants,
  type Product,
} from "@atelier-inkstar/catalog";

export function ProductCard({ product }: { product: Product }) {
  const variants = generateVariants(product.baseSku, { platform: "website" });
  const from = Math.min(...variants.map((v) => v.price));

  return (
    <Link
      href={`/products/${product.id}`}
      className="shop-panel group overflow-hidden rounded-2xl transition hover:border-ink-gold/40"
    >
      <div className="relative aspect-square overflow-hidden bg-ink-navy-deep">
        <Image
          src={product.image}
          alt={`${product.name} vinyl sticker`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.spicy ? (
          <span className="absolute top-3 left-3 rounded-full bg-ink-pink/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-ink-navy uppercase">
            Spicy
          </span>
        ) : null}
        {!product.available ? (
          <span className="absolute top-3 right-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
            Sold out
          </span>
        ) : null}
      </div>
      <div className="space-y-1 p-4">
        <p className="text-xs tracking-[0.18em] text-ink-gold uppercase">
          {product.franchise}
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-xl text-white">
          {product.name}
        </h3>
        <p className="text-sm text-ink-muted">From {formatPrice(from)}</p>
      </div>
    </Link>
  );
}
