/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    // Enable purging of unused styles in production
    enabled: process.env.NODE_ENV === 'production',
    // Specify the paths to all of the template files in your project
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      './src/**/*.tsx',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Extend the default Tailwind CSS styles
      colors: {
        'custom-color': '#123456',
      },
    },
  },
  variants: {
    extend: {
      // Enable additional variant styles
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
