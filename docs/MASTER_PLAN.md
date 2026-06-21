# Atelier Inkstar — Master Website & Commerce Platform Plan (v2)

**Last updated:** March 2026  
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
| Phase 1 marketing app (code) | 🟡 ~90% — deploy + polish pending |
| Real Etsy URL | ✅ `atelierinkstar.etsy.com` |
| Real TikTok Shop URL | ✅ Verified store link |
| eBay URL | ⬜ Placeholder |
| Phase 2 shop frontend | ⬜ Not started |
| Phase 3 catalog engine (DB) | 🟡 SKU generator stub only |
| Phase 4–8 (admin, listings, sync, shipping, analytics) | ⬜ Not started |
| Vercel / Supabase / R2 / Stripe | ⬜ Not started |

### Repository layout (today)

```
atelier-inkstar/
├── apps/
│   └── marketing/              ✅ Phase 1 (.com)
│   └── shop/                   ⬜ Phase 2
│   └── admin/                  ⬜ Phase 4
├── packages/
│   ├── catalog/                🟡 Static data + generateVariants() stub
│   ├── config/                 ✅ Brand tokens, mascot copy
│   └── database/               ⬜ Phase 3 (Supabase / Postgres)
└── .cursor/rules/              ✅ Alya persona, Chizuru pending-edit
```

### Tech in use (marketing app)

- Next.js 16 (App Router), TypeScript, Tailwind v4
- Framer Motion + GSAP
- pnpm monorepo
- Static homepage (`pnpm build` passes)

### Brand assets integrated

| Asset | Status |
|-------|--------|
| Wordmark (`logo-text2.png`) | ✅ Header + hero |
| Approved emblem | ✅ Hero accent |
| Starline decorations | ✅ Hero |
| Chizuru (`chizuru1.png`) | 🟡 Temporary — Milo will replace after editing |
| Anya mascot | ⬜ Not on site yet |
| Real product photos in featured grid | ⬜ Gradient placeholders |

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
| Brand statement | | ✅ In hero + about |
| Mascot showcase (Chizuru, Anya) | | 🟡 Chizuru only (temp art) |
| Featured collections | | ✅ Data-driven (5 characters) |
| Social links | | 🟡 Placeholder links |
| CTA to shop | | ✅ → marketplaces + `#collection` |
| Footer | | ✅ |

**Feel:** Luxurious, elegant, animated, highly polished. Performance-critical — animations must not slow the site.

**App folder:** `apps/marketing`

---

### 2. `atelierinkstar.shop` (or `shop.atelierinkstar.com`)

**Purpose:** Main customer storefront.

- Product catalog browsing
- Cart, checkout, orders

**App folder:** `apps/shop` (not created yet)

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
| Emblem | Use exact approved wolf + crescent emblem — never redesign |

**Goals:** Extremely high quality, smooth animations, fast performance, premium feel, mobile friendly.

---

## Tech stack (v2)

| Layer | Choice | Status |
|-------|--------|--------|
| Frontend | Next.js (App Router), TypeScript, Tailwind, Framer Motion | ✅ Marketing |
| UI primitives | shadcn/ui (optional) | ⬜ Shop/admin |
| Backend (initial) | **Supabase** | ⬜ |
| Backend (long-term) | PostgreSQL + custom services | ⬜ |
| ORM (candidate) | Drizzle (already stubbed in repo) — align with Supabase Postgres | 🟡 Discuss at Phase 3 |
| Storage | Cloudflare R2 (preferred) or Supabase Storage | ⬜ |
| Payments | Stripe + PayPal | ⬜ |
| Auth | Supabase Auth or Clerk | ⬜ |
| Hosting | Vercel (frontend), Supabase (backend), Cloudflare CDN | ⬜ |

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
| Brand statement | ✅ |
| Mascot showcase | 🟡 Chizuru temp; Anya missing |
| Featured collections | ✅ |
| Marketplace / shop CTAs | 🟡 Etsy + TikTok real; eBay TBD |
| Social media links | ⬜ Placeholders |
| Newsletter | 🟡 UI only, no backend |
| Footer | ✅ |

### Hero goals

- Visually stunning, animated, premium luxury feel
- Establish brand immediately
- Tasteful motion: fade, glow, particles, scroll reveal, parallax (GSAP + canvas starfield ✅)

### Phase 1 — remaining before “complete”

- [ ] Deploy to Vercel → `atelierinkstar.com`
- [ ] Final Chizuru artwork (replace `public/chizuru/hero.png`)
- [ ] Real eBay shop URL
- [ ] Newsletter provider (Resend, ConvertKit, etc.)
- [ ] Real social links
- [ ] Favicon + OG image
- [ ] Real sticker images in featured grid
- [ ] Lighthouse / Core Web Vitals pass on mobile
- [ ] Anya mascot section (optional for Phase 1 exit)

---

## Phase 2 — Shop frontend (`.shop`)

### Goal

Build the customer-facing storefront.

### Required features

| Feature | Status |
|---------|--------|
| Product grid | ⬜ |
| Filtering (franchise, character, size, category, spicy/standard, availability) | ⬜ |
| Collections | ⬜ |
| Search | ⬜ |
| Product pages (gallery, mockups, size selector, pricing, description, reviews, related) | ⬜ |
| Cart | ⬜ |
| Checkout (Stripe + PayPal) | ⬜ |

**App:** `apps/shop`  
**Design:** Premium but conversion-focused — less spectacle than `.com`.

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

**Today:** `packages/catalog/src/variants.ts` generates variants with a single default price ladder — **must be extended** for per-platform pricing in Phase 3.

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
✅ Phase 1  .com landing          (in progress — deploy next)
⬜ Phase 2  .shop storefront
⬜ Phase 3  Catalog engine        (Supabase + platform pricing)
⬜ Phase 4  Admin panel
⬜ Phase 5  Listing generator    (high priority)
⬜ Phase 6  Marketplace sync
⬜ Phase 7  Shipping engine
⬜ Phase 8  Analytics
```

---

## Milo action items

| # | Task |
|---|------|
| 1 | Final Chizuru edit → replace `public/chizuru/hero.png` |
| 2 | ~~eBay shop URL~~ | ✅ |
| 3 | Connect repo to Vercel (`apps/marketing`) |
| 4 | Newsletter provider choice |
| 5 | Social profile URLs |
| 6 | Product images for featured grid |

---

## Commit history (milestones)

| Commit | Summary |
|--------|---------|
| `0f963c3` | Initial monorepo + Phase 1 marketing splash |
| `6fc1a90` | Etsy marketplace URL |
| `900dc83` | Alya persona rules in project |
| `39146c8` | TikTok Shop URL |
| `6e99550` | v2 master plan integrated |
| `TBD` | eBay seller URL |
