import Image from "next/image";
import type { ReactNode } from "react";
import { brandAssets } from "@/lib/brand-assets";

type IconProps = {
  className?: string;
};

export function InstagramIcon({ className = "h-full w-full" }: IconProps) {
  return (
    <Image
      src={brandAssets.instagramIcon}
      alt=""
      width={44}
      height={44}
      aria-hidden
      className={`rounded-full object-cover ${className}`}
    />
  );
}

export function PixivIcon({ className = "h-full w-full" }: IconProps) {
  return (
    <Image
      src={brandAssets.pixivIcon}
      alt=""
      width={44}
      height={44}
      aria-hidden
      className={`rounded-full object-cover ${className}`}
    />
  );
}

export function TikTokIcon({ className = "h-full w-full" }: IconProps) {
  return (
    <Image
      src={brandAssets.tiktokIcon}
      alt=""
      width={44}
      height={44}
      aria-hidden
      className={`rounded-full object-cover ${className}`}
    />
  );
}

export function EtsyIcon({ className = "h-full w-full" }: IconProps) {
  return (
    <Image
      src={brandAssets.etsyIcon}
      alt=""
      width={44}
      height={44}
      aria-hidden
      className={`rounded-full object-cover ${className}`}
    />
  );
}

export function EbayIcon({ className = "h-full w-full" }: IconProps) {
  return (
    <Image
      src={brandAssets.ebayIcon}
      alt=""
      width={44}
      height={44}
      aria-hidden
      className={`rounded-full object-cover ${className}`}
    />
  );
}

type PlatformIconBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function PlatformIconBadge({ children, className }: PlatformIconBadgeProps) {
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-white/4 text-ink-muted transition group-hover:border-ink-gold/50 group-hover:bg-ink-gold/10 group-hover:text-ink-gold ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
