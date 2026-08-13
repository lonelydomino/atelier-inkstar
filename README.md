# Atelier Inkstar

Premium celestial anime sticker ecosystem — monorepo for **atelierinkstar.com**, **atelierinkstar.shop**, and **admin.atelierinkstar.shop**.

**Full roadmap (v2):** [docs/MASTER_PLAN.md](docs/MASTER_PLAN.md)

## Structure

```
apps/
  marketing/     # Phase 1 — luxury brand splash (atelierinkstar.com)
  shop/          # Phase 2 — storefront (atelierinkstar.shop)
  admin/         # Phase 4 — internal ops (planned)
packages/
  catalog/       # Product data, SKU + platform pricing → Phase 3 catalog engine
  config/        # Brand tokens and shared constants
  database/      # Supabase / Postgres schema (planned)
```

## Quick start

```bash
pnpm install
pnpm dev          # marketing → http://localhost:3000
pnpm dev:shop     # shop → http://localhost:3001
```

## Current status (short)

Details in [docs/MASTER_PLAN.md](docs/MASTER_PLAN.md).

| Phase | Status |
|-------|--------|
| 1 — `.com` landing | 🟡 ~95% code done; deploy + polish left |
| 2 — `.shop` | 🟡 MVP built — live Stripe/PayPal + deploy left |
| 3 — Catalog engine | 🟡 Richer static catalog + website/eBay/Etsy pricing ladders; no DB yet |
| 4–8 — Admin, listings, sync, shipping, analytics | ⬜ Not started |

**Phase 2 MVP:** product grid, filters, collections, PDPs (size + website pricing), cart, demo checkout.

**Still open (Phase 1):** Vercel go-live, final Chizuru art, newsletter provider, optional Anya + OG image, mobile Lighthouse pass.

**Marketplace links wired:** [Etsy](https://atelierinkstar.etsy.com), [TikTok Shop](https://shop.tiktok.com/us/store/atelierinkstar/7494648125875652077), [eBay](https://www.ebay.com/usr/atelierinkstarshop)

**Social:** [Instagram](https://www.instagram.com/atelierinkstar/), [Pixiv](https://www.pixiv.net/en/users/127432752)

## Tech stack

- Next.js (App Router) + TypeScript + Tailwind v4
- Framer Motion + GSAP (marketing)
- pnpm monorepo
- **Planned / partial:** Supabase, Cloudflare R2, Stripe + PayPal (demo checkout in shop), Vercel

## Assets

- `apps/marketing/public/brand/` — wordmark, emblem, platform icons
- `apps/marketing/public/chizuru/hero.png` + `mascot.png` — **temporary** (Vesper editing final)
- `apps/marketing/public/products/` (+ shop copy) — featured / shop mockups (8)
- `apps/marketing/public/decor/` — starlines

## Git workflow

Commit after each significant change. Push to https://github.com/lonelydomino/atelier-inkstar
