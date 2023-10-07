/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      height: {
        '100': '100%', // This adds a utility class `h-100` for height: 100%;
      }
    }
  },
  variants: {},
  plugins: []
}
