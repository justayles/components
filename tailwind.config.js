/** @type {import('tailwindcss').Config} */
import customExtensions from './tailwind.custom';
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      ...customExtensions,
    },
  },
  plugins: [],
};
