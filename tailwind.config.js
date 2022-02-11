module.exports = {
  content: ['./frontend/src/**/*.svelte'],
  theme: {
    extend: {
      colors:{
        'scheme-dark': '#21325E',
        'scheme-light-dark': '#3E497A',
        'scheme-white': '#F0F0F0',
        'scheme-red': '#FF6464',
        'scheme-red-transparent': 'rgba(255, 100, 100, 0.8)'
      },
      fontFamily:{
        'andika': ['Andika', 'sans-serif'],
        'paytone': ['Paytone One', 'sans-serif']
      }
    },
  },
  plugins: [],
}
