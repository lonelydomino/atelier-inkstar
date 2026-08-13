import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, getProductsByCollection } from "@atelier-inkstar/catalog";
import { ProductCard } from "@/components/product-card";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return collections.map((collection) => ({ id: collection.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const collection = collections.find((entry) => entry.id === id);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { id } = await params;
  const collection = collections.find((entry) => entry.id === id);
  if (!collection) notFound();

  const items = getProductsByCollection(collection.id);

  return (
    <div className="shop-shell space-y-8">
      <div className="space-y-3">
        <Link href="/" className="text-sm text-ink-muted hover:text-white">
          ← All products
        </Link>
        <p className="text-xs font-semibold tracking-[0.28em] text-ink-gold uppercase">
          Collection
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white md:text-5xl">
          {collection.name}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-ink-muted">
          {collection.description}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="shop-panel rounded-2xl p-10 text-center text-ink-muted">
          No products in this collection yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
