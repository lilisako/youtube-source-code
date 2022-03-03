const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.vue'
  ],
  theme: {
    fontFamily: {
      righteous: ['Righteous']
    }
  }
}
