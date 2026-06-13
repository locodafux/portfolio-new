import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0 14px 40px rgba(17, 24, 39, 0.06)",
      },
      colors: {
        ink: "#111111",
        mist: "#f5f5f4",
        line: "#e7e5e4",
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};

export default config;
