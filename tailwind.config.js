/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#2c2f3a',
        sidebarBackground: '#23262e',
        primaryAccent: '#00FF87',
        secondaryAccent: '#2cb131',
        secondaryText: '#A0A0A0',
      },
    },
  },
  plugins: [],
}

