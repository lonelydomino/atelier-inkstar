"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice, sizeLabel } from "@atelier-inkstar/catalog";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { items, subtotal, setQuantity, removeItem, hydrated } = useCart();

  if (!hydrated) {
    return (
      <div className="shop-shell">
        <p className="text-ink-muted">Loading cart…</p>
      </div>
    );
  }

  return (
    <div className="shop-shell space-y-8">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white">
          Cart
        </h1>
        <p className="mt-2 text-ink-muted">Review sizes and quantities before checkout.</p>
      </div>

      {items.length === 0 ? (
        <div className="shop-panel space-y-4 rounded-2xl p-8 text-center">
          <p className="text-ink-muted">Your cart is empty.</p>
          <Link
            href="/"
            className="inline-flex rounded-full bg-ink-gold px-5 py-2.5 text-sm font-semibold text-ink-navy"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.sku}
                className="shop-panel flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-ink-navy-deep">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0 flex-1 space-y-1">
                  <Link
                    href={`/products/${item.productId}`}
                    className="font-[family-name:var(--font-display)] text-xl text-white hover:text-ink-gold"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-ink-muted">{sizeLabel(item.size)}</p>
                  <p className="text-sm text-white">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={item.quantity}
                    onChange={(event) =>
                      setQuantity(item.sku, Number(event.target.value) || 1)
                    }
                    className="w-18 rounded-xl border border-white/10 bg-ink-navy/60 px-3 py-2 text-white outline-none focus:border-ink-gold/50"
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(item.sku)}
                    className="text-sm text-ink-muted hover:text-ink-pink"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="shop-panel h-fit space-y-4 rounded-2xl p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink-muted">Subtotal</span>
              <span className="text-lg text-white">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs leading-5 text-ink-muted">
              Shipping is calculated at fulfillment. Taxes may apply by region.
            </p>
            <Link
              href="/checkout"
              className="flex w-full items-center justify-center rounded-full bg-linear-to-r from-ink-gold to-[#f0d78c] px-6 py-3 text-sm font-semibold text-ink-navy transition hover:brightness-110"
            >
              Checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
