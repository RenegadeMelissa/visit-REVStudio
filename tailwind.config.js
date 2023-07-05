/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        revgray: '#53575b',
        rev: {
          50: '#fffaf9',
          100: '#fbd3ca',
          200: '#f4856b',
          300: '#f27154',
          400: '#f15e3c',
          500: '#ef4a24',
          600: '#e93911',
          700: '#d1330f',
          800: '#b92e0e',
          900: '#a2280c',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
