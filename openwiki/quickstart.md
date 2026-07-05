# OpenWiki: TP Coder Portfolio

## Overview

**TP Coder Portfolio** is a personal portfolio website for Thanaphoom Babparn, built with **Astro** (static site generator) and **Solid.js** (reactive components). The site showcases professional experiences, education, skills, courses, volunteer work, competitions, and technical blog posts.

**Key characteristics:**
- Static site generation for fast performance and SEO
- Multi-language support (English and Thai) for blog content
- Rich portfolio sections: professional experience, education, courses, skills, activities, and competitions
- Curated blog covering AI, software engineering, backend systems design, and career insights
- Light/dark mode theme support
- Tailwind CSS for styling with custom design system

**Live site:** https://portfolio.tpcoder.dev

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Astro | 7.0.3 |
| **UI Library** | Solid.js | 1.9.13 |
| **Styling** | Tailwind CSS | 4.3.1 |
| **Content** | MDX | 7.0.0 |
| **Build** | Vite (via Astro) | - |
| **Package Manager** | Bun | - |

---

## Project Structure

```
/
├── src/
│   ├── components/        # Astro & Solid.js components
│   ├── content/          # MDX blog posts and projects
│   ├── data/             # JSON data files for portfolio content
│   ├── layouts/          # Page templates (Base, Blog, Project)
│   ├── pages/            # Astro file-based routes
│   ├── styles/           # Global styles and theme
│   ├── types/            # TypeScript type definitions
│   ├── consts.ts         # Global site configuration
│   ├── content.config.ts # Content collection schemas
│   └── env.d.ts          # Astro env type definitions
├── public/               # Static assets
├── dist/                 # Build output
├── docs/                 # Editorial and persona docs
├── astro.config.mjs      # Astro configuration
├── tailwind.config.cjs   # Tailwind CSS config
└── package.json          # Dependencies and scripts

```

---

## Quick Start

### Prerequisites
- Node.js or Bun runtime
- Package manager (npm, yarn, or bun)

### Installation & Development

```bash
# Install dependencies
bun install        # or npm install

# Start development server (port 3000)
bun run dev        # or npm run dev

# Build for production
bun run build      # or npm run build

# Preview production build locally
bun run preview    # or npm run preview
```

The site runs at **http://localhost:3000** in development mode.

---

## Key Sections & Pages

### Portfolio Pages
- **`/`** – Homepage with brief intro and career timeline
- **`/about`** – Detailed about page
- **`/experience`** – Professional experience and education timeline
- **`/course`** – Online courses and certifications with search
- **`/activity`** – Competitions, speaking events, and overseas activities
- **`/skill`** – Skills and technical proficiencies
- **`/contact`** – Contact information

### Content Pages
- **`/blog`** – Blog index with tag filtering and Medium integration
- **`/blog/[...slug]`** – Dynamic blog post pages
- **`/project`** – Project index
- **`/project/[...slug]`** – Dynamic project pages
- **`/support-me`** – Support page with links
- **`/404`** – Custom 404 page

---

## Content & Data Management

### Blog & Projects (MDX Content)
Located in `/src/content/`, managed via Astro Content Collections with Zod schemas.

**Blog** (`/src/content/blog/`)
- 70+ articles in English and Thai
- Schema: title, description, pubDate, tags, language, optional heroImage
- Optional translationSlug for linking language variants
- Rendered via `/src/pages/blog/[...slug].astro`

**Projects** (`/src/content/project/`)
- 2 project showcases
- Schema: title, description, pubDate, tags, language, optional heroImage, GitHub/Medium links
- Rendered via `/src/pages/project/[...slug].astro`

### Portfolio Data (JSON & TypeScript)
Located in `/src/data/`, defines portfolio content for experience, education, skills, and activities.

| File | Purpose | Structure |
|------|---------|-----------|
| `experiences.json` | Professional & education history | Array of {company, position, startDate, highlights, ...} |
| `courses.json` | Online courses and certifications | Array of {title, platform, url, completedDate, ...} |
| `skills.json` | Technical and soft skills by category | {category: [skills]} |
| `activities.json` | Competitions, speaking, overseas events | {competition: [], speaking: [], oversea: []} |
| `volunteers.json` | Volunteer work and commitments | Array of {company, role, startDate, ...} |
| `certified.json` | Professional certifications | Array of {title, issuer, date, url} |
| `introduce.json` | Personal introduction text | {intro: string} |
| `props.ts` | TypeScript type definitions | Export interface definitions for data types |
| `contact.ts` | Contact information and links | Export contact details |
| `social.ts` | Social media and external links | Export social links and profiles |

See [Data & Content](./domains/data-content.md) for detailed structure examples.

---

## Architecture Highlights

### Content Collections & Routing
- Uses **Astro Content Collections API** with glob loaders for blog/project content
- **Dynamic slug-based routing** for blog and project pages via `[...slug].astro`
- **Zod validation** ensures all content matches expected schema before build
- RSS feed generated from blog collection via `/src/pages/rss.xml.js`

### Component Architecture
**Astro Components** (`.astro` files)
- Server-rendered, send zero JavaScript by default
- Used for layouts, page structure, static content
- Examples: `BaseLayout.astro`, `BlogLayout.astro`, header components

