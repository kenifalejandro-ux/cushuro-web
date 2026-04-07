/**client/src/components/Paginas/carbon-cisco.tsx */

"use client";

import {
  Factory,
  Flame,
  MapPin,
  ShieldCheck,
  Pickaxe,
  Mountain,
  Thermometer,
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

export default function CarbonCisco() {
  const copy = useLocalizedContent({
    es: {
      images: [
        {
          src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco",
          alt: "Carbon tipo cisco clasificado",
        },
        {
          src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco-despacho",
          alt: "Carga de carbon tipo cisco",
        },
        {
          src: "img-productos/carbon-tipo-cisco/despacho-carbon-tipo-cisco",
          alt: "Despacho de carbon tipo cisco",
        },
      ],
      intro: {
        title: "Producción y Suministro de Carbón Tipo Cisco Industrial",
        description:
          "La empresa cuenta con unidades de extracción y clasificación de carbón mineral, garantizando abastecimiento continuo de carbón cisco para operaciones mineras e industriales que requieren combustible sólido eficiente y de rápida combustión. El carbón cisco es una fracción fina de carbón mineral utilizada como fuente energética en procesos térmicos, destacando por su facilidad de ignición y buen rendimiento en hornos industriales.",
      },
      introCards: [
        {
          icon: Factory,
          iconClassName: "text-amber-700",
          title: "Concesiones Propias",
          description:
            "Extracción y clasificación directa de carbón mineral, asegurando trazabilidad, control de calidad y suministro estable.",
        },
        {
          icon: Mountain,
          iconClassName: "text-emerald-600",
          title: "Control de Calidad del Mineral",
          items: [
            "Contenido de carbono fijo",
            "Nivel de cenizas",
            "Humedad",
            "Poder calorífico",
          ],
          note: "Garantizando eficiencia térmica y estabilidad en procesos industriales.",
        },
        {
          icon: ShieldCheck,
          iconClassName: "text-zinc-700",
          title: "Identificación Técnica",
          items: [
            "Clasificación: Carbón mineral – Fracción fina (Cisco)",
            "Carbono fijo: 70% – 85%",
            "Cenizas: 5% – 15%",
            "Azufre: 0.5% – 1.5%",
            "Estado: Sólido fino / granulado pequeño",
            "Humedad: Controlada según requerimiento",
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
          description: "Capacidad estimada de clasificación y suministro",
          tone: "primary" as const,
        },
        {
          value: "70–85%",
          label: "Carbono Fijo",
          description: "Combustión eficiente y rápida ignición",
          tone: "soft" as const,
        },
        {
          value: "Malla",
          label: "Clasificación Controlada",
          description: "Granulometría uniforme según requerimiento industrial",
          tone: "muted" as const,
        },
      ],
      process: {
        title: "Proceso industrial de carbón tipo cisco",
        description:
          "Una lectura más limpia del flujo productivo, desde la clasificación de finos hasta el despacho continuo para procesos térmicos.",
        image: {
          src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco-suelto",
          alt: "Carga y manejo industrial de carbon tipo cisco",
          aspectClassName: "aspect-square md:aspect-[6/5]",
        },
        steps: [
          {
            step: "01",
            title: "Clasificación de Finos",
            description:
              "Separación y recuperación de fracción fina (carbón tipo cisco) proveniente del proceso de chancado y zarandeo de antracita.",
            icon: Pickaxe,
          },
          {
            step: "02",
            title: "Control de Humedad",
            description:
              "Optimización del contenido de humedad para mejorar ignición y eficiencia energética en procesos térmicos.",
            icon: Thermometer,
          },
          {
            step: "03",
            title: "Zarandeo por Malla",
            description:
              "Clasificación granulométrica para garantizar tamaño uniforme según requerimiento de hornos industriales.",
            icon: Factory,
          },
          {
            step: "04",
            title: "Acondicionamiento y Mezcla",
            description:
              "Posible combinación con otros combustibles sólidos para estabilizar llama y optimizar rendimiento térmico.",
            icon: Flame,
          },
          {
            step: "05",
            title: "Control de Calidad y Despacho",
            description:
              "Verificación de poder calorífico, humedad y cenizas para suministro continuo a operaciones industriales.",
            icon: ShieldCheck,
          },
        ],
      },
      applicationsImageAlt: "Aplicaciones de carbon tipo cisco en procesos termicos",
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
        title: "Equipo Operativo – Clasificación y Suministro de Cisco",
        members: [
          { role: "Operadores de Clasificación y Zarandeo", workers: 6 },
          { role: "Control de Humedad y Calidad", workers: 3 },
          { role: "Supervisión Técnica Minera", workers: 2 },
          { role: "Logística y Despacho Industrial", workers: 4 },
          { role: "Seguridad y Control Operativo", workers: 2 },
        ],
        totalLabel: "Personal Operativo en Clasificación de Carbón Cisco",
      },
      cta: {
        title: "Cotice carbón tipo cisco para hornos industriales",
        description:
          "Carbon tipo cisco clasificado para procesos termicos, con atencion comercial y coordinacion de suministro segun requerimiento industrial.",
        highlights: ["Clasificación controlada", "Combustible sólido", "Atención comercial"],
        whatsappMessage: "Hola, deseo cotizar carbon tipo cisco.",
      },
    },
    en: {
      images: [
        {
          src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco",
          alt: "Classified cisco coal",
        },
        {
          src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco-despacho",
          alt: "Cisco coal loading",
        },
        {
          src: "img-productos/carbon-tipo-cisco/despacho-carbon-tipo-cisco",
          alt: "Cisco coal dispatch",
        },
      ],
      intro: {
        title: "Industrial Cisco Coal Production and Supply",
        description:
          "The company operates mineral coal extraction and classification units, guaranteeing continuous supply of cisco coal for mining and industrial operations requiring efficient and fast-burning solid fuel. Cisco coal is a fine mineral coal fraction used as an energy source in thermal processes, standing out for its easy ignition and good performance in industrial kilns.",
      },
      introCards: [
        {
          icon: Factory,
          iconClassName: "text-amber-700",
          title: "Owned concessions",
          description:
            "Direct extraction and classification of mineral coal, ensuring traceability, quality control, and stable supply.",
        },
        {
          icon: Mountain,
          iconClassName: "text-emerald-600",
          title: "Mineral quality control",
          items: ["Fixed carbon content", "Ash level", "Moisture", "Calorific value"],
          note: "Ensuring thermal efficiency and stable performance in industrial processes.",
        },
        {
          icon: ShieldCheck,
          iconClassName: "text-zinc-700",
          title: "Technical identification",
          items: [
            "Classification: Mineral coal – Fine fraction (Cisco)",
            "Fixed carbon: 70% – 85%",
            "Ashes: 5% – 15%",
            "Sulfur: 0.5% – 1.5%",
            "State: Fine solid / small granules",
            "Moisture: Controlled as required",
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
          description: "Estimated classification and supply capacity",
          tone: "primary" as const,
        },
        {
          value: "70–85%",
          label: "Fixed Carbon",
          description: "Efficient combustion and fast ignition",
          tone: "soft" as const,
        },
        {
          value: "Mesh",
          label: "Controlled Classification",
          description: "Uniform grain size according to industrial requirements",
          tone: "muted" as const,
        },
      ],
      process: {
        title: "Industrial cisco coal process",
        description:
          "A cleaner reading of the production flow, from fine fraction classification to continuous dispatch for thermal processes.",
        image: {
          src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco-suelto",
          alt: "Industrial loading and handling of cisco coal",
          aspectClassName: "aspect-square md:aspect-[6/5]",
        },
        steps: [
          {
            step: "01",
            title: "Fine Fraction Classification",
            description:
              "Separation and recovery of the fine fraction (cisco coal) coming from anthracite crushing and screening.",
            icon: Pickaxe,
          },
          {
            step: "02",
            title: "Moisture Control",
            description:
              "Optimization of moisture content to improve ignition and energy efficiency in thermal processes.",
            icon: Thermometer,
          },
          {
            step: "03",
            title: "Mesh Screening",
            description:
              "Granulometric classification to guarantee uniform size according to industrial kiln requirements.",
            icon: Factory,
          },
          {
            step: "04",
            title: "Conditioning and Blending",
            description:
              "Possible blending with other solid fuels to stabilize the flame and optimize thermal performance.",
            icon: Flame,
          },
          {
            step: "05",
            title: "Quality Control and Dispatch",
            description:
              "Verification of calorific value, moisture, and ash for continuous supply to industrial operations.",
            icon: ShieldCheck,
          },
        ],
      },
      applicationsImageAlt: "Cisco coal applications in thermal processes",
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
        { icon: Flame, text: "Mineral classification according to operational requirements" },
        {
          icon: ShieldCheck,
          text: "Compliance with current technical and environmental standards",
        },
      ],
      team: {
        title: "Operations Team – Cisco Classification and Supply",
        members: [
          { role: "Classification and Screening Operators", workers: 6 },
          { role: "Moisture and Quality Control", workers: 3 },
          { role: "Mining Technical Supervision", workers: 2 },
          { role: "Industrial Logistics and Dispatch", workers: 4 },
          { role: "Safety and Operational Control", workers: 2 },
        ],
        totalLabel: "Operating Personnel in Cisco Coal Classification",
      },
      cta: {
        title: "Quote cisco coal for industrial kilns",
        description:
          "Classified cisco coal for thermal processes, with commercial support and supply coordination according to industrial requirements.",
        highlights: ["Controlled classification", "Solid fuel", "Commercial support"],
        whatsappMessage: "Hello, I would like to request a quote for cisco coal.",
      },
    },
  });

  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="carbon-cisco" />

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
          src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco-despacho",
          alt: copy.applicationsImageAlt,
          aspectClassName: "aspect-[6/5] md:aspect-[8/4]",
        }}
        items={copy.applications}
      />

      <ProductAdvantagesGrid items={copy.advantages} />

      <ProductTeamSection
        title={copy.team.title}
        members={copy.team.members}
        totalValue={17}
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
