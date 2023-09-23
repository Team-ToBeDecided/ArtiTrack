// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '300px',
      // => @media (min-width: 300px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        Bamboo: "#CF8E56",
        Clay: "#77604D",
        Charcoal: "#383330",
        Sandalwood: "#964E15",
      },
      backgroundImage: {
        'loginBg': `url("./src/assets/random/loginImage.svg")`,
      }
      // fontFamily: {
      //   'inter': ['Inter'],
      // },
    },
  },
  plugins: [],
});