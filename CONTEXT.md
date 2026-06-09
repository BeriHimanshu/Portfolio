# Himanshu Portfolio

A minimal single-page portfolio website for Himanshu Himanshu's data science profile, built with Next.js for Vercel deployment.

## Language

**Portfolio Owner**:
The person whose work and credentials the site presents — Himanshu Himanshu.
_Avoid_: User, author, candidate

**Section**:
A visually distinct block of the single-page layout (Hero, About, Skills, Experience, Projects, Education, Certifications, Contact).
_Avoid_: Page, route, view

**Portfolio Data**:
The single TypeScript source file (`portfolio.ts`) containing all content displayed on the site. Editing this file is the sole mechanism for updating site content.
_Avoid_: Config, settings, CMS

**Project Card**:
A compact visual unit displaying a project's title, summary, tech tags, and GitHub link. Does not include full bullet-point details.
_Avoid_: Project tile, project entry

**Hero**:
The top-of-page section showing the owner's name, tagline, contact links, and resume download button.
_Avoid_: Header, banner, splash

**Accent Gradient**:
The Blue → Teal (`#3B82F6` → `#14B8A6`) gradient used for headings, hover states, and visual emphasis throughout the site.
_Avoid_: Theme color, brand color
