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
        'mobile' : '60vh',
        '58' : '235px',
        '80-vw': '83%',
        '65':'260px',
        '1-' : '-4px'
      }
    },
  },
  plugins: [],
}

