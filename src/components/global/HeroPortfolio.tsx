/* client/src/components/global/HeroPortfolio.tsx */

import { useEffect, lazy, useRef, Suspense } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CarouselText from "../ui/CarouselText";

// ← Agrega esta línea (si usas el CSS)
import "../../styles/ThreeWrapperScene.css";

// 🧠 Lazy load del componente 3D
const ThreeWrapperService = lazy(() => import("../sections/ThreeWrapperService"));

// Registramos el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export function HeroPortfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const panoramicBgRef = useRef<HTMLDivElement>(null);
  
 


  // === ACTIVACIÓN SUAVE AL ENTRAR EN VIEWPORT (misma filosofía que Hero principal) ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Una vez visible, activamos las animaciones (ya están en GSAP, pero aseguramos trigger)
          gsap.to([titleRef.current, subtitleRef.current], { opacity: 1, duration: 0.3 });
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Empieza cuando el 20% del hero es visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Limpieza de estilos residuales
      const clearTargets = [
        titleRef.current,
        subtitleRef.current,
        threeContainerRef.current,
      ].filter(Boolean);

      if (clearTargets.length) {
        gsap.set(clearTargets, { clearProps: "all" });
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", immediateRender: false },
      });

      // Animaciones de entrada (igual que antes)
      tl.fromTo(titleRef.current, { y: 100, opacity: 0, rotateX: -90 }, { y: 0, opacity: 1, rotateX: 0, duration: 1.2 })
        .fromTo(subtitleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(ctaRef.current?.children || [], { y: 30, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15 }, "-=0.4");

      if (threeContainerRef.current) {
        tl.fromTo(threeContainerRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 }, "-=0.8");
      }

     
      // Parallax del fondo panorámico (tu código original, excelente)
      if (panoramicBgRef.current) {
        gsap.to(panoramicBgRef.current, {
          yPercent: -40,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);



  return (
    <div ref={heroRef} className=" relative min-h-screen   bg-white overflow-hidden">
      {/* ← Fondo panorámico con parallax */}
       
      <div ref={panoramicBgRef} className="absolute   inset-0 -z-10">
        {/* 
        <OptimizedImage
          src="/imagenes-optim/Hero/Servicios/Video-hero" // Asegúrate de que exista .webp o .jpg
          alt="Fondo panorámico portfolio"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
        />
        */}
        
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-20rem)]">
          {/* Columna izquierda: Título y subtítulo */}
          <div className="space-y-12 text-white">
            <div style={{ perspective: "1000px" }}>
              <h1 ref={titleRef} className="text-3xl sm:text-5xl lg:text-4xl tracking-tight">
                <span className="block bg-gradient-to-r from-black via-black to-black bg-clip-text text-white">
                  Explora nuestros trabajos demostrativos .

                </span>
                
              </h1>
               <h2 ref={subtitleRef} className="text-1xl sm:text-3xl lg:text-2xl tracking-tight">
                <span className="block bg-gradient-to-r from-black via-black to-black bg-clip-text text-white">
                 para marcas que buscan una presencia digital clara, profesional y efectiva.

                </span>
                
              </h2>
            </div>
          </div>
         <div
         ref={threeContainerRef}
          className="hidden lg:block relative w-full h-[420px] -mt-20 lg:-mt-160 [--translate-x-offset:5vw]"
        aria-hidden
          >

            <Suspense fallback={<div className="w-full h-full bg-black/5 rounded-2xl" aria-hidden />}>
              <ThreeWrapperService
                containerId="three-container-portfolio"
                className=""
                sectionClass="IntroInicio"
                theme="dark"
              />
            </Suspense>
          </div>
        </div>
        
      </div>
        {/* ================= CAROUSEL TEXT ================= */}
        <section id="CarouselText">
          <CarouselText />
        </section>
    </div>
       
  );
}

export default HeroPortfolio;
