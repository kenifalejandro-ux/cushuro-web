/* client/src/components/Hero/HeroMaquinariaPesada.tsx */

import { Factory, Hammer } from "@phosphor-icons/react";

import { HeroImpact } from "./HeroImpact";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

const HERO_SLIDES = [
  { poster: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria002" },
  { poster: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria003" },
  { poster: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria001" },
];

export function HeroMaquinariaPesada() {
  const copy = useLocalizedContent({
    es: {
      alt: "Vista panoramica de operacion minera y produccion de cal",
      slideAlt: "Vista operativa",
      eyebrow: "Operación minera",
      title: "Operacion con maquinaria pesada",
      subtitle:
        "Movimiento de tierras, extraccion y soporte operativo en mineria no metalica con maquinaria pesada y control tecnico en campo.",
      badges: ["Equipos de Alto Rendimiento", "Operacion en mineria no metalica"],
      thumbnailAlt: "Vista de maquinaria",
      thumbnailLabel: "Mostrar vista de maquinaria",
    },
    en: {
      alt: "Panoramic view of mining operations and lime production",
      slideAlt: "Operational view",
      eyebrow: "Mining operation",
      title: "Heavy equipment operations",
      subtitle:
        "Earthmoving, extraction, and operational support in non-metallic mining with heavy equipment and technical control in the field.",
      badges: ["High-performance equipment", "Non-metallic mining operation"],
      thumbnailAlt: "Equipment view",
      thumbnailLabel: "Show equipment view",
    },
  });

  return (
    <HeroImpact
      slides={HERO_SLIDES}
      slideCount={3}
      alt={copy.alt}
      slideAlt={copy.slideAlt}
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.subtitle}
      compactTitle
      thumbnailAlt={copy.thumbnailAlt}
      thumbnailLabel={copy.thumbnailLabel}
      badges={[
        { icon: <Factory size={22} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[0] },
        { icon: <Hammer size={22} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[1] },
      ]}
    />
  );
}

export default HeroMaquinariaPesada;
