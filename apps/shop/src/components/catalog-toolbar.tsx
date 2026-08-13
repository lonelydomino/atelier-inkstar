import Link from "next/link";
import { getFranchises } from "@atelier-inkstar/catalog";
import type { ProductFilters } from "@/lib/filters";

type Props = {
  filters: ProductFilters;
  resultCount: number;
};

function buildHref(filters: ProductFilters, patch: Partial<ProductFilters>) {
  const next = { ...filters, ...patch };
  const params = new URLSearchParams();
  if (next.q) params.set("q", next.q);
  if (next.franchise) params.set("franchise", next.franchise);
  if (next.category && next.category !== "all") params.set("category", next.category);
  if (next.spicy && next.spicy !== "all") params.set("spicy", next.spicy);
  if (next.availability && next.availability !== "all") {
    params.set("availability", next.availability);
  }
  if (next.collection) params.set("collection", next.collection);
  const qs = params.toString();
  return qs ? `/?${qs}` : "/";
}

export function CatalogToolbar({ filters, resultCount }: Props) {
  const franchises = getFranchises();

  return (
    <div className="shop-panel space-y-4 rounded-2xl p-4 md:p-5">
      <form className="flex flex-col gap-3 md:flex-row md:items-end" action="/" method="get">
        {filters.collection ? (
          <input type="hidden" name="collection" value={filters.collection} />
        ) : null}
        <label className="flex flex-1 flex-col gap-1.5 text-sm">
          <span className="text-ink-muted">Search</span>
          <input
            name="q"
            defaultValue={filters.q ?? ""}
            placeholder="Character, franchise, SKU…"
            className="rounded-xl border border-white/10 bg-ink-navy/60 px-3 py-2.5 text-white outline-none focus:border-ink-gold/50"
          />
        </label>
        <label className="flex min-w-40 flex-col gap-1.5 text-sm">
          <span className="text-ink-muted">Franchise</span>
          <select
            name="franchise"
            defaultValue={filters.franchise ?? ""}
            className="rounded-xl border border-white/10 bg-ink-navy/60 px-3 py-2.5 text-white outline-none focus:border-ink-gold/50"
          >
            <option value="">All</option>
            {franchises.map((franchise) => (
              <option key={franchise} value={franchise}>
                {franchise}
              </option>
            ))}
          </select>
        </label>
        <label className="flex min-w-36 flex-col gap-1.5 text-sm">
          <span className="text-ink-muted">Heat</span>
          <select
            name="spicy"
            defaultValue={filters.spicy ?? "all"}
            className="rounded-xl border border-white/10 bg-ink-navy/60 px-3 py-2.5 text-white outline-none focus:border-ink-gold/50"
          >
            <option value="all">All</option>
            <option value="spicy">Spicy</option>
            <option value="standard">Standard</option>
          </select>
        </label>
        <label className="flex min-w-36 flex-col gap-1.5 text-sm">
          <span className="text-ink-muted">Availability</span>
          <select
            name="availability"
            defaultValue={filters.availability ?? "all"}
            className="rounded-xl border border-white/10 bg-ink-navy/60 px-3 py-2.5 text-white outline-none focus:border-ink-gold/50"
          >
            <option value="all">All</option>
            <option value="available">In stock</option>
            <option value="sold-out">Sold out</option>
          </select>
        </label>
        <button
          type="submit"
          className="rounded-xl bg-ink-gold px-5 py-2.5 text-sm font-semibold text-ink-navy transition hover:brightness-110"
        >
          Apply
        </button>
      </form>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-ink-muted">
        <p>
          {resultCount} product{resultCount === 1 ? "" : "s"}
        </p>
        {(filters.q ||
          filters.franchise ||
          (filters.spicy && filters.spicy !== "all") ||
          (filters.availability && filters.availability !== "all")) && (
          <Link href={buildHref(filters, {
            q: undefined,
            franchise: undefined,
            spicy: "all",
            availability: "all",
            category: "all",
          })} className="text-ink-gold hover:underline">
            Clear filters
          </Link>
        )}
      </div>
    </div>
  );
}
