import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#ff5252",
        lightGrayishViolet: "#dedddf",
        darkGrayishViolet: "#8e8593",
        veryDarkViolet: "#21092f",
      },
    },
  },
  plugins: [],
} satisfies Config;
