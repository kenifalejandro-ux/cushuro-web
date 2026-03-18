// client/src/components/sections/InicioSections.tsx

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

import ReorderImageStack from "../ui/ReorderImageStack";

gsap.registerPlugin(ScrollTrigger);

/* ================= TYPES ================= */

interface ContentIntroProps {
  title: string;
  description: string;
  reverse?: boolean;
  imageElement?: React.ReactNode;
  imageContainerClassName?: string;
}

interface AccordionItem {
  title: string;
  content: string;
}

/* ================= CONTENT SECTION ================= */

export function ContentIntro({
  title,
  description,
  reverse = true,
  imageElement,
  imageContainerClassName,
}: ContentIntroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const descriptionParagraphs = description
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const imageDirection = reverse ? 90 : -90;
      const textDirection = reverse ? -90 : 90;

      // Imagen reveal lateral
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            autoAlpha: 0,
            x: imageDirection,
            scale: 1.08,
            filter: "blur(8px)",
            clipPath: "inset(0 12% 0 12%)",
          },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            clipPath: "inset(0 0% 0 0%)",
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        const media = imageRef.current.querySelectorAll("img, picture, video");
        if (media.length) {
          gsap.fromTo(
            media,
            { x: imageDirection * 0.25, scale: 1.12 },
            {
              x: 0,
              scale: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      }

      // Título lateral
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { x: textDirection, y: 14, autoAlpha: 0, filter: "blur(6px)" },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      // Texto en stagger lateral
      if (textRef.current) {
        const paragraphs = textRef.current.querySelectorAll("p");
        gsap.fromTo(
          paragraphs.length ? paragraphs : textRef.current,
          { x: textDirection * 0.55, y: 14, autoAlpha: 0 },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            duration: 0.95,
            stagger: 0.12,
            ease: "power2.out",
            delay: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      // Línea vertical
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, autoAlpha: 0 },
          {
            scaleY: 1,
            autoAlpha: 1,
            transformOrigin: "top",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reverse, descriptionParagraphs.length]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 lg:py-36">
      <div
        className={`grid lg:grid-cols-2 gap-20 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Imagen */}
        <div className="w-full">
          <div
            ref={imageRef}
            className={`relative overflow-hidden rounded-2xl ${imageContainerClassName ?? ""}`}
            data-mining-image
          >
            <div className="transition-transform duration-700 ease-out">
              {imageElement}
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="max-w-xl space-y-5 sm:space-y-6 lg:space-y-7">
          <span className="inline-block text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-stone-500 after:mt-3 after:block after:h-px after:w-12 after:bg-zinc-300 after:content-['']">
            
          </span>

          <h2
            ref={titleRef}
            className="text-[clamp(2.4rem,4vw,5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-zinc-950"
          >
            {title}
          </h2>

          <div
            ref={textRef}
            className="space-y-5 text-sm leading-7 text-zinc-600 sm:text-base md:text-lg"
          >
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= MAIN ABOUT SECTION  COLLEGE IMAGES================= */

export default function IntroConcept() {
  return (
    <section className="relative">
      <ContentIntro
        title="Santa Isabel de Cushuro"
        description={`Somos una empresa con más de 15 años de trayectoria dedicada a la producción y comercialización de óxido de calcio para los sectores minero, agrícola e industrial.

Integramos planta, logística, capital humano y concesiones mineras no metálicas para asegurar continuidad operativa, calidad técnica y respuesta confiable en cada suministro.

Trabajamos con foco en seguridad, trazabilidad, medio ambiente y desarrollo local, consolidando una operación responsable en nuestras comunidades de influencia.`}
        imageContainerClassName="overflow-visible rounded-none"
        imageElement={
          <ReorderImageStack
            layout="stacked"
            images={[
              {
                src: "/img-inicio/inicio-img/img002",
                alt: "Comunicación como tensión creativa",
                priority: true, // 👈 SOLO ESTA
              },
              {
                src: "/img-inicio/inicio-img/img001",
                alt: "Colaboración como proceso creativo",
              },
              {
                src: "/img-inicio/inicio-img/img003",
                alt: "Colaboración como proceso creativo",
              },
            ]}
          />
        }
      />
    </section>
  );
}
