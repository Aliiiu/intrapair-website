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
				blue_01: '#F4EBFF',
				blue_02: '#B2E4FF',
				blue_03: '#80D2FF',
				blue_04: '#4DC0FF',
				blue_05: '#1FB0FF',
				red_01: '#FFB2C1',
				red_02: '#FFA6B7',
				red_03: '#FF8098',
				red_04: '#FF335B',
				black01: '#333333',
				red_05: '#FF0032',
				grey_01: '#E6E6E6',
				grey_02: '#CCCCCC',
				grey_03: '#999999',
				grey_04: '#666666',
				grey_05: '#333333',
				secondaryBlue: '#B2DAFF',
				secondaryBlue_02: '#61ABF2',
				secondaryBlue_03: '#418FD9',
				secondaryBlue_04: '#1C6EBD',
				secondaryBlue_05: '#185EA1',
				purple_01: '#DACCFF',
				purple_02: '#907ACC',
				purple_03: '#553D99',
				purple_04: '#291466',
				purple_05: '#0E0037',
			},
			screens: {
				xs: '425px',
				msm: '600px',
				mlg: '855px',
				md: '768px',
			},
			fontFamily: {
				encode: ['Encode Sans', 'sans-serif'],
				milli: ['Millimetre', 'sans-serif'],
			},
			dropShadow: {
				'3xl': '0px 4px 20px -4px rgba(16, 24, 40, 0.07)',
				'4xl': [
					'0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
					'0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
				],
			},
		},
	},
	plugins: [],
};
