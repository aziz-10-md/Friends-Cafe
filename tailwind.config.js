/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#de2c4d",
        secondary:"#fb923c",
      },
      fontFamily:{
        poppins:["poppins","sans-serif"],
        averia:["Averia Serif Libre", "serif"]
      },
      container:{
        center: true,
        padding:{
          default:"1rem",
          sm: "2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl": "6rem",

        }
      }
    },
  },
  plugins: [],
}

