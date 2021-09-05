module.exports = {
  purge: ["./src/**/*.{js,vue}", "./index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: [
        "Work Sans",
        "sans-serif",
        "-apple-system,BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {
      colors: {
        primary: "#17C3B2",
        secondary: "#fe6d73",
        gray: {
          900: "#090809",
        },
        tw: {
          50: "rbga(255, 255, 255, 0.5)",
        },
      },
      fontSize: {
        "5xl": "clamp(2rem, 4vw ,3rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
