# BrainMuffin Website Development Plan

This document outlines the steps to build the BrainMuffin AI VFX Department website.

## Phase 0: Documentation & Setup

- [x] **Create `todo.md`:** Generate this file outlining the plan. (DONE)
- [x] **Update `README.md`:** Modify the README with project details, purpose, tech stack, and links to `todo.md` and `knowledgetransfer.md`.
- [x] **Create `knowledgetransfer.md`:** Generate an onboarding document for new developers covering project overview, tech stack, structure, content management, styling, development workflow, and deployment.
- [x] **Deployment Config Cleanup:** Remove or comment out `netlify.toml` and `vercel.json`.

## Phase 1: Foundation & Structure

- [x] **Base Layout & Navigation:**
    - [x] Modify `src/layouts/BaseLayout.astro`. (No changes needed initially).
    - [x] Update `src/components/Header.astro` (Nav: Home, About, Services, Portfolio, Blog, Contact; Logo placeholder).
    - [x] Update `src/components/Footer.astro`.
    - [x] Configure `src/components/HeadSEO.astro`. (Fixed comment placement causing TS errors).
- [x] **Create Page Stubs:**
    - [x] Create `src/pages/about.astro`.
    - [x] Create `src/pages/services.astro`.
    - [x] Create `src/pages/portfolio.astro`.
    - [x] Create `src/pages/contact.astro`.
    - [x] Create `src/pages/blog/index.astro`.
    - [x] Add basic H1 titles to each stub.
- [x] **Homepage (`src/pages/index.astro`):**
    - [x] Implement basic structure with placeholder sections (Hero, Services Overview, Portfolio Teaser, About Snippet, Blog Teaser, Contact CTA).
    - [x] Use Shadcn Button for CTAs.
- [x] **Initial Styling:**
    - [x] Leverage Tailwind CSS.
    - [x] Define placeholder "colourful, modern, playful" color scheme in `tailwind.config.mjs`. (Note: Had to create `tailwind.config.mjs` as it was missing).

## Phase 2: Content Collections & Blog Setup

- [x] **Content Collections (Blog):**
    - [x] Define schema in `src/content/config.ts` (title, description, pubDate, categories, etc.). (Note: Required running `pnpm dev` to generate types and fix TS error).
    - [x] Create `src/content/blog/`.
    - [x] Add 2-3 sample markdown posts (`.md`/`.mdx`) with placeholder content and categories ("Industry Trends", "Experiments", "Thoughts", "Project Case Studies"). (Note: Encountered frontmatter parsing issues; quoting dates and using YAML list format for arrays resolved them).
- [x] **Blog Index Page (`src/pages/blog/index.astro`):**
    - [x] Fetch all blog entries.
    - [x] Display list/grid of posts.
    - [x] Implement category filtering links/UI.
- [x] **Individual Blog Post Page:**
    - [x] Create dynamic route `src/pages/blog/[...slug].astro`.
    - [x] Create `src/layouts/BlogPostLayout.astro`. (Note: Removed `<style is:global>` with `@apply` rules to fix Tailwind/rendering issues).
    - [x] Render post content based on slug.
- [x] **Category Pages (Dynamic):**
    - [x] Create dynamic route `src/pages/blog/category/[category].astro`. (Note: Added type casting to fix TS error during filtering).
    - [x] Fetch and display posts filtered by category slug.

## Phase 3: Content & Features (Placeholders)

- [x] **Content Placeholders (Core Pages):** Populate `about.astro`, `services.astro`, `portfolio.astro` with more detailed placeholder text (`Lorem ipsum`) and image elements. (Note: Added `badge` component via Shadcn CLI for portfolio).
- [x] **Contact Page (`src/pages/contact.astro`):** Add placeholder contact details and a section marker for the future contact form. (No changes needed in this pass).
- [x] **Video Integration Placeholder:** Add placeholder sections on Services/Portfolio pages where videos will be embedded.

## Phase 4: Deployment Preparation & Configuration

- [x] **Cloudflare Configuration:**
    - [x] Create `wrangler.jsonc` specifying project name and output directory (`./dist`).
    - [x] Add `wrangler` as a dev dependency (`pnpm add -D wrangler`).
    - [x] Add `deploy` script to `package.json` (`wrangler pages deploy ./dist`).
    - [x] Configure Cloudflare Pages build settings:
        - Build command: `pnpm run build`
        - Deployment command: `pnpm run deploy`
    - [x] Configure Cloudflare Pages environment variables:
        - `CLOUDFLARE_API_TOKEN` with "Cloudflare Pages:Edit" permissions.
    - [x] Troubleshoot and resolve deployment errors (e.g., project not found, authentication errors).

## Future Steps / Backlog

- [ ] Replace all placeholder content (text, images, logos, videos).
- [ ] Refine theme colors in `tailwind.config.mjs`.
- [ ] Implement contact form functionality.
- [ ] Implement video embedding.
- [ ] Add mobile navigation (hamburger menu).
- [ ] Add actual icons to service sections.
- [ ] Add actual team member details.
- [ ] Implement blog post comments (if desired).
- [ ] Add pagination or "load more" to portfolio/blog if needed.
- [ ] Add actual link to Coalbanks Creative website in footer/about page.
- [ ] Add `.png` favicon fallback.
- [ ] Consider adding `@tailwindcss/typography` plugin for better prose styling control.
