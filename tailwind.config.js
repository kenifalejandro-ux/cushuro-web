/*client/tailwind.config.js*/

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      /* ═══════════════════════════════════════════════════════════ */
      /* TOKENS DE DISEÑO — CUSHURO (Minería & Logística Industrial) */
      /* ═══════════════════════════════════════════════════════════ */

      /* COLORES */
      colors: {
        /* Brand primario — Acento minero */
        brand: {
          accent: "#10b981", // emerald-500 (verde industrial)
          "accent-dark": "#059669", // emerald-600
          "accent-light": "#6ee7b7", // emerald-300
        },
        /* Escala neutra — Fondo industrial */
        neutral: {
          900: "#0c0d0e", // casi negro
          800: "#1a1a1a",
          700: "#292929",
          600: "#404040",
          500: "#5a5a5a",
          400: "#737373",
          300: "#a3a3a3",
          200: "#d4d4d4",
          100: "#ececec",
          50: "#f8f8f8",
        },
        /* Acento secundario — Minería clásica */
        ore: {
          DEFAULT: "#d97706", // amber-600
          light: "#fbbf24", // amber-300
          dark: "#b45309", // amber-700
        },
      },

      /* TIPOGRAFÍA */
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Inter", "monospace"], // Para números, especificaciones técnicas
      },
      fontSize: {
        /* Escala de título — Sistema modular 1.25x */
        "display-xl": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["2.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],

        /* Escala de cuerpo */
        "body-lg": ["1.125rem", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],

        /* Especial — Técnico (monoespaciada) */
        "tech-lg": ["1rem", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "600", fontFamily: "monospace" }],
        "tech-md": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.06em", fontWeight: "600", fontFamily: "monospace" }],
        "tech-sm": ["0.75rem", { lineHeight: "1.3", letterSpacing: "0.08em", fontWeight: "600", fontFamily: "monospace" }],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      /* ESPACIADO */
      spacing: {
        /* Escala 4px base — Estándar Tailwind */
        0: "0",
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
        10: "2.5rem", // 40px
        12: "3rem", // 48px
        16: "4rem", // 64px
        20: "5rem", // 80px
        24: "6rem", // 96px
        32: "8rem", // 128px
        /* Secciones grandes */
        "section-sm": "3rem", // 48px
        "section-md": "4rem", // 64px
        "section-lg": "6rem", // 96px
        "section-xl": "8rem", // 128px
      },

      /* BORDES */
      borderRadius: {
        none: "0",
        sm: "0.375rem", // 6px
        md: "0.5rem", // 8px
        lg: "1rem", // 16px
        xl: "1.5rem", // 24px
        "2xl": "2rem", // 32px
        full: "9999px",
      },

      /* SOMBRAS */
      boxShadow: {
        none: "none",
        "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        /* Industrial */
        "industrial": "0 8px 24px -4px rgba(0, 0, 0, 0.15)",
        "industrial-dark": "0 12px 32px -8px rgba(0, 0, 0, 0.25)",
      },

      /* TRANSICIONES */
      transitionDuration: {
        "fast": "150ms",
        "base": "300ms",
        "slow": "500ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}