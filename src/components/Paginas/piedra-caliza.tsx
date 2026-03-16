/**client/src/components/Paginas/piedra-caliza.tsx */

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

export default function PiedraCaliza() {

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
    { src: "img-productos/piedra-caliza/cantera-piedra-caliza002", alt: "Producción de cal" },
    { src: "img-productos/piedra-caliza/cantera-piedra-caliza", alt: "Hornos industriales" },
    { src: "img-productos/piedra-caliza/operario-con-piedra-caliza", alt: "Extracción minera" },
  ];

  const procesos = [
    {
      numero: "01",
      titulo: "Extracción de Piedra Caliza",
      descripcion:
        "Arranque de roca caliza en cantera mediante perforación y selección de material con control de calidad mineralógica.",
      icon: Pickaxe
    },
    {
      numero: "02",
      titulo: "Preparación y Clasificación",
      descripcion:
        "Fragmentación y clasificación granulométrica para garantizar tamaño adecuado de alimentación en hornos.",
      icon: Layers
    },
    {
      numero: "03",
      titulo: "Integración a Proceso de Calcinación",
      descripcion:
        "Suministro de piedra caliza como insumo principal en hornos industriales.",
      icon: Flame
    },
    {
      numero: "04",
      titulo: "Control de Calidad",
      descripcion:
        "Verificación de composición mineralógica y eliminación de impurezas.",
      icon: ShieldCheck
    },
    {
      numero: "05",
      titulo: "Despacho Industrial",
      descripcion:
        "Carga, transporte y suministro continuo para operaciones mineras, cementeras e industria pesada.",
      icon: Factory
    },
  ];

  return (
    <div className="dark-image bg-white">

      {/* HERO IMÁGENES + INTRO */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
          >
            <ReorderImageStack images={images} />
          </motion.div>

          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Materia Prima Minera Estratégica para Procesos Industriales y Metalúrgicos
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
             La piedra caliza es un recurso mineral esencial para la producción de cal, 
             procesos metalúrgicos y aplicaciones industriales en el sector minero.

Nuestra operación cuenta con cantera propia y abastecimiento continuo, garantizando 
trazabilidad del mineral, estabilidad química y suministro 
confiable para plantas industriales.
            </p>

            <div className="space-y-4">

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-blue-600">
                <Factory className="text-blue-600" />
                <div>
                  <h4 className="font-semibold">Cantera con Abastecimiento Continuo</h4>
                  <p className="text-slate-600 text-sm">
                    Explotación directa con control en extracción, selección y clasificación del material.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow border-l-4 border-emerald-600">
                <Mountain className="text-emerald-600" />
                <div>
                  <h4 className="font-semibold">Integración Directa a Planta Calera</h4>
                  <p className="text-slate-600 text-sm">
                    Clasificación mineral para optimizar el rendimiento térmico.
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </section>

{/* CAPACIDAD OPERATIVA MINERA */}

<section ref={statsRef} className="py-20">

  <div className="max-w-7xl mx-auto px-6 lg:px-16">

    <h2 className="text-4xl font-bold text-center text-slate-800 mb-14">
      Capacidad Operativa de Extracción
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="stat-card bg-blue-700 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">176</div>
        <div className="text-xl font-semibold">Toneladas / Día</div>
        <p className="text-blue-100">
          Capacidad estimada de extracción diaria
        </p>
      </div>

      <div className="stat-card bg-emerald-700 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">24h</div>
        <div className="text-xl font-semibold">Operación Continua</div>
        <p className="text-emerald-100">
          Turnos programados para abastecimiento permanente
        </p>
      </div>

      <div className="stat-card bg-zinc-800 text-white p-8 rounded-xl shadow-xl">
        <div className="text-5xl font-bold mb-2">Cantera</div>
        <div className="text-xl font-semibold">Denuncio Propio</div>
        <p className="text-zinc-300">
          Control directo de explotación y reservas minerales
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

            {procesos.map(({numero,titulo,descripcion,icon:Icon}) => (

              <motion.div
                key={numero}
                className="process-step flex gap-6 items-start bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
                whileHover={{ x:10 }}
              >

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 text-white font-bold">
                  {numero}
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
        "Materia prima para producción de cal viva",
        "Insumo para procesos metalúrgicos",
        "Estabilización de accesos y plataformas",
        "Material base para plataformas operativas",
        "Control ambiental en operaciones extractivas",
        "Neutralización de efluentes mediante derivados",
        "Soporte en plantas concentradoras",
        "Optimización de tratamiento mineral",
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
              { icon: Factory, text: "Denuncios propios de piedra caliza" },
              { icon: Flame, text: "Integración vertical con planta calera" },
              { icon: Factory, text: "Producción continua 24 horas" },
              { icon: ShieldCheck, text: "Logística propia y despacho directo" },
              { icon: Leaf, text: "Cumplimiento de estándares del Ministerio de Energía y Minas" },
              { icon: Leaf, text: "Abastecimiento estratégico para sector minero" },
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
{/* EQUIPO OPERATIVO MINERO */}
<section className="py-20 bg-zinc-50">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-zinc-800 mb-12"
    >
      Equipo Operativo en Cantera
    </motion.h2>

    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      {[
        { role: "Operadores de Maquinaria Pesada", workers: 8 },
        { role: "Personal de Clasificación y Selección", workers: 6 },
        { role: "Supervisión Técnica", workers: 3 },
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
        <div className="text-5xl font-bold mb-2">23</div>
        <div className="text-xl">Personal Operativo en Cantera</div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
}
