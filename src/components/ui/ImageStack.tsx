import type { ReactNode } from "react";
import { OptimizedImage } from "./OptimizedImage";
import { cn } from "./utils";

type VisibleCount = 1 | 2 | 3;
type StackLayer = "primary" | "secondary" | "tertiary";

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
  fullScreen?: boolean;
  imageClassName?: string;
  inlineCardClassName?: string;
  stackedCardClassName?: string;
  showOverlay?: boolean;
  stackedLayoutOverrides?: Partial<Record<VisibleCount, ImageStackLayoutOverride>>;
}

interface StackSlot {
  className: string;
  layer: StackLayer;
}

interface StackLayout {
  stackHeight: string;
  slots: StackSlot[];
}

export interface ImageStackLayoutOverride {
  stackHeight?: string;
  slots?: Partial<Record<StackLayer, string>>;
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
    stackHeight: "h-[420px] lg:h-[580px]",
    slots: [{ className: "absolute inset-0 h-full w-full z-10", layer: "primary" }],
  },
  2: {
    stackHeight: "h-[460px] lg:h-[620px]",
    slots: [
      { className: "absolute left-0 top-0 h-[76%] w-[84%] z-10", layer: "primary" },
      { className: "absolute right-0 bottom-0 h-[66%] w-[72%] z-20", layer: "secondary" },
    ],
  },
  3: {
    stackHeight: "h-[420px] lg:h-[560px]",
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

function ImageOverlay() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(24,24,27,0.08)_100%)]" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/35" />
    </>
  );
}

function InlineImageCard({
  image,
  cardClassName,
  imageClassName,
}: {
  image: ImageStackImage;
  cardClassName?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group relative h-[280px] overflow-hidden ",
        cardClassName
      )}
    >
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        fill
        sizes={image.sizes ?? INLINE_SIZES}
        priority={image.priority}
        className={cn(
          "object-cover transition-transform duration-700 group-hover:scale-[1.03]",
          imageClassName
        )}
      />
      <ImageOverlay />
    </div>
  );
}

function StackedImageCard({
  image,
  slot,
  imageClassName,
  cardClassName,
  showOverlay = true,
}: {
  image: ImageStackImage;
  slot: StackSlot;
  imageClassName?: string;
  cardClassName?: string;
  showOverlay?: boolean;
}) {
  return (
    <div className={slot.className}>
      <div
        className={cn(
          "group relative h-full w-full overflow-hidden ]",
          cardClassName
        )}
      >
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          sizes={image.sizes ?? STACKED_SIZES}
          priority={image.priority}
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-[1.025]",
            imageClassName
          )}
        />
        {showOverlay ? <ImageOverlay /> : null}
      </div>
    </div>
  );
}

function StackBadge({ badge }: { badge: ImageStackBadge }) {
  return (
    <div className="absolute bottom-5 left-5 z-40 max-w-[220px] rounded-[1.25rem]  px-4 py-3 shadow-[0_18px_40px_-24px_rgba(24,24,27,0.18)] backdrop-blur-md">
      <div className="flex items-start gap-3">
        {badge.icon ? (
          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            {badge.icon}
          </div>
        ) : null}

        <div className="min-w-0">
          <div className="text-lg font-semibold tracking-[-0.04em] text-zinc-900">
            {badge.value}
          </div>
          <p className="text-xs leading-5 text-zinc-600">{badge.label}</p>
        </div>
      </div>
    </div>
  );
}

export function ImageStack({
  images,
  layout = "stacked",
  badge,
  className = "",
  fullScreen = false,
  imageClassName,
  inlineCardClassName,
  stackedCardClassName,
  showOverlay = true,
  stackedLayoutOverrides,
}: ImageStackProps) {
  const visibleImages = images.slice(0, MAX_STACK_IMAGES);
  const count = visibleImages.length;

  if (count === 0) return null;

  const visibleCount = toVisibleCount(count);

  if (layout === "inline") {
    const gridCols = INLINE_GRID_COLS[visibleCount];

    return (
      <div className={cn("grid gap-6", gridCols, className)}>
        {visibleImages.map((image) => (
          <InlineImageCard
            key={image.src}
            image={image}
            cardClassName={inlineCardClassName}
            imageClassName={imageClassName}
          />
        ))}
      </div>
    );
  }

  const stackedLayout = STACKED_LAYOUTS[visibleCount];
  const stackedLayoutOverride = stackedLayoutOverrides?.[visibleCount];
  const stackHeightClass = fullScreen
    ? "h-screen"
    : cn(stackedLayout.stackHeight, stackedLayoutOverride?.stackHeight);

  return (
    <div className={cn("relative isolate w-full", stackHeightClass, className)}>
      {stackedLayout.slots.map((slot, index) => {
        const image = visibleImages[index];
        if (!image) return null;

        const slotOverride = stackedLayoutOverride?.slots?.[slot.layer];

        return (
          <StackedImageCard
            key={`${image.src}-${slot.layer}`}
            image={image}
            slot={{
              ...slot,
              className: cn(slot.className, slotOverride),
            }}
            imageClassName={imageClassName}
            cardClassName={stackedCardClassName}
            showOverlay={showOverlay}
          />
        );
      })}

      {badge ? <StackBadge badge={badge} /> : null}
    </div>
  );
}