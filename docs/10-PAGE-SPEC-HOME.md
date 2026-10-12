# 10 · Homepage Spec (from the approved reference design)

Build the homepage as `src/app/page.tsx` composing section components from `src/components/sections/`.
All copy below is **placeholder text from the reference** — move it to content/config files, and
**verify every business claim** (shipping regions, 30-day returns, 24/7 support, price match, "100% authentic")
with the owner before publishing.

Page wrapper: every section uses `container-page` inside a `<section class="section-y">` (except header/footer).
Order of sections = order below.

---
## 1. Header (`components/layout/Header.tsx`)
- **Left:** logo mark + store name + tagline "Discover. Shop. Upgrade." (small, `text-subtle`).
- **Center:** search — `search-field` (placeholder "Search for tech gadgets, ideas and more") with trailing round dark submit `icon-btn` (magnifier). Form `role="search"`.
- **Right:** `nav-link` × 4: **Home** (active, `aria-current="page"`), Today, Following, Shop; account icon-btn.
- Sticky (`sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border`).
- **Mobile:** logo + search icon + menu button; nav moves into a drawer (focus-trapped, ESC closes).

## 2. SubNav (`components/layout/SubNav.tsx`)
- `subnav-link` × 6 with leading icons: **Gadgets** (active, red underline), Smart Home, Audio, Wearables, Accessories, **Sale** (tag icon).
- **Right:** region switch (globe icon · **US · UK · UAE** · chevron) and wishlist heart `icon-btn`.
- Horizontally scrollable on mobile (`overflow-x-auto no-scrollbar`).

## 3. Hero (`components/sections/Hero.tsx`)
- Container: `rounded-2xl overflow-hidden`, two-part layout: **left white/light**, **right red panel** (`bg-hero-red`) with a diagonal/curved leading edge (CSS `clip-path`, one decorative element, `aria-hidden`).
- **Left column:**
  - `type-overline` "Discover. Shop. Upgrade."
  - `<h1 class="type-display">Latest Tech <span class="type-accent">Gadgets</span></h1>`
  - `type-body-lg` "Explore cutting-edge gadgets that upgrade your lifestyle."
  - CTAs: `btn btn-primary btn-lg` "Shop Now →" · `btn btn-outline btn-lg` "Browse Collection"
  - Meta row: flag + "US", "UK", "UAE" (region chips) and truck icon + "Fast Shipping" (`type-small`).
- **Right column:** product hero cluster (headphones, phone, smartwatch, earbuds + case) over the red panel, soft floor shadow under each.
- **Sticker:** `badge-sticker` "New Arrivals" at top-right of the red panel.
- **Carousel controls:** two round white `icon-btn` arrows + 3 dots bottom-right. Autoplay **off by default** (a11y); if on, pause on hover/focus and provide a pause button.
- LCP: hero image `priority`, explicit dimensions.

## 4. Category quick cards (`CategoryTiles.tsx`)
5 × `category-tile` in a 2-col (mobile) → 5-col (`lg`) grid:
| Title | Subtext | Image/icon |
|-------|---------|-----------|
| Audio | Premium Sound | headphones |
| Smart Devices | Smarter Living | smart speaker |
| Wearables | Track. Achieve. | watch |
| Accessories | Designed for You | phone case |
| Deals | Top Deals Today | red tag |
Each ends with a round red arrow (`icon-btn icon-btn-primary icon-btn-sm`). Whole tile is one link.

## 5. Trending Products (`TrendingProducts.tsx`)
- `section-heading`: **Trending Products** … **View all** (`section-link`).
- `grid-products` of `product-card`s. Reference products (placeholder data):
  | Product | Price | Likes |
  |---------|-------|-------|
  | Smart Watch Series 9 | $299.99 | 2.1k |
  | Wireless Earbuds Pro | $129.99 | 1.6k |
  | Portable Bluetooth Speaker | $59.99 | 1.2k |
  | 3-in-1 Wireless Charger | $49.99 | 980 |
  | 4K Camera Drone | $499.99 | 1.8k |
  | Smartphone Gimbal | $89.99 | 760 |
