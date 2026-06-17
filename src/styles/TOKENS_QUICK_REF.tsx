/**
 * DESIGN TOKENS — Quick Reference
 * Copypaste esto en nuevos componentes
 */

// ═══════════════════════════════════════════════════════════
// COLORES — Palette
// ═══════════════════════════════════════════════════════════

const COLORS = {
  /* Brand — Verde minería */
  brand: {
    accent: "bg-brand-accent",          // #10b981
    accentDark: "bg-brand-accent-dark", // #059669
    accentLight: "bg-brand-accent-light", // #6ee7b7
    text: "text-brand-accent",
  },

  /* Neutral — Escala industrial */
  neutral: {
    900: "bg-neutral-900", // #0c0d0e (casi negro)
    800: "bg-neutral-800", // #1a1a1a (oscuro)
    700: "bg-neutral-700", // #292929
    600: "bg-neutral-600", // #404040
    500: "bg-neutral-500", // #5a5a5a
    text100: "text-neutral-100", // claro
    text200: "text-neutral-200",
    text400: "text-neutral-400",
    text500: "text-neutral-500",
  },

  /* Acento secundario — Naranja minería */
  ore: {
    DEFAULT: "bg-ore", // #d97706
    light: "bg-ore-light", // #fbbf24
    dark: "bg-ore-dark", // #b45309
  },
};

// ═══════════════════════════════════════════════════════════
// TIPOGRAFÍA — Font Sizes
// ═══════════════════════════════════════════════════════════

const TYPOGRAPHY = {
  /* Display — Títulos grandes */
  displayXl: "text-display-xl",   // 3.5rem, 700 weight
  displayLg: "text-display-lg",   // 2.75rem, 700 weight
  displayMd: "text-display-md",   // 2.25rem, 600 weight
  displaySm: "text-display-sm",   // 1.875rem, 600 weight

  /* Body — Párrafos */
  bodyLg: "text-body-lg",  // 1.125rem
  bodyMd: "text-body-md",  // 1rem (default)
  bodySm: "text-body-sm",  // 0.875rem
  bodyXs: "text-body-xs",  // 0.75rem

  /* Tech — Monoespaciado (especificaciones) */
  techLg: "text-tech-lg",  // 1rem + monospace + 05em tracking
  techMd: "text-tech-md",  // 0.875rem + monospace
  techSm: "text-tech-sm",  // 0.75rem + monospace
};

// ═══════════════════════════════════════════════════════════
// ESPACIADO — Padding, Margin, Gap
// ═══════════════════════════════════════════════════════════

const SPACING = {
  /* Basics — 4px scale */
  xs: "p-1",      // 4px
  sm: "p-2",      // 8px
  md: "p-4",      // 16px
  lg: "p-6",      // 24px
  xl: "p-8",      // 32px
  xl2: "p-12",    // 48px

  /* Sections */
  sectionSm: "py-section-sm",  // 48px
  sectionMd: "py-section-md",  // 64px (normal)
  sectionLg: "py-section-lg",  // 96px (large)
  sectionXl: "py-section-xl",  // 128px (hero)

  /* Gaps */
  gapSm: "gap-2",  // 8px
  gapMd: "gap-4",  // 16px
  gapLg: "gap-6",  // 24px
};

// ═══════════════════════════════════════════════════════════
// COMPONENTES FRECUENTES
// ═══════════════════════════════════════════════════════════

export const ComponentTemplates = {
  /* Card oscura — ProductAdvantagesGrid style */
  darkCard: `
    bg-neutral-800
    border-l-2 border-brand-accent
    p-6 md:p-8
    rounded-md
    hover:bg-neutral-700
    transition duration-base ease-smooth
  `,

  /* Botón primario */
  buttonPrimary: `
    px-6 py-3
    bg-brand-accent hover:bg-brand-accent-dark
    text-white font-semibold
    rounded-md
    transition duration-base ease-smooth
  `,

  /* Línea de acento */
  accentLine: `
    h-px
    bg-gradient-to-r from-brand-accent to-transparent
  `,

  /* Sección con padding */
  section: `
    py-section-md md:py-section-lg
    px-6
    max-w-6xl mx-auto
  `,

  /* Título + descripción */
  heading: `
    <h2 className="text-display-lg text-white">Título</h2>
    <p className="text-body-md text-neutral-300 mt-4">Descripción</p>
  `,
};

// ═══════════════════════════════════════════════════════════
// EJEMPLOS DE USO
// ═══════════════════════════════════════════════════════════

export const Examples = {
  /* Tarjeta de ventaja */
  AdvantageCard: () => (
    <div className="bg-neutral-800 border-l-2 border-brand-accent p-8 rounded-md hover:bg-neutral-700 transition duration-base">
      <span className="text-tech-md text-brand-accent">01</span>
      <p className="text-display-sm text-neutral-100 mt-4">Ventaja competitiva</p>
      <div className="h-px bg-gradient-to-r from-brand-accent to-transparent mt-8"></div>
    </div>
  ),

  /* Encabezado de sección */
  SectionHeader: () => (
    <div className="py-section-md">
      <p className="text-tech-md text-brand-accent">CAPACIDADES</p>
      <h2 className="text-display-lg text-white mt-4">Producción Industrial</h2>
    </div>
  ),

  /* Grid con gaps consistentes */
  ConsistentGrid: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* items */}
    </div>
  ),
};

// ═══════════════════════════════════════════════════════════
// CHECKLIST — Antes de hacer PR
// ═══════════════════════════════════════════════════════════

const CHECKLIST = `
  ☐ Colores — ¿Usa brand-*, neutral-*, ore-*?
  ☐ Tipografía — ¿text-display-*, text-body-*, text-tech-*?
  ☐ Espaciado — ¿p-4, p-6, gap-4, gap-6, py-section-*?
  ☐ Bordes — ¿rounded-md, rounded-lg?
  ☐ Transiciones — ¿duration-base ease-smooth?
  ☐ Nombres CSS — ¿Sin hardcoded números (#0c0d0e, text-[13px])?
`;

export default {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  ComponentTemplates,
  Examples,
  CHECKLIST,
};
