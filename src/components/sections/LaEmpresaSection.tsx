/* client/src/components/sections/LaEmpresaSection.tsx */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

interface LaEmpresaSectionProps {
  title: string;
  description: string | ReactNode;
  reverse?: boolean;
  imageElement?: ReactNode;
  imageContainerClassName?: string;
  label?: string;
}

function getParagraphs(description: string) {
  return description.split(/\n\s*\n/).filter(Boolean);
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function LaEmpresaSection({
  title,
  description,
  reverse = false,
  imageElement,
  imageContainerClassName,
  label = "UNIDAD INDUSTRIAL",
}: LaEmpresaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { autoAlpha: 0, y: 40, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.from(".reveal-item", {
        y: 24,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-stone-100 py-20 lg:py-32 text-stone-900"
    >
      {/* Fondo editorial sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(28,25,23,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`grid lg:grid-cols-2 gap-14 lg:gap-24 items-center ${
            reverse ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Imagen */}
          <div
            className={`relative ${reverse ? "lg:order-2" : ""} ${imageContainerClassName || ""}`}
          >
            <div className="absolute -top-4 left-0 h-px w-20 bg-stone-400/70" />
            <div className="absolute -bottom-4 right-0 h-px w-20 bg-stone-300/80" />

            <div
              ref={imageRef}
              className="overflow-hidden  bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {imageElement}
            </div>

            <div className="absolute -bottom-5 left-6  bg-stone-800 px-4 py-2 text-[10px] font-mono tracking-[0.25em] text-stone-100 uppercase shadow-sm">
              Operación minera / Perú
            </div>
          </div>

          {/* Contenido */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="reveal-item h-px flex-1 bg-stone-300" />
                <span className="reveal-item font-mono text-[11px] tracking-[0.35em] uppercase text-stone-500">
                  {label}
                </span>
              </div>

              <h2 className="reveal-item max-w-3xl text-4xl lg:text-6xl font-semibold uppercase tracking-[-0.04em] leading-none text-stone-900">
                {title}
              </h2>
            </div>

            <div className="space-y-6 max-w-2xl">
              {typeof description === "string" ? (
                getParagraphs(description).map((p, i) => (
                  <p
                    key={i}
                    className="reveal-item text-base leading-relaxed text-stone-600"
                  >
                    {p}
                  </p>
                ))
              ) : (
                <div className="reveal-item text-base leading-relaxed text-stone-600">
                  {description}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}