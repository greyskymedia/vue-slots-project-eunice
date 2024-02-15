/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      "Inter": "Inter"
    },
    extend: {
      colors: {
        customGreen: '#377364',
        customBlue: '#375673',
      }
    },
  },
  plugins: [],
}

