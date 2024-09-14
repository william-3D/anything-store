/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB100',
        secondary: '#0081C9',
        'accent-1': '#5BC0F8',
        'accent-2': '#86E5FF',
        background: '#FBF6EE',
      }
    },
  },
  plugins: [],
}

