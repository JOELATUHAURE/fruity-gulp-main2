/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5EB',
          100: '#FFEBD7',
          200: '#FFD7AF',
          300: '#FFC388',
          400: '#FFAF60',
          500: '#FF9A3C', // mango orange
          600: '#FF8A1C',
          700: '#FA7A00',
          800: '#D96C00',
          900: '#B65A00',
        },
        secondary: {
          50: '#FFEFF3',
          100: '#FFE0E7',
          200: '#FFC1CF',
          300: '#FFA2B7',
          400: '#FF839F',
          500: '#FF5A7E', // passion fruit pink
          600: '#FF2C5C',
          700: '#FF0D45',
          800: '#E00039',
          900: '#BE0030',
        },
        accent: {
          50: '#EEFFF4',
          100: '#DEFFEA',
          200: '#BDFFCF',
          300: '#9DFFB4',
          400: '#7DFF99',
          500: '#4CD964', // mint green
          600: '#25CC41',
          700: '#1AA932',
          800: '#138623',
          900: '#0E6319',
        },
        dark: {
          500: '#333333', // charcoal
          600: '#2B2B2B',
          700: '#222222',
          800: '#1A1A1A',
          900: '#111111',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};