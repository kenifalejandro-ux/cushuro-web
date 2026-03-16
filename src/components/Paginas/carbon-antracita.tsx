/**client/src/components/Paginas/carbon-antracita.tsx */

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
  Layers
} from "lucide-react";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ReorderImageStack from "../ui/ReorderImageStack";
import { ParallaxSection } from "../ui/ParallaxSection";
import { icon } from "leaflet";

gsap.registerPlugin(ScrollTrigger);

export default function CarbonAntracita() {

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
    { src: "img-productos/carbon-antracita/carreo-antracita", alt: "Producción de cal" },
    { src: "img-productos/carbon-antracita/chancadora-antracita", alt: "Hornos industriales" },
    { src: "img-productos/carbon-antracita/despacho-antracita", alt: "Extracción minera" },
  ];

const procesos = [
  {
    etapa: "01",
    titulo: "Selección de Veta",
    descripcion:
      "Evaluación geológica y selección de frentes con carbón antracita de alto rango, elevado contenido de carbono fijo y bajo nivel de volátiles.",
    icon: <Pickaxe size={24} />,
  },
  {
    etapa: "02",
    titulo: "Extracción y Acarreo",
    descripcion:
      "Operación minera controlada para el traslado seguro del mineral hacia planta de procesamiento y clasificación.",
    icon: <Factory size={24} />,
  },
  {
    etapa: "03",
    titulo: "Chancado y Clasificación Granulométrica",
    descripcion:
      "Reducción y zarandeo del mineral para obtener tamaños específicos según requerimiento industrial, asegurando combustión eficiente y estable.",
    icon: <Zap size={24} />,
  },
  {
    etapa: "04",
    titulo: "Control y Optimización de Humedad",
    descripcion:
      "Ajuste del contenido de humedad para maximizar el rendimiento energético y mejorar la estabilidad en procesos térmicos continuos.",
    icon: <Flame size={24} />,
  },
  {
    etapa: "05",
    titulo: "Control de Calidad y Despacho",
    descripcion:
      "Análisis de poder calorífico, carbono fijo, cenizas y azufre para garantizar suministro confiable a operaciones mineras e industriales 24/7.",
    icon: <ShieldCheck size={24} />,
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
        Producción y Suministro de Carbón Antracita Industrial
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
La empresa cuenta con concesiones propias de carbón antracita, 
garantizando control directo de reservas, trazabilidad del mineral
 y abastecimiento continuo para operaciones industriales y mineras.
      </p>

      <div className="space-y-4">

        {/* BLOQUES ORIGINALES (SE MANTIENEN) */}
        <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-blue-600">
          <Factory className="text-blue-600" />
          <div>
            <h4 className="font-semibold">Concesiones Propias</h4>
            <p className="text-slate-600 text-sm">
              Explotación directa de canteras de carbón antracita con control en extracción, clasificación y despacho.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-emerald-600">
          <Mountain className="text-emerald-600" />
          <div>
            <h4 className="font-semibold">Control de Calidad del Mineral</h4>
            <p className="text-slate-600 text-sm">
              <ul>
                <li>Clasificación por granulometría</li>
                <li>Verificación de parámetros:</li>
              <li>Contenido de carbono fijo</li>
              <li>Nivel de cenizas</li>
              <li>Humedad</li>
              <li>Poder calorífico</li>
              </ul>

Garantizando desempeño eficiente en aplicaciones térmicas e industriales.
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
                <li>Clasificación: Carbón mineral de alto rango</li>
                <li>Carbono fijo: 85% – 95%</li>
                <li>Cenizas: 3% – 10%</li>
                <li>Azufre:  0.5% – 1%</li>
                <li>Humedad: Controlada según requerimiento</li>
                <li>Estado: Granulado clasificado</li>
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


     {/* CAPACIDAD OPERATIVA – CARBÓN ANTRACITA */}

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
          Capacidad estimada de extracción y clasificación
        </p>
      </div>

      <div className="stat-card bg-emerald-700 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">85–95%</div>
        <div className="text-xl font-semibold">Carbono Fijo</div>
        <p className="text-emerald-100">
          Alto rendimiento energético y baja volatilidad
        </p>
      </div>

      <div className="stat-card bg-zinc-800 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">24h</div>
        <div className="text-xl font-semibold">Operación Continua</div>
        <p className="text-zinc-300">
          Abastecimiento directo desde cantera propia
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
{/* EQUIPO OPERATIVO – CARBÓN ANTRACITA */}
<section className="py-20 bg-zinc-50">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-zinc-800 mb-12"
    >
      Equipo Operativo Minero – Carbón Antracita
    </motion.h2>

    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      {[
        { role: "Operadores de Extracción Minera", workers: 8 },
        { role: "Personal de Clasificación y Zarandeo", workers: 5 },
        { role: "Supervisión Geológica y Técnica", workers: 3 },
        { role: "Logística y Transporte Interno", workers: 4 },
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
        <div className="text-5xl font-bold mb-2">22</div>
        <div className="text-xl">Personal Operativo en Cantera de Carbón</div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
}
