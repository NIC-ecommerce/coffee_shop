import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      mmd: { max: "768px" },
      lg: "1140px",
      xl: "1512px",
    },
    extend: {
      fontSize: {
        xl: "32px",
        lg: "24px",
        base: "14px",
      },
      colors: {
        bg: "#fff",
        primary: "#000",
        red: "#D52626",
        green: "#144A0F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
