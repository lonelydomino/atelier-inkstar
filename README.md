# Atelier Inkstar

Premium celestial anime sticker ecosystem — monorepo for **atelierinkstar.com**, **atelierinkstar.shop**, and **admin.atelierinkstar.shop**.

**Full roadmap (v2):** [docs/MASTER_PLAN.md](docs/MASTER_PLAN.md)

## Structure

```
apps/
  marketing/     # Phase 1 — luxury brand splash (atelierinkstar.com)
  shop/          # Phase 2 — storefront (planned)
  admin/         # Phase 4 — internal ops (planned)
packages/
  catalog/       # Product data, SKU generator → Phase 3 catalog engine
  config/        # Brand tokens and shared constants
  database/      # Supabase / Postgres schema (planned)
```

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Current status (short)

| Phase | Status |
|-------|--------|
| 1 — `.com` landing | 🟡 Built locally; not deployed |
| 2 — `.shop` | ⬜ Not started |
| 3 — Catalog engine | ⬜ Stub only |
| 4–8 — Admin, listings, sync, shipping, analytics | ⬜ Not started |

**Marketplace links wired:** [Etsy](https://atelierinkstar.etsy.com), [TikTok Shop](https://shop.tiktok.com/us/store/atelierinkstar/7494648125875652077), [eBay](https://www.ebay.com/usr/atelierinkstarshop)

## Tech stack

- Next.js (App Router) + TypeScript + Tailwind v4
- Framer Motion + GSAP
- pnpm monorepo
- **Planned:** Supabase, Cloudflare R2, Stripe + PayPal, Vercel

## Assets

- `apps/marketing/public/brand/` — wordmark, emblem
- `apps/marketing/public/chizuru/hero.png` — **temporary** (Milo editing final)
- `apps/marketing/public/decor/` — starlines

## Git workflow

Commit after each significant change. Push to https://github.com/lonelydomino/atelier-inkstar
