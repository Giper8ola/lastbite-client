import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'c-primary': '#89E49D',
				'c-secondary': '#FFFFFF'
			},
			fontFamily: {
				'f-primary': ['Roboto Mono']
			}
		}
	},
	darkMode: 'class',
	plugins: [heroui()]
};

module.exports = config;
