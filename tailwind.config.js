/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      colors: {
        // Primary blue
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },

        // Dark text / slate tones
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

        // WhatsApp / success
        sage: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },

        // Light blue page backgrounds
        paper: {
          DEFAULT: "#f4f8ff",
          deep: "#eef5ff",
        },

        // Kept for existing components that still use gold-* classes.
        // Visually mapped to the blue theme.
        gold: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },

      boxShadow: {
        soft: "0 2px 14px rgba(37, 99, 235, 0.05)",
        card: "0 10px 32px rgba(37, 99, 235, 0.07)",
        lift: "0 18px 40px rgba(37, 99, 235, 0.10)",
        brand: "0 10px 28px rgba(37, 99, 235, 0.20)",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },

        "fill-bar": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "75%",
          },
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
