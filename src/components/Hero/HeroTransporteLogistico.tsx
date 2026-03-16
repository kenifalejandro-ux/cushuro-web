/* client/src/components/global/HeroTransporteLogistico.tsx */

import { gsap } from "gsap";
import { Factory, Pickaxe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LCPImage } from "../ui/LCPImage"; // Para la imagen principal (LCP)
const HERO_PANORAMIC_IMAGE = "img-servicios/hero/transporte-logistico/transporte-logistico002";
const HERO_PANORAMIC_ALT = "Vista panoramica de operacion minera y produccion de cal";

export function HeroTransporteLogistico() {
  const heroRef = useRef<HTMLDivElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);

  const [showModel, setShowModel] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const glowPosition = { x: 50, y: 50 };

  const heroSlides = [

    {
      poster: "img-servicios/hero/transporte-logistico/transporte-logistico002",
    },
    {
      poster: "img-servicios/hero/transporte-logistico/transporte-logistico003",
    },
        {
      poster: "img-servicios/hero/transporte-logistico/transporte-logistico004",
    },
        {
      poster: "img-servicios/hero/transporte-logistico/transporte-logistico005",
    },
  ];

  // Controla cuántas imágenes se renderizan
  const heroSlideCount = 5; // 1, 2 o 3
  const activeSlides = heroSlides.slice(
    0,
    Math.max(1, Math.min(heroSlideCount, heroSlides.length))
  );
  const slideRotationMs = 4000;

  // Cargar el modelo 3D cuando sea visible para cuidar LCP/TBT
  useEffect(() => {
    const target = modelContainerRef.current;
    if (!target || showModel) return;

    let timeoutId: number | null = null;
    const scheduleShow = () => {
      timeoutId = window.setTimeout(() => setShowModel(true), 800);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          scheduleShow();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [showModel]);

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

  // ============================
  // Rotación automática de imágenes
  // ============================
  useEffect(() => {
    if (activeSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % activeSlides.length);
    }, slideRotationMs);
    return () => window.clearInterval(id);
  }, [activeSlides.length, slideRotationMs]);

  useEffect(() => {
    if (activeVideoIndex >= activeSlides.length) {
      setActiveVideoIndex(0);
    }
  }, [activeVideoIndex, activeSlides.length]);

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
      {/* --- 2. IMAGENES (poster) CON TRANSICION --- */}
      <div className="absolute inset-0 z-10">
        {activeSlides.map((slide, index) => {
          const isActive = index === activeVideoIndex;
          return (
            <LCPImage
              key={slide.poster}
              src={slide.poster}
              alt={`Vista operativa ${index + 1}`}
              width={1920}
              height={1080}
              sizes="100vw"
              priority={index === 0}
              pictureClassName="absolute inset-0 block w-full h-full overflow-hidden"
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isActive}
            />
          );
        })}
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* Glow dinámico */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `radial-gradient(
            600px at ${glowPosition.x}% ${glowPosition.y}%,
            rgba(247, 184, 12, 0.29),
            transparent 70%
          )`,
        }}
      />
      
      
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

            <h1 className="reveal-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight">
             Transporte Logístico Especializado para Operaciones Mineras
            </h1>

            <p className="reveal-subtitle text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white/80 tracking-tight leading-tight">
             Servicio de transporte de materiales mineros con capacidad operativa 
             diaria de hasta 176 TM, garantizando continuidad productiva y control
              logístico permanente.
            </p>
            <div className="flex flex-col items-start gap-3 text-[11px] sm:flex-row sm:flex-wrap sm:gap-6 sm:text-xs md:text-sm lg:text-base font-black text-emerald-400">
              <div className="reveal-badge flex w-full items-center gap-2 sm:w-auto">
                <Factory size={20} />
                <span>176 TM / día</span>
              </div>

              <div className="reveal-badge flex w-full items-center gap-2 sm:w-auto">
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

export default HeroTransporteLogistico;
