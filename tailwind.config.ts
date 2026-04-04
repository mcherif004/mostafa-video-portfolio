import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
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
        content: "64rem",
      },
    },
  },
  plugins: [],
};

export default config;
