"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatPrice } from "@atelier-inkstar/catalog";
import { useCart } from "@/lib/cart";

type Method = "stripe" | "paypal";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart, hydrated } = useCart();
  const [method, setMethod] = useState<Method>("stripe");
  const [submitting, setSubmitting] = useState(false);

  if (!hydrated) {
    return (
      <div className="shop-shell">
        <p className="text-ink-muted">Loading checkout…</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="shop-shell space-y-4">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-white">
          Checkout
        </h1>
        <p className="text-ink-muted">Your cart is empty.</p>
        <Link href="/" className="text-ink-gold hover:underline">
          Return to shop
        </Link>
      </div>
    );
  }

  function placeOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    const orderId = `AI-${Date.now().toString(36).toUpperCase()}`;
    const payload = {
      orderId,
      method,
      email: String(form.get("email") ?? ""),
      name: String(form.get("name") ?? ""),
      subtotal,
      items,
    };
    window.sessionStorage.setItem(
      "atelier-inkstar-last-order",
      JSON.stringify(payload),
    );
    clearCart();
    router.push(`/checkout/success?order=${orderId}&method=${method}`);
  }

  return (
    <div className="shop-shell space-y-8">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white">
          Checkout
        </h1>
        <p className="mt-2 max-w-2xl text-ink-muted">
          Phase 2 demo checkout — captures order details locally. Stripe and PayPal
          production keys plug in here next.
        </p>
      </div>

      <form
        onSubmit={placeOrder}
        className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="shop-panel space-y-4 rounded-2xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">
            Contact
          </h2>
          <label className="block space-y-1.5 text-sm">
            <span className="text-ink-muted">Name</span>
            <input
              required
              name="name"
              className="w-full rounded-xl border border-white/10 bg-ink-navy/60 px-3 py-2.5 text-white outline-none focus:border-ink-gold/50"
            />
          </label>
          <label className="block space-y-1.5 text-sm">
            <span className="text-ink-muted">Email</span>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-xl border border-white/10 bg-ink-navy/60 px-3 py-2.5 text-white outline-none focus:border-ink-gold/50"
            />
          </label>

          <div className="space-y-2 pt-2">
            <p className="text-sm text-ink-muted">Payment method</p>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["stripe", "Stripe"],
                  ["paypal", "PayPal"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMethod(value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    method === value
                      ? "bg-ink-gold text-ink-navy"
                      : "border border-white/12 bg-white/5 text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="shop-panel h-fit space-y-4 rounded-2xl p-5">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">
            Order
          </h2>
          <ul className="space-y-2 text-sm text-ink-muted">
            {items.map((item) => (
              <li key={item.sku} className="flex justify-between gap-3">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span className="text-white">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between border-t border-white/10 pt-3 text-white">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-linear-to-r from-ink-gold to-[#f0d78c] px-6 py-3 text-sm font-semibold text-ink-navy transition hover:brightness-110 disabled:opacity-60"
          >
            {submitting ? "Placing order…" : `Pay with ${method === "stripe" ? "Stripe" : "PayPal"}`}
          </button>
          <Link href="/cart" className="block text-center text-sm text-ink-muted hover:text-white">
            Back to cart
          </Link>
        </aside>
      </form>
    </div>
  );
}
