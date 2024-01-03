/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  daisyui: {
    darkTheme: false,
    themes: ['fantasy'],
  },
  plugins: [require('daisyui')],
}
