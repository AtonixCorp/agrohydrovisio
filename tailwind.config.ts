/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      
      colors: {
        'custom-color': '#123456',
      },
    },
  },
  variants: {
    extend: {
      
      opacity: ['disabled'],
    },
  },
  plugins: [],
};