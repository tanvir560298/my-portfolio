/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edfcf8',
          100: '#d3f8ed',
          200: '#abefdf',
          300: '#75dfcd',
          400: '#3cc7b4',
          500: '#19aa97',
          600: '#0c8c76',
          700: '#0d705f',
          800: '#10594e',
          900: '#104a41',
          950: '#062c27',
        },
        ink: '#10201d',
        paper: '#f7faf9',
        success: '#16794b',
        error: '#c63c3c',
        warning: '#a15c07',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: { '4xl': '2rem' },
      boxShadow: {
        soft: '0 18px 50px -28px rgb(6 44 39 / 0.28)',
        lift: '0 24px 70px -32px rgb(6 44 39 / 0.38)',
      },
    },
  },
  plugins: [],
}
