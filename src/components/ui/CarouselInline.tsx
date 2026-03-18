/* client/src/components/ui/CarouselInline.tsx */
import {
  CarouselProjectLogo,
  CarouselTextBase,
  type CarouselVariantProps,
} from "./CarouselTextBase";

export default function CarouselInline(props: CarouselVariantProps) {
  return (
    <CarouselTextBase
      {...props}
      variantName="inline"
      speed={20}
      sectionViewportHeight="min-h-[18vh] md:min-h-[30vh]"
      trackMarginTop="mt-8 md:mt-10"
      itemHeights={["min-h-[76px]", "min-h-[84px]", "min-h-[80px]"]}
      entryDirection={90}
      renderProject={({ project, index, itemHeightClass }) => (
        <div
          key={`${project.refCode}-${index}`}
          className="inline-flex flex-shrink-0 items-stretch px-3"
        >
          <article
            className={`group flex min-w-[340px] items-center gap-4 rounded-full border border-zinc-200/90 bg-white px-4 py-3 transition duration-300 hover:border-zinc-300 md:min-w-[460px] ${itemHeightClass}`}
          >
            <CarouselProjectLogo
              project={project}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 p-2"
              imageClassName="h-full w-full object-contain opacity-90"
            />

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold tracking-[-0.02em] text-zinc-950">
                {project.name}
              </h3>

              <p className="truncate text-xs text-zinc-500">
                {project.front} • {project.zone}
              </p>
            </div>

            <span className="hidden rounded-full bg-zinc-100 px-3 py-1 text-[11px] text-zinc-600 md:inline-flex">
              {project.mineral}
            </span>
          </article>
        </div>
      )}
    />
  );
}