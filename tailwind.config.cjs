module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '500px',     // Small screens
                'md': '768px',     // Medium screens
                'lg': '1024px',    // Large screens
                'xl': '1280px',    // Extra large screens
            },
        },
    },
    plugins: [
        require('tailwindcss-animatecss'),
    ],
}