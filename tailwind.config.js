/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        sm: "420px",
        md: "420px",
        lg: "420px",
        xl: "420px",
        "2xl": "420px",
      },
    },
    extend: {
      colors: {
        "custom-dark": "#2E2E2E",
        "custom-light": "#8C8C8F",
        "custom-blue": "#2888E0",
      },
      borderRadius: {
        custom: "4.6px",
      },
      flexShrink: {
        "2": "2",
      },
    },
  },
  plugins: [],
};
