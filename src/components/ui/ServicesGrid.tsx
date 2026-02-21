/**client/src/components/ui/ServiceCard.tsx */

'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Cal Viva",
        category: "Producto industrial",
        image: "img/servicios-inicio/cal-viva/cal-viva",
        description:
            "Óxido de calcio de alta pureza utilizado en procesos industriales, metalúrgicos y de tratamiento químico."
    },
    {
        title: "Cal Agrícola",
        category: "Sector agrícola",
        image: "img/servicios-inicio/cal-agricola/calagricola",
        description:
            "Mejora la estructura del suelo, corrige acidez y optimiza la absorción de nutrientes en cultivos."
    },
    {
        title: "Piedra Caliza",
        category: "Materia prima",
        image: "img/servicios-inicio/piedra-caliza/piedra-caliza",
        description:
            "Mineral natural utilizado en construcción, producción de cal y aplicaciones industriales."
    },
    {
        title: "Carbón Antracita",
        category: "Combustible sólido",
        image: "img/servicios-inicio/Antracita-carbon",
        description:
            "Carbón de alto poder calorífico y baja emisión, ideal para procesos térmicos industriales."
    },
    {
        title: "Carbón tipo Cisco",
        category: "Uso industrial",
        image: "img/servicios-inicio/carbon-cisco/carbon-cisco",
        description:
            "Variante especializada para combustión eficiente en hornos y procesos metalúrgicos."
    },
    {
        title: "Transporte y Maquinaria",
        category: "Servicios",
        image: "img/servicios-inicio/transporte/servicio-de-transporte",
        description:
            "Flota y maquinaria pesada para transporte de materiales, movimiento de tierra y operaciones logísticas."
    }
];

export default function ServicesGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
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

            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const direction = index % 2 === 0 ? 90 : -90;

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

                const image = card.querySelector<HTMLElement>("[data-service-image]");
                if (image) {
                    gsap.fromTo(
                        image,
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="mb-12 text-center">
                    <h2 className="text-md lg:text-xl font-normal text-zinc-300">
                        CALERA SANTA ISABEL DE CUSHURO
                    </h2>
                    <p className="mt-3 text-2xl lg:text-4xl font-bold text-zinc-600">
                        Nuestros Servicios 
                    </p>
                </div>

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
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
