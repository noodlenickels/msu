/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#334374',
    }),
    extend: {
      fontFamily: {
        somic: ['"NT-Somic"', "somic"],
      },
    }
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
}

