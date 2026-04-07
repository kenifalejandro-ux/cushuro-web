/**client/src/components/Paginas/carbon-antracita.tsx */

"use client";

import {
  Factory,
  Flame,
  MapPin,
  ShieldCheck,
  Pickaxe,
  Mountain,
  Zap,
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

export default function CarbonAntracita() {
  const copy = useLocalizedContent({
    es: {
      images: [
        {
          src: "img-productos/carbon-antracita/carreo-antracita",
          alt: "Acarreo de carbon antracita",
        },
        {
          src: "img-productos/carbon-antracita/carga-carbon-tipo-cisco",
          alt: "Clasificacion y chancado de carbon antracita",
        },
        {
          src: "img-productos/carbon-antracita/despacho-antracita",
          alt: "Despacho de carbon antracita para industria",
        },
      ],
      intro: {
        title: "Producción y Suministro de Carbón Antracita Industrial",
        description:
          "La empresa cuenta con concesiones propias de carbón antracita, garantizando control directo de reservas, trazabilidad del mineral y abastecimiento continuo para operaciones industriales y mineras.",
      },
      introCards: [
        {
          icon: Factory,
          iconClassName: "text-amber-700",
          title: "Concesiones Propias",
          description:
            "Explotación directa de canteras de carbón antracita con control en extracción, clasificación y despacho.",
        },
        {
          icon: Mountain,
          iconClassName: "text-emerald-600",
          title: "Control de Calidad del Mineral",
          items: [
            "Clasificación por granulometría",
            "Verificación de parámetros:",
            "Contenido de carbono fijo",
            "Nivel de cenizas",
            "Humedad",
            "Poder calorífico",
          ],
          note: "Garantizando desempeño eficiente en aplicaciones térmicas e industriales.",
        },
        {
          icon: ShieldCheck,
          iconClassName: "text-zinc-700",
          title: "Identificación Técnica",
          items: [
            "Clasificación: Carbón mineral de alto rango",
            "Carbono fijo: 85% – 95%",
            "Cenizas: 3% – 10%",
            "Azufre: 0.5% – 1%",
            "Humedad: Controlada según requerimiento",
            "Estado: Granulado clasificado",
          ],
        },
        {
          icon: MapPin,
          iconClassName: "text-emerald-500",
          title: "Presentaciones Comerciales",
          description: "Jumbo (Big Bag) 1 TM y Tolva a granel 33 TM.",
        },
      ],
      capacityTitle: "Capacidad Operativa Minera",
      capacityStats: [
        {
          value: "176",
          label: "TM / Día",
          description: "Capacidad estimada de extracción y clasificación",
          tone: "primary" as const,
        },
        {
          value: "85–95%",
          label: "Carbono Fijo",
          description: "Alto rendimiento energético y baja volatilidad",
          tone: "soft" as const,
        },
        {
          value: "24h",
          label: "Operación Continua",
          description: "Abastecimiento directo desde cantera propia",
          tone: "muted" as const,
        },
      ],
      process: {
        title: "Proceso industrial de carbón antracita",
        description:
          "Una secuencia técnica más clara desde la selección de veta hasta el control de calidad y suministro continuo para operación industrial.",
        image: {
          src: "img-productos/carbon-antracita/carbon-antracita-vestigio",
          alt: "Clasificacion y chancado de carbon antracita",
          aspectClassName: "aspect-[4/5] md:aspect-square",
        },
        steps: [
          {
            step: "01",
            title: "Selección de Veta",
            description:
              "Evaluación geológica y selección de frentes con carbón antracita de alto rango, elevado contenido de carbono fijo y bajo nivel de volátiles.",
            icon: Pickaxe,
          },
          {
            step: "02",
            title: "Extracción y Acarreo",
            description:
              "Operación minera controlada para el traslado seguro del mineral hacia planta de procesamiento y clasificación.",
            icon: Factory,
          },
          {
            step: "03",
            title: "Chancado y Clasificación Granulométrica",
            description:
              "Reducción y zarandeo del mineral para obtener tamaños específicos según requerimiento industrial, asegurando combustión eficiente y estable.",
            icon: Zap,
          },
          {
            step: "04",
            title: "Control y Optimización de Humedad",
            description:
              "Ajuste del contenido de humedad para maximizar el rendimiento energético y mejorar la estabilidad en procesos térmicos continuos.",
            icon: Flame,
          },
          {
            step: "05",
            title: "Control de Calidad y Despacho",
            description:
              "Análisis de poder calorífico, carbono fijo, cenizas y azufre para garantizar suministro confiable a operaciones mineras e industriales 24/7.",
            icon: ShieldCheck,
          },
        ],
      },
      applicationsImageAlt: "Aplicaciones de carbon antracita en operaciones industriales",
      applications: [
        "Alto carbono fijo para eficiencia en combustión industrial",
        "Estabilidad térmica en hornos de calcinación",
        "Agente energético en procesos metalúrgicos",
        "Optimización de rendimiento térmico en plantas industriales",
        "Control de cenizas y humedad para desempeño uniforme",
        "Granulometría adaptada a requerimiento operativo",
        "Suministro directo desde cantera propia",
        "Soporte para continuidad operativa minera",
      ],
      advantages: [
        {
          icon: Factory,
          text: "Canteras propias de carbón antracita con trazabilidad garantizada",
        },
        { icon: Flame, text: "Alto poder calorífico y elevado contenido de carbono fijo" },
        { icon: ShieldCheck, text: "Control de calidad: granulometría, cenizas y humedad" },
        { icon: Factory, text: "Capacidad de suministro continuo para operaciones mineras" },
        { icon: Flame, text: "Clasificación del mineral según requerimiento operativo" },
        {
          icon: ShieldCheck,
          text: "Cumplimiento de estándares técnicos y ambientales vigentes",
        },
      ],
      team: {
        title: "Equipo Operativo Minero – Carbón Antracita",
        members: [
          { role: "Operadores de Extracción Minera", workers: 8 },
          { role: "Personal de Clasificación y Zarandeo", workers: 5 },
          { role: "Supervisión Geológica y Técnica", workers: 3 },
          { role: "Logística y Transporte Interno", workers: 4 },
          { role: "Seguridad y Control Operativo", workers: 2 },
        ],
        totalLabel: "Personal Operativo en Cantera de Carbón",
      },
      cta: {
        title: "Solicite cotización de carbón antracita",
        description:
          "Carbon antracita con control de calidad y granulometria para hornos industriales y requerimientos energeticos de operaciones mineras.",
        highlights: ["Control de humedad", "Granulometría clasificada", "Respuesta comercial"],
        whatsappMessage: "Hola, deseo cotizar carbon antracita.",
      },
    },
    en: {
      images: [
        {
          src: "img-productos/carbon-antracita/carreo-antracita",
          alt: "Anthracite coal hauling",
        },
        {
          src: "img-productos/carbon-antracita/carga-carbon-tipo-cisco",
          alt: "Anthracite coal crushing and grading",
        },
        {
          src: "img-productos/carbon-antracita/despacho-antracita",
          alt: "Anthracite coal dispatch for industry",
        },
      ],
      intro: {
        title: "Industrial Anthracite Coal Production and Supply",
        description:
          "The company operates its own anthracite coal concessions, ensuring direct reserve control, mineral traceability, and continuous supply for industrial and mining operations.",
      },
      introCards: [
        {
          icon: Factory,
          iconClassName: "text-amber-700",
          title: "Owned concessions",
          description:
            "Direct exploitation of anthracite coal quarries with control over extraction, classification, and dispatch.",
        },
        {
          icon: Mountain,
          iconClassName: "text-emerald-600",
          title: "Mineral quality control",
          items: [
            "Grain size classification",
            "Parameter verification:",
            "Fixed carbon content",
            "Ash level",
            "Moisture",
            "Calorific value",
          ],
          note: "Ensuring efficient performance in thermal and industrial applications.",
        },
        {
          icon: ShieldCheck,
          iconClassName: "text-zinc-700",
          title: "Technical identification",
          items: [
            "Classification: High-rank mineral coal",
            "Fixed carbon: 85% – 95%",
            "Ashes: 3% – 10%",
            "Sulfur: 0.5% – 1%",
            "Moisture: Controlled as required",
            "State: Classified granules",
          ],
        },
        {
          icon: MapPin,
          iconClassName: "text-emerald-500",
          title: "Commercial formats",
          description: "1 TM jumbo bag and 33 TM bulk hopper.",
        },
      ],
      capacityTitle: "Mining operating capacity",
      capacityStats: [
        {
          value: "176",
          label: "TM / Day",
          description: "Estimated extraction and classification capacity",
          tone: "primary" as const,
        },
        {
          value: "85–95%",
          label: "Fixed Carbon",
          description: "High energy performance and low volatility",
          tone: "soft" as const,
        },
        {
          value: "24h",
          label: "Continuous Operation",
          description: "Direct supply from our own quarry",
          tone: "muted" as const,
        },
      ],
      process: {
        title: "Industrial anthracite coal process",
        description:
          "A clearer technical sequence from seam selection to quality control and continuous industrial supply.",
        image: {
          src: "img-productos/carbon-antracita/carbon-antracita-vestigio",
          alt: "Anthracite coal crushing and grading",
          aspectClassName: "aspect-[4/5] md:aspect-square",
        },
        steps: [
          {
            step: "01",
            title: "Seam Selection",
            description:
              "Geological evaluation and selection of fronts with high-rank anthracite coal, high fixed carbon content, and low volatile levels.",
            icon: Pickaxe,
          },
          {
            step: "02",
            title: "Extraction and Hauling",
            description:
              "Controlled mining operation for the safe transfer of mineral to the processing and classification plant.",
            icon: Factory,
          },
          {
            step: "03",
            title: "Crushing and Size Classification",
            description:
              "Mineral reduction and screening to obtain specific sizes according to industrial requirements, ensuring efficient and stable combustion.",
            icon: Zap,
          },
          {
            step: "04",
            title: "Moisture Control and Optimization",
            description:
              "Moisture adjustment to maximize energy performance and improve stability in continuous thermal processes.",
            icon: Flame,
          },
          {
            step: "05",
            title: "Quality Control and Dispatch",
            description:
              "Analysis of calorific value, fixed carbon, ash, and sulfur to guarantee reliable supply for mining and industrial operations 24/7.",
            icon: ShieldCheck,
          },
        ],
      },
      applicationsImageAlt: "Anthracite coal applications in industrial operations",
      applications: [
        "High fixed carbon for efficient industrial combustion",
        "Thermal stability in calcination kilns",
        "Energy agent in metallurgical processes",
        "Thermal performance optimization in industrial plants",
        "Ash and moisture control for consistent performance",
        "Grain size adapted to operational requirements",
        "Direct supply from our own quarry",
        "Support for mining operational continuity",
      ],
      advantages: [
        {
          icon: Factory,
          text: "Owned anthracite coal quarries with guaranteed traceability",
        },
        { icon: Flame, text: "High calorific value and high fixed carbon content" },
        { icon: ShieldCheck, text: "Quality control: grain size, ash, and moisture" },
        { icon: Factory, text: "Continuous supply capacity for mining operations" },
        { icon: Flame, text: "Mineral classification according to operational needs" },
        {
          icon: ShieldCheck,
          text: "Compliance with current technical and environmental standards",
        },
      ],
      team: {
        title: "Mining Operations Team – Anthracite Coal",
        members: [
          { role: "Mining Extraction Operators", workers: 8 },
          { role: "Classification and Screening Personnel", workers: 5 },
          { role: "Geological and Technical Supervision", workers: 3 },
          { role: "Logistics and Internal Transport", workers: 4 },
          { role: "Safety and Operational Control", workers: 2 },
        ],
        totalLabel: "Operating Personnel in Coal Quarry",
      },
      cta: {
        title: "Request an anthracite coal quote",
        description:
          "Anthracite coal with quality and grain-size control for industrial kilns and energy requirements in mining operations.",
        highlights: ["Moisture control", "Classified grain size", "Commercial response"],
        whatsappMessage: "Hello, I would like to request a quote for anthracite coal.",
      },
    },
  });

  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="carbon-antracita" />

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
        steps={copy.process.steps.map(({ step, title, description, icon: Icon }) => ({
          step,
          title,
          description,
          icon: <Icon size={24} />,
        }))}
      />

      <ProductApplicationsGrid
        image={{
          src: "img-productos/carbon-antracita/carbon-antracita-vestigio001",
          alt: copy.applicationsImageAlt,
          aspectClassName: "aspect-[6/5] md:aspect-[8/4]",
        }}
        items={copy.applications}
      />

      <ProductAdvantagesGrid items={copy.advantages} />

      <ProductTeamSection
        title={copy.team.title}
        members={copy.team.members}
        totalValue={22}
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
