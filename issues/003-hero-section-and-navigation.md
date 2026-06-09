# Build Hero Section with nav, resume download, and contact links

## What to build

Implement the Hero Section and the sticky navigation bar as the top of the single-page layout. The Hero displays the Portfolio Owner's name ("Himanshu Himanshu"), tagline ("Data Science Student | Machine Learning Enthusiast"), social links (email, LinkedIn, GitHub), and a "Download Resume" button linking to the PDF in `public/`.

The sticky navbar sits above the Hero and contains smooth-scroll anchor links to all Sections (About, Skills, Experience, Projects, Education, Certifications, Contact). It should be semi-transparent with a backdrop blur effect. On mobile, it collapses to a hamburger menu.

All content is read from the Portfolio Data file — no hardcoded strings in components.

## Acceptance criteria

- [ ] Hero Section renders name, tagline, social links, and "Download Resume" button
- [ ] "Download Resume" button links to `/Himanshu_Resume.pdf` and opens/downloads the file
- [ ] Social links open in new tabs (email uses `mailto:`)
- [ ] Sticky navbar is fixed at the top with semi-transparent background and backdrop blur
- [ ] Nav links smooth-scroll to the correct Section anchors
- [ ] Navbar collapses to a hamburger menu on viewports below 768px
- [ ] All content is driven from Portfolio Data — no hardcoded strings
- [ ] `pnpm build` succeeds

## Blocked by

- Issue #002 — Portfolio Data types and file
