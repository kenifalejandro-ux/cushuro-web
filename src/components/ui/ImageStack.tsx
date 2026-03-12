/* client/src/components/ui/ImageStack.tsx */

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
  fullScreen?: boolean; // ✅ NUEVO
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

const STACKED_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw";

const INLINE_SIZES =
  "(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px";

const INLINE_GRID_COLS: Record<VisibleCount, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
};

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

function toVisibleCount(imageCount: number): VisibleCount {
  if (imageCount <= 1) return 1;
  if (imageCount === 2) return 2;
  return 3;
}

function InlineImageCard({ image }: { image: ImageStackImage }) {
  return (
    <div className="relative h-[280px] sm:h-[320px] lg:h-[380px] overflow-hidden">
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        fill
        sizes={image.sizes ?? INLINE_SIZES}
        priority={image.priority}
        className="object-cover"
      />
    </div>
  );
}

function StackedImageCard({
  image,
  slot,
}: {
  image: ImageStackImage;
  slot: StackSlot;
}) {
  return (
    <div className={slot.className}>
      <div className="relative h-full w-full overflow-hidden">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          sizes={image.sizes ?? STACKED_SIZES}
          priority={image.priority}
          className="object-cover" // ✅ CLAVE
        />
      </div>
    </div>
  );
}

export function ImageStack({
  images,
  layout = "stacked",
  badge,
  className = "",
  fullScreen = false, // ✅ nuevo
}: ImageStackProps) {
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
    <div
      className={`relative isolate w-full ${
        fullScreen ? "h-screen" : stackedLayout.stackHeight
      } ${className}`}
    >
      {stackedLayout.slots.map((slot, index) => {
        const image = visibleImages[index];
        if (!image) return null;

        return (
          <StackedImageCard
            key={`${image.src}-${slot.layer}`}
            image={image}
            slot={slot}
          />
        );
      })}
    </div>
  );
}