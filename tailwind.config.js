/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    { pattern: /bg-(primary|accent-green|background|neutral-gray|card|cta-hover)/ },
    { pattern: /text-(primary|text-main|text-subtle|accent-green)/ },
    { pattern: /hover:bg-(cta-hover)/ }
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        "primary-light": "#1B365D",
        "accent-green": "#2FB67C",
        "muted-teal": "#E6F4F1",
        "neutral-gray": "#8A8F98",
        background: "#F9FAFB",
        card: "#FFFFFF",
        "cta-hover": "#249865",
        "text-main": "#0A2540",
        "text-subtle": "#8A8F98"
      }
    }
  },
  plugins: []
}
