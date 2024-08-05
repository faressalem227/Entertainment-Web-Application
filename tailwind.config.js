/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        reddishOrange: "#FC4747",
        darkBlue: "#10141E",
        greyishBlue: "#FC4747",
        semiDarkBlue: "#161D2F",
      },

      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
