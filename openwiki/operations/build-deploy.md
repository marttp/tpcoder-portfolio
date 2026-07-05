# Operations: Build & Deploy

The site is a fully static Astro build — there is no server-side runtime or API
to operate in production. This page covers the build pipeline, environment
configuration, and deployment considerations. For content authoring, see
[Workflows](../workflows/content-management.md).

## Commands

```bash
bun install        # or npm install / yarn install

bun run dev         # astro dev, serves http://localhost:3000
bun run build       # astro build, outputs to /dist
bun run preview     # astro preview, serves the /dist build locally
```

`bun run build` is also the de facto validation step: it runs Zod schema
validation on all blog/project frontmatter (via `/src/content.config.ts`) and
TypeScript type-checking, so a broken content file or data shape will fail the
build rather than silently ship.

## Environment-Based Site URL

`/astro.config.mjs` switches the Astro `site` config based on how the process
was invoked, not a `.env` file:

```javascript
const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
let BASE_URL = LOCALHOST_URL;   // http://localhost:3000
if (isBuild) {
  BASE_URL = LIVE_URL;          // https://portfolio.tpcoder.dev
}
```

This means `site` is only ever `https://portfolio.tpcoder.dev` when running
`astro build` specifically (used for absolute URLs in the sitemap and RSS feed);
`astro dev`/`astro preview` always resolve to `localhost:3000`.

## Integrations & What They Produce

Configured in `/astro.config.mjs`:

| Integration | Purpose |
|-------------|---------|
| `@astrojs/mdx` | Compiles `.mdx` content in blog/project collections |
| `@astrojs/sitemap` | Generates `sitemap-index.xml` for SEO |
| `@astrojs/solid-js` | Enables Solid.js component hydration |
| `astro-compress` (`compress({ CSS: false })`) | Minifies HTML/JS output; CSS compression is explicitly disabled to avoid inline style issues |
| `@tailwindcss/vite` | Tailwind CSS 4 processing via Vite plugin |
| Shiki (`markdown.shikiConfig`) | Syntax highlighting for code blocks in MDX, using the single `github-dark` theme for both light and dark site modes (see `/src/layouts/BlogLayout.astro` for how inline vs. fenced code colors are reconciled with the dark-mode toggle) |

`/src/pages/rss.xml.js` builds the RSS feed at build time from
`getCollection('blog')` and `getCollection('project')`, using `entry.id`
(Content Layer API) to build each item's link — see
[Data & Content](../domains/data-content.md) for the `id`/`render()` pattern
used across routing and RSS.

## Deployment

- Output is a static `/dist` directory (HTML/CSS/JS) — deployable to any static
  host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.). No server
  process or database is required in production.
- The production site URL baked into the build is `https://portfolio.tpcoder.dev`
  (see Environment-Based Site URL above) — update `LIVE_URL` in
  `/astro.config.mjs` if the site is ever moved to a different domain.
- Because the RSS feed and sitemap are generated from `site`, always deploy the
  output of `astro build` (not `astro dev`) so absolute URLs are correct.

## What to Watch When Changing This Area

- Editing `/astro.config.mjs` integrations or `shikiConfig` affects every page —
  re-run a full `bun run build` and spot-check a blog post's code blocks in both
  light and dark mode after any Shiki/Tailwind change.
- Changing the RSS/sitemap URL scheme (e.g. how slugs are derived from
  `entry.id`) affects `/src/pages/rss.xml.js`, `/src/pages/blog/[...slug].astro`,
  `/src/pages/blog/index.astro`, and `/src/pages/project/[...slug].astro`
  together — keep the `entry.id.replace(/\.(md|mdx)$/, '')` pattern consistent
  across all four.
