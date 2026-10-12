# CHANGELOG — append-only, newest first

Format: `YYYY-MM-DD · agent · area · what changed (and why, if not obvious)`

## 2026-10-13
- antigravity · common · Created reusable `Container.jsx` component (`container-page`) and integrated it into `HeroSection`, `QuickServicesSection`, and `FeaturesSection`.
- antigravity · hero · Fixed rating card overlap in HeroSection: integrated rating block cleanly within the diagnostic showcase card, positioned 90-Day Warranty badge at top-right, and relocated device flagship chips to left column.
- antigravity · home · Redesigned and refactored HeroSection, FeaturesSection, and added QuickServicesSection with Tailwind CSS v4 design tokens, responsive cards, diagnostic status highlights, and verified data.
- antigravity · layout · Replaced SiteHeader and SiteFooter with Navbar and Footer across root layout; implemented modern responsive navigation with mobile drawer and comprehensive 4-column footer styled with Tailwind CSS tokens; updated Brand component.
- claude · styles · Added Tailwind v4 design system: `tokens.css`, `semantic.css`, `variants.css`, `base.css`, `typography.css`, `utilities.css`, `components.css`; `src/app/global.css` imports them.
- claude · styles · Colors sampled from reference design (red/white/black); palette scales `brand-*`, `ink-*`, status colors; default Tailwind palette disabled.
- claude · styles · Contrast fixes: `ink-500` darkened (captions on grey surface), `ink-400` + `border-input` for form borders (D-006).
- claude · styles · `type-overline` matches reference (sentence case, red, 15px).
- claude · docs · Added `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, `README.md` and `docs/00…12`, `TASKS`, `DECISIONS`, `CHANGELOG`.
- claude · verify · Compiled with `@tailwindcss/cli` 4.3.3: no errors; checked token/utility/variant output. Not browser-tested.
