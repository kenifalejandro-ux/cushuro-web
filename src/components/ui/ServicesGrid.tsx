/** client/src/components/ui/ServicesGrid.tsx */

"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import HexFeatureRow from "./HexFeatureRow";
import { useLocalizedContent, type SiteLanguage } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

type ServiceItem = {
  title: string;
  category: string;
  image: string;
  href: string;
  description: string;
};

type ServicesCopy = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  services: ServiceItem[];
};

const SERVICES_COPY: Record<SiteLanguage, ServicesCopy> = {
  es: {
    eyebrow: "Materiales y capacidades",
    title: "Soluciones para abastecimiento y soporte industrial",
    description:
      "Una presentación más clara de productos y servicios con foco en continuidad operativa, pureza de materiales y capacidad técnica.",
    cta: "Ver más",
    services: [
      {
        title: "Piedra Caliza",
        category: "Materia prima",
        image: "img-inicio/servicios-inicio/piedra-caliza/piedra-caliza",
        href: "/inicio/servicios-inicio/piedra-caliza",
        description:
          "Mineral natural utilizado en construcción, producción de cal y aplicaciones industriales.",
      },
      {
        title: "Cal Viva",
        category: "Producto industrial",
        image: "img-inicio/servicios-inicio/cal-viva/cal-viva",
        href: "/inicio/servicios-inicio/cal-viva",
        description:
          "Óxido de calcio de alta pureza utilizado en procesos industriales, metalúrgicos y de tratamiento químico.",
      },
      /** 
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
      },*/

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
    cta: "See more",
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
        image: "img-productos/cal-viva/óxido-de-calcio001",
        href: "/Productos/cal-viva",
        description:
          "High-purity calcium oxide used in industrial, metallurgical, and chemical treatment processes.",
      },
      /**
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
       */
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
};

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

      // Animaciones de cada fila: las dos columnas se "encuentran" en el centro.
      // La columna izquierda entra desde la izquierda y la derecha desde la derecha.
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        // La imagen va a la izquierda en filas pares (reverse=false) y a la
        // derecha en impares; el contenido ocupa el lado contrario.
        const imageIsLeft = index % 2 === 0;
        const offset = 120;
        const imageFromX = imageIsLeft ? -offset : offset;
        const contentFromX = imageIsLeft ? offset : -offset;

        const trigger = {
          trigger: card,
          start: "top 85%",
          once: true,
        };

        // Aparición general de la fila (incluye el hexágono)
        gsap.fromTo(
          card,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1, ease: "power2.out", scrollTrigger: trigger }
        );

        // Columna de la imagen: entra desde su lado
        const imageContainer = card.querySelector<HTMLElement>("[data-service-image]");
        if (imageContainer) {
          gsap.fromTo(
            imageContainer,
            { x: imageFromX, autoAlpha: 0, scale: 1.08 },
            {
              x: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 1.9,
              ease: "power3.out",
              scrollTrigger: trigger,
            }
          );
        }

        // Columna de contenido: entra desde el lado opuesto
        const content = card.querySelector<HTMLElement>("[data-service-content]");
        if (content) {
          gsap.fromTo(
            content,
            { x: contentFromX, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 1.9,
              ease: "power3.out",
              scrollTrigger: trigger,
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
    <section
      ref={sectionRef}
      className=" relative w-screen ml-[calc(50%-50vw)] pt-28 pb-0"
    >
      <div>
        <div ref={headingRef} className="mx-auto mb-14 max-w-5xl px-6 text-center">
          <p className="b2b-eyebrow text-center">{copy.eyebrow}</p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <span
              aria-hidden="true"
              className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-zinc-400 sm:block"
            />
            <h2 className="max-w-2xl text-center text-3xl font-semibold tracking-[-0.04em] text-zinc-900 lg:text-5xl">
              {copy.title}
            </h2>
            <span
              aria-hidden="true"
              className="hidden h-px flex-1 bg-gradient-to-l from-transparent via-zinc-300 to-zinc-400 sm:block"
            />
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
            {copy.description}
          </p>
        </div>

        <div className="flex flex-col">
          {copy.services.map((service, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <HexFeatureRow
                badge={service.category}
                title={service.title}
                description={service.description}
                image={service.image}
                href={service.href}
                ctaLabel={copy.cta}
                reverse={i % 2 === 1}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
