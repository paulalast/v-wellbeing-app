/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#E2DED9",
				secondary: "#B58C67",
				tertiary: "#EDEBE4",
				grey: "#707070",
			},
			fontFamily: {
				serif: ["Fondamento", "cursive"],
				sans: ["Quicksand", "sans-serif"],
			},
		},
	},
	plugins: [],
}
