/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        cream: '#f5f0e8',
        'green-w': '#2d5a27',
        'pink-w': '#f4a7b9',
        'pink-stripe': '#f9c8d4',
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
