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
        .from(".reveal-title", { y: 40, opacity: 0, duration: 1 }, "-=0.6")

        // Subtítulo
        .from(".reveal-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.7")

        // Stats / iconos
        .from(".reveal-badge", { y: 20, opacity: 0, stagger: 0.2, duration: 0.6 }, "-=0.6");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Parallax y float
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([titleRef.current, subtitleRef.current, badgeRef.current], {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
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
    <section ref={heroRef} className="light-image relative min-h-[85vh] w-full overflow-hidden ">
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
      <div className="absolute inset-0 z-10 bg-[linear-gradient(115deg,rgba(10,10,9,0.78)_0%,rgba(10,10,9,0.5)_52%,rgba(10,10,9,0.22)_100%)]" />

      {/* ================= CONTENIDO ln-91-70================= */}
<div className="relative z-30 flex min-h-[85vh] items-center mt-8 xl:mt-10 2xl:mt-14">        <div className="mx-auto max-w-7xl px-6 w-full">
          {/* Texto */}
          <div className="max-w-3xl space-y-7 md:space-y-8">
            <div className="mining-hero-eyebrow">
              <div className="reveal-line mining-hero-line origin-left" />
              <span></span>
            </div>

            <h1 className="reveal-title lg:text-5xl mining-hero-title max-w-[20ch]">Piedra caliza</h1>

            <p className="reveal-subtitle mining-hero-subtitle max-w-[39rem]">
              Materia prima de alta pureza para producción de cal, metalurgia y aplicaciones
              industriales con trazabilidad directa desde cantera.
            </p>
            <div className="mining-hero-badge-list">
              <div className="reveal-badge mining-hero-badge">
                <Factory size={18} />
                <span>Cantera con abastecimiento continuo</span>
              </div>

              <div className="reveal-badge mining-hero-badge">
                <Pickaxe size={18} />
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
