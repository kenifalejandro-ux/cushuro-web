/* client/src/components/sections/LaEmpresaSection.tsx */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

// Variantes enfocadas en los productos de la Calera según el brochure
type SectionVariant = "oxide" | "limestone" | "coal" | "industrial";

interface LaEmpresaSectionProps {
  title: string;
  description: string | ReactNode;
  reverse?: boolean;
  imageElement?: ReactNode;
  imageContainerClassName?: string;
  variant?: SectionVariant;
  label?: string;
}

interface VariantStyle {
  bg: string;
  patternColor: string;
  accent: string;
  textMuted: string;
  lineGradient: string;
}

const VARIANT_STYLES: Record<SectionVariant, VariantStyle> = {
  oxide: { // Estilo "Cal Viva" (Blanco/Azul)
    bg: "bg-slate-50",
    patternColor: "rgba(30, 58, 138, 0.05)", // Blue 900
    accent: "text-blue-600",
    textMuted: "text-slate-500",
    lineGradient: "from-blue-600 via-blue-400 to-emerald-400",
  },
  limestone: { // Estilo "Piedra Caliza" (Gris Piedra)
    bg: "bg-zinc-100",
    patternColor: "rgba(39, 39, 42, 0.05)", 
    accent: "text-zinc-700",
    textMuted: "text-zinc-500",
    lineGradient: "from-zinc-700 via-slate-500 to-zinc-400",
  },
  coal: { // Estilo "Carbón Antracita" (Oscuro/Industrial)
    bg: "bg-[#0f172a]", // Slate 900
    patternColor: "rgba(52, 211, 153, 0.05)", // Emerald
    accent: "text-emerald-400",
    textMuted: "text-slate-400",
    lineGradient: "from-emerald-500 via-blue-500 to-emerald-500",
  },
  industrial: { // Estilo "Transportes y Maquinaria"
    bg: "bg-blue-950",
    patternColor: "rgba(255, 255, 255, 0.03)",
    accent: "text-blue-400",
    textMuted: "text-blue-200/60",
    lineGradient: "from-blue-500 via-emerald-400 to-blue-500",
  },
};

function getParagraphs(description: string) {
  return description.split(/\n\s*\n/).filter(Boolean);
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function LaEmpresaSection({
  title,
  description,
  reverse = false,
  imageElement,
  imageContainerClassName,
  variant = "industrial",
  label = "SANTA ISABEL DE CUSHURO",
}: LaEmpresaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const styles = VARIANT_STYLES[variant];
  const isDark = variant === "coal" || variant === "industrial";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de la imagen con inclinación industrial
      gsap.fromTo(imageRef.current,
        { autoAlpha: 0, x: reverse ? 60 : -60, filter: "grayscale(1) brightness(0.5)" },
        { autoAlpha: 1, x: 0, filter: "grayscale(0) brightness(1)", duration: 1.5, ease: "power4.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
      );

      // Animación secuencial del contenido
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 65%" } });
      tl.from(".reveal-line", { scaleX: 0, duration: 1, ease: "expo.inOut" })
        .from(".reveal-text", { y: 30, autoAlpha: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".reveal-icon", { scale: 0, rotate: -45, stagger: 0.1, duration: 0.5, ease: "back.out(2)" }, "-=0.8");
    }, sectionRef);
    return () => ctx.revert();
  }, [reverse]);

  return (
    <section ref={sectionRef} className={`relative bg-zinc-100 py-20 lg:py-32 ${styles.bg} transition-colors duration-500`}>


      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${reverse ? "lg:direction-rtl" : ""}`}>
          
          {/* Columna de Imagen */}
          <div className={`relative  ${reverse ? "lg:order-2" : ""} ${imageContainerClassName}`}>
            {/* Elementos decorativos de "Encuadre" */}
            <div className={`absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 ${isDark ? 'border-emerald-500/50' : 'border-blue-600/50'}`} />
            <div className={`absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 ${isDark ? 'border-emerald-500/50' : 'border-blue-600/50'}`} />
            
            <div ref={imageRef} className="rounded-sm overflow-hidden shadow-2xl border border-white/10">
              {imageElement}
            </div>
            
            {/* Badge de coordenadas/info técnica */}
            <div className="absolute -bottom-6 left-10 bg-blue-600 text-white px-4 py-2 text-[10px] font-mono tracking-widest shadow-xl">
              LOC: HUAMACHUCO_LIBERTAD // 2025
            </div>
          </div>

          {/* Columna de Contenido */}
          <div ref={contentRef} className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`reveal-line h-1 flex-1 bg-gradient-to-r ${styles.lineGradient} origin-left`} />
                <span className={`reveal-text font-mono text-xs tracking-[0.4em] uppercase font-bold ${styles.accent}`}>
                  {label}
                </span>
              </div>
              
              <h2 className={`reveal-text text-4xl lg:text-6xl font-black uppercase tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? styles.accent : ""}>{word} </span>
                ))}
              </h2>
            </div>

            <div className="space-y-6">
              {typeof description === "string" ? (
                getParagraphs(description).map((p, i) => (
                  <p key={i} className={`reveal-text text-md leading-relaxed font-medium ${styles.textMuted}`}>
                    {p}
                  </p>
                ))
              ) : (
                <div className={`reveal-text text-md leading-relaxed font-medium ${styles.textMuted}`}>
                  {description}
                </div>
              )}
            </div>

            {/* Iconos de Certificación/Proceso */}
            <div className="flex gap-8 pt-4 border-t border-slate-500/20">
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
