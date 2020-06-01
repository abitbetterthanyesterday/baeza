/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          '600': '#c9191a',
        },
        blue: {
          ...colors.blue,
          '600': '#026ab6'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  purge: false
}
