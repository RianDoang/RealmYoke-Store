/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "public/games/mobile-legends.html"],
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
