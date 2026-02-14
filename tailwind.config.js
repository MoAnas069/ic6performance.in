/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'aether-black': '#050505',
                'aether-dark': '#0a0a0a',
                'aether-text': '#e0e0e0',
                'aether-red': '#FF1E1E',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [],
}
