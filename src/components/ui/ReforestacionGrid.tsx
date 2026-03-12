/** client/src/components/ui/ReforestacionGrid.tsx */

"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, ShieldCheck, Users } from "lucide-react";
import { useEffect, useRef } from "react";

import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const reforestationCards = [
  {
    title: "Plantación de Especies Nativas",
    category: "Restauración ecológica",
    description:
      "Siembra anual de miles de árboles nativos en zonas degradadas, restaurando el equilibrio ecológico y capturando carbono.",
    image: "/img-medio-ambiente/hero/medio-ambiente/reforestacion-medio-ambiente",
    icon: Leaf,
  },
  {
    title: "Monitoreo y Mantenimiento",
    category: "Sostenibilidad forestal",
    description:
      "Seguimiento técnico continuo y cuidado de los bosques plantados para garantizar su supervivencia y crecimiento óptimo.",
    image: "/img-medio-ambiente/sostenibilidad-forestal/monitoreo-mantenimiento",
    icon: ShieldCheck,
  },
  {
    title: "Educación y Comunidad",
    category: "Impacto social",
    description:
      "Participación activa en el cuidado del medio ambiente a través de programas de limpieza y conservación del medio ambiente.",
    image: "/img-medio-ambiente/reforestacion-activa/limpieza",
    icon: Users,
  },
];

export default function ReforestacionGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const headingNodes = headingRef.current.querySelectorAll("h2, div");
        gsap.fromTo(
          headingNodes,
          { autoAlpha: 0, y: 30, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const direction = index % 2 === 0 ? 90 : -90;

        gsap.fromTo(
          card,
          { autoAlpha: 0, x: direction, y: 40, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              once: true,
            },
          }
        );

        const imageContainer = card.querySelector<HTMLElement>("[data-service-image]");
        const image = card.querySelector<HTMLImageElement>("img");
        const iconContainer = card.querySelector<HTMLElement>("[data-service-icon]");
        const content = card.querySelector<HTMLElement>("[data-service-content]");
        if (!imageContainer || !image) return;

        if (content) {
          gsap.fromTo(
            content,
            { autoAlpha: 0, y: 16 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              delay: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
                once: true,
              },
            }
          );
        }

        // Imagen oculta al inicio en todos los tamaños.
        gsap.set(imageContainer, {
          autoAlpha: 0,
          scale: 0.95,
        });
        gsap.set(image, { filter: "grayscale(100%)" });
        if (iconContainer) {
          gsap.set(iconContainer, { autoAlpha: 1, scale: 1 });
        }

        mm.add("(min-width: 431px)", () => {
          const onEnter = () => {
            gsap.to(imageContainer, {
              autoAlpha: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            });
            gsap.to(image, {
              filter: "grayscale(0%)",
              duration: 0.8,
              ease: "power3.out",
            });
            if (iconContainer) {
              gsap.to(iconContainer, {
                autoAlpha: 0,
                scale: 0.92,
                duration: 0.55,
                ease: "power2.out",
              });
            }
          };

          const onLeave = () => {
            gsap.to(imageContainer, {
              autoAlpha: 0,
              scale: 0.95,
              duration: 0.6,
              ease: "power2.out",
            });
            gsap.to(image, {
              filter: "grayscale(100%)",
              duration: 0.6,
              ease: "power2.out",
            });
            if (iconContainer) {
              gsap.to(iconContainer, {
                autoAlpha: 1,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          };

          card.addEventListener("mouseenter", onEnter);
          card.addEventListener("mouseleave", onLeave);

          return () => {
            card.removeEventListener("mouseenter", onEnter);
            card.removeEventListener("mouseleave", onLeave);
          };
        });

        mm.add("(max-width: 430px)", () => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(imageContainer, {
                autoAlpha: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out",
              });
              gsap.to(image, {
                filter: "grayscale(0%)",
                duration: 1,
                ease: "power3.out",
              });
              if (iconContainer) {
                gsap.to(iconContainer, {
                  autoAlpha: 0,
                  scale: 0.92,
                  duration: 0.85,
                  ease: "power3.out",
                });
              }
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
    <section ref={sectionRef} className="py-32 px-6 bg-zinc-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="mb-24 text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">Reforestación Activa</h2>
          <div className="h-[1px] w-24 bg-emerald-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reforestationCards.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <ServiceCard
                title={card.title}
                category={card.category}
                description={card.description}
                image={card.image}
                icon={card.icon}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
