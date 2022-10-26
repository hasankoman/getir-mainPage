/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "getir-white": "#dbdbff",
        "getir-yellow": "#FFD300",
        "getir-purple": {
          100: "#5d3ebc",
          200: "#4c3398",
        },
      },
    },
  },
  plugins: [],
};
