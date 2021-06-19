/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundSize: {
        "400%": "400% 400%",
      },
      keyframes: {
        shine: {
          to: {
            backgroundPosition: "-200% center",
          },
        },
        halfSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(150deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        shine: "shine 1s linear infinite",
        "background-spin": "halfSpin 5s ease-in-out infinite",
        "gradient-slow": "gradient 15s ease infinite",
        "gradient-fast": "halfSpin 5s ease infinite",
      },
      colors: {
        "yellow-opaque": "rgb(13 42 148 / 18%)",
        lime: colors.lime,
        cyan: colors.cyan,
        emerald: colors.emerald,
        amber: colors.amber,
        "light-blue": colors.sky,
        orange: colors.orange,
        rose: colors.rose,
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        fancy: ["Sriracha", "cursive", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: theme("fontWeight.bold"),
            },
            h2: {
              fontWeight: theme("fontWeight.bold"),
            },
            h3: {
              fontWeight: theme("fontWeight.bold"),
            },
            h4: {
              fontWeight: theme("fontWeight.bold"),
            },
          },
        },
        xl: {
          css: {
            pre: {
              marginTop: 0,
            },
          },
        },
        lg: {
          css: {
            pre: {
              marginTop: 0,
            },
          },
        },
        light: {
          css: [
            {
              color: theme("colors.gray.200"),
              '[class~="lead"]': {
                color: theme("colors.gray.20"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.200"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                borderRadius: 0,
                // backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
    animation: ["hover"],
  },
  plugins: [require("@tailwindcss/typography")],
};
