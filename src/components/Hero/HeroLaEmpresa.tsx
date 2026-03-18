/* client/src/components/global/HeroLaEmpresa.tsx */

/**client/src/components/Hero/HeroLaEmpresa.tsx */

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

import HeroMediaThumbnails from "@/components/ui/HeroMediaThumbnails";
import { LCPImage } from "@/components/ui/LCPImage";
import {
  goToSlice,
  initSlice,
  scheduleInitialSliceAutoplay,
  startSliceAutoplay,
  stopSliceAutoplay,
  type Service,
} from "@/utils/MedioAmbienteGsap";

const IMG_BASE = (import.meta.env.VITE_IMG_URL || import.meta.env.VITE_ASSETS_URL || "").replace(
  /\/+$/,
  ""
);
const toAssetUrl = (path: string) => {
  const normalized = path.replace(/^\/+/, "");
  return IMG_BASE ? `${IMG_BASE}/${normalized}` : `/${normalized}`;
};

const medioAmbienteServices: Service[] = [
  {
    image: toAssetUrl("img-la-empresa/hero-la-empresa/img003"),
    slug: "logistica-transporte",
    title: "Logística y Transporte",
    description:
      "Flota propia y convoyes seguros que garantizan el traslado eficiente de piedra caliza y óxido de calcio a nuestros clientes.",
  },
  {
    image: toAssetUrl("img-la-empresa/hero-la-empresa/img001"),
    slug: "produccion-segura",
    title: "Producción Segura",
    description:
      "Planta de cal con personal altamente capacitado y protegido, cumpliendo los más altos estándares de seguridad y calidad.",
  },
  {
    image: toAssetUrl("img-la-empresa/hero-la-empresa/img002"),
    slug: "equipo-en-campo",
    title: "Equipo en la Cantera",
    description:
      "Nuestros ingenieros y operadores trabajando en la cantera con profesionalismo, compromiso y total respeto por la seguridad.",
  },
  {
    image: toAssetUrl("img-inicio/hero/cantera001"),
    slug: "equipo-en-campo",
    title: "Equipo en la Cantera",
    description:
      "Nuestros ingenieros y operadores trabajando en la cantera con profesionalismo, compromiso y total respeto por la seguridad.",
  },
  {
    image: toAssetUrl("img-inicio/hero/cantera002"),
    slug: "equipo-en-campo",
    title: "Equipo en la Cantera",
    description:
      "Nuestros ingenieros y operadores trabajando en la cantera con profesionalismo, compromiso y total respeto por la seguridad.",
  },
  {
    image: toAssetUrl("img-inicio/hero/cantera003"),
    slug: "equipo-en-campo",
    title: "Equipo en la Cantera",
    description:
      "Nuestros ingenieros y operadores trabajando en la cantera con profesionalismo, compromiso y total respeto por la seguridad.",
  },
];

export default function HeroLaEmpresa() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: "100px",
  });

  // 🔹 1️⃣ TU useEffect ORIGINAL (NO se toca)
  useEffect(() => {
    let cancelled = false;

    if (inView && !isLoaded) {
      void initSlice(medioAmbienteServices).then(() => {
        if (!cancelled) {
          setActiveIndex(0);
          setIsLoaded(true);
        }
      });
    }

    return () => {
      cancelled = true;
      stopSliceAutoplay();
    };
  }, [inView, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    scheduleInitialSliceAutoplay(medioAmbienteServices, setActiveIndex);

    return () => {
      stopSliceAutoplay();
    };
  }, [isLoaded]);

  // 🔹 2️⃣ useGSAP VA FUERA DEL useEffect
  useGSAP(
    () => {
      if (!isLoaded) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([".service-text h1", ".service-text p", ".service-text a", ".divider"], {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        return;
      }

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

      gsap.to(".service-text a", {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: heroRef, dependencies: [isLoaded] }
  );

  const activeService = medioAmbienteServices[activeIndex] ?? medioAmbienteServices[0];

  const handleThumbnailSelect = async (index: number) => {
    stopSliceAutoplay();
    await goToSlice(index, medioAmbienteServices, setActiveIndex);
    startSliceAutoplay(medioAmbienteServices, setActiveIndex);
  };

  return (
    <section
      ref={(node) => {
        ref(node); // tu ref original de intersection observer
        // @ts-ignore
        heroRef.current = node;
      }}
      aria-label="Hero principal La Empresa"
      className="light-image relative min-h-[85vh] w-full overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <LCPImage
          src={medioAmbienteServices[0].image}
          alt="Compromiso ambiental con maquinaria pesada"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          pictureClassName="block w-full h-full"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== IMAGEN BASE ===== */}
      <div
        className={`
          image-base
          absolute inset-0 z-10
          ${!isLoaded ? "skeleton" : ""}
        `}
        aria-hidden="true"
      >
        <div className="image-base-content absolute inset-0" />

        {!isLoaded && (
          <div className="absolute inset-0 flex">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="skeleton-slice flex-1 bg-neutral-800 animate-pulse"
                style={{
                  // @ts-ignore
                  "--i": i,
                  "--total-slices": 8,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===== SLICES ANIMADOS (GSAP) ===== */}
      <div className="slice-wrapper absolute inset-0 z-20 pointer-events-none" aria-hidden="true" />

      {/* ================= OVERLAYS ================= */}
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 z-20 bg-[linear-gradient(115deg,rgba(8,8,7,0.82)_0%,rgba(8,8,7,0.56)_46%,rgba(8,8,7,0.28)_100%)]" />

      {/* ===== CONTENIDO HERO ===== */}
<div className="relative z-30 flex min-h-[85vh] items-center mt-8 xl:mt-10 2xl:mt-14">        <div className="mx-auto max-w-6xl px-6">
          <div className="service-text max-w-3xl text-white">
            <div className="mining-hero-eyebrow">
              <div className="reveal-line mining-hero-line origin-left" />
              <span></span>
            </div>

<h1 className="reveal-title text-2xl md:text-3xl lg:text-4xl xl:text-4xl mining-hero-title max-w-[20ch]">               {isLoaded ? activeService.title : "Cargando experiencia..."}
            </h1>

            <p className="reveal-subtitle mining-hero-subtitle mt-6 max-w-[39rem]">
              {isLoaded
                ? activeService.description
                : "Preparando animaciones y contenido visual."}
            </p>

            <hr className="divider my-8 w-14 border-white/18" />
          </div>
        </div>
      </div>

      {isLoaded ? (
        <div className="absolute inset-x-0 bottom-4 z-40 flex justify-center px-6 sm:bottom-6 lg:bottom-8">
          <HeroMediaThumbnails
            items={medioAmbienteServices.map((service, index) => ({
              src: service.image,
              alt: `${service.title} ${index + 1}`,
              label: `Mostrar ${service.title}`,
            }))}
            activeIndex={activeIndex}
            onSelect={(index) => {
              void handleThumbnailSelect(index);
            }}
          />
        </div>
      ) : null}
    </section>
  );
}
