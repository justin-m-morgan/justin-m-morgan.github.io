module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                fly: 'fly 5s ease-in-out infinite',
            },
            keyframes: {
                fly: {
                    '0%': { transform: 'translateY(10%)' },
                    '50%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(10%)' },
                },
            },
            maxWidth: {
                '8xl': '88rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
