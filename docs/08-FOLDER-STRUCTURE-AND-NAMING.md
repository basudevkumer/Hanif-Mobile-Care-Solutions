# 08 · Folder Structure & Naming

## Target structure (Next.js App Router, assumption A-1)
```
.
├─ AGENTS.md  CLAUDE.md  README.md
├─ .github/copilot-instructions.md
├─ docs/                              ← all project documentation
├─ public/                            ← static assets (images/, icons/, og/)
└─ src/
   ├─ app/                            ← routes only (thin pages)
   │  ├─ global.css                   ← imports only
   │  ├─ layout.tsx
   │  ├─ page.tsx                     ← homepage (composes sections)
   │  └─ (shop)/…                     ← route groups
   ├─ components/
   │  ├─ style/                       ← ★ ALL design CSS (7 files)
   │  ├─ ui/                          ← primitives: Button, Input, Badge, IconButton
   │  ├─ layout/                      ← Header, SubNav, Footer, Container
   │  └─ sections/                    ← Hero, CategoryTiles, TrendingProducts, TrustBar, IdeaGrid, PromoNewsletter
   ├─ features/                       ← domain logic: cart/, wishlist/, search/, products/
   ├─ lib/                            ← utils: cn.ts, format.ts, seo.ts
   ├─ config/                         ← site.ts, nav.ts
   ├─ types/                          ← shared TS types
   └─ hooks/                          ← reusable client hooks
```
Dependency direction: `app → components/sections → components/ui → (style)`; `features` may use `ui`; **`ui` never imports `features`**.

## `src/components/style/` — the styling folder
| File | Layer | Contains |
|------|-------|----------|
| `tokens.css` | `@theme` | raw palette, type/radius/shadow/motion scales |
| `semantic.css` | `:root`, `@theme inline` | role colors, fonts, dark scaffold |
| `variants.css` | `@custom-variant` | project variants |
| `base.css` | `@layer base` | element defaults, focus, reduced motion |
| `typography.css` | base + `@utility` + components | headings, `type-*`, `.prose-shop` |
| `utilities.css` | `@utility` | layout/helper utilities |
| `components.css` | `@layer components` | named UI blocks |

Rules: no styles inside `global.css`; no per-component `.css` files sitting beside React files
(use the catalog classes or utilities); a new style file must be registered in `global.css`, `AGENTS.md`, and this table.

## Naming
| Thing | Convention | Example |
|-------|-----------|---------|
| React component file | `PascalCase.tsx` | `ProductCard.tsx` |
| Hook | `useCamelCase.ts` | `useWishlist.ts` |
| Util / lib | `kebab-case.ts` | `format-price.ts` |
| Route folder | `kebab-case` | `smart-home/` |
| CSS component class | `block`, `block-element`, `block-modifier` | `product-card-price-sale` |
| CSS utility | `kebab-case`, noun/purpose-first | `grid-products`, `section-y` |
| CSS token | `--{namespace}-{name}-{step}` | `--color-brand-600` |
| Types | `PascalCase` | `Product`, `CartItem` |
| Constants | `SCREAMING_SNAKE_CASE` | `MAX_CART_ITEMS` |
| Branches | `type/short-desc` | `feat/hero-section` |
| Commits | Conventional Commits | `feat(home): add trending products grid` |

## Assets
- `public/images/products/{slug}.webp`, `public/images/ideas/{slug}.webp`, `public/icons/…`.
- Prefer WebP/AVIF, ≤150 KB per product image, name by slug (not `IMG_1234`).
