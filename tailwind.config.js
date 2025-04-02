﻿/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Blue for branding
        'primary-dark': '#1E40AF',
      },
    },
  },
  plugins: [],
};