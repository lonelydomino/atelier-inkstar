import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/brand-assets";

const nav = [
  { href: "#collection", label: "Collection" },
  { href: "#marketplaces", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "#chizuru", label: "Chizuru" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#081020]/70 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href="#" className="relative block h-9 w-44 shrink-0 sm:w-52">
          <Image
            src={brandAssets.wordmark}
            alt="Atelier Inkstar"
            fill
            className="object-contain object-left"
            priority
            sizes="(max-width: 640px) 176px, 208px"
          />
        </Link>
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
        <Link
          href="#marketplaces"
          className="rounded-full border border-ink-gold/40 px-4 py-2 text-xs font-semibold tracking-wide text-ink-gold uppercase transition hover:bg-ink-gold/10"
        >
          Shop Now
        </Link>
      </div>
    </header>
  );
}
