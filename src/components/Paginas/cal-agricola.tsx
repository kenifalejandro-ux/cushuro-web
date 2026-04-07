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
import { useLocalizedContent } from "../../context/SiteLanguageContext";

export default function CalAgricola() {
  const copy = useLocalizedContent({
    es: {
      images: [
        { src: "img-productos/cal-agricola/cal-agricola001", alt: "Produccion de cal agricola" },
        {
          src: "img-productos/cal-agricola/cal-agricola002",
          alt: "Proceso industrial de cal agricola",
        },
        {
          src: "img-productos/cal-agricola/envasado-cal-agricola",
          alt: "Envasado y despacho de cal agricola",
        },
      ],
      intro: {
        title: "Producción de Cal Agrícola – Hidróxido de Calcio (Ca(OH)₂)",
        description:
          "La cal agrícola de alta pureza se obtiene mediante la hidratación controlada del Óxido de Calcio (CaO), producido en nuestros hornos industriales a partir de piedra caliza seleccionada de concesión propia. El proceso garantiza alta reactividad química, estabilidad granulométrica y desempeño técnico para aplicaciones ambientales y mineras.",
      },
      introCards: [
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
      ],
      capacityTitle: "Capacidad Operativa",
      capacityStats: [
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
      ],
      process: {
        title: "Proceso productivo de cal agrícola",
        description:
          "Una lectura más clara del flujo técnico, desde la extracción de caliza hasta el despacho final.",
        image: {
          src: "img-productos/cal-agricola/cal-agricola-despacho",
          alt: "Proceso industrial de cal agricola en planta",
          aspectClassName: "aspect-[4/5] md:aspect-[6/5]",
        },
        steps: [
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
        ],
      },
      applicationsImageAlt: "Aplicaciones de cal agricola en operaciones mineras",
      applications: [
        "Neutralización y control de pH en suelos intervenidos por actividad minera",
        "Tratamiento de drenaje ácido de mina (DAM)",
        "Estabilización química y acondicionamiento de relaves",
        "Mejoramiento de capacidad portante en vías, pads y plataformas operativas",
        "Control de acidez en programas de cierre progresivo",
        "Rehabilitación de áreas impactadas ambientalmente",
        "Inmovilización y precipitación de metales pesados",
        "Soporte técnico en planes de cierre y gestión ambiental minera",
      ],
      advantages: [
        { icon: Factory, text: "Abastecimiento directo desde concesión minera propia" },
        { icon: Flame, text: "Control granulométrico y calidad mineralógica por lote" },
        { icon: Factory, text: "Capacidad de suministro continuo para contratos mineros" },
        {
          icon: ShieldCheck,
          text: "Cumplimiento de estándares técnicos y ambientales vigentes",
        },
        { icon: Leaf, text: "Soporte para planes de remediación y cierre progresivo" },
      ],
      team: {
        title: "Equipo Operativo – Planta de Hidratación",
        members: [
          { role: "Operadores de Hidratación Controlada", workers: 4 },
          { role: "Supervisión Técnica y Control de Calidad", workers: 3 },
          { role: "Personal de Molienda y Clasificación", workers: 5 },
          { role: "Envasado y Despacho Industrial", workers: 4 },
          { role: "Seguridad y Control Operativo", workers: 2 },
        ],
        totalLabel: "Personal Operativo en Planta de Cal Hidratada",
      },
      cta: {
        title: "Solicite cotización de cal agrícola",
        description:
          "Atendemos requerimientos de cal agricola con especificaciones tecnicas, despacho programado y soporte comercial segun la necesidad de su operacion.",
        highlights: ["Corrección de suelos", "Atención por WhatsApp", "Huamachuco - La Libertad"],
        whatsappMessage: "Hola, deseo cotizar cal agricola.",
      },
    },
    en: {
      images: [
        { src: "img-productos/cal-agricola/cal-agricola001", alt: "Agricultural lime production" },
        {
          src: "img-productos/cal-agricola/cal-agricola002",
          alt: "Industrial agricultural lime process",
        },
        {
          src: "img-productos/cal-agricola/envasado-cal-agricola",
          alt: "Agricultural lime packaging and dispatch",
        },
      ],
      intro: {
        title: "Agricultural Lime Production – Calcium Hydroxide (Ca(OH)₂)",
        description:
          "High-purity agricultural lime is obtained through the controlled hydration of Calcium Oxide (CaO), produced in our industrial kilns from selected limestone from our own concession. The process ensures high chemical reactivity, granulometric stability, and technical performance for environmental and mining applications.",
      },
      introCards: [
        {
          icon: Factory,
          iconClassName: "text-amber-700",
          title: "Owned concessions",
          description: "Direct limestone supply from our quarry.",
        },
        {
          icon: Mountain,
          iconClassName: "text-emerald-600",
          title: "Raw material control",
          description: "Mineral classification to optimize thermal performance.",
        },
        {
          icon: ShieldCheck,
          iconClassName: "text-zinc-700",
          title: "Technical identification",
          items: [
            "Calcium Hydroxide (Ca(OH)₂)",
            "Purity: According to technical specification",
            "Solution pH: 12 – 12.5",
            "State: Powdered solid",
            "High alkaline reactivity",
          ],
        },
        {
          icon: MapPin,
          iconClassName: "text-emerald-500",
          title: "Commercial formats",
          description: "1 TM jumbo bag and 33 TM bulk hopper.",
        },
      ],
      capacityTitle: "Operating capacity",
      capacityStats: [
        {
          value: "176",
          label: "TM / Day",
          description: "Integrated production capacity (CaO base)",
          tone: "primary" as const,
        },
        {
          value: "24h",
          label: "Continuous Operation",
          description: "Controlled calcination and hydration process",
          tone: "soft" as const,
        },
        {
          value: "Big Bag",
          label: "1 TM and Bulk",
          description: "Specialized dispatch for mining operations",
          tone: "muted" as const,
        },
      ],
      process: {
        title: "Agricultural lime production process",
        description:
          "A clearer reading of the technical flow, from limestone extraction to final dispatch.",
        image: {
          src: "img-productos/cal-agricola/cal-agricola-despacho",
          alt: "Industrial agricultural lime process in plant",
          aspectClassName: "aspect-[4/5] md:aspect-[6/5]",
        },
        steps: [
          {
            etapa: "01",
            titulo: "Limestone extraction and selection",
            descripcion:
              "Raw material from our own quarry, selected for its high calcium carbonate content to ensure efficiency in the transformation process.",
            icon: Pickaxe,
          },
          {
            etapa: "02",
            titulo: "Calcination in industrial kiln",
            descripcion:
              "Thermal transformation of limestone at temperatures above 900°C to obtain high-purity Calcium Oxide (CaO).",
            icon: Flame,
          },
          {
            etapa: "03",
            titulo: "Controlled hydration",
            descripcion:
              "Technical process of controlled water addition to convert CaO into Calcium Hydroxide (Ca(OH)₂), ensuring high reactivity and chemical stability.",
            icon: Layers,
          },
          {
            etapa: "04",
            titulo: "Grinding and quality control",
            descripcion:
              "Particle-size classification and verification of purity, reactivity, and physicochemical parameters for mining and environmental control applications.",
            icon: ShieldCheck,
          },
          {
            etapa: "05",
            titulo: "Specialized dispatch and logistics",
            descripcion:
              "Packaging in sacks, big bags, or bulk dispatch with scheduled logistics for mining operations and environmental rehabilitation projects.",
            icon: Factory,
          },
        ],
      },
      applicationsImageAlt: "Agricultural lime applications in mining operations",
      applications: [
        "Neutralization and pH control in soils affected by mining activity",
        "Acid mine drainage treatment (AMD)",
        "Chemical stabilization and conditioning of tailings",
        "Improvement of bearing capacity on roads, pads, and operational platforms",
        "Acidity control in progressive closure programs",
        "Rehabilitation of environmentally impacted areas",
        "Immobilization and precipitation of heavy metals",
        "Technical support in closure plans and mining environmental management",
      ],
      advantages: [
        { icon: Factory, text: "Direct supply from our own mining concession" },
        { icon: Flame, text: "Particle-size control and mineralogical quality by batch" },
        { icon: Factory, text: "Continuous supply capacity for mining contracts" },
        {
          icon: ShieldCheck,
          text: "Compliance with current technical and environmental standards",
        },
        { icon: Leaf, text: "Support for remediation plans and progressive closure" },
      ],
      team: {
        title: "Operational Team – Hydration Plant",
        members: [
          { role: "Controlled Hydration Operators", workers: 4 },
          { role: "Technical Supervision and Quality Control", workers: 3 },
          { role: "Grinding and Classification Personnel", workers: 5 },
          { role: "Industrial Packaging and Dispatch", workers: 4 },
          { role: "Safety and Operational Control", workers: 2 },
        ],
        totalLabel: "Operational Personnel in Hydrated Lime Plant",
      },
      cta: {
        title: "Request a quote for agricultural lime",
        description:
          "We serve agricultural lime requirements with technical specifications, scheduled dispatch, and commercial support according to your operational needs.",
        highlights: ["Soil correction", "WhatsApp support", "Huamachuco - La Libertad"],
        whatsappMessage: "Hello, I would like to request a quote for agricultural lime.",
      },
    },
  });

  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="cal-agricola" />

      <ProductIntroSection
        images={copy.images}
        title={copy.intro.title}
        description={copy.intro.description}
        cards={copy.introCards}
      />

      <ProductCapacitySection title={copy.capacityTitle} stats={copy.capacityStats} />

      <ProductProcessFlow
        title={copy.process.title}
        description={copy.process.description}
        image={copy.process.image}
        steps={copy.process.steps.map(({ etapa, titulo, descripcion, icon: Icon }) => ({
          step: etapa,
          title: titulo,
          description: descripcion,
          icon: <Icon className="h-5 w-5" />,
        }))}
      />

      <ProductApplicationsGrid
        image={{
          src: "img-productos/cal-agricola/cal-agricola002",
          alt: copy.applicationsImageAlt,
          aspectClassName: "aspect-[6/5] md:aspect-[8/4]",
        }}
        items={copy.applications}
      />

      <ProductAdvantagesGrid items={copy.advantages} />

      <ProductTeamSection
        title={copy.team.title}
        members={copy.team.members}
        totalValue={18}
        totalLabel={copy.team.totalLabel}
      />

      <CommercialCTA
        title={copy.cta.title}
        description={copy.cta.description}
        highlights={copy.cta.highlights}
        whatsappMessage={copy.cta.whatsappMessage}
      />
    </div>
  );
}
