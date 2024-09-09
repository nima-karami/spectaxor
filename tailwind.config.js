const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: 'rgb(67 56 202)',
          },
        },
        dark: {
          colors: {
            primary: 'rgb(99 102 241)',
          },
        },
      },
    }),
  ],
};
