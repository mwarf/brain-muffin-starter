/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Matches Shadcn UI setup
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Scan all relevant files in src
    "./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Include pages just in case (though src should cover it)
    "./components/**/*.{ts,tsx}", // Specifically for Shadcn UI components
  ],
  prefix: "", // Matches Shadcn UI setup
  theme: {
    container: {
      // Matches Shadcn UI setup
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // --- BrainMuffin Placeholder Palette (Colourful, Modern, Playful) ---
        brain: {
          primary: {
            DEFAULT: "hsl(260, 80%, 60%)", // Vibrant Purple
            foreground: "hsl(0, 0%, 100%)", // White
          },
          secondary: {
            DEFAULT: "hsl(180, 70%, 50%)", // Bright Teal
            foreground: "hsl(180, 100%, 10%)", // Dark Teal
          },
          accent: {
            DEFAULT: "hsl(45, 100%, 55%)", // Sunny Yellow
            foreground: "hsl(45, 100%, 15%)", // Dark Yellow/Brown
          },
          playful: {
            pink: "hsl(330, 90%, 65%)",
            green: "hsl(140, 70%, 55%)",
            orange: "hsl(25, 95%, 60%)",
          },
        },
        // --- Shadcn UI Base Colors (Keep these for component compatibility) ---
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        // Matches Shadcn UI setup
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Matches Shadcn UI setup
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        // Matches Shadcn UI setup
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Matches Shadcn UI setup
};
