/**client/src/components/ui/ProductAdvantagesGrid.tsx */
/**ventajas competitivas */


"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type ProductAdvantagesItem = {
  icon: LucideIcon;
  text: string;
};

type ProductAdvantagesGridProps = {
  items: ProductAdvantagesItem[];
  title?: string;
  eyebrow?: string;
};

export default function ProductAdvantagesGrid({
  items,
  title = "Ventajas competitivas",
  eyebrow = "Capacidades diferenciales",
}: ProductAdvantagesGridProps) {
  return (
    <section className="bg-zinc-900/70 rounded-[0rem] light-image py-28 text-stone-100 md:py-36">
      <div className="mx-auto  max-w-6xl px-6">
        <div className="border-t border-white/12 pt-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-900">
                {eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-white md:text-5xl">
                {title}
              </h2>
            </div>

            <div className="flex items-end gap-3 border-l border-white/10 pl-5">
              <span className="text-4xl font-light tracking-[-0.05em] text-white md:text-5xl">
                {String(items.length).padStart(2, "0")}
              </span>

              <span className="pb-1 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-900">
                capacidades clave
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {items.map(({ icon: Icon, text }, index) => (
            <motion.article
              key={`${text}-${index}`}
              className="relative flex min-h-[280px] flex-col justify-between bg-zinc-100 px-6 py-7 md:px-8 md:py-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                className="absolute inset-x-4 top-0 h-[2px] bg-gradient-to-r from-emerald-700/75 via-stone-500/45 to-transparent md:inset-x-6"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 + index * 0.05 }}
                viewport={{ once: true, amount: 0.7 }}
                style={{ transformOrigin: "left center" }}
                aria-hidden
              />

              <div className="flex items-start justify-between gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-900">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="inline-flex h-12 w-12 items-center justify-center border border-white/10 text-emerald-700">
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </div>
              </div>

              <div className="mt-16">
                <p className="max-w-[17ch] text-xl font-medium leading-[1.22] tracking-[-0.03em] text-stone-900 md:text-xl">
                  {text}
                </p>
              </div>

              <motion.div
                className="mt-12 h-[2px] w-24 bg-gradient-to-r from-transparent via-zinc-500/55 to-zinc-900/75"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.14 + index * 0.05 }}
                viewport={{ once: true, amount: 0.7 }}
                style={{ transformOrigin: "right center" }}
                aria-hidden
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
