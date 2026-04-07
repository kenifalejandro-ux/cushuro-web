/* client/src/components/sections/Objetivos.tsx */

/* Visión - Variante Coal (Carbón/Gris) */

"use client";

import { LaEmpresaSection } from "../sections/LaEmpresaSection";
import { ImageStack } from "./ImageStack";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

export default function Objetivos() {
  const copy = useLocalizedContent({
    es: {
      title: "Objetivos",
      description: `
        • Planificar, ejecutar y controlar trabajos en producción y comercialización de óxido de calcio de acuerdo con los estándares de medio ambiente, seguridad, producción y responsabilidad social establecidos por el Ministerio de Energía y Minas, así como por los clientes.

• Brindar oportunidades de trabajo a las comunidades propiciando su desarrollo personal.
`,
      imageAlt: "Proyección industrial",
    },
    en: {
      title: "Objectives",
      description: `
        • Plan, execute, and control calcium oxide production and commercialization work in accordance with environmental, safety, production, and social responsibility standards established by the Ministry of Energy and Mines, as well as by our clients.

• Provide job opportunities to communities, encouraging their personal development.
`,
      imageAlt: "Industrial outlook",
    },
  });

  return (
    <LaEmpresaSection
    reverse={false}
      title={copy.title}
      description={copy.description}
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
