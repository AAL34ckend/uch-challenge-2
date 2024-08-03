/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-1px 0px 79px -24px rgba(0,0,0,0.75);'
      },
      colors: {
        "primary": "#5956E9",
        "secondary": "#232233"
      },
      backgroundImage: {
        "hero": "url('/assets/bg_header.png')",
        "blog": "url(/assets/background.jpg)"
      }
    },
  },
  plugins: [],
}