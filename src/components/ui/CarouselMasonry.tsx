import { gsap } from "gsap";
import { useEffect, useRef } from "react";

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
    name: "CONSORCIO MINERO HORIZONTE",
    desc: "Operación de clase mundial con reservas superiores a 3 Moz.",
    mineral: "Au",
    zone: "Pataz, PE",
    front: "Veta Carolina",
    status: "Activo",
    refCode: "M-047",
    depth: "900 m",
    production: "22,000 oz/año",
  },
  {
    name: "MINERA AURÍFERA RETAMAS",
    desc: "Extracción subterránea con recuperación metalúrgica del 92%.",
    mineral: "Au / Cu",
    zone: "Pataz, PE",
    front: "Nivel 3200",
    status: "Activo",
    refCode: "M-058",
    depth: "740 m",
    production: "18,500 oz/año",
  },
  {
    name: "MINERA LA ARENA",
    desc: "Proyecto de lixiviación en pilas con procesamiento continuo.",
    mineral: "Au / Cu",
    zone: "Trujillo, PE",
    front: "Pad Norte",
    status: "Activo",
    refCode: "M-063",
    depth: "210 m",
    production: "9,800 oz/año",
  },
  {
    name: "CIA. MINERA PODEROSA",
    desc: "Minería subterránea artesanal formal en el corredor de Pataz.",
    mineral: "Au",
    zone: "Pataz, PE",
    front: "Zona Papagayo",
    status: "Activo",
    refCode: "M-072",
    depth: "820 m",
    production: "14,300 oz/año",
  },
  {
    name: "BARRICK LAGUNAS NORTE",
    desc: "Tajo abierto de gran escala en el flanco occidental andino.",
    mineral: "Au / Ag",
    zone: "Alto Chicama, PE",
    front: "Fase IV",
    status: "Suspendido",
    refCode: "M-084",
    depth: "560 m",
    production: "— en pausa —",
  },
];

const MINERAL_MAP: Record<string, { accent: string; glow: string; bar: string }> = {
  Au: { accent: "#0004ff", glow: "rgba(201,151,58,0.2)", bar: "rgba(201,151,58,0.15)" },
  Ag: { accent: "#0004ff", glow: "rgba(142,166,191,0.18)", bar: "rgba(142,166,191,0.12)" },
  Pb: { accent: "#0004ff", glow: "rgba(122,158,192,0.18)", bar: "rgba(122,158,192,0.12)" },
  Zn: { accent: "#0004ff", glow: "rgba(95,168,138,0.18)", bar: "rgba(95,168,138,0.12)" },
  Cu: { accent: "#0004ff", glow: "rgba(184,113,74,0.18)", bar: "rgba(184,113,74,0.12)" },
};

const STATUS_MAP: Record<string, { color: string; label: string }> = {
  activo: { color: "#4ADE80", label: "ACTIVO" },
  logística: { color: "#FBBF24", label: "LOGÍSTICA" },
  logistica: { color: "#FBBF24", label: "LOGÍSTICA" },
  suspendido: { color: "#FBBF24", label: "LOGÍSTICA" },
};

function getMineralStyle(mineral: string) {
  const key = mineral.split("/")[0].trim();
  return MINERAL_MAP[key] ?? { accent: "#5A5A5A", glow: "rgba(90,90,90,0.14)", bar: "rgba(90,90,90,0.08)" };
}

function getStatusStyle(status: string) {
  return STATUS_MAP[status.toLowerCase()] ?? { color: "#9CA3AF", label: status.toUpperCase() };
}

function getPrimarySymbol(mineral: string) {
  return mineral.split("/")[0].trim();
}

