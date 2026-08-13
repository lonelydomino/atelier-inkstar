# Atelier Inkstar Shop

Phase 2 storefront for `atelierinkstar.shop`.

## Run locally

From the monorepo root:

```bash
pnpm install
pnpm dev:shop
```

Open [http://localhost:3001](http://localhost:3001).

## What’s included

- Product grid with search + franchise / spicy / availability filters
- Collections (`/collections/[id]`)
- Product pages with size selector (3–6″) and website pricing
- Cart (localStorage)
- Demo checkout (Stripe / PayPal method selection → local confirmation)

Live Stripe + PayPal capture still needs production keys (Phase 2 remainder / Phase 3 ops).
