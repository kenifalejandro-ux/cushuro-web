/** client/src/components/ui/SafetyComplianceSection.tsx */
/** Seguridad y Cumplimiento Operativo */

"use client";

import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import type { Ref } from "react";

export type SafetyComplianceItem = {
  title: string;
  description: string;
  icon: PhosphorIcon;
  iconClassName?: string;
};

export type SafetyComplianceStandard = {
  label: string;
  icon?: PhosphorIcon;
  iconClassName?: string;
  /** "primary" pinta el punto en azul (reglamento/auditoría); por defecto esmeralda. */
  tone?: "default" | "primary";
};

type SafetyComplianceSectionProps = {
  title: string;
  description: string;
  items: SafetyComplianceItem[];
  standardsTitle?: string;
  standards?: SafetyComplianceStandard[];
  sectionRef?: Ref<HTMLElement>;
  sectionClassName?: string;
};

/** Franja de acento (degradado esmeralda → azul, ADN de la web). */
function HazardBar() {
  return (
    <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-emerald-600 to-blue-700" />
  );
}

export default function SafetyComplianceSection({
  title,
  description,
  items,
  standardsTitle,
  standards = [],
  sectionRef,
  sectionClassName = "light-image bg-stone-50 py-24 md:py-28",
}: SafetyComplianceSectionProps) {
  return (
    <section ref={sectionRef} className={sectionClassName}>
      <div className="mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <HazardBar />
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-700">
              Operación segura
            </span>
            <HazardBar />
          </div>
          <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-zinc-950 md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
            {description}
          </p>
        </motion.div>

        {/* GRID DE PILARES — tarjetas numeradas con relieve */}
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map(
            ({ title: itemTitle, description: itemDescription, icon: Icon, iconClassName }, index) => (
              <motion.article
                key={itemTitle}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[22px] border border-zinc-200 bg-white p-8 shadow-[0_18px_40px_-34px_rgba(9,9,11,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-700 hover:shadow-[0_30px_56px_-34px_rgba(9,9,11,0.4)]"
              >
                {/* línea de acento que crece en hover */}
                <span className="absolute inset-x-8 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-emerald-600 to-blue-700 transition-transform duration-300 group-hover:scale-x-100" />
                {/* número fantasma */}
                <span className="pointer-events-none absolute right-6 top-4 font-mono text-[3.2rem] font-bold leading-none text-zinc-950/[0.05] transition-colors duration-300 group-hover:text-emerald-700/[0.16]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* chip de icono */}
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-[14px] border border-zinc-200 bg-stone-100 text-zinc-700 transition-all duration-300 group-hover:border-emerald-800 group-hover:bg-emerald-800 group-hover:text-emerald-50">
                  <Icon size={22} className={iconClassName} />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-[-0.02em] text-zinc-950 md:text-[1.22rem]">
                  {itemTitle}
                </h3>
                <p className="max-w-[52ch] text-sm leading-7 text-zinc-600">
                  {itemDescription}
                </p>
              </motion.article>
            ),
          )}
        </div>

        {/* BLOQUE NORMATIVO OSCURO — contraste para romper lo plano */}
        {standardsTitle || standards.length ? (
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="dark-image relative mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#171717_0%,#222020_58%,#2b2725_100%)] p-9 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] md:p-10"
          >
            {/* franja de acento lateral (esmeralda → azul) */}
            <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-emerald-500 to-blue-700" />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div>
                {standardsTitle ? (
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
                    {standardsTitle}
                  </div>
                ) : null}
                <h3 className="max-w-[22ch] text-2xl font-medium tracking-[-0.03em] text-stone-50">
                  Certificaciones y reglamento vigente
                </h3>
              </div>

              {standards.length ? (
                <div className="flex max-w-2xl flex-wrap gap-2.5">
                  {standards.map(({ label, icon: Icon, iconClassName, tone }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-white/[0.04] px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/60"
                    >
                      {Icon ? (
                        <Icon size={15} className={iconClassName ?? "flex-shrink-0 text-zinc-400"} />
                      ) : (
                        <span
                          className={`h-[7px] w-[7px] rounded-full ${
                            tone === "primary" ? "bg-blue-500" : "bg-emerald-500"
                          }`}
                        />
                      )}
                      <span className="text-sm font-medium text-zinc-200">{label}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}