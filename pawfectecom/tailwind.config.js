/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#26d07c",
                secondary: "#d0267a",
            },
            transitionDuration2000: {
                2000: "2000ms",
            },
        },
    },
    plugins: [],
};
