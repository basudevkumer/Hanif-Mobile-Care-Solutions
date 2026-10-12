# 05 · Typography

## Font
**Inter** (assumption A-2), weights 400 / 500 / 600 / 700 / 800.
Stack is defined once, in `semantic.css`:
`var(--font-inter, "Inter"), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, …`
The `var(--font-inter, "Inter")` fallback keeps the declaration valid when `next/font` is not used.

### Loading with `next/font` (Next.js)
```tsx
// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```
Vite / plain HTML: load Inter via `<link>` or `@fontsource-variable/inter`; no other change needed.

## Scale (tokens in `tokens.css`)
| Preset class | Size | Line-height | Tracking | Weight | Used for |
|--------------|------|-------------|----------|--------|----------|
| `type-display` | 44 → 72px (fluid) | 1.02 | −0.035em | 800 | Hero headline "Latest Tech Gadgets" |
| `type-h1` / `<h1>` | 34 → 48px | 1.1 | −0.03em | 800 | Page titles |
| `type-h2` / `<h2>` | 26 → 34px | 1.2 | −0.025em | 700 | Major sections |
| `type-h3` / `<h3>` | 20 → 24px | 1.3 | −0.015em | 700 | Section titles ("Trending Products"), banners |
| `type-h4` / `<h4>` | 18px | 1.4 | – | 600 | Card group titles |
| `type-body-lg` | 18px | 1.65 | – | 400 | Lead paragraph (muted color built in) |
| `type-body` | 16px | 1.6 | – | 400 | Default body |
| `type-small` | 14px | 1.5 | – | 400 | Buttons, nav, helper text |
| `type-caption` | 12px | 1.4 | – | 400 | Product titles, meta (subtle color built in) |
| `type-overline` | 15px | 1.3 | 0.01em | 600 | Red eyebrow "Discover. Shop. Upgrade." |
| `type-accent` | inherit | – | – | – | Red accent word inside a headline |

Raw Tailwind sizes also exist as tokens: `text-display`, `text-h1`…`text-caption`, `text-overline`
(they carry their own line-height/tracking/weight via `--text-*--*`). Prefer the `type-*` presets for headings
since they also bundle `font-family` and `text-wrap: balance`.

## Choosing the element vs. the look
Semantics (SEO/a11y) and appearance are separate:
```html
<h2 class="type-h3">Trending Products</h2>   <!-- h2 in the outline, h3 visual size -->
```
- One `<h1>` per page. Don't skip levels.
- Bare `<h1>`–`<h4>` already get the default style from `base`/`typography.css`.

## Hero headline pattern
```html
<p class="type-overline">Discover. Shop. Upgrade.</p>
<h1 class="type-display">Latest Tech <span class="type-accent">Gadgets</span></h1>
<p class="type-body-lg max-w-md">Explore cutting-edge gadgets that upgrade your lifestyle.</p>
```

## Text color rules
`text-foreground` (default) · `text-muted` secondary · `text-subtle` captions/placeholders only · `text-primary` links/accents.
Never use `text-subtle` for essential information that isn't a caption.

## Numbers & prices
Use `tabular-nums` on price columns and counters (`font-variant-numeric`). Format with one shared `formatPrice()`
(Intl.NumberFormat) — never concatenate `"$" + n`.

## Rich text — `.prose-shop`
For CMS/markdown content (descriptions, policies, blog). Max width 68ch, styled lists, links, tables, quotes, code.
```html
<article class="prose-shop">…rendered HTML…</article>
```
### Using the official `@tailwindcss/typography` instead (optional)
```bash
npm i -D @tailwindcss/typography
```
In `global.css` uncomment `@plugin "@tailwindcss/typography";`, then use `class="prose"`.
If adopted, delete `.prose-shop` and record it in `DECISIONS.md`. Do not run both.

## Line length & wrapping
Body copy 45–75 characters per line (`max-w-prose` / `max-w-md` for hero text). Headings use `text-wrap: balance`,
paragraphs `text-wrap: pretty` (already set).
