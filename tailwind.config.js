/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'dark-blue': '#1b2851',
      'blue': '#c5d2fb',

    },
    fontFamily: {
      'sans': ['nom', 'sans-serif'],
      'heading': ['nom', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

