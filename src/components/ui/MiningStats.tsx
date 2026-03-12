/* client/src/components/ui/MiningStats.tsx */

"use client";

import type { LucideIcon } from "lucide-react";
import { 
  Factory,        // Horno/Planta
  Users,          // Empleados
  MapPin,         // Ubicación/Operaciones
  Truck,          // Transporte
  ShieldCheck,    // Seguridad
  Package        // Producto
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface Stat {
  id: string;
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
  subtext: string;
}

// Datos extraídos del PDF proporcionado
const STATS: Stat[] = [
  { id: "produccion_diaria", icon: Factory, value: 176, suffix: " TM", label: "PRODUCCIÓN DIARIA", subtext: "Capacidad de óxido de calcio" },
  { id: "hornos", icon: Package, value: 5, label: "HORNOS OPERATIVOS", subtext: "Capacidad instalada total" },
  { id: "empleados_max", icon: Users, value: 90, suffix: "+", label: "PERSONAL EN OPERACIÓN", subtext: "Máximo de trabajadores rotativos" },
  { id: "ubicacion", icon: MapPin, value: 2, suffix: "", label: "CENTRO DE PRODUCCIÓN", subtext: "Caserío Rodeopampa - Marcabal y Bambamarca - Cajamarca" },
  { id: "seguridad_foco", icon: ShieldCheck, value: 100, suffix: "%", label: "COMPROMISO SEGURIDAD", subtext: "Deber ético y moral" },
  { id: "clientes_mercado", icon: Truck, value: 2, suffix: "+", label: "SECTORES DE MERCADO", subtext: "Minero y Azucarero abastecidos" },
];

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
  return (
    // Usamos bg-blue-900 o similar para el fondo principal, manteniendo la paleta.
    <section className="relative py-24 bg-zinc-100 text-zinc-700 overflow-hidden">
      
      {/* Background Decor: Blueprint Grid sutil en color blanco/gris claro */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} 
      />
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="border-l-4 border-emerald-600 pl-6 mb-20">
          <div className="flex items-center gap-4 mb-2 text-emerald-600 font-mono text-xs tracking-widest">
            <span className="animate-pulse">● DATOS DE OPERACIÓN EN VIVO</span>
            {/* Usamos el RUC de la empresa del PDF */}
            <span className="text-blue-400">RUC: 20482610944</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
            Calera Santa Isabel de Cushuro <span className="text-emerald-600">S.A.C</span>
          </h2>
              <p className="text-1xl md:text-3xl font-normal text-zinc-700 tracking-tighter italic">
            "Fortalecemos Industrias, cuidamos comunidades"
          </p>
        </div>

     
        {/* Las tarjetas ahora usan un fondo azul más oscuro y bordes para un look de panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-zinc-100 bg-blue-700 backdrop-blur-sm">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 border border-white/5 hover:bg-emerald-900/10 transition-all duration-300"
            >
              {/* Corner Accents mantienen el color esmeralda como acento de UI */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-600/30 group-hover:border-emerald-600" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-600/30 group-hover:border-emerald-600" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <stat.icon className="w-8 h-8 text-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[10px] font-mono text-blue-400 group-hover:text-emerald-600">ID_STAT_{stat.id}</span>
                </div>
                
                <div>
                  <div className="text-5xl font-black font-mono tracking-tighter text-white">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-sm font-bold text-blue-300 mt-1 tracking-widest uppercase">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-blue-200/70 font-medium leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
