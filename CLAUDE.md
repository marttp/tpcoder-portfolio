# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Thanaphoom Babparn (TP Coder), built with Astro 2.3.0 and Solid.js for interactive components. The site showcases professional experiences, education, skills, courses, volunteer work, competitions, and blog posts.

## Tech Stack

- **Framework**: Astro 2.3.0 (Static Site Generator)
- **UI Library**: Solid.js 1.7.3 (for reactive components)
- **Styling**: Tailwind CSS 3.3.1 with custom theme
- **Content**: MDX for blog posts and projects
- **Build Tools**: Vite (via Astro)

## Development Commands

```bash
# Install dependencies
npm install
# or
bun install

# Start dev server (runs on port 3000)
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture Overview

### Content Collections

The site uses Astro's content collections (`src/content/config.ts`) with Zod schemas:
- **blog**: Articles with title, description, pubDate, updatedDate, heroImage, tags, and language (en/th)
- **project**: Project showcases with title, description, pubDate, tags, and heroImage

Content is stored in `src/content/blog/` and `src/content/project/` as MDX files.

### Data Layer

Portfolio data is stored as JSON files in `src/data/`:
- `experiences.json`: Professional and education experiences
- `volunteers.json`: Volunteer activities
- `activities.json`: Competitions, overseas activities, and speaking events
- `courses.json`: Online courses and certifications
- `skills.json`: Technical and soft skills organized by category
- `certified.json`: Certifications
- `contact.ts`: Contact information
- `social.ts`: Social media links
- `introduce.json`: Personal introduction
- `props.ts`: TypeScript type definitions for all data structures

### Component Structure

Components are organized by feature in `src/components/`:
- **Astro components** (`.astro`): Server-rendered components
- **Solid.js components** (`.tsx`): Interactive client-side components
  - `course/`: Course listing and search functionality
  - `header/`: Theme toggle (light/dark mode)
  - `competition/`, `oversea/`, `speakers/`, `volunteers/`: Activity displays
  - `contact/`: Contact information display
  - `skills/`: Skill bubbles and certifications

### Pages

Pages in `src/pages/` follow Astro's file-based routing:
- `index.astro`: Homepage
- `about.astro`: About page
- `experience.astro`: Professional experience
- `course.astro`: Courses and learning
- `activity.astro`: Activities and competitions
- `skill.astro`: Skills and certifications
- `contact.astro`: Contact information
- `blog/[...slug].astro`: Dynamic blog post pages
- `project/[...slug].astro`: Dynamic project pages
- `rss.xml.js`: RSS feed generation

### Layouts

Base layouts in `src/layouts/`:
- `BaseLayout.astro`: Core layout with head, body, and footer
- `BlogLayout.astro`: Layout for blog posts
- `ProjectLayout.astro`: Layout for project pages

### Styling

Tailwind configuration (`tailwind.config.cjs`) includes:
- Custom color palette with light/dark mode variants (primary, background, text colors)
- Dark mode via `class` strategy
- Custom screen breakpoints (md: 700px, lg: 976px, xl: 1440px)
- Custom spacing and border radius utilities
- Typography plugin for prose content

### Configuration

- **Site URLs**:
  - Development: `http://localhost:3000`
  - Production: `https://portfolio.tpcoder.dev`
- **Build detection**: Uses `process.env.npm_lifecycle_script` to determine environment
- **Integrations**: MDX, Sitemap, Solid.js, Tailwind, astro-compress

### Global Constants

`src/consts.ts` contains site-wide configuration:
- `SITE_TITLE`, `SITE_DESCRIPTION`, `SITE_URL`, `SITE_IMAGE`
- `INTRODUCTION`: Personal bio text
- `START_CAREER`: Career start date (May 15, 2019)

## Type System

TypeScript is configured with:
- Astro's base tsconfig extending
- `strictNullChecks` enabled
- JSX set to preserve with `solid-js` as importSource

All data structures are typed in `src/data/props.ts` including:
- `ProfessionalExperience`, `EducationExperience`
- `VolunteerItem`, `Competition`, `Oversea`, `Speaker`
- `Course`, `CourseSection`, `Skillset`
- `Social`, `Resource`

## Working with Content

### Adding Blog Posts
Create MDX files in `src/content/blog/` with frontmatter matching the blog schema (title, description, pubDate, tags, language, optional heroImage and updatedDate).

### Adding Projects
Create MDX files in `src/content/project/` with required frontmatter (title, description, pubDate, tags, optional heroImage).

### Updating Portfolio Data
Edit the corresponding JSON files in `src/data/` following the TypeScript types defined in `props.ts`.

## Dark Mode

The site implements dark mode using Tailwind's `class` strategy. The theme toggle is a Solid.js component in `src/components/header/ThemeToggle.tsx` that persists preference to localStorage.

## Blog Section

### Blog Components

Located in `src/components/blog/`:
- `BlogCard.tsx`: Solid.js component for blog post cards with hero image, title, language badge, tags, and date
- `TagFilter.tsx`: Solid.js component for tag filter buttons using `<For>` component
- `MermaidDiagram.astro`: Wrapper component for Mermaid diagrams in MDX posts

### Blog Index Page

`src/pages/blog/index.astro` features:
- Medium Articles section with link to external Medium profile
- Search input for filtering posts by title, description, and tags
- Tag filter buttons (uses `client:only="solid-js"`)
- Responsive grid layout (1/2/3 columns)
- Vanilla JS search with data attributes pattern (same as course page)

### Blog Layout

`src/layouts/BlogLayout.astro` includes:
- Prose styling with Tailwind Typography for readable content
- Dark/light mode support with black text in light mode
- Hero image display with rounded corners and shadow
- Mermaid.js integration for diagrams
- Code block styling (transparent background for code inside pre)
- Back to blog navigation link

### Mermaid Diagrams

To add diagrams in MDX blog posts:

```mdx
import MermaidDiagram from '../../components/blog/MermaidDiagram.astro';

<MermaidDiagram chart={`
  flowchart LR
    A[Start] --> B[Process] --> C[End]
`} />

<!-- With size prop: small, medium, large (default) -->
<MermaidDiagram chart={`...`} size="medium" />
```

Mermaid uses a consistent light purple/lavender theme regardless of site dark/light mode.

## Solid.js in Astro Best Practices

### Client Directives
- Use `client:only="solid-js"` for interactive components with click handlers or state to avoid hydration issues in production builds
- `client:load` can cause hydration mismatches where event handlers don't attach properly in static builds
- Example: `<MyComponent client:only="solid-js" />`

### Rendering Lists
- Use Solid's `<For>` component instead of `.map()` for rendering lists with interactivity
- This ensures proper event handler attachment and reactivity

```tsx
// Correct - use <For>
import { For } from 'solid-js';
<For each={items}>
  {(item) => <button onClick={() => handleClick(item.id)}>{item.label}</button>}
</For>

// Avoid - .map() can cause issues with event handlers
{items.map((item) => <button onClick={() => handleClick(item.id)}>{item.label}</button>)}
```
