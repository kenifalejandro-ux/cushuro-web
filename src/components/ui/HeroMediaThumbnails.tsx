/**client/src/components/ui/HeroMediathumbnails.tsx */
/**imágenes miniatura debajo del hero */

"use client";

import { LCPImage } from "./LCPImage";

type HeroMediaThumbnailItem = {
  src: string;
  alt: string;
  label?: string;
};

type HeroMediaThumbnailsProps = {
  items: HeroMediaThumbnailItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
};

export function HeroMediaThumbnails({
  items,
  activeIndex,
  onSelect,
  className = "",
}: HeroMediaThumbnailsProps) {
  if (items.length <= 1) return null;

  return (
    <div
      className={`mx-auto flex max-w-full justify-center gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={`${item.src}-${index}`}
            type="button"
            aria-pressed={isActive}
            aria-label={item.label ?? `Mostrar vista ${index + 1}`}
            onClick={() => onSelect(index)}
            className="group relative shrink-0 rounded-[0rem] transition-all duration-300"
          >
            <div
              className={`relative overflow-hidden rounded-[0rem] border transition-all duration-300 ${
                isActive
                  ? "border-white/20 bg-white/10 shadow-[0_14px_30px_-22px_rgba(15,23,42,0.55)]"
                  : "border-white/12 bg-black/20 hover:border-white/28"
              }`}
            >
             <div className="relative -mt-6  h-16 w-28 sm:h-20 sm:w-36 lg:h-25 lg:w-45">
    <LCPImage
      src={item.src}
      alt={item.alt}
      width={352}
      height={192}
      sizes="(max-width: 640px) 7rem, (max-width: 1024px) 9rem, 11rem"
      pictureClassName="block h-full w-full overflow-hidden"
      className={`h-full w-full object-cover transition-all duration-300 ${
        isActive ? "grayscale-0 opacity-100" : "grayscale-[55%] opacity-70"
      }`}
    />

    <div
      className={`absolute inset-0 transition-colors duration-300 ${
        isActive ? "bg-transparent" : "bg-black/25 group-hover:bg-black/10"
      }`}
    />
  </div>

  <div className="relative mt-2 h-2 w-full">
    <span
      className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20 transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-40 group-hover:opacity-60"
      }`}
    />

    <span
      className={`absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 origin-left transition-all duration-500 ${
        isActive
          ? "scale-x-100 opacity-100 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500"
          : "scale-x-0 opacity-0 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500"
      }`}
    />
  </div>
   </div>
          </button>
        );
      })}
    </div>
  );
}

export default HeroMediaThumbnails;
