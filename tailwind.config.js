/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        blue: "hsl(246, 80%, 60%)",
        "light-red-1": "hsl(15, 100%, 70%)",
        "soft-blue": "hsl(195, 74%, 62%)",
        "light-red-2": "hsl(348, 100%, 68%)",
        "lime-green": "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        "soft-orange": "hsl(43, 84%, 65%)",

        // Neutral
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        rubik: ["Rubik", "serif"],
      },
    },
  },
  plugins: [],
};
