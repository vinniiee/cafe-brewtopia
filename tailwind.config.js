/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      coffee:"#733D26",
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      black:'#000000',
      night:'#111312',
      'dark-coffee':'#4C2819',
      'dark-coffee-2':'#412215'
    },
    fontFamily: {
      'primary': ['"Yanone Kaffeesatz"', 'sans-serif'],
      'secondary': ['Poppins', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      screens: {
        'betterhover': {'raw': '(hover: hover)'},
    }
    },
  },
  plugins: [],
}