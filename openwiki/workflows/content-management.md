# Workflows: Content Management

Step-by-step guides for the most common maintenance tasks on this site: adding
blog posts, adding projects, and updating portfolio data. For schema details and
the underlying Content Layer API, see [Data & Content](../domains/data-content.md).

## Add a Blog Post

1. Create a new `.mdx` file in `/src/content/blog/`. The file name (minus
   extension) becomes the URL slug, e.g. `my-post.mdx` → `/blog/my-post/`.
2. Add frontmatter matching the blog schema in `/src/content.config.ts`:
   ```yaml
   ---
   title: Article Title
   description: Short summary
   pubDate: 2026-02-15
   tags: [tag1, tag2]
   language: en
   ---
   ```
3. Optional fields:
   - `heroImage` – path/URL to a header image.
   - `updatedDate` – shown alongside `pubDate` in `BlogLayout.astro`.
   - `translationSlug` – set this on **both** the English and Thai posts to link
     them together (renders a "Read in English" / "อ่านเป็นภาษาไทย" button).
   - `servicesNote: true` – appends the consulting/advisory P.S. blurb at the end
     of the post.
4. Write the MDX body. Use `<MermaidDiagram>` (imported from
   `/src/components/blog/MermaidDiagram.astro`) for diagrams — see `/CLAUDE.md`
   for the exact usage pattern and `size` prop options.
5. Run `bun run dev` (or `npm run dev`) and preview at `/blog/<slug>/`. Run
   `bun run build` before shipping to catch Zod schema errors.

**Bilingual posts:** this site's convention is one MDX file per language variant
(e.g. `design-omnichannel-delivery.mdx` for English and
`design-omnichannel-delivery-th.mdx` for Thai), cross-linked via
`translationSlug`, not a single file with locale switching.

## Add a Project

There are two places a project can live, and they serve different purposes —
see [Data & Content](../domains/data-content.md) for why both exist:

- **Long-form project writeup:** create an `.mdx` file in `/src/content/project/`
  with the project schema (`title`, `description`, `pubDate`, `tags`, `language`,
  optional `heroImage`, `github`, `mediumSlug`). Renders at `/project/<slug>/`.
- **Card grid entry (no writeup, just a link):** add an object to
  `/src/data/projects.json` (title, description, tags, pubDate, language,
  optional `mediumSlug`/`github`). Appears in the searchable grid at `/project`.

A project can have both — an MDX writeup and a matching `projects.json` entry —
or just one of the two.

## Update Portfolio Data

1. Edit the relevant JSON file in `/src/data/` (e.g. add a new role to
   `experiences.json`, a new skill to `skills.json`, a new course to
   `courses.json`).
2. Match the shape defined in `/src/data/props.ts` for that data type
   (`ProfessionalExperience`, `EducationExperience`, `Competition`, `Course`,
   etc.) — there is no runtime schema validation for this data, so mistakes only
   surface as TypeScript errors or missing fields in the rendered UI.
3. The relevant Astro page (e.g. `/src/pages/experience.astro`,
   `/src/pages/course.astro`) imports the JSON directly and re-renders
   automatically — no other code changes needed for a simple content addition.
4. Run `bun run build` (or `npm run build`) to type-check and validate the page
   still compiles.

## Add a New Portfolio Page

1. Create a new `.astro` file in `/src/pages/` — the file name becomes the route
   (e.g. `/src/pages/new-section.astro` → `/new-section`).
2. Import `BaseLayout` from `/src/layouts/BaseLayout.astro` for the standard
   header/footer/theme wrapper.
3. Import any needed data from `/src/data/` and render it.
4. Add Solid.js components (`.tsx`, imported with a `client:only="solid-js"` or
   `client:load` directive) for interactive pieces like search or filters —
   see the "Solid.js in Astro Best Practices" section of `/CLAUDE.md` for
   directive pitfalls (prefer `client:only="solid-js"` for click handlers).

## Related

- [Data & Content](../domains/data-content.md) – schema details and the
  Content Layer API (`id`, `render()`) used by routing.
- [Architecture](../architecture/overview.md) – overall system design.
- [Operations](../operations/build-deploy.md) – build/validate/deploy commands.
