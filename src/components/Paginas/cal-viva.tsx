/**client/src/components/Paginas/cal-viva.tsx */

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

export default function CalViva() {
  const copy = useLocalizedContent({
    es: {
      images: [
        {
          src: "img-productos/cal-viva/imagen-inicio/img003",
          alt: "Produccion de cal viva en planta industrial",
        },
        {
          src: "img-productos/cal-viva/imagen-inicio/oxido-de-calcio001",
          alt: "Hornos industriales para oxido de calcio",
        },
        {
          src: "img-productos/cal-viva/imagen-inicio/piedra-caliza",
          alt: "Piedra caliza utilizada para producir cal viva",
        },
      ],
      intro: {
        title: "Producción de Óxido de Calcio Industrial - Cal Viva",
        description:
          "La producción de óxido de calcio (CaO) se realiza mediante la calcinación controlada de piedra caliza en hornos industriales. Nuestro proceso garantiza continuidad operativa, calidad mineralógica y abastecimiento confiable para la industria minera, metalúrgica y cementera.",
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
            "Óxido de Calcio (CaO)",
            "Peso molecular: 56.08 g/mol",
            "Cal Total (CaO): ≥ 86%",
            "Cal Útil Disponible: ≥ 81%",
            "Estado físico: Sólido granular / molido",
            "Alta reactividad química",
          ],
        },
        {
          icon: MapPin,
          iconClassName: "text-emerald-500",
          title: "Presentaciones Comerciales",
          description: "Jumbo (Big Bag) 1 TM y Tolva a granel 33 TM.",
        },
      ],
      capacityTitle: "Capacidad de Producción",
      capacityStats: [
        { value: "5", label: "Hornos Operativos", description: "Producción continua", tone: "primary" as const },
        { value: "176", label: "Toneladas / Día", description: "Producción estimada", tone: "soft" as const },
        { value: "75", label: "Trabajadores", description: "Operación industrial", tone: "muted" as const },
      ],
      process: {
        title: "Proceso industrial de piedra caliza",
        description:
          "Desde la extracción en cantera hasta el despacho industrial, cada etapa se organiza con foco en continuidad de suministro y control mineralógico.",
        steps: [
          {
            numero: "01",
            titulo: "Selección de Materia Prima",
            descripcion:
              "Extracción y selección de piedra caliza con pureza superior al 90% de CaCO₃, garantizando eficiencia en la transformación industrial.",
            icon: Pickaxe,
            image: {
              src: "img-productos/cal-viva/proceso/extraccion-de-piedra-caliza",
              alt: "extracción de piedra caliza para producción de cal viva",
            },
          },
          {
            numero: "02",
            titulo: "Triturado y Clasificación",
            descripcion:
              "Reducción y control granulométrico del mineral para asegurar una calcinación homogénea y eficiente.",
            icon: Layers,
            image: {
              src: "img-productos/cal-viva/proceso/triturado-piedra-caliza",
              alt: "triturado y clasificación de piedra caliza para producción de cal viva",
            },
          },
          {
            numero: "03",
            titulo: "Calcinación Controlada",
            descripcion:
              "Proceso térmico continuo en hornos industriales (900°C – 1,100°C) para la obtención de Óxido de Calcio (CaO). Capacidad productiva: 176 TM/día.",
            icon: Flame,
            image: {
              src: "img-productos/cal-viva/proceso/calcinacion-piedra-caliza",
              alt: "Calcinación de piedra caliza para producción de cal viva en hornos industriales",
            },
          },
          {
            numero: "04",
            titulo: "Análisis y Control de Calidad",
            descripcion:
              "Verificación de composición química, determinación de Cal Total y Cal Útil Disponible, garantizando altos estándares para uso minero.",
            icon: ShieldCheck,
            image: {
              src: "img-productos/cal-viva/proceso/control-de-calidad",
              alt: "Control de calidad de cal viva para uso industrial y minero",
            },
          },
          {
            numero: "05",
            titulo: "Clasificación y Despacho",
            descripcion:
              "Presentación en formato granular o molido, con despacho a granel, en sacos o big bag para operaciones mineras.",
            icon: Factory,
            image: {
              src: "img-productos/cal-viva/proceso/despacho-piedra-caliza",
              alt: "Despacho industrial de piedra caliza",
            },
          },
        ],
      },
      applicationsImageAlt: "Aplicaciones de cal viva para procesos industriales y mineros",
      applications: [
        "Control de pH en circuitos de molienda",
        "Flotación y recuperación de cobre, oro y zinc",
        "Depresión selectiva de sulfuros (pirita)",
        "Neutralización de drenaje ácido de mina (AMD)",
        "Estabilización química de relaves",
        "Tratamiento de aguas de proceso",
        "Control de efluentes industriales mineros",
        "Procesos hidrometalúrgicos",
      ],
      advantages: [
        { icon: Factory, text: "Denuncios propios de piedra caliza y carbón" },
        { icon: Flame, text: "Producción continua 24 horas" },
        { icon: Factory, text: "Logística propia" },
        {
          icon: ShieldCheck,
          text: "Cumplimiento de estándares del Ministerio de Energía y Minas",
        },
        { icon: Leaf, text: "Operaciones" },
      ],
      team: {
        title: "Mano de Obra por Horno (35 TM)",
        members: [
          { role: "Preparación de piedra", workers: 6 },
          { role: "Transporte", workers: 4 },
          { role: "Operador de quemado", workers: 1 },
          { role: "Preparadores de carbón", workers: 2 },
          { role: "Separación de desechos", workers: 2 },
        ],
        totalLabel: "Trabajadores totales por horno",
      },
      cta: {
        title: "Cotice cal viva para minería e industria",
        description:
          "Suministro de cal viva con produccion continua, control de calidad y atencion comercial para operaciones mineras e industriales.",
        highlights: ["5 hornos operativos", "Atención comercial", "RUC 20482610944"],
        whatsappMessage: "Hola, deseo cotizar cal viva para mi operación.",
      },
    },
    en: {
      images: [
        {
          src: "img-productos/cal-viva/imagen-inicio/img003",
          alt: "Quicklime production in an industrial plant",
        },
        {
          src: "img-productos/cal-viva/imagen-inicio/oxido-de-calcio001",
          alt: "Industrial kilns for calcium oxide production",
        },
        {
          src: "img-productos/cal-viva/imagen-inicio/piedra-caliza",
          alt: "Limestone used to produce quicklime",
        },
      ],
      intro: {
        title: "Industrial Calcium Oxide Production - Quicklime",
        description:
          "Calcium oxide (CaO) is produced through the controlled calcination of limestone in industrial kilns. Our process ensures operational continuity, mineralogical quality, and reliable supply for the mining, metallurgical, and cement industries.",
      },
      introCards: [
        {
          icon: Factory,
          iconClassName: "text-amber-700",
          title: "Owned concessions",
          description: "Direct limestone supply from our own quarry.",
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
            "Calcium Oxide (CaO)",
            "Molecular weight: 56.08 g/mol",
            "Total Lime (CaO): ≥ 86%",
            "Available Useful Lime: ≥ 81%",
            "Physical state: Granular / ground solid",
            "High chemical reactivity",
          ],
        },
        {
          icon: MapPin,
          iconClassName: "text-emerald-500",
          title: "Commercial formats",
          description: "1 TM jumbo bag and 33 TM bulk hopper.",
        },
      ],
      capacityTitle: "Production capacity",
      capacityStats: [
        { value: "5", label: "Operating kilns", description: "Continuous production", tone: "primary" as const },
        { value: "176", label: "Tons / Day", description: "Estimated production", tone: "soft" as const },
        { value: "75", label: "Workers", description: "Industrial operation", tone: "muted" as const },
      ],
      process: {
        title: "Industrial limestone process",
        description:
          "From quarry extraction to industrial dispatch, each stage is organized around supply continuity and mineralogical control.",
        steps: [
          {
            numero: "01",
            titulo: "Raw material selection",
            descripcion:
              "Extraction and selection of limestone with purity above 90% CaCO₃, ensuring efficiency in industrial transformation.",
            icon: Pickaxe,
            image: {
              src: "img-productos/cal-viva/proceso/extraccion-de-piedra-caliza",
              alt: "limestone extraction for quicklime production",
            },
          },
          {
            numero: "02",
            titulo: "Crushing and classification",
            descripcion:
              "Particle size reduction and control to ensure homogeneous and efficient calcination.",
            icon: Layers,
            image: {
              src: "img-productos/cal-viva/proceso/triturado-piedra-caliza",
              alt: "crushing and classification of limestone for quicklime production",
            },
          },
          {
            numero: "03",
            titulo: "Controlled calcination",
            descripcion:
              "Continuous thermal process in industrial kilns (900°C – 1,100°C) to obtain Calcium Oxide (CaO). Production capacity: 176 TM/day.",
            icon: Flame,
            image: {
              src: "img-productos/cal-viva/proceso/calcinacion-piedra-caliza",
              alt: "Limestone calcination for quicklime production in industrial kilns",
            },
          },
          {
            numero: "04",
            titulo: "Analysis and quality control",
            descripcion:
              "Verification of chemical composition and determination of Total Lime and Available Useful Lime, ensuring high standards for mining use.",
            icon: ShieldCheck,
            image: {
              src: "img-productos/cal-viva/proceso/control-de-calidad",
              alt: "Quicklime quality control for industrial and mining use",
            },
          },
          {
            numero: "05",
            titulo: "Classification and dispatch",
            descripcion:
              "Granular or ground presentation with dispatch in bulk, sacks, or big bags for mining operations.",
            icon: Factory,
            image: {
              src: "img-productos/cal-viva/proceso/despacho-piedra-caliza",
              alt: "Industrial limestone dispatch",
            },
          },
        ],
      },
      applicationsImageAlt: "Quicklime applications for industrial and mining processes",
      applications: [
        "pH control in grinding circuits",
        "Copper, gold, and zinc flotation and recovery",
        "Selective sulfide depression (pyrite)",
        "Acid mine drainage neutralization (AMD)",
        "Chemical stabilization of tailings",
        "Process water treatment",
        "Mining industrial effluent control",
        "Hydrometallurgical processes",
      ],
      advantages: [
        { icon: Factory, text: "Owned limestone and coal concessions" },
        { icon: Flame, text: "24-hour continuous production" },
        { icon: Factory, text: "Own logistics" },
        {
          icon: ShieldCheck,
          text: "Compliance with Ministry of Energy and Mines standards",
        },
        { icon: Leaf, text: "Operations" },
      ],
      team: {
        title: "Workforce per Kiln (35 TM)",
        members: [
          { role: "Stone preparation", workers: 6 },
          { role: "Transport", workers: 4 },
          { role: "Burning operator", workers: 1 },
          { role: "Coal preparation", workers: 2 },
          { role: "Waste separation", workers: 2 },
        ],
        totalLabel: "Total workers per kiln",
      },
      cta: {
        title: "Request quicklime for mining and industry",
        description:
          "Quicklime supply with continuous production, quality control, and commercial support for mining and industrial operations.",
        highlights: ["5 operating kilns", "Commercial support", "RUC 20482610944"],
        whatsappMessage: "Hello, I would like to request a quicklime quote for my operation.",
      },
    },
  });
  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="cal-viva" />

      <ProductIntroSection
        images={copy.images}
        title={copy.intro.title}
        description={copy.intro.description}
        cards={copy.introCards}
      />

      <ProductCapacitySection title={copy.capacityTitle} stats={copy.capacityStats} />

      {/* PROCESO INDUSTRIAL */}

      
            {/* PROCESO INDUSTRIAL */}
      <ProductProcessFlow
        title={copy.process.title}
        description={copy.process.description}
        steps={copy.process.steps.map(({ numero, titulo, descripcion, icon: Icon, image }) => ({
          step: numero,
          title: titulo,
          description: descripcion,
          icon: <Icon className="h-5 w-5" />,
          image,
        }))}
      />

      {/* APLICACIONES MINERAS */}
      <ProductApplicationsGrid
        image={{
          src: "img-productos/piedra-caliza/proceso/cantera-piedra-caliza",
          alt: copy.applicationsImageAlt,
          aspectClassName: "aspect-[6/5] md:aspect-[8/4]",
        }}
        items={copy.applications}
      />
      <ProductAdvantagesGrid
        items={copy.advantages}
      />

      <ProductTeamSection
        title={copy.team.title}
        members={copy.team.members}
        totalValue={15}
        totalLabel={copy.team.totalLabel}
        accentClassName="text-emerald-700"
        gridWidthClassName="max-w-3xl"
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
