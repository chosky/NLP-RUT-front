module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        morado: '#753BBD',
        verde: '#84BD00',
        azul: '#00B5FF',
        azulh: '#00B9',
        naranja: '#FF8200',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
