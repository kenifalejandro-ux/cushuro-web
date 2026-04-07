/** client/src/components/ui/ServicesGrid.tsx */

"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import ServiceCard from "./ServiceCard";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_COPY = {
  es: {
    eyebrow: "Materiales y capacidades",
    title: "Soluciones para abastecimiento y soporte industrial",
    description:
      "Una presentación más clara de productos y servicios con foco en continuidad operativa, pureza de materiales y capacidad técnica.",
    services: [
      {
        title: "Piedra Caliza",
        category: "Materia prima",
        image: "img-productos/piedra-caliza/operario-con-piedra-caliza",
        href: "/Productos/piedra-caliza",
        description:
          "Mineral natural utilizado en construcción, producción de cal y aplicaciones industriales.",
      },
      {
        title: "Cal Viva",
        category: "Producto industrial",
        image: "img-productos/cal-viva/oxido-de-calcio001",
        href: "/Productos/cal-viva",
        description:
          "Óxido de calcio de alta pureza utilizado en procesos industriales, metalúrgicos y de tratamiento químico.",
      },
      {
        title: "Cal Agrícola",
        category: "Sector agrícola",
        image: "img-inicio/servicios-inicio/cal-agricola/calagricola",
        href: "/Productos/cal-agricola",
        description:
          "Mejora la estructura del suelo, corrige acidez y optimiza la absorción de nutrientes en cultivos.",
      },
      {
        title: "Carbón Antracita",
        category: "Combustible sólido",
        image: "img-inicio/servicios-inicio/antracita-carbon/vestigio-carbon-antracita",
        href: "/Productos/carbon-antracita",
        description:
          "Carbón de alto poder calorífico y baja emisión, ideal para procesos térmicos industriales.",
      },
      {
        title: "Carbón tipo Cisco",
        category: "Uso industrial",
        image: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco",
        href: "/Productos/carbon-cisco",
        description:
          "Variante especializada para combustión eficiente en hornos y procesos metalúrgicos.",
      },
      {
        title: "Transporte Logístico",
        category: "Servicio industrial",
        image: "img-servicios/hero/transporte-logistico/transporte-logistico003",
        href: "/Servicios-Industriales/transporte-logistico-especializado",
        description:
          "Servicio especializado para el traslado continuo de materiales y abastecimiento en operaciones mineras e industriales.",
      },
      {
        title: "Operación con Maquinaria",
        category: "Servicio industrial",
        image: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria001",
        href: "/Servicios-Industriales/operacion-con-maquinaria-pesada",
        description:
          "Movimiento de tierras, extracción y soporte operativo con maquinaria pesada bajo planificación técnica y supervisión especializada.",
      },
    ],
  },
  en: {
    eyebrow: "Materials and capabilities",
    title: "Solutions for supply and industrial support",
    description:
      "A clearer presentation of products and services focused on operational continuity, material purity, and technical capacity.",
    services: [
      {
        title: "Limestone",
        category: "Raw material",
        image: "img-productos/piedra-caliza/operario-con-piedra-caliza",
        href: "/Productos/piedra-caliza",
        description:
          "Natural mineral used in construction, lime production, and industrial applications.",
      },
      {
        title: "Quicklime",
        category: "Industrial product",
        image: "img-productos/cal-viva/oxido-de-calcio001",
        href: "/Productos/cal-viva",
        description:
          "High-purity calcium oxide used in industrial, metallurgical, and chemical treatment processes.",
      },
      {
        title: "Agricultural Lime",
        category: "Agricultural sector",
        image: "img-inicio/servicios-inicio/cal-agricola/calagricola",
        href: "/Productos/cal-agricola",
        description:
          "Improves soil structure, corrects acidity, and optimizes nutrient absorption in crops.",
      },
      {
        title: "Anthracite Coal",
        category: "Solid fuel",
        image: "img-inicio/servicios-inicio/antracita-carbon/vestigio-carbon-antracita",
        href: "/Productos/carbon-antracita",
        description:
          "High-calorific, low-emission coal ideal for industrial thermal processes.",
      },
      {
        title: "Carbon Cisco",
        category: "Industrial use",
        image: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco",
        href: "/Productos/carbon-cisco",
        description:
          "Specialized fuel variant for efficient combustion in kilns and metallurgical processes.",
      },
      {
        title: "Logistics Transport",
        category: "Industrial service",
        image: "img-servicios/hero/transporte-logistico/transporte-logistico003",
        href: "/Servicios-Industriales/transporte-logistico-especializado",
        description:
          "Specialized service for the continuous movement of materials and supply in mining and industrial operations.",
      },
      {
        title: "Heavy Equipment Operations",
        category: "Industrial service",
        image: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria001",
        href: "/Servicios-Industriales/operacion-con-maquinaria-pesada",
        description:
          "Earthmoving, extraction, and operational support with heavy equipment under technical planning and specialized supervision.",
      },
    ],
  },
} as const;

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const copy = useLocalizedContent(SERVICES_COPY);

  useEffect(() => {
    if (!sectionRef.current) return;
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Animación del heading
      if (headingRef.current) {
        const headingNodes = headingRef.current.querySelectorAll("h2, p");
        gsap.fromTo(
          headingNodes,
          { autoAlpha: 0, y: 24, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // Animaciones de cada card
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const direction = index % 2 === 0 ? 90 : -90;

        // Entrada general de la card
        gsap.fromTo(
          card,
          { autoAlpha: 0, x: direction, y: 20, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );

        // Escala de la imagen
        const imageContainer = card.querySelector<HTMLElement>("[data-service-image]");
        if (imageContainer) {
          gsap.fromTo(
            imageContainer,
            { scale: 1.14, x: direction * 0.25 },
            {
              scale: 1,
              x: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        // Contenido
        const content = card.querySelector<HTMLElement>("[data-service-content]");
        if (content) {
          gsap.fromTo(
            content,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              delay: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      });

      mm.add("(max-width: 430px)", () => {
        cardRefs.current.forEach((card) => {
          if (!card) return;
          const img = card.querySelector<HTMLImageElement>("img");
          if (!img) return;

          // Mantener gris por defecto en mobile/tablet
          gsap.set(img, { filter: "grayscale(100%)" });

          ScrollTrigger.create({
            trigger: card,
            start: "top 82%",
            once: true,
            onEnter: () => {
              gsap.to(img, {
                filter: "grayscale(0%)",
                duration: 1.25,
                ease: "power2.out",
              });
            },
          });
        });
      });
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-28 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="mb-14 text-center">
          <p className="b2b-eyebrow text-center">{copy.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-zinc-900 lg:text-5xl">
            {copy.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
            {copy.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {copy.services.map((service, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <ServiceCard {...service} priority={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
