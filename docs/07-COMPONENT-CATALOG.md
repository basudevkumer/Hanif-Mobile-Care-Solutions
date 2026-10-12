# 07 · Component Catalog (CSS classes)

All classes below live in `src/components/style/components.css` unless noted.
**Reuse before inventing.** If nothing fits, add a class (see `06-TAILWIND-V4-GUIDE.md`) and add it here.
Naming: `block`, `block-element`, `block-modifier`. Modifiers are separate classes (`btn btn-primary`).

## Buttons
| Class | Look | Notes |
|-------|------|-------|
| `btn` | base: 44px high, 8px radius, 14px semibold | always combine with a variant |
| `btn-primary` | red fill, white text, brand glow | main CTA ("Shop Now", "Subscribe") |
| `btn-outline` | white, grey border → black on hover | secondary ("Browse Collection") |
| `btn-dark` | near-black fill | on light promos |
| `btn-ghost` | transparent → grey on hover | tertiary |
| `btn-sm` / `btn-lg` | 36px / 48px | size modifiers |
| `btn-block` | full width | forms, mobile |
| `icon-btn` (+ `icon-btn-primary`, `icon-btn-sm`) | 40px round icon button | wishlist, arrows, "go" |
```html
<a href="/shop" class="btn btn-primary btn-lg">Shop Now <ArrowRight aria-hidden /></a>
<button class="icon-btn" aria-label="Add to wishlist"><Heart aria-hidden /></button>
```
Icon-only buttons **must** have `aria-label`. Disabled: use the `disabled` attribute (styled automatically).

## Forms
| Class | Use |
|-------|-----|
| `field-label` | `<label>` above a control |
| `input` | text/email/etc. Error state via `aria-invalid="true"` (red border + ring) |
| `field-error` | message under a control, linked with `aria-describedby` |
| `search-field` + `search-field-input` | header pill search with trailing round submit button |
```html
<label class="field-label" for="email">Email</label>
<input id="email" type="email" class="input" aria-invalid="false" aria-describedby="email-err" />
<p id="email-err" class="field-error" role="alert">Enter a valid email address.</p>
```

## Surfaces
| Class | Use |
|-------|-----|
| `card` | flat grey surface (`bg-surface`, 16px radius) |
| `card-raised` | white, border, `shadow-card` |
| `card-interactive` | adds hover lift + shadow (combine with `card`/`card-raised`) |

## Badges, chips
| Class | Use |
|-------|-----|
| `badge` + `badge-primary` / `badge-soft` / `badge-neutral` / `badge-success` | small status/labels (e.g. "New", "-20%") |
| `badge-sticker` | big round "New Arrivals" sticker on hero |
| `chip` | filter/region pill; selected via `aria-current="true"` |

## Navigation
| Class | Use |
|-------|-----|
| `nav-link` | primary nav; `aria-current="page"` → red + underline |
| `subnav-link` | category strip under the header |
```html
<a href="/" class="nav-link" aria-current="page">Home</a>
```

## Section header
```html
<div class="section-heading">
  <h2 class="section-title">Trending Products</h2>
  <a class="section-link" href="/shop">View all <ChevronRight aria-hidden /></a>
</div>
```

## Category quick card
`category-tile` · `category-tile-title` · `category-tile-text` — icon/image left, text middle, round red arrow `icon-btn-primary icon-btn-sm` right.

## Product card
```html
<article class="product-card">
  <a href="/p/smart-watch-9" class="product-card-media"><img src="…" alt="Smart Watch Series 9" /></a>
  <div class="product-card-body">
    <h3 class="product-card-title">Smart Watch Series 9</h3>
    <div class="flex items-center justify-between">
      <span class="product-card-price">$299.99</span>
      <span class="product-card-likes"><Heart class="size-3.5 text-primary" aria-hidden /> 2.1k</span>
    </div>
  </div>
</article>
```
Sale: `<span class="product-card-price product-card-price-sale">$249</span> <s class="product-card-price-old">$299</s>`.
Grid: `<div class="grid-products">…</div>`.

## Trust bar
`trust-bar` > `trust-item` > icon + (`trust-item-title`, `trust-item-text`). Dividers between items appear from `lg:` automatically.

## Idea tile
`idea-tile` (4:5 image card with bottom scrim) · `idea-tile-title` · `idea-tile-meta`. The `<img>` is absolutely positioned inside; caption elements sit above the scrim.

## Promo + newsletter
`promo-banner` (red gradient, white text) · `promo-banner-title` · `promo-banner-text`.
`newsletter` · `newsletter-form` (input + `btn btn-primary`).

## Misc
`divider` (1px rule) · `prose-shop` (rich text, in `typography.css`).

## Utilities (in `utilities.css` / `typography.css`)
| Utility | Purpose |
|---------|---------|
| `container-page` | centered 1280px column with responsive gutters |
| `section-y` | fluid vertical padding between sections |
| `grid-products` | responsive product grid 2/3/4/6 columns |
| `no-scrollbar` | hide scrollbar on horizontal carousels |
| `focus-ring` | consistent focus outline for custom controls |
| `bg-hero-red` | red panel with depth gradient |
| `scrim-bottom` | dark gradient under captions on images |
| `skeleton` | shimmer loading block |
| `sr-only-focusable` | "Skip to content" link that appears on focus |
| `type-*` | type presets (see `05-TYPOGRAPHY.md`) |

## Variants
`dark:` · `hocus:` (hover on pointer devices + keyboard focus) · `current:` (aria-current) · `data-open:` / `data-closed:`.

## React component conventions (when wrapping these classes)
- One component per file, PascalCase, props typed, default export only for pages.
- Components accept `className` and merge with `clsx`/`tailwind-merge` (`cn()` helper).
- Don't re-implement a look in JSX class strings that a catalog class already provides.
- Variants (`variant="primary" | "outline"`) map to catalog classes via a small lookup object, not string concatenation.
