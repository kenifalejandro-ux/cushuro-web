/**client/src/components/Hero/HeroResponsabilidadSocial.tsx */


import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { Users, BookOpen, Heart, Trophy } from "lucide-react";

import { LCPImage } from "../ui/LCPImage";

const HERO_IMAGE = "img-responsabilidad-social/hero/hero002"; // ← cambia por tu imagen real
const HERO_ALT = "Niños en aula y comunidad apoyada por Calera Santa Isabel";

export default function HeroResponsabilidadSocial() {
  const heroRef = useRef<HTMLElement>(null);

  // Animación GSAP simple y elegante (igual que tus otros heroes de producto)
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(

        ".hero-bg",
        { scale: 1.08, filter: "brightness(0.65)" },
        { scale: 1, filter: "brightness(1)", duration: 2.2 }
      )
        .from(".reveal-line", { scaleX: 0, duration: 1.1, transformOrigin: "left" }, "-=1.4")
        .from(".reveal-title", { y: 50, opacity: 0, duration: 1 }, "-=0.7")
        .from(".reveal-subtitle", { y: 35, opacity: 0, duration: 0.9 }, "-=0.6")
        .from(".reveal-badge", { y: 25, opacity: 0, stagger: 0.15, duration: 0.7 }, "-=0.5");
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="relative min-h-[78vh] w-full overflow-hidden bg-black">
      {/* Imagen principal con zoom sutil */}
      <LCPImage
        src={HERO_IMAGE}
        alt={HERO_ALT}
        width={2560}
        height={1080}
        sizes="100vw"
        priority
        className="hero-bg absolute inset-0 w-full h-full object-cover scale-[1.01]"
      />

      {/* Overlay oscuro suave */}
     <div className="absolute inset-0 backdrop-blur-[3px] bg-zinc-950/30 z-10" />
     
        {/* ================= CONTENIDO ln-91-70================= */}
      <div className="relative z-30 flex min-h-[75vh] items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">

           {/* Texto */}
          <div className="max-w-3xl  space-y-6">
            <div className="flex items-center gap-4 mb-6">
            {/* Línea + etiqueta */}
            <div className="flex items-center gap-4 mb-6">
              <div className="reveal-line h-1 w-32 bg-gradient-to-r from-emerald-400 to-amber-400 origin-left" /> 
  
               <span className="text-xs tracking-[0.4em] uppercase font-bold text-emerald-400">
    CALERA SANTA ISABEL DE CUSHURO
  </span>
</div>
</div>

            {/* Título */}
            <h1 className="reveal-title text-5xl md:text-6xl font-black tracking-tighter text-white leading-none">
              Responsabilidad Social
            </h1>

            {/* Subtítulo */}
            <p className="reveal-subtitle text-xl md:text-2xl text-white/90 font-medium max-w-xl">
              Contribuimos al desarrollo humano de nuestras comunidades mediante educación, cultura, salud y recreación.
            </p>

            {/* Badges / iconos */}
            <div className="flex flex-wrap gap-6 text-emerald-400 font-semibold pt-4">
              <div className="reveal-badge flex items-center gap-3">
                <BookOpen size={26} />
                <span>Educación</span>
              </div>
              <div className="reveal-badge flex items-center gap-3">
                <Heart size={26} />
                <span>Salud Comunitaria</span>
              </div>
              <div className="reveal-badge flex items-center gap-3">
                <Users size={26} />
                <span>Cultura e Identidad</span>
              </div>
              <div className="reveal-badge flex items-center gap-3">
                <Trophy size={26} />
                <span>Deporte y Recreación</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}