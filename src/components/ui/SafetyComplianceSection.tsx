/** client/src/components/ui/SafetyComplianceSection.tsx */
/** Seguridad y Cumplimiento Operativo */

"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import type { Ref } from "react";

export type SafetyComplianceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
};

export type SafetyComplianceStandard = {
  label: string;
  icon?: LucideIcon;
  iconClassName?: string;
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

export default function SafetyComplianceSection({
  title,
  description,
  items,
  standardsTitle,
  standards = [],
  sectionRef,
  sectionClassName = "bg-stone-50 py-24 md:py-28",
}: SafetyComplianceSectionProps) {
  return (
    <section ref={sectionRef} className={sectionClassName}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-zinc-950 md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
            {description}
          </p>
        </motion.div>

        <div className="border-t border-zinc-300">
          {items.map(({ title: itemTitle, description: itemDescription, icon: Icon, iconClassName }, index) => (
            <motion.article
              key={itemTitle}
              initial={{ opacity: 0, x: -26 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="grid gap-5 border-b border-zinc-200 py-7 md:grid-cols-[72px_1fr] md:gap-8 md:py-9"
            >
              <div className="flex items-start md:justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white">
                  <Icon className={iconClassName ?? "h-5 w-5 text-zinc-700"} />
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-medium tracking-[-0.03em] text-zinc-950 md:text-[1.35rem]">
                  {itemTitle}
                </h3>
                <p className="mt-2 max-w-[62ch] text-sm leading-7 text-zinc-600 md:text-base">
                  {itemDescription}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {standardsTitle || standards.length ? (
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-14 border-t border-zinc-300 pt-10"
          >
            {standardsTitle ? (
              <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                {standardsTitle}
              </h3>
            ) : null}

            {standards.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {standards.map(({ label, icon: Icon, iconClassName }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5"
                  >
                    {Icon ? (
                      <Icon className={iconClassName ?? "h-4 w-4 flex-shrink-0 text-zinc-500"} />
                    ) : null}
                    <span className="text-sm font-medium text-zinc-700">{label}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}