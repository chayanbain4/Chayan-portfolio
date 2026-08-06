/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      boxShadow: {
        soft: '0 6px 16px rgba(0, 0, 0, 0.14)',
        medium: '0 14px 30px rgba(0, 0, 0, 0.2)',
        lift: '0 20px 45px rgba(0, 0, 0, 0.28)',
      },
    },
  },
  plugins: [],
}
