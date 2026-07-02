"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { marketplaceLinks } from "@atelier-inkstar/catalog";
import { brand } from "@atelier-inkstar/config/brand";
import {
  EbayIcon,
  EtsyIcon,
  InstagramIcon,
  PlatformIconBadge,
  TikTokIcon,
} from "@/components/platform-icons";
import { brandAssets } from "@/lib/brand-assets";

const heroLinks = [
  {
    id: "instagram",
    name: "Instagram",
    description: "Follow the atelier & new drops",
    href: brand.social.instagram,
    icon: <InstagramIcon />,
  },
  ...marketplaceLinks.map((marketplace) => ({
    id: marketplace.id,
    name: marketplace.name,
    description: marketplace.description,
    href: marketplace.href,
    icon:
      marketplace.id === "etsy" ? (
        <EtsyIcon />
      ) : marketplace.id === "tiktok" ? (
        <TikTokIcon />
      ) : (
        <EbayIcon />
      ),
  })),
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero='copy'] > *", {
        y: 36,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from("[data-hero='art']", {
        x: 40,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.35,
      });

      gsap.to("[data-hero='glow']", {
        opacity: 0.75,
        scale: 1.05,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="marketplaces"
      ref={sectionRef}
      className="luxury-gradient-bg relative flex min-h-screen items-center pt-24 pb-20 md:pb-28"
    >
      <Image
        src={brandAssets.decor.starlineLeft}
        alt=""
        width={280}
        height={120}
        aria-hidden
        className="pointer-events-none absolute top-28 left-0 hidden opacity-40 lg:block"
      />
      <Image
        src={brandAssets.decor.starlineRight}
        alt=""
        width={280}
        height={120}
        aria-hidden
        className="pointer-events-none absolute top-28 right-0 hidden opacity-40 lg:block"
      />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div data-hero="copy" className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image
              src={brandAssets.emblem}
              alt=""
              width={56}
              height={56}
              aria-hidden
              className="shrink-0 opacity-90"
            />
            <div className="relative h-16 w-full max-w-md sm:h-20">
              <Image
                src={brandAssets.wordmark}
                alt={brand.name}
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </div>

          <p className="max-w-xl text-lg leading-8 text-ink-muted md:text-xl">
            {brand.description}
          </p>

          <div className="flex flex-col gap-4 pt-1">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold tracking-[0.28em] text-ink-gold uppercase">
                Shop the atelier
              </p>
              <p className="max-w-md text-sm leading-6 text-ink-muted">
                Find our releases on trusted marketplaces while the custom .shop
                experience comes online.
              </p>
            </div>

            <ul className="grid gap-3">
              {heroLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel group flex items-center gap-4 rounded-2xl p-4 transition hover:border-ink-gold/40 hover:bg-white/6"
                  >
                    <PlatformIconBadge>{link.icon}</PlatformIconBadge>
                    <div className="min-w-0 flex-1">
                      <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                        {link.name}
                      </p>
                      <p className="text-sm text-ink-muted">{link.description}</p>
                    </div>
                    <span
                      aria-hidden
                      className="shrink-0 text-sm font-semibold text-ink-gold opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-hero="art" className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div
            data-hero="glow"
            className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_70%)] opacity-50 blur-2xl"
          />
          <div className="gold-border-glow relative">
            <Image
              src={brandAssets.chizuruHero}
              alt={`${brand.mascot.name} — ${brand.mascot.title}`}
              width={713}
              height={1024}
              priority
              className="h-auto w-full drop-shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
              sizes="(max-width: 1024px) 90vw, 512px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
