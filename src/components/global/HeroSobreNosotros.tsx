/* client/src/components/global/HeroSobreNosotros.tsx */

import { useEffect, useRef, lazy, Suspense } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AboutCarousel } from "../ui/AboutCarousel";

// Registramos el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


export function HeroSobreNosotros() {
  const HeroSobreNosotrosRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null); // Para animaciones GSAP
  const panoramicBgRef = useRef<HTMLDivElement>(null); // Nuevo ref para parallax
  const lineWrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Limpiamos cualquier estilo inline residual del reload anterior
      const clearTargets = [
        titleRef.current,
        subtitleRef.current,
        threeContainerRef.current,
      ].filter(Boolean);

      if (clearTargets.length) {
        gsap.set(clearTargets, { clearProps: "all" });
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', immediateRender: false }
      });

      // Título con rotateX (queda espectacular y es seguro con clearProps)
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 100, opacity: 0, rotateX: -90 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.2 }
        );
      }

      // Subtítulo
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );
      }

      // ← MEJORA: Animación más ligera (reemplaza el clipPath pesado)
      if (threeContainerRef.current) {
        tl.fromTo(
          threeContainerRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.8'
        );
      }

    }, HeroSobreNosotrosRef);

    return () => ctx.revert();
  }, []);

  // Parallax y float
  useGSAP(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const reduceTargets = [
        titleRef.current,
        subtitleRef.current,
        threeContainerRef.current,
        lineWrapRef.current,
      ].filter(Boolean);

      if (reduceTargets.length) {
        gsap.set(reduceTargets, { opacity: 1, y: 0, clearProps: "all" });
      }

      if (lineRef.current) {
        gsap.set(lineRef.current, {
          strokeDasharray: 0,
          strokeDashoffset: 0,
          opacity: 1,
        });
      }

      if (panoramicBgRef.current) {
        gsap.set(panoramicBgRef.current, { clearProps: "transform" });
      }
      return;
    }

    if (threeContainerRef.current) {
      gsap.to(threeContainerRef.current, {
        y: -120,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

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

    if (panoramicBgRef.current && HeroSobreNosotrosRef.current) {
      gsap.to(panoramicBgRef.current, {
        y: 1000,
        ease: "none",
        scrollTrigger: {
          trigger: HeroSobreNosotrosRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, { scope: HeroSobreNosotrosRef });

 

    return (
      <div ref={HeroSobreNosotrosRef} className="relative min-h-screen bg-white to-br z-30 from-wite via-wite to-wite overflow-hidden">
        {/* ← NUEVO: Imagen panorámica de fondo con efecto parallax */}
        <div ref={panoramicBgRef} className="absolute inset-0 -z-10">
          {/* 
          <OptimizedImage
            src="/imagenes-optim/Hero/Servicios/Video-hero" // ← Cambia por tu imagen panorámica real (ej: .webp o .jpg)
            alt="Fondo panorámico servicios web"
            fill // next/image style (objectFit cover)
            className="object-cover object-center"                                                          
            priority  
            sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           1920px"                                                                                        
          />   
          */}                                                                       
        {/* ================= OVERLAYS ================= */}
      {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center min-h-[calc(100vh-20rem)]">
          {/* Columna izquierda: Título y subtítulo */}
          <div className="order-1 space-y-12 text-white">
            <div style={{ perspective: "1000px" }}>
              <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                <span className="block bg-gradient-to-r from-amber-400 via-gray-300 to-white bg-clip-text text-transparent">
                    Zincel · 
                </span>
              </h1>
              <h2 ref={subtitleRef} className="text-1.5xl sm:text-2xl lg:text-4xl tracking-tight">
                <span className="block bg-gradient-to-r from-white via-gray-300 to-amber-400 bg-clip-text text-transparent">
                    Estudio de diseño digital en Lima · 
                </span>
              </h2>
              
            </div>
            <p ref={subtitleRef} className="text-lg sm:text-xl text-gray-300 max-w-xl">
           Mi objetivo es ser socio estratégico de  las empresas para construir marcas sólidas mediante diseño web, branding y experiencias visuales.
            </p>
          </div>
                  {/* ================= PORTFOLIO ================= */}
                  <section id="portfolio" className="order-2 w-full xl:pl-6">
                    <AboutCarousel />
                  </section>
        </div>
     {/* ← MEJORA: ref agregada y fallback visual al Suspense */}
            <div 
              ref={threeContainerRef} 
              className="hidden lg:block"  // ← Oculto en móvil/tablet, visible solo en lg (≥1024px)
              style={{ width: '100%', height: '600px', position: 'absolute', top: 0, right: 0 }}
            >            
                      
                    <Suspense fallback={
                          <div className="w-full h-full bg-gradient-to-br from-purple-100/20 to-pink-100/20 flex items-center justify-center rounded-2xl">
                            <div className="text-center">
                              <div className="w-40 h-40 bg-purple-300/30 rounded-full animate-pulse mx-auto mb-6" />
                              <p className="text-purple-700 font-semibold text-lg">Cargando experiencia 3D...</p>
                            </div>
                          </div>
                        }>
                        
                        </Suspense>
                      </div>
                   </div>
        
                </div>
  
  
  );
}


export default HeroSobreNosotros;
