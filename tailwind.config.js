/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx,scss,sass}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Manrope"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#76005B',
                secondary: '#80A1FF'
            },
        },
    },
    safelist: [
        {
            pattern: /grid-cols-*/,
        },
        {
            pattern: /bg|text|dark:bg|dark:text|border|dark:border/,
        }
    ],
    plugins: [],
}

