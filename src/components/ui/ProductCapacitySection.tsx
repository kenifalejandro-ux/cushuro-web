/**client/src/components/ui/ProductCapacitySection.tsx */

/** Capacidad Operativa de Extracción — Rediseño industrial (alineado a MiningStats) */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Flame, Gauge, Users, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

export type ProductCapacityStat = {
  value: string | number;
  label: string;
  description: string;
  tone?: "primary" | "soft" | "muted";
};

export type ProductCapacityLocation = {
  title: string;
  description: string;
};

type ProductCapacitySectionProps = {
  title: string;
  stats: ProductCapacityStat[];
  locations?: ProductCapacityLocation[];
};

const defaultLocations: ProductCapacityLocation[] = [
  {
    title: "Ubicación de Planta Principal",
    description: "Caserío Rodeopampa – Marcabal – Huamachuco – La Libertad",
  },
  {
    title: "Ubicación de Planta Sucursal",
    description: "Bambamarca – Cajamarca",
  },
];

/* Acento por tono — verde industrial / esmeralda / mineral (ámbar) */
const toneStyles = {
  primary: { accent: "#10b981", glow: "rgba(6, 27, 217, 0.5)" },
  soft: { accent: "#34d399", glow: "rgba(6, 27, 217, 0.5)" },
  muted: { accent: "#34d399", glow: "rgba(6, 27, 217, 0.5)" },
} as const;

/* Iconografía por defecto (la sección recibe stats genéricos sin icono) */
const defaultIcons: LucideIcon[] = [Flame, Gauge, Users];

/* Separa "900" + " TM" para el lector tipo gauge */
function splitValue(raw: string | number) {
  const str = String(raw).trim();
  const match = str.match(/^([\d.,]+)(.*)$/);
  if (!match) return { num: null as number | null, prefix: "", suffix: str };
  const numeric = Number(match[1].replace(/,/g, ""));
  return {
    num: Number.isFinite(numeric) ? numeric : null,
    prefix: match[1],
    suffix: match[2].trim(),
  };
}

function CountUp({ end, fallback }: { end: number | null; fallback: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(node);

    // Respaldo: si ya está visible (above-the-fold) o el IO no dispara, arranca igual.
    const rect = node.getBoundingClientRect();
    if (rect.top < (window.innerHeight || 800)) setStarted(true);
    const fallback = window.setTimeout(() => setStarted(true), 600);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!started || end === null) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end]);

  return <span ref={ref}>{end === null ? fallback : count}</span>;
}

