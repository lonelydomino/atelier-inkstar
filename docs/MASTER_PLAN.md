# Atelier Inkstar — Master Website & Commerce Platform Plan (v2)

**Last updated:** August 12, 2026 (Phase 2 shop MVP)  
**Repo:** https://github.com/lonelydomino/atelier-inkstar  
**Status doc:** This file is the source of truth for roadmap + what is already built.

---

## Project overview

Atelier Inkstar is a premium anime sticker brand focused on collectible, high-quality, handmade vinyl stickers and future physical merchandise. The website ecosystem is **not** a generic storefront — it is a **long-term multi-channel commerce platform** and internal business operating system.

---

## Core philosophy (non-negotiable)

The system must be architected around **ONE central product catalog** (single source of truth).

### Bad workflow

Create product manually on:

- Website
- eBay
- Etsy
- TikTok Shop

### Good workflow

```
Create product ONCE in Atelier Inkstar admin
  → Generate and/or sync listings everywhere
```

This is the core architectural principle. All phases below serve this goal.

---

## Current snapshot (what exists today)

| Area | Status |
|------|--------|
| Monorepo + GitHub (`main`) | ✅ Done |
| Phase 1 marketing app (code) | 🟡 ~95% — deploy + a few polish items left |
| Real Etsy URL | ✅ `atelierinkstar.etsy.com` |
| Real TikTok Shop URL | ✅ Verified store link |
| Real eBay URL | ✅ `ebay.com/usr/atelierinkstarshop` |
| Social links (Instagram, Pixiv) | ✅ Wired in hero + footer |
| Policy pages (privacy / terms / refunds) | ✅ Done |
| Favicon + apple touch icon | ✅ Done |
| Featured product mockups (8) | ✅ In `public/products/` |
| Vercel project config (`apps/marketing/vercel.json`) | ✅ In repo — **not verified live** |
| Phase 2 shop frontend | 🟡 MVP in `apps/shop` — live payments + deploy pending |
| Phase 3 catalog engine (DB) | 🟡 Static products + per-platform pricing ladders; no Supabase yet |
| Phase 4–8 (admin, listings, sync, shipping, analytics) | ⬜ Not started |
| Supabase / R2 | ⬜ Not started |
| Stripe / PayPal | 🟡 Shop demo checkout UI only (no live keys) |

### Repository layout (today)

```
atelier-inkstar/
├── apps/
│   ├── marketing/              ✅ Phase 1 (.com)
│   ├── shop/                   🟡 Phase 2 MVP (.shop)
│   └── admin/                  ⬜ Phase 4
├── packages/
│   ├── catalog/                🟡 Static products + website/eBay/Etsy pricing
│   ├── config/                 ✅ Brand, social URLs, policies, founder (Vesper)
│   └── database/               ⬜ Phase 3 (Supabase / Postgres)
├── docs/
│   └── MASTER_PLAN.md          ✅ This file
└── .cursor/rules/              ✅ Alya, Vesper, Chizuru pending, newsletter pending
```

### Tech in use (marketing + shop)

- Next.js 16 (App Router), TypeScript, Tailwind v4
- Framer Motion + GSAP (marketing)
- pnpm monorepo (`pnpm dev` / `pnpm dev:shop`)
- Static marketing homepage + shop SSG product routes (`pnpm build` passes both)
- `apps/marketing/vercel.json` + `apps/shop/vercel.json` monorepo deploy configs

### Brand assets integrated

| Asset | Status |
|-------|--------|
| Wordmark | ✅ Header, hero, footer |
| Approved emblem (alt / orbital variations used) | ✅ Hero accent |
| Starline decorations | ✅ Hero |
| Platform icons (Etsy, TikTok, eBay, Instagram, Pixiv) | ✅ |
| Chizuru hero (`public/chizuru/hero.png`) | 🟡 Temporary — see `.cursor/rules/chizuru-hero-pending.mdc` |
| Chizuru mascot (`public/chizuru/mascot.png`) | 🟡 Temporary (part 2 portrait) |
| Anya mascot | ⬜ Not on site yet |
| Featured sticker mockups (8 products) | ✅ Treasure collection section |
| Dedicated OG share image | ⬜ Metadata present; no custom OG image asset yet |

