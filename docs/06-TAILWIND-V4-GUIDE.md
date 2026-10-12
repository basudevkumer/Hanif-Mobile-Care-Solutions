# 06 · Tailwind CSS v4 Guide (project conventions)

This project uses **Tailwind v4 (CSS-first)**. Many v3 habits are wrong here. Read this before editing CSS.

## v3 → v4 cheat sheet
| Task | v3 (don't) | v4 (do) |
|------|-----------|---------|
| Config | `tailwind.config.js` | `@theme { … }` in CSS |
| Entry | `@tailwind base; …` | `@import "tailwindcss";` |
| Custom utility | `@layer utilities { .x {} }` / plugin | `@utility x { … }` |
| Custom variant | plugin `addVariant` | `@custom-variant name (…)` |
| Component class | `@layer components { .x {} }` ✅ still fine | same — but see "@apply limits" |
| Opacity | `bg-opacity-50` | `bg-primary/50` |
| Theme access in CSS | `theme('colors.red.500')` | `var(--color-brand-600)` |
| Content globs | `content: [...]` | automatic detection; `@source "…"` to add paths |
| Shadow/blur renamed | `shadow-sm`, `rounded-sm` | v4 scale shifted; use our named tokens |

## The directives we use

### `@theme` — design tokens (→ utilities + CSS variables)
```css
@theme {
  --color-brand-600: #c8050b;        /* → bg-brand-600, text-brand-600, border-…  */
  --radius-xl: 1rem;                 /* → rounded-xl                               */
  --shadow-card: 0 1px 2px …;        /* → shadow-card                              */
  --text-h2: clamp(…);               /* → text-h2                                  */
  --text-h2--line-height: 1.2;       /* paired line-height                         */
  --animate-fade-up: fade-up .5s …;  /* → animate-fade-up                          */
  @keyframes fade-up { … }           /* keyframes may live inside @theme           */
}
```
Namespaces: `--color-*`, `--font-*`, `--text-*`, `--radius-*`, `--shadow-*`, `--ease-*`, `--animate-*`,
`--breakpoint-*`, `--container-*`, `--spacing`.

**`--color-*: initial;`** (top of `tokens.css`) deletes Tailwind's default palette on purpose — only our tokens exist.

### `@theme inline` — tokens that point to other variables
Used in `semantic.css` so `bg-primary` compiles to `background-color: var(--primary)` and can be
overridden by `.dark` or any wrapper. Use `inline` whenever a token's value is a `var()` that must stay live.

### `@utility` — single-purpose utilities
```css
@utility container-page { max-width: var(--container-page); margin-inline: auto; … }
```
- Works with all variants automatically (`lg:container-page`, `hocus:focus-ring`).
- Name must be kebab-case alphanumeric. Can nest `&:hover`, `@media`, `& > *`.
- Can be used inside `@apply` ✅.

### `@layer components` — named UI blocks
For multi-property building blocks used many times (`.btn`, `.product-card`). Lower precedence than utilities so overrides are painless.

### `@custom-variant`
```css
@custom-variant dark (&:where(.dark, .dark *));
@custom-variant current (&[aria-current="page"], &[aria-current="true"]);
@custom-variant hocus { &:hover { @media (hover: hover) { @slot; } } &:focus-visible { @slot; } }
```
Project variants: `dark:` · `hocus:` · `current:` · `data-open:` · `data-closed:`.

### `@apply`
Allowed in `components.css` to compose utilities. Use sparingly; plain CSS with `var(--token)` is equally valid.

### `@source`
Needed only if class names live outside auto-detected files (e.g. a CMS package): `@source "../../node_modules/@acme/ui";`.

### `@plugin`
Only for official plugins (typography/forms). Currently commented out in `global.css`.

## ⚠ @apply limits (these produce build errors)
| ❌ Fails | Why | ✅ Fix |
|----------|-----|--------|
| `@apply card;` where `.card` is a plain class | Only real utilities are applicable (built-in or `@utility`) | Inline the utilities, or turn `card` into an `@utility` |
| `@apply group;` / `peer` | Marker classes, not utilities | Use a nested selector: `&:hover .child { … }` |
| `@apply` inside a CSS-module/Vue/Svelte file | Compiled separately, theme not visible | Add `@reference "…/global.css";` at the top of that file |

Convention: read tokens with `var(--token)`. The one place we use `theme()` is inside `@media (width >= theme(--breakpoint-md))`, because `var()` is not allowed in media queries.

## Where does a new style go?
```
Is it a design VALUE (color, size, radius, shadow, duration)?          → tokens.css (@theme)
Is it a MEANING of a color/role (what "primary" is)?                   → semantic.css
Is it a default for a bare HTML element?                               → base.css / typography.css (@layer base)
Is it one concern, reusable, layout/helper (no "look")?                → utilities.css (@utility)
Is it a named UI block used in 3+ places?                              → components.css (@layer components)
Is it a new state/condition selector (aria/data/dark)?                 → variants.css
Is it used once?                                                       → Tailwind classes inline in markup
```
Adding a new `.css` file: create it in `src/components/style/`, add one `@import` line to `global.css`
**in the correct order**, add a row to `AGENTS.md` and `08-FOLDER-STRUCTURE-AND-NAMING.md`.

## Import order (and why)
`tailwindcss` → `tokens` → `semantic` → `variants` → `base` → `typography` → `utilities` → `components`.
Tokens/semantic must precede anything that reads them; components last because they `@apply` utilities defined earlier.

## Class order in markup
Layout → box → typography → color → effects → states → responsive. Use `prettier-plugin-tailwindcss` to enforce.

## Arbitrary values
`w-[37px]`, `bg-[#abc]` are a smell. If you need it twice, make a token. If you need it once for a genuine
one-off (e.g. image aspect ratio), it's allowed — comment why.

## Adding a token (example)
```css
/* tokens.css */
@theme { --color-brand-sale: #ff3b30; }
/* semantic.css – only if it has a role */
:root { --badge-sale: var(--color-brand-sale); }
@theme inline { --color-badge-sale: var(--badge-sale); }
```
Then document it in `04-COLOR-SYSTEM.md` and `CHANGELOG.md`.

## Adding a component class (example)
```css
/* components.css, inside @layer components */
.rating { @apply inline-flex items-center gap-1 text-caption text-muted; }
.rating-star { @apply size-4 text-star; }
```
Then add it to `07-COMPONENT-CATALOG.md`.

## Debugging
- `Cannot apply unknown utility class X` → X is a plain class or a marker (see table above).
- Class does nothing → the file isn't scanned (`@source`) or you misspelled a token (utilities are generated only for existing tokens; e.g. `bg-red-500` correctly does nothing).
- Style order wrong → you put it in the wrong layer; utilities always beat components.
- Build the CSS alone to isolate: `npx @tailwindcss/cli -i src/app/global.css -o /tmp/out.css`.
