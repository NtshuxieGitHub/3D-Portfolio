/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c4",
        tertiary: "#151031",
        "black-100": "#100d27",
        "black-200": "#090323",
        "white-100": "#f3f3f4",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e37",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
