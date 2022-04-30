module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#2563EB",
        warning: "#FACC15",
        light: "#FFFFFF",
        dark: "#111827",
      },
      fontFamily: {
        kronaOne: ["Krona One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        shrink: "shrink 0.5s ease",
      },
      keyframes: {
        shrink: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.75)" },
        },
      },
    },
  },
  plugins: [],
};
