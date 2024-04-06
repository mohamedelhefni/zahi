/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  darkMode: 'class',

  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}