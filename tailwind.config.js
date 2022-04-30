module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
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
    },
  },
  plugins: [],
};
