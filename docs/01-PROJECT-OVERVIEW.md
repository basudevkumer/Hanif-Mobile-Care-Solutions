# 01 · Project Overview

## Product
An online storefront for consumer electronics: **gadgets, smart home, audio, wearables, accessories, deals**.
Business: **Hanif Mobile Care Solutions**.

The approved visual reference is a homepage mock titled "TechVerse — Discover. Shop. Upgrade."
**"TechVerse" is the reference design's placeholder brand; use the real store name/logo in production**
(store name is a single config value — see `docs/02-ARCHITECTURE.md` → Site config).

## Goals
- Fast, trustworthy, mobile-first shopping experience.
- A strict, reusable design system so any agent can add pages that look identical in style.
- Production-grade code and accessibility from day one.

## Brand personality
Confident, modern, clean. **Red** is the single accent (calls to action, active states, sale), **black/near-black**
for text and headlines, **white / light grey** for surfaces. Lots of whitespace, rounded cards, soft shadows.

## Information architecture (from the reference)
- **Primary nav:** Home · Today · Following · Shop · Account
- **Category nav:** Gadgets · Smart Home · Audio · Wearables · Accessories · Sale
- **Utilities:** search, region switch (US / UK / UAE), wishlist, account
- **Homepage sections:** hero → category quick cards → trending products → trust bar →
  "Ideas for your next upgrade" → exclusive-deals banner + newsletter → authenticity strip + socials

Section-by-section spec: [`10-PAGE-SPEC-HOME.md`](10-PAGE-SPEC-HOME.md).

## Status
| Area | State |
|------|-------|
| Design tokens + CSS system | ✅ Created and compile-verified (Tailwind 4.3.3) |
| Documentation | ✅ Created |
| Visual QA in browser vs reference | ⏳ Not done (T-002) |
| Application code (pages/components) | ⏳ Not part of this kit — see `TASKS.md` |

## Assumptions (⚠ confirm, then delete the row)
| ID | Assumption | Why | If wrong |
|----|------------|-----|----------|
| A-1 | Framework is **React with Next.js (App Router) + TypeScript** | `src/app/global.css` + "components" folder layout | Keep CSS as is; only change the font-loading snippet and import path |
| A-2 | Font is **Inter** | Reference uses a geometric/neo-grotesk bold sans | Change `--font-sans` in `semantic.css` only |
| A-3 | Light theme only at launch | Reference is light | `.dark` scaffold exists but is undesigned (D-007) |
| A-4 | Prices shown as `$` | Reference shows `$` | Format via a single `formatPrice()` helper (never hard-code symbols) |
| A-5 | Regions US / UK / UAE | Reference shows them | Make regions config-driven |

## Open questions (ask the owner — don't invent answers)
1. Confirm framework & package manager (A-1).
2. Real store name, logo files, and domain.
3. Currency/regions for the real store (A-4, A-5) — local currency? multi-currency?
4. Backend/data source: headless commerce (Shopify Storefront API, Medusa…), custom API, or static JSON?
5. Payments and shipping providers.
6. Auth: needed at launch? (header has account/"Following"/wishlist).
7. Languages: English only, or localization (RTL / other scripts affect font stack)?
8. Real product photography (reference imagery is AI-style mock).
