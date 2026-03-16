/**client/src/components/Paginas/cal-viva.tsx */

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

export default function CalViva() {

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
    { src: "img-productos/cal-viva/img003", alt: "Producción de cal" },
    { src: "img-productos/cal-viva/oxido-de-calcio001", alt: "Hornos industriales" },
    { src: "img-productos/cal-viva/piedra-caliza", alt: "Extracción minera" },
  ];

  const procesos = [
  {
    etapa: "01",
    titulo: "Selección de Materia Prima",
    descripcion:
      "Extracción y selección de piedra caliza con pureza superior al 90% de CaCO₃, garantizando eficiencia en la transformación industrial.",
    icon: Pickaxe
  },
  {
    etapa: "02",
    titulo: "Triturado y Clasificación",
    descripcion:
      "Reducción y control granulométrico del mineral para asegurar una calcinación homogénea y eficiente.",
    icon: Layers
  },
  {
    etapa: "03",
    titulo: "Calcinación Controlada",
    descripcion:
      "Proceso térmico continuo en hornos industriales (900°C – 1,100°C) para la obtención de Óxido de Calcio (CaO). Capacidad productiva: 176 TM/día.",
    icon: Flame
  },
  {
    etapa: "04",
    titulo: "Análisis y Control de Calidad",
    descripcion:
      "Verificación de composición química, determinación de Cal Total y Cal Útil Disponible, garantizando altos estándares para uso minero.",
    icon: ShieldCheck
  },
  {
    etapa: "05",
    titulo: "Clasificación y Despacho",
    descripcion:
      "Presentación en formato granular o molido, con despacho a granel, en sacos o big bag para operaciones mineras.",
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
      <ReorderImageStack images={images}  />
    </motion.div>

    {/* CONTENIDO */}
    <motion.div
      initial={{ opacity:0, x:40 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{ duration:.8 }}
      viewport={{ once:true }}
    >
      <h2 className="text-4xl font-bold text-blue-900 mb-6">
        Producción de Óxido de Calcio Industrial - Cal Viva
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        La producción de óxido de calcio (CaO) se realiza mediante la
        calcinación controlada de piedra caliza en hornos industriales.
        Nuestro proceso garantiza continuidad operativa, calidad
        mineralógica y abastecimiento confiable para la industria minera,
        metalúrgica y cementera.
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
                <li>Óxido de Calcio (CaO)</li>
                <li>Peso molecular: 56.08 g/mol</li>
                <li>Cal Total (CaO): ≥ 86%</li>
                <li>Cal Útil Disponible: ≥ 81%</li>
                <li>Estado físico: Sólido granular / molido</li>
                <li>Alta reactividad química</li>
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


      {/* CAPACIDAD PRODUCTIVA */}

      <section ref={statsRef} className="py-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <h2 className="text-4xl font-bold text-center text-slate-800 mb-14">
            Capacidad de Producción
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="stat-card bg-blue-600 text-white p-8 rounded-xl shadow-xl">
              <div className="text-5xl font-bold mb-2">5</div>
              <div className="text-xl font-semibold">Hornos Operativos</div>
              <p className="text-blue-100">Producción continua</p>
            </div>

            <div className="stat-card bg-emerald-600 text-white p-8 rounded-xl shadow-xl">
              <div className="text-5xl font-bold mb-2">176</div>
              <div className="text-xl font-semibold">Toneladas / Día</div>
              <p className="text-emerald-100">Producción estimada</p>
            </div>

            <div className="stat-card bg-zinc-800 text-white p-8 rounded-xl shadow-xl">
              <div className="text-5xl font-bold mb-2">75</div>
              <div className="text-xl font-semibold">Trabajadores</div>
              <p className="text-zinc-300">Operación industrial</p>
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
        "Control de pH en circuitos de molienda",
        "Flotación y recuperación de cobre, oro y zinc",
        "Depresión selectiva de sulfuros (pirita)",
        "Neutralización de drenaje ácido de mina (AMD)",
        "Estabilización química de relaves",
        "Tratamiento de aguas de proceso",
        "Control de efluentes industriales mineros",
        "Procesos hidrometalúrgicos",
      ].map((item,i)=>(
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
              { icon: Factory, text: "Denuncios propios de piedra caliza y carbón" },
              { icon: Flame, text: "Producción continua 24 horas" },
              { icon: Factory, text: "Logística propia" },
              { icon: ShieldCheck, text: "Cumplimiento de estándares del Ministerio de Energía y Minas" },
              { icon: Leaf, text: "Operaciones" },
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
