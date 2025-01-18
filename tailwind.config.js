/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#5e5898',
          50: '#f5f5ff',
          100: '#ededff',
          200: '#dcdcff',
          300: '#b8b8ff',
          400: '#9595ff',
          500: '#5e5898',
          600: '#4a4578',
          700: '#363357',
          800: '#242236',
          900: '#121115',
        },
      },
    },
  },
  plugins: [],
} 