---

## Domain architecture

### 1. `atelierinkstar.com`

**Purpose:** Premium public brand landing page.

- Showcase brand identity
- Funnel traffic to shop + marketplaces
- Digital storefront / portfolio feel

**Pages / sections:**

| Section | v2 requirement | Status |
|---------|----------------|--------|
| Home / Hero | Stunning, animated, premium | ✅ Built |
| Brand statement / My Story | Founder voice (Vesper) | ✅ |
| Mascot showcase (Chizuru, Anya) | | 🟡 Chizuru only (temp art); Anya missing |
| Featured collections | | ✅ 8 mockup products (static catalog) |
| Marketplace CTAs | Etsy, TikTok, eBay | ✅ Real URLs + branded icons |
| Social links | Instagram, Pixiv | ✅ Hero + footer |
| CTA to shop | | ✅ → marketplaces + `#collection` |
| Newsletter | | ⏸️ Deferred to later phase (UI exists, hidden) |
| Policy pages | Privacy, terms, refunds | ✅ |
| Footer | Contact + links | ✅ `vesper@atelierinkstar.com` |

**Feel:** Luxurious, elegant, animated, highly polished. Performance-critical — animations must not slow the site.

**App folder:** `apps/marketing`

---

### 2. `atelierinkstar.shop` (or `shop.atelierinkstar.com`)

**Purpose:** Main customer storefront.

- Product catalog browsing
- Cart, checkout, orders

**App folder:** `apps/shop` ✅ scaffolded (Phase 2 MVP)

**MVP routes:** `/`, `/products/[id]`, `/collections/[id]`, `/cart`, `/checkout`, `/checkout/success`

---

### 3. `admin.atelierinkstar.shop` (private)

**Purpose:** Internal control center — product management, listing generation, marketplace sync, analytics, inventory.

**App folder:** `apps/admin` (not created yet)

---

## Visual / brand direction

Use Atelier Inkstar brand kit (`Desktop/Atelier Inkstar/01 Brand Assets`).

| Element | Detail |
|---------|--------|
| Aesthetic | Celestial, premium, elegant, anime luxury boutique, ink + stardust |
| **Primary palette** | Midnight Navy `#081020`, Deep Navy `#191B2E`, Slate Blue `#2D3352`, Gold `#D4AF37`, Soft Pink `#FFB6CC`, White `#FFFFFF` |
| Mascots | **Chizuru** (primary), **Anya** |
| Founder public alias | **Vesper** |
| Emblem | Use exact approved wolf + crescent emblem — never redesign |

**Goals:** Extremely high quality, smooth animations, fast performance, premium feel, mobile friendly.

---

## Tech stack (v2)

| Layer | Choice | Status |
|-------|--------|--------|
| Frontend | Next.js (App Router), TypeScript, Tailwind, Framer Motion | ✅ Marketing + shop |
| UI primitives | shadcn/ui (optional) | ⬜ Admin (shop uses custom panels) |
| Backend (initial) | **Supabase** | ⬜ |
| Backend (long-term) | PostgreSQL + custom services | ⬜ |
| ORM (candidate) | Drizzle — align with Supabase Postgres | ⬜ Discuss at Phase 3 |
| Storage | Cloudflare R2 (preferred) or Supabase Storage | ⬜ |
| Payments | Stripe + PayPal | 🟡 Shop demo checkout only |
| Auth | Supabase Auth or Clerk | ⬜ |
| Hosting | Vercel (frontend), Supabase (backend), Cloudflare CDN | 🟡 Config in repo; live deploy unverified |

**Why Next.js:** Best balance of beauty, performance, scalability, SEO.

---

## Development rules

1. Maintain clean architecture  
2. Prioritize scalability  
3. Modular components  
4. Avoid technical debt  
5. Keep code production-grade  
6. **Every major change → commit + push to GitHub**

