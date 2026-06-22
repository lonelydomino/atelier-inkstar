import Image from "next/image";
import Link from "next/link";
import { brand } from "@atelier-inkstar/config/brand";
import { brandAssets } from "@/lib/brand-assets";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#060b16] py-14">
      <div className="section-shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={brandAssets.emblem}
              alt=""
              width={40}
              height={40}
              aria-hidden
              className="shrink-0 opacity-90"
            />
            <span className="relative block h-10 w-48 sm:h-11 sm:w-56">
              <Image
                src={brandAssets.wordmark}
                alt={brand.name}
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-7 text-ink-muted">
            A celestial anime atelier crafting premium stickers and collectibles
            with ink, passion, and stardust.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-ink-gold uppercase">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>
              <Link href="mailto:hello@atelierinkstar.com" className="hover:text-white">
                hello@atelierinkstar.com
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                TikTok
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-ink-gold uppercase">
            Policies
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/6 pt-6 text-xs text-ink-muted">
        © {year} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
