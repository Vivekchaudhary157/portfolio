/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F1",
        paperDim: "#EFEDE5",
        ink: "#1B1E23",
        inkSoft: "#4A4F58",
        line: "#DAD7CC",
        accent: "#2F6F5E",
        accentDeep: "#204A3E",
        accentSoft: "#E3EEE9",
        amber: "#C97A2B",
        amberSoft: "#F6E6D3",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgba(27,30,35,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,30,35,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
