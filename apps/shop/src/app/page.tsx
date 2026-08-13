import { collections } from "@atelier-inkstar/catalog";
import { brand } from "@atelier-inkstar/config/brand";
import Link from "next/link";
import { CatalogToolbar } from "@/components/catalog-toolbar";
import { ProductCard } from "@/components/product-card";
import { filterProducts, parseFilters } from "@/lib/filters";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ShopHomePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters = parseFilters(params);
  const filtered = filterProducts(filters);

  return (
    <div className="shop-shell space-y-8">
      <section className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.28em] text-ink-gold uppercase">
          {brand.domains.shop}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white md:text-5xl">
          The atelier shop
        </h1>
        <p className="max-w-2xl text-base leading-7 text-ink-muted">
          Browse handmade vinyl stickers with size variants and website pricing. Premium
          feel, clearer path to checkout.
        </p>
      </section>

      <section className="flex flex-wrap gap-2">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.id}`}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs tracking-wide text-ink-muted uppercase transition hover:border-ink-gold/40 hover:text-white"
          >
            {collection.name}
          </Link>
        ))}
      </section>

      <CatalogToolbar filters={filters} resultCount={filtered.length} />

      {filtered.length === 0 ? (
        <div className="shop-panel rounded-2xl p-10 text-center text-ink-muted">
          No stickers match those filters. Try clearing search or switching franchise.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
