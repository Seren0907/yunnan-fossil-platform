/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        museum: {
          navy: '#17324d',
          teal: '#1f8a83',
          mist: '#eef6f3',
          stone: '#6f7472',
          paper: '#f7f2e8',
          ink: '#20302f',
        },
      },
      boxShadow: {
        soft: '0 16px 40px rgba(23, 50, 77, 0.12)',
      },
    },
  },
  plugins: [],
};
