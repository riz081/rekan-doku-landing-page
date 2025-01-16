/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        SourceSansPro: ['Source Sans Pro', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.05%',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', // Konversi hex ke rgba
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

