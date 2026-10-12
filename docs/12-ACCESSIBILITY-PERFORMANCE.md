# 12 · Accessibility & Performance

Target: **WCAG 2.2 AA**. These are build requirements, not polish.

## Accessibility checklist
### Structure
- [ ] Landmarks: `<header>`, `<nav aria-label="Primary">`, `<main id="main">`, `<footer>`; second `nav` has a distinct label ("Categories").
- [ ] **Skip link** as first focusable element: `<a href="#main" class="sr-only-focusable btn btn-primary">Skip to content</a>`.
- [ ] One `<h1>`; headings in order; visual size via `type-*` classes.
- [ ] `<html lang="en">` (update per locale).

### Controls
- [ ] Actions are `<button>`, navigation is `<a>`. No clickable `<div>`.
- [ ] Icon-only controls have `aria-label`; decorative icons `aria-hidden="true"`.
- [ ] Every input has a `<label>` (visually hidden is fine); errors via `aria-describedby` + `aria-invalid`.
- [ ] Visible focus on everything (global `:focus-visible` ring + `focus-ring` utility for custom controls).
- [ ] Touch targets ≥ 44×44 px on mobile (`btn` is 44px; `icon-btn` is 40px — pad hit area with `p-0.5`/`-m` or use `size-11` for primary mobile actions).
- [ ] Current page marked with `aria-current="page"` (drives `nav-link` styling).

### Color & motion
- [ ] Text contrast ≥ 4.5:1 (large text ≥ 3:1); UI boundaries/icons ≥ 3:1 — tokens already comply (see `04-COLOR-SYSTEM`).
- [ ] Never convey meaning by color alone (sale price also shows strikethrough/badge text; errors have text).
- [ ] Reduced motion honored globally. No autoplay carousel without pause control.

### Patterns
| Pattern | Requirements |
|---------|--------------|
| Carousel | region `aria-roledescription="carousel"`, labelled slides, prev/next buttons with labels, pause if auto |
| Drawer/menu | focus trap, ESC closes, returns focus to trigger, `aria-expanded` on trigger |
| Region/currency switch | native `<select>` or accessible listbox; announce change |
| Product card | one primary link; title is the link text; price readable by SR ("$299.99") |
| Newsletter form | `role="status"` success, `role="alert"` error |
| Toasts | `role="status"`, not focus-stealing |

### Testing
Keyboard-only pass · screen reader smoke test (VoiceOver/NVDA) · axe DevTools · Lighthouse a11y ≥ 95 · zoom to 200%.

## Performance checklist
- [ ] Hero (LCP) image: `priority`, correct `sizes`, AVIF/WebP, ≤ 150 KB.
- [ ] All other images lazy; every image has width/height or `aspect-*` to prevent CLS.
- [ ] Fonts: `next/font` (self-hosted, `display: swap`), only the weights used (400/500/600/700/800 — drop unused).
- [ ] Minimal client JS: server components by default; dynamic-import heavy widgets (carousel) below the fold.
- [ ] Icons imported per-icon (tree-shaken), no whole-library imports.
- [ ] Cache: ISR/`revalidate` for catalog pages; immutable caching for hashed assets.
- [ ] No render-blocking third-party scripts; analytics deferred.
- [ ] Budgets (mobile, 4G): LCP < 2.5 s · CLS < 0.1 · INP < 200 ms · JS < 170 KB gz on home.

## SEO basics
Metadata API (title ≤ 60, description ≤ 160), canonical URLs, Open Graph image, `Product` JSON-LD on product pages,
`sitemap.xml` + `robots.txt`, semantic URLs (`/audio/wireless-earbuds-pro`).
