/**client/src/components/Paginas/carbon-cisco.tsx */

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
  Zap,
  Thermometer,
  Layers
} from "lucide-react";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ReorderImageStack from "../ui/ReorderImageStack";
import { ParallaxSection } from "../ui/ParallaxSection";


gsap.registerPlugin(ScrollTrigger);

export default function CarbonCisco() {

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
    { src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco", alt: "Producción de cal" },
    { src: "img-productos/carbon-tipo-cisco/carga-carbon-tipo-cisco", alt: "Hornos industriales" },
    { src: "img-productos/carbon-tipo-cisco/despacho-carbon-tipo-cisco", alt: "Extracción minera" },
  ];

const procesos = [
  {
    etapa: "01",
    titulo: "Clasificación de Finos",
    descripcion:
      "Separación y recuperación de fracción fina (carbón tipo cisco) proveniente del proceso de chancado y zarandeo de antracita.",
    icon: <Pickaxe size={24} />,
  },
  {
    etapa: "02",
    titulo: "Control de Humedad",
    descripcion:
      "Optimización del contenido de humedad para mejorar ignición y eficiencia energética en procesos térmicos.",
    icon: <Thermometer size={24} />,
  },
  {
    etapa: "03",
    titulo: "Zarandeo por Malla",
    descripcion:
      "Clasificación granulométrica para garantizar tamaño uniforme según requerimiento de hornos industriales.",
    icon: <Factory size={24} />,
  },
  {
    etapa: "04",
    titulo: "Acondicionamiento y Mezcla",
    descripcion:
      "Posible combinación con otros combustibles sólidos para estabilizar llama y optimizar rendimiento térmico.",
    icon: <Flame size={24} />,
  },
  {
    etapa: "05",
    titulo: "Control de Calidad y Despacho",
    descripcion:
      "Verificación de poder calorífico, humedad y cenizas para suministro continuo a operaciones industriales.",
    icon: <ShieldCheck size={24} />,
  },
];

  return (
    <div className="bg-white">

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
        Producción y Suministro de Carbón Tipo Cisco Industrial
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        La empresa cuenta con unidades de extracción y clasificación de carbón mineral, 
        garantizando abastecimiento continuo de carbón cisco para operaciones mineras e
         industriales que requieren combustible sólido eficiente y de rápida combustión.


El carbón cisco es una fracción fina de carbón mineral utilizada como fuente energética 
en procesos térmicos, destacando por su facilidad de ignición y buen rendimiento en hornos 
industriales.
      </p>

      <div className="space-y-4">

        {/* BLOQUES ORIGINALES (SE MANTIENEN) */}
        <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-blue-600">
          <Factory className="text-blue-600" />
          <div>
            <h4 className="font-semibold">Concesiones Propias</h4>
            <p className="text-slate-600 text-sm">
Extracción y clasificación directa de carbón mineral, asegurando trazabilidad, 
control de calidad y suministro estable. 
           </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-emerald-600">
          <Mountain className="text-emerald-600" />
          <div>
            <h4 className="font-semibold">Control de Calidad del Mineral</h4>
            <p className="text-slate-600 text-sm">
              <ul>
                <li>Contenido de carbono fijo</li>
                <li>Nivel de cenizas</li>
              <li>Humedad</li>
              <li>Poder calorífico</li>
              </ul>

             
            Garantizando eficiencia térmica y estabilidad en procesos industriales.
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
                <li>Clasificación: Carbón mineral – Fracción fina (Cisco)</li>
<li>Carbono fijo: 70% – 85%</li>
<li>Cenizas: 5% – 15%</li>
<li>Azufre: 0.5% – 1.5%</li>
<li>Estado: Sólido fino / granulado pequeño</li>
<li>Humedad: Controlada según requerimiento</li>
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


     {/* CAPACIDAD OPERATIVA – CARBÓN TIPO CISCO */}

<section ref={statsRef} className="py-20">

  <div className="max-w-7xl mx-auto px-6 lg:px-16">

    <h2 className="text-4xl font-bold text-center text-slate-800 mb-14">
      Capacidad Operativa Minera
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="stat-card bg-blue-700 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">176</div>
        <div className="text-xl font-semibold">TM / Día</div>
        <p className="text-blue-100">
          Capacidad estimada de clasificación y suministro
        </p>
      </div>

      <div className="stat-card bg-emerald-700 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">70–85%</div>
        <div className="text-xl font-semibold">Carbono Fijo</div>
        <p className="text-emerald-100">
          Combustión eficiente y rápida ignición
        </p>
      </div>

      <div className="stat-card bg-zinc-800 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">Malla</div>
        <div className="text-xl font-semibold">Clasificación Controlada</div>
        <p className="text-zinc-300">
          Granulometría uniforme según requerimiento industrial
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
            Proceso Industrial
          </h2>

          <div className="space-y-6">

            {procesos.map(({etapa,titulo,descripcion,icon:icon}) => (

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
  "Alto carbono fijo para eficiencia en combustión industrial",
  "Estabilidad térmica en hornos de calcinación",
  "Agente energético en procesos metalúrgicos",
  "Optimización de rendimiento térmico en plantas industriales",
  "Control de cenizas y humedad para desempeño uniforme",
  "Granulometría adaptada a requerimiento operativo",
  "Suministro directo desde cantera propia",
  "Soporte para continuidad operativa minera",
].map((item, i) => (
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
        { icon: Factory, text: "Canteras propias de carbón antracita con trazabilidad garantizada" },
        { icon: Flame, text: "Alto poder calorífico y elevado contenido de carbono fijo" },
        { icon: ShieldCheck, text: "Control de calidad: granulometría, cenizas y humedad" },
        { icon: Factory, text: "Capacidad de suministro continuo para operaciones mineras" },
        { icon: Flame, text: "Clasificación del mineral según requerimiento operativo" },
        { icon: ShieldCheck, text: "Cumplimiento de estándares técnicos y ambientales vigentes" },
      ].map(({ icon: Icon, text }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all"
        >
          <Icon className="w-8 h-8 text-emerald-300 shrink-0" />
          <p className="text-lg">{text}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* EQUIPO OPERATIVO – CARBÓN TIPO CISCO */}
<section className="py-20 bg-zinc-50">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-zinc-800 mb-12"
    >
      Equipo Operativo – Clasificación y Suministro de Cisco
    </motion.h2>

    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      {[
        { role: "Operadores de Clasificación y Zarandeo", workers: 6 },
        { role: "Control de Humedad y Calidad", workers: 3 },
        { role: "Supervisión Técnica Minera", workers: 2 },
        { role: "Logística y Despacho Industrial", workers: 4 },
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
        <div className="text-5xl font-bold mb-2">17</div>
        <div className="text-xl">
          Personal Operativo en Clasificación de Carbón Cisco
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
}
