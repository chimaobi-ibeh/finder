/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",  // Next.js
    "./public/**/*.html",             // CRA/Vite
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",  // fiNder brand color (purple)
        naira: "#0CAF60",     // Green for currency
      },
    },
  },
  plugins: [],
};
