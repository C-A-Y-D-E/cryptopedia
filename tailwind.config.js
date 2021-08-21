const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      accent: "#26AE60",
      dark: "#0A0909",
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
