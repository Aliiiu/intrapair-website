/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    extend: {
      colors: {
        'dark-blue': '#185EA1',
        white: '#ffffff',
        blue01: '#1FB0FF',
        blue02: '#0E0037',
        black01: '#333333'
      },
      screens: {
        xs: '425px',
        msm: '600px',
        mlg: '855px',
        md: '768px',
      },
    },
  },
  plugins: [],
}
