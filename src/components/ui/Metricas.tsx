/*client/src/components/ui/Metricas.tsx*/

'use client';

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type Metrica = {
  valor: string;
  etiqueta: string;
};

type Props = {
  data: Metrica[];
  variant?: "inline" | "cards" | "grid";
  vista?: "mobile" | "desktop";
  estilo?: "minimalista" | "corporativo" | "tradicional" | "moderno" | "industrial";
  color?: string;
};

const stylePresets = {
  minimalista: {
    container: "bg-transparent border-zinc-200/60",
    containerShadow: "shadow-none",
    divider: "border-zinc-200/60",
    card: "bg-white border-zinc-200/60",
    cardShadow: "shadow-none hover:shadow-md",
    label: "text-zinc-500 tracking-[0.3em] font-medium",
    cardGlow: "opacity-0",
    bubble: "opacity-0",
    gridAccent: "opacity-60",
    inlineAccent: "opacity-80",
  },
  corporativo: {
    container: "bg-white/95 border-slate-200/80",
    containerShadow: "shadow-sm",
    divider: "border-slate-200/70",
    card: "bg-white border-slate-200/80",
    cardShadow: "shadow-[0_18px_40px_-30px_rgba(15,23,42,0.6)] hover:shadow-xl",
    label: "text-slate-600 tracking-[0.25em] font-semibold",
    cardGlow: "opacity-0 group-hover:opacity-100",
    bubble: "opacity-10",
    gridAccent: "opacity-90",
    inlineAccent: "opacity-100",
  },
  tradicional: {
    container: "bg-stone-50 border-stone-200",
    containerShadow: "shadow-sm",
    divider: "border-stone-200/80",
    card: "bg-stone-50 border-stone-200",
    cardShadow: "shadow-[0_16px_34px_-26px_rgba(41,37,36,0.45)] hover:shadow-lg",
    label: "text-stone-600 tracking-[0.2em] font-semibold",
    cardGlow: "opacity-0",
    bubble: "opacity-0",
    gridAccent: "opacity-80",
    inlineAccent: "opacity-90",
  },
  industrial: {
    container: "bg-gradient-to-br from-stone-50 via-zinc-50 to-stone-100 border-stone-300/80 ",
    containerShadow: "shadow-sm ",
    divider: "border-stone-300/70 ",
    card: "bg-gradient-to-br from-zinc-50 to-stone-100 border-stone-300/80 ",
    cardShadow: "shadow-[0_18px_40px_-30px_rgba(41,37,36,0.55)] hover:shadow-xl ",
    label: "text-stone-600 tracking-[0.3em] font-semibold ",
    cardGlow: "opacity-0 group-hover:opacity-100 ",
    bubble: "opacity-10 ",
    gridAccent: "opacity-100 ",
    inlineAccent: "opacity-100 ",
  },
  moderno: {
    container: "bg-white/80 border-zinc-200/80 backdrop-blur-sm",
    containerShadow: "shadow-sm",
    divider: "border-zinc-200/70",
    card: "bg-gradient-to-b from-white to-zinc-50 border-zinc-200/80",
    cardShadow: "shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] hover:shadow-2xl",
    label: "text-zinc-500 tracking-[0.35em] font-bold",
    cardGlow: "opacity-0 group-hover:opacity-100",
    bubble: "opacity-10",
    gridAccent: "opacity-100",
    inlineAccent: "opacity-100",
  },
} as const;

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return reduced;
};

