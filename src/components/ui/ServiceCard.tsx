/** client/src/components/ui/ServiceCard.tsx */

"use client";

import { LCPImage } from "./LCPImage";
import { OptimizedImage } from "./OptimizedImage";

type Props = {
  title: string;
  category: string;
  description: string;
  image: string;
  priority?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  sizes?: string;
};

export default function ServiceCard({
  title,
  category,
  description,
  image,
  priority = false,
  imageWidth,
  imageHeight,
  sizes,
}: Props) {
  const imageSizes = sizes ?? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

  return (
    <div className="group relative overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
      {/* Imagen */}
      <div className="relative h-56 overflow-hidden" data-service-image>
        {imageWidth && imageHeight ? (
          <LCPImage
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            sizes={imageSizes}
            priority={priority}
            pictureClassName="block w-full h-full"
            className="grayscale lg:group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-700"
          />
        ) : (
          <OptimizedImage
            src={image}
            alt={title}
            fill
            priority={priority}
            sizes={imageSizes}
            className="grayscale lg:group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-700"
          />
        )}

        {/* Overlay suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-30 transition" />
      </div>

      {/* Contenido */}
      <div className="p-7" data-service-content>
        <span className="text-xs uppercase tracking-widest text-blue-800 font-semibold">
          {category}
        </span>

        <h3 className="mt-2 text-xl font-bold text-zinc-900">{title}</h3>

        <div className="w-10 h-[2px] bg-blue-800 my-4 group-hover:w-16 transition-all duration-500" />

        <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>

        <div className="mt-6 text-zinc-400 group-hover:text-blue-800 transition">→</div>
      </div>
    </div>
  );
}
