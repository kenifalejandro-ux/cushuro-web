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
                <div className="relative rounded-lg border border-stone-200/80 bg-stone-100 p-3 shadow-lg sm:p-5">
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
              <span className="h-px w-10 bg-brand-accent/60" />
              <span className="text-tech-md text-neutral-600">
                {eyebrow}
              </span>
            </div>

            <h2 className="max-w-xl text-display-md tracking-tight text-neutral-900 sm:text-display-lg">
              {title}
            </h2>

            <p className="mt-6 max-w-xl text-body-md leading-relaxed text-neutral-700 sm:text-body-lg">
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
                    className="group relative overflow-hidden rounded-lg border border-stone-200/90 bg-gradient-to-b from-white to-stone-50 p-6 shadow-md transition-all duration-base hover:border-neutral-300 hover:shadow-lg sm:p-7"
                  >
                    <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-brand-accent/60 via-stone-400/25 to-transparent" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-stone-100">
                        <Icon
                          className={
                            iconClassName ??
                            "h-[18px] w-[18px] text-neutral-700"
                          }
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-body-lg font-semibold text-neutral-900">
                          {cardTitle}
                        </h3>

                        {description ? (
                          <p className="mt-2 text-body-sm leading-relaxed text-neutral-700 sm:text-body-md">
                            {description}
                          </p>
                        ) : null}

                        {items && items.length > 0 ? (
                          <ul className="mt-4 space-y-2">
                            {items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-body-sm leading-relaxed text-neutral-700 sm:text-body-md"
                              >
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent/70" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {note ? (
                          <p className="mt-4 border-t border-neutral-300 pt-4 text-body-sm leading-relaxed text-neutral-600 sm:text-body-md">
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
