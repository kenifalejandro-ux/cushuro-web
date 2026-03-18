/* client/src/components/sections/Politicas.tsx */
/* Arquitectura Empresarial - Diseño estructural industrial */

"use client";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Leaf,
  Users,
  HardHat,
  Heart,
  Award,
  Layers,
  FileCheck,
  Moon,
  ShieldAlert,
  Ban,
} from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface BlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const PoliticasBlock = ({
  icon,
  title,
  description,
  delay = 0,
}: BlockProps) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blockRef.current) return;

    gsap.fromTo(
      blockRef.current,
      { y: 60, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: blockRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [delay]);

  return (
    <div
      ref={blockRef}
      className="group relative rounded-[1.5rem] border border-white/8 bg-zinc-950/88 p-8 transition-colors duration-300 hover:border-emerald-700/30"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-emerald-700/55 via-stone-500/30 to-transparent" />
      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-700/20 bg-[linear-gradient(145deg,rgba(16,185,129,0.14),rgba(245,158,11,0.08))] text-emerald-400 transition-colors duration-300 group-hover:border-emerald-700/35 group-hover:text-emerald-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-300">
          {title}
        </h3>
      </div>

      <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
    
  );
};

export default function Politicas() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const Politicas = [
  {
    icon: <HardHat className="w-8 h-8" />,
    title: "Seguridad y Salud Ocupacional",
    description:
      "Establecemos la identificación de peligros y el control de riesgos como pilares fundamentales para proteger la integridad del personal en todas nuestras operaciones mineras.",
    gradient: "from-amber-500 to-red-600",
  },
  {
    icon: <Moon className="w-8 h-8" />,
    title: "Política de Fatiga y Somnolencia",
    description:
      "Gestionamos estrictamente los turnos y periodos de descanso para asegurar que el personal opere maquinaria y equipos en condiciones óptimas de alerta y capacidad física.",
    gradient: "from-slate-700 to-slate-900",
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Negativa al Trabajo Inseguro",
    description:
      "Se reconoce el derecho y la obligación de detener cualquier labor que no cuente con los controles de seguridad necesarios o represente un riesgo no controlado para la vida.",
    gradient: "from-red-600 to-red-800",
  },
  {
    icon: <Ban className="w-8 h-8" />,
    title: "Política de Alcohol y Drogas",
    description:
      "Prohibición absoluta del consumo, posesión o ingreso bajo el efecto de sustancias que alteren la capacidad psicomotriz, garantizando un entorno de trabajo 100% sobrio y seguro.",
    gradient: "from-orange-600 to-red-700",
  },
];

  return (
    <section
      ref={sectionRef}
      className="light-image relative overflow-hidden bg-[linear-gradient(180deg,#151515_0%,#1d1d1d_55%,#24201d_100%)] py-24 md:py-32"
    >
      <div className="absolute top-20 left-20 h-40 w-40 rounded-full bg-emerald-700/8 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-56 w-56 rounded-full bg-amber-500/8 blur-3xl" />


      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <Layers className="w-10 h-10 text-emerald-500" />
          </div>

          <h2
            ref={titleRef}
            className="mb-6 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl"
          >
           Nuestras Políticas
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Operamos con los más altos estándares de calidad, seguridad y responsabilidad,
             comprometidos con el desarrollo sostenible del sector minero y el bienestar
              de nuestras comunidades.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Politicas.map((item, index) => (
            <PoliticasBlock
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.15}
            />
          ))}
        </div>
        
      </div>
      {/* Dual Background - Radar Right + Waves Left */}
<div className="absolute inset-0 pointer-events-none -mt-30 overflow-hidden" aria-hidden="true">

  {/* Fondo base */}
  <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-zinc-900 to-stone-950" />

  {/* ================= RIGHT SIDE (RADAR GRANDE) ================= */}
  <svg
    className="absolute right-[-350px] top-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-35"
    viewBox="0 0 1000 1000"
    fill="none"
  >
    <circle cx="500" cy="500" r="480" stroke="rgba(245,158,11,0.35)" strokeWidth="2" />
    <circle cx="500" cy="500" r="400" stroke="rgba(245,158,11,0.25)" strokeWidth="2" />
    <circle cx="500" cy="500" r="320" stroke="rgba(245,158,11,0.20)" strokeWidth="2" />

    <line x1="0" y1="500" x2="1000" y2="500" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
    <line x1="500" y1="0" x2="500" y2="1000" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />

    <path
      d="M500 20 A480 480 0 0 1 980 500"
      stroke="rgba(234,88,12,0.4)"
      strokeWidth="3"
      fill="none"
    />
  </svg>

  {/* ================= LEFT SIDE (ONDAS PEQUEÑAS) ================= */}
  <svg
    className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-25"
    viewBox="0 0 600 600"
    fill="none"
  >
    {/* Ondas concéntricas pequeñas */}
    <circle cx="300" cy="300" r="220" stroke="rgba(120,113,108,0.25)" strokeWidth="2" />
    <circle cx="300" cy="300" r="170" stroke="rgba(120,113,108,0.20)" strokeWidth="2" />
    <circle cx="300" cy="300" r="120" stroke="rgba(120,113,108,0.15)" strokeWidth="2" />
    <circle cx="300" cy="300" r="70"  stroke="rgba(120,113,108,0.10)" strokeWidth="2" />

    {/* Línea horizontal sutil */}
    <line x1="0" y1="300" x2="600" y2="300" stroke="rgba(120,113,108,0.15)" strokeWidth="1" />
  </svg>

</div>
    </section>
  );
}
