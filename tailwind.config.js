/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/application/**/*.{vue,js,jsx,tsx}'],
	darkMode: 'Media',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1280px',
			xl: '1420px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				dark: '#000212',
				light: '#F7F8F8',
				gray: {
					DEFAULT: '#EFEDFD9A',
					dark: '#B4BCD0',
					border: '#ffffff25',
				},
			}
		},
		fontFamily: {
			sans: ['DM Sans', 'sans-serif']
		}
	},
	plugins: [],
}
