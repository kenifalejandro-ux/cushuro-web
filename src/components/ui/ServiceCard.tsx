"use client";

import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { LCPImage } from "./LCPImage";
import { OptimizedImage } from "./OptimizedImage";

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
  const imageSizes = sizes ?? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

  const imageToneClass = showColorAlways
    ? "grayscale-0 contrast-[1.02]"
    : "grayscale-[10%] contrast-[1.02]";
  const commonImageClasses = `${imageToneClass} scale-[1.01] transition-transform duration-700 group-hover:scale-[1.03]`;

  return (
    <div className="group relative overflow-hidden rounded-[1.45rem] border border-stone-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,239,232,0.96))] shadow-[0_18px_34px_-28px_rgba(24,24,27,0.18)] transition-colors duration-300 hover:border-stone-300">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-emerald-700/55 via-stone-400/30 to-transparent" />
      <div className="relative h-56 overflow-hidden bg-stone-100">
        {Icon ? (
          <div
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            data-service-icon
          >
            <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.15rem] border border-stone-300 bg-[#f5f1e8]/92 text-zinc-800 shadow-[0_16px_28px_-22px_rgba(24,24,27,0.2)]">
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
      <div className="p-7 md:p-8" data-service-content>
        <span className="b2b-eyebrow">{category}</span>

        <h3 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.03em] text-zinc-950">
          {title}
        </h3>

        <div className="my-5 h-px w-full bg-zinc-200/80" />

        <p className="text-sm leading-7 text-zinc-600">{description}</p>

        {href ? (
          <Link
            to={href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-800 transition hover:text-emerald-700"
            aria-label={`Más información sobre ${title}`}
          >
            Más información
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <div className="mt-6 text-zinc-400 transition group-hover:text-zinc-700">→</div>
        )}
      </div>
    </div>
  );
}
