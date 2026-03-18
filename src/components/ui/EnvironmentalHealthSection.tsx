/** client/src/components/ui/EnvironmentalHealthSection.tsx */
/** Salud Ambiental */

"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

export type EnvironmentalHealthItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type EnvironmentalHealthSectionProps = {
  title: string;
  intro: string;
  supportingText?: string;
  items: EnvironmentalHealthItem[];
  sectionClassName?: string;
};

export default function EnvironmentalHealthSection({
  title,
  intro,
  supportingText,
  items,
  sectionClassName = "bg-[linear-gradient(180deg,#eef1ea_0%,#f6f5ef_100%)] px-6 py-24 md:py-32",
}: EnvironmentalHealthSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-14 max-w-4xl overflow-hidden rounded-[2.25rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,245,239,0.95))] p-8 text-center shadow-[0_22px_54px_-34px_rgba(24,24,27,0.20)] md:p-12"
        >
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-emerald-700/60 via-stone-400/30 to-transparent" />
          <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/90 px-4 py-2 shadow-[0_10px_24px_-18px_rgba(24,24,27,0.2)]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-600">
              Salud Ambiental
            </span>
          </div>

          <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-zinc-900 md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-700 md:text-lg">
            {intro}
          </p>

          {supportingText ? (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
              {supportingText}
            </p>
          ) : null}
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title: itemTitle, description }, index) => (
            <motion.article
              key={`${itemTitle}-${index}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,244,238,0.96))] p-6 shadow-[0_18px_42px_-30px_rgba(24,24,27,0.18)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-emerald-700/55 via-stone-400/25 to-transparent" />
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.1rem] border border-emerald-900/10 bg-emerald-50 text-emerald-800 shadow-[0_14px_26px_-18px_rgba(5,150,105,0.28)] transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-100">
                <Icon className="h-5 w-5" />
              </div>

              <h4 className="text-base font-semibold tracking-tight text-zinc-900">
                {itemTitle}
              </h4>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
