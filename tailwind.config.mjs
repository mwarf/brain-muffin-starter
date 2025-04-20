import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

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
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        title: ["Sora", ...defaultTheme.fontFamily.sans],
      },
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
         // --- Shadcn UI Base Colors (Reverted to hsl(var(...))) ---
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
       // Add typography customizations here
       // Add typography customizations here
       typography: ({ theme }) => ({
         DEFAULT: {
           css: {
             // Significantly Increased paragraph spacing and line height
             p: {
               marginTop: theme('spacing.8'), // Was 6
               marginBottom: theme('spacing.8'), // Was 6
               lineHeight: '1.8', // Slightly increased
             },
             // Significantly Increased heading spacing
             'h1, h2, h3, h4, h5, h6': {
               marginTop: theme('spacing.12'), // Was 10
               marginBottom: theme('spacing.6'), // Was 5
             },
              // Add spacing for lists themselves
             'ul, ol': {
               marginTop: theme('spacing.6'),
               marginBottom: theme('spacing.6'),
             },
             // Increased list item spacing
             li: {
               marginTop: theme('spacing.4'), // Was 3
               marginBottom: theme('spacing.4'), // Was 3
             },
             // Adjusted blockquote styling & spacing
             blockquote: {
               marginTop: theme('spacing.8'), // Was 6
               marginBottom: theme('spacing.8'), // Was 6
               paddingLeft: theme('spacing.6'),
               borderLeftWidth: theme('borderWidth.4'),
               fontStyle: 'normal',
             },
             // Increased code block margin
             pre: {
               marginTop: theme('spacing.10'), // Was 8
               marginBottom: theme('spacing.10'), // Was 8
             },
             // Added space below horizontal rules
             hr: {
               marginTop: theme('spacing.10'), // Was 8
               marginBottom: theme('spacing.10'), // Was 8
             },
             // Added space below images
             img: {
                marginTop: theme('spacing.10'), // Was 8
                marginBottom: theme('spacing.10'), // Was 8
             },
             // --- Added Styles ---
             // Heading Sizes/Weights (Increased weights)
             h1: { fontWeight: '800', fontSize: theme('fontSize.4xl') }, // Was 700
             h2: { fontWeight: '700', fontSize: theme('fontSize.3xl') }, // Was 600
             h3: { fontWeight: '700', fontSize: theme('fontSize.2xl') }, // Was 600
             h4: { fontWeight: '700', fontSize: theme('fontSize.xl') },   // Was 600
             h5: { fontWeight: '700', fontSize: theme('fontSize.lg') },  // Was 600
             h6: { fontWeight: '700' }, // Was 600
             // Link Styling
             a: {
               color: theme('colors.primary.DEFAULT'),
               textDecoration: 'underline',
               fontWeight: '500',
               '&:hover': {
                 color: theme('colors.secondary.DEFAULT'),
                 textDecorationThickness: '2px',
               },
             },
             // Code Block Styling
             'pre code': {
               fontFamily: theme('fontFamily.mono'),
               backgroundColor: theme('colors.muted.DEFAULT'),
               padding: theme('spacing.4'),
               borderRadius: theme('borderRadius.md'),
               display: 'block',
               overflowX: 'auto',
             },
             'code::before, code::after': { content: '""' },
             code: {
               fontWeight: '500',
             }
             // --- End Added Styles ---
           },
         },
       }),
     },
   }, // Closing brace for theme
   plugins: [require("tailwindcss-animate"), typography], // Add typography plugin
};
