# 🎨 Design Tokens — Cushuro

Sistema unificado de diseño para minería e industria. Mantiene consistencia visual en todas las páginas.

---

## 📐 Colores

### Brand (Acento primario)
```tsx
// Verde minería — Acento industrial
bg-brand-accent        // #10b981 (verde principal)
bg-brand-accent-dark   // #059669 (hover/active)
bg-brand-accent-light  // #6ee7b7 (pastel/disabled)
text-brand-accent      // Para textos
```

### Neutral (Escala industrial)
```tsx
// Fondos y texto — Escala gris
bg-neutral-900  // #0c0d0e (casi negro, fondos muy oscuros)
bg-neutral-800  // #1a1a1a (fondos oscuros — ProductAdvantagesGrid)
bg-neutral-700  // #292929
bg-neutral-500  // #5a5a5a (texto secundario)
text-neutral-100 // #ececec (texto claro sobre oscuro)
text-neutral-200 // #d4d4d4 (texto secundario)
```

### Ore (Acento secundario — Naranja minería)
```tsx
bg-ore         // #d97706 (amber — líneas, acentos)
bg-ore-light   // #fbbf24 (hover state)
text-ore       // Para acentos
```

---

## 🔤 Tipografía

### Escalas de título
```tsx
// Página completa — Títulos hero
<h1 className="text-display-xl">Ventajas competitivas</h1>

// Secciones grandes
<h2 className="text-display-lg">Cal Viva</h2>

// Subsecciones
<h3 className="text-display-md">Producción continua</h3>

// Card titles
<h4 className="text-display-sm">Especificación técnica</h4>
```

### Escalas de cuerpo
```tsx
// Texto largo — descripción
<p className="text-body-lg">Descripción del producto...</p>

// Párrafo normal
<p className="text-body-md">Información general</p>

// Label/caption
<span className="text-body-sm">Código de serie</span>

// Muy pequeño (footer, hints)
<span className="text-body-xs">Obligatorio</span>
```

### Técnico (Monoespaciado — números, especificaciones)
```tsx
// Números grandes — panel de control
<span className="text-tech-lg">06</span>

// Especificaciones técnicas
<span className="text-tech-md">VTJ-01</span>

// Pequeño técnico
<span className="text-tech-sm">≥81% Cal Útil</span>
```

---

## 📏 Espaciado

### Basado en escala 4px
```tsx
/* De menor a mayor — siempre en múltiplos de 4 */
p-1    // 4px
p-2    // 8px
p-4    // 16px
p-6    // 24px
p-8    // 32px
p-12   // 48px
p-16   // 64px
p-20   // 80px
```

### Para secciones (padding vertical)
```tsx
py-section-sm   // 48px (sección pequeña)
py-section-md   // 64px (sección normal)
py-section-lg   // 96px (sección grande)
py-section-xl   // 128px (hero/principal)
```

### Gaps entre elementos
```tsx
gap-2    // 8px (inline elements)
gap-4    // 16px (normal grid/flex)
gap-6    // 24px (componentes separados)
gap-8    // 32px (bloques grandes)
```

---

## 🟦 Bordes

```tsx
rounded-md    // 8px (cards, buttons)
rounded-lg    // 16px (containers)
rounded-xl    // 24px (heroes, modals)
rounded-full   // Círculos
```

---

## 💫 Sombras

```tsx
/* Básico */
shadow-md          // Sutil
shadow-lg          // Normal
shadow-xl          // Fuerte

/* Industrial (Cushuro-specific) */
shadow-industrial       // 8px offset, 0.15 opacity
shadow-industrial-dark  // 12px offset, 0.25 opacity (emphasis)
```

---

## ⏱️ Transiciones

```tsx
/* Duración */
duration-fast   // 150ms (micro-interactions)
duration-base   // 300ms (default, most animations)
duration-slow   // 500ms (large movements)

/* Timing */
ease-smooth     // cubic-bezier(0.4, 0, 0.2, 1) — profesional

/* Ejemplo completo */
<button className="transition duration-base ease-smooth hover:bg-brand-accent-dark">
  Cotizar
</button>
```

---

## 📋 Ejemplo: Componente consistente

### ❌ Antes (inconsistente)
```tsx
<div className="bg-zinc-900 p-7 md:p-8">
  <span className="text-[13px] font-semibold">01</span>
  <p className="text-xl font-medium">Ventaja</p>
  <div className="mt-12 h-px bg-gradient-to-r..."></div>
</div>
```

### ✅ Después (con tokens)
```tsx
<div className="bg-neutral-800 p-4 md:p-6">
  <span className="text-tech-md text-brand-accent">01</span>
  <p className="text-display-sm">Ventaja</p>
  <div className="mt-8 h-px bg-gradient-to-r from-brand-accent..."></div>
</div>
```

---

## 🎯 Checklist para nuevos componentes

- [ ] ¿Usa colores del sistema (`brand-*`, `neutral-*`, `ore-*`)?
- [ ] ¿Tipografía de escala (`text-display-*`, `text-body-*`, `text-tech-*`)?
- [ ] ¿Espaciado en múltiplos de 4 (`p-4`, `p-6`, `gap-4`)?
- [ ] ¿Bordes consistentes (`rounded-md`, `rounded-lg`)?
- [ ] ¿Transiciones suave (`duration-base ease-smooth`)?

---

## 📚 Referencias

- **tailwind.config.js** — Definiciones técnicas
- **root.css** — Variables CSS legacy (mantener para compatibilidad)
- **Guía de marca** — Cushuro usa verde minería (#10b981) + neutral industrial
