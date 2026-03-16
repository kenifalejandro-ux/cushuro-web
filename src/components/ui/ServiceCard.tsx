/** client/src/components/ui/ServiceCard.tsx */

/** client/src/components/ui/ServiceCard.tsx */

"use client";

import { motion } from "framer-motion";
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

  // Esta es la lógica que controla si hay gris o no
  const grayscaleClasses = showColorAlways 
    ? "grayscale-0" 
    : "grayscale lg:group-hover:grayscale-0";

  const commonImageClasses = `${grayscaleClasses} scale-105 group-hover:scale-110 transition-all duration-700`;

  return (
    <div className="group relative overflow-hidden border border-transparent bg-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-emerald-50">
        {Icon ? (
          <div
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            data-service-icon
          >
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-700/35 bg-white/85 text-emerald-700 shadow-lg backdrop-blur-sm"
            >
              <Icon className="h-10 w-10" strokeWidth={1.8} />
            </motion.div>
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
              className={commonImageClasses} // <-- AQUÍ SE APLICA LA LÓGICA
            />
          ) : (
            <OptimizedImage
              src={image}
              alt={title}
              fill
              priority={priority}
              sizes={imageSizes}
              className={commonImageClasses} // <-- AQUÍ SE APLICA LA LÓGICA
            />
          )}

          {/* Overlay suave dinámico */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition ${showColorAlways ? "opacity-30" : "opacity-60 group-hover:opacity-30"}`} />
        </div>
      </div>

      {/* Contenido */}
      <div className="p-7" data-service-content>
        <span className="text-xs uppercase tracking-widest text-blue-800 font-semibold">
          {category}
        </span>

        <h3 className="mt-2 text-xl font-bold text-zinc-900">{title}</h3>

        <div className="w-10 h-[2px] bg-blue-800 my-4 group-hover:w-16 transition-all duration-500" />

        <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>

        {href ? (
          <Link
            to={href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-emerald-700"
            aria-label={`Más información sobre ${title}`}
          >
            Más información
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <div className="mt-6 text-zinc-400 transition group-hover:text-blue-800">→</div>
        )}
      </div>
    </div>
  );
}
