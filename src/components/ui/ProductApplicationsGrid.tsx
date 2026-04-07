/**client/src/components/ui/ProducApplicationsGrid.tsx */
/**aplicaciones mineras */

"use client";

import type { LucideIcon } from "lucide-react";
import { Factory } from "lucide-react";

import { OptimizedImage } from "./OptimizedImage";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

type ProductApplicationsGridProps = {
  items: string[];
  title?: string;
  icon?: LucideIcon;
  image?: {
    src: string;
    alt: string;
    aspectClassName?: string;
  };
};

export default function ProductApplicationsGrid({
  items,
  title,
  icon: Icon = Factory,
  image,
}: ProductApplicationsGridProps) {
  const copy = useLocalizedContent({
    es: {
      eyebrow: "Aplicaciones",
      title: "Aplicaciones en Operaciones Mineras",
    },
    en: {
      eyebrow: "Applications",
      title: "Applications in Mining Operations",
    },
  });
  const imageAspectClassName = image?.aspectClassName ?? "aspect-[6/5] md:aspect-[8/4]";

  return (
    <section className="bg-stone-100 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.28fr_0.72fr] lg:gap-20">
        <div className="order-1 self-start lg:order-2 lg:sticky lg:top-24 lg:text-right">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-stone-50 text-zinc-700 lg:ml-auto">
            <Icon className="h-4 w-4" strokeWidth={1.8} />
          </div>

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
            {copy.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-[0.96] tracking-[-0.05em] text-zinc-950 md:text-5xl">
            {title ?? copy.title}
          </h2>

          {image ? (
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white/70 shadow-[0_18px_36px_-34px_rgba(24,24,27,0.18)] lg:ml-auto lg:max-w-sm">
              <div className={`relative ${imageAspectClassName}`}>
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 24rem"
                  className="scale-[1.01] object-cover grayscale-[10%] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(24,24,27,0.08)_100%)]" />
              </div>
            </div>
          ) : null}
        </div>

        <div className="order-2 border-t border-zinc-300 lg:order-1">
          <div className="grid sm:grid-cols-2">
            {items.map((item, index) => (
              <article
                key={`${item}-${index}`}
                className={[
                  "border-b border-zinc-200 py-6 md:py-7",
                  index % 2 === 0 ? "sm:pr-8" : "sm:border-l sm:pl-8",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-[11px] font-medium tracking-[0.18em] text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-[24ch] text-base font-medium leading-7 tracking-[-0.02em] text-zinc-900 md:text-lg">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