Example commits:

```
feat: add landing page hero section
feat: implement product catalog schema
feat: add ebay listing generator
fix: point TikTok Shop card to Atelier Inkstar store URL
```

Git is the official source of project history.

---

# Phased roadmap

---

## Phase 1 — Landing page (`.com`) — **HIGHEST PRIORITY**

### Goal

Build a beautiful premium landing page first.

### Required sections

| Section | Status |
|---------|--------|
| Hero (emblem, Chizuru, wordmark, particles, motion) | ✅ |
| Brand statement / My Story (Vesper) | ✅ |
| Mascot showcase | 🟡 Chizuru temp; Anya missing |
| Featured collections | ✅ 8 product mockups |
| Marketplace / shop CTAs | ✅ Etsy + TikTok + eBay real URLs |
| Social media links | ✅ Instagram + Pixiv |
| Newsletter | ⏸️ Deferred — UI built & hidden; not a Phase 1 exit criterion |
| Policy pages | ✅ Privacy, terms, refunds |
| Footer | ✅ |

### Hero goals

- Visually stunning, animated, premium luxury feel
- Establish brand immediately
- Tasteful motion: fade, glow, particles, scroll reveal, parallax (GSAP + canvas starfield ✅)

### Phase 1 — remaining before “complete”

- [ ] Dedicated OG / social share image (metadata exists without custom image)
- [ ] Lighthouse / Core Web Vitals pass on mobile
- [ ] Anya mascot section (optional for Phase 1 exit)

~~Final Chizuru / newsletter / Vercel connect~~ — Chizuru treated as good enough; `.com` is live; **newsletter deferred to a later phase** (see Phase 8).

### Phase 1 — done since original plan (commit-backed)

- [x] Real eBay shop URL (`625075d`)
- [x] Real social links — Instagram + Pixiv (`9d5efaf`, `82eb165`, `2cf644c`)
- [x] Favicon + apple touch icon (`9075833`)
- [x] Featured sticker mockups (`25c235b`, `4079fce`)
- [x] Policy pages (`530e237`)
- [x] Vercel monorepo build config (`3174eb3`)
- [x] Founder story + Vesper alias (`362ac8c`, `3ba9349`, …)
- [x] Temporary Anime Expo sale banner added then removed (`2ea6fa8` → `031a5da`)

---

## Phase 2 — Shop frontend (`.shop`)

### Goal

Build the customer-facing storefront.

### Required features

| Feature | Status |
|---------|--------|
| Product grid | ✅ |
| Filtering (franchise, spicy/standard, availability, search) | ✅ Size filter deferred (variant-level) |
| Collections | ✅ `/collections/[id]` |
| Search | ✅ Query param `q` |
| Product pages (gallery, size selector, pricing, description, related) | ✅ Mockup gallery is single image for now; reviews deferred |
| Cart | ✅ localStorage |
| Checkout (Stripe + PayPal) | 🟡 Demo flow with method choice — **live payment APIs not wired** |

**App:** `apps/shop`  
**Design:** Premium but conversion-focused — less spectacle than `.com`.  
**Local:** `pnpm dev:shop` → http://localhost:3001

### Phase 2 — remaining

- [ ] Wire live Stripe Checkout + PayPal
- [ ] Deploy shop to Vercel → `atelierinkstar.shop`
- [ ] Multi-image PDP galleries / lifestyle mockups
- [ ] Reviews (optional until order volume)
- [ ] Size-level inventory filtering (needs Phase 3 stock)
- [ ] Link marketing CTAs to `.shop` when live

### Catalog support for Phase 2

`packages/catalog` now seeds full `Product` records (description, spicy, availability, collections) and per-platform pricing ladders (`website` / `ebay` / `etsy`) via `generateVariants()`.

---

## Phase 3 — Product catalog engine (heart of the system)

### Goal

Every product exists as **one canonical database object**.

### Example schema (v2)

