/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  //  "./src/**/*.{js,ts,jsx,tsx}", 
   "./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screen: {
      sm: "480px",
      bmd: "600px",
      md: "768px",
      lg: "900px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryGreen: "#279d4d",
        secondaryGreen: "#a4c63e",
      },
    },
  },
  plugins: [],
};
