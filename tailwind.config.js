/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        'dvh': '100dvh',
      },
      colors: {
        'gray': '#BFBFBF',
        'light-gray': '#F2F2F2',
        'green': '#C4D925',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}

