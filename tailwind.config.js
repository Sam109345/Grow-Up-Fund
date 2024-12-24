// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./public/index.html",
  ],
  theme: {
    screens: {
      'mobile': { 'max': '767px' }, // Custom mobile breakpoint
      'tablet': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
};
