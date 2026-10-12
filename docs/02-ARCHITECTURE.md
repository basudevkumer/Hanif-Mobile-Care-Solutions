# 02 · Architecture

> Status: **target architecture** for the assumed stack (A-1). Update when the repo's real structure is confirmed.

## Stack
| Concern | Choice |
|---------|--------|
| UI | React + Next.js App Router, TypeScript (strict) |
| Styling | **Tailwind CSS v4**, CSS-first (`@theme`) — no JS config |
| Fonts | Inter via `next/font` → CSS var `--font-inter` |
| Icons | One icon library, tree-shaken (e.g. `lucide-react`) — pick one, record in `DECISIONS.md` |
| Images | `next/image`, explicit `width/height` or `fill` + `sizes` |
| State | Server Components by default; client state only where interactive |

## Styling architecture (two-layer tokens)
```
tokens.css   (raw)      --color-brand-600: #c8050b
     │
semantic.css (meaning)  --primary: var(--color-brand-600)   →  utility: bg-primary
     │
components.css          .btn-primary { @apply bg-primary … }
     │
React / HTML            <button class="btn btn-primary">
```
- Change **brand look** → edit `tokens.css`.
- Change **what a role means** (dark mode, sale theme) → edit `semantic.css`.
- Change **how a component looks** → edit `components.css`.
- **Never skip a layer** (a component must not reference a raw hex).

## Cascade layers (Tailwind v4 native)
`theme → base → components → utilities`. A utility in markup always beats a component class
(`class="btn rounded-full"` works without `!important`).

## Directory map
See [`08-FOLDER-STRUCTURE-AND-NAMING.md`](08-FOLDER-STRUCTURE-AND-NAMING.md).

## Rendering strategy (recommended)
- Home, category, product pages: **server-rendered / ISR**, cache with revalidation.
- Cart, wishlist, account: client islands.
- Search: client input + server route/handler.

## Site config (single source for brand strings)
Create `src/config/site.ts` and import it everywhere; never repeat the store name or tagline in JSX:
```ts
export const siteConfig = {
  name: "Hanif Mobile Care Solutions",   // replace if the storefront brand differs
  tagline: "Discover. Shop. Upgrade.",
  regions: ["US", "UK", "UAE"] as const, // A-5
  currency: "USD",                       // A-4
} as const;
```

## Data model (proposal — adjust to the real backend)
```ts
type Product = {
  id: string;
  slug: string;
  title: string;
  price: { amount: number; currency: string; compareAt?: number };
  image: { src: string; alt: string; width: number; height: number };
  category: "audio" | "smart-home" | "wearables" | "accessories" | "gadgets";
  likes?: number;      // shown as ♥ count on cards
  isNew?: boolean;
};
```
Keep UI components dumb: they take typed props; fetching happens in server components / loaders.

## Cross-cutting
- **Errors:** route-level `error.tsx` + inline field errors (`.field-error`).
- **Loading:** route `loading.tsx` using the `skeleton` utility.
- **SEO:** metadata API per page, JSON-LD `Product` on product pages, one `<h1>` per page.
