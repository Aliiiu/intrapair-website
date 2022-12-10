/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {      'dark-blue': '#185EA1',

        
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
};
