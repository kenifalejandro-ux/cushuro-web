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

export default function PiedraCaliza() {
  const images = [
    {
      src: "img-productos/piedra-caliza/cantera-piedra-caliza002",
      alt: "Cantera de piedra caliza",
    },
    {
      src: "img-productos/piedra-caliza/cantera-piedra-caliza",
      alt: "Preparacion de piedra caliza para procesos industriales",
    },
    {
      src: "img-productos/piedra-caliza/operario-con-piedra-caliza",
      alt: "Operario en extraccion de piedra caliza",
    },
  ];

  const introCards = [
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
  ];

  const capacityStats = [
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
  ];

  const teamMembers = [
    { role: "Operadores de Maquinaria Pesada", workers: 8 },
    { role: "Personal de Clasificación y Selección", workers: 6 },
    { role: "Supervisión Técnica", workers: 3 },
    { role: "Logística y Transporte Interno", workers: 4 },
    { role: "Seguridad y Control Operativo", workers: 2 },
  ];

  const procesos = [
    {
      numero: "01",
      titulo: "Extracción de Piedra Caliza",
      descripcion:
        "Arranque de roca caliza en cantera mediante perforación y selección de material con control de calidad mineralógica.",
      icon: Pickaxe,
    },
    {
      numero: "02",
      titulo: "Preparación y Clasificación",
      descripcion:
        "Fragmentación y clasificación granulométrica para garantizar tamaño adecuado de alimentación en hornos.",
      icon: Layers,
    },
    {
      numero: "03",
      titulo: "Integración a Proceso de Calcinación",
      descripcion: "Suministro de piedra caliza como insumo principal en hornos industriales.",
      icon: Flame,
    },
    {
      numero: "04",
      titulo: "Control de Calidad",
      descripcion: "Verificación de composición mineralógica y eliminación de impurezas.",
      icon: ShieldCheck,
    },
    {
      numero: "05",
      titulo: "Despacho Industrial",
      descripcion:
        "Carga, transporte y suministro continuo para operaciones mineras, cementeras e industria pesada.",
      icon: Factory,
    },
  ];

  return (
    <div className="dark-image bg-white">
      <PageSEO pageId="piedra-caliza" />

      <ProductIntroSection
        images={images}
        title="Materia Prima Minera Estratégica para Procesos Industriales y Metalúrgicos"
        description="La piedra caliza es un recurso mineral esencial para la producción de cal, procesos metalúrgicos y aplicaciones industriales en el sector minero. Nuestra operación cuenta con cantera propia y abastecimiento continuo, garantizando trazabilidad del mineral, estabilidad química y suministro confiable para plantas industriales."
        cards={introCards}
      />

      <ProductCapacitySection title="Capacidad Operativa de Extracción" stats={capacityStats} />

      {/* PROCESO INDUSTRIAL */}

      <ProductProcessFlow
        title="Proceso industrial de piedra caliza"
        description="Desde la extracción en cantera hasta el despacho industrial, cada etapa se organiza con foco en continuidad de suministro y control mineralógico."
        image={{
          src: "img-productos/piedra-caliza/cantera-piedra-caliza",
          alt: "Preparacion industrial de piedra caliza para procesos productivos",
          aspectClassName: "aspect-[16/10] md:aspect-[16/9]",
        }}
        steps={procesos.map(({ numero, titulo, descripcion, icon: Icon }) => ({
          step: numero,
          title: titulo,
          description: descripcion,
          icon: <Icon className="h-5 w-5" />,
        }))}
      />

      {/* APLICACIONES MINERAS */}
      <ProductApplicationsGrid
        image={{
          src: "img-productos/piedra-caliza/operario-con-piedra-caliza",
          alt: "Aplicaciones industriales de piedra caliza para operaciones mineras",
          aspectClassName: "aspect-[6/5] md:aspect-[8/4]",
        }}
        items={[
          "Materia prima para producción de cal viva",
          "Insumo para procesos metalúrgicos",
          "Estabilización de accesos y plataformas",
          "Material base para plataformas operativas",
          "Control ambiental en operaciones extractivas",
          "Neutralización de efluentes mediante derivados",
          "Soporte en plantas concentradoras",
          "Optimización de tratamiento mineral",
        ]}
      />
      <ProductAdvantagesGrid
        items={[
          { icon: Factory, text: "Denuncios propios de piedra caliza" },
          { icon: Flame, text: "Integración vertical con planta calera" },
          { icon: Factory, text: "Producción continua 24 horas" },
          { icon: ShieldCheck, text: "Logística propia y despacho directo" },
          { icon: Leaf, text: "Cumplimiento de estándares del Ministerio de Energía y Minas" },
          { icon: Leaf, text: "Abastecimiento estratégico para sector minero" },
        ]}
      />
      <ProductTeamSection
        title="Equipo Operativo en Cantera"
        members={teamMembers}
        totalValue={23}
        totalLabel="Personal Operativo en Cantera"
      />
      <CommercialCTA
        title="Cotice piedra caliza para hornos y operaciones mineras"
        description="Piedra caliza de cantera propia para hornos, procesos industriales y abastecimiento continuo de operaciones mineras."
        highlights={["Cantera propia", "Suministro continuo", "Contacto comercial"]}
        whatsappMessage="Hola, deseo cotizar piedra caliza."
      />
    </div>
  );
}
