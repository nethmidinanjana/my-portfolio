import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      opacity: {
        "64": ".64",
      },
    },
  },
  plugins: [],
};
export default config;
