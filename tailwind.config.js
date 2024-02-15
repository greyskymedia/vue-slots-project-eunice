/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      "Inter": "Inter"
    },
    extend: {
      colors: {
        "green": "#377364",
        "blue": "#375673"
      }
    },
  },
  plugins: [],
}

