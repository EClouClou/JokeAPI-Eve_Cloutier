/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'dark-blue': '#1b2851',
      'blue': '#6f8ff4',
      'black': '#000000',

    },
    fontFamily: {
      'sans': ['nom', 'sans-serif'],
      'heading': ['nom', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

