/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#2d2d2d",
        headerColor : "#2d2d2c",
        paragrpahColor: "#232222",
        productsColor :'#2f2f2f',
        backgroundColor :'#f7f7f7',
        titleColor :" #363636",
        hoverColor : '#6f42c1',
        footerColor : '#252525',
      },
    },
  },
  plugins: [],
};
