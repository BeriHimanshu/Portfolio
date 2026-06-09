# Build Projects Section with compact Project Cards

## What to build

Implement the Projects Section displaying the Portfolio Owner's projects as compact Project Cards. Each Project Card shows:

- Project title
- A 1-2 line summary (not the full resume bullet points)
- Tech tags (e.g. "Python", "LSTM", "Scikit-Learn")
- A GitHub link that opens in a new tab

The section heading uses the Accent Gradient. Project Cards should have a subtle hover effect (e.g. border glow or slight lift). All content is read from Portfolio Data.

## Acceptance criteria

- [ ] Projects Section renders a Project Card for each project in Portfolio Data
- [ ] Each Project Card displays title, summary, tech tags, and GitHub link
- [ ] GitHub links open in new tabs
- [ ] Tech tags are visually distinct (chip/badge style)
- [ ] Project Cards have a hover effect
- [ ] Section heading uses the Accent Gradient
- [ ] Section has an `id` attribute matching the navbar anchor link
- [ ] Layout is responsive — cards stack on mobile, grid on desktop
- [ ] All content is driven from Portfolio Data — no hardcoded strings
- [ ] `pnpm build` succeeds

## Blocked by

- Issue #002 — Portfolio Data types and file
