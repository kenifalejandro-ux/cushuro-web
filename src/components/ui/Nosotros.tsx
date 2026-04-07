/* client/src/components/sections/Nosotros.tsx */

"use client";

import { LaEmpresaSection } from "../sections/LaEmpresaSection";
import { ImageStack } from "../ui/ImageStack";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

export default function Nosotros() {
  const copy = useLocalizedContent({
    es: {
      title: "Nosotros",
      intro:
        "Más de 15 años de experiencia en la producción y comercialización de óxido de calcio, con una operación orientada al abastecimiento confiable del sector minero e industrial.",
      body:
        "Nuestra empresa también tiene como objetivo generar empleo digno y sostenible para las personas del área de influencia del centro de operaciones, impulsando desarrollo local junto con continuidad operativa.",
      experienceTitle: "Experiencia operativa",
      experienceItems: [
        "Logística",
        "Gestión de recursos humanos",
        "Concesiones mineras no metálicas de piedra caliza y carbón de piedra",
      ],
      standardsTitle: "Estándares de gestión",
      standardsItems: ["Medio ambiente", "Seguridad y producción", "Responsabilidad social"],
      closing: [
        "Esta experiencia nos permite brindar un suministro de óxido de calcio con respaldo operativo, manteniendo abastecimiento constante para clientes de los sectores minero y azucarero en distintos puntos del país.",
        "Nuestra gestión empresarial integra calidad operativa, administración ordenada y desarrollo humano, promoviendo capacitación, motivación y mejora continua para fortalecer el crecimiento de nuestros trabajadores y de la organización.",
      ],
      imageAlt: "Trabajo operativo en planta",
    },
    en: {
      title: "About Us",
      intro:
        "More than 15 years of experience in the production and commercialization of calcium oxide, with an operation focused on reliable supply for the mining and industrial sectors.",
      body:
        "Our company also aims to generate dignified and sustainable employment for people in the area of influence of the operations center, promoting local development together with operational continuity.",
      experienceTitle: "Operational experience",
      experienceItems: [
        "Logistics",
        "Human resources management",
        "Non-metallic mining concessions for limestone and coal",
      ],
      standardsTitle: "Management standards",
      standardsItems: ["Environment", "Safety and production", "Social responsibility"],
      closing: [
        "This experience allows us to provide calcium oxide supply with operational support, maintaining constant service for clients in the mining and sugar sectors across the country.",
        "Our business management integrates operational quality, organized administration, and human development, promoting training, motivation, and continuous improvement to strengthen the growth of our workforce and the organization.",
      ],
      imageAlt: "Operational work at the plant",
    },
  });

  return (
    <LaEmpresaSection
      title={copy.title}
      description={
        <div className="max-w-3xl space-y-8 text-[15px] leading-8 text-zinc-600 md:text-base">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-zinc-300" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                
              </span>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-zinc-700 md:text-xl">
              {copy.intro}
            </p>

            <p>{copy.body}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.18)]">
              <h3 className="text-base font-medium tracking-[-0.02em] text-zinc-950">
                {copy.experienceTitle}
              </h3>

              <ul className="mt-4 space-y-3 text-zinc-600">
                {copy.experienceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.18)]">
              <h3 className="text-base font-medium tracking-[-0.02em] text-zinc-950">
                {copy.standardsTitle}
              </h3>

              <ul className="mt-4 space-y-3 text-zinc-600">
                {copy.standardsItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 border-t border-zinc-200 pt-8">
            {copy.closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      }
      imageContainerClassName="overflow-visible rounded-none"
      imageElement={
        <div className="relative bg-stone-100 ">
          <div className="absolute -left-8 top-10 hidden h-40 w-40 " />
            <ImageStack
              layout="stacked"
              showOverlay={false}
              images={[
                {
                  src: "/img-la-empresa/nosotros/nosotros",
                  alt: copy.imageAlt,
                },
              ]}
            />
          </div>
        
      }
    />
  );
}
