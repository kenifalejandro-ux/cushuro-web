"use client";

import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { LCPImage } from "./LCPImage";
import { OptimizedImage } from "./OptimizedImage";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

type Props = {
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  priority?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  sizes?: string;
  icon?: LucideIcon;
  showColorAlways?: boolean;
};

export default function ServiceCard({
  title,
  category,
  description,
  image,
  href,
  priority = false,
  imageWidth,
  imageHeight,
  sizes,
  icon: Icon,
  showColorAlways = false,
}: Props) {
  const copy = useLocalizedContent({
    es: {
      moreInfo: "Más información",
      ariaPrefix: "Más información sobre",
    },
    en: {
      moreInfo: "Learn more",
      ariaPrefix: "Learn more about",
    },
  });

  const imageSizes = sizes ?? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

  const imageToneClass = showColorAlways
    ? "grayscale-0 contrast-[1.02]"
    : "grayscale-[10%] contrast-[1.02]";
  const commonImageClasses = `${imageToneClass} scale-[1.01] transition-transform duration-slow group-hover:scale-[1.03]`;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-300 bg-gradient-to-b from-stone-100 to-stone-50 shadow-lg transition-colors duration-base hover:border-neutral-400 hover:shadow-xl">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-brand-accent/60 via-neutral-400/30 to-transparent" />
      <div className="relative h-56 overflow-hidden bg-neutral-100">
        {Icon ? (
          <div
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            data-service-icon
          >
            <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-lg border border-neutral-300 bg-stone-50 text-brand-accent shadow-md">
              <Icon className="h-10 w-10" strokeWidth={1.8} />
            </div>
          </div>
        ) : null}

        {/* Imagen */}
        <div className="absolute inset-0 z-10" data-service-image>
          {imageWidth && imageHeight ? (
            <LCPImage
              src={image}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              sizes={imageSizes}
              priority={priority}
              pictureClassName="block w-full h-full"
              className={commonImageClasses}
            />
          ) : (
            <OptimizedImage
              src={image}
              alt={title}
              fill
              priority={priority}
              sizes={imageSizes}
              className={commonImageClasses}
            />
          )}

          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/20 via-black/[0.05] to-transparent transition ${showColorAlways ? "opacity-10" : "opacity-20 group-hover:opacity-10"}`}
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 md:p-8" data-service-content>
        <span className="text-tech-sm text-brand-accent uppercase">{category}</span>

        <h3 className="mt-3 text-display-sm text-neutral-950">
          {title}
        </h3>

        <div className="my-6 h-px w-full bg-neutral-300" />

        <p className="text-body-sm leading-relaxed text-neutral-700">{description}</p>

        {href ? (
          <Link
            to={href}
            className="mt-6 inline-flex items-center gap-2 text-body-sm font-semibold text-neutral-800 transition duration-base hover:text-brand-accent"
            aria-label={`${copy.ariaPrefix} ${title}`}
          >
            {copy.moreInfo}
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <div className="mt-6 text-neutral-500 transition duration-base group-hover:text-neutral-800">→</div>
        )}
      </div>
    </div>
  );
}
