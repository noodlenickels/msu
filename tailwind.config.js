/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'l': '1130px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2080px',
    },
    extend: {
      fontFamily: {
        somic: ['"NT-Somic"', "somic"],
      },
      colors: {
        'primary': '#334374'
      }
    }
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
}

