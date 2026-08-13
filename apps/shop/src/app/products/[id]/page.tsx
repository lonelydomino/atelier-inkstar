import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductById,
  getRelatedProducts,
  priceRangeLabel,
} from "@atelier-inkstar/catalog";
import { AddToCartPanel } from "@/components/add-to-cart-panel";
import { ProductCard } from "@/components/product-card";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const { products } = await import("@atelier-inkstar/catalog");
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="shop-shell space-y-12">
      <Link href="/" className="text-sm text-ink-muted hover:text-white">
        ← Back to shop
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="shop-panel overflow-hidden rounded-3xl">
          <div className="relative aspect-square bg-ink-navy-deep">
            <Image
              src={product.image}
              alt={`${product.name} vinyl sticker`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.28em] text-ink-gold uppercase">
              {product.franchise}
              {product.spicy ? " · Spicy" : ""}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white md:text-5xl">
              {product.name}
            </h1>
            <p className="text-sm text-ink-muted">
              {priceRangeLabel(product.baseSku, "website")}
            </p>
            <p className="max-w-xl text-base leading-7 text-ink-muted">
              {product.description}
            </p>
          </div>

          <AddToCartPanel product={product} />

          <div className="text-sm text-ink-muted">
            <p>Sizes: 3″ · 4″ · 5″ · 6″</p>
            <p className="mt-1">Material: premium vinyl + glossy laminate, hand-cut.</p>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="space-y-5">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">
            Related stickers
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
