/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      white:'#FFFFFF',
      blue:"#0057FF",
      black:"#1E2125",
      dark:'rbga(18,20,25,0.5)'
    },
    extend: {
      backgroundImage:{
        'hero':"url('https://res.cloudinary.com/freecodingboy/image/upload/v1663673863/Detfrix/Home/home-bg_ugjcen.png')"
      }
    },
  },
  plugins: [],
  
}