/* client/src/components/UI/Vision.tsx */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageStack } from './ImageStack';
import { Lightbulb, TrendingUp, Shield } from 'lucide-react';
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pillarsGridRef = useRef<HTMLDivElement>(null);
  const copy = useLocalizedContent({
    es: {
      badge: "NUESTRA VISIÓN",
      futureTitle: "Nuestro Futuro",
      futureLabel: "Visión",
      description:
        "La empresa CALERA “SANTA ISABEL DE CUSHURO SAC” se proyecta a consolidarse en el suministro de Óxido de Calcio en el mercado minero de la región La Libertad; por su organización, logística, ambiente de trabajo, cuidado del medio ambiente, seguridad y responsabilidad social, por lo cual debe ser considerada como una empresa con credibilidad y confianza.",
      growthLabel: "Crecimiento",
      safetyLabel: "Seguridad",
      imageAlt: "Trabajo operativo",
    },
    en: {
      badge: "OUR VISION",
      futureTitle: "Our Future",
      futureLabel: "Vision",
      description:
        "CALERA “SANTA ISABEL DE CUSHURO SAC” aims to consolidate its position in the supply of calcium oxide in the mining market of the La Libertad region through its organization, logistics, work environment, environmental care, safety, and social responsibility, being recognized as a company of credibility and trust.",
      growthLabel: "Growth",
      safetyLabel: "Safety",
      imageAlt: "Operational work",
    },
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header con efecto de fade from top
      gsap.from(headerRef.current, {
        y: -150,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Badge con efecto de pulsación
      const badgeTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 80%',
        },
      });
      
      badgeTimeline
        .from(badgeRef.current, {
          scale: 0,
          rotation: 180,
          opacity: 0,
          duration: 1,
          ease: 'back.out(2)',
        })
        .to(badgeRef.current, {
          scale: 1.1,
          duration: 0.5,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: 1,
        });

      // Imagen con efecto de revelación diagonal
      gsap.from(imageRef.current, {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%',
        },
      });

     

      // Contenido con animación de entrada desde la derecha
      gsap.from(contentRef.current, {
        x: 150,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        },
      });

      // Pilares con efecto de flip
      gsap.from(pillarsGridRef.current?.children || [], {
        rotationY: 90,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pillarsGridRef.current,
          start: 'top 80%',
        },
      });

      // Animación continua de brillo
      gsap.to('.shine-effect', {
        backgroundPosition: '200% center',
        duration: 3,
        ease: 'none',
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

 
  return (
    <section
      ref={sectionRef}
      className="light-image relative min-h-screen rounded-b-[80px] md:rounded-b-[220px] lg:rounded-b-[520px] overflow-hidden bg-gradient-to-br from-zinc-600 via-zinc-600 to-zinc-600 px-4 py-20 md:px-8 lg:px-16"
    >

  {/* CONTENIDO (Asegúrate de que tenga z-10) */}
  <div className="max-center-7xl mx-auto relative z-10">
    {/* ... resto de tu contenido actual ... */}
  </div>

           <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 py-5">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md  text-white text-sm font-semibold mb-6 shadow-xl">
            <Lightbulb className="w-5 h-5 text-yellow-400 " />
            <span>{copy.badge}</span>
            <Lightbulb className="w-5 h-5 text-yellow-400" />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[8px] leading-none uppercase tracking-[0.08em] text-stone-300 sm:text-[10px] sm:tracking-[0.12em] md:text-xs lg:gap-4 lg:text-sm lg:tracking-widest">
            <span>LOC: HUAMACHUCO_LIBERTAD</span>
            <span className="text-green-400">⬥</span>
            <span>2025</span>
            <span className="text-green-400">⬥</span>
            <span>CALERA CUSHURO</span>
          </div>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20 items-center mb-24">
          {/* Imagen con badge */}
          <div className="relative">
            <div ref={imageRef} className="relative h-[420px] rounded-3xl overflow-hidden sm:h-[420px] md:h-[640px] lg:h-[700px]">
             <ImageStack
               layout="stacked"
              showOverlay={false}
           images={[
           {
             src: "/img-la-empresa/vision/vision",
             alt: copy.imageAlt,
    },
  ]}
  className="w-full"
  stackedLayoutOverrides={{
    1: {
      stackHeight: "h-[420px] sm:h-[420px] md:h-[640px] lg:h-[700px]",
      slots: {
        primary: "absolute inset-0 h-full w-full z-10",
      },
    },
  }}
/>
         
            </div>
          </div>

          {/* Contenido */}
          <div ref={contentRef} className="space-y-8">
            <div className="">
              <div className="flex items-center gap-4 mb-6">                  
                <div>
                  <h2 className="text-4xl font-bold text-white">{copy.futureTitle}</h2>
                  <p className="text-amber-500 text-sm uppercase tracking-wider mt-1">{copy.futureLabel}</p>
                </div>
              </div>

                <p className="text-md text-zinc-100 leading-relaxed font-medium">
                  {copy.description}
                </p>
          
              <div className="grid grid-cols-2 gap-4">
                <div className=" text-white  p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="w-10 text-amber-500 h-10 mx-auto mb-3" />
                  <p className="text-3xl  font-bold">100%</p>
                  <p className="text-sm uppercase tracking-wider mt-2">{copy.growthLabel}</p>
                </div>
                <div className=" text-white rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300">
                  <Shield className="w-10 text-amber-500 h-10 mx-auto mb-3" />
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm uppercase tracking-wider mt-2">{copy.safetyLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
     
    </section>
  );
}