// ──────────────────────────────────────
// Single infinite track
// ──────────────────────────────────────
function InfiniteTrack({
  items,
  direction,
  speed = 60,
}: {
  items: MiningProject[];
  direction: "left" | "right";
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  // triple-duplicate for seamless loop
  const repeated = [...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const build = () => {
      const els = Array.from(track.children) as HTMLElement[];
      if (!els.length) return;
      const chunk = Math.floor(els.length / 3);
      const dist = els.slice(0, chunk).reduce((s, el) => s + el.getBoundingClientRect().width + 20, 0);
      if (!dist) return;
      tweenRef.current?.kill();
      // right-moving row starts at -dist so it scrolls towards 0
      if (direction === "right") {
        gsap.set(track, { x: -dist });
        tweenRef.current = gsap.to(track, { x: 0, duration: speed, ease: "none", repeat: -1 });
      } else {
        gsap.set(track, { x: 0 });
        tweenRef.current = gsap.to(track, { x: -dist, duration: speed, ease: "none", repeat: -1 });
      }
    };

    const ro = new ResizeObserver(build);
    ro.observe(track);
    build();

    const pause = () => tweenRef.current?.pause();
    const resume = () => tweenRef.current?.play();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      tweenRef.current?.kill();
      ro.disconnect();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, [items, direction, speed]);

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "20px", padding: "4px 20px", width: "max-content", willChange: "transform" }}
      >
        {repeated.map((project, index) => (
          <ProjectCard key={`${project.refCode}-${direction}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────
// Project card
// ──────────────────────────────────────
function ProjectCard({ project }: { project: MiningProject }) {
  const ms = getMineralStyle(project.mineral);
  const ss = getStatusStyle(project.status);
  const symbol = getPrimarySymbol(project.mineral);

  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLSpanElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  const enter = () => {
    if (glowRef.current) glowRef.current.style.opacity = "1";
    if (symbolRef.current) symbolRef.current.style.opacity = "0.10";
    if (cardRef.current) cardRef.current.style.borderColor = `${ms.accent}55`;
    if (sweepRef.current) { sweepRef.current.style.transition = "width 0.65s ease"; sweepRef.current.style.width = "100%"; }
  };
  const leave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
    if (symbolRef.current) symbolRef.current.style.opacity = "0.035";
    if (cardRef.current) cardRef.current.style.borderColor = "#1E1E1E";
    if (sweepRef.current) { sweepRef.current.style.transition = "width 0.35s ease"; sweepRef.current.style.width = "0%"; }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        position: "relative",
        flexShrink: 0,
        width: "420px",
        backgroundColor: "#0c0c0c",
        border: "1px solid #1E1E1E",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color 0.4s ease",
      }}
    >
      {/* Left mineral accent strip */}
      <div style={{ position: "absolute", left: 0, top: 0, width: "3px", height: "100%", backgroundColor: ms.accent, opacity: 0.6 }} />

      {/* Glow from left */}
      <div
        ref={glowRef}
        style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at -5% 50%, ${ms.glow} 0%, transparent 60%)`,
          opacity: 0, transition: "opacity 0.5s ease", pointerEvents: "none",
        }}
      />

      {/* Mineral watermark */}
      <div style={{ position: "absolute", right: "-8px", bottom: "-14px", pointerEvents: "none", lineHeight: 1 }}>
        <span
          ref={symbolRef}
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "180px",
            color: ms.accent,
            opacity: 0.035,
            letterSpacing: "-6px",
            transition: "opacity 0.5s ease",
            userSelect: "none",
          }}
        >
          {symbol}
        </span>
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "26px 30px 24px 36px" }}>

        {/* Top: ref + status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.28em", color: "#ffffff" }}>
            {project.refCode}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: ss.color, boxShadow: `0 0 7px ${ss.color}` }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", letterSpacing: "0.22em", color: ss.color }}>
              {ss.label}
            </span>
          </div>
        </div>

        {/* Company name */}
        <h3 style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "20px",
          fontWeight: 600,
          color: "#ffffff",
          lineHeight: 1.15,
          letterSpacing: "0.03em",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}>
          {project.name}
        </h3>

        {/* Mineral highlight bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: ms.bar,
          borderLeft: `2px solid ${ms.accent}`,
          padding: "10px 14px",
          marginBottom: "18px",
        }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "7px", letterSpacing: "0.25em", color: "#51ff00", marginBottom: "4px" }}>
              MINERAL
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "16px", fontWeight: 500, color: ms.accent, letterSpacing: "0.1em" }}>
              {project.mineral}
            </div>
          </div>
          {project.production && (
            <>
              <div style={{ width: "1px", height: "32px", backgroundColor: "#51ff00" }} />
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "7px", letterSpacing: "0.25em", color: "#51ff00", marginBottom: "4px" }}>
                  PRODUCCIÓN
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#51ff00", letterSpacing: "0.06em" }}>
                  {project.production}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Data row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "18px" }}>
          {[
            { label: "ZONA", value: project.zone.split(",")[0] },
            { label: "FRENTE", value: project.front },
            { label: "PROF.", value: project.depth ?? "—" },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "7px", letterSpacing: "0.22em", color: "#51ff00", marginBottom: "5px" }}>
                {label}
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#ffffff", letterSpacing: "0.06em" }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div style={{ height: "1px", backgroundColor: "#51ff00", marginBottom: "14px" }} />

        {/* Description */}
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "9px",
          lineHeight: 1.85,
          letterSpacing: "0.04em",
          color: "#ffffff",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}>
          {project.desc}
        </p>
      </div>

      {/* Bottom sweep */}
      <div ref={sweepRef} style={{ position: "absolute", bottom: 0, left: 0, height: "1px", width: "0%", backgroundColor: ms.accent, opacity: 0.5 }} />
    </div>
  );
}

// ──────────────────────────────────────
// Main export
// ──────────────────────────────────────
export default function CarouselMasonry({
  projects,
  headingEyebrow = "Portfolio",
  headingTitle = "Nuestros Clientes",
  headingDescription = "Proyectos mineros activos — zona norte del Perú",
  className = "",
}: CarouselMasonryProps) {
  const items = projects?.length ? projects : DEFAULT_PROJECTS;

  const row1 = items;

  return (
    <section
      className={className}
      style={{ backgroundColor: "#fcf8f8", padding: "88px 0 100px", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient gold top glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "2px", backgroundColor: "#1ec009", opacity: 0.25,
        filter: "blur(8px)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 48px 64px" }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <div style={{ width: "40px", height: "1px", backgroundColor: "#1ec009" }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.34em", color: "#1ec009", textTransform: "uppercase" }}>
            {headingEyebrow}
          </span>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#1ec009", opacity: 0.3 }} />
        </div>

        {/* Title + count */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <h2 style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "clamp(44px, 5.5vw, 72px)",
            fontWeight: 600,
            color: "#1d1d1d",
            lineHeight: 1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}>
            {headingTitle}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "32px", fontWeight: 300, color: "#1ec009", lineHeight: 1 }}>
              {String(items.length).padStart(2, "0")}
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.25em", color: "#282828", textTransform: "uppercase" }}>
              operaciones
            </span>
          </div>
        </div>

        {/* Subtitle + rule */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "16px" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", color: "#2E2E2E", textTransform: "uppercase", margin: 0 }}>
            {headingDescription}
          </p>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#161616" }} />
        </div>
      </div>

      {/* ── Row única: left → right scroll ── */}
      <div style={{ position: "relative" }}>
        {/* Fade masks */}
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "160px", background: "linear-gradient(to right, #080808, transparent)", zIndex: 10, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "160px", background: "linear-gradient(to left, #080808, transparent)", zIndex: 10, pointerEvents: "none" }} />
        <InfiniteTrack items={row1} direction="right" speed={95} />
      </div>
    </section>
  );
}
