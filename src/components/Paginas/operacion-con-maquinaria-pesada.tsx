/**client/src/components/Paginas/operacion-con-maquinaria-pesada.tsx */

"use client";

import { motion } from "motion/react";
import { Construction, TrendingUp, ShieldCheck, Wrench, Truck, ShoppingCart, MapPin, CheckCircle2, Mountain, AlertTriangle, ClipboardCheck, Users } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageSEO from "../global/PageSEO";
import FeatureCardsSection from "../ui/FeatureCardsSection";
import ProductIntroSection from "../ui/ProductIntroSection";
import SplitProcessFlow from "../ui/SplitProcessFlow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

gsap.registerPlugin(ScrollTrigger);

export default function OperacionMaquinaria() {
  const machineryRef = useRef<HTMLDivElement>(null);
  

  

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
  }, []);

  const images = [
    {
      src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria001",
      alt: "Maquinaria pesada operando en cantera",
    },
    {
      src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria002",
      alt: "Equipo de soporte operativo en extraccion minera no metalica",
    },
    {
      src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria003",
      alt: "Operacion con maquinaria pesada para carguio y movimiento de tierras",
    },
  ];

  const introCards = [
    {
      icon: Construction,
      iconClassName: "text-amber-700",
      title: "Movimiento de Tierras",
      description:
        "Ejecutamos nivelacion, corte, relleno y conformacion de plataformas para operaciones mineras no metalicas.",
    },
    {
      icon: ShoppingCart,
      iconClassName: "text-emerald-600",
      title: "Extraccion y Carguio",
      description:
        "Operacion controlada para extraccion eficiente de material en cantera, con rendimiento sostenido y control tecnico.",
    },
    {
      icon: Wrench,
      iconClassName: "text-zinc-700",
      title: "Soporte Operativo en Campo",
      description:
        "Preparamos accesos, mantenemos vias internas y damos soporte logistico a la operacion diaria.",
    },
    {
      icon: ShieldCheck,
      iconClassName: "text-emerald-500",
      title: "Planificacion y Control",
      items: [
        "Evaluacion tecnica del terreno y condiciones geomecanicas",
        "Seleccion estrategica de maquinaria segun tipo de material",
        "Supervision permanente por personal tecnico especializado",
      ],
      note: "Trabajamos con planificacion tecnica, control operativo y foco en continuidad de rendimiento.",
    },
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
      <PageSEO pageId="operacion-con-maquinaria-pesada" />
      <ProductIntroSection
        images={images}
        eyebrow="SERVICIOS INDUSTRIALES"
        title="Capacidad operativa en campo con maquinaria pesada"
        description="Ejecutamos movimiento de tierras, extraccion, carguio y conformacion de terreno para proyectos de mineria no metalica bajo planificacion tecnica, supervision especializada y continuidad operativa."
        cards={introCards}
      />

      <FeatureCardsSection
        sectionRef={machineryRef}
        sectionClassName="py-24 bg-white relative"
        eyebrow="Servicios Especializados"
        title="Operaciones en Campo"
        items={operaciones}
        gridClassName="grid gap-8 md:grid-cols-3"
        itemClassName="machinery-card"
        hoverY={-5}
        variant="detailed"
      />

      {/* Flota de Maquinaria Section with Carousel */}
      <section className="light-image py-24 max-w-7x relative overflow-hidden b2b-dark-section">
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
            <h2 className="b2b-section-title-dark mb-4">Flota de Maquinaria</h2>
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
                      <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 group">
                        <div className="mb-6 text-zinc-100 group-hover:scale-110 transition-transform duration-300">
                          {equipo.icon}
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight text-white mb-3">{equipo.name}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{equipo.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-white/10 bg-zinc-950 text-white hover:bg-zinc-800" />
              <CarouselNext className="border-white/10 bg-zinc-950 text-white hover:bg-zinc-800" />
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
            <div className="inline-block rounded-full border border-white/10 bg-white/5 px-8 py-4">
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

      <SplitProcessFlow
        eyebrow="Proceso Tecnico"
        title="Metodologia Operativa"
        description="Organizamos cada operacion desde la evaluacion tecnica del terreno hasta la supervision permanente, alineando maquinaria, tiempos de ejecucion y control en campo."
        imagePosition="right"
        image={{
          src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria002",
          alt: "Supervision tecnica y operacion con maquinaria pesada en campo",
          aspectClassName: "aspect-[5/4] md:aspect-[4/3]",
        }}
        steps={metodologia.map(({ step, text, icon }) => ({
          step,
          description: text,
          icon,
        }))}
      />

      {/* Seguridad y Control */}
      <section className="light-image py-24 b2b-dark-section relative overflow-hidden">
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
              <h2 className="b2b-section-title-dark mb-6">Seguridad y Control Operativo</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm"
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
