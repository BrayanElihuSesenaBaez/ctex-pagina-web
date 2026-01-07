// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'ctex-blue': '#004c9e',
                'ctex-blue-light': '#1c6dc7',
                'ctex-blue-dark': '#003b7a',
                'ctex-orange': '#f7931e',
                'ctex-orange-dark': '#d97e14',
                'ctex-whatsapp': '#28a745',
            },
            boxShadow: {
                'xl-soft': '0 15px 35px rgba(2,6,23,0.08)',
            }
        }
    },
    plugins: []
};
