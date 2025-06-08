/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: {
          85: 'rgb(85, 85, 85)',
          163: 'rgb(163, 163, 163)',
          53: 'rgb(53, 53, 53)',
          181: 'rgb(181, 181, 181)',
          250: 'rgb(250, 250, 250)',
        },
      },
    },
  },
  plugins: [],
}