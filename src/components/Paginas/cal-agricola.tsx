/**client/src/components/Paginas/cal-agricola.tsx */

"use client";

import { motion } from "motion/react";
import {
  Factory,
  Flame,
  MapPin,
  Users,
  Leaf,
  ShieldCheck,
  Pickaxe,
  Mountain,
  Layers
} from "lucide-react";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ReorderImageStack from "../ui/ReorderImageStack";
import { ParallaxSection } from "../ui/ParallaxSection";

gsap.registerPlugin(ScrollTrigger);

export default function CalAgricola() {

  const statsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll(".stat-card");

      gsap.fromTo(
        stats,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: .8,
          stagger: .2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%"
          }
        }
      );
    }

    if (processRef.current) {
      const steps = processRef.current.querySelectorAll(".process-step");

      gsap.fromTo(
        steps,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: .7,
          stagger: .15,
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 75%"
          }
        }
      );
    }

  }, []);

  const images = [
    { src: "img-productos/cal-agricola/cal-agricola001", alt: "Producción de cal" },
    { src: "img-productos/cal-agricola/cal-agricola002", alt: "Hornos industriales" },
    { src: "img-productos/cal-agricola/envasado-cal-agricola", alt: "Extracción minera" },
  ];

  const procesos = [
  {
    etapa: "01",
    titulo: "Extracción y Selección de Caliza",
    descripcion:
      "Materia prima proveniente de cantera propia, seleccionada por su alto contenido de carbonato de calcio para garantizar eficiencia en el proceso de transformación.",
    icon: Pickaxe
  },
  {
    etapa: "02",
    titulo: "Calcinación en Horno Industrial",
    descripcion:
      "Transformación térmica de la caliza a temperaturas superiores a 900°C para la obtención de Óxido de Calcio (CaO) de alta pureza.",
    icon: Flame
  },
  {
    etapa: "03",
    titulo: "Hidratación Controlada",
    descripcion:
      "Proceso técnico de adición controlada de agua para convertir el CaO en Hidróxido de Calcio (Ca(OH)₂), asegurando alta reactividad y estabilidad química.",
    icon: Layers
  },
  {
    etapa: "04",
    titulo: "Molienda y Control de Calidad",
    descripcion:
      "Clasificación granulométrica y verificación de pureza, reactividad y parámetros físico-químicos para aplicaciones en minería y control ambiental.",
    icon: ShieldCheck
  },
  {
    etapa: "05",
    titulo: "Despacho y Logística Especializada",
    descripcion:
      "Envasado en sacos, big bag o despacho a granel con logística programada para operaciones mineras y proyectos de rehabilitación ambiental.",
    icon: Factory
  },
];

  return (
    <div className="dark-image bg-white">

     {/* HERO IMÁGENES + INTRO */}
<section className="py-20 bg-zinc-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center">

    {/* IMÁGENES */}
    <motion.div
      initial={{ opacity:0, x:-40 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{ duration:.8 }}
      viewport={{ once:true }}
    >
      <ReorderImageStack images={images} />
    </motion.div>

    {/* CONTENIDO */}
    <motion.div
      initial={{ opacity:0, x:40 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{ duration:.8 }}
      viewport={{ once:true }}
    >
      <h2 className="text-4xl font-bold text-blue-900 mb-6">
        Producción de Cal Agrícola – Hidróxido de Calcio (Ca(OH)₂)
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
       La cal agrícola de alta pureza se obtiene mediante la hidratación 
       controlada del Óxido de Calcio (CaO), producido en nuestros hornos 
       industriales a partir de piedra caliza seleccionada de concesión propia.

El proceso garantiza alta reactividad química, estabilidad granulométrica y
 desempeño técnico para aplicaciones ambientales y mineras.
      </p>

      <div className="space-y-4">

        {/* BLOQUES ORIGINALES (SE MANTIENEN) */}
        <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-blue-600">
          <Factory className="text-blue-600" />
          <div>
            <h4 className="font-semibold">Concesiones Propias</h4>
            <p className="text-slate-600 text-sm">
              Abastecimiento directo de piedra caliza desde cantera.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-emerald-600">
          <Mountain className="text-emerald-600" />
          <div>
            <h4 className="font-semibold">Control de Materia Prima</h4>
            <p className="text-slate-600 text-sm">
              Clasificación mineral para optimizar el rendimiento térmico.
            </p>
          </div>
        </div>

        {/* NUEVO — IDENTIFICACIÓN */}
        <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-blue-500">
          <ShieldCheck className="text-blue-500" />
          <div>
            <h4 className="font-semibold">Identificación Técnica</h4>
            <p className="text-slate-600 text-sm">
             <ul>
                <li>Hidróxido de Calcio (Ca(OH)₂)</li>
                <li>Pureza: Según especificación técnica</li>
                <li>pH en solución: 12 – 12.5</li>
                <li>Estado: Sólido pulverizado</li>
                <li>Alta reactividad alcalina</li>
              </ul>
            </p>
          </div>
        </div>

        {/* NUEVO — PRESENTACIONES */}
        <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-emerald-500">
          <MapPin className="text-emerald-500" />
          <div>
            <h4 className="font-semibold">Presentaciones Comerciales</h4>
            <p className="text-slate-600 text-sm">
              Jumbo (Big Bag) 1 TM y Tolva a granel 33 TM.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* CAPACIDAD OPERATIVA – CAL AGRÍCOLA */}

<section ref={statsRef} className="py-20">

  <div className="max-w-7xl mx-auto px-6 lg:px-16">

    <h2 className="text-4xl font-bold text-center text-slate-800 mb-14">
      Capacidad Operativa
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="stat-card bg-blue-700 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">176</div>
        <div className="text-xl font-semibold">TM / Día</div>
        <p className="text-blue-100">
          Capacidad integrada de producción (base CaO)
        </p>
      </div>

      <div className="stat-card bg-emerald-700 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">24h</div>
        <div className="text-xl font-semibold">Operación Continua</div>
        <p className="text-emerald-100">
          Proceso de calcinación e hidratación controlada
        </p>
      </div>

      <div className="stat-card bg-zinc-800 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">Big Bag</div>
        <div className="text-xl font-semibold">1 TM y Granel</div>
        <p className="text-zinc-300">
          Despacho especializado para operaciones mineras
        </p>
      </div>
       </div>

          <div className="mt-10 flex items-start gap-4 bg-zinc-100 p-6 rounded-lg">
            <MapPin className="text-blue-600" />
            <div>
              <h3 className="font-semibold">Ubicación de Planta Principal</h3>
              <p className="text-slate-600">
                Caserío Rodeopampa – Marcabal – Huamachuco - la libertad

              </p>
               <h3 className="font-semibold">Ubicación de Planta Sucursal</h3>
              <p className="text-slate-600">
                Bambamarca  – Cajamarca

              </p>
              
            </div>
            
          </div>

        </div>

      </section>


      {/* PROCESO INDUSTRIAL */}

      <ParallaxSection speed={0.3} className="py-20 bg-zinc-50">

        <div ref={processRef} className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
            PROCESO PRODUCTIVO – CAL AGRÍCOLA (HIDRÓXIDO DE CALCIO)
          </h2>

          <div className="space-y-6">

            {procesos.map(({etapa,titulo,descripcion,icon:Icon}) => (

              <motion.div
                key={etapa}
                className="process-step flex gap-6 items-start bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
                whileHover={{ x:10 }}
              >

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 text-white font-bold">
                  {etapa}
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-semibold mb-1">
                    {titulo}
                  </h3>

                  <p className="text-slate-600 text-sm">
                    {descripcion}
                  </p>

                </div>

                <Icon className="text-blue-600" />

              </motion.div>

            ))}

          </div>

        </div>

      </ParallaxSection>


     {/* APLICACIONES MINERAS */}

<section className="py-20">

  <div className="max-w-7xl mx-auto px-6 lg:px-16">

    <h2 className="text-4xl font-bold text-center mb-12">
      Aplicaciones en Operaciones Mineras
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

{[
  "Neutralización y control de pH en suelos intervenidos por actividad minera",
  "Tratamiento de drenaje ácido de mina (DAM)",
  "Estabilización química y acondicionamiento de relaves",
  "Mejoramiento de capacidad portante en vías, pads y plataformas operativas",
  "Control de acidez en programas de cierre progresivo",
  "Rehabilitación de áreas impactadas ambientalmente",
  "Inmovilización y precipitación de metales pesados",
  "Soporte técnico en planes de cierre y gestión ambiental minera",
]
.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale:1.05 }}
          className="bg-blue-50 p-6 rounded-lg border text-center"
        >
          <Factory className="mx-auto mb-3 text-blue-600" />
          <p className="font-semibold text-slate-700">
            {item}
          </p>
        </motion.div>
      ))}

    </div>

  </div>
