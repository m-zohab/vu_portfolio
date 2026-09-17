/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Body copy — highly legible at small sizes
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // Headings — a slightly more geometric, distinct display face
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(15, 23, 42, 0.06)",
        card: "0 8px 30px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
