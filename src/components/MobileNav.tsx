// Add client directive for Astro islands
/** @jsxImportSource react */
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { buttonVariants } from "./ui/button";
import ThemeToggle from "./ThemeToggle.astro";

// Extend HTMLAttributes to include Astro's client directives
// No longer needed if internal client:load is removed
// declare module 'react' {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     'client:load'?: boolean | string;
//   }
// }

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        className="rounded-md p-2 text-foreground hover:text-primary"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile menu overlay structure - always rendered, visibility controlled by classes */}
      <div
        className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0" // Control opacity via state
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu panel */}
        {/* Use explicit bg-white and dark:bg-zinc-950 instead of bg-background */}
        <div
          className={`fixed inset-y-0 right-0 flex max-w-full pl-10 bg-white dark:bg-zinc-950 transition-transform duration-300 ease-in-out transform ${
            // Changed background class
            isOpen ? "translate-x-0" : "translate-x-full" // Control position via state
          }`}
        >
          <div className="w-screen max-w-xs">
            {/* Inner div for padding and flex layout */}
            <div className="flex h-full flex-col p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Menu</h2>
                <button
                  type="button"
                  className="rounded-md p-2 text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flex flex-col space-y-4">
                <a href="/" className={buttonVariants({ variant: "ghost" })}>
                  Home
                </a>
                <a
                  href="/about"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  About
                </a>
                <a
                  href="/services"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Services
                </a>
                <a
                  href="/portfolio"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Portfolio
                </a>
                <a
                  href="/blog"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Contact
                </a>
                {/* <ThemeToggle client:load="true" /> Temporarily removed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
