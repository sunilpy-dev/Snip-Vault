/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        // Height-based custom breakpoints (like Tailwind's sm, md, etc.)

        'tall': { raw: '(max-height: 1200px)' },   // Very tall devices (portrait tablets, tall monitors)
        '3xl': { raw: '(min-width: 2100px)' },
      },
    },
  },
  plugins: [],
}

