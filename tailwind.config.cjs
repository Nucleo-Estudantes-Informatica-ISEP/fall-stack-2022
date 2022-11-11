/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'page-background': "url('/src/assets/images/background.png')"
            },
            animation: {
                fade: 'fade ease-out 1s 1.5s forwards',
                'fade-imm': 'fade ease-out 200ms'
            },
            aspectRatio: {
                '1080/1080': '1080 / 1080'
            },
            keyframes: {
                fade: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            },
            fontFamily: {
                good__times: ['Good Times', 'Arial', 'sans-serif'],
                sans: ['Roboto', 'Arial', 'sans-serif']
            },
            dropShadow: {
                '3xl': '2px 2px 0.5px rgba(0, 0, 0, 0.33)',
                '4xl': '2px 3px 4px rgba(0, 0, 0, 0.33)'
            },
            translate: {
                200: '200%'
            }
        }
    },
    plugins: []
};
