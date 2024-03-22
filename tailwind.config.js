/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    backgroundColor:{
     'sample':"#d5d4d4"
    }
  },
  plugins: [],
}