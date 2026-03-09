/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        unicore: {
          dark: '#1A365D',
          'dark-light': '#2C5282',
          accent: '#2ECBB6',
          'accent-hover': '#25a89a',
          'accent/10': 'rgba(46, 203, 182, 0.1)',
          'accent/20': 'rgba(46, 203, 182, 0.2)',
        },
        design: {
          dark: '#1a202c',
          mid: '#4a5568',
          bg: '#F5F7FA',
          border: '#E2E8F0',
          placeholder: '#A0AEC0',
        },
      },
      boxShadow: {
        'nav': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06)',
        'hero': '0 2px 40px rgba(0, 0, 0, 0.25)',
        'btn': '0 4px 14px rgba(46, 203, 182, 0.35)',
        'btn-hover': '0 6px 20px rgba(46, 203, 182, 0.45)',
      },
      dropShadow: {
        'hero': '0 2px 20px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
