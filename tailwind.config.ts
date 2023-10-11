import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "896px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      backgroundImage: {},
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "Player-Display": ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#4851D5",
        bgColor: "#F3F3FF",
      },
    },
  },
  plugins: [],
};
export default config;
