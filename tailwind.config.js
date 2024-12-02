/** @type {import('tailwindcss').Config} */
// import   adidasM from "./PracticaProyecto/src/assets/adidasM.jpg"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        backgroundImage: {
          // "mi-fondo": `url()`,
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10%)" },
        },

        animation: {
          slideDown: "slideDown 0.5s ease-out",
          bouncneOnce: "bounce 1s ease-in-out 1",
          slideRightOnce: "slideRight 1s ease-in-out 1",
        },
      },
    },
  },
  plugins: [],
};
