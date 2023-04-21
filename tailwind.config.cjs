/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#0EDCAA',
        DEFAULT: '#619C87',
        dark: '#0A453E',
      },
      background: {
        light: '#FFFFFF',
        DEFAULT: '#D9EDDF',
        dark: '#2E2E2E',
      },
      text: {
        light: '#333333',
        DEFAULT: '#2E2E2E',
        dark: '#FFFFFF',
      },
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        100: '#F2F2F2',
        200: '#E5E5E5',
        300: '#D9D9D9',
        400: '#CCCCCC',
        500: '#BFBFBF',
        600: '#B3B3B3',
        700: '#A6A6A6',
        800: '#999999',
        900: '#8C8C8C',
      },
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
