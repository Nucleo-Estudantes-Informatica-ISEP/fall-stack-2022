/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'modal-accent': '#fb923c', // orange-400
                'modal-active': '#f97316', // orange-50
                'modal-hover-accent': '#f3f4f6', // gray-100
                'social-media-link': '#3b82f6', // blue-500
<<<<<<< HEAD
                'social-media-hover': '#2563eb', // blue-600,
=======
                'social-media-hover': '#2563eb', // blue-600
>>>>>>> main
                'fallstack-color': '#f97316' // orange-50
            },
            backgroundImage: {
                'page-background': "url('/src/assets/images/background.webp')"
            },
            animation: {
                fade: 'fade ease-out 1s 1.5s forwards',
                'fade-imm': 'fade ease-out 200ms'
            },
            aspectRatio: {
                '1080/1080': '1080 / 1080'
            },
            gridTemplateColumns: {
                'responsiveness-180px-columns': 'repeat(auto-fit, minmax(250px, 1fr))'
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
                '4xl': '2px 3px 4px rgba(0, 0, 0, 0.33)',
                'fallstack-logo-shadow': '2px 3px 4px #f97316',
                'fallstack-text-shadow': '1px 1px 0.5px #f97316'
            },
            translate: {
                200: '200%'
            }
        }
    },
    plugins: []
};
