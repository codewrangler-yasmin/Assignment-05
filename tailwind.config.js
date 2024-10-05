/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/js/script.js"],
  theme: {
    extend: {
      colors: {
        neon: "#B4F461",
        regular: "#111111",
      },
      fontFamily: {
        primary: ['"Lexend", sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
