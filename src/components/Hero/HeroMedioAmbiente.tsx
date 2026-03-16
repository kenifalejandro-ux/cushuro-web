import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { Users, Sprout, Heart, Trophy } from "lucide-react";

import { LCPImage } from "../ui/LCPImage";

const HERO_IMAGE = "img-medio-ambiente/hero/poster/HeroMedioAmbiente"; // ← cambia por tu imagen real
const HERO_ALT = "Niños en aula y comunidad apoyada por Calera Santa Isabel";

export default function HeroMedioAmbiente() {
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
    <section ref={heroRef} className="relative min-h-[65vh] w-full overflow-hidden bg-black">
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

 
      <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/40 to-black/40 z-10" />
  {/* Centro */}
  <div className="absolute w-full top-0 w-1/3 h-full backdrop-blur-xs z-10" />

  <div className="relative z-20 text-white p-10">
    Contenido aquí
  </div>
   {/* ================= CONTENIDO ln-91-70================= */}
      <div className="relative z-30 flex min-h-[65vh] items-center">
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

            {/* Título */}
            <h1 className="reveal-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none">
              COMPROMISO AMBIENTAL
            </h1>

            {/* Subtítulo */}
            <p className="reveal-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-medium max-w-xl">
             Desarrollamos conciencia y responsabilidad en todo el equipo para operar bajo los más altos estándares de gestión ambiental.            </p>

            {/* Badges / iconos */}
            <div className="flex flex-col items-start gap-3 text-[11px] sm:flex-row sm:flex-wrap sm:gap-6 sm:text-xs md:text-sm lg:text-base text-emerald-400 font-semibold pt-4">
              <div className="reveal-badge flex w-full items-center gap-3 sm:w-auto">
                <Sprout size={26} />
                <span>Reforestación</span>
              </div>
              <div className="reveal-badge flex w-full items-center gap-3 sm:w-auto">
                <Heart size={26} />
                <span>Salud Comunitaria</span>
              </div>
              <div className="reveal-badge flex w-full items-center gap-3 sm:w-auto">
                <Users size={26} />
                <span>Cultura e Identidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
