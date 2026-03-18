/**client/src/components/Paginas/transporte-logistico-especializado.tsx */


"use client";

import { motion } from "motion/react";
import {
  Truck,
  Radio,
  Mountain,
  Pickaxe,
  ShieldCheck,
  Users,
  Factory,
  Flame,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageSEO from "../global/PageSEO";
import FeatureCardsSection from "../ui/FeatureCardsSection";
import ProductIntroSection from "../ui/ProductIntroSection";
import SafetyComplianceSection from "../ui/SafetyComplianceSection";

gsap.registerPlugin(ScrollTrigger);

export default function TransporteLogistico() {
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
    {
      src: "img-servicios/img/flota-calera-noche/flota-calera-noche",
      alt: "Flota de transporte logistico de ",
    },
    {
      src: "img-servicios/hero/transporte-logistico/transporte-logistico004",
      alt: "Operacion de carga y traslado de insumos industriales",
    },
    {
      src: "img-servicios/hero/transporte-logistico/transporte-logistico005",
      alt: "Servicio de transporte logistico especializado para mineria",
    },
  ];

  const introCards = [
    {
      icon: Truck,
      iconClassName: "text-amber-700",
      title: "Capacidad Operativa de Transporte",
      description:
        "Servicio de transporte para operaciones mineras no metalicas con capacidad operativa de hasta 176 TM por dia.",
    },
    {
      icon: Factory,
      iconClassName: "text-emerald-600",
      title: "Abastecimiento Continuo",
      description:
        "Garantizamos suministro continuo de piedra caliza, oxido de calcio y carbon de piedra para reducir tiempos de espera en campo.",
    },
    {
      icon: Radio,
      iconClassName: "text-zinc-700",
      title: "Control Logistico en Campo",
      items: [
        "Seguimiento en tiempo real de unidades",
        "Supervision presencial en puntos criticos",
        "Coordinacion directa con operaciones mineras",
      ],
      note: "Aseguramos continuidad operativa y reduccion de riesgos logisticos en cada operacion.",
    },
    {
      icon: Users,
      iconClassName: "text-emerald-500",
      title: "Supervision Permanente",
      description:
        "Control operativo presencial en carga y descarga, con capacidad de respuesta inmediata ante contingencias y ajustes operativos.",
    },
  ];

  const transportMaterials = [
    {
      title: "Piedra caliza preparada",
      icon: <Mountain className="h-6 w-6" />,
    },
    {
      title: "Oxido de calcio (Cal Viva)",
      icon: <Flame className="h-6 w-6" />,
    },
    {
      title: "Carbon de piedra",
      icon: <Pickaxe className="h-6 w-6" />,
    },
    {
      title: "Insumos industriales",
      icon: <Truck className="h-6 w-6" />,
    },
  ];

  const safetyItems = [
    {
      title: "Cumplimiento Normativo",
      icon: ShieldCheck,
      description: "Operaciones alineadas a la normativa vigente en transporte y seguridad minera.",
    },
    {
      title: "Protocolos de Seguridad",
      icon: ClipboardCheck,
      description: "Procedimientos establecidos para carga, traslado y descarga en campo.",
    },
    {
      title: "Supervision en Operaciones",
      icon: Users,
      description: "Control operativo presencial en puntos criticos de cada traslado.",
    },
    {
      title: "Prevencion de Riesgos",
      icon: AlertTriangle,
      description: "Identificacion y mitigacion de riesgos en cada operacion logistica.",
    },
  ];



  return (
    <div className="dark-image min-h-screen bg-white">
      <PageSEO pageId="transporte-logistico-especializado" />
      <ProductIntroSection
        images={images}
        eyebrow="SERVICIOS INDUSTRIALES"
        title="Transporte logistico especializado para mineria no metalica"
        description="Brindamos transporte especializado con control logistico, supervision en puntos criticos y coordinacion directa con operaciones mineras para sostener continuidad de abastecimiento y cumplimiento operativo en campo."
        cards={introCards}
      />

      <FeatureCardsSection
        sectionRef={servicesRef}
        sectionClassName="py-20 bg-white"
        headingClassName="text-center mb-12"
        titleClassName="b2b-section-title text-center"
        title="Materiales Estrategicos Transportados"
        items={transportMaterials}
        gridClassName="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        itemClassName="service-card"
        hoverY={-6}
        variant="centered"
      />

      <SafetyComplianceSection
        sectionRef={securityRef}
        title="Seguridad y Cumplimiento Operativo"
        description="Operamos bajo estrictos estandares de seguridad industrial y normativa vigente en transporte para mineria no metalica."
        items={safetyItems}
  
      />
  {/* capacidad operativa */}
<section className="light-image py-20 b2b-dark-section">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-12"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="b2b-section-title-dark mb-6"
      >
        Capacidad Operativa Garantizada
      </motion.h2>

      <div className="mb-3 text-5xl font-semibold tracking-[-0.05em] text-emerald-400 md:text-7xl">
        176 TM
      </div>

      <p className="mx-auto max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
        Producción estimada con soporte logístico, control operativo en campo y continuidad para
        entornos de minería no metálica.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          "Transporte especializado en minería no metálica",
          "Control logístico en campo",
          "Seguridad y cumplimiento operativo",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:text-base"
          >
            <span className="text-emerald-400">✔ </span>
            {item}
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-500 md:text-base">
        Operaciones en zonas de difícil acceso y entornos de minería no metálica.
      </p>
    </motion.div>
  </div>
</section>
     
    </div>
  );
}
