import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
        "2xl": "32px",
        xl: "24px",
        lg: "16px",
        base: "14px",
      },
      colors: {
        bg: "#fff",
        primary: "#000",
        link: "#ffffff80",
        gray: "#0000008C",
        red: "#D52626",
        green: "#144A0F",
        lightGray: "#A89E914D",
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
