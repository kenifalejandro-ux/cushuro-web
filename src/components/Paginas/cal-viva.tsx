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

export default function CalViva() {
  const images = [
    { src: "img-productos/cal-viva/img003", alt: "Produccion de cal viva en planta industrial" },
    {
      src: "img-productos/cal-viva/oxido-de-calcio001",
      alt: "Hornos industriales para oxido de calcio",
    },
    {
      src: "img-productos/cal-viva/piedra-caliza",
      alt: "Piedra caliza utilizada para producir cal viva",
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
  ];

  const capacityStats = [
    {
      value: "5",
      label: "Hornos Operativos",
      description: "Producción continua",
      tone: "primary" as const,
    },
    {
      value: "176",
      label: "Toneladas / Día",
      description: "Producción estimada",
      tone: "soft" as const,
    },
    {
      value: "75",
      label: "Trabajadores",
      description: "Operación industrial",
      tone: "muted" as const,
    },
  ];

  const teamMembers = [
    { role: "Preparación de piedra", workers: 6 },
    { role: "Transporte", workers: 4 },
    { role: "Operador de quemado", workers: 1 },
    { role: "Preparadores de carbón", workers: 2 },
    { role: "Separación de desechos", workers: 2 },
  ];

  const procesos = [
    {
      etapa: "01",
      titulo: "Selección de Materia Prima",
      descripcion:
        "Extracción y selección de piedra caliza con pureza superior al 90% de CaCO₃, garantizando eficiencia en la transformación industrial.",
      icon: Pickaxe,
    },
    {
      etapa: "02",
      titulo: "Triturado y Clasificación",
      descripcion:
        "Reducción y control granulométrico del mineral para asegurar una calcinación homogénea y eficiente.",
      icon: Layers,
    },
    {
      etapa: "03",
      titulo: "Calcinación Controlada",
      descripcion:
        "Proceso térmico continuo en hornos industriales (900°C – 1,100°C) para la obtención de Óxido de Calcio (CaO). Capacidad productiva: 176 TM/día.",
      icon: Flame,
    },
    {
      etapa: "04",
      titulo: "Análisis y Control de Calidad",
      descripcion:
        "Verificación de composición química, determinación de Cal Total y Cal Útil Disponible, garantizando altos estándares para uso minero.",
      icon: ShieldCheck,
    },
    {
      etapa: "05",
      titulo: "Clasificación y Despacho",
      descripcion:
        "Presentación en formato granular o molido, con despacho a granel, en sacos o big bag para operaciones mineras.",
      icon: Factory,
    },
  ];
  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="cal-viva" />

      <ProductIntroSection
        images={images}
        title="Producción de Óxido de Calcio Industrial - Cal Viva"
        description="La producción de óxido de calcio (CaO) se realiza mediante la calcinación controlada de piedra caliza en hornos industriales. Nuestro proceso garantiza continuidad operativa, calidad mineralógica y abastecimiento confiable para la industria minera, metalúrgica y cementera."
        cards={introCards}
      />

      <ProductCapacitySection title="Capacidad de Producción" stats={capacityStats} />

      {/* PROCESO INDUSTRIAL */}

      <ProductProcessFlow
        title="Proceso productivo de cal viva"
        description="Una lectura ordenada del flujo industrial, desde la selección de caliza hasta el control de calidad y despacho final."
        image={{
          src: "img-productos/cal-viva/cal-viva",
          alt: "Proceso industrial de cal viva en planta",
          aspectClassName: "aspect-[6/5] md:aspect-[4/3]",
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
          src: "img-productos/cal-viva/img003",
          alt: "Aplicaciones de cal viva para procesos industriales y mineros",
          aspectClassName: "aspect-[6/5] md:aspect-[8/4]",
        }}
        items={[
          "Control de pH en circuitos de molienda",
          "Flotación y recuperación de cobre, oro y zinc",
          "Depresión selectiva de sulfuros (pirita)",
          "Neutralización de drenaje ácido de mina (AMD)",
          "Estabilización química de relaves",
          "Tratamiento de aguas de proceso",
          "Control de efluentes industriales mineros",
          "Procesos hidrometalúrgicos",
        ]}
      />
      <ProductAdvantagesGrid
       
        items={[
          { icon: Factory, text: "Denuncios propios de piedra caliza y carbón" },
          { icon: Flame, text: "Producción continua 24 horas" },
          { icon: Factory, text: "Logística propia" },
          {
            icon: ShieldCheck,
            text: "Cumplimiento de estándares del Ministerio de Energía y Minas",
          },
          { icon: Leaf, text: "Operaciones" },
        ]}
      />

      <ProductTeamSection
        title="Mano de Obra por Horno (35 TM)"
        members={teamMembers}
        totalValue={15}
        totalLabel="Trabajadores totales por horno"
        accentClassName="text-emerald-700"
        gridWidthClassName="max-w-3xl"
      />
      <CommercialCTA
        title="Cotice cal viva para minería e industria"
        description="Suministro de cal viva con produccion continua, control de calidad y atencion comercial para operaciones mineras e industriales."
        highlights={["5 hornos operativos", "Atención comercial", "RUC 20482610944"]}
        whatsappMessage="Hola, deseo cotizar cal viva para mi operación."
      />
    </div>
  );
}
