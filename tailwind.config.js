/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#0F294A',
          darkNavy: '#081728',
          deepBlue: '#1A365D',
          sky: '#EBF3FB',
          border: '#D2DEE9',
          saffron: '#E8701A',
          saffronLight: '#FFF6EE',
          green: '#15803D',
          greenLight: '#F0FDF4',
          gold: '#C59B27',
          grayText: '#475569',
          cardBg: '#FFFFFF',
          pageBg: '#F3F6F9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans', 'Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'gov': '0 2px 8px rgba(15, 41, 74, 0.08)',
        'gov-lg': '0 6px 20px rgba(15, 41, 74, 0.12)',
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
}
