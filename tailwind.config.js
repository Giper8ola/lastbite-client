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
		colors: {
			'c-primary': '#89E49D'
		}
	},
	darkMode: 'class',
	plugins: [heroui()]
};

module.exports = config;
