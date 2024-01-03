/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  daisyui: {
    themes: ['fantasy'],
  },
  plugins: [require('daisyui')],
}
