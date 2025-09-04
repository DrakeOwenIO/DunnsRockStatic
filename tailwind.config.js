module.exports = {
  content: [
    "./src/**/*.{html,md,njk,js}",
    "./_includes/**/*.{html,njk}",
  ],
  theme: {
    extend: {
      colors: {
        lodgeBlue: '#1e3a8a',
        lodgeGold: '#d4af37'
      }
    },
  },
  plugins: [],
}
