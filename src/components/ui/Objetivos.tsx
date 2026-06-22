/* client/src/components/ui/Objetivos.tsx */

"use client";

import { LaEmpresaSection } from "../sections/LaEmpresaSection";
import { ImageStack } from "./ImageStack";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

export default function Objetivos() {
  const copy = useLocalizedContent({
    es: {
      title: "Objetivos Estratégicos",
      items: [
        "Operar bajo estándares de Seguridad, Medio Ambiente y Producción exigidos por el Ministerio de Energía y Minas y nuestros clientes.",
        "Garantizar continuidad y estabilidad en el suministro de Óxido de Calcio.",
        "Optimizar costos operativos mediante control logístico y eficiencia productiva.",
        "Impulsar el empleo local y el desarrollo del personal.",
        "Liderar en producción y comercialización de Óxido de Calcio en la región norte.",
        "Promover inversión privada en minería no metálica.",
      ],
      imageAlt: "Proyección industrial Cushuro",
    },
    en: {
      title: "Strategic Objectives",
      items: [
        "Operate under the Safety, Environment and Production standards required by the Ministry of Energy and Mines and our clients.",
        "Guarantee continuity and stability in the supply of Calcium Oxide.",
        "Optimize operational costs through logistics control and productive efficiency.",
        "Promote local employment and staff development.",
        "Lead in production and commercialization of Calcium Oxide in the northern region.",
        "Promote private investment in non-metallic mining.",
      ],
      imageAlt: "Cushuro industrial outlook",
    },
  });

  return (
    <LaEmpresaSection
      reverse={false}
      title={copy.title}
      label="OBJETIVOS"
      description={
        <ul className="space-y-4 text-[15px] leading-7 text-zinc-600 md:text-base">
          {copy.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-[10px] font-bold text-white">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      }
      imageContainerClassName="overflow-visible rounded-none"
      imageElement={
        <ImageStack
          layout="stacked"
          images={[
            {
              src: "/img-la-empresa/objetivos/objetivos",
              alt: copy.imageAlt,
              priority: true,
            },
          ]}
        />
      }
    />
  );
}
