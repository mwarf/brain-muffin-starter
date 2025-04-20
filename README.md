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

## Brand Voice, Tone, and Style Guide

Based on successful content examples, use this guide to keep future content sounding natural, engaging, casual, fun, and helpful.

### Overview

*   **Voice:** Friendly, conversational, and relatable—like chatting with a buddy who’s excited to share cool tips.
*   **Tone:** Warm, supportive, and a little playful. It’s about making the reader feel understood and inspired, not lectured.
*   **Style:** Simple, punchy, and fun. Think vivid images, quick stories, and a dash of humor to keep things light.

### Key Elements to Capture

1.  **Language: Keep It Real**
    *   **What to do:** Use everyday words and phrases you’d say in a casual convo. Contractions (like “you’re” or “let’s”) are your friends. Skip the buzzwords and formal stuff.
    *   **Example:** Instead of “Artificial intelligence is transforming video marketing,” say “AI’s totally flipping video marketing on its head.”
    *   **Tip:** Imagine you’re explaining this to a friend who’s curious but not a tech expert.

2.  **Tone: Warm and Supportive**
    *   **What to do:** Show you get the reader’s challenges. Nod to their struggles and offer solutions like a pal who’s got their back.
    *   **Example:** “We all know how crazy it feels trying to keep up with trends when your to-do list is already a mile long, right?”
    *   **Tip:** Use phrases like “I’ve been there too” or “You’re not alone” to build connection.

3.  **Style: Playful and Fun**
    *   **What to do:** Sprinkle in humor or quirky comparisons to keep it breezy. No need to be a comedian—just a little wink here and there.
    *   **Example:** “AI personalization? It’s like your video’s got a bestie who knows exactly what everyone likes—no awkward small talk required!”
    *   **Tip:** Think of fun analogies or light jokes that fit the topic.

4.  **Imagery: Paint a Picture**
    *   **What to do:** Swap dry facts for vivid, bite-sized stories or images that make the point stick.
    *   **Example:** “With AI video tools, it’s like you’ve got a blockbuster director in your back pocket—without the diva attitude.”
    *   **Tip:** Ask yourself, “What’s a fun way to visualize this?” and run with it.

5.  **Engagement: Chat, Don’t Lecture**
    *   **What to do:** Toss in questions or little nudges to pull the reader in, like you’re swapping ideas over coffee.
    *   **Example:** “Ever wished you could whip up videos in Spanish or French without Googling ‘how to say hello’? AI’s on it!”
    *   **Tip:** Use questions or phrases like “Picture this” to keep it interactive.

6.  **Structure: Keep It Light and Digestible**
    *   **What to do:** Break up text with short sentences, bullet points, or quick tables. Make it easy to skim and enjoy.
    *   **Example:** “Shoppable videos? Your viewers can grab that cool jacket right from the screen. No more ‘where’s the link?’ headaches.”
    *   **Tip:** If a section feels dense, chop it into smaller bits or add a fun header.

### Vibe to Aim For

*   **Overall Feel:** Like a coffee chat with a friend who’s excited to share something cool. There’s enthusiasm, a desire to help, and zero pressure.
*   **Key Words:** Relatable, fun, helpful, breezy, supportive.

### Quick Checklist for Future Content

*   **Language:** Did I use everyday words and skip the jargon?
*   **Tone:** Does it feel warm and supportive, like I’m cheering the reader on?
*   **Style:** Is there a playful touch or fun comparison to keep it light?
*   **Imagery:** Did I swap facts for vivid, relatable examples?
*   **Engagement:** Are there questions or nudges to make it feel like a chat?
*   **Structure:** Is it easy to skim with short sentences or lists?

### Putting It All Together

Here’s a mini example of how these elements blend:

*   **Original:** “AI-Powered Personalization: AI crafts videos tailored to individual preferences, such as personalized product recommendations.”
*   **Rewritten:** “AI-Powered Personalization: Imagine your videos knowing exactly what your viewers love—like a friend who always picks the perfect gift. AI digs into the data and serves up stuff like spot-on product recs, no guesswork needed.”

Use this guide to keep your content feeling like a fun, helpful chat—never forced or salesy. Just you, your reader, and some cool ideas to explore. Happy writing!

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
