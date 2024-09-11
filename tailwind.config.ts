import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jua: ['Jua', 'sans-serif'],
      },
      colors: {
        primary: {
          bege: "#F8B195",
          hotPint: "#F67280",
          darkPink: "#C06C84",
          darkPurple: "#6C5B7B",
          darkBlue: "#355C7D",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        background: 'background 2s ease-in-out infinite',
        linear: 'backgroundLinear 3s linear infinite',
        slide: 'backgroundSlide 120s linear infinite alternate-reverse forwards;',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: 'left 0% bottom 0%' },
          '50%': { backgroundPosition: 'left 200% bottom 0%' },
        },
        backgroundLinear: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        backgroundSlide: {
          '0%': { backgroundPosition: '0 0%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
