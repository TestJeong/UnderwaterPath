// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        mobile: { max: '500px' },
        // => @media (min-width: 640px) { ... }
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      fontSize: {
        'h1-mobile': '0.5rem', // h1 폰트 크기 설정 예시
        'h2-mobile': '1rem', // h2 폰트 크기 설정 예시
      },
      colors: {
        primary: colors.green,
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
              whiteSpace: 'pre-wrap', // 자동 줄바꿈 적용
              wordBreak: 'break-word', // 긴 단어 강제 줄바꿈
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
              '@screen mobile': {
                fontSize: (theme) => ({
                  h1: theme('fontSize.h1-mobile'),
                  h2: theme('fontSize.h2-mobile'),
                  // 추가적인 h3, h4 등 필요한 요소 설정
                }),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
