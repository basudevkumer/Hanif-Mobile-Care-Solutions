# Documentation Index

| Doc | Purpose | Audience |
|-----|---------|----------|
| [`../AGENTS.md`](../AGENTS.md) | Entry point, non-negotiable rules | every agent |
| [01-PROJECT-OVERVIEW](01-PROJECT-OVERVIEW.md) | What we build, assumptions, open questions | every agent |
| [02-ARCHITECTURE](02-ARCHITECTURE.md) | Stack, layers, data flow, how pieces connect | feature work |
| [03-DESIGN-SYSTEM](03-DESIGN-SYSTEM.md) | Principles, tokens overview, spacing, layout, motion | UI work |
| [04-COLOR-SYSTEM](04-COLOR-SYSTEM.md) | Full palette, semantic roles, usage and contrast | UI work |
| [05-TYPOGRAPHY](05-TYPOGRAPHY.md) | Type scale, presets, fonts, rich text | UI work |
| [06-TAILWIND-V4-GUIDE](06-TAILWIND-V4-GUIDE.md) | `@theme`, `@utility`, `@layer components`, `@custom-variant`, gotchas | CSS work |
| [07-COMPONENT-CATALOG](07-COMPONENT-CATALOG.md) | Every CSS component class with example markup | UI work |
| [08-FOLDER-STRUCTURE-AND-NAMING](08-FOLDER-STRUCTURE-AND-NAMING.md) | Where files go, naming rules | all |
| [09-CODING-STANDARDS](09-CODING-STANDARDS.md) | Code quality bar (TS/React/CSS) | all |
| [10-PAGE-SPEC-HOME](10-PAGE-SPEC-HOME.md) | Homepage section-by-section build spec | homepage |
| [11-AGENT-WORKFLOW](11-AGENT-WORKFLOW.md) | Multi-agent sync, handoff, definition of done | all |
| [12-ACCESSIBILITY-PERFORMANCE](12-ACCESSIBILITY-PERFORMANCE.md) | A11y + performance checklist | all |
| [TASKS](TASKS.md) | **Live** task board (agents update this) | all |
| [DECISIONS](DECISIONS.md) | Decision log (why things are the way they are) | all |
| [CHANGELOG](CHANGELOG.md) | **Live** change history | all |

**Live docs** (update constantly): `TASKS.md`, `CHANGELOG.md`, `DECISIONS.md`.
**Reference docs** (update when the system changes): everything else.

## Source of truth hierarchy
1. Code in `src/` (what actually runs)
2. `src/components/style/*.css` (design tokens — values are defined **only** there)
3. `docs/` (explains and constrains 1 and 2)

If a doc quotes a token value that differs from the CSS, **the CSS wins** — fix the doc.
