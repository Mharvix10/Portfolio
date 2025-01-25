/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#00001a',
        'lightDark': '#050c17',
        'lightblue': '#050c17'
      },
    },
  },
  plugins: [],
}

