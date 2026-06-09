# Add scroll animations and responsive polish

## What to build

Add the final polish layer across all Sections:

**Scroll animations**: Implement subtle fade-in/slide-up animations triggered as each Section enters the viewport. Use CSS `@keyframes` combined with the Intersection Observer API. No heavy animation libraries.

**Responsive polish**: Audit and fix responsive behavior across all Sections. Ensure the hamburger menu works correctly on mobile. Verify spacing, font sizes, and layout at mobile (< 768px), tablet (768px–1024px), and desktop (> 1024px) breakpoints.

**Performance**: Verify `next build` produces a clean static export. Ensure Inter font is loaded efficiently (swap display strategy). Check that the resume PDF download works in production build.

## Acceptance criteria

- [ ] Each Section fades in / slides up as it enters the viewport on scroll
- [ ] Animations are smooth (no jank) and use CSS transitions/keyframes, not JS animation libraries
- [ ] Animations respect `prefers-reduced-motion` — disabled for users who prefer reduced motion
- [ ] Hamburger menu on mobile opens/closes and smooth-scrolls to Sections correctly
- [ ] Layout is visually correct at mobile (< 768px), tablet (768px–1024px), and desktop (> 1024px)
- [ ] Inter font uses `font-display: swap` for fast initial render
- [ ] `pnpm build` succeeds with no warnings
- [ ] Built site renders correctly when served locally via `pnpm start`

## Blocked by

- Issue #003 — Hero Section and navigation
- Issue #004 — About and Skills Sections
- Issue #005 — Experience, Education, and Certifications Sections
- Issue #006 — Projects Section
- Issue #007 — Contact Footer
