const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        cursorBlink: {
          '0%': { opacity: 0 },
        },
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.pink,
        secondary: colors.indigo,
        gray: colors.slate,
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              // so heading links aren't obscured by the sticky page header
              scrollMarginTop: '112px',
              // show the heading auto links
              '&:hover': {
                a: {
                  opacity: 1,
                },
              },
            },
            'p, li': {
              color: theme('colors.gray.500'),
            },
            a: {
              color: theme('colors.primary.700'),
              '&:hover': {
                color: theme('colors.primary.800'),
              },
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            blockquote: {
              fontWeight: 400,
              fontStyle: 'normal',
              padding: '1.25rem',
              p: {
                color: 'inherit',
                margin: 0,
              },
              color: theme('colors.secondary.600'),
              backgroundColor: theme('colors.secondary.50'),
              borderLeftColor: theme('colors.secondary.500'),
            },
            code: {
              color: theme('colors.secondary.600'),
              backgroundColor: theme('colors.secondary.50'),
              padding: '4px 6px',
              borderRadius: '0.25rem',
            },
            // Remove backticks from showing
            'code::before': {
              content: 'none',
            },
            // Remove backticks from showing
            'code::after': {
              content: 'none',
            },
            strong: { color: theme('colors.gray.600') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
