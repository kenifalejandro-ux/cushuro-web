/* client/src/components/ui/Mision.tsx */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageStack } from './ImageStack';
import { Target, Sparkles, CheckCircle2, Leaf, Shield, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Mision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Título con efecto split
      gsap.from(titleRef.current, {
        scale: 0.5,
        opacity: 0,
        rotation: -10,
        duration: 1.2,
        ease: 'elastic.out(1, 0.8)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      // Imagen con clip-path reveal
      gsap.from(imageContainerRef.current, {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: 'top 75%',
        },
      });


      // Contenido con efecto de escritura
      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        },
      });

      // Pilares con animación en cascada
      gsap.from(pillarsRef.current?.children || [], {
        y: 100,
        opacity: 0,
        rotation: 5,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pillarsRef.current,
          start: 'top 80%',
        },
      });

      // Animación de brillo en hover
      const pillarElements = pillarsRef.current?.children;
      if (pillarElements) {
        Array.from(pillarElements).forEach((pillar) => {
          pillar.addEventListener('mouseenter', () => {
            gsap.to(pillar, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          pillar.addEventListener('mouseleave', () => {
            gsap.to(pillar, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  

  return (
    <section
      ref={sectionRef}
      className="light-image relative min-h-screen rounded-t-[80px] md:rounded-t-[220px] lg:rounded-t-[520px] overflow-hidden bg-zinc-600 px-4 py-20 md:px-8 lg:px-16"
      
    >
      
        {/* CONTENIDO (Asegúrate de que tenga z-10) */}
        <div className="max-center-7xl mx-auto relative z-10">
          {/* ... resto de tu contenido actual ... */}
        </div>
      
            <div className="max-w-7xl mx-auto relative z-10">

            </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold mb-6 shadow-xl">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span>NUESTRA MISIÓN</span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[8px] leading-none uppercase tracking-[0.08em] text-stone-300 sm:text-[10px] sm:tracking-[0.12em] md:text-xs lg:gap-4 lg:text-md lg:tracking-wider">
            <span>LOC: HUAMACHUCO_LIBERTAD</span>
            <span className="text-green-400">•</span>
            <span>2025</span>
            <span className="text-green-400">•</span>
            <span>CALERA CUSHURO</span>
          </div>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          {/* Contenido principal */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <div className="">
              <div className="flex items-start gap-4 mb-6">
                
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Nuestro Propósito</h2>
                  <p className="text-amber-500 text-sm uppercase tracking-wider">Misión</p>
                </div>
              </div>
             
                <p className="text-md text-zinc-100 leading-relaxed">
                  La misión de CALERA “SANTA ISABEL DE CUSHURO SAC”,
                  es otorgar Productos de calidad en el suministro de Óxido de calcio con
                    responsabilidad ambiental, social, Integridad e
Identificación con nuestro Personal, Proveedores, Clientes y Comunidad,fomentando la
capacitación permanente de nuestros Recursos Humanos, logrando un posicionamiento
competitivo dentro del mercado empresarial local y regional.
                </p>
             

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className=" backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">
                  <CheckCircle2 className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                  <p className="text-white font-semibold">Calidad</p>
                  <p className="text-stone-300 text-sm">Certificada</p>
                </div>
                <div className=" backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">
                  <CheckCircle2 className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                  <p className="text-white font-semibold">Compromiso</p>
                  <p className="text-stone-300 text-sm">Social</p>
                </div>
              </div>
            </div>
          </div>

         {/* Imagen */}
<div ref={imageContainerRef} className="order-1 lg:order-2">
  {/* Quitamos shadow-2xl, border y cualquier fondo */}
  <div className="relative h-[420px] overflow-hidden sm:h-[420px] md:h-[640px] lg:h-[700px]"> 
   <ImageStack
  images={[
    {
      src: "/img-la-empresa/mision/mision001",
      alt: "Trabajo operativo",
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
        </div>
      </div>
    </section>
  );
}
