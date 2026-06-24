/* client/src/components/Hero/HeroCalViva.tsx */

import { Factory, Hammer } from "@phosphor-icons/react";

import { HeroImpact } from "./HeroImpact";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

const HERO_PANORAMIC_IMAGE = "img-productos/hero/cal-viva/cal_viva";

export function HeroCalViva() {
  const copy = useLocalizedContent({
    es: {
      alt: "Vista panoramica de operacion minera y produccion de cal",
      eyebrow: "Excelencia minera",
      title: "Cal viva",
      subtitle:
        "óxido de calcio de alta pureza para procesos mineros e industriales que exigen estabilidad, continuidad y control tecnico.",
      badges: ["900 TM / día", "Especializado en mineria"],
    },
    en: {
      alt: "Panoramic view of mining operations and lime production",
      eyebrow: "Mining excellence",
      title: "Quicklime",
      subtitle:
        "High-purity calcium oxide for mining and industrial processes that demand stability, continuity, and technical control.",
      badges: ["900 TM / day", "Specialized in mining"],
    },
  });

  return (
    <HeroImpact
      image={HERO_PANORAMIC_IMAGE}
      alt={copy.alt}
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.subtitle}
      badges={[
        { icon: <Factory size={22} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[0] },
        { icon: <Hammer size={22} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[1] },
      ]}
    />
  );
}

export default HeroCalViva;
