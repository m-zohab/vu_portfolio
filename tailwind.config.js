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
        // "Ink" — the primary brand hue, a muted blue-violet rather than a
        // stock Tailwind indigo. Doubles as the near-black used for text.
        ink: {
          50: "#F2F1FA",
          100: "#E7E6F3",
          200: "#CFCCE8",
          300: "#ACA6D6",
          400: "#7A73B8",
          500: "#5952B0",
          600: "#433D9B",
          700: "#332F7D",
          800: "#2B2769",
          900: "#221F52",
          950: "#1B1A3B",
        },
        // "Gold" — a muted antique gold accent (academic seal / graduation
        // tassel), used sparingly against the ink palette.
        gold: {
          100: "#F6E9CF",
          200: "#EBD5A3",
          300: "#E4C078",
          500: "#C9973D",
          600: "#B8862E",
          700: "#96701F",
        },
        // "Sage" — the functional success/checkmark colour.
        sage: {
          100: "#DFF3E9",
          500: "#2E9E6D",
          600: "#25845A",
        },
        // Page background — a rich dark navy blue (per client request),
        // with "deep" used for alternating sections.
        paper: {
          DEFAULT: "#161A3D",
          deep: "#1F2350",
        },
      },
      boxShadow: {
        soft: "0 2px 14px rgba(27, 26, 59, 0.07)",
        card: "0 10px 32px rgba(27, 26, 59, 0.10)",
        lift: "0 18px 40px rgba(27, 26, 59, 0.16)",
        gold: "0 10px 28px rgba(184, 134, 46, 0.28)",
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
