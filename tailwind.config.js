module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      gridTemplateColumns: {
        2: "repeat(1, 1fr 600px )",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
