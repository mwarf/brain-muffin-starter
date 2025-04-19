# BrainMuffin - AI VFX Department Website

This repository contains the source code for the BrainMuffin website, an AI VFX department powered by Coalbanks Creative Inc. The site aims to capture leads, showcase AI VFX services, and host a thought leadership blog.

## Getting Started

To get started with development, make sure you have Node.js v18+ (check `.nvmrc`) and `pnpm` installed on your system. Then, follow these steps:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open your browser and navigate to `http://localhost:4321` (or the port specified in the terminal) to see the application running.

## Technology Stack & Features

This project utilizes the following core technologies:

- [Astro](https://astro.build): A modern web framework for building content-driven websites.
- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework for rapid UI development.
- [shadcn/ui](https://ui.shadcn.com): Re-usable UI components built using Radix UI and Tailwind CSS (integrated via Astro islands for interactivity).
- **Astro Content Collections:** Used for managing blog posts and potentially other structured content.
- **Theme Toggle:** Includes support for switching between light and dark themes.

## Project Documentation

- **Development Plan:** See [todo.md](todo.md) for the detailed development checklist and phases.
- **Developer Onboarding:** New developers should consult [knowledgetransfer.md](knowledgetransfer.md) for an overview of the project structure, conventions, and workflow.

## How to add components

Shadcn UI is a collection of re-usable components that can be easily integrated into your applications. It is not a component library, but rather a set of components that you can copy and paste into your projects.

To add a new component to your application, please refer to the [configuration guide](https://ui.shadcn.com/docs/installation/astro#thats-it).

> [!NOTE]
> In Astro, an [island](https://docs.astro.build/en/concepts/islands/) refers to any interactive UI component on the page. To add an interactive component like [Accordion](https://ui.shadcn.com/docs/components/accordion), [Dialog](https://ui.shadcn.com/docs/components/dialog) and more you have a couple of solutions available: [Add a Shadcn UI Component - Space Madness](https://spacemadness.dev/docs/add-a-shadcn-ui-component) or [shadcn-ui/ui#2890](https://github.com/AREA44/astro-shadcn-ui-template/issues/66).

For detailed documentation on using Shadcn UI, please visit the [full documentation](https://ui.shadcn.com/docs).

Shadcn UI is primarily built for the React framework. If you are unfamiliar with framework components in Astro, we recommend reading the [framework components guide](https://docs.astro.build/en/core-concepts/framework-components/) to get started.

Feel free to explore the various components and enhance your application with Shadcn UI!

## Deployment

This site is configured for deployment to [Cloudflare Pages](https://pages.cloudflare.com/).

- **Configuration:** See `wrangler.jsonc` and the `deploy` script in `package.json`.
- **Detailed Setup & Troubleshooting:** Refer to the [Deployment section in knowledgetransfer.md](knowledgetransfer.md#7-deployment).

## License

Licensed under the [MIT License](LICENSE).
