/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        unicore: {
          dark: '#1F4060',
          'dark-light': '#2B5377',
          accent: '#2ECBB6',
          'accent-hover': '#25a89a',
        },
        design: {
          dark: '#212529',
          mid: '#6C757D',
          bg: '#F8F8F8',
          border: '#EFEFEF',
          placeholder: '#ADB5BD',
        },
      },
    },
  },
  plugins: [],
};
