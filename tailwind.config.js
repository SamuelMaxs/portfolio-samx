/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: "#0f172a",
        html_color: "#E34F26",
        css_color: "#1572B6",
        tailwind_color: "#06B6D4",
        react_color: "#61DAFB",
      },
    },
  },
  plugins: [],
}
