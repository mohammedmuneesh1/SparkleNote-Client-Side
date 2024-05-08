/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      zIndex: {
        '100': '-1',
      },
      inset: {
        '19': '4.4rem',
      },
    },
  },
  plugins: [],
}

