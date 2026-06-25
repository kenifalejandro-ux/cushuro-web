/* client/src/components/ui/MiningStats.tsx */

"use client";

import type { Icon } from "@phosphor-icons/react";
import { 
  Factory,        // Horno/Planta
  UsersThree,          // Empleados
  MapPin,         // Ubicación/Operaciones
  Truck,          // Transporte
  ShieldCheck,    // Seguridad
  Package        // Producto
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import SwipeHint from "./SwipeHint";

interface Stat {
  id: string;
  icon: Icon;
  value: number;
  label: string;
  suffix?: string;
  subtext: string;
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const increment = end / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function MiningStats() {
  const statsScrollRef = useRef<HTMLDivElement>(null);
  // En mobile el fondo es oscuro (max-md:bg-stone-900), así que el marcador
  // debe ser `dark-image` para que el header use el menú en tema claro.
  const isMobile = useMediaQuery("(max-width: 767px)");
  const copy = useLocalizedContent({
    es: {
      eyebrow: "OPERACION Y CAPACIDAD",
      description: "Indicadores clave de producción, personal, seguridad y cobertura operativa.",
      stats: [
        { id: "produccion_diaria", icon: Factory, value: 900, suffix: " TM", label: "PRODUCCIÓN DIARIA", subtext: "Capacidad de óxido de calcio" },
        { id: "hornos", icon: Package, value: 10, label: "HORNOS OPERATIVOS", subtext: "Capacidad instalada total" },
        { id: "empleados_max", icon: UsersThree, value: 90, suffix: "+", label: "PERSONAL EN OPERACIÓN", subtext: "Máximo de trabajadores rotativos" },
        { id: "ubicacion", icon: MapPin, value: 2, suffix: "", label: "CENTRO DE PRODUCCIÓN", subtext: "Caserío Rodeopampa - Marcabal y Bambamarca - Cajamarca" },
        { id: "seguridad_foco", icon: ShieldCheck, value: 100, suffix: "%", label: "COMPROMISO SEGURIDAD", subtext: "Deber ético y moral" },
        { id: "clientes_mercado", icon: Truck, value: 2, suffix: "+", label: "SECTORES DE MERCADO", subtext: "Minero y Azucarero abastecidos" },
      ] satisfies Stat[],
    },
    en: {
      eyebrow: "OPERATIONS AND CAPACITY",
      description: "Key indicators for production, workforce, safety, and operational coverage.",
      stats: [
        { id: "produccion_diaria", icon: Factory, value: 900, suffix: " TM", label: "DAILY OUTPUT", subtext: "Calcium oxide capacity" },
        { id: "hornos", icon: Package, value: 10, label: "OPERATING KILNS", subtext: "Total installed capacity" },
        { id: "empleados_max", icon: UsersThree, value: 90, suffix: "+", label: "ACTIVE WORKFORCE", subtext: "Maximum rotating workers" },
        { id: "ubicacion", icon: MapPin, value: 2, suffix: "", label: "PRODUCTION HUBS", subtext: "Rodeopampa - Marcabal hamlet and Bambamarca - Cajamarca" },
        { id: "seguridad_foco", icon: ShieldCheck, value: 100, suffix: "%", label: "SAFETY COMMITMENT", subtext: "Ethical and moral duty" },
        { id: "clientes_mercado", icon: Truck, value: 2, suffix: "+", label: "MARKET SECTORS", subtext: "Mining and sugar sectors supplied" },
      ] satisfies Stat[],
    },
  });

  return (
    <section className={`${isMobile ? "dark-image" : "light-image"} relative  overflow-hidden bg-stone-100 py-24 text-zinc-800 max-md:bg-stone-900`}>
      <div
        className="absolute  inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(rgba(39,39,42,0.45) 0.6px, transparent 0.6px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-black" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 border-l-4 border-emerald-700 pl-6">
          <div className="mb-2 flex items-center gap-4 font-mono text-xs tracking-widest text-emerald-700">
            <span>{`● ${copy.eyebrow}`}</span>
            <span className="text-stone-600">RUC: 20482610944</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-zinc-950 md:text-5xl">
             <span className="text-emerald-600">Santa Isabel de Cushuro S.A.C</span>
          </h2>
          <p className="text-base leading-7 text-stone-600 md:text-xl md:leading-8">
            {copy.description}
          </p>
        </div>

        <div className="dark-image overflow-hidden max-w-none   bg-stone-900">
          <div ref={statsScrollRef} className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3 max-md:overflow-x-auto max-md:p-3">
          {copy.stats.map((stat, idx) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden border border-white/5 bg-white/[0.015] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-300 hover:bg-white/[0.03] sm:p-7 lg:p-10 max-md:flex max-md:min-h-[300px] max-md:w-[78vw] max-md:max-w-[320px] max-md:shrink-0 max-md:snap-center max-md:flex-col max-md:rounded-2xl max-md:p-6"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-emerald-500/60 via-stone-400/35 to-transparent sm:inset-x-7 lg:inset-x-10" />
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-600/30 group-hover:border-emerald-600" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-600/30 group-hover:border-emerald-600" />

              <div className="flex flex-col gap-3 sm:gap-4 max-md:flex-1 max-md:justify-between">
                <div className="flex min-w-0 items-center justify-between gap-2">
                  <stat.icon className="h-6 w-6 shrink-0 text-emerald-400 opacity-90 transition-opacity group-hover:opacity-100 sm:h-8 sm:w-8" />
                  <span className="min-w-0 truncate text-[9px] font-mono text-stone-400 group-hover:text-emerald-400 sm:text-[10px]">ID_STAT_{stat.id}</span>
                </div>

                <div>
                  <div className="text-3xl font-black font-mono tracking-tighter text-stone-50 sm:text-4xl lg:text-5xl">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="mt-1 text-xs font-bold uppercase leading-tight tracking-wider text-stone-300 sm:text-sm sm:tracking-widest">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-[11px] font-medium leading-snug text-stone-400 sm:text-xs sm:leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        <SwipeHint targetRef={statsScrollRef} until="md" tone="dark" />
      </div>
    </section>
  );
}
