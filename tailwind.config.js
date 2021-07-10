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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