</section>
    {/* Ventajas Competitivas */}
      <section className="light-image py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white">
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
    { icon: Factory, text: "Abastecimiento directo desde concesión minera propia" },
    { icon: Flame, text: "Control granulométrico y calidad mineralógica por lote" },
    { icon: Factory, text: "Capacidad de suministro continuo para contratos mineros" },
    { icon: ShieldCheck, text: "Cumplimiento de estándares técnicos y ambientales vigentes" },
    { icon: Leaf, text: "Soporte para planes de remediación y cierre progresivo" },
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

     {/* EQUIPO OPERATIVO – CAL AGRÍCOLA */}
<section className="py-20 bg-zinc-50">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-zinc-800 mb-12"
    >
      Equipo Operativo – Planta de Hidratación
    </motion.h2>

    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      {[
        { role: "Operadores de Hidratación Controlada", workers: 4 },
        { role: "Supervisión Técnica y Control de Calidad", workers: 3 },
        { role: "Personal de Molienda y Clasificación", workers: 5 },
        { role: "Envasado y Despacho Industrial", workers: 4 },
        { role: "Seguridad y Control Operativo", workers: 2 },
      ].map(({ role, workers }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-600"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-zinc-800">{role}</h3>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              <span className="text-2xl font-bold text-emerald-600">{workers}</span>
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="md:col-span-2 bg-gradient-to-r from-emerald-600 to-blue-700 text-white p-8 rounded-lg shadow-xl text-center"
      >
        <div className="text-5xl font-bold mb-2">18</div>
        <div className="text-xl">Personal Operativo en Planta de Cal Hidratada</div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
}
