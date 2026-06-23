/** client/src/components/ui/ReforestacionGrid.tsx */

"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, ShieldCheck, UsersThree } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

import { useLocalizedContent } from "../../context/SiteLanguageContext";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

export default function ReforestacionGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const copy = useLocalizedContent({
    es: {
      title: "Reforestación Activa",
      cards: [
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
          icon: UsersThree,
        },
      ],
    },
    en: {
      title: "Active Reforestation",
      cards: [
        {
          title: "Native Species Planting",
          category: "Ecological restoration",
          description:
            "Annual planting of thousands of native trees in degraded areas, restoring ecological balance and capturing carbon.",
          image: "/img-medio-ambiente/hero/medio-ambiente/reforestacion-medio-ambiente",
          icon: Leaf,
        },
        {
          title: "Monitoring and Maintenance",
          category: "Forest sustainability",
          description:
            "Continuous technical monitoring and care of planted forests to ensure their survival and optimal growth.",
          image: "/img-medio-ambiente/sostenibilidad-forestal/monitoreo-mantenimiento",
          icon: ShieldCheck,
        },
        {
          title: "Education and Community",
          category: "Social impact",
          description:
            "Active environmental care through cleanup and conservation programs developed with the community.",
          image: "/img-medio-ambiente/reforestacion-activa/limpieza",
          icon: UsersThree,
        },
      ],
    },
  });

  useEffect(() => {
    if (!sectionRef.current) return;

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

        const imageContainer = card.querySelector<HTMLElement>("[data-service-image]");
        const image = card.querySelector<HTMLImageElement>("img");
        const iconContainer = card.querySelector<HTMLElement>("[data-service-icon]");
        const content = card.querySelector<HTMLElement>("[data-service-content]");

        const xOffset = index % 2 === 0 ? 60 : -60;

        gsap.set(card, { autoAlpha: 0, x: xOffset, y: 30, filter: "blur(8px)" });
        if (imageContainer) gsap.set(imageContainer, { autoAlpha: 0, scale: 0.95 });
        if (image) gsap.set(image, { filter: "grayscale(50%)" });
        if (iconContainer) gsap.set(iconContainer, { autoAlpha: 1, scale: 1 });
        if (content) gsap.set(content, { autoAlpha: 0, y: 14 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 86%",
          once: true,
          onEnter: () => {
            const tl = gsap.timeline({ delay: index * 0.1 });

            tl.to(card, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power3.out",
            });

            if (content) {
              tl.to(
                content,
                { autoAlpha: 1, y: 0, duration: 0.75, ease: "power2.out" },
                "-=0.65"
              );
            }

            if (imageContainer) {
              tl.to(
                imageContainer,
                { autoAlpha: 1, scale: 1, duration: 0.9, ease: "power3.out" },
                "-=0.5"
              );
            }

            if (image) {
              tl.to(
                image,
                { filter: "grayscale(0%)", duration: 0.9, ease: "power2.out" },
                "<"
              );
            }

            if (iconContainer) {
              tl.to(
                iconContainer,
                { autoAlpha: 0, scale: 0.88, duration: 0.45, ease: "power2.in" },
                "<+=0.1"
              );
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="dark-image py-32 px-6 bg-[linear-gradient(180deg,#171717_0%,#222020_58%,#2b2725_100%)] text-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="mb-24 text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">{copy.title}</h2>
          <div className="h-[1px] w-24 bg-emerald-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {copy.cards.map((card, i) => (
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