```json
{
  "baseSku": "CSM-MAKIMA",
  "series": "Chainsaw Man",
  "character": "Makima",
  "category": "Spicy",
  "sizes": [3, 4, 5, 6],
  "pricing": {
    "website": { "3": 5.49, "4": 7.49, "5": 9.49, "6": 11.49 },
    "ebay":    { "3": 7.49, "4": 9.49, "5": 11.49, "6": 13.49 },
    "etsy":    { "3": 5.99, "4": 7.99, "5": 9.99, "6": 11.99 }
  }
}
```

**Important:** Platform-specific pricing ladders (not one global price for all channels).

### SKU system

| Level | Example |
|-------|---------|
| Base SKU | `CSM-MAKIMA` (FRANCHISE-CHARACTER) |
| Variants (auto) | `CSM-MAKIMA-3IN` … `CSM-MAKIMA-6IN` |

**Today:** `packages/catalog` holds **static** shop/marketing products + marketplace links. `generateVariants({ platform })` supports website / eBay / Etsy ladders. Phase 3 still needs Supabase as the canonical store.

### Global defaults

- Default sizes, pricing ladders per platform
- Default shipping profile, materials, descriptions
- Changing defaults updates **future** products; per-product overrides supported

### Phase 3 deliverables

- [ ] Supabase project + schema
- [ ] `packages/database` (migrations)
- [ ] Catalog services (CRUD, variant gen, pricing resolution)
- [ ] R2 or Supabase Storage for art assets
- [ ] Marketing featured section reads from DB
- [ ] Shop reads from same catalog

---

## Phase 4 — Admin panel

### Goal

Private business control center.

### Sections

| Module | Features |
|--------|----------|
| **Dashboard** | Revenue, orders, profit, best sellers, recent orders |
| **Products** | CRUD, generate product + variants |
| **Orders** | Fulfillment, status |
| **Marketplace sync** | Export / sync status per channel |
| **Listing generator** | Jump-off to Phase 5 |
| **Analytics** | See Phase 8 |
| **Settings** | Global defaults, shipping profiles, API keys |

**App:** `apps/admin`  
**UX:** Efficient over beautiful — shadcn tables/forms.

---

## Phase 5 — Listing generator (**HIGH PRIORITY**)

### Goal

Generate marketplace listings automatically from one catalog entry.

### Input

- Character, franchise, SKU, art files, spicy flag, product metadata

### Output

Marketplace-ready listing packages per channel.

### eBay generation

| Field | Default / rule |
|-------|----------------|
| Category | Home & Garden → Home Décor → Decals, Stickers & Vinyl Art |
| Pricing | 3"=$7.49, 4"=$9.49, 5"=$11.49, 6"=$13.49 |
| Shipping | **Flat rate preferred** (calculated shipping historically undercharged $1–3) |
| Default shipping | First item $4.99–5.99, additional identical item $0.75 |
| Outputs | Title, description, item specifics, category, SKU variations |
| Tools | Bulk listing, templates, CSV export, future API |

### Etsy generation

- Title, tags, description, materials, SKUs  
- Pricing: 3"=$5.99, 4"=$7.99, 5"=$9.99, 6"=$11.99

### TikTok generation

- Title, description, media assets

### Website generation

- Storefront page, SEO metadata, structured data, descriptions

---

## Phase 6 — Marketplace sync

| Sub-phase | Method |
|-----------|--------|
| **A** | Manual exports — copy/paste, CSV |
| **B** | Bulk tools — eBay bulk, CSV uploads |
| **C** | Full API automation |

**Future API targets:** eBay Inventory API, eBay Sell Feed API, Etsy API, TikTok seller APIs.

**Dream workflow:** Create product once → publish everywhere.

**Live marketplace URLs (Phase 1 funnel):**

| Channel | URL | Status |
|---------|-----|--------|
| Etsy | https://atelierinkstar.etsy.com | ✅ In repo |
| TikTok Shop | https://shop.tiktok.com/us/store/atelierinkstar/7494648125875652077 | ✅ In repo |
| eBay | https://www.ebay.com/usr/atelierinkstarshop | ✅ In repo |

