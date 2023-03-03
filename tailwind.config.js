/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  variants: {
    extend: {
      cursor: ['disabled'],
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        'main-dark': `radial-gradient(71.18% 70.9% at 85.73% 5.35%, rgba(255, 30, 205, 0.5) 0%, rgba(255, 30, 205, 0) 100%), 
        radial-gradient(40.86% 64.08% at 34.71% 67.06%, rgba(97, 0, 255, 0.5) 0%, rgba(97, 0, 255, 0) 100%)`,
      },
      boxShadow: {
        tab: '0px -6px 23px rgba(98, 60, 231, 0.32), 0px 14.2636px 23px rgba(98, 60, 231, 0.32)',
        button: '0px 12px 20px rgba(142, 122, 244, 0.2)',
        radio: 'inset 0px 0px 0px 7px',
        mobileMenu: '0px 25px 100px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        card: {
          100: '#8E7AF41A',
          200: '#8E7AF4',
          300: '#161C33',
        },
        surface: {
          100: '#1B213A',
          300: '#474B64',
          200: '#353950',
          800: '#0D1128',
          900: '#060A20',
        },
        skeleton: {
          100: '#212745',
        },
        neutral: {
          200: '#CCCED3',
          300: '#9A9CA7',
          400: '#676B7C',
          700: '#0F142F',
          800: '#0A0F2B',
          900: '#020824',
        },
        orange: {
          500: '#F0A93E',
        },
        red: {
          500: '#FF647C',
        },
        violet: {
          300: '#ccbff7',
          500: '#8E7AF4',
          700: '#6347F5',
        },
        rose: {
          500: '#D3486C',
        },
      },
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
        serif: ['poppins', 'serif'],
      },
      spacing: {
        18: '72px',
      },
      height: {
        13: '52px',
      },
      maxHeight: {
        13: '52px',
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1380px',
        xl: '1700px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
}
