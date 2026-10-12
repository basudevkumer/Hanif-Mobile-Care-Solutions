# DECISIONS — append-only decision log

Format: **ID · Title · Status** (`accepted` / `proposed` / `superseded by D-xxx`) · Date · Context → Decision → Consequences.
Never delete entries; supersede them.

---
### D-001 · Tailwind CSS v4, CSS-first configuration · accepted · 2026-10-13
**Context:** Requirement to use modern Tailwind v4 features (`@theme`, `@utility`, `@layer components`, `@custom-variant`).
**Decision:** No `tailwind.config.js`; all tokens and extensions live in CSS.
**Consequences:** Styles are portable and greppable; v3-era plugins/snippets don't apply (see `06-TAILWIND-V4-GUIDE.md`).

### D-002 · Styling code lives in `src/components/style/`, `global.css` is imports-only · accepted · 2026-10-13
**Context:** Owner requested a dedicated style folder with `global.css` importing the files.
**Decision:** Seven concern-based files; fixed import order.
**Consequences:** New styles must go in the right file (decision table in doc 06).

### D-003 · Two-layer tokens: raw (`tokens.css`) → semantic (`semantic.css`) · accepted · 2026-10-13
**Context:** Need theming (dark/sale) without touching components.
**Decision:** Components use semantic utilities (`bg-primary`); raw palette only feeds semantic layer.
**Consequences:** Re-theme by editing one file. Slightly more indirection.

### D-004 · Default Tailwind palette disabled (`--color-*: initial`) · accepted · 2026-10-13
**Context:** Prevent off-brand colors from agents/humans using `bg-red-500` etc.
**Decision:** Only project tokens exist. `white`/`black` re-declared.
**Consequences:** Unknown color classes silently produce nothing — by design.

### D-005 · Color values sampled from the reference design; brand-600 = `#C8050B` · accepted · 2026-10-13
**Context:** Reference red measured ≈ `#C10207`–`#CA060A` (varies with imagery).
**Decision:** Primary `#C8050B` — within the sampled range and passes AA with white text (6.0:1).
**Consequences:** If the owner has an official brand hex, change `--color-brand-600` and re-run contrast checks.

### D-006 · Contrast-driven token adjustments · accepted · 2026-10-13
**Context:** Initial `ink-500` gave 4.09:1 on the grey surface and `ink-300` input borders 1.65:1.
**Decision:** `ink-500 → #6B6B71` (4.7:1 on surface); `ink-400 → #8A8A91` and new semantic `border-input` (≥3:1) for form controls.
**Consequences:** Greys are slightly darker than the reference's raw sampling; accessibility wins.

### D-007 · Dark mode scaffolded but not designed · proposed · 2026-10-13
**Context:** Reference is light-only.
**Decision:** `@custom-variant dark` + `.dark` role overrides exist; no dark design pass yet.
**Consequences:** Don't ship a dark toggle until a design review (new task needed).

### D-008 · Own `.prose-shop` instead of `@tailwindcss/typography` · accepted · 2026-10-13
**Context:** Avoid an extra dependency; styles must follow our tokens exactly.
**Decision:** Custom rich-text class; plugin line left commented in `global.css`.
**Consequences:** Switching later = delete `.prose-shop`, enable plugin, log a new decision.

### D-009 · Inter as the type family · proposed · 2026-10-13
**Context:** Reference uses a bold geometric sans; exact font unknown.
**Decision:** Inter (A-2). Stack lives in `semantic.css` only.
**Consequences:** Swapping fonts is a one-line change.

### D-010 · Framework assumed to be Next.js App Router + TypeScript · proposed · 2026-10-13
**Context:** The uploaded archive contained only a Windows shortcut, so the real stack could not be inspected.
**Decision:** Docs target Next.js (A-1). CSS is framework-agnostic.
**Consequences:** Confirm in T-001; adjust `02-ARCHITECTURE.md`/`08-…` if different.
