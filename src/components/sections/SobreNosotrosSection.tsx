import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";
import { OptimizedImage } from "../ui/OptimizedImage";

gsap.registerPlugin(ScrollTrigger);

/* ================= TYPES ================= */

interface ContentSectionProps {
  title: string;
  description: string;
  reverse?: boolean;
  imageElement?: React.ReactNode;
}

interface AccordionItem {
  title: string;
  content: string;
}

/* ================= CONTENT SECTION ================= */

export function ContentSection({
  title,
  description,
  reverse = false,
  imageElement,
}: ContentSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Imagen slice reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Título
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 12,
          opacity: 0,
          filter: "blur(4px)",
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        });
      }

      // Texto
      if (textRef.current) {
        gsap.from(textRef.current, {
          y: 16,
          opacity: 0,
          duration: 0.9,
          delay: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        });
      }

      // Línea vertical
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative dark-image overflow-hidden py-32 lg:py-48 "
    >

      <div
        className={`grid lg:grid-cols-2 gap-20 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Imagen */}
        <div className="w-full">
          <div
            ref={imageRef}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="transition-transform duration-[1200ms] ease-out hover:scale-[1.02]">
              {imageElement}
            </div>
          </div>                                    
        </div>

        {/* Texto */}
        <div className="space-y-6 max-w-xl">
          <h2
            ref={titleRef}
            className="text-[clamp(2.4rem,5vw,4rem)] font-light tracking-tight"
          >
            {title}
          </h2>

          <p
            ref={textRef}
            className="text-neutral-600 leading-relaxed text-lg"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= MAIN ABOUT SECTION ================= */

export default function AboutConcept() {
  return (
    <section className="relative">
      <ContentSection
        title="¿Por qué trabajar conmigo?"
        description="Como creador independiente, me involucro directamente en cada proyecto. No delego tu marca: diseño soluciones a medida en web, branding y 3D, alineadas a tus objetivos reales."
        imageElement={
          <OptimizedImage
            src="/imagenes-optim/quienes-somos/imagenes/conceptos/comunicacion-tension"
            alt="Comunicación como tensión creativa"
            className="w-full h-[420px] lg:h-[500px] object-cover"
            priority // 👈 SOLO ESTA
            sizes="(max-width: 640px) 563px,
               (max-width: 1024px) 768px,
               1024px"
          />
        }
      />
    
      <ContentSection
        title="Colaboración cercana"
        description="Trabajo contigo de forma clara y honesta, manteniendo comunicación constante para que el resultado final represente exactamente lo que tu marca necesita."
        reverse
        imageElement={
          <OptimizedImage
            src="/imagenes-optim/quienes-somos/imagenes/conceptos/comunicacion-acercamiento"
            alt="Colaboración como proceso creativo"
            className="w-full h-[420px] lg:h-[500px] object-cover"
            priority // 👈 SOLO ESTA
            sizes="(max-width: 640px) 563px,
               (max-width: 1024px) 768px,
               1024px"
          />
        }
      />

      <ContentSection
        title="Diseños que evolucionan"
        description="Desarrollo sitios web, marcas y visuales 3D con tecnologías modernas, pensados para escalar y adaptarse al crecimiento de tu negocio."
        imageElement={
          <OptimizedImage
            src="/imagenes-optim/quienes-somos/imagenes/conceptos/comunicacion-evolucion"
            alt="Diseño como evolución constante"
            className="w-full h-[420px] lg:h-[500px] object-cover"
            priority // 👈 SOLO ESTA
            sizes="(max-width: 640px) 563px,
               (max-width: 1024px) 768px,
               1024px"
          />
        }
      />
    </section>
  );
}

/* ================= LAPTOP SECTION ================= 

export function LaptopSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  
  }, []);

  return (
    <section ref={ref} className="py-32 lg:py-40">
      <div className="max-w-3xl space-y-6">
        <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-light tracking-tight">
          Creando experiencias digitales con propósito
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          En Zincel diseñamos sitios web, identidades visuales y experiencias 3D
          que no solo se ven bien, sino que cumplen objetivos reales.
        </p>
      </div>
    </section>
  );
}
  */

/* ================= ACCORDION ================= */

export function SobreNosotrosSectionAccordion({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const items: AccordionItem[] = [
    {
      title: "Desarrollo web",
      content:
        "Creamos sitios web modernos, rápidos y optimizados con tecnologías actuales.",
    },
    {
      title: "Branding",
      content:
        "Construimos identidades visuales coherentes que conectan con tu audiencia.",
    },
    {
      title: "Modelado 3D",
      content:
        "Diseñamos experiencias visuales en 2D y 3D que elevan tu marca.",
    },
    {
      title: "Diseño UX/UI",
      content:
        "UI es la apariencia visual. UX es la experiencia completa. Juntos crean productos digitales que las personas aman usar..",
    },
  ];

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-32 lg:py-40">
      <div
        className={`grid lg:grid-cols-2 gap-20 items-start ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Accordion */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b border-neutral-200">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-2xl font-light">{item.title}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-48 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-neutral-600 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
