/** client/src/components/ui/ProductTeamSection.tsx */
/** ejemplo: Mano de Obra por Horno (35 TM) */

"use client";

import { Users } from "lucide-react";
import { motion } from "motion/react";

export type ProductTeamMember = {
  role: string;
  workers: number | string;
};

type ProductTeamSectionProps = {
  title: string;
  members: ProductTeamMember[];
  totalValue: number | string;
  totalLabel: string;
  accentClassName?: string;
  gridWidthClassName?: string;
};

export default function ProductTeamSection({
  title,
  members,
  totalValue,
  totalLabel,
  accentClassName = "text-emerald-700",
  gridWidthClassName = "max-w-5xl",
}: ProductTeamSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-zinc-300" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
              Estructura Operativa
            </span>
            <span className="h-px w-12 bg-zinc-300" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            {title}
          </h2>
        </motion.div>

        {/* Grid principal */}
        <div className={`mx-auto grid gap-5 md:grid-cols-2 ${gridWidthClassName}`}>
          {members.map(({ role, workers }, index) => (
            <motion.article
              key={`${role}-${index}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-zinc-200 bg-white px-6 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 h-[3px] w-12 rounded-full bg-zinc-900" />

              <div className="flex items-center justify-between gap-4">
                <div className="max-w-[75%]">
                  <h3 className="text-base font-medium leading-relaxed text-zinc-900 md:text-lg">
                    {role}
                  </h3>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-2.5">
                  <Users className={`h-4 w-4 ${accentClassName}`} />
                  <span className={`text-2xl font-semibold tracking-tight ${accentClassName}`}>
                    {workers}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Total */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-950 px-8 py-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
              <div className="mx-auto mb-4 h-[3px] w-16 rounded-full bg-emerald-500" />
              <div className="mb-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {totalValue}
              </div>
              <div className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-300 md:text-base">
                {totalLabel}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}