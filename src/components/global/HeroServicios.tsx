import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const LazyModelViewer = lazy(() => import("./ModelViewer"));

export function HeroServicios() {
  const HeroServiciosRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);
  const lineWrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  const [showModel, setShowModel] = useState(false);

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
    }, HeroServiciosRef);

    return () => ctx.revert();
  }, []);

  // Parallax y float
  useGSAP(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
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
 
  }, { scope: HeroServiciosRef });


  return (
    <div
      ref={HeroServiciosRef}
     className="relative min-h-[100vh] overflow-hidden bg-white"
    >
      {/* Contenido textual */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          <div className="space-y-8 text-white">
            <div style={{ perspective: "1000px" }}>
              <h1
                ref={titleRef}
                className="text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight"
              >
                Diseño UI/UX 
                
              </h1>
              <p
                ref={titleRef}
                className="text-5xl sm:text-6xl lg:text-3xl tracking-tight"
              >

                <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                  |Desarrollo Web| Branding | Modelado 3d
                </span>
              </p>
            </div>
          </div>
          <div
            ref={(el) => {
              threeContainerRef.current = el;
              modelContainerRef.current = el;
            }}
            className="hidden lg:block w-full h-[320px] relative"
            aria-hidden
          >
            {showModel ? (
              <Suspense fallback={<div className="w-full h-full bg-white/5 rounded-2xl" aria-hidden />}>
                <LazyModelViewer
                  modelPath="/blender-optim/eva-optimizado.glb"
                  className="w-full h-full mt-0"
                  modelScale={1}
                />
              </Suspense>

            ) : (
              // Poster/fondo liviano para no afectar LCP
              <div className="w-full h-full bg-white/5 rounded-2xl" aria-hidden />
            )}
          </div>
        </div>
      </div>
    </div>
    
  );
  
}

export default HeroServicios;
