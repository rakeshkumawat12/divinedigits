const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.8rem",
      },
    },
    fontFamily: {
      geist: ["Geist", "sans-serif"],
    },
    animation: {
      shimmer: "shimmer 2s linear infinite",
      "meteor-effect": "meteor 5s linear infinite",
      "rotate-left": "rotate-left 100s linear infinite",
      "rotate-right": "rotate-right 100s linear infinite",
      scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        spin_2s_linear_infinite: "spin 2s linear infinite",
    },
    keyframes: {
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
        "70%": { opacity: "1" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0",
        },
      },
      "rotate-left": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(-360deg)" },
      },
      "rotate-right": {
        from: { transform: "rotate(-360deg)" },
        to: { transform: "rotate(0deg)" },
      },
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    screens: {
      md: "600px",

      lg: "1100px",

      xl: "1280px",
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
