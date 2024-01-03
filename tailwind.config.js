/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  daisyui: {
    themes: ['fantasy'],
  },
  plugins: [require('daisyui')],
}
