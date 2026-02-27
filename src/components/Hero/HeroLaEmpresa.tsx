/* client/src/components/global/HeroLaEmpresa.tsx */

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Factory, Pickaxe, Droplets, ShieldCheck } from "lucide-react";

import { LCPImage } from "../ui/LCPImage"; // Para la imagen principal (LCP)
const HERO_PANORAMIC_IMAGE = "img-la-empresa/hero-la-empresa/img001";
const HERO_PANORAMIC_ALT = "Vista panoramica de operacion minera y produccion de cal";

export function HeroLaEmpresa() {
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
    <section ref={heroRef} className="relative min-h-[75vh] w-full overflow-hidden bg-black">
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
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-700/80 via-zinc-700/80 to-zinc-1/30 z-10" />



      {/* ================= CONTENIDO ln-91-70================= */}
      <div className="relative z-30 flex min-h-[75vh] items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">

           {/* Texto */}
          <div className="max-w-3xl  space-y-6">
            <div className="flex items-center gap-4 mb-6">
  <div className="reveal-line h-1 w-32 bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 origin-left" />
  <span className="text-xs tracking-[0.4em] uppercase font-bold text-emerald-400">
    CALERA CUSHURO
  </span>
</div>

<p className="reveal-subtitle text-2xl lg:text-xl font-normal text-white tracking-tight leading-tight">
"Fortalecemos Industrias, cuidamos comunidades"
</p>
            <div className="flex gap-6 font-black text-emerald-400">
  <div className="reveal-badge flex items-center gap-2">
    <Factory size={20} />
    <span>176 TM / día</span>
  </div>

  <div className="reveal-badge flex items-center gap-2">
    <Pickaxe size={20} />
    <span>Especializado en Minería</span>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroLaEmpresa;
