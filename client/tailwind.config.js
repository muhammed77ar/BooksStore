/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'], // Add the Lexend font here
        gentium: ["Gentium Book Plus", 'serif'],
        charm: ["Charm", 'serif'],
      },
      boxShadow: {
       'custom': 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      },
    },
  },
  plugins: [],
}