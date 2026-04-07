/* client/src/components/global/HeroMaquinariaPesada.tsx */

import { gsap } from "gsap";
import { Factory, Pickaxe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { HeroMediaThumbnails } from "../ui/HeroMediaThumbnails";
import { LCPImage } from "../ui/LCPImage"; // Para la imagen principal (LCP)
import { useLocalizedContent } from "../../context/SiteLanguageContext";
const HERO_PANORAMIC_IMAGE =
  "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria001";

export function HeroMaquinariaPesada() {
  const copy = useLocalizedContent({
    es: {
      alt: "Vista panoramica de operacion minera y produccion de cal",
      slideAlt: "Vista operativa",
      title: "Operacion con maquinaria pesada",
      subtitle:
        "Movimiento de tierras, extraccion y soporte operativo en mineria no metalica con maquinaria pesada y control tecnico en campo.",
      badges: ["Equipos de Alto Rendimiento", "Operacion en mineria no metalica"],
      thumbnailAlt: "Vista de maquinaria",
      thumbnailLabel: "Mostrar vista de maquinaria",
    },
    en: {
      alt: "Panoramic view of mining operations and lime production",
      slideAlt: "Operational view",
      title: "Heavy equipment operations",
      subtitle:
        "Earthmoving, extraction, and operational support in non-metallic mining with heavy equipment and technical control in the field.",
      badges: ["High-performance equipment", "Non-metallic mining operation"],
      thumbnailAlt: "Equipment view",
      thumbnailLabel: "Show equipment view",
    },
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);

  const [showModel, setShowModel] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const glowPosition = { x: 50, y: 50 };

  const heroSlides = [
    {
      poster: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria001",
    },
    {
      poster: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria002",
    },
    {
      poster: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria003",
    },
  ];

  // Controla cuántas imágenes se renderizan
  const heroSlideCount = 3; // 1, 2 o 3

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
      {/* --- 2. IMAGENES (poster) CON TRANSICION --- */}
      <div className="absolute inset-0 z-10">
        {activeSlides.map((slide, index) => {
          const isActive = index === activeVideoIndex;
          return (
            <LCPImage
              key={slide.poster}
              src={slide.poster}
              alt={`${copy.slideAlt} ${index + 1}`}
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
      <div className="absolute inset-0 z-20 bg-[linear-gradient(115deg,rgba(8,8,7,0.82)_0%,rgba(8,8,7,0.58)_48%,rgba(8,8,7,0.28)_100%)]" />

      {/* Glow dinámico */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `radial-gradient(
            520px at ${glowPosition.x}% ${glowPosition.y}%,
            rgba(214, 175, 103, 0.12),
            transparent 70%
          )`,
        }}
      />

      {/* ================= CONTENIDO ln-91-70================= */}
<div className="relative z-30 flex min-h-[85vh] items-center mt-8 xl:mt-10 2xl:mt-14">        <div className="mx-auto max-w-7xl px-6 w-full">
          {/* Texto */}
          <div className="max-w-3xl space-y-7 md:space-y-8">
            <div className="mining-hero-eyebrow">
              <div className="reveal-line mining-hero-line origin-left" />
              <span></span>
            </div>

<h1 className="reveal-title text-2xl md:text-3xl lg:text-4xl xl:text-4xl mining-hero-title max-w-[20ch]">               {copy.title}
            </h1>

            <p className="reveal-subtitle mining-hero-subtitle max-w-[39rem]">
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

      <div className="absolute inset-x-0 bottom-4 z-40 flex justify-center px-6 sm:bottom-6 lg:bottom-8">
        <HeroMediaThumbnails
          items={activeSlides.map((slide, index) => ({
            src: slide.poster,
            alt: `${copy.thumbnailAlt} ${index + 1}`,
            label: `${copy.thumbnailLabel} ${index + 1}`,
          }))}
          activeIndex={activeVideoIndex}
          onSelect={setActiveVideoIndex}
        />
      </div>
    </section>
  );
}

export default HeroMaquinariaPesada;
