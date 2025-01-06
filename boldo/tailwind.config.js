/** @format */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        primary: "#0A2640",
        secondary: "#65E4A3",
        third: "#777777",
        forth: "#F1F1F1",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        tiny: "13px",
        sm: "20px",
        xsm: "24px",
        md: "28px",
        bg: "48px",
        xbg: "96px",
      },
    },
  },
  plugins: [],
};
