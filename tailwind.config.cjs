/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'page-background': "url('/src/assets/images/background.png')"
            },
            animation: {
                fade: 'fade ease-out 1s 1.5s forwards'
            },
            keyframes: {
                fade: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            },
            fontFamily: {
                good__times: ['Good Times', 'Arial', 'sans-serif']
            },
            dropShadow: {
                '3xl': '2px 2px 0.5px rgba(0, 0, 0, 0.33)'
            }
        }
    },
    plugins: []
};
