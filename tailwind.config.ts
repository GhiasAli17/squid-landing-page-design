import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle,#494955,#141414)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "vertical-lines":
          "repeating-linear-gradient(90deg, #000, #000 calc(100% / 13 - 2px), #0d0d0d calc(100% / 13 - 2px), #0d0d0d calc(100% / 13))",
      },
      colors: {
        white: "#fff",
        "light-gray": "#9E9E9E",
        "gradient-start": "#FF9898",
        "gradient-end": "#8054FF",
        "r-gradient-start": "#494955",
        "r-gradient-end": "#141414",
        "medium-black": "#131415",
        "light-black": "#222228",
        "medium-gray": "#313139",
      },
    },
  },
  plugins: [],
};
export default config;
