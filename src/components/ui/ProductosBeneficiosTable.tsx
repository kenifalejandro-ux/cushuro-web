/* client/src/components/ui/ProductosBeneficiosTable.tsx */
/* Bloque 4 — Nuevas Ideas Comerciales: Producto → Beneficio en la Mina */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Flame, Drop, Funnel, Mountains, Cube, Lightning } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

// Ícono temático por producto (mismo orden en es/en)
const ROW_ICONS = [Flame, Drop, Funnel, Mountains, Cube, Lightning];

export default function ProductosBeneficiosTable() {
  const sectionRef = useRef<HTMLElement>(null);

  const copy = useLocalizedContent({
    es: {
      eyebrow: "NUEVAS IDEAS COMERCIALES",
      title: "Nuestros Productos en la Mina",
      subtitle:
        "Cada producto está diseñado para resolver un problema técnico específico en la operación minera. Conoce el beneficio directo de cada uno.",
      tableHeaders: ["Producto", "Beneficio directo en la mina"],
      rows: [
        {
          product: "Óxido de Calcio (Cal Viva)",
          benefit: "Máxima eficiencia en la regulación de pH en procesos metalúrgicos — celdas de flotación y pads de lixiviación.",
          highlight: true,
        },
        {
          product: "Cal Hidratada",
          benefit: "Estabilidad óptima para el tratamiento de efluentes y aguas de proceso en operaciones mineras.",
          highlight: false,
        },
        {
          product: "Cal Molida",
          benefit: "Aplicación precisa en dosificación para celdas de flotación, garantizando baja presencia de insolubles.",
          highlight: false,
        },
        {
          product: "Piedra Caliza",
          benefit: "Insumo base para procesos de neutralización en pads de lixiviación y tratamiento de drenaje ácido.",
          highlight: false,
        },
        {
          product: "Carbón Antracita",
          benefit: "Combustible de alta pureza para hornos industriales con mínima generación de impurezas en el proceso.",
          highlight: false,
        },
        {
          product: "Carbón Tipo Zisco",
          benefit: "Alternativa económica para procesos de calcinación con requerimientos energéticos intermedios.",
          highlight: false,
        },
      ],
      cta: "Solicitar cotización",
    },
    en: {
      eyebrow: "COMMERCIAL IDEAS",
      title: "Our Products in the Mine",
      subtitle:
        "Each product is designed to solve a specific technical problem in mining operations. Discover the direct benefit of each one.",
      tableHeaders: ["Product", "Direct benefit in the mine"],
      rows: [
        {
          product: "Calcium Oxide (Quicklime)",
          benefit: "Maximum efficiency in pH regulation in metallurgical processes — flotation cells and leach pads.",
          highlight: true,
        },
        {
          product: "Hydrated Lime",
          benefit: "Optimal stability for effluent and process water treatment in mining operations.",
          highlight: false,
        },
        {
          product: "Ground Lime",
          benefit: "Precise dosage application for flotation cells, guaranteeing low insoluble content.",
          highlight: false,
        },
        {
          product: "Limestone",
          benefit: "Base input for neutralization processes in leach pads and acid mine drainage treatment.",
          highlight: false,
        },
        {
          product: "Anthracite Coal",
          benefit: "High-purity fuel for industrial kilns with minimal impurity generation in the process.",
          highlight: false,
        },
        {
          product: "Zisco-type Coal",
          benefit: "Cost-effective alternative for calcination processes with intermediate energy requirements.",
          highlight: false,
        },
      ],
      cta: "Request a quote",
    },
  });

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".beneficio-row",
        { x: -20, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-14 text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#4fa81e]" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#4fa81e] uppercase">
              {copy.eyebrow}
            </span>
            <span className="h-px w-10 bg-[#4fa81e]" />
          </div>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-5xl mb-4">
            {copy.title}
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">{copy.subtitle}</p>
        </div>

        {/* Table */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.1)]">
          {/* Header row */}
          <div className="dark-image grid grid-cols-[1fr_1.6fr] bg-[linear-gradient(180deg,#171717_0%,#222020_58%,#2b2725_100%)] px-8 py-4">
            {copy.tableHeaders.map((h) => (
              <span key={h} className="font-mono text-[11px] tracking-[0.28em] uppercase text-zinc-400">
                {h}
              </span>
            ))}
          </div>

          {/* Data rows */}
          {copy.rows.map((row, i) => {
            const Icon = ROW_ICONS[i] ?? Cube;
            return (
            <div
              key={row.product}
              className={`beneficio-row grid grid-cols-[1fr_1.6fr] border-b border-zinc-100 px-8 py-6 transition-colors duration-200 last:border-0 hover:bg-zinc-50 ${
                row.highlight ? "bg-emerald-50" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-3.5 pr-6">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                    row.highlight
                      ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                      : "border-zinc-200 bg-zinc-50 text-[#1d3461]"
                  }`}
                >
                  <Icon size={20} weight="duotone" />
                </span>
                <span
                  className={`text-sm font-semibold tracking-[-0.01em] ${
                    row.highlight ? "text-emerald-800" : "text-zinc-900"
                  }`}
                >
                  {row.product}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-4 h-4 shrink-0 text-zinc-300" />
                <p
                  className={`text-sm leading-6 ${
                    row.highlight ? "text-emerald-700 font-medium" : "text-zinc-600"
                  }`}
                >
                  {row.benefit}
                </p>
              </div>
            </div>
            );
          })}
        </div>

        {/* Source note */}
        <p className="mt-6 text-center text-xs text-zinc-400 font-mono tracking-wider">
          Fuente técnica: estándares metalúrgicos del sector minero peruano
        </p>
      </div>
    </section>
  );
}
