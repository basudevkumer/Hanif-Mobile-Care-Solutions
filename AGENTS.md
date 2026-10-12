# AGENTS.md — Start here (all AI agents)

This file is the **single entry point** for any AI coding agent (Claude, Copilot, Cursor, Codex, Gemini…).
Read it fully before touching the project. It is short on purpose; details live in `docs/`.

## What this project is
An **electronics e-commerce storefront** (phones, audio, wearables, smart-home, accessories) for
**Hanif Mobile Care Solutions**. The visual design is fixed: **red · white · black**, clean cards,
soft shadows, large bold headlines. Full brief: `docs/01-PROJECT-OVERVIEW.md`.

## Non-negotiable rules
1. **Tailwind CSS v4 only.** CSS-first config. There is **no `tailwind.config.js`**. Tokens live in `@theme`.
2. **All styling code lives in `src/components/style/*.css`.** `src/app/global.css` only `@import`s them.
3. **Never hard-code a color, font size, radius or shadow.** Use tokens.
   - ✅ `bg-primary`, `text-muted`, `rounded-xl`, `shadow-card`, `type-h2`
   - ❌ `bg-[#c8050b]`, `text-[13px]`, `style={{color:"red"}}`, `bg-red-500` (default palette is disabled on purpose)
4. **Use semantic colors in components** (`primary`, `surface`, `foreground`, `muted`, `border`).
   Raw palette (`brand-600`, `ink-900`) is only for `semantic.css` and rare illustrations.
5. **Repeated UI → a class in `components.css` or a React component.** One-off layout → utilities in markup.
6. **Accessibility is part of "done"** (focus ring, contrast, labels, keyboard). See `docs/12-ACCESSIBILITY-PERFORMANCE.md`.
7. **Production-quality code only** — typed, small, readable, no dead code, no TODO left behind. See `docs/09-CODING-STANDARDS.md`.
8. **Keep the docs in sync** with every change (see "Sync protocol" below).

## Read order
| # | File | Read when |
|---|------|-----------|
| 1 | `docs/00-INDEX.md` | always — map of all docs |
| 2 | `docs/TASKS.md` | before starting work — pick/claim a task |
| 3 | `docs/03-DESIGN-SYSTEM.md` + `04-COLOR-SYSTEM.md` + `05-TYPOGRAPHY.md` | any UI work |
| 4 | `docs/06-TAILWIND-V4-GUIDE.md` | writing/editing CSS |
| 5 | `docs/07-COMPONENT-CATALOG.md` | before creating a component (reuse first) |
| 6 | `docs/10-PAGE-SPEC-HOME.md` | building the homepage |
| 7 | `docs/11-AGENT-WORKFLOW.md` | multi-agent coordination, definition of done |

## Style files (the whole styling system)
```
src/app/global.css                 ← imports only
src/components/style/
  tokens.css       @theme            raw palette + type/radius/shadow/motion scales
  semantic.css     :root + @theme inline   meaning-based colors, fonts, dark scaffold
  variants.css     @custom-variant   dark · hocus · current · data-open/closed
  base.css         @layer base       element defaults, focus ring, reduced motion
  typography.css   base + @utility   headings, type-* presets, .prose-shop
  utilities.css    @utility          container-page, section-y, grid-products, …
  components.css   @layer components .btn, .input, .product-card, …
```

## Sync protocol (short version — full text in `docs/11-AGENT-WORKFLOW.md`)
- **Before work:** read `docs/TASKS.md`; set your task to `in-progress` with your agent name + date.
- **After work:** set it to `done`, add a line to `docs/CHANGELOG.md`, and update any doc your change made false.
- **Non-obvious choice?** Add an entry to `docs/DECISIONS.md` instead of leaving it in a code comment.
- **Docs and code disagree?** Treat the code as current truth, fix the doc in the same change.
- **Never** edit another agent's `in-progress` task or files without a note in `TASKS.md`.

## Unknowns (do not guess — ask the human or check the repo)
See "Open questions" in `docs/01-PROJECT-OVERVIEW.md` (framework confirmation, currency, regions, backend, payments).
