import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Questrial", "sans-serif"],
      serif: ["Questrial", "sans-serif"],
    },
    extend: {
      fontFamily: {
        amsterdam: "Amsterdam Four, serif",
        questrial: "Questrial, sans-serif",
      },
      colors: {
        linkColor: "#f54eb8",
        gold: "#a77636",
        defaultBackground: "#6a1b5e",

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
