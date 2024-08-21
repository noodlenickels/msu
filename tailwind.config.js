/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#334374',
    }),
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'l': '1130px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        somic: ['"NT-Somic"', "somic"],
      },
    }
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
}

