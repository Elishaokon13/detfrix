/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'roboto': ['roboto', 'sans-serif'],
      'syne': ['syne', 'sans-serif']
    },
    extend: {
      transitionProperty: {
        top: "top",
        left: "left",
        height: "height",
        
      },
    },
  },
  plugins: [],
}