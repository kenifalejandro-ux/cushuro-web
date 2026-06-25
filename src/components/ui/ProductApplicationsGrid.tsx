/**client/src/components/ui/ProducApplicationsGrid.tsx */
/**aplicaciones mineras */

"use client";

import type { Icon } from "@phosphor-icons/react";
import { Factory } from "@phosphor-icons/react";

import { OptimizedImage } from "./OptimizedImage";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

type ProductApplicationsGridProps = {
  items: string[];
  title?: string;
  icon?: Icon;
  image?: {
    src: string;
    alt: string;
    aspectClassName?: string;
  };
  /** Cuando se renderiza dentro de un fondo compartido (PinnedVideoBackdrop):
   *  fondo transparente y texto claro para dejar ver el video de atrás. */
  embedded?: boolean;
};

export default function ProductApplicationsGrid({
  items,
  title,
  icon: Icon = Factory,
  image,
  embedded = false,
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

  // Paleta según contexto: claro (standalone) u oscuro/transparente (embedded).
  const theme = embedded
    ? {
        section: "relative py-14 md:py-20",
        iconWrap: "border-white/20 bg-white/5 text-white",
        title: "text-white",
        imageWrap: "border-white/15 bg-white/5",
        listTop: "border-white/15",
        cellBorder: "border-white/10",
        cellLeft: "border-white/10",
        num: "text-white/45",
        item: "text-white/90",
      }
    : {
        section: "light-image bg-stone-100 py-14 md:py-20",
        iconWrap: "border-zinc-300 bg-stone-50 text-zinc-700",
        title: "text-zinc-950",
        imageWrap: "border-zinc-200 bg-white/70",
        listTop: "border-zinc-300",
        cellBorder: "border-zinc-200",
        cellLeft: "border-zinc-200",
        num: "text-zinc-400",
        item: "text-zinc-900",
      };

  return (
    <section className={theme.section}>
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.28fr_0.72fr] lg:gap-20">
        <div className="order-1 self-start lg:order-2 lg:sticky lg:top-24 lg:text-right">
          <div
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${theme.iconWrap} lg:ml-auto`}
          >
            <Icon className="h-4 w-4" strokeWidth={1.8} />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#6db820]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#6db820]">
              {copy.eyebrow}
            </span>
          </div>

          <h2
            className={`mt-4 text-4xl font-medium leading-[0.96] tracking-[-0.05em] md:text-5xl ${theme.title}`}
          >
            {title ?? copy.title}
          </h2>

          {image ? (
            <div
              className={`mt-8 overflow-hidden rounded-[1.5rem] border ${theme.imageWrap} shadow-[0_18px_36px_-34px_rgba(24,24,27,0.18)] lg:ml-auto lg:max-w-sm`}
            >
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

        <div className={`order-2 border-t ${theme.listTop} lg:order-1`}>
          <div className="grid grid-cols-2">
            {items.map((item, index) => (
              <article
                key={`${item}-${index}`}
                className={[
                  `border-b ${theme.cellBorder} py-4 sm:py-6 md:py-7`,
                  index % 2 === 0
                    ? "pr-3 sm:pr-8"
                    : `border-l ${theme.cellLeft} pl-3 sm:pl-8`,
                ].join(" ")}
              >
                <div className="flex items-start gap-2 sm:gap-4">
                  <span
                    className={`mt-1 shrink-0 text-[10px] font-medium tracking-[0.18em] sm:text-[11px] ${theme.num}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p
                    className={`max-w-[24ch] text-sm font-medium leading-6 tracking-[-0.02em] sm:text-base sm:leading-7 md:text-lg ${theme.item}`}
                  >
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
