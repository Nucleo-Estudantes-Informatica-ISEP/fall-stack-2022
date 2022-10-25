/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'page-background': "url('/src/assets/images/background.png')"
            }
        }
    },
    plugins: []
};
