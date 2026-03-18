/**client/src/components/Paginas/carbon-cisco.tsx */

"use client";

import {
  Factory,
  Flame,
  MapPin,
  Leaf,
  ShieldCheck,
  Pickaxe,
  Mountain,
  Zap,
  Thermometer,
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

export default function CarbonCisco() {
  const images = [
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
  ];

  const introCards = [
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
      items: ["Contenido de carbono fijo", "Nivel de cenizas", "Humedad", "Poder calorífico"],
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
  ];

  const capacityStats = [
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
  ];

  const teamMembers = [
    { role: "Operadores de Clasificación y Zarandeo", workers: 6 },
    { role: "Control de Humedad y Calidad", workers: 3 },
    { role: "Supervisión Técnica Minera", workers: 2 },
    { role: "Logística y Despacho Industrial", workers: 4 },
    { role: "Seguridad y Control Operativo", workers: 2 },
  ];

  const procesos = [
    {
      etapa: "01",
      titulo: "Clasificación de Finos",
      descripcion:
        "Separación y recuperación de fracción fina (carbón tipo cisco) proveniente del proceso de chancado y zarandeo de antracita.",
      icon: <Pickaxe size={24} />,
    },
    {
      etapa: "02",
      titulo: "Control de Humedad",
      descripcion:
        "Optimización del contenido de humedad para mejorar ignición y eficiencia energética en procesos térmicos.",
      icon: <Thermometer size={24} />,
    },
    {
      etapa: "03",
      titulo: "Zarandeo por Malla",
      descripcion:
        "Clasificación granulométrica para garantizar tamaño uniforme según requerimiento de hornos industriales.",
      icon: <Factory size={24} />,
    },
    {
      etapa: "04",
      titulo: "Acondicionamiento y Mezcla",
      descripcion:
        "Posible combinación con otros combustibles sólidos para estabilizar llama y optimizar rendimiento térmico.",
      icon: <Flame size={24} />,
    },
    {
      etapa: "05",
      titulo: "Control de Calidad y Despacho",
      descripcion:
        "Verificación de poder calorífico, humedad y cenizas para suministro continuo a operaciones industriales.",
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="carbon-cisco" />

      <ProductIntroSection
        images={images}
        title="Producción y Suministro de Carbón Tipo Cisco Industrial"
        description="La empresa cuenta con unidades de extracción y clasificación de carbón mineral, garantizando abastecimiento continuo de carbón cisco para operaciones mineras e industriales que requieren combustible sólido eficiente y de rápida combustión. El carbón cisco es una fracción fina de carbón mineral utilizada como fuente energética en procesos térmicos, destacando por su facilidad de ignición y buen rendimiento en hornos industriales."
        cards={introCards}
      />

      <ProductCapacitySection title="Capacidad Operativa Minera" stats={capacityStats} />

      {/* PROCESO INDUSTRIAL */}

      <ProductProcessFlow
        title="Proceso industrial de carbón tipo cisco"
        description="Una lectura más limpia del flujo productivo, desde la clasificación de finos hasta el despacho continuo para procesos térmicos."
        image={{
          src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco-suelto",
          alt: "Carga y manejo industrial de carbon tipo cisco",
          aspectClassName: "aspect-square md:aspect-[6/5]",
        }}
        steps={procesos.map(({ etapa, titulo, descripcion, icon }) => ({
          step: etapa,
          title: titulo,
          description: descripcion,
          icon,
        }))}
      />

      {/* APLICACIONES MINERAS */}
      <ProductApplicationsGrid
        image={{
          src: "img-productos/carbon-tipo-cisco/carbon-tipo-cisco-despacho",
          alt: "Aplicaciones de carbon tipo cisco en procesos termicos",
          aspectClassName: "aspect-[6/5] md:aspect-[8/4]",
        }}
        items={[
          "Alto carbono fijo para eficiencia en combustión industrial",
          "Estabilidad térmica en hornos de calcinación",
          "Agente energético en procesos metalúrgicos",
          "Optimización de rendimiento térmico en plantas industriales",
          "Control de cenizas y humedad para desempeño uniforme",
          "Granulometría adaptada a requerimiento operativo",
          "Suministro directo desde cantera propia",
          "Soporte para continuidad operativa minera",
        ]}
      />
      <ProductAdvantagesGrid
        items={[
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
        ]}
      />

      <ProductTeamSection
        title="Equipo Operativo – Clasificación y Suministro de Cisco"
        members={teamMembers}
        totalValue={17}
        totalLabel="Personal Operativo en Clasificación de Carbón Cisco"
      />
      <CommercialCTA
        title="Cotice carbón tipo cisco para hornos industriales"
        description="Carbon tipo cisco clasificado para procesos termicos, con atencion comercial y coordinacion de suministro segun requerimiento industrial."
        highlights={["Clasificación controlada", "Combustible sólido", "Atención comercial"]}
        whatsappMessage="Hola, deseo cotizar carbon tipo cisco."
      />
    </div>
  );
}
