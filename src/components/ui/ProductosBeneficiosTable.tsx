/* client/src/components/ui/ProductosBeneficiosTable.tsx */
/* Bloque 4 — Nuevas Ideas Comerciales: Producto → Beneficio en la Mina */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Flame, Drop, Funnel, Mountains, Cube, Lightning } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";
import SnapCarousel, { SnapCarouselItem } from "./SnapCarousel";
import { useMediaQuery } from "../../hooks/useMediaQuery";


gsap.registerPlugin(ScrollTrigger);

// Ícono temático por producto (mismo orden en es/en)
const ROW_ICONS = [Flame, Drop, Funnel, Mountains, Cube, Lightning];

export default function ProductosBeneficiosTable() {
  const sectionRef = useRef<HTMLElement>(null);
  // En mobile y tablet (<lg, 1024px) el layout va apilado: panel azul (oscuro)
  // y tarjetas (blanco). Por eso marcamos cada región por separado.
  const isStacked = useMediaQuery("(max-width: 1023px)");
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
      className={`${isStacked ? "" : "light-image"} relative `}
      
    >
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Fondo a sangre: blanco (izq) / azul (der) — solo desktop */}
      <div aria-hidden="true" className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
        <div className="bg-white" />
        <div className="bg-gradient-to-br from-[#0b2a4a] to-[#11375c]" />
      </div>

      {/* Contenido en max-w-7xl (el fondo sigue a sangre completa) */}
      <div className="relative mx-auto grid grid-cols-1 max-w-7xl lg:grid-cols-2">
        {/* Izquierda: tarjetas de productos (scrollean) */}
        <div className={`${isStacked ? "light-image " : ""}order-2 min-w-0 px-6 py-20 sm:px-10 lg:order-1 lg:py-24 lg:pl-0 lg:pr-12`}>
          <SnapCarousel until="lg" className="grid grid-cols-1 gap-6" bleed={false}>
          {copy.rows.map((row, i) => {
            const Icon = ROW_ICONS[i] ?? Cube;
            return (
              <SnapCarouselItem
                key={row.product}
                className={`beneficio-row group relative rounded-2xl border p-8 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-26px_rgba(0,0,0,0.18)] ${
                  row.highlight
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <div className="mb-5 flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                      row.highlight
                        ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                        : "border-zinc-200 bg-zinc-50 text-[#1d3461]"
                    }`}
                  >
                    <Icon size={24} weight="duotone" />
                  </span>
                  <h3
                    className={`text-lg font-semibold tracking-[-0.02em] ${
                      row.highlight ? "text-emerald-800" : "text-zinc-900"
                    }`}
                  >
                    {row.product}
                  </h3>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight
                    className={`mt-1 h-4 w-4 shrink-0 ${
                      row.highlight ? "text-emerald-500" : "text-zinc-300"
                    }`}
                  />
                  <p
                    className={`text-sm leading-7 ${
                      row.highlight ? "text-emerald-700 font-medium" : "text-zinc-600"
                    }`}
                  >
                    {row.benefit}
                  </p>
                </div>
              </SnapCarouselItem>
            );
          })}
          </SnapCarousel>
        </div>

        {/* Derecha: panel azul (azul en mobile, fondo a sangre en desktop) */}
        
        <div className={`${isStacked ? "dark-image " : ""}order-1 bg-gradient-to-br from-[#0b2a4a] to-[#11375c] px-6 py-20 sm:px-10 lg:order-2 lg:bg-none lg:py-24 lg:pl-12 lg:pr-0`}>
          <div className="max-w-md lg:ml-auto lg:sticky lg:top-28">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-400" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-emerald-300 uppercase">
                {copy.eyebrow}
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              {copy.title}
            </h2>
            <p className="text-lg leading-relaxed text-blue-100/90">{copy.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
