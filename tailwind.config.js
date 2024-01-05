/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],

  daisyui: {
    themes: ['fantasy'],
    darkTheme: false,
  },
  plugins: [require('daisyui')],
}
