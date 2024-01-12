/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,php}"],
  theme: {
    extend: {
      colors: {
        'my-blue': '#1fb6ff',
        'my-orange': '#ff7849',
        'my-green': '#13ce66',
        'my-gray': '#8492a6',
      },
    },
  },
  plugins: [],
}

