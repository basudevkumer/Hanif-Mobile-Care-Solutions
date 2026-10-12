# 04 · Color System

Colors were sampled from the reference image: primary red ≈ `#C10207`–`#CA060A`, page `#FFFFFF`,
card surface `#F2F2F4`, text near-black. The primary scale is centered on `brand-600 = #C8050B`
(slightly adjusted so white-on-red text passes WCAG AA).

> Values are defined in `src/components/style/tokens.css`. If this table disagrees, **the CSS wins**.

## Brand red — `brand-*`
| Token | Hex | Role |
|-------|-----|------|
| brand-50 | `#FFF1F1` | tinted backgrounds (`primary-soft`) |
| brand-100 | `#FFE1E1` | text selection bg |
| brand-200 | `#FFC8C9` | |
| brand-300 | `#FF9FA1` | |
| brand-400 | `#F76569` | dark-mode hover |
| brand-500 | `#E32B31` | dark-mode primary |
| **brand-600** | **`#C8050B`** | **PRIMARY** (buttons, links, accents) |
| brand-700 | `#A60409` | hover; gradient end |
| brand-800 | `#860A0E` | pressed |
| brand-900 | `#6E0E11` | text on soft red |
| brand-950 | `#3D0305` | dark-mode soft bg |

## Ink (neutrals) — `ink-*`
| Token | Hex | Role |
|-------|-----|------|
| ink-50 | `#F8F8FA` | |
| **ink-100** | **`#F2F2F4`** | **`surface`** (cards, tiles, trust bar) |
| ink-200 | `#E4E4E8` | `border` |
| ink-300 | `#C9C9CE` | `border-strong` |
| ink-400 | `#8A8A91` | `border-input` (≥3:1), icons |
| ink-500 | `#6B6B71` | `subtle` text (captions, placeholders) |
| ink-600 | `#55555A` | `muted` text |
| ink-700 | `#3A3A3E` | |
| ink-800 | `#242426` | dark button hover |
| ink-900 | `#17171A` | `surface-inverse` |
| ink-950 | `#0F0F10` | `foreground` (headings, body) |

## Status
| Role | Bg | Text/Icon |
|------|----|-----------|
| success | `success-50` | `success-600/700` |
| warning | `warning-50` | `warning-500/700` |
| info | `info-50` | `info-600/700` |
| danger | `danger-50` | `danger-600/700` |
| star (ratings) | – | `star` `#F5A524` |

Danger red is close to brand red — **always pair status color with an icon and/or text**, never color alone.

## Semantic roles (use these in components)
| Utility | Resolves to | Use for |
|---------|-------------|---------|
| `bg-background` | white | page |
| `text-foreground` | ink-950 | body/headings |
| `bg-surface` | ink-100 | cards, tiles |
| `bg-surface-raised` | white | media area, inputs, popovers |
| `bg-surface-inverse` / `text-on-inverse` | ink-900 / white | dark sections, footer |
| `text-muted` | ink-600 | secondary text |
| `text-subtle` | ink-500 | captions, placeholders |
| `border-border` | ink-200 | dividers, card outlines |
| `border-border-strong` | ink-300 | outline buttons |
| `border-border-input` | ink-400 | form controls |
| `bg-primary` · `hover:bg-primary-hover` · `active:bg-primary-active` | brand-600/700/800 | CTA |
| `text-primary-foreground` | white | text on red |
| `bg-primary-soft` | brand-50 | selected chip, soft badge |
| `ring-ring` | brand-600 | focus ring |
| `text-price` / `text-price-sale` | ink-950 / brand-600 | prices |

## Do / Don't
- ✅ `bg-primary text-primary-foreground` for CTAs · `text-muted` for helper text · `bg-surface` for cards
- ✅ Opacity modifiers work: `bg-primary/10`, `text-white/80`
- ❌ `bg-[#c8050b]`, `text-red-600` (doesn't exist — default palette is removed), `bg-gray-100`
- ❌ Red body text, red large fills outside hero/promo, red + danger-red side by side

## Contrast (computed, WCAG 2.1)
| Pair | Ratio | Verdict |
|------|-------|---------|
| foreground on white | 19.2 | AAA |
| white on primary (`brand-600`) | 6.0 | AA ✓ (body text OK) |
| white on primary-hover (`brand-700`) | 8.0 | AAA |
| primary on white | 6.0 | AA ✓ |
| primary on surface | 5.4 | AA ✓ |
| muted on white / surface | 7.4 / 6.6 | AAA / AA ✓ |
| subtle on white / surface | 5.3 / 4.7 | AA ✓ |
| danger-700 on white | 6.6 | AA ✓ |
| input border `ink-400` on white | 3.4 | UI ≥3:1 ✓ |
| ❌ `ink-300` on white | 1.65 | decorative dividers only — never as the sole boundary of a control |

Re-run the check whenever a color token changes (T-003 tracks automating this).

## Theming (change ONLY `semantic.css`)
- **Dark mode:** add `class="dark"` on `<html>`; `.dark { … }` in `semantic.css` swaps roles. Undesigned — see D-007.
- **Sale event theme:** wrap a section in `<div class="theme-sale">` and define `.theme-sale { --primary: … }` in `semantic.css`.
