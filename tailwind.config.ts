import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--color-bg)",
          text: "var(--color-text)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          card: "var(--color-card)",
          accent: "var(--color-accent)",
          border: "var(--color-border)",
          nav: "var(--color-nav-bg)",
          navText: "var(--color-nav-text)",
          footer: "var(--color-footer-bg)",
        },
      },
      maxWidth: {
        /** ~max-w-5xl: layout mas compacto y centrado */
        content: "60rem",
      },
      spacing: {
        "section-sm": "clamp(2.5rem, 4.5vw, 3.5rem)",
        "section": "clamp(3rem, 6vw, 4.75rem)",
        "section-lg": "clamp(3.5rem, 7vw, 5.5rem)",
      },
      letterSpacing: {
        premium: "-0.02em",
        micro: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
