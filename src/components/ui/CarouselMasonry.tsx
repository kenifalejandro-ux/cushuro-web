/* client/src/components/ui/CarouselMasonry.tsx */
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

interface MiningProject {
  name: string;
  desc: string;
  mineral: string;
  zone: string;
  front: string;
  status: string;
  refCode: string;
  depth?: string;
  production?: string;
}

interface CarouselMasonryProps {
  projects?: MiningProject[];
  headingEyebrow?: string;
  headingTitle?: string;
  headingDescription?: string;
  className?: string;
}

const DEFAULT_PROJECTS: MiningProject[] = [
  {
    name: "MINERA BORRO MISQUICHILCA",
    desc: "Extracción aurífera en tajo abierto con alta ley de mineral.",
    mineral: "Au / Ag",
    zone: "La Libertad, PE",
    front: "Tajo Norte",
    status: "Activo",
    refCode: "M-011",
    depth: "480 m",
    production: "12,400 oz/año",
  },
  {
    name: "SUMMA GOLD CORPORATION",
    desc: "Corredor aurífero de Huamachuco con reservas probadas.",
    mineral: "Au",
    zone: "Huamachuco, PE",
    front: "Zona Central",
    status: "Activo",
    refCode: "M-024",
    depth: "320 m",
    production: "8,200 oz/año",
  },
  {
    name: "COMPAÑÍA MINERA QUIRUVILCA",
    desc: "Operaciones polimetálicas con planta de flotación integrada.",
    mineral: "Pb / Zn / Ag",
    zone: "Santiago de Chuco, PE",
    front: "Planta Sur",
    status: "Logística",
    refCode: "M-031",
    depth: "650 m",
    production: "3,100 t/mes",
  },
  
  {
    name: "BARRICK LAGUNAS NORTE",
    desc: "Tajo abierto de gran escala en el flanco occidental andino.",
    mineral: "Au / Ag",
    zone: "Alto Chicama, PE",
    front: "Fase IV",
    status: "Logística",
    refCode: "M-084",
    depth: "560 m",
    production: "— en pausa —",
  },
];

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

function statusColor(status: string) {
  return status.toLowerCase().startsWith("activo") ? "#34d399" : "#fbbf24";
}

function statusLabel(status: string) {
  return status.toLowerCase().startsWith("activo") ? "ACTIVO" : "LOGÍSTICA";
}

function primarySymbol(mineral: string) {
  return mineral.split("/")[0].trim();
}

// ──────────────────────────────────────────────────────────────
// Spotlight de operaciones: cliente destacado (badge hexagonal
// esmeralda + ficha de datos) que rota, con roster lateral.
// Lenguaje visual alineado a HexFeatureRow (azul profundo + esmeralda).
// ──────────────────────────────────────────────────────────────
export default function CarouselMasonry({
  projects,
  headingEyebrow = "Portfolio",
  headingTitle = "Nuestros Clientes",
  headingDescription = "Proyectos mineros activos — zona norte del Perú",
  className = "",
}: CarouselMasonryProps) {
  const items = projects?.length ? projects : DEFAULT_PROJECTS;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);

  // Rotación automática del cliente destacado
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  // Transición de entrada del panel destacado al cambiar de cliente
  useEffect(() => {
    const el = featuredRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-fade]"),
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.07 }
      );
    }, el);
    return () => ctx.revert();
  }, [active]);

  const current = items[active];
  const symbol = primarySymbol(current.mineral);

  const stats = [
    { label: "Mineral", value: current.mineral },
    { label: "Producción", value: current.production ?? "—" },
    { label: "Zona", value: current.zone },
    { label: "Frente", value: current.front },
    { label: "Profundidad", value: current.depth ?? "—" },
    { label: "Código", value: current.refCode },
  ];

  return (
    <section
      className={`relative dark-image w-full overflow-hidden bg-gradient-to-br from-[#1d3461] to-[#11375c] py-20 text-white md:py-28 ${className}`.trim()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Glow esmeralda superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]"
      />
      {/* Trama hexagonal sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 0l28 16v32L28 64 0 48V16z' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E\")",
          backgroundSize: "56px 100px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-emerald-400" />
              <span className="font-mono text-[11px] uppercase tracking-[0.34em] text-emerald-300">
                {headingEyebrow}
              </span>
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-white lg:text-6xl">
              {headingTitle}
            </h2>
            <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.12em] text-blue-100/70">
              {headingDescription}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="font-mono text-4xl font-light leading-none text-emerald-300">
              {String(items.length).padStart(2, "0")}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-blue-100/60">
              operaciones
            </span>
          </div>
        </div>

        {/* Cuerpo: destacado + roster */}
        <div className="grid min-w-0 items-stretch gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
          {/* Panel destacado */}
          <div
            ref={featuredRef}
            className="relative order-2 min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-8 lg:order-1 lg:p-12"
          >
            {/* Hexágono esmeralda con símbolo de mineral */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div
                data-fade
                className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center bg-gradient-to-br from-[#10b981] to-[#059669] shadow-2xl shadow-emerald-900/40 sm:h-24 sm:w-24"
                style={{ clipPath: HEX_CLIP }}
              >
                <span className="font-['Rajdhani',sans-serif] text-2xl font-bold leading-none text-white sm:text-4xl">
                  {symbol}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div data-fade className="mb-3 flex flex-wrap items-center gap-2.5">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: statusColor(current.status), boxShadow: `0 0 10px ${statusColor(current.status)}` }}
                  />
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: statusColor(current.status) }}
                  >
                    {statusLabel(current.status)}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-100/40">
                    · {current.refCode}
                  </span>
                </div>
                <h3
                  data-fade
                  className="font-['Rajdhani',sans-serif] text-xl font-bold uppercase leading-tight tracking-[0.01em] text-white [overflow-wrap:anywhere] sm:text-2xl lg:text-3xl"
                >
                  {current.name}
                </h3>
                <p data-fade className="mt-3 max-w-md text-sm leading-7 text-blue-100/80">
                  {current.desc}
                </p>
              </div>
            </div>

            {/* Ficha de datos */}
            <div
              data-fade
              className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-x-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-300/70">
                    {s.label}
                  </div>
                  <div className="font-mono text-sm text-white">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Roster de clientes */}
          <div className="order-1 flex min-w-0 flex-col lg:order-2">
            <div className="mb-3 hidden font-mono text-[10px] uppercase tracking-[0.24em] text-blue-100/40 lg:block">
              Roster de operaciones
            </div>
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
              {items.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.refCode}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group flex flex-shrink-0 items-center gap-3 border-l-2 px-4 py-3.5 text-left transition-all duration-300 lg:w-full lg:flex-shrink ${
                      isActive
                        ? "border-emerald-400 bg-white/[0.07]"
                        : "border-white/10 hover:border-white/40 hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] tracking-[0.18em] transition-colors ${
                        isActive ? "text-emerald-300" : "text-blue-100/40"
                      }`}
                    >
                      {p.refCode}
                    </span>
                    <span
                      className={`whitespace-nowrap text-sm font-medium transition-colors lg:whitespace-normal ${
                        isActive ? "text-white" : "text-blue-100/60 group-hover:text-blue-100/90"
                      }`}
                    >
                      {p.name}
                    </span>
                    <span
                      className="ml-auto hidden h-1.5 w-1.5 flex-shrink-0 rounded-full lg:inline-block"
                      style={{ backgroundColor: isActive ? statusColor(p.status) : "transparent" }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
