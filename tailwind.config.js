/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'media': '75vh',
        '2-' : '-20px'
      }
    },
  },
  plugins: [],
}

