/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.125rem",
        xs: "2rem",
      },
    },
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        blue: "#000057",
        gray: "#001d3d",
      },
    },
  },
  plugins: [],
};
