/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'laptop': '1200px',
      'desktop': '1440px',
      'sm': '30em',   // 480px
      'md': '48em',   // 768px
      'lg': '64em',   // 1024px
      'xl': '80em',   // 1280px
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
