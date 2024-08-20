/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        slideOut: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        slide: "slideIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
