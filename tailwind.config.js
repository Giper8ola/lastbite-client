import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'.src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'.src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {},
	darkMode: 'class',
	plugins: [heroui()]
};

module.exports = config;
