# BrainMuffin Website - Knowledge Transfer & Onboarding

Welcome to the BrainMuffin website project! This document provides essential information for developers joining the project.

## 1. Project Overview

-   **Purpose:** The official website for BrainMuffin, an AI VFX department powered by Coalbanks Creative Inc.
-   **Goals:** Lead capture, showcase AI VFX services, and establish thought leadership through a blog.
-   **Target Audience:** Marketing departments, advertising agencies, film producers, and potential clients needing advanced VFX solutions.

## 2. Technology Stack

-   **Framework:** [Astro](https://astro.build) (v4+) - For building the static site structure and handling routing.
-   **Node.js:** Version specified in `.nvmrc` (currently v18+). Use `nvm use` if you have NVM installed.
-   **Package Manager:** [pnpm](https://pnpm.io) - Used for managing dependencies. Install via `npm install -g pnpm`.
-   **Styling:**
    -   [Tailwind CSS](https://tailwindcss.com): Utility-first CSS framework. Configuration is in `tailwind.config.mjs` (Note: This file was initially missing and had to be created). Global styles in `src/styles/global.css`. Placeholder theme colors for BrainMuffin are defined in the config.
    -   [Shadcn UI](https://ui.shadcn.com): Re-usable UI components (built with Radix UI & Tailwind). Components **must be added individually** to `src/components/ui/` via the Shadcn CLI (e.g., `pnpm dlx shadcn-ui@latest add badge`). Configuration in `components.json`. *Note: The CLI currently shows a deprecation warning, suggesting `npx shadcn@latest add [component]` instead.*
-   **UI Components:** Shadcn UI components are primarily React components. Astro uses [Islands Architecture](https://docs.astro.build/en/concepts/islands/) to integrate them. Interactive components need the `client:load` (or other `client:*`) directive.
-   **Content Management:** [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) - Used for the blog.
    -   Schema definition: `src/content/config.ts`. (Note: After creating/modifying this file, run `pnpm dev` to generate necessary types and avoid `Cannot find module 'astro:content'` errors).
    -   Content files: Markdown (`.md` or `.mdx`) located in `src/content/blog/`.
    -   **Frontmatter Gotchas:** YAML parsing can be strict. Ensure dates are quoted (`pubDate: "YYYY-MM-DD"`) and arrays use the standard list format (`categories:\n - Category A\n - Category B`) to avoid validation errors.
-   **TypeScript:** Used throughout the project. Configuration in `tsconfig.json`. Be mindful of potential type errors when working with dynamic data (e.g., category filtering), which may require explicit type casting or definitions. HTML comments inside tags in `.astro` files can also cause TS errors.
-   **Linting/Formatting:** [Biome](https://biomejs.dev/) (configured in `biome.json`). Use `pnpm format` and `pnpm lint`.

## 3. Project Structure

```
/
├── public/             # Static assets (favicon, images, fonts)
├── src/
│   ├── components/     # Reusable Astro/UI components (.astro, .tsx)
│   │   ├── ui/         # Shadcn UI components
│   │   └── *.astro     # General Astro components (Header, Footer, etc.)
│   ├── content/        # Astro Content Collections
│   │   ├── blog/       # Blog posts (.md, .mdx)
│   │   └── config.ts   # Collection schemas
│   ├── layouts/        # Page layouts (.astro)
│   ├── lib/            # Utility functions (.ts)
│   ├── pages/          # Site pages and API routes (.astro, .ts)
│   │   ├── blog/       # Blog related pages (index.astro, [...slug].astro, category/[category].astro)
│   │   └── *.astro     # Core site pages (index, about, contact, services, portfolio, 404)
│   └── styles/         # Global styles and fonts (.css)
├── astro.config.ts     # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration (created manually)
├── tsconfig.json       # TypeScript configuration
├── components.json     # Shadcn UI configuration
├── biome.json          # Biome configuration
├── package.json        # Project dependencies and scripts
├── pnpm-lock.yaml      # Exact dependency versions
├── todo.md             # Development plan checklist
├── knowledgetransfer.md # This file
└── README.md           # Project overview
```

## 4. Development Workflow

1.  **Install Dependencies:** `pnpm install`
2.  **Start Dev Server:** `pnpm dev` (Access at `http://localhost:4321` or specified port)
3.  **Build for Production:** `pnpm build` (Output in `dist/` directory)
4.  **Preview Production Build:** `pnpm preview`
5.  **Linting/Formatting:** `pnpm lint`, `pnpm format`

## 5. Adding Shadcn UI Components

Use the Shadcn CLI (note deprecation warning, prefer `shadcn@latest`):

```bash
# Example: Add the Badge component
pnpm dlx shadcn-ui@latest add badge 
# Or preferred: npx shadcn@latest add badge
```

Remember to add `client:*` directives to interactive components when using them in `.astro` files. Check if the component exists in `src/components/ui/` before importing.

## 6. Content Management (Blog)

-   Blog posts are written in Markdown (`.md` or `.mdx`) and stored in `src/content/blog/`.
-   The structure and frontmatter fields for posts are defined in `src/content/config.ts`. Ensure new posts adhere to this schema. **Pay attention to date quoting and array formatting in frontmatter.**
-   Images for blog posts can be placed alongside the markdown file or in the `public/` directory. Reference them relative to the markdown file or using root-relative paths (e.g., `/images/blog/my-image.jpg`).
-   **Styling Content:** The `BlogPostLayout.astro` uses Tailwind's `prose` classes for basic markdown styling. Avoid using `@apply` within `<style is:global>` in Astro components as it caused rendering issues. For more control, consider adding and configuring the `@tailwindcss/typography` plugin.

## 7. Deployment

-   **Target Platform:** Cloudflare Pages.
-   **Build Command:** `pnpm build`
-   **Output Directory:** `dist`
-   **Configuration Files:** `netlify.toml` and `vercel.json` should be removed or ignored as they are not used for Cloudflare. A `wrangler.toml` might be added later if using Wrangler CLI for deployment.
