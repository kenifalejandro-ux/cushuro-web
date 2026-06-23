/* client/src/components/ui/GarantiasSuministro.tsx */
/* Bloque 2: Garantía de Suministro — Capacidad Industrial e Infraestructura Operativa */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Flame, ShieldCheck, Truck } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function GarantiasSuministro() {
  const sectionRef = useRef<HTMLElement>(null);

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
      stats: [
        { value: "10", label: "Hornos Operativos", sub: "Régimen continuo 24/7" },
        { value: "900", label: "TM / Día", sub: "Capacidad de producción" },
        { value: "100%", label: "Abastecimiento Propio", sub: "Piedra caliza y carbón" },
      ],
      guarantee: "Garantía de continuidad: si un horno entra en mantenimiento preventivo, los demás mantienen el suministro sin interrupciones.",
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
      className="light-image relative overflow-hidden bg-stone-100 py-24 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4fa81e]/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-emerald-700" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-emerald-700 uppercase">
              {copy.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-5xl mb-4">
            {copy.title}
          </h2>
          <p className="text-lg text-zinc-900 leading-relaxed max-w-3xl">
            {copy.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {copy.cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
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
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="dark-image garantia-stats-grid grid grid-cols-3 divide-x divide-zinc-300 rounded-2xl border border-zinc-300 bg-[linear-gradient(180deg,#171717_0%,#222020_58%,#2b2725_100%)] overflow-hidden">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="garantia-stat px-8 py-8 text-center">
              <div className="text-4xl font-black font-mono text-emerald-400 tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-zinc-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-400">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Guarantee note */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-emerald-700/30 bg-emerald-50 px-6 py-4">
          <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
          <p className="text-sm text-emerald-800 leading-relaxed">{copy.guarantee}</p>
        </div>
      </div>
    </section>
  );
}
