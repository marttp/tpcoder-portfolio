# Data & Content Structure

This page is the canonical reference for how content (blog/project MDX) and
portfolio data (JSON/TypeScript) are structured and consumed. See
[Architecture](../architecture/overview.md) for how these feed into routing and
the build pipeline.

## Content Collections (MDX)

Defined in `/src/content.config.ts` using Astro's Content Layer API
(`glob` loader + Zod schema):

```typescript
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    language: z.enum(['en', 'th']),
    translationSlug: z.string().optional(),
    servicesNote: z.boolean().optional(),
  }),
});

const project = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/project' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    language: z.enum(['en', 'th']),
    heroImage: z.string().optional(),
    mediumSlug: z.string().optional(),
    github: z.string().optional(),
  }),
});
```

**Frontmatter fields worth knowing:**
- `translationSlug` – links an English post to its Thai variant (or vice versa).
  `BlogLayout.astro` uses it to render a "Read in English" / "อ่านเป็นภาษาไทย" link.
- `servicesNote` – when `true`, `BlogLayout.astro` appends a short consulting/advisory
  P.S. note at the end of the post, linking to `https://business.tpcoder.dev/`.
- `mediumSlug` / `github` (project collection only) – optional external links shown
  on project pages.

**Blog volume:** ~65 MDX files in `/src/content/blog/` (English + Thai variants of
the same posts, matched by `translationSlug`). **Projects:** 2 MDX files in
`/src/content/project/` (a small showcase set — most historical projects live in
`projects.json`, see below).

### Content Layer API: `id` and `render()`

Blog/project routing and the RSS feed all use the **Content Layer API** (Astro
5+), not the older `slug`/`.render()`-on-entry pattern:

- Entries are identified by `entry.id` (derived from the file path, e.g.
  `design-audience-platform.mdx` → id `design-audience-platform`). Pages strip the
  `.md`/`.mdx` extension with `entry.id.replace(/\.(md|mdx)$/, '')` before building
  the URL — see `/src/pages/blog/[...slug].astro`, `/src/pages/blog/index.astro`,
  `/src/pages/project/[...slug].astro`, and `/src/pages/rss.xml.js`.
- Entries are rendered with the standalone `render(entry)` helper imported from
  `astro:content` (not `entry.render()`): `const { Content, headings } = await render(post)`.
- `/src/pages/rss.xml.js` exports `GET(context)` (capitalized, the Astro v4+/v5
  convention) rather than the older lowercase `get()`.

If you add a new content collection or a new dynamic route, follow this same
`id` + `render()` pattern rather than older Astro tutorials that reference
`entry.slug`/`entry.render()`.

## Portfolio Data (JSON & TypeScript)

Located in `/src/data/`. All shapes are typed in `/src/data/props.ts` and imported
directly into Astro pages/components (no schema validation layer — types are
compile-time only).

| File | Purpose | Consumed by |
|------|---------|-------------|
| `experiences.json` | Professional (`professional[]`) and education (`education[]`) history, each with `highlights: string[]` | `/src/pages/experience.astro` |
| `courses.json` | Online courses/certifications | `/src/pages/course.astro`, `CourseSearch.tsx` |
| `skills.json` | Skills grouped by category | `/src/pages/skill.astro`, `SkillBubbles.tsx` |
| `activities.json` | Competitions, speaking engagements, overseas activities | `/src/pages/activity.astro` |
| `volunteers.json` | Volunteer work/commitments | `/src/pages/activity.astro` |
| `certified.json` | Standalone certifications | `/src/pages/skill.astro` |
| `introduce.json` | Personal introduction text | Homepage/about |
| `projects.json` | Legacy/Medium project list (title, tags, `mediumSlug`, `github`) — separate from the MDX `project` content collection | `/src/pages/project/index.astro` (search/card grid) |
| `contact.ts` | Contact details (export, not JSON) | `/src/pages/contact.astro` |
| `social.ts` | Social/external links (export, not JSON) | Footer, contact page |
| `props.ts` | TypeScript interfaces for every data shape above | Imported wherever data is typed |

**Two project surfaces exist side by side** — `projects.json` renders the
searchable card grid at `/project`, while the `project` MDX collection renders
individual long-form project pages at `/project/[...slug]`. When adding a new
in-depth project writeup, add both an MDX file (for the detail page) and,
optionally, an entry in `projects.json` if you want it in the card grid too.

## Related

- [Workflows: Content Management](../workflows/content-management.md) – step-by-step
  guide for adding blog posts, projects, and portfolio data.
- [Architecture](../architecture/overview.md) – how routing and the build pipeline
  consume this content.
