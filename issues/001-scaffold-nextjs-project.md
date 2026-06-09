# Scaffold Next.js project with pnpm, ESLint, and Prettier

## What to build

Initialize the Next.js project using App Router with pnpm as the package manager. Configure ESLint with `eslint-config-next` and Prettier with `eslint-config-prettier` to avoid rule conflicts. Set up the foundational project structure, global CSS with the design system tokens (dark mode background `#0A0A0B`, Accent Gradient `#3B82F6` → `#14B8A6`, Inter font from Google Fonts), and verify the dev server runs.

This slice delivers a working Next.js shell with a blank page that uses the correct dark background, font, and has all tooling operational.

## Acceptance criteria

- [ ] Next.js App Router project initialized with pnpm
- [ ] `pnpm dev` starts the dev server without errors
- [ ] `pnpm build` completes successfully
- [ ] ESLint configured with `eslint-config-next` — `pnpm lint` runs clean
- [ ] Prettier configured with `.prettierrc` — `pnpm format:check` passes
- [ ] `eslint-config-prettier` installed to prevent rule conflicts
- [ ] `package.json` contains scripts: `dev`, `build`, `lint`, `lint:fix`, `format`, `format:check`
- [ ] Global CSS establishes design tokens: near-black background, Inter font, Accent Gradient CSS custom properties
- [ ] Page renders with dark background and Inter font in the browser

## Blocked by

None — can start immediately