export default function Metricas({
  data,
  variant = "cards",
  vista = "desktop",
  estilo = "moderno",
  color = "#0be416"
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>([]);
  const reducedMotion = usePrefersReducedMotion();
  const preset = stylePresets[estilo];

  useEffect(() => {
    setVisible(new Array(data.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = metricRefs.current.findIndex(el => el === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisible(prev => {
              const copy = [...prev];
              copy[index] = true;
              return copy;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    metricRefs.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, [data.length, variant]);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-metrica-item]");

      items.forEach((item, index) => {
        const direction = index % 2 === 0 ? -70 : 70;

        gsap.fromTo(
          item,
          { autoAlpha: 0, x: direction, y: 18, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [data.length, reducedMotion, variant, estilo]);

  /* ---------- contador animado ---------- */
  const Counter = ({ value, active }: { value: string; active: boolean }) => {
    const number = parseInt(value.replace(/\D/g, "")) || 0;
    const suffix = value.replace(/[0-9]/g, "");
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!active) return;
      if (reducedMotion) {
        setCount(number);
        return;
      }

      let rafId = 0;
      const duration = 1200;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * number));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);

      return () => cancelAnimationFrame(rafId);
    }, [active, number, reducedMotion]);

    return <>{count}{suffix}</>;
  };

  if (!data || data.length === 0) return null;

  const valueClass =
    estilo === "minimalista"
      ? `${vista === "mobile" ? "text-2xl" : "text-3xl"} font-semibold tracking-tight`
      : `${vista === "mobile" ? "text-3xl" : "text-4xl lg:text-5xl"} font-black tracking-tight`;

  const labelClass =
    `${vista === "mobile" ? "text-[11px]" : "text-xs"} uppercase ${preset.label}`;

  /* ---------- INLINE ---------- */
  if (variant === "inline") {
    return (
      <div
        ref={sectionRef}
        className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 rounded-2xl border  ${preset.container} ${preset.containerShadow}`}
      >
        {data.map((m, i) => (
          <div
            key={i}
            data-metrica-item
            className={[
              "relative px-6 py-6 lg:py-8",
              preset.divider,
              i > 0 ? "border-t" : "",
              i === 1 ? "md:border-t-0" : "",
              i >= 2 ? "md:border-t" : "",
              i % 2 === 1 ? "md:border-l" : "",
              i < 3 ? "lg:border-t-0" : "",
              i >= 3 ? "lg:border-t" : "",
              i % 3 === 0 ? "lg:border-l-0" : "lg:border-l",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div
              className={`absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 rounded-full md:left-6 md:translate-x-0 ${preset.inlineAccent}`}
              style={{ backgroundColor: color }}
              aria-hidden
            />

            <div className="flex flex-col gap-2 items-center md:items-start">
              <div
                ref={(el) => { metricRefs.current[i] = el; }}
                className={`${valueClass} leading-none text-center md:text-left`}
                style={{ color }}
              >
                <Counter value={m.valor} active={visible[i]} />
              </div>
              <div className={`${labelClass} text-center md:text-left`}>
                {m.etiqueta}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ---------- CARDS ---------- */
  if (variant === "cards") {
    return (
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-8"
      >
        {data.map((m, i) => (
          <div
            key={i}
            data-metrica-item
            className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${preset.card} ${preset.cardShadow}`}
          >
            <div
              className="absolute left-0 top-0 h-1 w-full"
              style={{ backgroundColor: color }}
              aria-hidden
            />
            <div
              className={`absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl ${preset.bubble}`}
              style={{ backgroundColor: color }}
              aria-hidden
            />

            <div className="relative p-6 md:p-6 lg:p-8 text-center md:text-left">
              <div className={`${labelClass}`}>{m.etiqueta}</div>
              <div
                ref={(el) => { metricRefs.current[i] = el; }}
                className={`${valueClass} mt-4 leading-none`}
                style={{ color }}
              >
                <Counter value={m.valor} active={visible[i]} />
              </div>

              <div className="mt-6 h-px bg-zinc-200/70" />
            </div>

            <div
              className={`absolute inset-0 pointer-events-none bg-gradient-to-br from-white/0 via-white/0 to-white/60 transition-opacity duration-500 ${preset.cardGlow}`}
            />
          </div>
        ))}
      </div>
    );
  }

  /* ---------- GRID ---------- */
  return (
    <div
      ref={sectionRef}
      className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 min-h-[20vh]  bg-white/10 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-8 relative top-0 left-0 right-0 z-[100] transition-all duration-300">
          {data.map((m, i) => (
            <div
              key={i}
              data-metrica-item
              className="relative pl-0 md:pl-4 text-center md:text-left mt-10"
            >
          {/**lineas horizontales 
          <div
            className={`absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 rounded-full md:left-0 md:top-2 md:h-10 md:w-1 md:translate-x-0 ${preset.gridAccent}`}
            style={{ backgroundColor: color }}
            aria-hidden
          />*/}
              <div
                ref={(el) => { metricRefs.current[i] = el; }}
                className={`${valueClass} mb-2 transition-transform hover:-translate-y-0.5`}
                style={{ color }}
              >
                <Counter value={m.valor} active={visible[i]} />
              </div>

              <div className={labelClass}>{m.etiqueta}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
