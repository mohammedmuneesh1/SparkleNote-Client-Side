
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",flowbite.content()],
  theme: {
    extend: {
      zIndex: {
        '100': '-1',
      },
      inset: {
        '19': '4.4rem',
      },
      maxWidth: {
        'xsm': '22rem',
      },
      colors: {
        'white-cream': '#FCFBF4 ',
      },
    },
  },
  plugins: [ flowbite.plugin()],
}

