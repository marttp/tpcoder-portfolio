# Architecture Overview

## High-Level System Design

The TP Coder Portfolio is a **static site generator (SSG)** application built on Astro. The architecture is split into three conceptual layers:

1. **Content Layer** – Blog posts and projects in MDX, portfolio data in JSON
2. **Rendering Layer** – Astro pages, layouts, and Solid.js interactive components
3. **Output Layer** – Static HTML, CSS, and JavaScript served from `/dist`

```
┌─────────────────────────────────────────────────────────────────┐
│                    ASTRO BUILD PROCESS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Content Layer                 Rendering Layer    Output Layer  │
│  ──────────────                 ──────────────────  ────────────│
│  /src/content/                  /src/pages/        /dist/       │
│   ├── blog/ (MDX)      ──>      /blog/[...slug]  ──>  /blog/... │
│   └── project/ (MDX)   ──>      /project/[...]  ──>  /project/  │
│                                                                  │
│  /src/data/                     /src/layouts/                   │
│   ├── experiences.json          ├── BaseLayout.astro            │
│   ├── skills.json       ──>     ├── BlogLayout.astro ────>      │
│   ├── courses.json              └── ProjectLayout.astro         │
│   └── ...                                                        │
│                                                                  │
│  /src/components/ (Astro + Solid.js)                            │
│   ├── *.astro (server-rendered)                                 │
│   └── *.tsx (client-side interactive)                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Technology Decisions

### Why Astro?

Astro enables **"islands of interactivity"** – static HTML by default with opt-in reactive components. This approach:
- Minimizes JavaScript sent to browsers (better performance)
- Enables content-first development (MDX for blog, JSON for data)
- Supports static site generation (fast, SEO-friendly, deploy anywhere)
- Integrates multiple UI frameworks (we use Solid.js)

### Why Solid.js?

Solid.js is a lightweight reactive library chosen for interactive features:
- **Smaller bundle** than React/Vue
- **Fine-grained reactivity** (no virtual DOM overhead)
- **Astro integration** via `@astrojs/solid-js`
- Used for: theme toggle, course search, tag filters, activity displays

### Why MDX for Content?

MDX combines Markdown with JSX, enabling:
- Human-readable Markdown for blog posts
- Embedded React/Solid components for rich interactive content
- Schema validation via Zod in Content Collections
- Language variants (en/th) linked via frontmatter

---

## Core Architecture Patterns

### 1. Content Collections API

**Location:** `/src/content.config.ts`

Astro's Content Collections API validates all content before build:

```typescript
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    language: z.enum(['en', 'th']),
    // ... more fields
  }),
});
```

**Benefits:**
- Prevents invalid frontmatter at build time
- Enables type-safe content queries: `getCollection('blog')`
- Automatic slug generation from file paths

### 2. File-Based Routing

Astro routes files in `/src/pages/` directly to URL paths:

```
/src/pages/
├── index.astro        → /
├── about.astro        → /about
├── blog/
│   ├── index.astro    → /blog (list view)
│   └── [...slug].astro → /blog/post-title (dynamic routes)
└── project/
    ├── index.astro    → /project
    └── [...slug].astro → /project/project-name
```

**Dynamic routes** use `[...slug].astro` pattern with `getStaticPaths()` to generate URLs for all content.

### 3. Component Separation: Astro vs. Solid.js

| Aspect | Astro Components | Solid.js Components |
|--------|------------------|-------------------|
| **Extension** | `.astro` | `.tsx` |
| **Rendering** | Server-side (SSR) at build time | Client-side runtime |
| **JavaScript** | None sent to browser | Sent as hydrated component |
| **Use Cases** | Layouts, static sections, data imports | Interactive features (search, filters, theme toggle) |
| **Example** | `BaseLayout.astro` (page wrapper) | `course/CourseSearch.tsx` (client-side filter) |

Layouts use Astro; feature-specific interactivity uses Solid.js.

### 4. Styling with Tailwind CSS

**Location:** `/tailwind.config.cjs`

Tailwind configuration defines:
- **Custom color palette** with light/dark mode variants (semantic color names)
- **Screen breakpoints** (md: 700px, lg: 976px, xl: 1440px)
- **Dark mode** via `class` strategy (toggled by Header component)
- **Typography plugin** for prose content in blog/project layouts

Example from config:
```javascript
colors: {
  'primary-dark': '#1234567',
  'primary-light': '#abcdefg',
  'background-dark': '#...',
  'text-dark': '#...',
  // ...
}
```

Dark mode is toggled by `ThemeToggle.tsx` component, which adds/removes `dark` class on `<html>` element.

### 5. Build Pipeline

**Configuration:** `/astro.config.mjs`

```javascript
export default defineConfig({
  integrations: [
    mdx(),           // MDX compilation
    sitemap(),       // SEO sitemap
    solidJs(),       // Solid.js hydration
    compress({ CSS: false }),  // Asset compression
  ],
  // ...
})
```

**Build flow:**
1. Load content from `/src/content/` via Content Collections
2. Validate all frontmatter against Zod schemas
3. Generate static routes for blog/project pages
4. Render Astro components to HTML
5. Hydrate Solid.js components (only those marked client:load)
6. Compress assets, generate sitemap
7. Output static files to `/dist`

---

## Directory Structure & Responsibilities

### `/src/components/`
Reusable UI components organized by feature.

```
components/
├── header/               # Navigation and theme toggle
│   ├── Header.astro
│   ├── BaseHead.astro
│   └── ThemeToggle.tsx   (Solid.js)
├── blog/                 # Blog list and card components
│   ├── BlogCard.tsx      (Solid.js)
│   └── TagFilter.tsx     (Solid.js)
├── course/               # Course listing with search
│   └── CourseSearch.tsx  (Solid.js, interactive filter)
├── activity/             # Competitions, speaking, overseas
│   ├── CompetitionCard.astro
│   ├── SpeakersCard.astro
│   └── ...
├── skills/               # Skill bubbles and certifications
│   ├── SkillBubbles.tsx  (Solid.js)
│   └── CertifiedCard.astro
└── Footer.tsx           (Solid.js)
```

**Naming convention:**
- Astro components: `PascalCase.astro`
- Solid.js components: `PascalCase.tsx`
- Utilities: lowercase or `camelCase`

### `/src/pages/`
Astro file-based routes. Each file maps to a URL.

```
pages/
├── index.astro          # / (homepage)
├── about.astro          # /about
├── experience.astro     # /experience
├── skill.astro          # /skill
├── course.astro         # /course
├── activity.astro       # /activity
├── contact.astro        # /contact
├── support-me.astro     # /support-me
├── 404.astro            # /404 (custom not found)
├── blog/
│   ├── index.astro      # /blog (list with tabs: local + Medium)
│   └── [...slug].astro  # /blog/post-title (dynamic routes)
├── project/
│   ├── index.astro      # /project (project list)
│   └── [...slug].astro  # /project/project-name
└── rss.xml.js           # /rss.xml (RSS feed)
```

### `/src/layouts/`
Base templates for page structure. Imported and used in Astro pages.

```
layouts/
├── BaseLayout.astro     # Core: header, main, footer wrapper
├── BlogLayout.astro     # Blog-specific: prose styling, code highlighting
└── ProjectLayout.astro  # Project-specific layout
```

All layouts use `BaseHead`, `Header`, and `Footer` components.

### `/src/content/`
MDX content managed by Astro Content Collections.

```
content/
├── blog/                # 70+ blog posts (English + Thai variants)
│   ├── design-audience-platform.mdx
│   ├── ai-coding-agent-guidelines.mdx
│   └── ... (50+ more)
└── project/             # 2 project showcases
    ├── openreview-vercel-ai-code-review-bot.mdx
    └── test-project.mdx
