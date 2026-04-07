/**client/src/components/Paginas/piedra-caliza.tsx */

"use client";

import {
  Factory,
  Flame,
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

export default function PiedraCaliza() {
  const copy = useLocalizedContent({
    es: {
      images: [
        {
          src: "img-productos/piedra-caliza/imagen-inicio/cantera-piedra-caliza002",
          alt: "Cantera de piedra caliza",
        },
        {
          src: "img-productos/piedra-caliza/imagen-inicio/cantera-piedra-caliza",
          alt: "Preparacion de piedra caliza para procesos industriales",
        },
        {
          src: "img-productos/piedra-caliza/imagen-inicio/operario-con-piedra-caliza",
          alt: "Operario en extraccion de piedra caliza",
        },
      ],
      intro: {
        title: "Materia Prima Minera Estratégica para Procesos Industriales y Metalúrgicos",
        description:
          "La piedra caliza es un recurso mineral esencial para la producción de cal, procesos metalúrgicos y aplicaciones industriales en el sector minero. Nuestra operación cuenta con cantera propia y abastecimiento continuo, garantizando trazabilidad del mineral, estabilidad química y suministro confiable para plantas industriales.",
      },
      introCards: [
        {
          icon: Factory,
          iconClassName: "text-amber-700",
          title: "Cantera con Abastecimiento Continuo",
          description:
            "Explotación directa con control en extracción, selección y clasificación del material.",
        },
        {
          icon: Mountain,
          iconClassName: "text-emerald-600",
          title: "Integración Directa a Planta Calera",
          description: "Clasificación mineral para optimizar el rendimiento térmico.",
        },
      ],
      capacityTitle: "Capacidad Operativa de Extracción",
      capacityStats: [
        {
          value: "176",
          label: "Toneladas / Día",
          description: "Capacidad estimada de extracción diaria",
          tone: "primary" as const,
        },
        {
          value: "24h",
          label: "Operación Continua",
          description: "Turnos programados para abastecimiento permanente",
          tone: "soft" as const,
        },
        {
          value: "Cantera",
          label: "Denuncio Propio",
          description: "Control directo de explotación y reservas minerales",
          tone: "muted" as const,
        },
      ],
      process: {
        title: "Proceso industrial de piedra caliza",
        description:
          "Desde la extracción en cantera hasta el despacho industrial, cada etapa se organiza con foco en continuidad de suministro y control mineralógico.",
        steps: [
          {
            numero: "01",
            titulo: "Extracción de Piedra Caliza",
            descripcion:
              "Arranque de roca caliza en cantera mediante perforación y selección de material con control de calidad mineralógica.",
            icon: Pickaxe,
            image: {
              src: "img-productos/cal-viva/proceso/extraccion-de-piedra-caliza",
              alt: "Extracción de piedra caliza en cantera",
            },
          },
          {
            numero: "02",
            titulo: "Preparación y Clasificación",
            descripcion:
              "Fragmentación y clasificación granulométrica para garantizar tamaño adecuado de alimentación en hornos.",
            icon: Layers,
            image: {
              src: "img-productos/piedra-caliza/proceso/cantera-piedra-caliza002",
              alt: "Preparación y clasificación de piedra caliza",
            },
          },
          {
            numero: "03",
            titulo: "Control de Calidad",
            descripcion:
              "Verificación de composición mineralógica y eliminación de impurezas.",
            icon: ShieldCheck,
            image: {
              src: "img-productos/piedra-caliza/proceso/control-de-calidad",
              alt: "Control de calidad de piedra caliza",
            },
          },
          {
            numero: "04",
            titulo: "Despacho Industrial",
            descripcion:
              "Carga, transporte y suministro continuo para operaciones mineras, cementeras e industria pesada.",
            icon: Factory,
            image: {
              src: "img-productos/piedra-caliza/proceso/despacho-piedra-caliza",
              alt: "Despacho industrial de piedra caliza",
            },
          },
        ],
      },
      applicationsImageAlt: "Aplicaciones industriales de piedra caliza para operaciones mineras",
      applications: [
        "Materia prima para producción de cal viva",
        "Insumo para procesos metalúrgicos",
        "Estabilización de accesos y plataformas",
        "Material base para plataformas operativas",
        "Control ambiental en operaciones extractivas",
        "Neutralización de efluentes mediante derivados",
        "Soporte en plantas concentradoras",
        "Optimización de tratamiento mineral",
      ],
      advantages: [
        { icon: Factory, text: "Denuncios propios de piedra caliza" },
        { icon: Flame, text: "Integración vertical con planta calera" },
        { icon: Factory, text: "Producción continua 24 horas" },
        { icon: ShieldCheck, text: "Logística propia y despacho directo" },
        { icon: Leaf, text: "Cumplimiento de estándares del Ministerio de Energía y Minas" },
        { icon: Leaf, text: "Abastecimiento estratégico para sector minero" },
      ],
      team: {
        title: "Equipo Operativo en Cantera",
        members: [
          { role: "Operadores de Maquinaria Pesada", workers: 8 },
          { role: "Personal de Clasificación y Selección", workers: 6 },
          { role: "Supervisión Técnica", workers: 3 },
          { role: "Logística y Transporte Interno", workers: 4 },
          { role: "Seguridad y Control Operativo", workers: 2 },
        ],
        totalLabel: "Personal Operativo en Cantera",
      },
      cta: {
        title: "Cotice piedra caliza para hornos y operaciones mineras",
        description:
          "Piedra caliza de cantera propia para hornos, procesos industriales y abastecimiento continuo de operaciones mineras.",
        highlights: ["Cantera propia", "Suministro continuo", "Contacto comercial"],
        whatsappMessage: "Hola, deseo cotizar piedra caliza.",
      },
    },
    en: {
      images: [
        {
          src: "img-productos/piedra-caliza/imagen-inicio/cantera-piedra-caliza002",
          alt: "Limestone quarry",
        },
        {
          src: "img-productos/piedra-caliza/imagen-inicio/cantera-piedra-caliza",
          alt: "Limestone preparation for industrial processes",
        },
        {
          src: "img-productos/piedra-caliza/imagen-inicio/operario-con-piedra-caliza",
          alt: "Operator in limestone extraction",
        },
      ],
      intro: {
        title: "Strategic Mining Raw Material for Industrial and Metallurgical Processes",
        description:
          "Limestone is an essential mineral resource for lime production, metallurgical processes, and industrial applications in the mining sector. Our operation has its own quarry and continuous supply, ensuring mineral traceability, chemical stability, and reliable supply for industrial plants.",
      },
      introCards: [
        {
          icon: Factory,
          iconClassName: "text-amber-700",
          title: "Quarry with Continuous Supply",
          description:
            "Direct extraction with control over material extraction, selection, and classification.",
        },
        {
          icon: Mountain,
          iconClassName: "text-emerald-600",
          title: "Direct Integration to the Lime Plant",
          description: "Mineral classification to optimize thermal performance.",
        },
      ],
      capacityTitle: "Extraction Operating Capacity",
      capacityStats: [
        {
          value: "176",
          label: "Tons / Day",
          description: "Estimated daily extraction capacity",
          tone: "primary" as const,
        },
        {
          value: "24h",
          label: "Continuous Operation",
          description: "Scheduled shifts for permanent supply",
          tone: "soft" as const,
        },
        {
          value: "Quarry",
          label: "Owned Claim",
          description: "Direct control of mineral extraction and reserves",
          tone: "muted" as const,
        },
      ],
      process: {
        title: "Industrial limestone process",
        description:
          "From quarry extraction to industrial dispatch, each stage is organized with a focus on supply continuity and mineralogical control.",
        steps: [
          {
            numero: "01",
            titulo: "Limestone extraction",
            descripcion:
              "Limestone rock removal in the quarry through drilling and material selection with mineralogical quality control.",
            icon: Pickaxe,
            image: {
              src: "img-productos/cal-viva/proceso/extraccion-de-piedra-caliza",
              alt: "Limestone extraction in quarry",
            },
          },
          {
            numero: "02",
            titulo: "Preparation and classification",
            descripcion:
              "Fragmentation and particle-size classification to ensure suitable feed size for kilns.",
            icon: Layers,
            image: {
              src: "img-productos/piedra-caliza/proceso/cantera-piedra-caliza002",
              alt: "Preparation and classification of limestone",
            },
          },
          {
            numero: "03",
            titulo: "Quality control",
            descripcion:
              "Verification of mineralogical composition and removal of impurities.",
            icon: ShieldCheck,
            image: {
              src: "img-productos/piedra-caliza/proceso/control-de-calidad",
              alt: "Limestone quality control",
            },
          },
          {
            numero: "04",
            titulo: "Industrial dispatch",
            descripcion:
              "Loading, transport, and continuous supply for mining, cement, and heavy industry operations.",
            icon: Factory,
            image: {
              src: "img-productos/piedra-caliza/proceso/despacho-piedra-caliza",
              alt: "Industrial limestone dispatch",
            },
          },
        ],
      },
      applicationsImageAlt: "Industrial limestone applications for mining operations",
      applications: [
        "Raw material for quicklime production",
        "Input for metallurgical processes",
        "Stabilization of access roads and platforms",
        "Base material for operating platforms",
        "Environmental control in extractive operations",
        "Effluent neutralization through derivatives",
        "Support in concentrator plants",
        "Optimization of mineral treatment",
      ],
      advantages: [
        { icon: Factory, text: "Owned limestone mining claims" },
        { icon: Flame, text: "Vertical integration with lime plant" },
        { icon: Factory, text: "24-hour continuous production" },
        { icon: ShieldCheck, text: "Own logistics and direct dispatch" },
        { icon: Leaf, text: "Compliance with Ministry of Energy and Mines standards" },
        { icon: Leaf, text: "Strategic supply for the mining sector" },
      ],
      team: {
        title: "Operational Quarry Team",
        members: [
          { role: "Heavy Equipment Operators", workers: 8 },
          { role: "Classification and Selection Personnel", workers: 6 },
          { role: "Technical Supervision", workers: 3 },
          { role: "Internal Logistics and Transport", workers: 4 },
          { role: "Safety and Operational Control", workers: 2 },
        ],
        totalLabel: "Operational Personnel in Quarry",
      },
      cta: {
        title: "Request limestone for kilns and mining operations",
        description:
          "Own-quarry limestone for kilns, industrial processes, and continuous supply to mining operations.",
        highlights: ["Own quarry", "Continuous supply", "Commercial support"],
        whatsappMessage: "Hello, I would like to request a limestone quote.",
      },
    },
  });

  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="piedra-caliza" />

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
        steps={copy.process.steps.map(({ numero, titulo, descripcion, icon: Icon, image }) => ({
          step: numero,
          title: titulo,
          description: descripcion,
          icon: <Icon className="h-5 w-5" />,
          image,
        }))}
      />

      <ProductApplicationsGrid
        image={{
          src: "img-productos/piedra-caliza/aplicaciones-mineras/Obrero-compactando-piedra-caliza-en-carretera",
          alt: copy.applicationsImageAlt,
          aspectClassName: "aspect-[6/5] md:aspect-[8/4]",
        }}
        items={copy.applications}
      />

      <ProductAdvantagesGrid items={copy.advantages} />

      <ProductTeamSection
        title={copy.team.title}
        members={copy.team.members}
        totalValue={23}
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
