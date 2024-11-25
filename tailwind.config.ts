import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon:"var(--neon)",
        secondary:"var(--secondary)",
        primary:"var(--primary)",
        sidebar:"var(--sidebar)",
        gray:"var(--gray)",
        "light-gray":"var(--light-gray)"
      },
    },
  },
  darkMode:"class",
  plugins: [],
} satisfies Config;
