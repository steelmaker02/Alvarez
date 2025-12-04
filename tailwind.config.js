/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./context/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cacao: '#2B1B17',
                cream: '#F5F0EB',
                copper: '#C68E66',
                'copper-light': '#D4A381',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            },
            letterSpacing: {
                widest: '.2em',
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2800&auto=format&fit=crop')",
                'factory-pattern': "url('https://images.unsplash.com/photo-1566199923366-419a4e40db74?q=80&w=2800&auto=format&fit=crop')",
            }
        },
    },
    plugins: [],
}