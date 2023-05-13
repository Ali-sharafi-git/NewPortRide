/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-primary': '#1E1F2D',
        'c-gray': '#C7C7C7',
        'c-dark-gray': '#595959',
        'c-dark': '#111111',
        'c-very-dark-gray': '#282626',
      },
      borderRadius: {
        '2.5xl': '20px',
      },
      fontSize: {
        'xx': '0.625rem',
      },
    },
  },
  plugins: [],
}
