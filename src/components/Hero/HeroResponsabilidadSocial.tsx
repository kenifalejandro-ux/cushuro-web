/* client/src/components/Hero/HeroResponsabilidadSocial.tsx */

import { UsersThree, BookOpen, Heart, Trophy } from "@phosphor-icons/react";

import { HeroImpact } from "./HeroImpact";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

const HERO_IMAGE = "img-responsabilidad-social/hero/hero002";

export default function HeroResponsabilidadSocial() {
  const copy = useLocalizedContent({
    es: {
      alt: "Niños en aula y comunidad apoyada por Calera Santa Isabel",
      eyebrow: "Comunidad y desarrollo",
      title: "Responsabilidad social",
      subtitle:
        "Contribuimos al desarrollo humano de nuestras comunidades con iniciativas de educacion, salud, cultura y recreacion articuladas a largo plazo.",
      badges: ["Educación", "Salud Comunitaria", "Cultura e Identidad", "Deporte y Recreación"],
    },
    en: {
      alt: "Children in a classroom and community supported by Calera Santa Isabel",
      eyebrow: "Community and development",
      title: "Social responsibility",
      subtitle:
        "We contribute to the human development of our communities with long-term initiatives in education, health, culture, and recreation.",
      badges: ["Education", "Community Health", "Culture and Identity", "Sports and Recreation"],
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
        { icon: <BookOpen size={18} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[0] },
        { icon: <Heart size={18} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[1] },
        { icon: <UsersThree size={18} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[2] },
        { icon: <Trophy size={18} color="#10b981" style={{ flexShrink: 0 }} />, label: copy.badges[3] },
      ]}
    />
  );
}
