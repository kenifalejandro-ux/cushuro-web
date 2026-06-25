/** client/src/components/ui/SplitProcessFlow.tsx */
/**Metodologia Operativa */

/** client/src/components/ui/SplitProcessFlow.tsx */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import { useLocalizedContent } from "../../context/SiteLanguageContext";
import { OptimizedImage } from "./OptimizedImage";
import { ParallaxSection } from "./ParallaxSection";
import SwipeHint from "./SwipeHint";

gsap.registerPlugin(ScrollTrigger);

export type SplitProcessFlowStep = {
  step: string;
  title?: string;
  description: string;
  icon?: ReactNode;
};

type SplitProcessFlowProps = {
  title: string;
  description: string;
  eyebrow?: string;
  steps: SplitProcessFlowStep[];
  image?: {
    src: string;
    alt: string;
    aspectClassName?: string;
  };
  imagePosition?: "left" | "right";
  sectionClassName?: string;
};

export default function SplitProcessFlow({
  title,
  description,
  eyebrow = "Proceso operativo",
  steps,
  image,
  imagePosition = "left",
  sectionClassName = "light-image bg-stone-100 py-28 md:py-36",
}: SplitProcessFlowProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsScrollRef = useRef<HTMLDivElement>(null);
  const copy = useLocalizedContent({
    es: {
      eyebrow: "Proceso operativo",
    },
    en: {
      eyebrow: "Operational process",
    },
  });
  const imageAspectClassName = image?.aspectClassName ?? "aspect-[4/3]";
  const panelOrderClass = imagePosition === "right" ? "lg:order-2" : "lg:order-1";
  const stepsOrderClass = imagePosition === "right" ? "lg:order-1" : "lg:order-2";

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".split-process-step");

      gsap.fromTo(
        items,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [steps]);

  return (
    <ParallaxSection speed={0.12} className={sectionClassName}>
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className={`self-start lg:sticky lg:top-24 ${panelOrderClass}`}>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#6db820]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#6db820]">
                {eyebrow === "Proceso operativo" ? copy.eyebrow : eyebrow}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-zinc-950 md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-600 md:text-base">
              {description}
            </p>

            {image ? (
              <div className="mt-8 max-w-md overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white/70 shadow-[0_18px_36px_-34px_rgba(24,24,27,0.18)]">
                <div className={`relative ${imageAspectClassName}`}>
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 28rem"
                    className="scale-[1.01] object-cover grayscale-[12%] contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(24,24,27,0.08)_100%)]" />
                </div>
              </div>
            ) : null}
          </div>

          <div className={`min-w-0 ${stepsOrderClass}`}>
            <div ref={stepsScrollRef} className="border-t border-zinc-300 max-lg:flex max-lg:snap-x max-lg:snap-mandatory max-lg:gap-4 max-lg:overflow-x-auto max-lg:border-t-0 max-lg:pb-4">
            {steps.map(({ step, title: stepTitle, description: stepDescription, icon }) => {
              const displayStep = /^\d+$/.test(step) ? step.padStart(2, "0") : step;

              return (
                <article
                  key={`${step}-${stepTitle ?? stepDescription}`}
                  className="split-process-step grid grid-cols-[72px_1fr] gap-6 border-b border-zinc-200 py-8 md:grid-cols-[96px_1fr] md:gap-10 md:py-10 max-md:w-[80vw] max-md:max-w-[340px] md:max-lg:w-[46%] md:max-lg:max-w-none max-lg:shrink-0 max-lg:snap-center max-lg:rounded-2xl max-lg:border max-lg:border-zinc-200 max-lg:bg-white max-lg:px-6"
                >
                  <div className="pt-1">
                    <span className="block text-3xl font-light tracking-[-0.05em] text-zinc-400 md:text-5xl">
                      {displayStep}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      {stepTitle ? (
                        <h3 className="text-lg font-medium tracking-[-0.03em] text-zinc-950 md:text-2xl">
                          {stepTitle}
                        </h3>
                      ) : null}

                      {icon ? (
                        <div className="mt-1 hidden shrink-0 text-zinc-400 md:block">
                          {icon}
                        </div>
                      ) : null}
                    </div>

                    <p className="mt-3 max-w-[56ch] text-sm leading-7 text-zinc-600 md:text-base">
                      {stepDescription}
                    </p>
                  </div>
                </article>
              );
            })}
            </div>
            <SwipeHint targetRef={stepsScrollRef} until="lg" tone="light" />
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
