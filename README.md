# Atelier Inkstar

Premium celestial anime sticker ecosystem — monorepo for **atelierinkstar.com**, **atelierinkstar.shop**, and **admin.atelierinkstar.shop**.

## Structure

```
apps/
  marketing/     # Phase 1 — luxury brand splash (atelierinkstar.com)
packages/
  catalog/       # Product data, featured listings, SKU variant generator
  config/        # Brand tokens and shared constants
```

Future apps (Phase 2–3): `shop`, `admin`, `database` (Drizzle + Postgres).

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Phase 1 — Marketing site

Static-first Next.js App Router experience with:

- Celestial hero + Chizuru showcase (placeholder art until official assets)
- Featured collection (data-driven via `@atelier-inkstar/catalog`)
- Marketplace links (Etsy, TikTok Shop, eBay)
- About, newsletter, footer

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 + custom luxury CSS
- Framer Motion + GSAP
- pnpm workspaces

## Assets

Place official artwork in `apps/marketing/public/`:

- `brand/` — logo, wordmark, emblem
- `chizuru/` — mascot (hero + about section)
- `products/` — featured sticker images
- `decor/` — starlines, optional UI chrome

### Chizuru (pending final edit)

**Current:** `chizuru/hero.png` is a temporary copy of `chizuru1.png` from your Desktop mascot folder.

**Milo still plans to edit/replace this** with a finished render. When ready, overwrite `hero.png` or point `brandAssets.chizuruHero` in `src/lib/brand-assets.ts` at the new file.

## Git workflow

Commit after each significant change. Push to GitHub as the source of truth.
