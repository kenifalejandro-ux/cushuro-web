/**client/src/components/ui/ProductAdvantagesGrid.tsx */
/**ventajas competitivas — industrial minero */

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

export type ProductAdvantagesItem = {
  icon: LucideIcon;
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

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="dark-image relative overflow-hidden rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-[100px]  xl:rounded-[350px] bg-[#0c0d0e] py-28 text-stone-200 md:py-36">
      {/* Retícula tipo blueprint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(120%_100%_at_50%_0,#000,transparent_72%)]"
      />
      {/* Resplandor mineral */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_82%_-12%,rgba(217,119,6,0.13),transparent_58%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Barra superior: ficha técnica */}
        <div className="flex items-center justify-between gap-6 font-mono text-[11px] font-medium uppercase tracking-[0.22em]">
          <span className="text-amber-600">{copy.sheet}</span>
          {spec ? <span className="text-white/40">{spec}</span> : null}
        </div>

        {/* Encabezado */}
        <div className="mt-4 border-t border-white/12 pt-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.24em] text-amber-600">
                {eyebrow ?? copy.eyebrow}
              </p>
              <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-6xl">
                {title ?? copy.title}
              </h2>
            </div>

            <div className="flex items-end gap-4 border-l border-white/12 pl-5">
              <div className="flex flex-col gap-1.5 pb-4">
                <span className="h-[2px] w-5 bg-amber-600" />
                <span className="h-[2px] w-3 bg-amber/30" />
                <span className="h-[2px] w-4 bg-white/30" />
              </div>
              <span className="text-6xl font-bold leading-none tracking-[-0.04em] text-white md:text-7xl">
                {pad(items.length)}
              </span>
              <span className="flex flex-col pb-3 font-mono text-[11px] uppercase leading-tight tracking-[0.18em] text-white/50">
                <span>{copy.keyCapabilities.split(" ")[0]}</span>
                <span>{copy.keyCapabilities.split(" ").slice(1).join(" ")}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Rejilla de tarjetas */}
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {items.map(({ icon: Icon, text }, index) => (
            <motion.article
              key={`${text}-${index}`}
              className="group relative flex min-h-[300px] flex-col bg-[#141719] p-7 transition-colors duration-300 hover:bg-[#181c20] md:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Línea de acento superior */}
              <motion.div
                aria-hidden
                className="absolute inset-x-7 top-0 h-[2px] origin-left bg-gradient-to-r from-amber-600 to-transparent md:inset-x-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 + index * 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
              />

              {/* Cabecera de tarjeta */}
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[13px] font-semibold tracking-[0.18em] text-amber-600">
                  {pad(index + 1)}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.02] text-amber-600">
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
      </div>
    </section>
  );
}