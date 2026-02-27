/**client/src/components/Paginas/transporte-logistico-especializado.tsx */


"use client";

import { motion } from "motion/react";
import { Truck, Radio, ShieldCheck, TrendingUp, Users, Factory, Leaf } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageStack } from "../ui/ImageStack";
import { ParallaxSection } from "../ui/ParallaxSection";

gsap.registerPlugin(ScrollTrigger);

export default function TransporteLogistico() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación de servicios
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll(".service-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
          },
        }
      );
    }

    // Animación de seguridad
    if (securityRef.current) {
      const items = securityRef.current.querySelectorAll(".security-item");
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: securityRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

const images = [
  { src: "img-servicios/hero/transporte-logistico/transporte-logistico001", alt: "Imagen 1" },
  { src: "img-servicios/hero/transporte-logistico/transporte-logistico004", alt: "Imagen 2" },
  { src: "img-servicios/hero/transporte-logistico/transporte-logistico005", alt: "Imagen 3" },
];


  return (
    <div className="min-h-screen bg-white">
      {/* Header Section 
      <section className="relative bg-gradient-to-br from-emerald-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-12 h-12 text-emerald-400" />
              contenido 
              <h1 className="text-5xl font-bold">
                Transporte Logístico Especializado
              </h1>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              Servicios de transporte especializado con control logístico, 
              supervisión permanente y coordinación operativa en campo.
            </p>
          </motion.div>
        </div>
      </section>*/}

      {/* Descripción del Servicio */}
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
                Descripción del Servicio
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                Brindamos servicios de transporte especializado operando bajo 
                criterios de excelencia y seguridad.
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-600"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Factory className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-zinc-800">Control Logístico</h3>
                    <p className="text-zinc-600">
                      Seguimiento en tiempo real de todas las operaciones
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-zinc-800">Supervisión Permanente</h3>
                    <p className="text-zinc-600">
                      Personal calificado en campo constantemente
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-zinc-600"
                >
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Radio className="w-6 h-6 text-zinc-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-zinc-800">Coordinación Operativa</h3>
                    <p className="text-zinc-600">
                      Comunicación directa y efectiva en el campo
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios de Transporte */}
      <section className="py-20 bg-white" ref={servicesRef}>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-zinc-800 mb-12"
          >
            Materiales que Transportamos
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Piedra caliza preparada", icon: Factory, color: "blue" },
              { title: "Óxido de calcio (Cal Viva)", icon: Factory, color: "emerald" },
              { title: "Carbón de piedra", icon: Factory, color: "zinc" },
              { title: "Insumos industriales", icon: Truck, color: "blue" },
            ].map(({ title, icon: Icon, color }, index) => (
              <motion.div
                key={index}
                className="service-card"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-${color}-200`}>
                  <div className={`w-16 h-16 bg-${color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-center font-bold text-zinc-800 text-lg">{title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema de Comunicaciones */}
      <ParallaxSection speed={0.3} className="py-20 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white p-12 rounded-2xl shadow-2xl"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Sistema de Comunicaciones</h2>
                  <p className="text-lg text-blue-50 mb-6 leading-relaxed">
                    Debido a la extensión de áreas en minería no metálica, 
                    trabajamos con sistemas especializados de comunicación.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-lg">Coordinación directa en campo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-lg">Supervisión presencial</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-lg">Comunicación móvil para seguimiento operativo</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <p className="text-blue-50">
                      ✓ Priorizamos la inspección física antes de ejecutar órdenes críticas, 
                      garantizando eficiencia y seguridad.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Seguridad en el Transporte */}
      <section className="py-20 bg-white" ref={securityRef}>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-zinc-800 mb-4"
          >
            Seguridad en el Transporte
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-lg text-zinc-600 mb-12 max-w-3xl mx-auto"
          >
            Consideramos la seguridad como un pilar fundamental de nuestra operación
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Deber ético y moral", icon: ShieldCheck, desc: "Compromiso con la integridad" },
              { title: "Responsabilidad social", icon: Users, desc: "Con nuestras comunidades" },
              { title: "Obligación legal", icon: Factory, desc: "Cumplimiento normativo" },
              { title: "Ventaja competitiva", icon: TrendingUp, desc: "Excelencia operativa" },
            ].map(({ title, icon: Icon, desc }, index) => (
              <motion.div
                key={index}
                className="security-item"
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-zinc-50 to-white p-8 rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all h-full">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="font-bold text-lg text-zinc-800 mb-2">{title}</h3>
                  <p className="text-zinc-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-xl border-2 border-emerald-200"
          >
            <h3 className="font-bold text-2xl text-zinc-800 mb-6 text-center">
              Trabajamos bajo estándares exigentes en:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="font-medium text-zinc-700">Seguridad industrial</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-zinc-700">Salud ocupacional</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                <ShieldCheck className="w-6 h-6 text-zinc-600 flex-shrink-0" />
                <span className="font-medium text-zinc-700">Prevención de riesgos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impacto Económico */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-emerald-800 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Impacto Económico
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Nuestro servicio logístico contribuye al dinamismo económico regional
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: "Operaciones mineras", desc: "Soporte logístico continuo" },
              { icon: TrendingUp, title: "Comercio local", desc: "Impulso a la economía regional" },
              { icon: Users, title: "Generación de empleo", desc: "Directo e indirecto" },
            ].map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all"
              >
                <Icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-blue-100 text-lg">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso Ambiental */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white p-12 rounded-2xl shadow-2xl text-center"
            >
              <Leaf className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
              <h2 className="text-3xl font-bold mb-4">Compromiso Ambiental</h2>
              <p className="text-xl text-blue-50 leading-relaxed">
                Operamos con responsabilidad ambiental, garantizando 
                el cumplimiento de todas las normativas vigentes y 
                promoviendo prácticas sostenibles en cada operación de transporte.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
