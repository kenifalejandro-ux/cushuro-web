/**client/src/components/Paginas/transporte-logistico-especializado.tsx */


"use client";

import { motion } from "motion/react";
import { Truck, Radio,Mountain, Pickaxe, ShieldCheck, TrendingUp, Users, Factory, Leaf, Flame, ClipboardCheck, AlertTriangle } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReorderImageStack from "../ui/ReorderImageStack";



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
  { src: "img-servicios/img/flota-calera-noche/flota-calera-noche", alt: "Imagen 1" },
  { src: "img-servicios/hero/transporte-logistico/transporte-logistico004", alt: "Imagen 2" },
  { src: "img-servicios/hero/transporte-logistico/transporte-logistico005", alt: "Imagen 3" },
];


  return (
    <div className="dark-image min-h-screen bg-white">
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
      </section>

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
             <ReorderImageStack images={images} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

<h2 className="text-4xl font-bold text-blue-800 mb-6">
  Transporte Logístico Especializado
</h2>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-600"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Factory className="w-6 h-6 text-emerald-600" />
                  </div>
                 <div className="space-y-4"> {/* Añade espacio vertical entre bloques principales */}
  <div>
    <h2 className="text-xl font-bold text-zinc-800 mb-6">
  Transporte Logístico Especializado
</h2>

<p className="text-lg text-zinc-600 mb-4">
  Servicio de transporte para operaciones mineras no metálicas con 
  capacidad operativa de hasta <span className="font-semibold text-emerald-700">176 TM por día</span>.
</p>

<p className="text-zinc-600 mb-8">
  Garantizamos abastecimiento continuo de piedra caliza, óxido de calcio 
  y carbón de piedra, asegurando continuidad productiva y reducción 
  de tiempos de espera en campo.
</p>
  </div>

  <ul className="space-y-3"> {/* Espacio entre cada punto de la lista */}
    {[
      "Seguimiento en tiempo real de unidades",
      "Supervisión presencial en puntos críticos",
      "Coordinación directa con operaciones mineras",
    ].map((text, index) => (
      <li key={index} className="flex items-start gap-2 text-zinc-600">
        {/* Icono simple estilo Check */}
        <span className="text-blue-600 mt-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        {text}
      </li>
    ))}
  </ul>

  <p className="text-zinc-600 font-medium pt-2 border-t border-zinc-100">
Aseguramos continuidad operativa y reducción de riesgos logísticos en cada operación.  </p>
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
  Supervisión presencial en puntos críticos de carga y descarga, 
  garantizando control operativo y cumplimiento de protocolos de seguridad.
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
  Coordinación directa con el área de operaciones del cliente, 
  permitiendo respuesta inmediata ante contingencias y ajustes en campo.
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
           Materiales Estratégicos Transportados
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Piedra caliza preparada", icon: Mountain, color: "blue" },
{ title: "Óxido de calcio (Cal Viva)", icon: Flame, color: "emerald" },
{ title: "Carbón de piedra", icon: Pickaxe, color: "zinc" },
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

    {/* Seguridad y Cumplimiento Operativo */}
<section className="py-20 bg-white" ref={securityRef}>
  <div className="container mx-auto px-6">
    
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-zinc-800 mb-4"
    >
      Seguridad y Cumplimiento Operativo
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center text-lg text-zinc-600 mb-12 max-w-3xl mx-auto"
    >
      Operamos bajo estrictos estándares de seguridad industrial y normativa vigente en transporte para minería no metálica.
    </motion.p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Cumplimiento Normativo",
          icon: ShieldCheck,
          desc: "Operaciones alineadas a la normativa vigente en transporte y seguridad minera."
        },
        {
          title: "Protocolos de Seguridad",
          icon: ClipboardCheck,
          desc: "Procedimientos establecidos para carga, traslado y descarga en campo."
        },
        {
          title: "Supervisión en Operaciones",
          icon: Users,
          desc: "Control operativo presencial en puntos críticos de cada traslado."
        },
        {
          title: "Prevención de Riesgos",
          icon: AlertTriangle,
          desc: "Identificación y mitigación de riesgos en cada operación logística."
        },
      ].map(({ title, icon: Icon, desc }, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          className="bg-gradient-to-br from-zinc-50 to-white p-8 rounded-xl shadow-lg border border-zinc-200 hover:border-emerald-400 transition-all h-full"
        >
          <Icon className="w-12 h-12 text-emerald-600 mb-4" />
          <h3 className="font-bold text-lg text-zinc-800 mb-2">{title}</h3>
          <p className="text-zinc-600">{desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-14 bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-xl border border-emerald-200"
    >
      <h3 className="font-bold text-2xl text-zinc-800 mb-6 text-center">
        Estándares Aplicados en Cada Operación
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
    {/* capacidad operativa*/}
     <section className="light-image py-20 bg-zinc-900 text-white">
  <div className="container mx-auto px-6 text-center max-w-4xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        Capacidad Operativa Garantizada
      </motion.h2>
<div className="text-6xl font-extrabold text-emerald-400 mb-4">
  176 TM
</div>

    <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
      <div>✔ Transporte especializado en minería no metálica</div>
      <div>✔ Control logístico en campo</div>
      <div>✔ Seguridad y cumplimiento operativo</div>
    </div>
<p className="text-zinc-400 mt-4">
  Operaciones en zonas de difícil acceso y entornos de minería no metálica.
</p>
  </div>
</section>
    </div>
  );
}
