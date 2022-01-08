import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
// const daisyUI = require('daisyui')

export default defineConfig({
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/**/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/**/**/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/**/**/**/**/*.{vue,js,ts,jsx,tsx}',
  ],
  variants: {},
  darkMode: 'class',
  // alert class r dynamic, so need to whitelist
  safelist: 'alert alert-error alert-success alert-info alert-warning',
  attributify: false,
  theme: {
    extend: {
      colors: {
        // ...require('daisyui/colors'),
        // teal: {
        //   100: '#096',
        // },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
  // plugins: [daisyUI],
  // daisyui: {
  //   components: true,
  //   styled: true,
  //   themes: true,
  //   base: true,
  //   utils: true,
  //   logs: true,
  //   rtl: false,
  // },
})
