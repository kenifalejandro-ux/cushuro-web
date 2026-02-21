import type { ReactNode } from "react";
import { OptimizedImage } from "./OptimizedImage";

export interface ImageStackImage {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}

export interface ImageStackBadge {
  value: string;
  label: string;
  icon?: ReactNode;
}

export interface ImageStackProps {
  images: ImageStackImage[];
  layout?: "stacked" | "inline";
  badge?: ImageStackBadge;
  className?: string;
}

const STACKED_SIZES =
  "(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 520px";
const INLINE_SIZES =
  "(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 320px";

export function ImageStack({
  images,
  layout = "stacked",
  badge,
  className = "",
}: ImageStackProps) {
  const visibleImages = images.slice(0, 3);
  const count = visibleImages.length;

  if (count === 0) return null;

  if (layout === "inline") {
    const gridCols =
      count === 1
        ? "grid-cols-1"
        : count === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

    return (
      <div className={`grid ${gridCols} gap-6 ${className}`}>
        {visibleImages.map((image) => (
          <div
            key={image.src}
            className="relative h-[230px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              sizes={image.sizes ?? INLINE_SIZES}
              priority={image.priority}
            />
          </div>
        ))}
      </div>
    );
  }

  const stackHeight =
    count === 1
      ? "h-[420px] lg:h-[500px]"
      : count === 2
      ? "h-[460px] lg:h-[560px]"
      : "h-[500px] lg:h-[600px]";

  const primaryClassName =
    count === 1
      ? "absolute inset-0 h-full w-full z-10"
      : count === 2
      ? "absolute left-0 top-0 h-[72%] w-[82%] z-10"
      : "absolute left-0 top-0 h-[60%] w-[70%] z-10";

  const secondaryClassName =
    count === 1
      ? ""
      : count === 2
      ? "absolute right-0 bottom-0 h-[62%] w-[70%] z-20"
      : "absolute left-[10%] bottom-0 h-[58%] w-[75%] z-20";

  const renderStackedImage = (
    image: ImageStackImage,
    wrapperClassName: string
  ) => (
    <div className={wrapperClassName}>
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_22px_50px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          sizes={image.sizes ?? STACKED_SIZES}
          priority={image.priority}
        />
      </div>
    </div>
  );

  return (
    <div className={`relative isolate w-full ${stackHeight} ${className}`}>
      {count >= 1 && renderStackedImage(visibleImages[0], primaryClassName)}
      {count >= 2 && secondaryClassName
        ? renderStackedImage(visibleImages[1], secondaryClassName)
        : null}
      {count >= 3 &&
        renderStackedImage(
          visibleImages[2],
          "absolute right-0 top-[16%] h-[46%] w-[48%] z-30"
        )}
    {/**cambiar de color el badge  */}
      {badge ? (
        <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-4 rounded-2xl bg-white/80 px-6 py-4 text-dark shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
            {badge.icon ? (
              <span className="text-amber-300">{badge.icon}</span>
            ) : null}
            <div className="space-y-1">
              <div className="text-3xl font-semibold leading-none">
                {badge.value}
              </div>
              <div className="text-[0.65rem] uppercase tracking-[0.32em] text-dark/70">
                {badge.label}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
