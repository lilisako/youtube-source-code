const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      google: ['Roboto']
    },
    extend: {
      colors: {
        orange: colors.orange
      }
    }
  }
}
