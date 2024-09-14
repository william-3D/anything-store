/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#821131',
        secondary: '#4379F2',
        'accent-1': '#5BC0F8',
        'accent-2': '#86E5FF',
        background: '#FBF6EE',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

