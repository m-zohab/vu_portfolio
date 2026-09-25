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
      colors: {
        // Light theme primary brand colors (Modern Blue)
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb", // Primary action color
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        // "Ink" — mapped to Slate text tones for high contrast on light backgrounds
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // "Sage / Emerald" — functional success and WhatsApp action colors
        sage: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        // Page background palette for light-blue system
        paper: {
          DEFAULT: "#f3f7fc", // Primary light blue-grey section background
          deep: "#ffffff",    // Pure white for alternating/card backgrounds
        },
      },
      boxShadow: {
        soft: "0 2px 14px rgba(15, 23, 42, 0.04)",
        card: "0 10px 32px rgba(15, 23, 42, 0.06)",
        lift: "0 18px 40px rgba(15, 23, 42, 0.10)",
        brand: "0 10px 28px rgba(37, 99, 235, 0.20)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fill-bar": {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "fill-bar": "fill-bar 1.4s ease-out 0.3s both",
      },
    },
  },
  plugins: [],
};
