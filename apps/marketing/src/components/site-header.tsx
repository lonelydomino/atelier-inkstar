"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brandAssets } from "@/lib/brand-assets";

const shop = { href: "#marketplaces", label: "Shop" };

const nav = [
  { href: "#collection", label: "Collection" },
  { href: "#about", label: "About" },
  { href: "#chizuru", label: "Chizuru" },
];

export function SiteHeader() {
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("marketplaces");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      {
        threshold: 0.12,
        rootMargin: "-4rem 0px -35% 0px",
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const showShop = !heroInView;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#081020]/70 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href="#" className="flex shrink-0 items-center gap-3">
          <Image
            src={brandAssets.emblem}
            alt=""
            width={36}
            height={36}
            aria-hidden
            className="shrink-0 opacity-90"
          />
          <span className="relative block h-9 w-44 sm:w-52">
            <Image
              src={brandAssets.wordmark}
              alt="Atelier Inkstar"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 640px) 176px, 208px"
            />
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          {showShop ? (
            <Link
              href={shop.href}
              className="rounded-full border border-ink-gold/40 px-4 py-2 text-xs font-semibold tracking-wide text-ink-gold uppercase transition hover:bg-ink-gold/10"
            >
              {shop.label}
            </Link>
          ) : null}

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
