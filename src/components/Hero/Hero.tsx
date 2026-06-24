/* client/src/components/Hero/Hero.tsx */

import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LCPImage } from "../ui/LCPImage";
import { HeroMediaThumbnails } from "../ui/HeroMediaThumbnails";
import { VideoPreview } from "../ui/VideoPreview";
import { useLocalizedContent } from "../../context/SiteLanguageContext";
import { HeroImpact } from "./HeroImpact";

export function Hero() {
  const copy = useLocalizedContent({
    es: {
      heroImageAlt: "Cantera de piedra caliza de Santa Isabel de Cushuro",
      eyebrow: "Producción de cal",
      title: "Produccion y suministro de óxido de calcio",

      ctaPrimary: "Ver cal viva",
      ctaPrimaryAria: "Ver informacion comercial de cal viva",
      ctaSecondary: "Contacto",
      ctaSecondaryAria: "Contactar por WhatsApp a Santa Isabel de Cushuro",
      whatsappMessage:
        "Hola, deseo información comercial sobre la cal viva y los productos de Calera Santa Isabel.",
      thumbnails: {
        alt: "Vista operativa",
        label: "Mostrar vista operativa",
      },
    },
    en: {
      heroImageAlt: "Limestone quarry of Santa Isabel de Cushuro",
      eyebrow: "Lime production",
      title: "Production and supply of calcium oxide",
      ctaPrimary: "View quicklime",
      ctaPrimaryAria: "View quicklime commercial information",
      ctaSecondary: "Contact",
      ctaSecondaryAria: "Contact Santa Isabel de Cushuro on WhatsApp",
      whatsappMessage:
        "Hello, I would like commercial information about quicklime and Calera Santa Isabel products.",
      thumbnails: {
        alt: "Operational view",
        label: "Show operational view",
      },
    },
  });

  const heroRef = useRef<HTMLElement | null>(null);

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isHeroInView, setIsHeroInView] = useState(false);
  const [canStartHeroMedia, setCanStartHeroMedia] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const heroVideos = [
    { src: "video/hero/cantera002", poster: "img-inicio/hero/cantera002" },
    { src: "video/hero/cantera003", poster: "img-inicio/hero/cantera003" },
  ];

  // Controla cuántos videos se renderizan (2 también en mobile/tablet)
  const heroVideoCount = 2;
  const activeVideos = heroVideos.slice(
    0,
    Math.max(1, Math.min(heroVideoCount, heroVideos.length))
  );
  const videoRotationMs = 4000;

  // ============================
  // Visibilidad del hero para controlar reproducción
  // ============================
  useEffect(() => {
    const target = heroRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // ============================
  // En mobile, activar el video con una interacción temprana o tras una espera breve
  // ============================
  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarsePointer = "matchMedia" in window && window.matchMedia("(pointer: coarse)").matches;

    setIsCoarsePointer(coarsePointer);

    // Activamos el video también en mobile/tablet de inmediato.
    setCanStartHeroMedia(true);

    if (!coarsePointer) return;

    // Fallback: en móvil cada <video> debe "desbloquearse" con un gesto del
    // usuario; si no, solo el primero reproduce y los demás quedan congelados.
    // En el primer gesto desbloqueamos TODOS (play+pausa los no activos) para
    // que la rotación pueda reproducirlos luego de forma programática.
    const unlockVideos = () => {
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.then === "function") {
          playPromise
            .then(() => {
              if (index !== activeVideoIndex) video.pause();
            })
            .catch(() => {});
        }
      });
    };

    window.addEventListener("touchstart", unlockVideos, { passive: true, once: true });
    window.addEventListener("pointerdown", unlockVideos, { passive: true, once: true });

    return () => {
      window.removeEventListener("touchstart", unlockVideos);
      window.removeEventListener("pointerdown", unlockVideos);
    };
  }, [activeVideoIndex]);

  const shouldRenderHeroVideos = !isCoarsePointer || isHeroInView || canStartHeroMedia;

  // ============================
  // Rotación automática de videos
  // ============================
  useEffect(() => {
    if (activeVideos.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % activeVideos.length);
    }, videoRotationMs);
    return () => window.clearInterval(id);
  }, [activeVideos.length, videoRotationMs]);

  useEffect(() => {
    if (activeVideoIndex >= activeVideos.length) {
      setActiveVideoIndex(0);
    }
  }, [activeVideoIndex, activeVideos.length]);

  // En móvil el sistema suele decodificar UN solo video a la vez, así que solo
  // reproducimos el activo y pausamos el otro. Para evitar cortes al rotar NO
  // reiniciamos currentTime (reanuda donde quedó) y mantenemos preload="auto",
  // de modo que el clip entrante ya está buffereado y play() arranca al instante.
  useEffect(() => {
    const canPlay = isHeroInView && canStartHeroMedia;
    const cleanups: Array<() => void> = [];

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeVideoIndex && canPlay) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.then === "function") {
          playPromise.catch(() => {
            // El video aún no tiene datos: reintentamos cuando esté listo.
            const retry = () => {
              video.play().catch(() => {});
            };
            video.addEventListener("canplay", retry, { once: true });
            cleanups.push(() => video.removeEventListener("canplay", retry));
          });
        }
      } else {
        video.pause();
      }
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [activeVideoIndex, activeVideos.length, canStartHeroMedia, isHeroInView]);

  return (
    <HeroImpact
      alt={copy.heroImageAlt}
      eyebrow={copy.eyebrow}
      title={copy.title}
      compactTitle
      showParticles={false}
      sectionRef={(node) => {
        heroRef.current = node;
      }}
      backgroundSlot={
        <>
          {/* FONDO PRINCIPAL (LCP) */}
          <LCPImage
            src="img-inicio/hero/cantera001"
            alt={copy.heroImageAlt}
            width={1920}
            height={1080}
            sizes="100vw"
            priority
            pictureClassName="absolute inset-0 block w-full h-full overflow-hidden"
            className="w-full h-full object-cover opacity-40"
          />

          {/* VIDEOS OPTIMIZADOS */}
          {shouldRenderHeroVideos &&
            activeVideos.map((video, index) => {
              const isActive = index === activeVideoIndex;
              return (
                <VideoPreview
                  key={video.src}
                  ref={(node) => {
                    videoRefs.current[index] = node;
                  }}
                  src={video.src}
                  poster={video.poster}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  autoPlay={false}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  useInternalOpacity={false}
                  deferOnMobileScroll={false}
                  aria-hidden={!isActive}
                />
              );
            })}
        </>
      }
      actionsSlot={
        <div className="mining-hero-actions">
          <Link
            to="/Productos/cal-viva"
            aria-label={copy.ctaPrimaryAria}
            className="mining-hero-cta-primary"
          >
            {copy.ctaPrimary}
          </Link>
          <a
            href={`https://wa.me/51959173472?text=${encodeURIComponent(copy.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.ctaSecondaryAria}
            className="mining-hero-cta-secondary"
          >
            {copy.ctaSecondary}
          </a>
        </div>
      }
      bottomSlot={
        <div className="absolute inset-x-0 bottom-4 z-40 flex justify-center px-6 sm:bottom-6 lg:bottom-8">
          <HeroMediaThumbnails
            items={activeVideos.map((video, index) => ({
              src: video.poster,
              alt: `${copy.thumbnails.alt} ${index + 1}`,
              label: `${copy.thumbnails.label} ${index + 1}`,
            }))}
            activeIndex={activeVideoIndex}
            onSelect={setActiveVideoIndex}
          />
        </div>
      }
    />
  );
}

export default Hero;
