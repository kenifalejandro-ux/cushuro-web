/** client/src/components/ui/FeatureCardsSection.tsx */
/** Servicios Especializados */

"use client";

import { motion } from "motion/react";
import type { ReactNode, Ref } from "react";
import { OptimizedImage } from "./OptimizedImage";
import SnapCarousel, { SnapCarouselItem } from "./SnapCarousel";

export type FeatureCardsSectionItem = {
  title: string;
  description?: string;
  icon: ReactNode;
  /** Foto opcional del banner. Si se omite, se usa un fondo mineral neutro. */
  image?: string;
  /** Etiqueta mono opcional (ej. coordenada / planta). */
  meta?: string;
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
  sectionClassName = "light-image bg-[#f3efe7] py-24",
  headingClassName = "mb-16 text-center",
  titleClassName = "text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl",
  gridClassName = "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
  itemClassName = "",
  sectionRef,
  hoverY = -6,
  variant = "detailed",
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
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-zinc-200  px-4 py-2 shadow-[0_10px_24px_-18px_rgba(24,24,27,0.22)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-950">
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

        <SnapCarousel until="lg" bleed={false} className={gridClassName}>
          {items.map((item, index) => {
            const num = String(index + 1).padStart(2, "0");
            return (
              <SnapCarouselItem key={`${item.title}-${index}`}>
              <motion.div
                className={`${itemClassName} h-full`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: hoverY, scale: 1.008 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-zinc-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,242,238,0.96))] shadow-[0_22px_48px_-34px_rgba(24,24,27,0.24)] transition-all duration-300 hover:shadow-[0_32px_60px_-32px_rgba(24,24,27,0.32)]">
                  {/* VISUAL — banner con foto + duotono esmeralda cohesivo */}
                  <div className="relative h-[168px] overflow-hidden">
                    {item.image ? (
                      <OptimizedImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 767px) 90vw, (max-width: 1024px) 50vw, 320px"
                        className="transition-transform duration-[600ms] group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,#e7e2d8_0%,#d8d2c6_100%)]" />
                    )}
                    {/* duotono: une el set y evita que se vea como fotos sueltas */}
                    <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(6,95,70,0.62)_0%,rgba(16,185,129,0.28)_55%,rgba(217,119,6,0.18)_100%)] opacity-[0.66] mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80" />
                    {/* velo inferior para fundir con la tarjeta */}
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(243,239,231,0.95)_0%,transparent_42%)]" />
                    {/* índice mono */}
                    <span className="absolute left-[1.1rem] top-4 font-mono text-[0.66rem] tracking-[0.18em] text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">
                      {num} / {String(items.length).padStart(2, "0")}
                    </span>
                    {/* bracket esquina */}
                    <div className="absolute right-4 top-[0.9rem] h-[26px] w-[26px] border-r-[1.5px] border-t-[1.5px] border-white/70" />
                    {item.meta ? (
                      <span className="absolute bottom-[0.7rem] left-[1.1rem] font-mono text-[0.6rem] tracking-[0.16em] text-emerald-900/70">
                        {item.meta}
                      </span>
                    ) : null}
                  </div>

                  {/* MEDALLÓN — icono solapando banner/contenido para dar profundidad */}
                  <div className="relative z-[2] -mt-8 px-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-emerald-900/10 bg-emerald-50 text-emerald-800 shadow-[0_18px_30px_-18px_rgba(5,150,105,0.5)] transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-emerald-100">
                      {item.icon}
                    </div>
                  </div>

                  {/* CONTENIDO */}
                  <div
                    className={`relative flex flex-1 flex-col px-8 pb-8 pt-5 ${
                      variant === "centered" ? "text-center" : ""
                    }`}
                  >
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-emerald-700/60 via-stone-400/30 to-transparent" />
                    <h3 className="mb-2.5 mt-3 text-xl font-semibold tracking-tight text-zinc-900 md:text-[1.35rem]">
                      {item.title}
                    </h3>
                    {item.description ? (
                      <p className="text-sm leading-7 text-zinc-600 md:text-[15px]">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </article>
              </motion.div>
              </SnapCarouselItem>
            );
          })}
        </SnapCarousel>
      </div>
    </section>
  );
}