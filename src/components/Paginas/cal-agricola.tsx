/**client/src/components/Paginas/cal-agricola.tsx */

"use client";

import {
  Factory,
  Flame,
  MapPin,
  Leaf,
  ShieldCheck,
  Pickaxe,
  Mountain,
  Layers,
} from "lucide-react";

import CommercialCTA from "../global/CommercialCTA";
import PageSEO from "../global/PageSEO";
import ProductApplicationsGrid from "../ui/ProductApplicationsGrid";
import ProductAdvantagesGrid from "../ui/ProductAdvantagesGrid";
import ProductCapacitySection from "../ui/ProductCapacitySection";
import ProductIntroSection from "../ui/ProductIntroSection";
import ProductProcessFlow from "../ui/ProductProcessFlow";
import ProductTeamSection from "../ui/ProductTeamSection";

export default function CalAgricola() {
  const images = [
    { src: "img-productos/cal-agricola/cal-agricola001", alt: "Produccion de cal agricola" },
    {
      src: "img-productos/cal-agricola/cal-agricola002",
      alt: "Proceso industrial de cal agricola",
    },
    {
      src: "img-productos/cal-agricola/envasado-cal-agricola",
      alt: "Envasado y despacho de cal agricola",
    },
  ];

  const introCards = [
    {
      icon: Factory,
      iconClassName: "text-amber-700",
      title: "Concesiones Propias",
      description: "Abastecimiento directo de piedra caliza desde cantera.",
    },
    {
      icon: Mountain,
      iconClassName: "text-emerald-600",
      title: "Control de Materia Prima",
      description: "Clasificación mineral para optimizar el rendimiento térmico.",
    },
    {
      icon: ShieldCheck,
      iconClassName: "text-zinc-700",
      title: "Identificación Técnica",
      items: [
        "Hidróxido de Calcio (Ca(OH)₂)",
        "Pureza: Según especificación técnica",
        "pH en solución: 12 – 12.5",
        "Estado: Sólido pulverizado",
        "Alta reactividad alcalina",
      ],
    },
    {
      icon: MapPin,
      iconClassName: "text-emerald-500",
      title: "Presentaciones Comerciales",
      description: "Jumbo (Big Bag) 1 TM y Tolva a granel 33 TM.",
    },
  ];

  const capacityStats = [
    {
      value: "176",
      label: "TM / Día",
      description: "Capacidad integrada de producción (base CaO)",
      tone: "primary" as const,
    },
    {
      value: "24h",
      label: "Operación Continua",
      description: "Proceso de calcinación e hidratación controlada",
      tone: "soft" as const,
    },
    {
      value: "Big Bag",
      label: "1 TM y Granel",
      description: "Despacho especializado para operaciones mineras",
      tone: "muted" as const,
    },
  ];

  const teamMembers = [
    { role: "Operadores de Hidratación Controlada", workers: 4 },
    { role: "Supervisión Técnica y Control de Calidad", workers: 3 },
    { role: "Personal de Molienda y Clasificación", workers: 5 },
    { role: "Envasado y Despacho Industrial", workers: 4 },
    { role: "Seguridad y Control Operativo", workers: 2 },
  ];

  const procesos = [
    {
      etapa: "01",
      titulo: "Extracción y Selección de Caliza",
      descripcion:
        "Materia prima proveniente de cantera propia, seleccionada por su alto contenido de carbonato de calcio para garantizar eficiencia en el proceso de transformación.",
      icon: Pickaxe,
    },
    {
      etapa: "02",
      titulo: "Calcinación en Horno Industrial",
      descripcion:
        "Transformación térmica de la caliza a temperaturas superiores a 900°C para la obtención de Óxido de Calcio (CaO) de alta pureza.",
      icon: Flame,
    },
    {
      etapa: "03",
      titulo: "Hidratación Controlada",
      descripcion:
        "Proceso técnico de adición controlada de agua para convertir el CaO en Hidróxido de Calcio (Ca(OH)₂), asegurando alta reactividad y estabilidad química.",
      icon: Layers,
    },
    {
      etapa: "04",
      titulo: "Molienda y Control de Calidad",
      descripcion:
        "Clasificación granulométrica y verificación de pureza, reactividad y parámetros físico-químicos para aplicaciones en minería y control ambiental.",
      icon: ShieldCheck,
    },
    {
      etapa: "05",
      titulo: "Despacho y Logística Especializada",
      descripcion:
        "Envasado en sacos, big bag o despacho a granel con logística programada para operaciones mineras y proyectos de rehabilitación ambiental.",
      icon: Factory,
    },
  ];

  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="cal-agricola" />

      <ProductIntroSection
        images={images}
        title="Producción de Cal Agrícola – Hidróxido de Calcio (Ca(OH)₂)"
        description="La cal agrícola de alta pureza se obtiene mediante la hidratación controlada del Óxido de Calcio (CaO), producido en nuestros hornos industriales a partir de piedra caliza seleccionada de concesión propia. El proceso garantiza alta reactividad química, estabilidad granulométrica y desempeño técnico para aplicaciones ambientales y mineras."
        cards={introCards}
      />

      <ProductCapacitySection title="Capacidad Operativa" stats={capacityStats} />

      {/* PROCESO INDUSTRIAL */}

      <ProductProcessFlow
        title="Proceso productivo de cal agrícola"
        description="Una lectura más clara del flujo técnico, desde la extracción de caliza hasta el despacho final."
        image={{
      src: "img-productos/cal-agricola/cal-agricola-despacho",
          alt: "Proceso industrial de cal agricola en planta",
          aspectClassName: "aspect-[4/5] md:aspect-[6/5]",
        }}
        steps={procesos.map(({ etapa, titulo, descripcion, icon: Icon }) => ({
          step: etapa,
          title: titulo,
          description: descripcion,
          icon: <Icon className="h-5 w-5" />,
        }))}
      />

      {/* APLICACIONES MINERAS */}
      <ProductApplicationsGrid
        image={{
          src: "img-productos/cal-agricola/cal-agricola002",
          alt: "Aplicaciones de cal agricola en operaciones mineras",
          aspectClassName: "aspect-[6/5] md:aspect-[8/4]",
        }}
        items={[
          "Neutralización y control de pH en suelos intervenidos por actividad minera",
          "Tratamiento de drenaje ácido de mina (DAM)",
          "Estabilización química y acondicionamiento de relaves",
          "Mejoramiento de capacidad portante en vías, pads y plataformas operativas",
          "Control de acidez en programas de cierre progresivo",
          "Rehabilitación de áreas impactadas ambientalmente",
          "Inmovilización y precipitación de metales pesados",
          "Soporte técnico en planes de cierre y gestión ambiental minera",
        ]}
      />
      {/* ventajas competitivas */}
      <ProductAdvantagesGrid
       
        items={[
          { icon: Factory, text: "Abastecimiento directo desde concesión minera propia" },
          { icon: Flame, text: "Control granulométrico y calidad mineralógica por lote" },
          { icon: Factory, text: "Capacidad de suministro continuo para contratos mineros" },
          {
            icon: ShieldCheck,
            text: "Cumplimiento de estándares técnicos y ambientales vigentes",
          },
          { icon: Leaf, text: "Soporte para planes de remediación y cierre progresivo" },
        ]}
      />
 {/* Estructura Operativa */}
      <ProductTeamSection
        title="Equipo Operativo – Planta de Hidratación"
        members={teamMembers}
        totalValue={18}
        totalLabel="Personal Operativo en Planta de Cal Hidratada"
      />
      <CommercialCTA
        title="Solicite cotización de cal agrícola"
        description="Atendemos requerimientos de cal agricola con especificaciones tecnicas, despacho programado y soporte comercial segun la necesidad de su operacion."
        highlights={["Corrección de suelos", "Atención por WhatsApp", "Huamachuco - La Libertad"]}
        whatsappMessage="Hola, deseo cotizar cal agricola."
      />
    </div>
  );
}
