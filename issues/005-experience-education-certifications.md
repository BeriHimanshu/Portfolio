# Build Experience, Education, and Certifications Sections

## What to build

Implement three Sections that display the Portfolio Owner's professional and academic credentials.

**Experience Section**: Renders each experience entry with role title, organization, location, date range, and a brief description. Entries are displayed in reverse chronological order.

**Education Section**: Renders each education entry with degree, institution, location, and graduation date.

**Certifications Section**: Renders each certification with name, issuer, and a brief description.

All section headings use the Accent Gradient. All content is read from Portfolio Data.

## Acceptance criteria

- [ ] Experience Section renders both entries (Teaching Assistant, Student Assistant) with role, org, location, dates, and description
- [ ] Education Section renders both entries (NJIT MS, PTU BTech) with degree, institution, location, and date
- [ ] Certifications Section renders all 3 certifications with name, issuer, and description
- [ ] All section headings use the Accent Gradient
- [ ] All three Sections have `id` attributes matching navbar anchor links
- [ ] Entries are ordered reverse-chronologically within each Section
- [ ] Layout is responsive — stacks cleanly on mobile
- [ ] All content is driven from Portfolio Data — no hardcoded strings
- [ ] `pnpm build` succeeds

## Blocked by

- Issue #002 — Portfolio Data types and file
