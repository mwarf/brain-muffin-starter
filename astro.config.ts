// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind"; // Re-added import

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? "https://astro-shadcn-ui-template.vercel.app"
    : "http://localhost:4321",
  integrations: [
    react(),
    tailwind(), // Re-added integration
  ],
  // Relying on the Astro integration for Tailwind v3 setup
});
