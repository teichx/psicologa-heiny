import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Crimson Text", "serif"],
      serif: ["Crimson Text", "serif"],
    },
    extend: {
      fontFamily: {
        allura: "Allura, cursive",
        cormorant: "Cormorant Garamond, serif",
        crimson: "Crimson Text, serif",
        sacramento: "Sacramento, cursive",
      },
      colors: {
        primary: {
          bg: "#701851",
          main: "#f7f7f7",
          text: "#f7f7f7",
        },
        light: {
          bg: "#f7f7f7",
          main: "#d8008d",
          text: "#151515",
        },
        dark: {
          bg: "#2a2a2a",
          main: "#f54eb8",
          text: "#f7f7f7",
        },
        highlight: {
          bg: "#ff87d5",
          main: "#1e1e1e",
          text: "#393939",
        },
      },
    },
  },
  plugins: [],
};

export default config;
