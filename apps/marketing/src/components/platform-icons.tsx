import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function EtsyIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M8.559 4.445c-.342 1.387-.684 2.737-1.026 4.052H5.508v2.05h1.88c-.855 2.566-1.88 4.735-3.075 6.507h2.394c.855-1.3 1.642-2.805 2.36-4.515h2.737v4.515h2.05V6.497h-2.05v2.05H8.559zm7.334 0c-.855 2.223-1.71 4.242-2.565 6.057h2.394c.855-1.642 1.71-3.418 2.565-5.328h2.394V4.445h-6.788zm-2.565 8.107c-.855 1.983-1.71 3.76-2.565 5.328h2.394c.855-1.3 1.642-2.805 2.36-4.515h2.05v4.515h2.05v-6.328h-4.279z" />
    </svg>
  );
}

export function EbayIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M4.2 7.2h2.1l1.2 3.6 1.2-3.6h2.1v9.6H9.9v-5.1l-1.5 4.5h-1.2L5.7 11.7v5.1H4.2V7.2zm8.1 0c2.1 0 3.3 1.2 3.3 3.3v.3c0 2.1-1.2 3.3-3.3 3.3h-1.5v2.7H9.3V7.2h3zm-.3 1.5h-1.2v3.3h1.2c1.2 0 1.8-.6 1.8-1.65s-.6-1.65-1.8-1.65zm5.4-1.5h2.1l2.1 6.3 2.1-6.3H24l-3 9.6h-2.1l-1.2-3.9-1.2 3.9h-2.1l-3-9.6h2.1l2.1 6.3 2.1-6.3z" />
    </svg>
  );
}

type PlatformIconBadgeProps = {
  children: ReactNode;
};

export function PlatformIconBadge({ children }: PlatformIconBadgeProps) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/4 text-ink-muted transition group-hover:border-ink-gold/50 group-hover:bg-ink-gold/10 group-hover:text-ink-gold"
    >
      {children}
    </span>
  );
}
