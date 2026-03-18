/* client/src/components/ui/CarouselText.tsx */
import CarouselCard from "./CarouselCard";
import type { CarouselVariantProps, MiningProject } from "./CarouselTextBase";

export { default as CarouselCard } from "./CarouselCard";
export { default as CarouselMasonry } from "./CarouselMasonry";
export { default as CarouselInline } from "./CarouselInline";
export type { CarouselVariantProps, MiningProject } from "./CarouselTextBase";

export function CarouselText(props: CarouselVariantProps) {
  return <CarouselCard {...props} />;
}

export default CarouselText;
