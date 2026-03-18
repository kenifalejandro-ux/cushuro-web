/**client/src/components/Paginas/carbon-antracita.tsx */

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

export default function CarbonAntracita() {
  const images = [
    { src: "img-productos/carbon-antracita/carreo-antracita", 
      alt: "Acarreo de carbon antracita" },
    {
      src: "img-productos/carbon-antracita/carga-carbon-tipo-cisco",
      alt: "Clasificacion y chancado de carbon antracita",
    },
    {
      src: "img-productos/carbon-antracita/despacho-antracita",
      alt: "Despacho de carbon antracita para industria",
    },
  ];

  const introCards = [
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
  ];

  const capacityStats = [
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
  ];

  const teamMembers = [
    { role: "Operadores de Extracción Minera", workers: 8 },
    { role: "Personal de Clasificación y Zarandeo", workers: 5 },
    { role: "Supervisión Geológica y Técnica", workers: 3 },
    { role: "Logística y Transporte Interno", workers: 4 },
    { role: "Seguridad y Control Operativo", workers: 2 },
  ];

  const procesos = [
    {
      etapa: "01",
      titulo: "Selección de Veta",
      descripcion:
        "Evaluación geológica y selección de frentes con carbón antracita de alto rango, elevado contenido de carbono fijo y bajo nivel de volátiles.",
      icon: <Pickaxe size={24} />,
    },
    {
      etapa: "02",
      titulo: "Extracción y Acarreo",
      descripcion:
        "Operación minera controlada para el traslado seguro del mineral hacia planta de procesamiento y clasificación.",
      icon: <Factory size={24} />,
    },
    {
      etapa: "03",
      titulo: "Chancado y Clasificación Granulométrica",
      descripcion:
        "Reducción y zarandeo del mineral para obtener tamaños específicos según requerimiento industrial, asegurando combustión eficiente y estable.",
      icon: <Zap size={24} />,
    },
    {
      etapa: "04",
      titulo: "Control y Optimización de Humedad",
      descripcion:
        "Ajuste del contenido de humedad para maximizar el rendimiento energético y mejorar la estabilidad en procesos térmicos continuos.",
      icon: <Flame size={24} />,
    },
    {
      etapa: "05",
      titulo: "Control de Calidad y Despacho",
      descripcion:
        "Análisis de poder calorífico, carbono fijo, cenizas y azufre para garantizar suministro confiable a operaciones mineras e industriales 24/7.",
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="carbon-antracita" />

      <ProductIntroSection
        images={images}
        title="Producción y Suministro de Carbón Antracita Industrial"
        description="La empresa cuenta con concesiones propias de carbón antracita, garantizando control directo de reservas, trazabilidad del mineral y abastecimiento continuo para operaciones industriales y mineras."
        cards={introCards}
      />

      <ProductCapacitySection title="Capacidad Operativa Minera" stats={capacityStats} />

      {/* PROCESO INDUSTRIAL */}

      <ProductProcessFlow
        title="Proceso industrial de carbón antracita"
        description="Una secuencia técnica más clara desde la selección de veta hasta el control de calidad y suministro continuo para operación industrial."
        image={{
          src: "img-productos/carbon-antracita/carbon-antracita-vestigio",
          alt: "Clasificacion y chancado de carbon antracita",
          aspectClassName: "aspect-[4/5] md:aspect-square",
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
          src: "img-productos/carbon-antracita/carbon-antracita-vestigio001",
          alt: "Aplicaciones de carbon antracita en operaciones industriales",
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
        title="Equipo Operativo Minero – Carbón Antracita"
        members={teamMembers}
        totalValue={22}
        totalLabel="Personal Operativo en Cantera de Carbón"
      />
      <CommercialCTA
        title="Solicite cotización de carbón antracita"
        description="Carbon antracita con control de calidad y granulometria para hornos industriales y requerimientos energeticos de operaciones mineras."
        highlights={["Control de humedad", "Granulometría clasificada", "Respuesta comercial"]}
        whatsappMessage="Hola, deseo cotizar carbon antracita."
      />
    </div>
  );
}
