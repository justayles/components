/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#d1d5db',
        light: '#f4f4f5',
        dark: '#1c1917',
        info: '#eab308',
        success: '#65a30d',
        warning: '#dc2626',
      },
    },
  },
  plugins: [],
};
