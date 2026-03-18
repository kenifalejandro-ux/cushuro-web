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
    <section
      ref={heroRef}
      className="light-image  relative min-h-[78vh] w-full overflow-hidden bg-black"
    >
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
      <div className="absolute inset-0 z-10 bg-[linear-gradient(115deg,rgba(8,8,7,0.78)_0%,rgba(8,8,7,0.5)_48%,rgba(8,8,7,0.26)_100%)] backdrop-blur-[2px]" />

      {/* ================= CONTENIDO ln-91-70================= */}
<div className="relative z-30 flex min-h-[85vh] items-center mt-8 xl:mt-10 2xl:mt-14">        <div className="mx-auto max-w-7xl px-6 w-full">
          {/* Texto */}
          <div className="max-w-3xl space-y-7 md:space-y-8">
            <div className="mining-hero-eyebrow">
              <div className="reveal-line mining-hero-line origin-left" />
              <span></span>
            </div>

            {/* Título */}
            <h1 className="reveal-title lg:text-5xl mining-hero-title max-w-[20ch]">Responsabilidad social</h1>

            {/* Subtítulo */}
            <p className="reveal-subtitle mining-hero-subtitle max-w-[39rem]">
              Contribuimos al desarrollo humano de nuestras comunidades con iniciativas de
              educacion, salud, cultura y recreacion articuladas a largo plazo.
            </p>

            {/* Badges / iconos */}
            <div className="mining-hero-badge-list">
              <div className="reveal-badge mining-hero-badge">
                <BookOpen size={18} />
                <span>Educación</span>
              </div>
              <div className="reveal-badge mining-hero-badge">
                <Heart size={18} />
                <span>Salud Comunitaria</span>
              </div>
              <div className="reveal-badge mining-hero-badge">
                <Users size={18} />
                <span>Cultura e Identidad</span>
              </div>
              <div className="reveal-badge mining-hero-badge">
                <Trophy size={18} />
                <span>Deporte y Recreación</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
