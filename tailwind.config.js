/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1300px'},
      'lg': { 'max':  '991px'},
      'md': { 'max':  '767px'},
      'sm': { 'max':  '550px'},
      'xsm': { 'max':  '375px'},
    }
  },
  plugins: [],
}