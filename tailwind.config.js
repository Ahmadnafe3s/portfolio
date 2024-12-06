/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["Sacramento"],
        Acme: ["Acme", 'sans-serif'],
        heading : ["Fira Sans", 'sans-serif']
      },
      boxShadow: {
        rightShadow: '2px 0 20px 0 rgba(0, 0, 0, 0.498)'
      }
    },
  },
  plugins: [],
}

