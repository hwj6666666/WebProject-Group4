const { head } = require('lodash');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        biligrey: "#F4F5F7",
        scoreblue: "#4D8095",
        starcolor: "#a7dee6",
        scorecolor: "#049198",
        bgcolor: "#FFF8E8",
        fontcolor: "#fc3e0e",
      },
      backgroundColor: {
        base: 'var(--color-base)',
        header: 'var(--color-header-base)',
      },
      textColor: {
        base: 'var(--color-text-base)',
      },
    },
  },
  plugins: [],
};