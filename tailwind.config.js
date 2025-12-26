/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        montserrat: [
          "Montserrat",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },

      colors: {
        brand: {
          coffee: "#5B4636",
          beige: "#A6806A",
          offwhite: "#F8F5F2",
          sand: "#D1BFA3",
          burnt: "#C07A50",
          soft: "#E9DFD2",
          dark: "#050505",

          // base dark mode
          night: "#0F0D0B",
          night2: "#14100E",
          ink: "#E9DFD2",
          ink2: "#CBBCA8",
        },

        primary: "#C07A50",
        "primary-foreground": "#F8F5F2",

        background: "#F8F5F2",
        foreground: "#5B4636",

        secondary: "#E9DFD2",
        "secondary-foreground": "#5B4636",

        muted: "#D1BFA3",
        "muted-foreground": "#7A6A5B",

        accent: "#A6806A",
        "accent-foreground": "#F8F5F2",

        destructive: "#DC2626",
        "destructive-foreground": "#FFFFFF",

        border: "rgba(91, 70, 54, 0.18)",
        ring: "#C07A50",
      },

      borderRadius: {
        lg: "1.5rem",
        md: "1rem",
        sm: "0.75rem",
      },

      boxShadow: {
        "soft-card": "0 18px 48px rgba(15,10,5,0.12)",
        "soft-float": "0 18px 40px rgba(0,0,0,0.45)",
      },
    },
  },

  plugins: [],
};
