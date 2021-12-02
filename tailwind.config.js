const colors = require('tailwindcss/colors');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Outfit',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: [
        'Playfair Display',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(184, 227, 184)',
        },
        secondary: {
          DEFAULT: 'rgb(60, 51, 48)',
        },
        gray: colors.trueGray,
      },
      boxShadow: {
        brutal: '24px 24px 0 rgb(184, 227, 184)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
