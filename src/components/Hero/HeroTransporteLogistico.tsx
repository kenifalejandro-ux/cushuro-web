/* client/src/components/Hero/HeroTransporteLogistico.tsx */

import { Factory, Hammer } from "@phosphor-icons/react";

import { HeroImpact } from "./HeroImpact";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

const HERO_SLIDES = [
  { poster: "img-servicios/hero/transporte-logistico/transporte-logistico002" },
  { poster: "img-servicios/hero/transporte-logistico/transporte-logistico003" },
  { poster: "img-servicios/hero/transporte-logistico/transporte-logistico004" },
  { poster: "img-servicios/hero/transporte-logistico/transporte-logistico005" },
];

export function HeroTransporteLogistico() {
  const copy = useLocalizedContent({
    es: {
      alt: "Vista panoramica de operacion minera y produccion de cal",
      slideAlt: "Vista operativa",
      eyebrow: "Logística minera",
      title: "Transporte logístico para operaciones mineras",
      subtitle:
        "Servicio especializado para traslado continuo de materiales con capacidad diaria de hasta 900 TM y control logistico permanente.",
      badges: ["900 TM / día", "Especializado en mineria"],
      thumbnailAlt: "Vista logística",
      thumbnailLabel: "Mostrar vista logística",
    },
    en: {
      alt: "Panoramic view of mining operations and lime production",
      slideAlt: "Operational view",
      eyebrow: "Mining logistics",
      title: "Logistics transport for mining operations",
      subtitle:
        "Specialized service for the continuous transport of materials with daily capacity of up to 900 TM and permanent logistics control.",
      badges: ["900 TM / day", "Specialized in mining"],
      thumbnailAlt: "Logistics view",
      thumbnailLabel: "Show logistics view",
    },
  });

  return (
    <HeroImpact
      slides={HERO_SLIDES}
      slideCount={5}
      alt={copy.alt}
      slideAlt={copy.slideAlt}
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.subtitle}
      compactTitle
      thumbnailAlt={copy.thumbnailAlt}
      thumbnailLabel={copy.thumbnailLabel}
      badges={[
        { icon: <Factory size={18} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[0] },
        { icon: <Hammer size={18} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[1] },
      ]}
    />
  );
}

export default HeroTransporteLogistico;
