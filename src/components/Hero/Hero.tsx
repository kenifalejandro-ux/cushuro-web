import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import { Flame, Beaker, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

import { LCPImage } from "../ui/LCPImage"; // Para la imagen principal (LCP)
import { HeroMediaThumbnails } from "../ui/HeroMediaThumbnails";
import { VideoPreview } from "../ui/VideoPreview";

const IMG_BASE = import.meta.env.VITE_IMG_URL || import.meta.env.VITE_ASSETS_URL;

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);
  const lineWrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  const [showModel, setShowModel] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isHeroInView, setIsHeroInView] = useState(false);
  const [canStartHeroMedia, setCanStartHeroMedia] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const prevActiveIndexRef = useRef<number | null>(null);

  const heroVideos = [
    {
      src: "video/hero/cantera002",
      poster: "img-inicio/hero/cantera002",
    },
    {
      src: "video/hero/cantera003",
      poster: "img-inicio/hero/cantera003",
    },
  ];

  // Controla cuántos videos se renderizan
  const heroVideoCount = isCoarsePointer ? 1 : 2;
  const activeVideos = heroVideos.slice(
    0,
    Math.max(1, Math.min(heroVideoCount, heroVideos.length))
  );
  const videoRotationMs = 4000;

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

  // Animaciones GSAP después del LCP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0, rotateX: -5 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          threeContainerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.8"
        );

      gsap.to(threeContainerRef.current, {
        y: -110,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Parallax y float
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(
          [
            titleRef.current,
            subtitleRef.current,
            ctaRef.current?.children,
            threeContainerRef.current,
            lineWrapRef.current,
          ],
          { opacity: 1, y: 0, clearProps: "all" }
        );
        if (lineRef.current) {
          gsap.set(lineRef.current, {
            strokeDasharray: 0,
            strokeDashoffset: 0,
            opacity: 1,
          });
        }
        return;
      }

      gsap.to(threeContainerRef.current, {
        y: -120,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.to(lineRef.current, { strokeDashoffset: 0, duration: 1.8, delay: 0.3 })
          .set(lineRef.current, { strokeDasharray: "10 16", strokeDashoffset: 0 })
          .to(lineRef.current, {
            strokeDashoffset: -2000,
            duration: 14,
            ease: "none",
            repeat: -1,
          });
      }

      if (lineWrapRef.current) {
        gsap.to(lineWrapRef.current, {
          y: -6,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { scope: heroRef }
  );

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

    if (!coarsePointer) {
      setCanStartHeroMedia(true);
      return;
    }

    const enableHeroMedia = () => setCanStartHeroMedia(true);
    const timeoutId = window.setTimeout(enableHeroMedia, 500);

    window.addEventListener("scroll", enableHeroMedia, {
      passive: true,
      once: true,
    });
    window.addEventListener("touchstart", enableHeroMedia, {
      passive: true,
      once: true,
    });
    window.addEventListener("pointerdown", enableHeroMedia, {
      passive: true,
      once: true,
    });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", enableHeroMedia);
      window.removeEventListener("touchstart", enableHeroMedia);
      window.removeEventListener("pointerdown", enableHeroMedia);
    };
  }, []);

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

  useEffect(() => {
    const canPlay = isHeroInView && canStartHeroMedia;
    const activeVideo = videoRefs.current[activeVideoIndex];

    if (activeVideo && prevActiveIndexRef.current !== activeVideoIndex) {
      try {
        activeVideo.currentTime = 0;
      } catch {
        // noop
      }
      prevActiveIndexRef.current = activeVideoIndex;
    }

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeVideoIndex && canPlay) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeVideoIndex, activeVideos.length, canStartHeroMedia, isHeroInView]);
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
      className="light-image relative min-h-[85vh] w-full overflow-hidden bg-black"
    >
      {/* --- 1. FONDO PRINCIPAL (LCP) --- */}
      <div className="absolute inset-0 z-0">
        <LCPImage
          src="img-inicio/hero/cantera001"
          alt="Cantera de piedra caliza de "
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="opacity-40"
        />
      </div>

      {/* --- 2. VIDEOS OPTIMIZADOS --- */}
      {shouldRenderHeroVideos && (
        <div className="absolute inset-0 z-10">
          {activeVideos.map((video, index) => {
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
                preload={isCoarsePointer ? (isActive ? "auto" : "none") : "metadata"}
                controls={false}
                useInternalOpacity={false}
                deferOnMobileScroll={false}
                aria-hidden={!isActive}
              />
            );
          })}
        </div>
      )}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 z-20 bg-[linear-gradient(115deg,rgba(8,8,7,0.92)_0%,rgba(8,8,7,0.56)_48%,rgba(8,8,7,0.1)_100%)]" />

      {/* ================= CONTENIDO ================= */}
<div className="relative z-30 flex min-h-[85vh] items-center mt-8 xl:mt-10 2xl:mt-14">        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl space-y-7 md:space-y-8">
            {/* Línea + etiqueta */}
            <div className="mining-hero-eyebrow ">
              <div className="reveal-line mining-hero-line origin-left" />
              <span></span>
            </div>

<h1 className="reveal-title text-2xl md:text-3xl lg:text-4xl xl:text-4xl mining-hero-title max-w-[20ch]">               Produccion y suministro de oxido de calcio
            </h1>

            <p className="reveal-subtitle mining-hero-subtitle max-w-[40rem]">
              15 anos de experiencia, 5 hornos operativos y capacidad diaria de 176 TM para atender
              operaciones mineras e industriales con continuidad y control.
            </p>

            <div className="mining-hero-actions">
              <Link
                to="/Productos/cal-viva"
                aria-label="Ver informacion comercial de cal viva"
                className="mining-hero-cta-primary"
              >
                Ver cal viva
              </Link>
              <a
                href="https://wa.me/51959173472?text=Escr%C3%ADbenos%20para%20m%C3%A1s%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp a "
                className="mining-hero-cta-secondary"
              >
                Contacto
              </a>
            </div>
            {/* Badges / iconos
            <div className="mining-hero-badge-list">
              <div className="reveal-badge mining-hero-badge">
                <Flame size={18} />
                <span>Cal viva</span>
              </div>

              <div className="reveal-badge mining-hero-badge">
                <Beaker size={18} />
                <span>Cal hidratada</span>
              </div>

              <div className="reveal-badge mining-hero-badge">
                <Mountain size={18} />
                <span>Piedra caliza</span>
              </div>
            </div> */}
          </div>

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-4 z-40 flex justify-center px-6 sm:bottom-6 lg:bottom-8">
        <HeroMediaThumbnails
          items={activeVideos.map((video, index) => ({
            src: video.poster,
            alt: `Vista operativa ${index + 1} de `,
            label: `Mostrar vista operativa ${index + 1}`,
          }))}
          activeIndex={activeVideoIndex}
          onSelect={setActiveVideoIndex}
        />
      </div>
    </section>
  );
}

export default Hero;
