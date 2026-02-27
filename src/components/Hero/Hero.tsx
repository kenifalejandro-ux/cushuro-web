import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";

import { LCPImage } from "../ui/LCPImage"; // Para la imagen principal (LCP)
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
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const prevActiveIndexRef = useRef<number | null>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const heroVideos = [
    {
      // Rutas relativas en SiteGround (sin https)
      src: "video/hero/cantera001",
      poster: "img-inicio/hero/cantera001",
    },
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
  const heroVideoCount = 3; // 1, 2 o 3
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
  // GLOW QUE SIGUE EL MOUSE
  // ============================
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      setGlowPosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
  // En mobile, esperar scroll antes de reproducir
  // ============================
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isCoarsePointer =
      "matchMedia" in window && window.matchMedia("(pointer: coarse)").matches;

    if (!isCoarsePointer) {
      setHasUserScrolled(true);
      return;
    }

    const onFirstScroll = () => setHasUserScrolled(true);
    window.addEventListener("scroll", onFirstScroll, {
      passive: true,
      once: true,
    });

    return () => window.removeEventListener("scroll", onFirstScroll);
  }, []);

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
    const canPlay = isHeroInView && hasUserScrolled;
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
  }, [activeVideoIndex, activeVideos.length, hasUserScrolled, isHeroInView]);

  return (
    <section ref={heroRef} className="relative min-h-[85vh] w-full overflow-hidden bg-black">
      {/* --- 1. FONDO PRINCIPAL (LCP) --- */}
      <div className="absolute inset-0 z-0">
        <LCPImage
          src="img/hero/cantera001"
          alt="Cantera de mármol profesional"
          width={1920}
          height={1080}
          priority
          className="opacity-40"
        />
      </div>

      {/* --- 2. VIDEOS OPTIMIZADOS --- */}
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
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              autoPlay={false}
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              useInternalOpacity={false}
              deferOnMobileScroll={false}
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

      {/* ================= CONTENIDO ================= */}
      <div className="relative z-30 flex min-h-[85vh] items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block font-bold text-sm tracking-[0.25em] uppercase text-emerald-400">
              Calera Cushuro
            </span>

            <h1 className="text-xl sm:text-3xl font-bold md:text-4xl xl:text-5xl font-bold tracking-tighter text-white">
              PRODUCCIÓN Y SUMINISTRO
            </h1>
            <span className="text-xl sm:text-3xl font-bold md:text-4xl xl:text-5xl font-bold tracking-tighter text-white">
              DE ÓXIDO DE CALCIO
            </span>
            <div className="pt-6 flex gap-4">
              <button className="px-6 py-3 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-blue-600 transition">
                Más información
              </button>

              <button className="px-6 py-3 rounded-full border border-white/30 text-white text-sm hover:border-white transition">
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
