/**client/src/components/Paginas/operacion-con-maquinaria-pesada.tsx */

"use client";

import { motion } from "motion/react";
import { Construction, TrendingUp, ShieldCheck, Wrench, Factory, DollarSign, Award } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageStack } from "../ui/ImageStack";
import { ParallaxSection } from "../ui/ParallaxSection";

gsap.registerPlugin(ScrollTrigger);

export default function OperacionMaquinaria() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const machineryRef = useRef<HTMLDivElement>(null);
  const equipmentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación de tarjetas de maquinaria
    if (machineryRef.current) {
      const cards = machineryRef.current.querySelectorAll(".machinery-card");
      gsap.fromTo(
        cards,
        { opacity: 0, rotateY: 90 },
        {
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: machineryRef.current,
            start: "top 70%",
          },
        }
      );
    }

    // Animación de equipos
    if (equipmentRef.current) {
      const items = equipmentRef.current.querySelectorAll(".equipment-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: equipmentRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

const images = [
  { src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria001", alt: "Imagen 1" },
  { src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria002", alt: "Imagen 2" },
  { src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria003", alt: "Imagen 3" },
];


  return (
    <div className="min-h-screen bg-white">
      {/* Header Section
      <section className="relative bg-gradient-to-br from-zinc-900 via-blue-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Construction className="w-12 h-12 text-emerald-400" />
              <h1 className="text-5xl font-bold">
                Operación con Maquinaria Pesada
              </h1>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              Movimiento de tierras y operaciones especializadas en minería no metálica 
              con equipos de última generación.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Movimiento de Tierras */}
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
              <ImageStack images={images} className="h-[500px]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-zinc-800 mb-6">
                Movimiento de Tierras y Operaciones
              </h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Realizamos trabajos que requieren movilización de grandes volúmenes de material, 
                especialmente en minería no metálica.
              </p>

              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white p-8 rounded-xl shadow-xl mb-6">
                <h3 className="text-2xl font-bold mb-4">Criterios de Selección</h3>
                <p className="text-blue-50 mb-4">
                  La selección del pull de maquinaria depende de:
                </p>
                <div className="space-y-3">
                  {[
                    "Tipo de material",
                    "Grado de saturación",
                    "Geomorfología del terreno",
                    "Naturaleza del proyecto",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-zinc-700">
                    <span className="font-bold">Supervisión por ingeniería especializada</span> en 
                    la selección y operación de equipos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maquinaria y Equipos */}
      <section className="py-20 bg-white" ref={machineryRef}>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-zinc-800 mb-4"
          >
            Maquinaria y Equipos
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-lg text-zinc-600 mb-12 max-w-3xl mx-auto"
          >
            Priorizamos maquinaria de marcas reconocidas mundialmente
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { brand: "Caterpillar", color: "yellow", icon: Construction },
              { brand: "Volvo", color: "blue", icon: Construction },
              { brand: "Scania", color: "emerald", icon: Construction },
            ].map(({ brand, color, icon: Icon }, index) => (
              <motion.div
                key={index}
                className="machinery-card"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all border-2 border-${color}-200`}>
                  <Icon className={`w-16 h-16 text-${color}-600 mx-auto mb-4`} />
                  <h3 className="text-center text-2xl font-bold text-zinc-800">{brand}</h3>
                  <p className="text-center text-zinc-600 mt-2">Tecnología de punta</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zinc-100 to-blue-50 p-8 rounded-xl border-2 border-blue-200"
          >
            <div className="flex items-center gap-4">
              <Award className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-zinc-800 mb-2">
                  Control de Calidad
                </h3>
                <p className="text-zinc-600 text-lg">
                  Cada equipo es inspeccionado minuciosamente antes de compra o alquiler, 
                  garantizando máxima confiabilidad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipos por Horno */}
      <ParallaxSection speed={0.3} className="py-20 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container mx-auto px-6" ref={equipmentRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-zinc-800 mb-4"
          >
            Equipos por Horno (35 TM)
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-lg text-zinc-600 mb-12"
          >
            Herramientas especializadas para operaciones eficientes
          </motion.p>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { tool: "Carretillas", quantity: 6, icon: Wrench },
              { tool: "Barretones", quantity: 4, icon: Wrench },
              { tool: "Combas", quantity: 4, icon: Wrench },
              { tool: "Palanas", quantity: 5, icon: Wrench },
              { tool: "Zapapicos", quantity: 7, icon: Wrench },
              { tool: "Zaranda", quantity: 1, icon: Factory },
              { tool: "Molino", quantity: 1, icon: Factory },
              { tool: "Rastrillos", quantity: 2, icon: Wrench },
            ].map(({ tool, quantity, icon: Icon }, index) => (
              <motion.div
                key={index}
                className="equipment-item"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-lg text-zinc-800">{tool}</h3>
                    </div>
                    <div className="text-3xl font-bold text-emerald-600">{quantity}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Beneficios Operativos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-zinc-800 mb-12"
          >
            Beneficios Operativos
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Eficiencia en costos",
                desc: "Optimización de recursos financieros",
                color: "emerald",
              },
              {
                icon: Wrench,
                title: "Mantenimiento preventivo",
                desc: "Cuidado constante de equipos",
                color: "blue",
              },
              {
                icon: TrendingUp,
                title: "Cumplimiento de plazos",
                desc: "Entrega puntual garantizada",
                color: "zinc",
              },
              {
                icon: Factory,
                title: "Optimización de recursos",
                desc: "Máximo aprovechamiento",
                color: "emerald",
              },
            ].map(({ icon: Icon, title, desc, color }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-${color}-200 h-full`}>
                  <Icon className={`w-12 h-12 text-${color}-600 mb-4`} />
                  <h3 className="font-bold text-xl text-zinc-800 mb-2">{title}</h3>
                  <p className="text-zinc-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seguridad y Medio Ambiente */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-zinc-800 to-emerald-900 text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Compromisos Transversales
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Seguridad */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all"
            >
              <ShieldCheck className="w-16 h-16 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Seguridad</h3>
              <div className="space-y-2 text-blue-100">
                <p>• Liderazgo en seguridad</p>
                <p>• Cambio de actitud del trabajador</p>
                <p>• Cultura preventiva</p>
                <p>• Ambiente laboral saludable</p>
              </div>
            </motion.div>

            {/* Medio Ambiente */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all"
            >
              <Factory className="w-16 h-16 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Medio Ambiente</h3>
              <div className="space-y-2 text-emerald-100">
                <p>• Preservación ambiental</p>
                <p>• Control de impacto</p>
                <p>• Promoción de actividad forestal</p>
                <p>• Reforestación activa</p>
              </div>
            </motion.div>

            {/* Responsabilidad Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all"
            >
              <TrendingUp className="w-16 h-16 text-zinc-300 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Responsabilidad Social</h3>
              <div className="space-y-2 text-zinc-200">
                <p>• Reducción de desnutrición infantil</p>
                <p>• Mejora en salud pública</p>
                <p>• Apoyo educativo</p>
                <p>• Promoción del deporte</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reforestación */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white p-12 rounded-2xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">
                Programa de Reforestación
              </h2>
              <p className="text-xl text-emerald-50 mb-8 text-center">
                Comprometidos con la preservación del medio ambiente, 
                promovemos la reforestación con especies nativas:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {["Quinual", "Quishuar", "Eucalipto", "Aliso"].map((especie, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center font-bold text-xl hover:bg-white/30 transition-all"
                  >
                    🌳 {especie}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