---

## Phase 7 — Shipping engine

Reusable shipping profiles:

| Profile | Use |
|---------|-----|
| Single Sticker | One decal |
| Multi Sticker Bundle | Several items |
| Large Bundle | Bulk orders |

Each profile: package type, dimensions, weight, carrier defaults.

Prevents shipping mistakes across channels.

---

## Phase 8 — Analytics

### Track

- Gross revenue, fees, shipping costs, profit
- Best franchises / characters
- Conversion rate, average order value
- **Marketplace comparison:** website vs eBay vs Etsy vs TikTok

### Goal

Know which channel performs best; centralize business intelligence in admin.

### Also in this phase (deferred from Phase 1)

- [ ] **Stardust Dispatch newsletter** — pick provider (Kit, Buttondown, Resend, etc.), wire form, re-enable `NewsletterSection` on marketing
- Component already exists at `apps/marketing/src/components/sections/newsletter-section.tsx` (hidden on purpose)

---

## Long-term vision

Atelier Inkstar becomes a complete multi-channel commerce platform where:

1. Internal catalog is the **single source of truth**
2. Products are created **once**
3. Listings are **generated** automatically
4. Marketplace syncing is **automated**
5. Business analytics are **centralized**

The website is not just a store — it is the **master operating system** for the entire business.

---

## Phase order summary

```
🟡 Phase 1  .com landing          (~95% — deploy + polish)
🟡 Phase 2  .shop storefront      (MVP — live payments + deploy)
⬜ Phase 3  Catalog engine        (Supabase + canonical DB)
⬜ Phase 4  Admin panel
⬜ Phase 5  Listing generator    (high priority after catalog)
⬜ Phase 6  Marketplace sync
⬜ Phase 7  Shipping engine
⬜ Phase 8  Analytics
```

---

## Vesper action items (founder)

| # | Task | Status |
|---|------|--------|
| 1 | Final Chizuru edit → replace `public/chizuru/hero.png` (+ mascot) | ✅ Good enough for now |
| 2 | eBay shop URL | ✅ Done |
| 3 | Connect repo to Vercel (`apps/marketing`) and go live | ✅ `.com` live |
| 4 | Newsletter provider choice | ⏸️ Deferred → Phase 8 |
| 5 | Social profile URLs (Instagram, Pixiv) | ✅ Done |
| 6 | Product images for featured grid | ✅ Mockups in place |
| 7 | Optional: Anya mascot art for Phase 1 | ⬜ Open |
| 8 | Optional: dedicated OG share image | ⬜ Open |

---

## Commit history (milestones)

Cross-checked against current `main` including Phase 2 shop MVP.

| Commit | Summary |
|--------|---------|
| `0f963c3` | Initial monorepo + Phase 1 marketing splash |
| `6fc1a90` | Etsy marketplace URL |
| `900dc83` | Alya persona rules in project |
| `39146c8` | TikTok Shop URL |
| `6e99550` | v2 master plan integrated |
| `625075d` | eBay seller URL |
| `25c235b` / `4079fce` | Featured sticker mockups (8 products) |
| `362ac8c` / `3ba9349` | Founder story + Vesper alias |
| `75541a9` | Newsletter section hidden pending provider |
| `530e237` | Privacy, terms, refund policy pages |
| `9075833` | Emblem favicon + apple touch icon |
| `3174eb3` | Vercel monorepo build config for marketing |
| `9d5efaf` / `82eb165` / `2cf644c` | Social links (Instagram, Pixiv) + footer wiring |
| `d2465a4` / `3efea16` | Hero merged with shop/social; Shop nav behavior |
| `2ea6fa8` → `031a5da` | Anime Expo sale banner added, polished, then removed |
| `e2ea557` | Master plan + README synced to post–Phase 1 reality |
| Phase 2 shop MVP | `apps/shop` grid/PDP/collections/cart/demo checkout + catalog pricing ladders |

Full history lives in git; this table is the durable roadmap checkpoint list, not every typography fix.
