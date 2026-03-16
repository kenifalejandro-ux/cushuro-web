/**client/src/components/Paginas/operacion-con-maquinaria-pesada.tsx */

"use client";

import { motion } from "motion/react";
import { Construction, TrendingUp, ShieldCheck, Wrench, Truck, ShoppingCart, MapPin, CheckCircle2, Mountain, AlertTriangle, ClipboardCheck, Users } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReorderImageStack from "../ui/ReorderImageStack";
import { ParallaxSection } from "../ui/ParallaxSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

gsap.registerPlugin(ScrollTrigger);

export default function OperacionMaquinaria() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const machineryRef = useRef<HTMLDivElement>(null);
  const equipmentRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);
  

  

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

    // Animación de metodología
    if (methodologyRef.current) {
      const steps = methodologyRef.current.querySelectorAll(".methodology-step");
      gsap.fromTo(
        steps,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: methodologyRef.current,
            start: "top 70%",
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
  const operaciones = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Movimiento de Tierras",
      description: "Nivelación, corte, relleno y conformación de plataformas para operación minera.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Extracción y Carguío",
      description: "Operación controlada para extracción eficiente de material en cantera.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Soporte Operativo",
      description: "Preparación de accesos, mantenimiento de vías internas y apoyo logístico en campo.",
    },
  ];

  const maquinaria = [
    {
      name: "Cargadores frontales",
      description: "Equipos de alto rendimiento para operación continua en cantera.",
      icon: <Construction className="w-12 h-12" />,
    },
    {
      name: "Excavadoras hidráulicas",
      description: "Equipos de alto rendimiento para operación continua en cantera.",
      icon: <TrendingUp className="w-12 h-12" />,
    },
    {
      name: "Volquetes de alto tonelaje",
      description: "Equipos de alto rendimiento para operación continua en cantera.",
      icon: <Truck className="w-12 h-12" />,
    },
    {
      name: "Equipos auxiliares de apoyo",
      description: "Equipos de alto rendimiento para operación continua en cantera.",
      icon: <ShieldCheck className="w-12 h-12" />,
    },
  ];

  const metodologia = [
    {
      step: "01",
      text: "Evaluación técnica del terreno y condiciones geomecánicas.",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      step: "02",
      text: "Selección estratégica del pull de maquinaria según tipo de material.",
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
    {
      step: "03",
      text: "Planificación de ciclos de operación y tiempos de ejecución.",
      icon: <ClipboardCheck className="w-5 h-5" />,
    },
    {
      step: "04",
      text: "Supervisión permanente por personal técnico especializado.",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div className="dark-image min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen  overflow-hidden">
        {/* Mining Trucks Pattern Overlay */}


        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
             {/* Image Stack */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ReorderImageStack images={images} />
            </motion.div>
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-16 bg-emerald-500" />
                  <span className="text-zinc-400 tracking-wider uppercase text-sm font-medium">Operaciones de Campo</span>
                </div>
                <h1 className="text-xl lg:text-2xl xl:text-4xl font-black text-zinc-800 leading-tight">
                  Capacidad Operativa en Campo
                </h1>
                <p className="text-xl text-zinc-800 leading-relaxed max-w-2xl">
                  Ejecutamos movimiento de tierras, extracción y conformación de terreno en proyectos de minería no metálica, bajo planificación técnica y supervisión especializada.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="text-3xl font-black text-emerald-400">100%</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Control</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-emerald-400">24/7</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Operación</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-emerald-400">Alto</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Rendimiento</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Operaciones Section */}
      <section className="py-24 bg-white relative">        
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-blue-900" />
              <span className="text-emerald-600 font-medium uppercase tracking-wider text-sm">Servicios Especializados</span>
              <div className="h-px w-12 bg-blue-900" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 mb-4">Operaciones en Campo</h2>
          </motion.div>

          <div ref={machineryRef} className="grid md:grid-cols-3 gap-8">
            {operaciones.map((op, index) => (
              <motion.div
                key={index}
                className="machinery-card group relative bg-gradient-to-br from-zinc-50 to-white border-2 border-zinc-200 hover:border-emerald-500 rounded-none p-8 transition-all duration-300 hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-900 transition-all duration-300 group-hover:border-emerald-500" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-900 transition-all duration-300 group-hover:border-emerald-500" />
                
                <div className="relative z-10">
                  <div className="mb-6 text-blue-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {op.icon}
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 mb-4">{op.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{op.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flota de Maquinaria Section with Carousel */}
      <section className="light-image py-24 max-w-7x relative overflow-hidden bg-blue-900">
        {/* Excavator and Gears Pattern */}


        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-emerald-500" />
              <span className="text-emerald-400 font-medium uppercase tracking-wider text-sm">Equipamiento</span>
              <div className="h-px w-12 bg-emerald-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-zinc-100 mb-4">Flota de Maquinaria</h2>
          </motion.div>

          {/* Carousel */}
          <div className="max-w-7xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {maquinaria.map((equipo, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="bg-zinc-800 backdrop-blur-sm border-2 border-zinc-700 hover:border-emerald-500 rounded-none p-8 h-full transition-all duration-300 group">
                        <div className="mb-6 text-zinc-100 group-hover:scale-110 transition-transform duration-300">
                          {equipo.icon}
                        </div>
                        <h3 className="text-xl font-black text-white mb-3">{equipo.name}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{equipo.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-blue-900 hover:bg-emerald-600 text-white border-none" />
              <CarouselNext className="bg-blue-900 hover:bg-emerald-600 text-white border-none" />
            </Carousel>
          </div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-zinc-800 backdrop-blur-sm border border-zinc-700 rounded-none px-8 py-4">
              <p className="text-zinc-400 text-sm mb-3 uppercase tracking-widest">Operamos con maquinaria de marcas reconocidas</p>
              <div className="flex items-center gap-8 text-emerald-400 font-black text-xl">
                <span>CATERPILLAR</span>
                <span className="text-zinc-600">•</span>
                <span>VOLVO</span>
                <span className="text-zinc-600">•</span>
                <span>SCANIA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metodología Operativa */}
      <ParallaxSection className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-blue-900" />
              <span className="text-emerald-600 font-medium uppercase tracking-wider text-sm">Proceso Técnico</span>
              <div className="h-px w-12 bg-blue-900" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 mb-4">Metodología Operativa</h2>
          </motion.div>

          <div ref={methodologyRef} className="max-w-4xl mx-auto space-y-6">
            {metodologia.map((item, index) => (
              <div
                key={index}
                className="methodology-step group flex items-start gap-6 bg-gradient-to-r from-zinc-50 to-white border-l-4 border-blue-900 hover:border-emerald-500 p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-900 group-hover:bg-emerald-600 text-white flex items-center justify-center transition-colors duration-300">
                    <span className="text-2xl font-black">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="text-emerald-600 mt-1 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <p className="text-zinc-700 text-lg leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Seguridad y Control */}
      <section className="light-image py-24 bg-zinc-900 relative overflow-hidden">
        {/* Safety Stripes Pattern */}


        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-medium uppercase tracking-wider text-sm">Compromiso Total</span>
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Seguridad y Control Operativo</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-sm border-2 border-zinc-700 rounded-none p-10"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Operamos bajo <span className="text-white font-bold">estándares exigentes de seguridad industrial</span>, salud ocupacional y control ambiental, garantizando operaciones responsables, reducción de riesgos y continuidad operativa.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-zinc-700">
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-400 mb-2">ISO</div>
                    <div className="text-sm text-zinc-400 uppercase tracking-wide">Certificaciones</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-400 mb-2">0</div>
                    <div className="text-sm text-zinc-400 uppercase tracking-wide">Accidentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-400 mb-2">+100</div>
                    <div className="text-sm text-zinc-400 uppercase tracking-wide">Proyectos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
