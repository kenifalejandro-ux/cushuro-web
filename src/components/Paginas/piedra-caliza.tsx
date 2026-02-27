"use client";

import { motion } from "framer-motion";
import { Factory, Pickaxe, Mountain, Layers, ShieldCheck, Droplets } from "lucide-react";
import { useRef } from "react";

import { ImageStack } from "../ui/ImageStack";

export default function PiedraCaliza() {
  const imageRef = useRef<HTMLDivElement | null>(null);

  const procesos = [
    {
      numero: "01",
      titulo: "Perforación y Extracción",
      descripcion:
        "Arranque de roca caliza en frente minero con control de banco para mantener continuidad y calidad del mineral.",
      icono: <Pickaxe size={24} />,
    },
    {
      numero: "02",
      titulo: "Carguío y Acarreo",
      descripcion:
        "Traslado del material desde cantera hacia planta con rutas optimizadas para reducir tiempos de ciclo.",
      icono: <Mountain size={24} />,
    },
    {
      numero: "03",
      titulo: "Chancado Primario",
      descripcion:
        "Reducción inicial de tamaño para facilitar clasificación y alimentación estable en etapas de transformación.",
      icono: <Factory size={24} />,
    },
    {
      numero: "04",
      titulo: "Clasificación Granulométrica",
      descripcion:
        "Separación por mallas para cumplir especificaciones técnicas de hornos caleros, cementeras y fundición.",
      icono: <Layers size={24} />,
    },
    {
      numero: "05",
      titulo: "Acopio y Despacho",
      descripcion:
        "Control de stock y despacho en formatos industriales para abastecimiento continuo de operación minera.",
      icono: <ShieldCheck size={24} />,
    },
  ];

  return (
    <section className="bg-white text-slate-800">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          Piedra Caliza Industrial - CaCO3
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-emerald-50 p-10 rounded-3xl shadow-md border border-emerald-100">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-6">Identificación</h3>
            <ul className="space-y-3">
              <li>
                <strong>Nombre Químico:</strong> Carbonato de Calcio
              </li>
              <li>
                <strong>Fórmula:</strong> CaCO3
              </li>
              <li>
                <strong>Pureza:</strong> Mayor a 90%
              </li>
              <li>
                <strong>Origen:</strong> Denuncios mineros propios
              </li>
              <li>
                <strong>Estado:</strong> Sólido, roca sedimentaria
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-10 rounded-3xl shadow-md border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Presentaciones</h3>
            <ul className="space-y-3">
              <li>Piedra bruta según extracción</li>
              <li>Chancada de 2" a 6"</li>
              <li>Material molido por especificación</li>
              <li>A granel en volquete</li>
              <li>Big Bag 1 TN - 1.5 TN</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-5">
            Proceso Operativo Minero
          </h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
            Flujo integral desde el frente de cantera hasta despacho técnico, orientado a alta
            disponibilidad de materia prima.
          </p>

          <div className="relative">
            <div className="absolute left-2 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-600 via-emerald-500 to-blue-700" />

            <div className="space-y-10">
              {procesos.map((item, index) => (
                <motion.article
                  key={item.numero}
                  initial={{ opacity: 0, x: 30, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative pl-10"
                >
                  <motion.span
                    className="absolute left-0 top-10 h-5 w-5 rounded-full bg-emerald-500 border-4 border-white shadow-[0_0_0_4px_rgba(59,130,246,0.20)]"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.15 }}
                  />

                  <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="h-1 bg-gradient-to-r from-blue-600 to-emerald-500"
                    />

                    <div className="p-7 md:p-9 flex flex-col md:flex-row md:items-start gap-5">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-700 to-emerald-600 text-white flex items-center justify-center shrink-0">
                        {item.icono}
                      </div>

                      <div>
                        <p className="text-xs tracking-[0.35em] font-bold text-emerald-600 mb-2">
                          ETAPA {item.numero}
                        </p>
                        <h3 className="text-2xl font-semibold text-blue-900 mb-3">{item.titulo}</h3>
                        <p className="text-slate-600">{item.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-white p-10 rounded-3xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Datos de Cantera y Producción</h3>
            <ul className="space-y-3 text-slate-700">
              <li>• Reserva con pureza de caliza superior al 90%</li>
              <li>• Granulometría adaptable para hornos y procesos metalúrgicos</li>
              <li>• Control de impurezas en cada etapa de clasificación</li>
              <li>• Abastecimiento continuo para operación calera 24/7</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-600 to-blue-800 text-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Aplicaciones en Minería</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur">
              <Factory className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Producción de Cal</h3>
              <p>Materia prima para hornos de cal viva e hidratada.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur">
              <Layers className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Fundente Metalúrgico</h3>
              <p>Soporte en procesos de fundición y refinación de minerales.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur">
              <Droplets className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Control Ambiental</h3>
              <p>Uso en neutralización y manejo de efluentes industriales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
