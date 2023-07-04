/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main_dark_blue: "#032541",
        search: "#EBEBEB",
      },
      fontFamily: {
        CF_openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
