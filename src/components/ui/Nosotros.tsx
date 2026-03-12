/* client/src/components/sections/Nosotros.tsx */

"use client";

import { LaEmpresaSection } from "../sections/LaEmpresaSection";
import { ImageStack } from "../ui/ImageStack";

export default function Nosotros() {
  return (
    <LaEmpresaSection
      title="Nosotros"
      variant="oxide"
      description={
        <div className="space-y-4">
          <p>
            Somos una empresa con mas de 15 años de experiencia en la producción y comercialización
            de óxido de calcio y como objetivo principal generar empleo
digno y decente a las personas del área de influencia del centro de Operaciones.
          </p>
          <p>Se tiene la expereriencia en:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Logística</li>
            <li>Recursos humanos</li>
             <li>Concesiones mineras no metálicas (piedra caliza y carbón de piedra).</li>
          </ul>

          <p>
            Que nos permite brindar el mejor servicio en el suministro de óxido de calcio, lo que nos ha
            permitido a través de los años abastecer exitosamente al sector minero y azucarero
            en diversos lugares del país.
          </p>

          <p>
            La gestión empresarial de CALERA &quot;SANTA ISABEL DE CUSHURO SAC&quot; está basada
            en la conservación de estándares de calidad en:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Medio ambiente</li>
            <li>Seguridad y producción</li>
            <li>Responsabilidad social</li>
          </ul>

          <p>
            Estos son elementos importantes para cumplir los objetivos y garantizar un buen
            manejo administrativo y operativo. La meta en recursos humanos es que los
            trabajadores se desarrollen y alcancen sus objetivos a través de capacitación,
            motivación y promoción permanente.
          </p>
        </div>
      }
      imageContainerClassName="overflow-visible rounded-none "

      imageElement={
        <ImageStack
          layout="stacked"
          images={[
            {
              src: "/img-la-empresa/nosotros/nosotros001",
              alt: "Trabajo operativo",
            },
            
          ]}
         
        />
      }
    />
  );
}
