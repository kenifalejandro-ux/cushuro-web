/* client/src/components/global/HeroPiedraCaliza.tsx */

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Factory, Pickaxe, Droplets, ShieldCheck } from "lucide-react";

import { LCPImage } from "../ui/LCPImage"; // Para la imagen principal (LCP)
const HERO_PANORAMIC_IMAGE = "img-productos/hero/piedra-caliza/piedra-caliza";
const HERO_PANORAMIC_ALT = "Vista panoramica de operacion minera y produccion de cal";

export function HeroPiedraCaliza() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  

 useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Imagen fondo (ligero zoom + ajuste brillo)
    tl.fromTo(
      ".hero-bg",
      { scale: 1.15, filter: "brightness(0.6)" },
      { scale: 1, filter: "brightness(1)", duration: 2 }
    )

      // Línea industrial reveal
      .from(
        ".reveal-line",
        { scaleX: 0, duration: 1, transformOrigin: "left", ease: "expo.inOut" },
        "-=1.2"
      )

      // Texto principal
      .from(
        ".reveal-title",
        { y: 40, opacity: 0, duration: 1 },
        "-=0.6"
      )

      // Subtítulo
      .from(
        ".reveal-subtitle",
        { y: 30, opacity: 0, duration: 0.8 },
        "-=0.7"
      )

      // Stats / iconos
      .from(
        ".reveal-badge",
        { y: 20, opacity: 0, stagger: 0.2, duration: 0.6 },
        "-=0.6"
      );

  }, heroRef);

  return () => ctx.revert();
}, []);

  // Parallax y float
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(
          [titleRef.current, subtitleRef.current,  badgeRef.current],
          { opacity: 1, y: 0, clearProps: "all" }
        );
        return;
      }

      gsap.to(badgeRef.current, {
        y: -10,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: heroRef }
  );


  return (
    <section ref={heroRef} className="relative min-h-[75vh] w-full overflow-hidden ">
      {/* --- 1. FONDO PRINCIPAL (LCP) --- */}
      <div className="absolute inset-0 z-0">
       <LCPImage
  src={HERO_PANORAMIC_IMAGE}
  alt={HERO_PANORAMIC_ALT}
  width={2560}
  height={1080}
  sizes="100vw"
  priority
  pictureClassName="block w-full h-full overflow-hidden"
  className="hero-bg scale-[1.01] opacity-85"
/>
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-1/30 z-10" />


   {/* ================= CONTENIDO ln-91-70================= */}
      <div className="relative z-30 flex min-h-[75vh] items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">

           {/* Texto */}
          <div className="max-w-3xl  space-y-6">
            <div className="flex items-center gap-4 mb-6">
            {/* Línea + etiqueta */}
            <div className="flex items-center gap-4 mb-6">
              <div className="reveal-line h-1 w-32 bg-gradient-to-r from-emerald-400 to-amber-400 origin-left" /> 
  
               <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.28em] lg:tracking-[0.4em] uppercase font-bold text-emerald-400">
    CALERA SANTA ISABEL DE CUSHURO
  </span>
</div>
</div>
            
           <h1 className="reveal-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
  Piedra Caliza
</h1>

<p className="reveal-subtitle text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white tracking-tight leading-tight">
Materia prima minera de alta pureza para producción de cal, metalurgia y aplicaciones industriales con trazabilidad desde cantera.
</p>
            <div className="flex flex-col items-start gap-3 text-[11px] sm:flex-row sm:flex-wrap sm:gap-6 sm:text-xs md:text-sm lg:text-base font-black text-emerald-400">
  <div className="reveal-badge flex w-full items-center gap-2 sm:w-auto">
    <Factory size={20} />
    <span>Cantera con abastecimiento continuo</span>
  </div>

  <div className="reveal-badge flex w-full items-center gap-2 sm:w-auto">
    <Pickaxe size={20} />
    <span>Integración directa a planta calera</span>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPiedraCaliza;
