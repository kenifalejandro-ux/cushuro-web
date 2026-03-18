/** client/src/components/ui/FeatureCardsSection.tsx */
/** Servicios Especializados*/

"use client";

import { motion } from "motion/react";
import type { ReactNode, Ref } from "react";

export type FeatureCardsSectionItem = {
  title: string;
  description?: string;
  icon: ReactNode;
};

type FeatureCardsSectionProps = {
  title: string;
  items: FeatureCardsSectionItem[];
  eyebrow?: string;
  description?: string;
  sectionClassName?: string;
  headingClassName?: string;
  titleClassName?: string;
  gridClassName?: string;
  itemClassName?: string;
  sectionRef?: Ref<HTMLElement>;
  hoverY?: number;
  variant?: "centered" | "detailed";
};

export default function FeatureCardsSection({
  title,
  items,
  eyebrow,
  description,
  sectionClassName = "bg-[#f3efe7] py-24",
  headingClassName = "mb-16 text-center",
  titleClassName = "text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl",
  gridClassName = "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
  itemClassName = "",
  sectionRef,
  hoverY = -4,
  variant = "centered",
}: FeatureCardsSectionProps) {
  return (
    <section ref={sectionRef} className={sectionClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={headingClassName}
        >
          {eyebrow ? (
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/85 px-4 py-2 shadow-[0_10px_24px_-18px_rgba(24,24,27,0.22)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-600">
                {eyebrow}
              </span>
            </div>
          ) : null}

          <h2 className={titleClassName}>{title}</h2>

          {description ? (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg"
            >
              {description}
            </motion.p>
          ) : null}
        </motion.div>

        <div className={gridClassName}>
          {items.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              className={itemClassName}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: hoverY, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              {variant === "detailed" ? (
                <article className="group relative h-full overflow-hidden rounded-[28px] border border-zinc-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,242,238,0.96))] p-8 shadow-[0_22px_48px_-34px_rgba(24,24,27,0.24)] transition-all duration-300">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-emerald-700/60 via-stone-400/30 to-transparent" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-900/10 bg-emerald-50 text-emerald-800 shadow-[0_16px_30px_-22px_rgba(5,150,105,0.38)] transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-100">
                    {item.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
                    {item.title}
                  </h3>

                  {item.description ? (
                    <p className="text-sm leading-7 text-zinc-600 md:text-[15px]">
                      {item.description}
                    </p>
                  ) : null}
                </article>
              ) : (
                <article className="group relative h-full overflow-hidden rounded-[28px] border border-zinc-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,241,236,0.96))] p-8 text-center shadow-[0_22px_46px_-34px_rgba(24,24,27,0.22)] transition-all duration-300">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-emerald-700/60 via-stone-400/30 to-transparent" />
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[20px] border border-emerald-900/10 bg-emerald-50 text-emerald-800 shadow-[0_16px_30px_-22px_rgba(5,150,105,0.34)] transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-100">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                    {item.title}
                  </h3>

                  {item.description ? (
                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      {item.description}
                    </p>
                  ) : null}
                </article>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
