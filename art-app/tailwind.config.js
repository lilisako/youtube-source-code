const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.vue'
  ],
  theme: {
    fontFamily: {
      google: ['Neonderthaw'],
      spartan: ['Spartan'],
      orbitron: ['Orbitron'],
      rosarivo: ['Rosarivo']
    }
  }
}
