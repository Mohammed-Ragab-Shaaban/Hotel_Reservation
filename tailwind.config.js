/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    screens: {
      // sm: "640px",
      sm: "360px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "main-color": "#e8bf96",
        "second-color": "#FFC376",
        "pragraph-color": "#FFFFFF70",
      },
      inset: { 15: "15%" },
      height: { 112: "28rem" },
      minHeight: { 104: "26rem", 120: "30rem" },
      lineHeight: { 11: "3rem" },
      width: { "max-content": "max-content" },
    },
  },
  plugins: [],
};
