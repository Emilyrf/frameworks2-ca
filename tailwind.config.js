/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  daisyui: {
    themes: ['fantasy'],
  },
  plugins: [require('daisyui')],
}
