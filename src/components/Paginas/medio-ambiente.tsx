/**client/src/components/Paginas/medio-ambiente.tsx */

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mountain, ArrowDown, Waves, Wind, Sun } from "lucide-react";
import PageSEO from "../global/PageSEO";
import EnvironmentalHealthSection from "../ui/EnvironmentalHealthSection";
import ReorderImageStack from "../ui/ReorderImageStack";
import ReforestacionGrid from "../ui/ReforestacionGrid";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const MedioAmbiente: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const copy = useLocalizedContent({
    es: {
      hero: {
        title: "Santa Isabel",
        brand: "De Curshuro SAC",
        description:
          "Tiene como objetivo lograr los más altos niveles de administración, en su gestión de preservación ambiental de los proyectos que emprenda la empresa.",
      },
      preservation: {
        eyebrow: "Actividad Forestal",
        title: "Preservación Ambiental",
        paragraphs: [
          "En S.A.C., la preservación ambiental es un eje transversal de gestión. Cada etapa del proceso productivo incorpora criterios de responsabilidad ambiental y control sostenible.",
          "Promovemos una cultura interna basada en la conciencia ambiental, fortaleciendo la formación de nuestro personal y asegurando que nuestras decisiones estratégicas mantengan el equilibrio entre producción, sostenibilidad y bienestar comunitario. Para ello, en conjunto con las instituciones locales y regionales, mantenemos un plan de reforestación activa con la plantación de árboles nativos como quinual, quishuar, eucalipto y aliso.",
        ],
        images: [
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
        ],
      },
      impact: {
        eyebrow: "Impacto Económico",
        title: "Producción con",
        accent: "Propósito",
        paragraphs: [
          "Nuestra actividad industrial genera empleo directo e indirecto, dinamizando sectores como transporte, comercio, talleres mecánicos y servicios complementarios en el distrito de Marcabal – Huamachuco y localidades aledañas.",
          "La producción de cal viva, cal hidratada, piedra caliza y carbón fortalece el crecimiento económico local. En ese marco, promovemos acciones orientadas a:",
        ],
        items: [
          "Mantemiento de carreteras en la zona de influencia.",
          "Mantemiento de vías de centros poblados.",
          "Impulsar la mejora continua en la calidad de atención de los servicios de salud.",
          "Preservar la salud ambiental del distrito y promover el desarrollo regional sostenible.",
        ],
        images: [
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
        ],
      },
      environmentalHealth: {
        title: "Salud Ambiental",
        intro:
          "Nuestra responsabilidad incluye el monitoreo permanente del aire, agua y suelo, reduciendo factores contaminantes y promoviendo estándares de salubridad alineados con la normativa vigente.",
        supportingText:
          "Asimismo, promovemos alianzas con autoridades locales y entidades de salud para contribuir al bienestar integral de la población y fortalecer la calidad de vida en nuestra zona de influencia.",
        items: [
          { icon: Waves, title: "Agua", description: "Control y protección hídrica." },
          { icon: Wind, title: "Aire", description: "Monitoreo de emisiones." },
          { icon: Sun, title: "Residuos", description: "Gestión responsable." },
          { icon: Mountain, title: "Suelos", description: "Restauración progresiva." },
        ],
      },
    },
    en: {
      hero: {
        title: "Santa Isabel",
        brand: "De Curshuro SAC",
        description:
          "Our goal is to achieve the highest management standards in the environmental preservation of every project undertaken by the company.",
      },
      preservation: {
        eyebrow: "Forestry Activity",
        title: "Environmental Preservation",
        paragraphs: [
          "At S.A.C., environmental preservation is a cross-cutting management axis. Each stage of the production process incorporates environmental responsibility and sustainable control criteria.",
          "We promote an internal culture based on environmental awareness, strengthening staff training and ensuring that our strategic decisions maintain balance between production, sustainability, and community well-being. To achieve this, together with local and regional institutions, we maintain an active reforestation plan with native tree planting such as quinual, quishuar, eucalyptus, and alder.",
        ],
        images: [
          {
            src: "/img-medio-ambiente/hero/medio-ambiente/reforestacion-medio-ambiente",
            alt: "Environmental monitoring",
          },
          {
            src: "/img-medio-ambiente/hero/medio-ambiente/planta-medio-ambiente",
            alt: "Emissions control",
          },
          {
            src: "/img-medio-ambiente/hero/medio-ambiente/maquinaria-medio-ambiente",
            alt: "Waste management",
          },
        ],
      },
      impact: {
        eyebrow: "Economic Impact",
        title: "Production with",
        accent: "Purpose",
        paragraphs: [
          "Our industrial activity generates direct and indirect employment, energizing sectors such as transport, commerce, mechanical workshops, and complementary services in the district of Marcabal – Huamachuco and nearby localities.",
          "The production of quicklime, hydrated lime, limestone, and coal strengthens local economic growth. Within this framework, we promote actions aimed at:",
        ],
        items: [
          "Road maintenance in the area of influence.",
          "Maintenance of access roads to populated centers.",
          "Promoting continuous improvement in the quality of healthcare services.",
          "Preserving the district's environmental health and promoting sustainable regional development.",
        ],
        images: [
          {
            src: "/img-medio-ambiente/impacto-economico/impacto-economico001",
            alt: "Environmental monitoring",
          },
          {
            src: "/img-medio-ambiente/impacto-economico/impacto-economico002",
            alt: "Emissions control",
          },
          {
            src: "/img-medio-ambiente/impacto-economico/impacto-economico003",
            alt: "Waste management",
          },
        ],
      },
      environmentalHealth: {
        title: "Environmental Health",
        intro:
          "Our responsibility includes permanent monitoring of air, water, and soil, reducing contaminating factors and promoting health standards aligned with current regulations.",
        supportingText:
          "We also promote partnerships with local authorities and health institutions to contribute to the overall well-being of the population and strengthen quality of life in our area of influence.",
        items: [
          { icon: Waves, title: "Water", description: "Water control and protection." },
          { icon: Wind, title: "Air", description: "Emission monitoring." },
          { icon: Sun, title: "Waste", description: "Responsible management." },
          { icon: Mountain, title: "Soils", description: "Progressive restoration." },
        ],
      },
    },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-env", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      gsap.from(".hero-line-env", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        delay: 0.5,
        ease: "power3.inOut",
      });

      imageRefs.current.forEach((img) => {
        if (img) {
          const inner = img.querySelector(".parallax-inner");
          if (inner) {
            gsap.to(inner, {
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        }
      });

      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      const stats = document.querySelectorAll(".stat-counter");
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target") || "0");
        gsap.to(stat, {
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="dark-image bg-white text-zinc-800 font-light overflow-hidden">
      <PageSEO pageId="medio-ambiente" />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-zinc-80/30">
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="hero-title-env text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light tracking-tighter text-zinc-800 inline-block px-4 py-2 rounded-lg">
            {copy.hero.title} <br />
            <span className="text-emerald-500 italic">{copy.hero.brand}</span>
          </h1>

          <div className="hero-line-env w-[1px] h-32 bg-emerald-400 mx-auto" />

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-800 max-w-3xl mx-auto font-light leading-relaxed">
            {copy.hero.description}
          </p>

          <div className="pt-8">
            <ArrowDown className="w-8 h-8 text-zinc-800 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      <section className="reveal-section py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-medium italic">
                {copy.preservation.eyebrow}
              </span>
              <h2 className="text-5xl font-light text-zinc-800 tracking-tight leading-tight">
                {copy.preservation.title.split(" ").map((word, index) => (
                  <React.Fragment key={`${word}-${index}`}>
                    {word}
                    {index === 0 ? <br /> : index < copy.preservation.title.split(" ").length - 1 ? " " : null}
                  </React.Fragment>
                ))}
              </h2>
            </div>

            <div className="space-y-6 text-zinc-800 text-lg leading-relaxed">
              {copy.preservation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div
            ref={(el) => {
              imageRefs.current[0] = el;
            }}
            className="relative h-[600px] overflow-hidden order-2 md:order-1"
          >
            <ReorderImageStack images={copy.preservation.images} />
          </div>
        </div>
      </section>

      <ReforestacionGrid />

      <section className="reveal-section py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div
            ref={(el) => {
              imageRefs.current[1] = el;
            }}
            className="relative h-[600px] overflow-hidden order-2 md:order-1"
          >
            <ReorderImageStack images={copy.impact.images} />
          </div>

          <div className="space-y-14 order-1 md:order-2">
            <div className="space-y-5">
              <span className="text-sm font-medium uppercase tracking-[0.4em] text-emerald-700">
                {copy.impact.eyebrow}
              </span>

              <h2 className="text-5xl md:text-6xl font-light text-zinc-900 tracking-tight leading-tight">
                {copy.impact.title} <br />
                <span className="font-normal text-emerald-700">{copy.impact.accent}</span>
              </h2>
            </div>

            <div className="space-y-8 text-zinc-700 text-lg leading-relaxed">
              {copy.impact.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <ul className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                {copy.impact.items.map((item, index) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="font-semibold text-amber-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <EnvironmentalHealthSection
        title={copy.environmentalHealth.title}
        intro={copy.environmentalHealth.intro}
        supportingText={copy.environmentalHealth.supportingText}
        items={copy.environmentalHealth.items}
      />
    </div>
  );
};

export default MedioAmbiente;
