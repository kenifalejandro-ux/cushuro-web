/**client/src/components/Paginas/suministro-de-oxido-de-calcio.tsx */


"use client";

import { motion } from "motion/react";
import { Factory, Flame, MapPin, Users, Leaf, ShieldCheck } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageStack } from "../ui/ImageStack";
import { ParallaxSection } from "../ui/ParallaxSection";

gsap.registerPlugin(ScrollTrigger);

export default function OxidodeCalcio() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación de estadísticas
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll(".stat-card");
      gsap.fromTo(
        stats,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    }

    // Animación del proceso
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll(".process-step");
      gsap.fromTo(
        steps,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

 const images = [
  { src: "img-servicios/hero/hero-oxido-de-calcio/oxido-de-calcio001", alt: "Imagen 1" },
  { src: "img-servicios/hero/hero-oxido-de-calcio/oxido-de-calcio002", alt: "Imagen 2" },
  { src: "img-servicios/hero/hero-oxido-de-calcio/oxido-de-calcio003", alt: "Imagen 3" },
];


  return (
    <div className="min-h-screen bg-white">

      {/* Image Stack Section */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageStack images={images} className="h-[500px] " />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-zinc-800 mb-6">
                Concesiones Propias
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Factory className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-zinc-800">Piedra Caliza</h3>
                    <p className="text-zinc-600">
                      Extracción directa de nuestras concesiones mineras
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-600">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Flame className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-zinc-800">Carbón de Piedra</h3>
                    <p className="text-zinc-600">
                      Suministro garantizado para procesos de producción continua
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
                <p className="text-zinc-700 font-medium">
                  ✓ Abastecimiento continuo y control de calidad en todo el proceso productivo
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capacidad de Producción */}
      <section className="py-20 bg-white" ref={statsRef}>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-zinc-800 mb-12"
          >
            Capacidad de Producción
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="stat-card bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-xl">
              <div className="text-5xl font-bold mb-2">5</div>
              <div className="text-xl font-semibold mb-2">Hornos Operativos</div>
              <div className="text-blue-100">Producción 24/7</div>
            </div>

            <div className="stat-card bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-8 rounded-xl shadow-xl">
              <div className="text-5xl font-bold mb-2">176</div>
              <div className="text-xl font-semibold mb-2">Toneladas Diarias</div>
              <div className="text-emerald-100">Capacidad total</div>
            </div>

            <div className="stat-card bg-gradient-to-br from-zinc-700 to-zinc-800 text-white p-8 rounded-xl shadow-xl">
              <div className="text-5xl font-bold mb-2">75</div>
              <div className="text-xl font-semibold mb-2">Trabajadores</div>
              <div className="text-zinc-300">5 hornos operativos</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="stat-card bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Hornos de 35 TM</h3>
              <div className="flex items-center gap-2 text-zinc-700">
                <span className="text-3xl font-bold text-blue-600">4</span>
                <span>unidades en operación</span>
              </div>
            </div>

            <div className="stat-card bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
              <h3 className="font-bold text-lg text-emerald-900 mb-3">Horno de 30 TM</h3>
              <div className="flex items-center gap-2 text-zinc-700">
                <span className="text-3xl font-bold text-emerald-600">1</span>
                <span>unidad en operación</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-zinc-100 p-6 rounded-lg flex items-start gap-4">
            <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-zinc-800 mb-2">Ubicación de Planta</h3>
              <p className="text-zinc-600 text-lg">
                Caserío Rodeopampa – Marcabal – Huamachuco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Producción */}
      <ParallaxSection speed={0.3} className="py-20 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container mx-auto px-6" ref={processRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-zinc-800 mb-16"
          >
            Proceso de Producción
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { step: 1, title: "Extracción de piedra caliza", icon: Factory },
              { step: 2, title: "Preparación y clasificación", icon: Users },
              { step: 3, title: "Quemado en hornos industriales", icon: Flame },
              { step: 4, title: "Separación de desechos", icon: ShieldCheck },
              { step: 5, title: "Distribución al cliente", icon: Factory },
            ].map(({ step, title, icon: Icon }) => (
              <motion.div
                key={step}
                className="process-step flex items-center gap-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow"
                whileHover={{ x: 10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-800">{title}</h3>
                </div>
                <Icon className="w-8 h-8 text-blue-600" />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="font-bold text-blue-900 mb-3">Consumo de Materia Prima</h3>
              <p className="text-zinc-700">
                <span className="font-bold text-blue-600">2 TM</span> de piedra caliza → 
                <span className="font-bold text-emerald-600"> 1 TM</span> de cal viva
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
              <h3 className="font-bold text-emerald-900 mb-3">Consumo de Carbón</h3>
              <p className="text-zinc-700">
                <span className="font-bold text-emerald-600">60 TM</span> de carbón → 
                <span className="font-bold text-blue-600"> 176 TM</span> producción diaria
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Aplicaciones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-zinc-800 mb-12"
          >
            Aplicaciones del Óxido de Calcio
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Industria minera",
              "Producción de cemento",
              "Acero",
              "Caucho",
              "Productos farmacéuticos",
              "Papel",
              "Agricultura",
              "Industria química",
            ].map((aplicacion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-lg border-2 border-blue-200 text-center hover:border-blue-400 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-zinc-800">{aplicacion}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Ventajas Competitivas
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Factory, text: "Denuncios propios de piedra caliza y carbón" },
              { icon: Flame, text: "Producción continua 24 horas" },
              { icon: Factory, text: "Logística propia" },
              { icon: ShieldCheck, text: "Cumplimiento de estándares del Ministerio de Energía y Minas" },
              { icon: Leaf, text: "Compromiso ambiental y social" },
            ].map(({ icon: Icon, text }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all"
              >
                <Icon className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <p className="text-lg">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mano de Obra */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-zinc-800 mb-12"
          >
            Mano de Obra por Horno (35 TM)
          </motion.h2>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { role: "Preparación de piedra", workers: 6 },
              { role: "Transporte", workers: 4 },
              { role: "Operador de quemado", workers: 1 },
              { role: "Preparadores de carbón", workers: 2 },
              { role: "Separación de desechos", workers: 2 },
            ].map(({ role, workers }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-800">{role}</h3>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-2xl font-bold text-blue-600">{workers}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-8 rounded-lg shadow-xl text-center"
            >
              <div className="text-5xl font-bold mb-2">15</div>
              <div className="text-xl">Trabajadores totales por horno</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
