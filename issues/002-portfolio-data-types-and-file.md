# Create Portfolio Data types and data file

## What to build

Define TypeScript interfaces for all Portfolio Data shapes (`PortfolioData`, `SocialLink`, `SkillCategory`, `Experience`, `Project`, `Education`, `Certification`) and create the single `portfolio.ts` data file populated with Himanshu Himanshu's resume content.

The data file is the sole content source for the entire site. Editing this one file updates all Sections. The resume PDF should be placed in the `public/` directory and referenced via `resumeUrl`.

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

## Acceptance criteria

- [ ] TypeScript interfaces exported for all content shapes
- [ ] `portfolio.ts` exports a typed `portfolioData` object with all resume content populated
- [ ] Phone number (`+1 862 445 4511`) is NOT present anywhere in the data file
- [ ] Contact links include email (`himanshuberi1606@gmail.com`), LinkedIn (`linkedin.com/in/himanshu-beri`), GitHub (`github.com/BeriHimanshu`)
- [ ] Skills grouped into 5 categories matching the resume
- [ ] Both projects (Stock Price Forecasting, Census Income Prediction) included with summaries, tech tags, and GitHub URLs
- [ ] Both experience entries (Teaching Assistant, Student Assistant) included
- [ ] Both education entries (NJIT MS, PTU BTech) included
- [ ] All 3 certifications included
- [ ] Resume PDF copied to `public/Himanshu_Resume.pdf`
- [ ] `pnpm build` succeeds — types are valid

## Blocked by

- Issue #001 — Scaffold Next.js project
