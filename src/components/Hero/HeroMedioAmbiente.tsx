/* client/src/components/Hero/HeroMedioAmbiente.tsx */

import { UsersThree, Plant, Heart } from "@phosphor-icons/react";

import { HeroImpact } from "./HeroImpact";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

const HERO_IMAGE = "img-medio-ambiente/hero/poster/HeroMedioAmbiente";

export default function HeroMedioAmbiente() {
  const copy = useLocalizedContent({
    es: {
      alt: "Niños en aula y comunidad apoyada por Calera Santa Isabel",
      eyebrow: "Compromiso sostenible",
      title: "Compromiso ambiental",
      subtitle:
        "Desarrollamos una cultura operativa basada en responsabilidad ambiental, trazabilidad y estandares de gestion sostenibles en toda la cadena productiva.",
      badges: ["Reforestación", "Salud Comunitaria", "Cultura e Identidad"],
    },
    en: {
      alt: "Children in a classroom and community supported by Calera Santa Isabel",
      eyebrow: "Sustainable commitment",
      title: "Environmental commitment",
      subtitle:
        "We develop an operating culture based on environmental responsibility, traceability, and sustainable management standards throughout the production chain.",
      badges: ["Reforestation", "Community Health", "Culture and Identity"],
    },
  });

  return (
    <HeroImpact
      image={HERO_IMAGE}
      alt={copy.alt}
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.subtitle}
      badges={[
        { icon: <Plant size={18} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[0] },
        { icon: <Heart size={18} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[1] },
        { icon: <UsersThree size={18} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[2] },
      ]}
    />
  );
}
