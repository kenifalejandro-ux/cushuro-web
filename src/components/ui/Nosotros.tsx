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
        <div className="max-w-3xl space-y-8 text-[15px] leading-8 text-zinc-600 md:text-base">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-zinc-300" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                
              </span>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-zinc-700 md:text-xl">
              Más de 15 años de experiencia en la producción y comercialización de óxido de
              calcio, con una operación orientada al abastecimiento confiable del sector
              minero e industrial.
            </p>

            <p>
              Nuestra empresa también tiene como objetivo generar empleo digno y sostenible
              para las personas del área de influencia del centro de operaciones, impulsando
              desarrollo local junto con continuidad operativa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.18)]">
              <h3 className="text-base font-medium tracking-[-0.02em] text-zinc-950">
                Experiencia operativa
              </h3>

              <ul className="mt-4 space-y-3 text-zinc-600">
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>Logística</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>Gestión de recursos humanos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>
                    Concesiones mineras no metálicas de piedra caliza y carbón de piedra
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.18)]">
              <h3 className="text-base font-medium tracking-[-0.02em] text-zinc-950">
                Estándares de gestión
              </h3>

              <ul className="mt-4 space-y-3 text-zinc-600">
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>Medio ambiente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>Seguridad y producción</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>Responsabilidad social</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 border-t border-zinc-200 pt-8">
            <p>
              Esta experiencia nos permite brindar un suministro de óxido de calcio con
              respaldo operativo, manteniendo abastecimiento constante para clientes de los
              sectores minero y azucarero en distintos puntos del país.
            </p>

            <p>
              Nuestra gestión empresarial integra calidad operativa, administración ordenada
              y desarrollo humano, promoviendo capacitación, motivación y mejora continua
              para fortalecer el crecimiento de nuestros trabajadores y de la organización.
            </p>
          </div>
        </div>
      }
      imageContainerClassName="overflow-visible rounded-none"
      imageElement={
        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-40 w-40 rounded-full bg-zinc-100 blur-3xl lg:block" />
          <div className="relative rounded-[2rem] border border-zinc-200/80 bg-zinc-50 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.18)] sm:p-5">
            <ImageStack
              layout="stacked"
              images={[
                {
                  src: "/img-la-empresa/nosotros/nosotros001",
                  alt: "Trabajo operativo en planta",
                },
              ]}
            />
          </div>
        </div>
      }
    />
  );
}