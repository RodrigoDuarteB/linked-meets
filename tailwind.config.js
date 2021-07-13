const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#29303b',
        'primary-light': '#525965',
        'primary-dark': '#000715',
        'secondary': '#f5f5f5',
        'secondary-light': '#ffffff',
        'secondary-dark': '#c2c2c2'
      }
    },
    colors: {
      warmgray: colors.warmGray,
      orange: colors.orange,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      gray: colors.gray,
      green: colors.green,
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      red: colors.red
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
