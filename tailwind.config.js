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
        '58' : '235px',
        '80-vw': '83%',
        '20-vw':'20%',
      }
    },
  },
  plugins: [],
}

