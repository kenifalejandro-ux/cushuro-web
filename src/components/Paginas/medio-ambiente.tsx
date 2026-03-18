/**client/src/components/Paginas/medio-ambiente.tsx */


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mountain, ArrowDown, Waves, Wind, Sun } from 'lucide-react';
import PageSEO from "../global/PageSEO";
import EnvironmentalHealthSection from '../ui/EnvironmentalHealthSection';
import ReorderImageStack from '../ui/ReorderImageStack';
import ReforestacionGrid from '../ui/ReforestacionGrid';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const MedioAmbiente: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-title-env', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
      });

      gsap.from('.hero-line-env', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.inOut',
      });

      // Parallax for images
      imageRefs.current.forEach((img) => {
        if (img) {
          const inner = img.querySelector('.parallax-inner');
          if (inner) {
            gsap.to(inner, {
              yPercent: 20,
              ease: 'none',
              scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });
          }
        }
      });

      // Section reveals
      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

      // Counter animation
      const stats = document.querySelectorAll('.stat-counter');
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.to(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 90%',
          },
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power1.inOut',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const environmentalHealthItems = [
    { icon: Waves, title: 'Agua', description: 'Control y protección hídrica.' },
    { icon: Wind, title: 'Aire', description: 'Monitoreo de emisiones.' },
    { icon: Sun, title: 'Residuos', description: 'Gestión responsable.' },
    { icon: Mountain, title: 'Suelos', description: 'Restauración progresiva.' },
  ];
return (
  <div ref={containerRef} className="dark-image bg-white text-zinc-800 font-light overflow-hidden">
    <PageSEO pageId="medio-ambiente" />
    {/* Hero Section */}
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-zinc-80/30">
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="hero-title-env text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light tracking-tighter text-zinc-800 inline-block px-4 py-2 rounded-lg">
          Santa Isabel <br />
          <span className="text-emerald-500 italic">De Curshuro SAC</span>
        </h1>

        <div className="hero-line-env w-[1px] h-32 bg-emerald-400 mx-auto" />

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-800 max-w-3xl mx-auto font-light leading-relaxed">
         Tiene como objetivo lograr los más altos niveles de administración, en su gestión de preservación ambiental de los proyectos que emprenda la empresa.
        </p>

        <div className="pt-8">
          <ArrowDown className="w-8 h-8 text-zinc-800 mx-auto animate-bounce" />
        </div>
      </div>
    </section>

    {/* Preservación Ambiental */}
    <section className="reveal-section py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-medium italic">
              Actividad Forestal
            </span>
            <h2 className="text-5xl font-light text-zinc-800 tracking-tight leading-tight">
              Preservación <br /> Ambiental
            </h2>
          </div>

          <div className="space-y-6 text-zinc-800 text-lg leading-relaxed">
            <p>
              En  S.A.C., la preservación ambiental es
              un eje transversal de gestión. Cada etapa del proceso productivo incorpora
              criterios de responsabilidad ambiental y control sostenible.
            </p>

            <p>
              Promovemos una cultura interna basada en la conciencia ambiental,
              fortaleciendo la formación de nuestro personal y asegurando que
              nuestras decisiones estratégicas mantengan el equilibrio entre
              producción, sostenibilidad y bienestar comunitario, para ello en conjunto
              con las instituciones locales y regionales tenemos un plan de reforestación activa 
              en la plantación de árboles nativos (quinual, quishuar, eucalipto y el aliso).
            </p>
          </div>
        </div>
<div
  ref={(el) => { imageRefs.current[0] = el }}
  className="relative h-[600px]  overflow-hidden  order-2 md:order-1"
>
<ReorderImageStack
      images={[
        {
          src: "/img-medio-ambiente/hero/medio-ambiente/reforestacion-medio-ambiente",
          alt: "Monitoreo ambiental",
        },
        {
          src: "/img-medio-ambiente/hero/medio-ambiente/planta-medio-ambiente",
          alt: "Control de emisiones",
        },
        {
          src: "/img-medio-ambiente/hero/medio-ambiente/maquinaria-medio-ambiente",
          alt: "Gestión de residuos",
        },
      ]}
    />    
        </div>
        
      </div>
    </section>

    {/* Reforestación Activa */}
    <ReforestacionGrid />

 {/* Producción con Propósito */}
<section className="reveal-section py-32 px-6 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-24 items-center">

    {/* Imagen / Parallax */}
   <div
  ref={(el) => { imageRefs.current[0] = el }}
  className="relative h-[600px]  overflow-hidden  order-2 md:order-1"
>
<ReorderImageStack

      images={[
        {
          src: "/img-medio-ambiente/impacto-economico/impacto-economico001",
          alt: "Monitoreo ambiental",
        },
        {
          src: "/img-medio-ambiente/impacto-economico/impacto-economico002",
          alt: "Control de emisiones",
        },
        {
          src: "/img-medio-ambiente/impacto-economico/impacto-economico003",
          alt: "Gestión de residuos",
        },
      ]}
    />
     
     
</div>


    {/* Contenido */}
    <div className="space-y-14 order-1 md:order-2">

      {/* Título */}
      <div className="space-y-5">
        <span className="text-sm font-medium uppercase tracking-[0.4em] text-emerald-700">
          Impacto Económico
        </span>

        <h2 className="text-5xl md:text-6xl font-light text-zinc-900 tracking-tight leading-tight">
          Producción con <br />
          <span className="font-normal text-emerald-700">Propósito</span>
        </h2>
      </div>

      {/* Texto */}
      <div className="space-y-8 text-zinc-700 text-lg leading-relaxed">

        <p>
          Nuestra actividad industrial genera empleo directo e indirecto,
          dinamizando sectores como transporte, comercio, talleres mecánicos
          y servicios complementarios en el distrito de Marcabal – Huamachuco
          y localidades aledañas.
        </p>

        <p>
          La producción de cal viva, cal hidratada, piedra caliza y carbón
          fortalece el crecimiento económico local. En ese marco,
          promovemos acciones orientadas a:
        </p>

        {/* Lista Mejorada */}
        <ul className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                      <li className="flex items-start gap-4">
            <span className="font-semibold text-amber-600">02</span>
            <p>Mantemiento de carreteras en la zona de influencia.</p>
          </li>
            <li className="flex items-start gap-4">
            <span className="font-semibold text-amber-600">02</span>
            <p>Mantemiento de vías de centros poblados.</p>
          </li>

          <li className="flex items-start gap-4">
            <span className="font-semibold text-amber-600">03</span>
            <p>Impulsar la mejora continua en la calidad de atención de los servicios de salud.</p>
          </li>

          <li className="flex items-start gap-4">
            <span className="font-semibold text-amber-600">04</span>
            <p>Preservar la salud ambiental del distrito y promover el desarrollo regional sostenible.</p>
          </li>
        </ul>


      </div>
    </div>
  </div>
</section>

    <EnvironmentalHealthSection
      title="Salud Ambiental"
      intro="Nuestra responsabilidad incluye el monitoreo permanente del aire, agua y suelo, reduciendo factores contaminantes y promoviendo estándares de salubridad alineados con la normativa vigente."
      supportingText="Asimismo, promovemos alianzas con autoridades locales y entidades de salud para contribuir al bienestar integral de la población y fortalecer la calidad de vida en nuestra zona de influencia."
      items={environmentalHealthItems}
    />
  </div>
);
}

export default MedioAmbiente;
