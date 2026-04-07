/** client/src/components/ui/ProductProcessFlow.tsx */
/** componente para procesos de productos */
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { OptimizedImage } from "./OptimizedImage";
import { ParallaxSection } from "./ParallaxSection";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

export type ProductProcessFlowStep = {
  step: string;
  title: string;
  description: string;
  icon?: ReactNode;
  image?: {
    src: string;
    alt: string;
    aspectClassName?: string;
  };
};

type ProductProcessFlowProps = {
  title: string;
  description: string;
  eyebrow?: string;
  steps: ProductProcessFlowStep[];
  image?: {
    src: string;
    alt: string;
    aspectClassName?: string;
  };
};

export default function ProductProcessFlow({
  title,
  description,
  eyebrow,
  steps,
  image,
}: ProductProcessFlowProps) {
  const copy = useLocalizedContent({
    es: {
      eyebrow: "Secuencia operativa",
    },
    en: {
      eyebrow: "Operational sequence",
    },
  });
  const flowRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fallbackAspectClassName = image?.aspectClassName ?? "aspect-[4/3]";

  useEffect(() => {
    if (!flowRef.current) return;

    const ctx = gsap.context(() => {
      const items = itemRefs.current.filter(Boolean) as HTMLElement[];

      gsap.fromTo(
        items,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: flowRef.current,
            start: "top 75%",
          },
        }
      );

      items.forEach((item, index) => {
        const number = item.querySelector<HTMLElement>(".process-step-number");
        const lineFill = item.querySelector<HTMLElement>(".process-step-line-fill");
        const node = item.querySelector<HTMLElement>(".process-step-node");

        if (lineFill) {
          gsap.set(lineFill, { scaleY: 0, transformOrigin: "top center" });
        }

        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 55%",
            end: "bottom 50%",
            scrub: 0.6,
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          },
        })
          .to(
            number,
            {
              color: "#111827",
              duration: 1,
              ease: "none",
            },
            0
          )
          .to(
            node,
            {
              borderColor: "rgba(16,185,129,0.55)",
              backgroundColor: "rgba(255,255,255,0.88)",
              boxShadow: "0 0 0 8px rgba(59, 130, 246, 0.12)",
              duration: 1,
              ease: "none",
            },
            0
          )
          .to(
            lineFill,
            {
              scaleY: 1,
              duration: 1,
              ease: "none",
            },
            0
          );
      });
    }, flowRef);

    return () => ctx.revert();
  }, [steps]);

  const currentImage =
    steps[activeIndex]?.image ??
    image ?? {
      src: "",
      alt: "",
      aspectClassName: fallbackAspectClassName,
    };

  const currentAspectClassName =
    steps[activeIndex]?.image?.aspectClassName ??
    image?.aspectClassName ??
    "aspect-[4/3]";

  return (
    <ParallaxSection speed={0.40} className="bg-zinc-100 rounded-[0rem] py-28 md:py-36">
      <div ref={flowRef} className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="self-start lg:sticky lg:top-24">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500">
              {eyebrow ?? copy.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-zinc-950 md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-600 md:text-base">
              {description}
            </p>

            {currentImage?.src ? (
              <div className="mt-8 max-w-md overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white/70 shadow-[0_18px_36px_-34px_rgba(24,24,27,0.18)]">
                <div className={`relative ${currentAspectClassName}`}>
                  {steps.map((stepItem, index) => {
                    const stepImage = stepItem.image ?? image;
                    if (!stepImage?.src) return null;

                    const isActive = index === activeIndex;

                    return (
                      <div
                        key={`process-image-${stepItem.step}-${index}`}
                        className={`absolute inset-0 transition-all duration-700 ease-out ${
                          isActive
                            ? "opacity-100 scale-100"
                            : "pointer-events-none opacity-0 scale-[1.03]"
                        }`}
                      >
                        <OptimizedImage
                          src={stepImage.src}
                          alt={stepImage.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 28rem"
                          className="object-cover grayscale-[12%] contrast-[1.02]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(24,24,27,0.08)_100%)]" />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          <div className="border-t border-zinc-300">
            {steps.map(({ step, title: stepTitle, description: stepDescription, icon }, index) => {
              const displayStep = /^\d+$/.test(step) ? step.padStart(2, "0") : step;
              const isLastStep = index === steps.length - 1;
              const isActive = index === activeIndex;

              return (
                <article
                  key={`${step}-${stepTitle}`}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="process-step relative grid grid-cols-[72px_1fr] gap-6 border-b border-zinc-200 py-8 md:grid-cols-[96px_1fr] md:gap-10 md:py-10"
                >
                  <div className="process-step-rail relative pt-2">
                    <span
                      className={`process-step-node absolute left-[18px] top-4 h-3 w-3 -translate-x-1/2 rounded-full border bg-stone-100 transition-all duration-500 md:left-[24px] md:top-5 ${
                        isActive
                          ? "border-emerald-400 shadow-[0_0_0_8px_rgba(59,130,246,0.12)]"
                          : "border-zinc-300"
                      }`}
                    />

                    {!isLastStep ? (
                      <>
                        <span className="absolute left-[18px] top-10 bottom-[-2.5rem] w-px bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent md:left-[24px] md:top-12 md:bottom-[-2.75rem]" />
                        <span className="process-step-line-fill absolute left-[18px] top-10 bottom-[-2.5rem] w-px bg-[linear-gradient(180deg,#10b981_0%,#34d399_58%,#f59e0b_100%)] md:left-[24px] md:top-12 md:bottom-[-2.75rem]" />
                      </>
                    ) : (
                      <span className="process-step-line-fill absolute left-[18px] top-10 h-10 w-px bg-[linear-gradient(180deg,#10b981_0%,rgba(16,185,129,0)_100%)] md:left-[24px] md:top-12" />
                    )}

                    <span
                      className={`process-step-number relative z-10 mt-10 block text-3xl font-light tracking-[-0.05em] transition-colors duration-500 md:mt-8 md:text-5xl lg:mt-20 ${
                        isActive ? "text-zinc-900" : "text-zinc-400"
                      }`}
                    >
                      {displayStep}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-medium tracking-[-0.03em] text-zinc-950 md:text-2xl">
                        {stepTitle}
                      </h3>

                      {icon ? (
                        <div
                          className={`mt-1 hidden shrink-0 transition-colors duration-500 md:block ${
                            isActive ? "text-zinc-700" : "text-zinc-400"
                          }`}
                        >
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
        </div>
      </div>
    </ParallaxSection>
  );
}
