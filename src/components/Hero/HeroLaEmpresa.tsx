/* client/src/components/global/HeroLaEmpresa.tsx */

/**client/src/components/Hero/HeroLaEmpresa.tsx */

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

import { LCPImage } from "@/components/ui/LCPImage";
import { initSlice, type Service } from "@/utils/MedioAmbienteGsap";


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
    description: "Flota propia y convoyes seguros que garantizan el traslado eficiente de piedra caliza y óxido de calcio a nuestros clientes.",
  },
  {
    image: toAssetUrl("img-la-empresa/hero-la-empresa/img001"),
    slug: "produccion-segura",
    title: "Producción Segura",
    description: "Planta de cal con personal altamente capacitado y protegido, cumpliendo los más altos estándares de seguridad y calidad.",
  },
  {
    image: toAssetUrl("img-la-empresa/hero-la-empresa/img002"),
    slug: "equipo-en-campo",
    title: "Equipo en la Cantera",
    description: "Nuestros ingenieros y operadores trabajando en la cantera con profesionalismo, compromiso y total respeto por la seguridad.",
  },
    {
    image: toAssetUrl("img-inicio/hero/cantera001"),
    slug: "equipo-en-campo",
    title: "Equipo en la Cantera",
    description: "Nuestros ingenieros y operadores trabajando en la cantera con profesionalismo, compromiso y total respeto por la seguridad.",
  },
      {
    image: toAssetUrl("img-inicio/hero/cantera002"),
    slug: "equipo-en-campo",
    title: "Equipo en la Cantera",
    description: "Nuestros ingenieros y operadores trabajando en la cantera con profesionalismo, compromiso y total respeto por la seguridad.",
  },
      {
    image: toAssetUrl("img-inicio/hero/cantera003"),
    slug: "equipo-en-campo",
    title: "Equipo en la Cantera",
    description: "Nuestros ingenieros y operadores trabajando en la cantera con profesionalismo, compromiso y total respeto por la seguridad.",
  },
];


export default function HeroLaEmpresa() {
  const [isLoaded, setIsLoaded] = useState(false);
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
        if (!cancelled) setIsLoaded(true);
      });
    }

    return () => {
      cancelled = true;
      if (window.__bkarsInterval) {
        clearInterval(window.__bkarsInterval);
        window.__bkarsInterval = null;
      }
      
    };
  }, [inView, isLoaded]);

  // 🔹 2️⃣ useGSAP VA FUERA DEL useEffect
  useGSAP(
    () => {
      if (!isLoaded) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(
          [
            ".service-text h1",
            ".service-text p",
            ".service-text a",
            ".divider",
          ],
          { opacity: 1, y: 0, clearProps: "all" }
        );
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

  return (
<section
  ref={(node) => {
    ref(node);        // tu ref original de intersection observer
    // @ts-ignore
    heroRef.current = node;
  }}
      aria-label="Hero principal Medio Ambiente"
      className="relative min-h-[75vh] w-full overflow-hidden bg-black"
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
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* ===== CONTENIDO HERO ===== */}
      <div className="relative z-30 flex min-h-[75vh] items-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="service-text max-w-xl text-white">
            
   {/* Texto */}
          <div className="max-w-3xl  space-y-6">
            <div className="flex items-center gap-4 mb-6">
            {/* Línea + etiqueta */}
            <div className="flex items-center gap-4 mb-6">
              <div className="reveal-line h-1 w-32 bg-gradient-to-r from-emerald-400 to-amber-400 origin-left" />  <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.28em] lg:tracking-[0.4em] uppercase font-bold text-emerald-400">
    SANTA ISABEL DE CUSHURO
  </span>
    </div>
       </div>
         </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {isLoaded ? medioAmbienteServices[0].title : "Cargando experiencia..."}
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80">
              {isLoaded
                ? medioAmbienteServices[0].description
                : "Preparando animaciones y contenido visual."}
            </p>

            <hr className="divider my-8 w-12 border-white/40" />

          </div>
        </div>
      </div>
    </section>
  );
}
