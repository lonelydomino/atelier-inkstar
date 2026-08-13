"use client";

import Image from "next/image";
import Link from "next/link";
import { brand } from "@atelier-inkstar/config/brand";
import { useCart } from "@/lib/cart";

const links = [
  { href: "/", label: "Shop" },
  { href: "/collections/treasure", label: "Collections" },
  { href: "/cart", label: "Cart" },
];

export function ShopHeader() {
  const { itemCount, hydrated } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-ink-navy/80 backdrop-blur-xl">
      <div className="shop-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/wordmark.png"
            alt={brand.name}
            width={160}
            height={36}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-ink-muted transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
              {link.href === "/cart" && hydrated && itemCount > 0 ? (
                <span className="ml-2 inline-flex min-w-5 items-center justify-center rounded-full bg-ink-gold px-1.5 text-xs font-semibold text-ink-navy">
                  {itemCount}
                </span>
              ) : null}
            </Link>
          ))}
          <a
            href={`https://${brand.domains.marketing}`}
            className="hidden rounded-full px-3 py-2 text-sm text-ink-gold/90 transition hover:bg-white/5 hover:text-ink-gold sm:inline"
          >
            Brand site
          </a>
        </nav>
      </div>
    </header>
  );
}
