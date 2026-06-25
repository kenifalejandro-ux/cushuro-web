/**client/src/components/ui/ProductAdvantagesGrid.tsx */
/**ventajas competitivas — industrial minero */

"use client";

import { motion } from "framer-motion";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";
import SwipeHint from "./SwipeHint";

export type ProductAdvantagesItem = {
  icon: PhosphorIcon;
  text: string;
};

type ProductAdvantagesGridProps = {
  items: ProductAdvantagesItem[];
  title?: string;
  eyebrow?: string;
  /** Etiqueta corta de la ficha técnica (parte superior derecha). */
  spec?: string;
  /** Prefijo del código de serie por tarjeta. Default: "VTJ". */
  codePrefix?: string;
};

export default function ProductAdvantagesGrid({
  items,
  title,
  eyebrow,
  spec,
  codePrefix = "VTJ",
}: ProductAdvantagesGridProps) {
  const copy = useLocalizedContent({
    es: {
      title: "Ventajas competitivas",
      eyebrow: "Capacidades diferenciales",
      keyCapabilities: "capacidades clave",
      sheet: "Ficha técnica",
    },
    en: {
      title: "Competitive advantages",
      eyebrow: "Differential capabilities",
      keyCapabilities: "key capabilities",
      sheet: "Spec sheet",
    },
  });

  const advScrollRef = useRef<HTMLDivElement>(null);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="relative overflow-hidden  bg-[#f1f1f1] py-28 text-stone-200 md:py-36">
      {/* Retícula tipo blueprint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255, 255, 255, 0.03)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(120%_100%_at_50%_0,#000,transparent_72%)]"
      />
      {/* Resplandor mineral */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_82%_-12%,rgba(217,119,6,0.13),transparent_58%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <div>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Label estilo "Capacidad Operativa": barra verde + punto con pulso + secundario */}
            <div className="max-w-3xl border-l-4 border-emerald-700 pl-5">
              <div className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-700">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
                  {eyebrow ?? copy.eyebrow}
                </span>
                <span className="text-stone-500">{spec ? `${copy.sheet} · ${spec}` : copy.sheet}</span>
              </div>
              <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-zinc-800 md:text-6xl">
                {title ?? copy.title}
              </h2>
            </div>

            <div className="flex items-end gap-4 border-l border-zinc-300 pl-5">
              <div className="flex flex-col gap-1.5 pb-4">
                <span className="h-[2px] w-5 bg-[#4fa81e]" />
                <span className="h-[2px] w-3 bg-[#4fa81e]/40" />
                <span className="h-[2px] w-4 bg-zinc-400" />
              </div>
              <span className="text-6xl font-bold leading-none tracking-[-0.04em] text-emerald-600 md:text-7xl">
                {pad(items.length)}
              </span>
              <span className="flex flex-col pb-3 font-mono text-[11px] uppercase leading-tight tracking-[0.18em] text-[#4fa81e]">
                <span>{copy.keyCapabilities.split(" ")[0]}</span>
                <span>{copy.keyCapabilities.split(" ").slice(1).join(" ")}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Rejilla de tarjetas */}
        <div ref={advScrollRef} className="mt-14 dark-image grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2 xl:grid-cols-3 max-lg:flex max-lg:snap-x max-lg:snap-mandatory max-lg:gap-4 max-lg:overflow-x-auto max-lg:border-0 max-lg:bg-transparent">
          {items.map(({ icon: Icon, text }, index) => (
            <motion.article
              key={`${text}-${index}`}
              className="group relative flex min-h-[300px] flex-col bg-[#141719] p-7 transition-colors duration-300 hover:bg-[#181c20] md:p-8 max-lg:w-[80vw] max-lg:max-w-[330px] md:max-lg:w-[46%] md:max-lg:max-w-none max-lg:shrink-0 max-lg:snap-center max-lg:rounded-2xl max-lg:border max-lg:border-white/10"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Línea de acento superior */}
              <motion.div
                aria-hidden
                className="absolute inset-x-7 top-0 h-[2px] origin-left bg-gradient-to-r from-[#4fa81e] to-transparent md:inset-x-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 + index * 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
              />

              {/* Cabecera de tarjeta */}
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[13px] font-semibold tracking-[0.18em] text-[#4fa81e]">
                  {pad(index + 1)}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.02] text-[#4fa81e]">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
              </div>

              {/* Texto de la ventaja */}
              <p className="mt-auto max-w-[18ch] pt-12 text-xl font-medium leading-[1.22] tracking-[-0.01em] text-stone-100">
                {text}
              </p>

              {/* Pie: regleta + código de serie */}
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-3.5">
                <span
                  aria-hidden
                  className="h-2.5 w-full max-w-[130px] [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.90)_0_1px,transparent_1px_9px)]"
                />
                <span className="whitespace-nowrap font-mono text-[11px] tracking-[0.14em] text-white/40">
                  {codePrefix}-{pad(index + 1)}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <SwipeHint targetRef={advScrollRef} until="lg" tone="light" />
      </div>
    </section>
  );
}