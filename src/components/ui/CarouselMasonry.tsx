/* client/src/components/ui/CarouselMasonry.tsx */
import {
  CarouselProjectLogo,
  CarouselTextBase,
  type CarouselVariantProps,
} from "./CarouselTextBase";

export default function CarouselMasonry(props: CarouselVariantProps) {
  return (
    <CarouselTextBase
      {...props}
      variantName="masonry"
      speed={32}
      sectionViewportHeight="min-h-[64vh] md:min-h-[70vh]"
      trackMarginTop="mt-6 md:mt-8"
      itemHeights={["min-h-[200px]", "min-h-[225px]", "min-h-[210px]"]}
      renderProject={({ project, index, itemHeightClass }) => (
        <div
          key={`${project.refCode}-${index}`}
          className="inline-flex flex-shrink-0 px-3 md:px-4"
        >
          <article
            className={`group grid min-w-[300px] grid-cols-[56px_1fr] gap-x-4 gap-y-3 rounded-[30px] border border-zinc-200/90 bg-white p-5 transition duration-300 hover:border-zinc-300 md:min-w-[340px] ${itemHeightClass}`}
          >
            <CarouselProjectLogo
              project={project}
              className="row-span-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 p-2"
              imageClassName="h-full w-full object-contain opacity-90"
            />

            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                {project.refCode}
              </p>

              <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600">
                {project.mineral}
              </span>
            </div>

            <h3 className="text-base font-semibold leading-tight tracking-[-0.03em] text-zinc-950">
              {project.name}
            </h3>

            <p className="col-span-2 pt-2 text-sm leading-6 text-zinc-600">
              {project.desc}
            </p>

            <div className="col-span-2 flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-100 pt-4 text-[11px] text-zinc-500">
              <span>Frente: {project.front}</span>
              <span>Zona: {project.zone}</span>
              <span>{project.status}</span>
            </div>
          </article>
        </div>
      )}
    />
  );
}