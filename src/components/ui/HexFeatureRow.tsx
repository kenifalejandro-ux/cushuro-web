/** client/src/components/ui/HexFeatureRow.tsx */

"use client";

import { Link } from "react-router-dom";

import { OptimizedImage } from "./OptimizedImage";

/**
 * Fila reutilizable estilo "Minera Boroo":
 * imagen grande a un lado, panel azul con texto al otro y un hexágono
 * esmeralda montado sobre la unión. El lado de la imagen se invierte con
 * `reverse` para ir tejiendo el contenido fila por fila.
 */
export interface HexFeatureRowProps {
  /** Texto que va dentro del hexágono esmeralda (p. ej. la categoría) */
  badge: string;
  /** Encabezado del panel de contenido */
  title: string;
  /** Párrafo descriptivo */
  description: string;
  /** Ruta de la imagen (sin extensión, resuelta por OptimizedImage) */
  image: string;
  /** Destino del botón; si no se pasa, el botón no se muestra */
  href?: string;
  /** Etiqueta del botón (p. ej. "Ver más") */
  ctaLabel?: string;
  /** true → imagen a la derecha y contenido a la izquierda */
  reverse?: boolean;
  /** Carga prioritaria de la imagen (primera fila visible) */
  priority?: boolean;
}

export default function HexFeatureRow({
  badge,
  title,
  description,
  image,
  href,
  ctaLabel = "Ver más",
  reverse = false,
  priority = false,
}: HexFeatureRowProps) {
  return (
    <div className="relative dark-image grid items-stretch overflow-hidden lg:grid-cols-2">
      {/* Imagen grande */}
      <div
        className={`relative h-72 overflow-hidden bg-stone-200 sm:h-96 lg:h-[36rem] ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
        data-service-image
      >
        <OptimizedImage
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Panel de contenido (azul profundo) */}
      <div
        className={`relative flex flex-col justify-center bg-gradient-to-br from-[#1d3461] to-[#11375c] px-8 py-14 text-white sm:px-12 lg:px-20 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
        data-service-content
      >
        <div className="max-w-md">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-300">
            {badge}
          </span>

          <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight lg:text-4xl">
            {title}
          </h3>

          <p className="mt-6 text-sm leading-7 text-blue-100/90 lg:text-base">
            {description}
          </p>

          {href ? (
            <Link
              to={href}
              className="mt-10 inline-flex w-fit items-center gap-2 border border-white/60 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>

      {/* Hexágono esmeralda montado sobre la unión (solo desktop) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        <div
          className="flex h-32 w-32 items-center justify-center bg-gradient-to-br from-[#10b981] to-[#059669] p-4 shadow-2xl"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <span className="text-center text-sm font-bold uppercase leading-tight text-white">
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
}
