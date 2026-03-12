/** client/src/components/ui/PilaresGrid.tsx */

"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

type PilarService = {
  title: string;
  category: string;
  image: string;
  description: string;
  showColorAlways?: boolean;
};

const services: PilarService[] = [
  {
    title: "Día del Minero",
    category: "Cultura Organizacional",
    image: "img-responsabilidad-social/pilares-img/imagenes/img001",
    description:
      "Homenaje y reconocimiento a la labor de nuestros colaboradores, fortaleciendo la identidad y el bienestar del trabajador minero.",
  },
  {
    title: "Evento deportivo",
    category: "Deporte y Salud",
    image: "img-responsabilidad-social/pilares-img/imagenes/img002",
    description:
      "Impulsamos la integración comunitaria y el estilo de vida saludable mediante la práctica deportiva en nuestra región.",
  },
  {
    title: "Regalo de canastas navideñas - Rodeopampa",
    category: "Compromiso Social",
    image: "img-responsabilidad-social/pilares-img/imagenes/img003",
    description:
      "Distribución de apoyo solidario en el caserío Rodeopampa, compartiendo bienestar con las familias locales en fechas festivas.",
  },
  {
    title: "Regalo de canastas navideñas - Huamachuco",
    category: "Proyección Social",
    image: "img-responsabilidad-social/pilares-img/imagenes/img004",
    description:
      "Acciones de solidaridad dirigidas a la población de Huamachuco, reafirmando nuestro compromiso de apoyo a la provincia.",
  },
  {
    title: "Compartir con los niños",
    category: "Educación y Niñez",
    image: "img-responsabilidad-social/pilares-img/imagenes/img005",
    description:
      "Actividades de sano esparcimiento y apoyo infantil para mejorar la calidad de vida de las nuevas generaciones de nuestra zona.",
  },
  {
    title: "Actividad Cultural",
    category: "Identidad Local",
    image: "img-responsabilidad-social/pilares-img/imagenes/img006",
    description:
      "Fomento y respeto por las costumbres locales e idiosincrasia de la población, promoviendo la interculturalidad.",
  },
  {
    title: "Actividad de limpieza - Rodeopampa",
    category: "Actividad de limpieza",
    image: "/img-medio-ambiente/reforestacion-activa/limpieza",
    description:
      "Jornada de limpieza destacando su compromiso con la conservación del medio ambiente.",
  },
  {
    title: "Entrega de canastas navideñas - Marcabal",
    category: "Responsabilidad Social",
    image: "img-responsabilidad-social/pilares-img/imagenes/img008",
    description:
      "Soporte directo a las familias del distrito de Marcabal, buscando generar un impacto positivo en la comunidad.",
  },
  {
    title: "Entrega de canastas navideñas - Equipo San Isabel de Cushuro",
    category: "Relaciones Comunitarias",
    image: "img-responsabilidad-social/pilares-img/imagenes/img009",
    description:
      "Iniciativa de proyección social liderada por Equipo San Isabel de Cushuro, reafirmando nuestro compromiso con el bienestar de las familias en nuestras zonas de influencia operativa.",
  },
];

export default function PilaresGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const img = card.querySelector<HTMLImageElement>("img");
          if (!img) return;

          const shouldShowColorAlways = services[index]?.showColorAlways ?? true;
          if (shouldShowColorAlways) {
            gsap.set(img, { filter: "grayscale(0%)" });
            return;
          }

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
    <section ref={sectionRef} className="dark-image py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <ServiceCard
                {...service}
                priority={i === 0}
                showColorAlways={service.showColorAlways ?? true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
