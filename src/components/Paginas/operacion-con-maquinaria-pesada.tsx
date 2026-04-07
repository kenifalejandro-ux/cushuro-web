/**client/src/components/Paginas/operacion-con-maquinaria-pesada.tsx */

"use client";

import { motion } from "motion/react";
import {
  Construction,
  TrendingUp,
  ShieldCheck,
  Wrench,
  Truck,
  ShoppingCart,
  MapPin,
  CheckCircle2,
  Mountain,
  AlertTriangle,
  ClipboardCheck,
  Users,
} from "lucide-react";
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
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function OperacionMaquinaria() {
  const machineryRef = useRef<HTMLDivElement>(null);
  const copy = useLocalizedContent({
    es: {
      images: [
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
      ],
      intro: {
        eyebrow: "SERVICIOS INDUSTRIALES",
        title: "Capacidad operativa en campo con maquinaria pesada",
        description:
          "Ejecutamos movimiento de tierras, extraccion, carguio y conformacion de terreno para proyectos de mineria no metalica bajo planificacion tecnica, supervision especializada y continuidad operativa.",
      },
      introCards: [
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
      ],
      operations: {
        eyebrow: "Servicios Especializados",
        title: "Operaciones en Campo",
        items: [
          {
            title: "Movimiento de Tierras",
            description:
              "Nivelación, corte, relleno y conformación de plataformas para operación minera.",
            icon: Mountain,
          },
          {
            title: "Extracción y Carguío",
            description:
              "Operación controlada para extracción eficiente de material en cantera.",
            icon: ShoppingCart,
          },
          {
            title: "Soporte Operativo",
            description:
              "Preparación de accesos, mantenimiento de vías internas y apoyo logístico en campo.",
            icon: Wrench,
          },
        ],
      },
      fleet: {
        eyebrow: "Equipamiento",
        title: "Flota de Maquinaria",
        brandsTitle: "Operamos con maquinaria de marcas reconocidas",
        equipment: [
          {
            name: "Cargadores frontales",
            description: "Equipos de alto rendimiento para operación continua en cantera.",
            icon: Construction,
          },
          {
            name: "Excavadoras hidráulicas",
            description: "Equipos de alto rendimiento para operación continua en cantera.",
            icon: TrendingUp,
          },
          {
            name: "Volquetes de alto tonelaje",
            description: "Equipos de alto rendimiento para operación continua en cantera.",
            icon: Truck,
          },
          {
            name: "Equipos auxiliares de apoyo",
            description: "Equipos de alto rendimiento para operación continua en cantera.",
            icon: ShieldCheck,
          },
        ],
      },
      methodology: {
        eyebrow: "Proceso Tecnico",
        title: "Metodologia Operativa",
        description:
          "Organizamos cada operacion desde la evaluacion tecnica del terreno hasta la supervision permanente, alineando maquinaria, tiempos de ejecucion y control en campo.",
        image: {
          src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria002",
          alt: "Supervision tecnica y operacion con maquinaria pesada en campo",
          aspectClassName: "aspect-[5/4] md:aspect-[4/3]",
        },
        steps: [
          {
            step: "01",
            description: "Evaluación técnica del terreno y condiciones geomecánicas.",
            icon: MapPin,
          },
          {
            step: "02",
            description: "Selección estratégica del pool de maquinaria según tipo de material.",
            icon: CheckCircle2,
          },
          {
            step: "03",
            description: "Planificación de ciclos de operación y tiempos de ejecución.",
            icon: ClipboardCheck,
          },
          {
            step: "04",
            description: "Supervisión permanente por personal técnico especializado.",
            icon: Users,
          },
        ],
      },
      safety: {
        badge: "Compromiso Total",
        title: "Seguridad y Control Operativo",
        description:
          "Operamos bajo estándares exigentes de seguridad industrial, salud ocupacional y control ambiental, garantizando operaciones responsables, reducción de riesgos y continuidad operativa.",
        stats: [
          { value: "ISO", label: "Certificaciones" },
          { value: "0", label: "Accidentes" },
          { value: "+100", label: "Proyectos" },
        ],
      },
    },
    en: {
      images: [
        {
          src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria001",
          alt: "Heavy equipment operating in the quarry",
        },
        {
          src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria002",
          alt: "Operational support team in non-metallic mining extraction",
        },
        {
          src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria003",
          alt: "Heavy equipment operation for loading and earthmoving",
        },
      ],
      intro: {
        eyebrow: "INDUSTRIAL SERVICES",
        title: "Field operating capacity with heavy equipment",
        description:
          "We perform earthmoving, extraction, loading, and terrain shaping for non-metallic mining projects under technical planning, specialized supervision, and operational continuity.",
      },
      introCards: [
        {
          icon: Construction,
          iconClassName: "text-amber-700",
          title: "Earthmoving",
          description:
            "We carry out leveling, cutting, filling, and platform shaping for non-metallic mining operations.",
        },
        {
          icon: ShoppingCart,
          iconClassName: "text-emerald-600",
          title: "Extraction and Loading",
          description:
            "Controlled operation for efficient material extraction in the quarry, with sustained performance and technical control.",
        },
        {
          icon: Wrench,
          iconClassName: "text-zinc-700",
          title: "Field Operational Support",
          description:
            "We prepare access routes, maintain internal roads, and provide logistics support for daily operations.",
        },
        {
          icon: ShieldCheck,
          iconClassName: "text-emerald-500",
          title: "Planning and Control",
          items: [
            "Technical evaluation of terrain and geomechanical conditions",
            "Strategic equipment selection according to material type",
            "Permanent supervision by specialized technical personnel",
          ],
          note: "We work with technical planning, operational control, and a focus on continuity of performance.",
        },
      ],
      operations: {
        eyebrow: "Specialized Services",
        title: "Field Operations",
        items: [
          {
            title: "Earthmoving",
            description:
              "Leveling, cutting, filling, and platform shaping for mining operations.",
            icon: Mountain,
          },
          {
            title: "Extraction and Loading",
            description: "Controlled operation for efficient material extraction in the quarry.",
            icon: ShoppingCart,
          },
          {
            title: "Operational Support",
            description:
              "Preparation of access routes, internal road maintenance, and field logistics support.",
            icon: Wrench,
          },
        ],
      },
      fleet: {
        eyebrow: "Equipment",
        title: "Machinery Fleet",
        brandsTitle: "We operate with equipment from recognized brands",
        equipment: [
          {
            name: "Front-end loaders",
            description: "High-performance equipment for continuous quarry operation.",
            icon: Construction,
          },
          {
            name: "Hydraulic excavators",
            description: "High-performance equipment for continuous quarry operation.",
            icon: TrendingUp,
          },
          {
            name: "High-tonnage dump trucks",
            description: "High-performance equipment for continuous quarry operation.",
            icon: Truck,
          },
          {
            name: "Auxiliary support equipment",
            description: "High-performance equipment for continuous quarry operation.",
            icon: ShieldCheck,
          },
        ],
      },
      methodology: {
        eyebrow: "Technical Process",
        title: "Operational Methodology",
        description:
          "We organize each operation from technical terrain evaluation to permanent supervision, aligning equipment, execution times, and field control.",
        image: {
          src: "img-servicios/hero/operacion-con-maquinaria/operacion-con-maquinaria002",
          alt: "Technical supervision and heavy equipment operation in the field",
          aspectClassName: "aspect-[5/4] md:aspect-[4/3]",
        },
        steps: [
          {
            step: "01",
            description: "Technical evaluation of terrain and geomechanical conditions.",
            icon: MapPin,
          },
          {
            step: "02",
            description: "Strategic selection of the equipment fleet according to material type.",
            icon: CheckCircle2,
          },
          {
            step: "03",
            description: "Planning of operation cycles and execution times.",
            icon: ClipboardCheck,
          },
          {
            step: "04",
            description: "Permanent supervision by specialized technical personnel.",
            icon: Users,
          },
        ],
      },
      safety: {
        badge: "Total Commitment",
        title: "Safety and Operational Control",
        description:
          "We operate under demanding industrial safety, occupational health, and environmental control standards, guaranteeing responsible operations, risk reduction, and operational continuity.",
        stats: [
          { value: "ISO", label: "Certifications" },
          { value: "0", label: "Accidents" },
          { value: "+100", label: "Projects" },
        ],
      },
    },
  });

  useEffect(() => {
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

  return (
    <div className="dark-image min-h-screen bg-white">
      <PageSEO pageId="operacion-con-maquinaria-pesada" />

      <ProductIntroSection
        images={copy.images}
        eyebrow={copy.intro.eyebrow}
        title={copy.intro.title}
        description={copy.intro.description}
        cards={copy.introCards}
      />

      <FeatureCardsSection
        sectionRef={machineryRef}
        sectionClassName="py-24 bg-white relative"
        eyebrow={copy.operations.eyebrow}
        title={copy.operations.title}
        items={copy.operations.items.map(({ title, description, icon: Icon }) => ({
          title,
          description,
          icon: <Icon className="w-8 h-8" />,
        }))}
        gridClassName="grid gap-8 md:grid-cols-3"
        itemClassName="machinery-card"
        hoverY={-5}
        variant="detailed"
      />

      <section className="light-image py-24 max-w-7x relative overflow-hidden b2b-dark-section">
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
              <span className="text-emerald-400 font-medium uppercase tracking-wider text-sm">
                {copy.fleet.eyebrow}
              </span>
              <div className="h-px w-12 bg-emerald-500" />
            </div>
            <h2 className="b2b-section-title-dark mb-4">{copy.fleet.title}</h2>
          </motion.div>

          <div className="max-w-7xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {copy.fleet.equipment.map((equipo, index) => {
                  const Icon = equipo.icon;

                  return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 group">
                          <div className="mb-6 text-zinc-100 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-12 h-12" />
                          </div>
                          <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                            {equipo.name}
                          </h3>
                          <p className="text-zinc-400 text-sm leading-relaxed">
                            {equipo.description}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="border-white/10 bg-zinc-950 text-white hover:bg-zinc-800" />
              <CarouselNext className="border-white/10 bg-zinc-950 text-white hover:bg-zinc-800" />
            </Carousel>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-block rounded-full border border-white/10 bg-white/5 px-8 py-4">
              <p className="text-zinc-400 text-sm mb-3 uppercase tracking-widest">
                {copy.fleet.brandsTitle}
              </p>
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
        eyebrow={copy.methodology.eyebrow}
        title={copy.methodology.title}
        description={copy.methodology.description}
        imagePosition="right"
        image={copy.methodology.image}
        steps={copy.methodology.steps.map(({ step, description, icon: Icon }) => ({
          step,
          description,
          icon: <Icon className="w-5 h-5" />,
        }))}
      />

      <section className="light-image py-24 b2b-dark-section relative overflow-hidden">
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
                <span className="text-yellow-400 font-medium uppercase tracking-wider text-sm">
                  {copy.safety.badge}
                </span>
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="b2b-section-title-dark mb-6">{copy.safety.title}</h2>
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
                    {copy.safety.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-zinc-700">
                  {copy.safety.stats.map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-3xl font-black text-emerald-400 mb-2">
                        {item.value}
                      </div>
                      <div className="text-sm text-zinc-400 uppercase tracking-wide">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
