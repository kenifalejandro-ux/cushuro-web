/** client/src/components/ui/ProductIntroSection.tsx */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ParallaxSection } from "./ParallaxSection";

import ReorderImageStack from "./ReorderImageStack";

gsap.registerPlugin(ScrollTrigger);

type ProductIntroImage = {
  src: string;
  alt: string;
  priority?: boolean;
};

export type ProductIntroCard = {
  icon: LucideIcon;
  iconClassName?: string;
  title: string;
  description?: string;
  items?: string[];
  note?: string;
};

type ProductIntroSectionProps = {
  images: ProductIntroImage[];
  title: string;
  description: string;
  cards: ProductIntroCard[];
  eyebrow?: string;
};

export default function ProductIntroSection({
  images,
  title,
  description,
  cards,
  eyebrow = "",
}: ProductIntroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageParallaxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageParallaxRef.current,
        { y: 72 },
        {
          y: -72,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <ParallaxSection speed={0.12} className="bg-stone-100 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Imagen */}
            <div className="relative self-start lg:sticky lg:top-24">
              <motion.div
                ref={imageParallaxRef}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-[1.75rem] border border-stone-200/80 bg-[#f7f4ee] p-3 shadow-[0_18px_36px_-28px_rgba(24,24,27,0.16)] sm:p-5">
                  <ReorderImageStack images={images} />
                </div>
              </motion.div>
            </div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-700/55" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                {eyebrow}
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              {title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
              {description}
            </p>

            <div className="mt-12 space-y-5">
              {cards.map(
                ({
                  icon: Icon,
                  iconClassName,
                  title: cardTitle,
                  description,
                  items,
                  note,
                }) => (
                  <motion.article
                    key={cardTitle}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-stone-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,239,232,0.94))] p-6 shadow-[0_14px_28px_-24px_rgba(24,24,27,0.16)] transition-colors duration-300 hover:border-stone-300 sm:p-7"
                  >
                    <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-emerald-700/55 via-stone-400/25 to-transparent" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border border-stone-200 bg-stone-50">
                        <Icon
                          className={
                            iconClassName ??
                            "h-[18px] w-[18px] text-zinc-700"
                          }
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-medium tracking-[-0.02em] text-zinc-950">
                          {cardTitle}
                        </h3>

                        {description ? (
                          <p className="mt-2 text-sm leading-7 text-zinc-600 sm:text-[15px]">
                            {description}
                          </p>
                        ) : null}

                        {items && items.length > 0 ? (
                          <ul className="mt-4 space-y-2">
                            {items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm leading-7 text-zinc-600 sm:text-[15px]"
                              >
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700/70" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {note ? (
                          <p className="mt-4 border-t border-stone-200 pt-4 text-sm leading-7 text-zinc-500 sm:text-[15px]">
                            {note}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                )
              )}
            </div>
          </motion.div>
          </div>
        </div>
    </ParallaxSection>
  );
}
