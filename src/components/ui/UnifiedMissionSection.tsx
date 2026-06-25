/**
 * UnifiedMissionSection.tsx
 * Componente reutilizable: Misión, Visión, Objetivos
 * Diseño Minera Boroo: hexágonos grandes, imágenes prominentes, contenido abajo
 */

"use client";

import { motion } from "motion/react";
import { OptimizedImage } from "./OptimizedImage";

interface MissionCard {
  type: "mision" | "vision" | "objetivos";
  title: string;
  description: string;
  image: string;
}

const missionCards: MissionCard[] = [
  {
    type: "mision",
    title: "Misión",
    description:
      "La misión de CALERA SANTA ISABEL DE CUSHURO SAC es otorgar productos de calidad en el suministro de óxido de calcio con responsabilidad ambiental, social, integridad e identificación con nuestro personal, proveedores, clientes y comunidad, fomentando la capacitación permanente de nuestros recursos humanos.",
    image: "img-la-empresa/mision/mision",
  },
  {
    type: "vision",
    title: "Visión",
    description:
      "La empresa se proyecta a consolidarse en el suministro de Óxido de Calcio en el mercado minero de la región La Libertad, siendo considerada como una empresa con credibilidad, confianza, seguridad y responsabilidad social por lo cual debe ser considerada como empresa de valor.",
    image: "img-la-empresa/vision/vision",
  },
  {
    type: "objetivos",
    title: "Objetivos",
    description:
      "Operar bajo estándares de Seguridad, Medio Ambiente y Producción exigidos. Garantizar continuidad en el suministro de Óxido de Calcio. Optimizar costos operativos mediante control logístico. Impulsar empleo local y desarrollo del personal. Liderar en la región norte.",
    image: "img-la-empresa/objetivos/objetivos",
  },
];

export function UnifiedMissionSection() {
  return (
    <section className="relative bg-stone-100 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Estrategia Corporativa
            </span>
            <div className="h-px w-12 bg-emerald-500" />
          </div>
        </motion.div>

        {/* Cards Grid - 3 columnas */}
        <div className="grid gap-8 lg:grid-cols-3">
          {missionCards.map((card, index) => (
            <motion.div
              key={card.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Container with Hexagon */}
              <div className="relative h-80 overflow-hidden bg-stone-200">
                <OptimizedImage
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hexagon Badge - positioned on top of image */}
                <div className="absolute left-1/2 top-6 z-20 -translate-x-1/2 transform">
                  <div
                    className="relative h-32 w-32 bg-gradient-to-br from-amber-400 to-amber-500 shadow-xl"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-center text-xl font-bold text-white leading-tight">
                        {card.title.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Container - Dark Background */}
              <div className="flex flex-1 flex-col bg-slate-800 p-8 text-white">
                <p className="text-sm leading-relaxed opacity-95">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
