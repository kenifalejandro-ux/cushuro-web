/* client/src/components/sections/Nosotros.tsx */

"use client";

import { Truck, UsersThree, Mountains, Leaf, HardHat, Handshake } from "@phosphor-icons/react";

import { LaEmpresaSection } from "../sections/LaEmpresaSection";
import { ImageStack } from "../ui/ImageStack";
import { useLocalizedContent } from "../../context/SiteLanguageContext";


// Íconos temáticos por posición (mismo orden en es/en)
const EXPERIENCE_ICONS = [Truck, UsersThree, Mountains];
const STANDARDS_ICONS = [Leaf, HardHat, Handshake];


export default function Nosotros() {

  const copy = useLocalizedContent({
    es: {
      label: "QUIÉNES SOMOS",
      title: "Nosotros",
      intro:
        "Más de 15 años de experiencia técnica asegurando la continuidad química y metalúrgica de la minería en la región norte.",
      body:
        "Integramos concesiones propias de piedra caliza y carbón, capacidad productiva instalada y logística operativa para garantizar abastecimiento ininterrumpido de óxido de calcio al sector minero e industrial. Generamos empleo local sostenible en nuestra área de influencia.",
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
      label: "WHO WE ARE",
      title: "About Us",
      intro:
        "More than 15 years of technical experience ensuring the chemical and metallurgical continuity of mining in the northern region.",
      body:
        "We integrate owned limestone and coal concessions, installed production capacity, and operational logistics to guarantee uninterrupted calcium oxide supply to the mining and industrial sector. We generate sustainable local employment in our area of influence.",
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
      label={copy.label}
      description={
        <div className="max-w-3xl space-y-8  text-[15px] leading-8 text-zinc-600 md:text-base">
          <div className="space-y-4">
            <p className="max-w-2xl text-lg leading-8 text-zinc-700 md:text-xl">
              {copy.intro}
            </p>

            <p>{copy.body}</p>
          </div>

          <div className="grid grid-cols-2 gap-0 md:grid-cols-2 lg:grid-cols-2 max-md:-mx-8 max-md:divide-x-1 max-md:divide-[#4fa81e]">
            <div className=" dark-image bg-zinc-900 p-4 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.18)] sm:rounded-[1.75rem] sm:border sm:border-zinc-200 sm:p-6">
              <h3 className="text-sm font-medium tracking-[-0.02em] text-zinc-50 sm:text-base">
                {copy.experienceTitle}
              </h3>

              <ul className="mt-3 space-y-2 text-[13px] leading-snug text-zinc-300 sm:mt-4 sm:space-y-3 sm:text-[15px] sm:leading-normal">
                {copy.experienceItems.map((item, i) => {
                  const Icon = EXPERIENCE_ICONS[i] ?? Truck;
                  return (
                    <li key={item} className="flex items-start gap-2 sm:gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#4fa81e]/10 text-[#2d6e1a] sm:h-7 sm:w-7">
                        <Icon size={15} weight="duotone" className="sm:hidden" />
                        <Icon size={17} weight="duotone" className="hidden sm:block" />
                      </span>
                      <span className="pt-0.5 sm:pt-1">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className=" dark-image bg-zinc-900 p-4 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.18)] sm:rounded-[1.75rem] sm:border sm:border-zinc-200 sm:p-6">
              <h3 className="text-sm font-medium tracking-[-0.02em] text-zinc-50 sm:text-base">
                {copy.standardsTitle}
              </h3>

              <ul className="mt-3 space-y-2 text-[13px] leading-snug text-zinc-300 sm:mt-4 sm:space-y-3 sm:text-[15px] sm:leading-normal">
                {copy.standardsItems.map((item, i) => {
                  const Icon = STANDARDS_ICONS[i] ?? Leaf;
                  return (
                    <li key={item} className="flex items-start gap-2 sm:gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#4fa81e]/10 text-[#2d6e1a] sm:h-7 sm:w-7">
                        <Icon size={15} weight="duotone" className="sm:hidden" />
                        <Icon size={17} weight="duotone" className="hidden sm:block" />
                      </span>
                      <span className="pt-0.5 sm:pt-1">{item}</span>
                    </li>
                  );
                })}
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
