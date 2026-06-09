# PRD: Himanshu Himanshu — Data Science Portfolio

## Problem Statement

Himanshu Himanshu is a Data Science Master's student at NJIT who needs a professional online presence to showcase his skills, projects, and experience to recruiters and potential collaborators. Currently, his credentials exist only in a PDF resume, which limits discoverability, is not shareable as a link, and cannot convey personality or visual polish. He needs a portfolio website that is minimal, easy to maintain, and deployable with zero friction.

## Solution

A minimal, single-page scroll portfolio website built with Next.js and deployed on Vercel. All content is driven from a single typed TypeScript data file (`portfolio.ts`), making updates as simple as editing one file and pushing to Git. The site uses a dark-mode aesthetic with a Blue → Teal accent gradient, subtle scroll-based animations, and a sticky navigation bar.

## User Stories

1. As a **recruiter**, I want to land on the portfolio and immediately see who Himanshu is and what he does, so that I can decide within 5 seconds whether to keep reading.
2. As a **recruiter**, I want to download Himanshu's resume as a PDF, so that I can share it internally or save it to my ATS.
3. As a **recruiter**, I want to scan Himanshu's technical skills grouped by category, so that I can quickly assess fit for a role.
4. As a **recruiter**, I want to see Himanshu's work experience with role titles, companies, and dates, so that I can gauge his professional trajectory.
5. As a **recruiter**, I want to see project summaries with tech tags and GitHub links, so that I can evaluate his hands-on work without reading dense bullet points.
6. As a **recruiter**, I want to see Himanshu's education credentials, so that I can verify his academic background.
7. As a **recruiter**, I want to see relevant certifications, so that I can assess additional qualifications.
8. As a **recruiter**, I want to contact Himanshu via email, LinkedIn, or GitHub, so that I can reach out through my preferred channel.
9. As a **visitor**, I want the page to load fast on any device, so that I don't abandon it due to slow performance.
10. As a **visitor**, I want a sticky navigation bar with smooth-scroll links, so that I can jump to any section without losing my place.
11. As a **visitor**, I want subtle fade-in animations as I scroll, so that the page feels polished and alive rather than static.
12. As a **visitor on mobile**, I want the layout to be fully responsive, so that I can browse comfortably on my phone.
13. As the **Portfolio Owner**, I want to update all site content by editing a single TypeScript file, so that I don't need to touch multiple files or learn a CMS.
14. As the **Portfolio Owner**, I want TypeScript types on my Portfolio Data, so that I catch content errors at build time rather than in production.
15. As the **Portfolio Owner**, I want to deploy by pushing to Git, so that Vercel handles builds and hosting automatically.
16. As the **Portfolio Owner**, I want to add new projects by appending an object to an array in the data file, so that scaling content is trivial.
17. As the **Portfolio Owner**, I want the codebase to have consistent formatting and linting rules enforced, so that code quality remains high and contributions are frictionless.
18. As the **Portfolio Owner**, I want my phone number excluded from the public site, so that I avoid spam.

## Implementation Decisions

### Framework & Deployment

- **Next.js** (App Router) as the framework, deployed on **Vercel**
- **pnpm** as the package manager (not npm or yarn)
- Static export (`output: 'export'`) is sufficient since there are no dynamic routes or server-side needs — evaluate at build time whether SSG or static export is the better fit
- The site is a single route (`/`) with anchor-based navigation

### Content Architecture

- A single typed data file at `src/data/portfolio.ts` serves as the sole content source
- TypeScript interfaces define the shape of every content block: `PortfolioData`, `Project`, `Experience`, `Education`, `Certification`, `Skill`, `SocialLink`
- The resume PDF is placed in `public/Himanshu_Resume.pdf` and linked via the data file as `resumeUrl`

### Design System

