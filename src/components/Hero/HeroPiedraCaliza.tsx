/* client/src/components/Hero/HeroPiedraCaliza.tsx */

import { Factory, Hammer } from "@phosphor-icons/react";

import { HeroImpact } from "./HeroImpact";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

const HERO_PANORAMIC_IMAGE = "img-productos/piedra-caliza/imagen-inicio/cantera-piedra-caliza002";

export function HeroPiedraCaliza() {
  const copy = useLocalizedContent({
    es: {
      alt: "Vista panoramica de operacion minera y produccion de cal",
      eyebrow: "Excelencia minera",
      title: "Piedra caliza",
      subtitle:
        "Materia prima de alta pureza para producción de cal, metalurgia y aplicaciones industriales con trazabilidad directa desde cantera.",
      badges: ["Cantera con abastecimiento continuo", "Integración directa a planta calera"],
    },
    en: {
      alt: "Panoramic view of mining operations and lime production",
      eyebrow: "Mining excellence",
      title: "Limestone",
      subtitle:
        "High-purity raw material for lime production, metallurgy, and industrial applications with direct traceability from quarry.",
      badges: ["Quarry with continuous supply", "Direct integration with lime plant"],
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

export default HeroPiedraCaliza;