```

Each file includes YAML frontmatter + MDX body.

### `/src/data/`
JSON and TypeScript files defining portfolio content.

```
data/
├── experiences.json     # Professional & education history
├── skills.json          # Technical and soft skills
├── courses.json         # Online learning and certifications
├── activities.json      # Competitions, speaking, overseas
├── volunteers.json      # Volunteer work
├── certified.json       # Certifications
├── introduce.json       # Personal intro text
├── contact.ts           # Contact details
├── social.ts            # Social media and external links
├── props.ts             # TypeScript interfaces
└── md-template/         # Templates for new content
```

These are imported by Astro/Solid.js components and rendered statically.

### `/src/styles/`
Global styles and theme configuration.

```
styles/
└── (custom CSS if needed)
```

Most styling is via Tailwind utilities in components.

### `/src/types/`
TypeScript type definitions (if any).

---

## Key Build Considerations

### Content Validation
- **Zod schemas** in `content.config.ts` ensure all blog/project frontmatter is valid
- Build fails if content is missing required fields or has invalid data types
- Language field must be `'en'` or `'th'`

### Route Generation
- `getStaticPaths()` in `[...slug].astro` pages generates static routes for all content
- Routes are built from the Content Layer API's `entry.id` (not the older `entry.slug`), with the `.md`/`.mdx` extension stripped — e.g. `design-audience-platform.mdx` → id `design-audience-platform` → `/blog/design-audience-platform`. Pages render content with the standalone `render(entry)` helper rather than `entry.render()`. See [Data & Content](../domains/data-content.md) for the full pattern.
- Multilingual content uses optional `translationSlug` to link variants

### Performance Optimization
- **CSS compression** disabled (`astro-compress` config) to avoid inline style issues
- **Asset compression** enabled for HTML/JavaScript
- **Code highlighting** via Shiki (syntax highlighting in code blocks)
- **Image optimization** via Astro's image component (when used)
- **Tree-shaking** of unused Tailwind utilities

### Dark Mode
- Stored as class on `<html>` element (class strategy)
- Persisted to localStorage by `ThemeToggle.tsx`
- CSS uses Tailwind's `dark:` prefix for dark-mode styles

---

## Extending the Architecture

### Adding a New Portfolio Section
1. Create `.astro` file in `/src/pages/new-section.astro`
2. Import data from `/src/data/`
3. Use `BaseLayout` for consistent structure
4. Add Solid.js components for interactivity if needed

### Adding Interactive Features
1. Create `.tsx` component in `/src/components/`
2. Mark with `client:load` directive when used in Astro pages
3. Use Solid.js signals/effects for state management
4. Import into Astro page and pass props

### Adding New Content Collections
1. Define schema in `/src/content.config.ts`
2. Create folder in `/src/content/new-type/`
3. Create dynamic route page `/src/pages/new-type/[...slug].astro`
4. Implement `getStaticPaths()` to generate routes

---

## Related Documentation

- **[Data & Content Structure](../domains/data-content.md)** – Detailed data schema and content format
- **[Workflows](../workflows/content-management.md)** – How to add content and manage updates
- **[Operations](../operations/build-deploy.md)** – Build and deployment process

---

*Source: `/src/`, `/astro.config.mjs`, `/tailwind.config.cjs`*
