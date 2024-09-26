/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/js/main.js",
    "./public/html/games/*.html",
    "./public/html/voucher/*.html",
    "./public/js/games/*.js",
    "./public/js/voucher/*.js",
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
