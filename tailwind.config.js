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
    keyframes: {
      shrink: {
        "0%": { transform: "scaleX(1)" },
        "100%": { transform: "scaleX(0)" },
      },
    },
    animation: {
      shrink: "shrink 5s forwards",
    },
  },
  plugins: [],
};
