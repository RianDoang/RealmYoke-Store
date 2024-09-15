/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "public/games/mobile-legends.html",
    "public/js/ml.js",
    "public/js/main.js",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "32px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        plusjakartasans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
