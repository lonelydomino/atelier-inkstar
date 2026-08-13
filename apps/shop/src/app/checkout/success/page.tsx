"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { formatPrice } from "@atelier-inkstar/catalog";

type LastOrder = {
  orderId: string;
  method: string;
  email: string;
  name: string;
  subtotal: number;
};

function SuccessContent() {
  const params = useSearchParams();
  const [order, setOrder] = useState<LastOrder | null>(null);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem("atelier-inkstar-last-order");
      if (raw) setOrder(JSON.parse(raw) as LastOrder);
    } catch {
      setOrder(null);
    }
  }, []);

  const orderId = params.get("order") ?? order?.orderId ?? "—";
  const method = params.get("method") ?? order?.method ?? "stripe";

  return (
    <div className="shop-shell max-w-xl space-y-6">
      <p className="text-xs font-semibold tracking-[0.28em] text-ink-gold uppercase">
        Order received
      </p>
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white">
        Thank you
      </h1>
      <div className="shop-panel space-y-3 rounded-2xl p-5 text-sm text-ink-muted">
        <p>
          Order <span className="text-white">{orderId}</span>
        </p>
        <p>
          Method <span className="text-white">{method}</span>
        </p>
        {order ? (
          <>
            <p>
              Customer <span className="text-white">{order.name}</span> ({order.email})
            </p>
            <p>
              Subtotal <span className="text-white">{formatPrice(order.subtotal)}</span>
            </p>
          </>
        ) : null}
        <p className="pt-2">
          This is the Phase 2 demo confirmation. Live Stripe/PayPal capture and order
          emails come next.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex rounded-full bg-ink-gold px-5 py-2.5 text-sm font-semibold text-ink-navy"
      >
        Keep shopping
      </Link>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="shop-shell">
          <p className="text-ink-muted">Loading confirmation…</p>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
