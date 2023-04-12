const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "my-neutral": {
          100: "hsl(0, 0%, 100%)",
          300: "hsl(0, 0%, 63%)",
          600: "hsl(0, 0%, 27%)",
          900: "hsl(0, 0%, 0%)",
        },
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],

        // Default font override
        sans: ["League Spartan", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
