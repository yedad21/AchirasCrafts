/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{App,components}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#F8F5F2', // Soft, earthy off-white
        'brand-primary': '#4A6C6F', // Muted pastel teal/green
        'brand-secondary': '#8D6E63', // Soft brown, like light wood
        'brand-accent': '#C8A79A', // A warm, rosy accent
        'brand-text': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
