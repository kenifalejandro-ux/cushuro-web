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
      className="relative bg-zinc-800/70 backdrop-blur-md border border-zinc-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 group"
    >
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
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
      icon: <Award className="w-8 h-8" />,
      title: "Calidad",
      description:
        "Garantizamos productos de piedra caliza y carbón que cumplen con las más altas normas técnicas y estándares de calidad de la industria minera nacional.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Seguridad",
      description:
        "Priorizamos la seguridad laboral de nuestros colaboradores con protocolos rigurosos, equipamiento adecuado y capacitación continua en prevención de riesgos.",
      gradient: "from-amber-500 to-red-600",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Responsabilidad Ambiental",
      description:
        "Implementamos prácticas de extracción sostenibles que minimizan el impacto ambiental y promueven la restauración de áreas intervenidas.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Compromiso Social",
      description:
        "Generamos empleo digno para comunidades locales y contribuimos activamente al desarrollo social y económico de las zonas donde operamos.",
      gradient: "from-cyan-500 to-indigo-600",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Cumplimiento Normativo",
      description:
        "Operamos en estricto cumplimiento de la legislación minera, ambiental y laboral vigente, manteniendo todas nuestras certificaciones actualizadas.",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ética y Valores",
      description:
        "Fomentamos relaciones comerciales transparentes basadas en la honestidad, integridad y respeto mutuo con clientes, proveedores y colaboradores.",
      gradient: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b  from-zinc-950 via-zinc-900 to-zinc-950 py-24 md:py-32 overflow-hidden"
    >
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-indigo-600/10 rounded-full blur-3xl" />


      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <Layers className="w-10 h-10 text-blue-500" />
          </div>

          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
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
  <div className="absolute inset-0 bg-gradient-to-b  from-blue-950 via-zinc-900 to-blue-900" />

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