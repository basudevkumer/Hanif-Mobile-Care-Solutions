# 11 · Agent Workflow & Synchronization

Several AI agents (and humans) may work on this repo at different times, with no shared memory.
**The repository is the memory.** These rules make hand-offs lossless.

## Shared state files
| File | Holds | Who writes |
|------|-------|-----------|
| `docs/TASKS.md` | what is todo / in-progress / done | every agent, every session |
| `docs/CHANGELOG.md` | what changed and when | every agent, every change |
| `docs/DECISIONS.md` | why we chose X | whoever makes a non-obvious choice |
| `docs/0x-*.md` | stable reference | whoever changes the thing it describes |

## Session protocol
### 1 · Start
1. Read `AGENTS.md` → `docs/00-INDEX.md` → `docs/TASKS.md`.
2. Read the docs relevant to your task (index tells you which).
3. Check `git status` / recent commits / `CHANGELOG.md` for work by others.
4. Claim a task: set `Status = in-progress`, `Owner = <agent-name>`, `Updated = YYYY-MM-DD` in `TASKS.md`.
   Never take a task already `in-progress` by another owner (unless the entry is older than 7 days — then add a note and take over).

### 2 · Work
- Smallest change that satisfies the task. Reuse catalog classes/components first.
- Found a bug/need outside scope? Add a **new task** to `TASKS.md`; don't silently expand scope.
- Hit an unknown (see Open questions)? Write it in the task's **Notes**, make the safest reversible choice, continue.

### 3 · Finish (Definition of Done)
- [ ] Meets task acceptance criteria
- [ ] Follows `AGENTS.md` rules (tokens, semantic colors, no hard-coded values)
- [ ] Accessible (keyboard, focus, labels, contrast) — `docs/12-…`
- [ ] Responsive at 360 / 768 / 1024 / 1280
- [ ] Types clean (`tsc --noEmit`), lint clean, no console noise
- [ ] Docs updated where reality changed (catalog, tokens, structure…)
- [ ] `TASKS.md` → `done` · `CHANGELOG.md` entry added · decision logged if non-obvious

### 4 · Hand-off note (in the task's Notes)
```
Handoff <date> <agent>: Done: … | Not done: … | Gotchas: … | Next: …
```

## Conflict rules
1. **Code beats docs** for current behavior → fix the doc in the same change.
2. **Tokens live only in `src/components/style/`.** If a doc table differs, the CSS wins.
3. Two agents want different approaches → write both in `DECISIONS.md` as `proposed`, the human decides.
4. Don't refactor files owned by an `in-progress` task of someone else.
5. Never rewrite history of `CHANGELOG.md` / `DECISIONS.md` — append only (supersede, don't delete).

## Task format (`TASKS.md`)
| ID | Title | Status | Owner | Updated | Depends | Notes |
Statuses: `todo` · `in-progress` · `blocked` · `review` · `done`. IDs are `T-###`, never reused.

## Doc-update matrix (what to update when you change X)
| You changed… | Update |
|--------------|--------|
| a token (color/size/radius/shadow) | `04-COLOR-SYSTEM` or `03-DESIGN-SYSTEM`, `CHANGELOG` |
| a type preset | `05-TYPOGRAPHY`, `CHANGELOG` |
| a CSS component/utility/variant | `07-COMPONENT-CATALOG`, `CHANGELOG` |
| added/moved a file or folder | `08-FOLDER-STRUCTURE-AND-NAMING`, `AGENTS.md` if style files |
| homepage section behavior/copy | `10-PAGE-SPEC-HOME` |
| stack/tooling | `02-ARCHITECTURE`, `09-CODING-STANDARDS`, `DECISIONS` |
| answered an open question / assumption | `01-PROJECT-OVERVIEW` (delete resolved row), `DECISIONS` |

## Prompts that work well (for humans directing agents)
- "Take task **T-009** from `docs/TASKS.md` and follow `AGENTS.md`."
- "Build the **Hero** per `docs/10-PAGE-SPEC-HOME.md` §3 using only catalog classes."
- "Review the diff against `docs/09-CODING-STANDARDS.md` and `docs/12-ACCESSIBILITY-PERFORMANCE.md`."

## Review checklist (for reviewer agents)
1. Any `#hex`, `rgb(`, `px` font sizes, `bg-red-*` in the diff? → reject.
2. Interactive elements: correct element, label, focus state, disabled state?
3. New repeated markup that should be a catalog class/component?
4. Docs/TASKS/CHANGELOG updated?
5. Loading/empty/error states handled?
