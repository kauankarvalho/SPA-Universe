/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/pages/*.html"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

    keyframes: {
      slideDown: {
        "0%": { transform: "translateY(-50px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },

      slideLeft: {
        "0%": { transform: "translateX(100px)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
    },

    animation: {
      slideDown: "slideDown 1.5s ease",
      slideLeft: "slideLeft 1.5s ease",
    },

    extend: {},
  },
  plugins: [],
}