- **Dark mode only** — no light mode toggle
- **Background**: Near-black (`#0A0A0B` or similar)
- **Accent Gradient**: Blue → Teal (`#3B82F6` → `#14B8A6`), applied to section headings, hover states, and decorative elements
- **Font**: Inter (Google Fonts) for both headings and body text
- **Animations**: Subtle fade-in/slide-up on scroll using CSS `@keyframes` + Intersection Observer (no heavy animation libraries)

### Sections (in scroll order)

| #   | Section              | Key Elements                                                                                                                 |
| --- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Hero**             | Name, tagline ("Data Science Student \| Machine Learning Enthusiast"), email/LinkedIn/GitHub links, "Download Resume" button |
| 2   | **About**            | Summary paragraph from resume                                                                                                |
| 3   | **Skills**           | Grouped by category (Programming & Frameworks, DS & ML, Visualization & Reporting, Databases & Cloud, Tools & Platforms)     |
| 4   | **Experience**       | Role title, organization, location, date range, brief description                                                            |
| 5   | **Projects**         | Compact Project Cards: title, 1-2 line summary, tech tags, GitHub link                                                       |
| 6   | **Education**        | Degree, institution, location, graduation date                                                                               |
| 7   | **Certifications**   | Certificate name, issuer, brief description                                                                                  |
| 8   | **Contact / Footer** | Email (mailto), LinkedIn, GitHub icon links. No phone number. No contact form.                                               |

### Navigation

- Sticky top navbar, semi-transparent with backdrop blur
- Links for each Section, smooth-scroll to anchor targets
- Responsive: collapses to a hamburger menu on mobile

### Linting & Formatting

- **ESLint** with Next.js recommended config (`eslint-config-next`)
- **Prettier** for code formatting with a `.prettierrc` config
- Scripts in `package.json`: `lint`, `lint:fix`, `format`, `format:check`
- ESLint and Prettier integrated (via `eslint-config-prettier`) to avoid rule conflicts

### Portfolio Data Type Shape (from prototype)

```typescript
interface PortfolioData {
  name: string;
  tagline: string;
  summary: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
```

## Testing Decisions

A good test for this project verifies **externally visible behavior** — does the right content appear in the right place? — not implementation details like component internals or CSS class names.

### Testing Seams

1. **Portfolio Data → Rendered Sections**: The primary seam. Verify that content from `portfolio.ts` renders correctly into each Section's DOM output. A single integration-level render test per Section is sufficient.
2. **Navigation → Scroll targets**: Verify that each nav link has an `href` matching a Section's `id` attribute.
3. **Build integrity**: `next build` must succeed. This catches type errors in Portfolio Data, broken imports, and configuration issues. This is the most valuable single check.

### Approach

- Rely primarily on `next build` as the gatekeeper — if it builds, the types are valid and imports resolve
- Optional: lightweight render tests using React Testing Library if the Owner wants regression safety
- No e2e or visual regression tests at this scale

## Out of Scope

- **Light mode / theme toggle** — dark mode only for this version
- **Blog / writing section** — not needed for the current profile
- **Contact form with backend** — links only, no Formspree/Resend integration
- **CMS integration** — content lives in code, not a headless CMS
- **Analytics** — no Google Analytics, Plausible, or similar (can be added later via Vercel Analytics)
- **Custom domain setup** — Vercel provides a `.vercel.app` subdomain; custom domain is a deployment concern, not a code concern
- **Multi-page routing** — single-page scroll only
- **Internationalization** — English only
- **Rich project detail pages** — Project Cards link to GitHub, not to dedicated sub-pages

## Further Notes

- The Portfolio Owner's full resume data has been extracted from `docs/Himanshu_Resume.pdf` and will be used to populate the initial `portfolio.ts` data file
- The phone number (`+1 862 445 4511`) is intentionally excluded from all public-facing content
- The repo name `him-portfolio` will be used as the Vercel project name unless configured otherwise
- All domain vocabulary follows CONTEXT.md: "Portfolio Owner" (not user), "Section" (not page), "Portfolio Data" (not config), "Project Card" (not tile), "Hero" (not header), "Accent Gradient" (not theme color)
