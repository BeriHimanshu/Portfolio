# Build Contact Footer

## What to build

Implement the Contact / Footer Section at the bottom of the single-page layout. This is a combined contact call-to-action and site footer. It includes:

- A heading or short prompt (e.g. "Get in Touch")
- Email, LinkedIn, and GitHub links displayed as icon buttons
- No phone number
- No contact form
- A subtle copyright line (e.g. "© 2026 Himanshu Himanshu")

The heading uses the Accent Gradient. All content is read from Portfolio Data.

## Acceptance criteria

- [ ] Contact Section renders email (mailto), LinkedIn, and GitHub links
- [ ] Links open in new tabs (except email which uses `mailto:`)
- [ ] Phone number is NOT displayed
- [ ] No contact form is present
- [ ] Footer includes a copyright line
- [ ] Section heading uses the Accent Gradient
- [ ] Section has an `id` attribute matching the navbar anchor link
- [ ] All content is driven from Portfolio Data — no hardcoded strings
- [ ] `pnpm build` succeeds

## Blocked by

- Issue #002 — Portfolio Data types and file
