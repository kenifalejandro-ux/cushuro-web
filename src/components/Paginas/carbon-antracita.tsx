"use client";

import { motion } from "framer-motion";
import { Factory, Pickaxe, Flame, Zap, ShieldCheck, Droplets } from "lucide-react";
import { useRef } from "react";

import { ImageStack } from "../ui/ImageStack";

export default function CarbonAntracita() {
  const imageRef = useRef<HTMLDivElement | null>(null);

  const procesos = [
    {
      numero: "01",
      titulo: "Selección de Veta",
      descripcion:
        "Evaluación de frente para extraer carbón antracita de alto rango con mayor contenido de carbono fijo.",
      icono: <Pickaxe size={24} />,
    },
    {
      numero: "02",
      titulo: "Extracción y Acarreo",
      descripcion:
        "Operación minera para traslado seguro del mineral hacia planta de acondicionamiento térmico.",
      icono: <Factory size={24} />,
    },
    {
      numero: "03",
      titulo: "Chancado y Zarandeo",
      descripcion:
        "Clasificación granulométrica para hornos caleros y procesos industriales de combustión estable.",
      icono: <Zap size={24} />,
    },
    {
      numero: "04",
      titulo: "Secado y Reducción de Humedad",
      descripcion:
        "Ajuste de humedad para elevar la eficiencia energética y mejorar desempeño en combustión continua.",
      icono: <Flame size={24} />,
    },
    {
      numero: "05",
      titulo: "Control de Calidad y Despacho",
      descripcion:
        "Validación de poder calorífico, cenizas y azufre para despacho confiable a operación minera 24/7.",
      icono: <ShieldCheck size={24} />,
    },
  ];

  return (
    <section className="bg-white text-slate-800">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          Carbón Antracita - Energía de Alto Desempeño
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-emerald-50 p-10 rounded-3xl shadow-md border border-emerald-100">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-6">Identificación</h3>
            <ul className="space-y-3">
              <li>
                <strong>Clasificación:</strong> Carbón mineral de alto rango
              </li>
              <li>
                <strong>Carbono fijo:</strong> 85% - 95%
              </li>
              <li>
                <strong>Cenizas:</strong> 3% - 10%
              </li>
              <li>
                <strong>Azufre:</strong> &lt; 1%
              </li>
              <li>
                <strong>Estado:</strong> Sólido granulado
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-10 rounded-3xl shadow-md border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Presentaciones</h3>
            <ul className="space-y-3">
              <li>Grueso: 50 - 100 mm</li>
              <li>Medio: 20 - 50 mm</li>
              <li>Fino: 0 - 20 mm</li>
              <li>Sacos 40 Kg</li>
              <li>Big Bag y granel industrial</li>
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
            Secuencia productiva orientada a eficiencia térmica y suministro estable para hornos de
            alta exigencia.
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
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Datos de Energía y Control</h3>
            <ul className="space-y-3 text-slate-700">
              <li>• Poder calorífico entre 7,500 y 8,500 kcal/kg</li>
              <li>• Bajo contenido de volátiles para llama estable</li>
              <li>• Menor generación de residuos frente a carbones de menor rango</li>
              <li>• Aseguramiento de calidad por lote antes de despacho</li>
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
              <h3 className="text-xl font-semibold mb-3">Hornos Caleros</h3>
              <p>Combustión continua para calcinación eficiente y estable.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur">
              <Zap className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Procesos Térmicos</h3>
              <p>Energía para fundición, secado y operación metalúrgica.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur">
              <Droplets className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Filtración Industrial</h3>
              <p>Uso en medios filtrantes para tratamiento y clarificación de agua.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
