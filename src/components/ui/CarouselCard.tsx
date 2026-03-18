/* client/src/components/ui/CarouselCard.tsx */
import {
  CarouselProjectLogo,
  CarouselTextBase,
  type CarouselVariantProps,
} from "./CarouselTextBase";

export default function CarouselCard(props: CarouselVariantProps) {
  return (
    <CarouselTextBase
      {...props}
      variantName="card"
      speed={28}
      sectionViewportHeight="min-h-[58vh] md:min-h-[64vh]"
      trackMarginTop="mt-6 md:mt-8"
      itemHeights={["min-h-[190px]", "min-h-[205px]", "min-h-[195px]"]}
      renderProject={({ project, index, itemHeightClass }) => (
        <div
          key={`${project.refCode}-${index}`}
          className="inline-flex flex-shrink-0 items-stretch px-3 md:px-4"
        >
          <article
            className={`group flex min-w-[320px] items-start gap-4 rounded-[30px] border border-zinc-200/90 bg-white px-6 py-6 transition duration-300 hover:border-zinc-300 md:min-w-[390px] ${itemHeightClass}`}
          >
            <CarouselProjectLogo
              project={project}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-zinc-100 p-2 md:h-14 md:w-14"
              imageClassName="h-full w-full object-contain opacity-90"
            />

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                {project.refCode}
              </p>

              <h3 className="mt-2 text-[17px] font-semibold leading-tight tracking-[-0.03em] text-zinc-950">
                {project.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {project.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] text-zinc-700">
                  {project.mineral}
                </span>
              </div>
            </div>
          </article>
        </div>
      )}
    />
  );
}