/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#3a3a3a",
        secondary: "#c2c2c2",
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono Variable", ...defaultTheme.fontFamily.mono],
      },
    },
    fontSize: {
      xs: ["12px", "18px"],
      sm: ["14px", "20px"],
      md: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "30px"],
      dxs: ["24px", "32px"],
      dsm: ["30px", "38px"],
      dmd: ["36px", "44px"],
      dlg: ["48px", "60px"],
      dxl: ["60px", "72px"],
      d2xl: ["72px", "90px"],
    },
    screens: {
      sm: "768px",
      md: "1024px",
      content: "1280px",
      lg: "1440px",
    },
    boxShadow: {
      "xs-focused-primary": "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #b3e6f9",
      "lg": "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);",
    },
  },
  plugins: [],
};
