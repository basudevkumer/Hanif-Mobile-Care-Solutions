# 09 · Coding Standards (production bar)

"Production-standard, not prototype." Every change must meet this before it is `done`.

## General
- **TypeScript strict.** No `any` (use `unknown` + narrowing). No non-null `!` without a comment.
- **Small units.** Function ≤ ~40 lines, component ≤ ~150 lines; split otherwise.
- **No dead code, no commented-out code, no stray `console.log`, no unresolved TODO.**
  If something is deferred, create a task in `TASKS.md` instead.
- **Explicit over clever.** Name things by what they are (`isOutOfStock`, not `flag2`).
- **Pure where possible.** Side effects only in handlers/effects/server actions.
- **Errors are handled**, not swallowed: typed results or `error.tsx`; user sees a helpful message.
- **No magic numbers/strings.** Constants or config.

## React / Next.js
- **Server Components by default.** Add `"use client"` only for state, effects, or browser APIs — keep those leaves small.
- Props are typed with `type Props = {…}`; destructure in the signature; avoid prop-drilling > 2 levels.
- Lists need stable `key`s (ids, not indexes).
- Data fetching in server components or route handlers, never inside `useEffect` for initial page data.
- Images via `next/image` with `alt`, dimensions/`fill` + `sizes`; above-the-fold hero image gets `priority`.
- Links via `next/link`; external links `rel="noopener noreferrer"`.
- Forms: labeled inputs, client + server validation (e.g. zod), disabled/pending state on submit.
- Never put secrets in client code; env vars for server only unless `NEXT_PUBLIC_`.

## CSS / Tailwind
- Follow `06-TAILWIND-V4-GUIDE.md`. Tokens only. Semantic colors.
- No inline `style={{}}` for design values (dynamic values like a computed width are OK).
- No `!important` (the layer order makes it unnecessary).
- Mobile-first breakpoints; test at 360, 768, 1024, 1280 px.
- Interactive elements always have hover **and** `focus-visible` states (catalog classes include them).

## Accessibility (summary — details in doc 12)
Semantic HTML first (`<button>` for actions, `<a>` for navigation), labels on every control, visible focus, alt text, contrast ≥ AA.

## Performance
Images optimized + lazy (except LCP), no layout shift (reserve image space), minimal client JS, no unused dependencies.

## Testing (recommended baseline)
| Level | Tool | What |
|-------|------|------|
| Unit | Vitest | utils (`formatPrice`), reducers |
| Component | Testing Library | interactive components (search, cart) |
| E2E | Playwright | critical flows: browse → product → cart |
| A11y | `eslint-plugin-jsx-a11y` + axe | no critical violations |
| Static | ESLint, Prettier (+ tailwind plugin), `tsc --noEmit` | zero warnings |

## Git
Conventional Commits; small PRs; one concern per PR; PR description lists docs updated.
