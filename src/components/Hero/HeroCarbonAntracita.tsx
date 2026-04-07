/* client/src/components/global/HeroCarbonAntracita.tsx */

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Factory, Pickaxe, Droplets, ShieldCheck } from "lucide-react";

import { LCPImage } from "../ui/LCPImage"; // Para la imagen principal (LCP)
import { useLocalizedContent } from "../../context/SiteLanguageContext";
const HERO_PANORAMIC_IMAGE = "img-productos/hero/carbon-antracita/carbon-antracita";

export function HeroCarbonAntracita() {
  const copy = useLocalizedContent({
    es: {
      alt: "Vista panoramica de operacion minera y produccion de cal",
      title: "Carbon antracita",
      subtitle:
        "Combustible mineral de alto poder calorifico para procesos termicos y hornos industriales que requieren estabilidad energetica y bajo contenido de volatiles.",
      badges: ["Alta energía y baja volatilidad", "Rendimiento para operación industrial"],
    },
    en: {
      alt: "Panoramic view of mining operations and lime production",
      title: "Anthracite coal",
      subtitle:
        "High-calorific mineral fuel for thermal processes and industrial kilns that require energy stability and low volatile content.",
      badges: ["High energy and low volatility", "Performance for industrial operation"],
    },
  });
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
    <section
      ref={heroRef}
      className="light-image  relative min-h-[85vh] w-full overflow-hidden bg-black"
    >
      {/* --- 1. FONDO PRINCIPAL (LCP) --- */}
      <div className="absolute inset-0 z-0">
        <LCPImage
          src={HERO_PANORAMIC_IMAGE}
          alt={copy.alt}
          width={2560}
          height={1080}
          sizes="100vw"
          priority
          pictureClassName="block w-full h-full overflow-hidden"
          className="hero-bg scale-[1.01] opacity-85"
        />
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(115deg,rgba(7,7,7,0.84)_0%,rgba(7,7,7,0.62)_50%,rgba(7,7,7,0.32)_100%)]" />

      {/* ================= CONTENIDO ln-91-70================= */}
<div className="relative z-30 flex min-h-[85vh] items-center mt-8 xl:mt-10 2xl:mt-14">        <div className="mx-auto max-w-7xl px-6 w-full">
          {/* Texto */}
          <div className="max-w-3xl space-y-7 md:space-y-8">
            <div className="mining-hero-eyebrow">
              <div className="reveal-line mining-hero-line origin-left" />
              <span></span>
            </div>

            <h1 className="reveal-title lg:text-5xl mining-hero-title max-w-[20ch]">{copy.title}</h1>

            <p className="reveal-subtitle mining-hero-subtitle max-w-[40rem]">
              {copy.subtitle}
            </p>
            <div className="mining-hero-badge-list">
              <div className="reveal-badge mining-hero-badge">
                <Factory size={18} />
                <span>{copy.badges[0]}</span>
              </div>

              <div className="reveal-badge mining-hero-badge">
                <Pickaxe size={18} />
                <span>{copy.badges[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarbonAntracita;
