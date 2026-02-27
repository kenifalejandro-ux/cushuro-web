/* client/src/components/ui/ImageStack.tsx */

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

type VisibleCount = 1 | 2 | 3;
type StackLayer = "primary" | "secondary" | "tertiary";

interface StackSlot {
  className: string;
  layer: StackLayer;
}

interface StackLayout {
  stackHeight: string;
  slots: StackSlot[];
}

const MAX_STACK_IMAGES = 3;
const STACKED_SIZES = "(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 580px";
const INLINE_SIZES = "(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px";

const INLINE_GRID_COLS: Record<VisibleCount, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
};

//}modificar los tamaños de las iamgenes dentro del viewport //}
const STACKED_LAYOUTS: Record<VisibleCount, StackLayout> = {
  1: {
    stackHeight: "h-[500px] lg:h-[650px]",
    slots: [{ className: "absolute inset-0 h-full w-full z-10", layer: "primary" }],
  },
  2: {
    stackHeight: "h-[540px] lg:h-[680px]",
    slots: [
      { className: "absolute left-0 top-0 h-[75%] w-[85%] z-10", layer: "primary" },
      { className: "absolute right-0 bottom-0 h-[66%] w-[74%] z-20", layer: "secondary" },
    ],
  },
  3: {
    stackHeight: "h-[580px] lg:h-[720px]",
    slots: [
      { className: "absolute left-0 top-0 h-[64%] w-[74%] z-10", layer: "primary" },
      { className: "absolute left-[12%] bottom-0 h-[62%] w-[78%] z-20", layer: "secondary" },
      { className: "absolute right-0 top-[18%] h-[50%] w-[52%] z-30", layer: "tertiary" },
    ],
  },
};

const STACK_GLOW_BY_LAYER: Partial<Record<StackLayer, string>> = {
  primary: "",
  secondary: "",
};

function toVisibleCount(imageCount: number): VisibleCount {
  if (imageCount <= 1) return 1;
  if (imageCount === 2) return 2;
  return 3;
}

function InlineImageCard({ image }: { image: ImageStackImage }) {
  return (
    // CAMBIO: Eliminamos shadow y ring
    <div className="relative h-[280px] sm:h-[320px] lg:h-[380px] overflow-hidden group transition-all duration-300">
     
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        fill
        sizes={image.sizes ?? INLINE_SIZES}
        priority={image.priority}
      />
    </div>
  );
}

function StackedImageCard({ image, slot }: { image: ImageStackImage; slot: StackSlot }) {
  const glowClassName = STACK_GLOW_BY_LAYER[slot.layer];

  return (
    <div className={slot.className}>
      <div className="relative h-full w-full overflow-hidden  group transition-all duration-500">
        <div
          aria-hidden
        />
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          sizes={image.sizes ?? STACKED_SIZES}
          priority={image.priority}
        />
        <div
          className="absolute inset-0  rounded-xl pointer-events-none"
          aria-hidden
        />
      </div>

      {glowClassName ? (
        <div
          className={`absolute -inset-4 ${glowClassName} rounded-2xl blur-2xl -z-10`}
          aria-hidden
        />
      ) : null}
    </div>
  );
}



export function ImageStack({ images, layout = "stacked", badge, className = "" }: ImageStackProps) {
  const visibleImages = images.slice(0, MAX_STACK_IMAGES);
  const count = visibleImages.length;

  if (count === 0) return null;

  const visibleCount = toVisibleCount(count);

  if (layout === "inline") {
    const gridCols = INLINE_GRID_COLS[visibleCount];

    return (
      <div className={`grid ${gridCols} gap-6 ${className}`}>
        {visibleImages.map((image) => (
          <InlineImageCard key={image.src} image={image} />
        ))}
      </div>
    );
  }

  const stackedLayout = STACKED_LAYOUTS[visibleCount];

  return (
    <div className={`relative isolate w-full ${stackedLayout.stackHeight} ${className}`}>
      <div className="absolute inset-0 -z-20 opacity-5" aria-hidden>
        <div
          className="absolute inset-0"
          
        />
      </div>

      {stackedLayout.slots.map((slot, index) => {
        const image = visibleImages[index];
        if (!image) return null;

        return <StackedImageCard key={`${image.src}-${slot.layer}`} image={image} slot={slot} />;
      })}

    </div>
  );
}
