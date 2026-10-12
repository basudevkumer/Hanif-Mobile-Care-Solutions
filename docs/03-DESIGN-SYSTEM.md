# 03 · Design System

## Principles
1. **One accent.** Red `primary` is for actions and emphasis only. If everything is red, nothing is.
2. **Tokens, not values.** Every visual decision is a named token.
3. **Surface hierarchy.** White page → light-grey (`surface`) tiles → white (`surface-raised`) inner media → dark (`surface-inverse`) sections.
4. **Soft depth.** Cards are mostly flat; shadow appears on hover or for raised/popover elements.
5. **Big, bold headlines; calm body.** Display weight 800 with tight tracking; body at normal weight.
6. **Mobile-first.** Write base styles for phones, add `sm: md: lg: xl:` upward.

## Spacing
Use Tailwind's 4px scale (`p-4` = 16px). Common values from the reference:
| Use | Class |
|-----|-------|
| Card inner padding | `p-3` (product), `p-4` (tile), `p-5/6` (bars, banners) |
| Gap between cards | `gap-4` (`gap-5` on ≥xl) |
| Section vertical rhythm | `section-y` (fluid 40→72px) |
| Page gutters | `container-page` (16 → 24 → 32px) |
| Heading → content | `mb-5` (`.section-heading`) |

## Layout
- Max content width **1280px** (`max-w-page`, included in `container-page`).
- Product grid: **2 → 3 → 4 → 6 columns** (`grid-products`).
- Category quick cards: 2 cols mobile → 5 cols `lg`.
- Trust bar: 2 cols mobile → 4 cols `lg` with vertical dividers.

## Radius
| Token | px | Used by |
|-------|----|---------|
| `rounded-md` | 8 | buttons, inputs |
| `rounded-lg` | 12 | small media, code |
| `rounded-xl` | 16 | cards, tiles, idea tiles |
| `rounded-2xl` | 20 | hero, promo banner |
| `rounded-full` | – | pills, search, icon buttons, badges |

## Shadows
| Token | Use |
|-------|-----|
| `shadow-xs` | subtle lift |
| `shadow-card` | raised card at rest |
| `shadow-card-hover` | interactive hover |
| `shadow-popover` | menus, sticker badge |
| `shadow-brand` | primary button glow |

## Motion
- Durations: 200ms (color/hover), 300ms (lift), 500–700ms (image zoom, entrances).
- Easings: `ease-standard` for UI, `ease-out-expo` for entrances/zoom.
- Built-in animations: `animate-fade-in`, `animate-fade-up`, `animate-slide-in-right`, `animate-shimmer` (via `skeleton`).
- `prefers-reduced-motion` is honored globally in `base.css` — don't re-implement per component.

## Icons
Single stroke style, 20–24px, `currentColor` so they inherit text color. Decorative icons get `aria-hidden="true"`.

## Imagery
- Product images: transparent/white background, `object-contain`, square (`aspect-square`).
- Lifestyle/idea tiles: `object-cover`, 4:5, bottom scrim (`scrim-bottom`) for caption legibility.
- Always provide meaningful `alt` for product images; empty `alt=""` for purely decorative.
