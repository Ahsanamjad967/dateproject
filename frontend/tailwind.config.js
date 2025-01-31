/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#4D4D4D",
      },
      fontFamily: {Playwrite:['Playwrite VN','sans-serif']},
    },
  },
  plugins: [],
};
