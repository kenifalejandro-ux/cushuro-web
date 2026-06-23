/* client/src/components/ui/CarouselText.tsx */
import CarouselMasonry from "./CarouselMasonry";
import type { CarouselVariantProps, MiningProject } from "./CarouselTextBase";

export type { CarouselVariantProps, MiningProject } from "./CarouselTextBase";

export function CarouselText(props: CarouselVariantProps) {
  return <CarouselMasonry {...props} />;
}

export default CarouselText;
