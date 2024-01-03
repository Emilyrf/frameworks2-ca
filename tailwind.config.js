/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  daisyui: {
    darkTheme: false,
    themes: ['fantasy'],
  },
  plugins: [require('daisyui')],
}
