# TASKS — live task board

> Agents: update this file at the **start** (claim) and **end** (done) of every session.
> Format and rules: `docs/11-AGENT-WORKFLOW.md`. IDs are never reused. Append new tasks at the bottom.

Statuses: `todo` · `in-progress` · `blocked` · `review` · `done`

| ID | Title | Status | Owner | Updated | Depends | Notes |
|----|-------|--------|-------|---------|---------|-------|
| T-000 | Create Tailwind v4 design system (tokens, semantic, variants, base, typography, utilities, components) + agent docs | done | claude | 2026-10-13 | – | Compile-verified with Tailwind 4.3.3. Not visually reviewed in a browser. |
| T-001 | Confirm assumptions A-1…A-5 and open questions in `01-PROJECT-OVERVIEW.md` with the owner | todo | – | 2026-10-13 | – | Blocks T-004 font/import snippet if framework ≠ Next.js |
| T-002 | Visual QA: build a `/style-guide` route (colors, type scale, buttons, inputs, cards) and compare with the reference design at 1280px | todo | – | 2026-10-13 | T-004 | Adjust tokens if red/greys look off; log in CHANGELOG |
| T-003 | Automate contrast check for token pairs (script in `scripts/`) and run in CI | todo | – | 2026-10-13 | – | Current ratios are in `04-COLOR-SYSTEM.md` |
| T-004 | Root layout: import `global.css`, load Inter via `next/font`, `lang`, skip link, `<main id="main">` | todo | – | 2026-10-13 | T-001 | See `05-TYPOGRAPHY.md` |
| T-005 | UI primitives: `Button`, `IconButton`, `Input`, `Badge` (typed wrappers over catalog classes) + `cn()` helper | todo | – | 2026-10-13 | T-004 | `07-COMPONENT-CATALOG.md` |
| T-006 | Header + SubNav (search, nav, region switch, wishlist, mobile drawer) | todo | – | 2026-10-13 | T-005 | Spec §1–2 |
| T-007 | Hero section (+ accessible carousel controls) | todo | – | 2026-10-13 | T-005 | Spec §3. Needs product imagery (open question 8) |
| T-008 | Category quick cards | todo | – | 2026-10-13 | T-005 | Spec §4 |
| T-009 | `ProductCard` + Trending Products grid | todo | – | 2026-10-13 | T-005, T-014 | Spec §5 |
| T-010 | Trust bar | todo | – | 2026-10-13 | T-005 | Spec §6. Verify business claims |
| T-011 | "Ideas for your next upgrade" tiles | todo | – | 2026-10-13 | T-005 | Spec §7 |
| T-012 | Promo banner + newsletter form (validation, status messages) | todo | – | 2026-10-13 | T-005 | Spec §8 |
| T-013 | Footer: authenticity strip, socials, full footer (needs design) | todo | – | 2026-10-13 | T-005 | Spec §9 |
| T-014 | Product data layer + types + `formatPrice()` | todo | – | 2026-10-13 | T-001 | Backend unknown (open question 4) |
| T-015 | SEO: metadata, sitemap, robots, JSON-LD | todo | – | 2026-10-13 | T-009 | `12-ACCESSIBILITY-PERFORMANCE.md` |
| T-016 | Tooling: ESLint (+ jsx-a11y), Prettier (+ tailwind plugin), Vitest, Playwright, CI | todo | – | 2026-10-13 | T-001 | `09-CODING-STANDARDS.md` |
| T-017 | Homepage assembly + Lighthouse pass (acceptance criteria in spec) | todo | – | 2026-10-13 | T-006…T-013 | Perf ≥90 / A11y ≥95 |

## Handoff log (newest first)
```
2026-10-13 claude: Done: T-000 (style system + docs). Not done: any application code, visual QA.
Gotchas: Tailwind v4 cannot @apply plain classes or `group` (see 06 guide). Default color palette is disabled on purpose.
Next: T-001 (confirm stack) then T-004.
```
