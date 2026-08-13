"use client";

import { useMemo, useState } from "react";
import {
  formatPrice,
  generateVariants,
  sizeLabel,
  type Product,
  type VariantSize,
} from "@atelier-inkstar/catalog";
import { useCart } from "@/lib/cart";

export function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const variants = useMemo(
    () => generateVariants(product.baseSku, { platform: "website" }),
    [product.baseSku],
  );
  const [size, setSize] = useState<VariantSize>(variants[0]?.size ?? "4IN");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selected = variants.find((variant) => variant.size === size) ?? variants[0];

  function handleAdd() {
    if (!selected || !product.available) return;
    addItem(
      {
        productId: product.id,
        name: product.name,
        image: product.image,
        baseSku: product.baseSku,
        size: selected.size,
        sku: selected.sku,
        price: selected.price,
      },
      quantity,
    );
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="shop-panel space-y-5 rounded-2xl p-5">
      <div>
        <p className="text-sm text-ink-muted">Size</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {variants.map((variant) => {
            const active = variant.size === size;
            return (
              <button
                key={variant.size}
                type="button"
                onClick={() => setSize(variant.size)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-ink-gold text-ink-navy"
                    : "border border-white/12 bg-white/5 text-white hover:border-ink-gold/40"
                }`}
              >
                {sizeLabel(variant.size)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-ink-muted">Price</p>
          <p className="font-[family-name:var(--font-display)] text-3xl text-white">
            {selected ? formatPrice(selected.price) : "—"}
          </p>
          <p className="mt-1 text-xs text-ink-muted">{selected?.sku}</p>
        </div>
        <label className="flex flex-col gap-1 text-sm text-ink-muted">
          Qty
          <input
            type="number"
            min={1}
            max={20}
            value={quantity}
            onChange={(event) =>
              setQuantity(Math.max(1, Number(event.target.value) || 1))
            }
            className="w-20 rounded-xl border border-white/10 bg-ink-navy/60 px-3 py-2 text-white outline-none focus:border-ink-gold/50"
          />
        </label>
      </div>

      <button
        type="button"
        disabled={!product.available}
        onClick={handleAdd}
        className="w-full rounded-full bg-linear-to-r from-ink-gold to-[#f0d78c] px-6 py-3 text-sm font-semibold text-ink-navy transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {!product.available
          ? "Sold out"
          : added
            ? "Added to cart"
            : "Add to cart"}
      </button>
      <p className="text-xs leading-5 text-ink-muted">
        Stripe + PayPal checkout is wired as a demo flow for Phase 2. Live payments land
        with production keys.
      </p>
    </div>
  );
}
