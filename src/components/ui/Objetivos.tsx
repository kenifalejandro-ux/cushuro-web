/* client/src/components/sections/Objetivos.tsx */

/* client/src/components/sections/Objetivos.tsx */

/* Visión - Variante Coal (Carbón/Gris) */

"use client";

import { Lightbulb } from "lucide-react";
import { LaEmpresaSection } from "../sections/LaEmpresaSection";
import { ImageStack } from "./ImageStack";

export default function Objetivos() {
  return (
    <LaEmpresaSection
    reverse={false}
      title="Objetivos"
      variant="oxide"
      description={`

        • Planificar, Ejecutar y Controlar trabajos en Producción y Comercialización de Óxido de
calcio de acuerdo a los estándares del Medio Ambiente, Seguridad, Producción y
responsabilidad social establecidos por el Ministerio de Energía y Minas, así como los
establecidos por los Clientes.

• Brindar oportunidades de trabajo a las comunidades propiciando su desarrollo
personal.
`}
      imageContainerClassName="overflow-visible rounded-none"
      imageElement={
       
         <ImageStack
          layout="stacked"
          images={[
            {
              src: "/img-la-empresa/objetivos/objetivos001",
              alt: "Proyección industrial",
              priority: true,
            },
          ]}
          
        />
      }
    />
  );
}
