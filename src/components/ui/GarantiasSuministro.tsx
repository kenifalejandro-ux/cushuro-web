/* client/src/components/ui/GarantiasSuministro.tsx */
/* Bloque 2: Garantía de Suministro — Capacidad Industrial e Infraestructura Operativa */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Flame, ShieldCheck, Truck } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";
import SnapCarousel, { SnapCarouselItem } from "./SnapCarousel";
import { useMediaQuery } from "../../hooks/useMediaQuery";


gsap.registerPlugin(ScrollTrigger);

export default function GarantiasSuministro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // En mobile y tablet (<lg, 1024px) el layout va apilado: panel azul (oscuro)
  // arriba y tarjetas (blanco) abajo. Por eso marcamos cada región por separado.
  const isStacked = useMediaQuery("(max-width: 1023px)");
  const copy = useLocalizedContent({
    es: {
      eyebrow: "BLOQUE 2 — GARANTÍA DE SUMINISTRO",
      title: "Capacidad Industrial e Infraestructura Operativa",
      subtitle:
        "Al poseer concesiones propias de piedra caliza y carbón, la empresa no depende de terceros para producir. Este es el principal diferencial frente a la competencia.",
      cards: [
        {
          icon: ShieldCheck,
          accent: "bg-emerald-600",
          tag: "100% ABASTECIMIENTO",
          title: "Mitigación de Riesgos Logísticos",
          description:
            "Concesiones propias de piedra caliza y carbón garantizan control total de la cadena de suministro, sin dependencia de proveedores externos.",
        },
        {
          icon: Flame,
          accent: "bg-[#4fa81e]",
          tag: "OPERACIÓN 24/7",
          title: "Continuidad Operativa Ininterrumpida",
          description:
            "10 hornos industriales en régimen continuo aseguran producción sostenida de 900 TM/día, con respuesta inmediata ante cualquier eventualidad del sector minero.",
        },
        {
          icon: Truck,
          accent: "bg-zinc-500",
          tag: "RESILIENCIA",
          title: "Alta Capacidad de Respuesta",
          description:
            "Si un horno entra en mantenimiento preventivo, la planta mantiene alta capacidad operativa sin interrumpir el suministro al cliente.",
        },
      ],

    },
    en: {
      eyebrow: "BLOCK 2 — SUPPLY GUARANTEE",
      title: "Industrial Capacity and Operational Infrastructure",
      subtitle:
        "By owning limestone and coal concessions, the company does not depend on third parties for production. This is the main differentiator from competitors.",
      cards: [
        {
          icon: ShieldCheck,
          accent: "bg-emerald-600",
          tag: "100% SUPPLY",
          title: "Logistics Risk Mitigation",
          description:
            "Owned limestone and coal concessions guarantee full supply chain control, with no dependency on external suppliers.",
        },
        {
          icon: Flame,
          accent: "bg-[#4fa81e]",
          tag: "24/7 OPERATION",
          title: "Uninterrupted Operational Continuity",
          description:
            "10 industrial kilns in continuous operation secure sustained production of 900 MT/day, with immediate response to any mining sector demand.",
        },
        {
          icon: Truck,
          accent: "bg-zinc-500",
          tag: "RESILIENCE",
          title: "High Response Capacity",
          description:
            "If one kiln undergoes preventive maintenance, the plant maintains high operational capacity without interrupting client supply.",
        },
      ],
      stats: [
        { value: "10", label: "Operating Kilns", sub: "Continuous regime 24/7" },
        { value: "900", label: "MT / Day", sub: "Production capacity" },
        { value: "100%", label: "Own Supply", sub: "Limestone and coal" },
      ],
      guarantee: "Continuity guarantee: if one kiln undergoes preventive maintenance, the others maintain supply without interruption.",
    },
  });

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".garantia-card",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
      gsap.fromTo(
        ".garantia-stat",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".garantia-stats-grid",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${isStacked ? "" : "light-image"} relative `}
    >
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#4fa81e]/40 to-transparent" />

      {/* Fondo a sangre: mitad azul (izq) / blanco (der) — solo desktop */}
      <div aria-hidden="true" className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
        <div className="bg-gradient-to-br from-[#0b2a4a] to-[#11375c]" />
        <div className="bg-white" />
      </div>

      {/* Contenido en max-w-7xl (el fondo sigue a sangre completa) */}
      <div className="relative mx-auto grid grid-cols-1 max-w-7xl lg:grid-cols-2">
        {/* Izquierda: encabezado sticky (azul en mobile, fondo a sangre en desktop) */}
        <div className={`${isStacked ? "dark-image " : ""}bg-gradient-to-br from-[#0b2a4a] to-[#11375c] px-6 py-20 sm:px-10 lg:bg-none lg:py-28 lg:pl-0 lg:pr-12`}>
          <div className="max-w-md lg:sticky lg:top-28">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-12 bg-emerald-400" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-emerald-300 uppercase">
                {copy.eyebrow}
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              {copy.title}
            </h2>
            <p className="text-lg leading-relaxed text-blue-100/90">
              {copy.subtitle}
            </p>
          </div>
        </div>

        {/* Derecha: tarjetas (scrollean mientras el panel queda fijo) */}
        <div className={`${isStacked ? "light-image " : ""}min-w-0 px-6 py-20 sm:px-10 lg:py-28 lg:pl-12 lg:pr-0`}>
          <SnapCarousel until="lg" className="grid grid-cols-1 gap-6" bleed={false}>
            {copy.cards.map((card) => {
            const Icon = card.icon;
            return (
              <SnapCarouselItem
                key={card.tag}
                className="garantia-card group relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-26px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${card.accent} text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="mt-1 font-mono text-[10px] tracking-[0.28em] text-zinc-900 uppercase">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-3 tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-600">
                  {card.description}
                </p>
              </SnapCarouselItem>
            );
          })}
          </SnapCarousel>
        </div>
      </div>
    </section>
  );
}