- Card: image (square, `object-contain`), title (`product-card-title`), price + ♥ likes row, "⋯" more-actions button (`icon-btn icon-btn-sm`, `aria-label="More actions for {title}"`).
- On mobile this can become a horizontal snap-scroller (`flex overflow-x-auto snap-x no-scrollbar`).

## 6. Trust bar (`TrustBar.tsx`)
`trust-bar` with 4 `trust-item`s (red outline icon + title + text):
Worldwide Shipping — *Fast delivery to US, UK & UAE* · Secure Payments — *100% safe & secure checkout* ·
30-Day Returns — *Hassle-free returns guaranteed* · Premium Support — *24/7 customer support*.

## 7. Ideas for Your Next Upgrade (`IdeaGrid.tsx`)
- `section-heading`: **Ideas for Your Next Upgrade** … **See more ideas**.
- 5 × `idea-tile` (2 cols mobile → 5 `lg`), each with caption + count and a round white arrow button bottom-right:
  Tech Setup Ideas (128) · Travel Tech Essentials (96) · Smart Home Inspiration (74) · Gaming Gear (155) · Minimal Desk Setup (87).

## 8. Promo + Newsletter (`PromoNewsletter.tsx`)
Two columns on `lg` (≈ 40 / 60), stacked on mobile.
- **Promo (`promo-banner`):** gift icon in a white circle · `promo-banner-title` "Exclusive Deals for You!" · `promo-banner-text` "Save more on top-rated gadgets handpicked just for you." · white button "Shop Deals →" (`btn btn-sm` on white; use `bg-white text-foreground`).
- **Newsletter (`newsletter`):** `<h3 class="type-h3">Get the Latest Tech & Deals</h3>` · `type-small text-muted` "Join our newsletter and never miss an update." · `newsletter-form` (email `input` + `btn btn-primary` "Subscribe") · optional decorative envelope illustration (`aria-hidden`, hidden on mobile).
- Form: labeled (visually hidden label OK), validates email, shows success/error via `role="status"`/`role="alert"`.

## 9. Footer strip (`components/layout/Footer.tsx`)
- Authenticity row (`trust-bar` style): **100% Authentic** (Genuine products only) · **Trusted by Thousands** (Loved by customers worldwide) · **Top Rated Store** (High-quality gadgets you can trust) · **Price Match Guarantee** (Best prices, always).
- **Follow us:** Facebook, Instagram, X, YouTube, TikTok icon-btns (`aria-label`, open in new tab with `rel="noopener noreferrer"`).
- Real footer (links, legal, payment icons, copyright) is not in the reference — add on a dark `bg-surface-inverse text-on-inverse` block; design it in a follow-up task.

---
## Data & states every section needs
| State | Requirement |
|-------|-------------|
| Loading | `skeleton` placeholders with the same dimensions (no layout shift) |
| Empty | friendly message + CTA (e.g. no products) |
| Error | inline message + retry; never a blank hole |
| Long text | `line-clamp` on titles, no overflow |

## Responsive summary
| Section | <640 | 768 | ≥1024 |
|---------|------|-----|-------|
| Hero | stacked, image under copy | stacked/2-col | 2-col with red panel |
| Category tiles | 2 cols | 3 cols | 5 cols |
| Products | 2 cols / snap-scroll | 3 | 4 → 6 (≥1280) |
| Trust bar | 2×2 | 2×2 | 1×4 with dividers |
| Ideas | 2 cols | 3 | 5 |
| Promo/newsletter | stacked | stacked | side by side |

## Acceptance criteria (homepage "done")
- Matches the reference at 1280 px within normal tolerance; sensible at 360/768/1024.
- Lighthouse (mobile): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- Keyboard-only walkthrough possible; visible focus everywhere; skip link works.
- Zero hard-coded colors/sizes; zero console errors/warnings.