**Solid.js Components** (`.tsx` files)
- Client-side reactive components for interactivity
- Theme toggle (light/dark mode), course search, tag filters, activity displays
- Integrated via `@astrojs/solid-js` integration

### Styling & Theme
- **Tailwind CSS 4** with custom configuration
- **Light/dark mode** via `class` strategy (toggled by Header component)
- **Custom color palette** with semantic names: primary, secondary, background, text
- **Custom screen breakpoints**: md (700px), lg (976px), xl (1440px)
- **Typography plugin** for prose content styling in blog/project layouts

### Build & Optimization
- **Astro integrations** for MDX, RSS, sitemap, Solid.js, image compression
- **astro-compress** plugin for asset minification
- **Shiki code highlighting** with github-dark theme for code blocks
- **Sitemap generation** for SEO

See [Architecture](./architecture/overview.md) for more details.

---

## Development Workflows

### Adding Content

**New Blog Post**
1. Create `.mdx` file in `/src/content/blog/` with frontmatter:
   ```yaml
   title: Article Title
   description: Short summary
   pubDate: 2026-02-15
   tags: [tag1, tag2]
   language: en
   ```
2. Write MDX content
3. Optionally add `heroImage`, `translationSlug`, or `updatedDate`
4. Build/preview to validate

**New Project**
1. Create `.mdx` file in `/src/content/project/` with similar schema
2. Optionally add `github`, `mediumSlug` for external links

**Update Portfolio Data**
1. Edit JSON in `/src/data/` (e.g., `experiences.json`)
2. Components auto-import and render the data
3. Run type check via TypeScript to validate changes

See [Workflows](./workflows/content-management.md) for step-by-step guides.

---

## Building & Deployment

The site is a static Astro build, suitable for any static host.

```bash
npm run build   # Generates /dist with static HTML/CSS/JS
npm run preview # Preview the built site locally
```

**Deployment considerations:**
- Uses `https://portfolio.tpcoder.dev` as the live URL in production builds
- No server-side code or dynamic routes needed
- Can be deployed to Netlify, Vercel, GitHub Pages, or any static host

See [Operations](./operations/build-deploy.md) for detailed deployment steps.

---

## Key Concepts & Design Decisions

### Multi-Language Support
Blog posts support English (`en`) and Thai (`th`) variants via optional `translationSlug`, allowing linked language pairs without code duplication.

### Declarative Data
Portfolio data (experiences, skills, activities) is defined as JSON and rendered declaratively, making it maintainable and future-proof without touching component code.

### RSS Feed
Blog posts feed into an RSS channel (`/rss.xml`) for subscribers, updated on each build.

### Solid.js for Interactivity
Astro renders static HTML; Solid.js components provide client-side search, filtering, and theme toggling without heavy frameworks.

---

## Common Tasks

| Task | How | Where |
|------|-----|-------|
| **Change site title** | Edit `SITE_TITLE` | `/src/consts.ts` |
| **Add professional experience** | Add entry to array | `/src/data/experiences.json` |
| **Add new skill** | Add to category or create category | `/src/data/skills.json` |
| **Update resume/CV** | Update experience highlights | `/src/data/experiences.json` |
| **Write blog post** | Create `.mdx` in `/src/content/blog/` | See [Workflows](./workflows/content-management.md) |
| **Customize theme colors** | Edit Tailwind config | `/tailwind.config.cjs` |
| **Toggle dark/light mode** | Click theme button in header | Runs in browser |
| **Add new portfolio page** | Create `.astro` in `/src/pages/` | Use `BaseLayout` as template |

---

## Testing & Quality

The project includes:
- **Type checking** via TypeScript (`tsconfig.json`)
- **Content validation** via Zod schemas in `content.config.ts`
- **MDX compilation** ensures well-formed content
- **Build checks** enforce valid markup and frontmatter

Run:
```bash
npm run build  # Validates all content and TypeScript
```

---

## Documentation Index

- [Architecture](./architecture/overview.md) – System design, component structure, build pipeline
- [Data & Content](./domains/data-content.md) – Portfolio data structure and content collections
- [Workflows](./workflows/content-management.md) – How to add/update content and manage portfolio
- [Operations](./operations/build-deploy.md) – Building, deployment, and production considerations

---

## Navigation

Start here, then read:
1. **[Architecture](./architecture/overview.md)** for system design and technical decisions
2. **[Data & Content](./domains/data-content.md)** to understand how portfolio and blog content is structured
3. **[Workflows](./workflows/content-management.md)** to learn how to maintain and update the site
4. **[Operations](./operations/build-deploy.md)** for build, deployment, and production details

---

## Key Contacts & References

**Author:** Thanaphoom Babparn (TP Coder)  
**Site:** https://portfolio.tpcoder.dev  
**Source:** `/src/consts.ts`, `/README.md`, `/CLAUDE.md`

For existing documentation, see:
- `/docs/tpcoder-online-writing-persona.md` – Writing style and tone guide
- `/docs/tpcoder-blog-summarization-persona.md` – Blog summarization approach
- `/docs/blog-series-design-tracking.md` – Deep design docs on recent blog series

---

*Last updated: 2026 initial documentation*