export default function ProductCapacitySection({
  title,
  stats,
  locations = defaultLocations,
}: ProductCapacitySectionProps) {
  const copy = useLocalizedContent({
    es: {
      eyebrow: "CAPACIDAD OPERATIVA",
      ruc: "RUC 20482610944",
      manifest: "REGISTRO DE PLANTA · 2026",
      strategicLocations: "UBICACIONES ESTRATÉGICAS",
      presence: "Presencia operativa",
      coords: "LAT/LONG VERIFICADO",
      defaultLocations,
    },
    en: {
      eyebrow: "OPERATIONAL CAPACITY",
      ruc: "RUC 20482610944",
      manifest: "PLANT REGISTRY · 2026",
      strategicLocations: "STRATEGIC LOCATIONS",
      presence: "Operational presence",
      coords: "LAT/LONG VERIFIED",
      defaultLocations: [
        {
          title: "Main Plant Location",
          description: "Caserío Rodeopampa – Marcabal – Huamachuco – La Libertad",
        },
        {
          title: "Branch Plant Location",
          description: "Bambamarca – Cajamarca",
        },
      ],
    },
  });

  const sectionRef = useRef<HTMLElement>(null);
  const resolvedLocations =
    locations === defaultLocations ? copy.defaultLocations : locations;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gsap.utils.toArray<HTMLElement>(".capacity-stat-card"),
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        }
      );
      gsap.fromTo(
        gsap.utils.toArray<HTMLElement>(".capacity-location-card"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [resolvedLocations, stats]);

  return (
    <section
      ref={sectionRef}
      className="dark-image relative overflow-hidden bg-stone-100 py-section-md text-zinc-800 md:py-section-lg"
    >
      {/* Textura de planta — retícula de puntos */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(39,39,42,0.5) 0.6px, transparent 0.6px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-600/55 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">
        {/* Encabezado — bloque técnico con borde de acento */}
        <div className="mb-12 border-l-4 border-emerald-700 pl-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[11px] tracking-[0.22em] text-emerald-700">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
              {copy.eyebrow}
            </span>
            <span className="text-stone-500">{copy.manifest}</span>
            <span className="ml-auto text-stone-500">{copy.ruc}</span>
          </div>
          <h2 className="text-display-md tracking-tight text-zinc-950 md:text-display-lg">
            {title}
          </h2>
        </div>

        {/* Panel industrial oscuro — celdas de lectura */}
        <div className="overflow-hidden rounded-2xl border border-stone-300 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_32%),linear-gradient(180deg,#171717_0%,#222020_58%,#2b2725_100%)] shadow-[0_28px_60px_-34px_rgba(24,24,27,0.55)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map(({ value, label, description, tone = "primary" }, index) => {
              const style = toneStyles[tone];
              const Icon = defaultIcons[index % defaultIcons.length];
              const { num, suffix } = splitValue(value);
              const id = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={`${label}-${index}`}
                  className="capacity-stat-card group relative overflow-hidden border-b border-white/[0.06] p-8 transition-colors duration-base last:border-b-0 md:border-b-0 md:border-r md:border-white/[0.06] md:p-10 md:last:border-r-0"
                >
                  {/* Hairline de acento + brackets de registro */}
                  <span
                    className="absolute inset-x-8 top-0 h-px md:inset-x-10"
                    style={{
                      background: `linear-gradient(90deg, ${style.accent}, rgba(255,255,255,0) 80%)`,
                    }}
                  />
                  <span
                    className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t opacity-40 transition-opacity group-hover:opacity-100"
                    style={{ borderColor: style.accent }}
                  />
                  <span
                    className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r opacity-40 transition-opacity group-hover:opacity-100"
                    style={{ borderColor: style.accent }}
                  />
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl transition-opacity duration-base group-hover:opacity-80"
                    style={{ background: style.glow, opacity: 0.35 }}
                  />

                  <div className="relative flex items-center justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.04]"
                      style={{ color: style.accent }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-stone-500 transition-colors group-hover:text-stone-300">
                      CAP_{id}
                    </span>
                  </div>

                  <div className="relative mt-7 flex items-end gap-2">
                    <span className="font-mono text-[3.4rem] font-bold leading-none tracking-[-0.05em] text-stone-50 [font-variant-numeric:tabular-nums]">
                      <CountUp end={num} fallback={String(value)} />
                    </span>
                    {suffix ? (
                      <span
                        className="mb-1.5 font-mono text-sm font-semibold tracking-wide"
                        style={{ color: style.accent }}
                      >
                        {suffix}
                      </span>
                    ) : null}
                  </div>

                  {/* Regla de ticks — textura de gauge */}
                  <div className="relative mt-4 flex h-3 items-end gap-[3px]" aria-hidden>
                    {Array.from({ length: 22 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-px"
                        style={{
                          height: i % 5 === 0 ? "12px" : "7px",
                          background:
                            i % 5 === 0 ? style.accent : "rgba(255,255,255,0.18)",
                        }}
                      />
                    ))}
                  </div>

                  <h3 className="mt-5 text-tech-sm uppercase text-stone-200">
                    {label}
                  </h3>f
                  <p className="mt-1.5 text-body-sm leading-relaxed text-stone-400">
                    {description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Tira de ubicaciones — manifiesto inferior */}
          {resolvedLocations.length ? (
            <div className="border-t border-white/[0.07] bg-black/20 px-8 py-7 md:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    <MapPin size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-emerald-400">
                      {copy.strategicLocations}
                    </p>
                    <p className="mt-1 text-body-sm font-semibold text-stone-200">
                      {copy.presence}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:min-w-[58%]">
                  {resolvedLocations.map(({ title: locTitle, description }, index) => (
                    <div
                      key={`${locTitle}-${index}`}
                      className="capacity-location-card group relative rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-emerald-500/30"
                    >
                      <span className="pointer-events-none absolute left-2 top-2 h-2 w-2 border-l border-t border-emerald-500/25 transition-colors group-hover:border-emerald-500/70" />
                      <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-emerald-500/25 transition-colors group-hover:border-emerald-500/70" />
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="text-tech-sm uppercase text-stone-200">
                          {locTitle}
                        </h4>
                        <span className="font-mono text-[9px] tracking-[0.16em] text-stone-500">
                          {copy.coords}
                        </span>
                      </div>
                      <p className="text-body-sm leading-relaxed text-stone-400">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}