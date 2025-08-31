/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Noto Sans','Ubuntu','Cantarell','Helvetica Neue','Arial','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'],
      }
    },
  },
  plugins: [],
};
