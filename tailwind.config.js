/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['fantasy'],
  },
  plugins: [require('daisyui')],
}
