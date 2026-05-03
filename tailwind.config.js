/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#e6e6ef",
          100: "#c0c0d4",
          200: "#9696b8",
          300: "#6c6c9c",
          400: "#4d4d87",
          500: "#2e2e72",
          600: "#29296a",
          700: "#23235f",
          800: "#1d1d55",
          900: "#121242",
          950: "#0a0a1a"
        },
        accent: {
          DEFAULT: "#14b8a6",
          light: "#5eead4",
          dark: "#0f766e",
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a"
        },
        neon: {
          blue: "#38bdf8",
          purple: "#8b5cf6",
          pink: "#f43f5e",
          green: "#22c55e",
          orange: "#f97316",
          cyan: "#06b6d4"
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        accent: ['"Syne"', "sans-serif"]
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "gradient-x": "gradientX 5s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        aurora: "aurora 10s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        blob: "blob 7s infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108, 99, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(108, 99, 255, 0.6)" }
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        aurora: {
          "0%, 100%": {
            borderColor: "#6c63ff",
            boxShadow: "0 0 30px rgba(108, 99, 255, 0.3)"
          },
          "25%": {
            borderColor: "#00d4ff",
            boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)"
          },
          "50%": {
            borderColor: "#a855f7",
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)"
          },
          "75%": {
            borderColor: "#ec4899",
            boxShadow: "0 0 30px rgba(236, 72, 153, 0.3)"
          }
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" }
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        }
      },
      backgroundSize: {
        300: "300% 300%"
      },
      backdropBlur: {
        xs: "2px"
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(108, 99, 255, 0.3)",
        glow: "0 0 30px rgba(108, 99, 255, 0.4)",
        "glow-lg": "0 0 60px rgba(108, 99, 255, 0.5)",
        "glow-xl": "0 0 100px rgba(108, 99, 255, 0.6)",
        "neon-blue": "0 0 30px rgba(0, 212, 255, 0.4)",
        "neon-purple": "0 0 30px rgba(168, 85, 247, 0.4)",
        "neon-pink": "0 0 30px rgba(236, 72, 153, 0.4)",
        "inner-glow": "inset 0 0 30px rgba(108, 99, 255, 0.1)"
      }
    }
  },
  plugins: []
};
