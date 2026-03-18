export interface Tab {
  label: string;
  href: string;
}

export type MenuItem = {
  id: string;
  name: string;
  subtitle: string;
  href: string;
  nameEn: string;
  subtitleEn: string;
};

export const PRODUCTS_SUBMENU: MenuItem[] = [
  {
    id: "PiedraCaliza",
    name: "Piedra Caliza",
    subtitle: "Materia prima para procesos industriales",
    href: "/Productos/piedra-caliza",
    nameEn: "Limestone",
    subtitleEn: "Raw material for industrial processes",
  },
  {
    id: "CalViva",
    name: "Cal Viva",
    subtitle: "Oxido de calcio para operaciones productivas",
    href: "/Productos/cal-viva",
    nameEn: "Quicklime",
    subtitleEn: "Calcium oxide for productive operations",
  },
  {
    id: "CalAgricola",
    name: "Cal Agricola",
    subtitle: "Mejoramiento tecnico de suelos agricolas",
    href: "/Productos/cal-agricola",
    nameEn: "Agricultural Lime",
    subtitleEn: "Technical soil improvement for agricultural land",
  },
  {
    id: "CarbonAntracita",
    name: "Carbon Antracita",
    subtitle: "Combustible solido de alto poder calorifico",
    href: "/Productos/carbon-antracita",
    nameEn: "Anthracite Coal",
    subtitleEn: "Solid fuel with high calorific value",
  },
  {
    id: "CarbonCisco",
    name: "Carbon Cisco",
    subtitle: "Suministro para procesos termicos industriales",
    href: "/Productos/carbon-cisco",
    nameEn: "Carbon Cisco",
    subtitleEn: "Supply for industrial thermal processes",
  },
];

export const SERVICES_SUBMENU: MenuItem[] = [
  {
    id: "TransporteLogistico",
    name: "Transporte Logistico",
    subtitle: "Traslado especializado para entornos mineros",
    href: "/Servicios-Industriales/transporte-logistico-especializado",
    nameEn: "Logistics Transport",
    subtitleEn: "Specialized transportation for mining environments",
  },
  {
    id: "OperacionMaquinaria",
    name: "Operación con maquinaria",
    subtitle: "Movimiento de tierras y soporte operativo",
    href: "/Servicios-Industriales/operacion-con-maquinaria-pesada",
    nameEn: "Heavy Equipment Operations",
    subtitleEn: "Earthmoving and operational support",
  },
];

export const RESPONSIBILITY_SUBMENU: MenuItem[] = [
  {
    id: "MedioAmbiente",
    name: "Medio Ambiente",
    subtitle: "Gestion ambiental y preservacion responsable",
    href: "/compromiso-ambiental-y-social/medio-ambiente",
    nameEn: "Environment",
    subtitleEn: "Environmental management and responsible preservation",
  },
  {
    id: "ResponsabilidadSocial",
    name: "Responsabilidad Social",
    subtitle: "Relacion comunitaria y desarrollo sostenible",
    href: "/compromiso-ambiental-y-social/responsabilidad-social",
    nameEn: "Social Responsibility",
    subtitleEn: "Community relations and sustainable development",
  },
];

export const DEFAULT_TABS: Tab[] = [
  { label: "La Empresa", href: "/la-empresa" },
  { label: "Productos", href: "/Productos" },
  { label: "Servicios-Industriales", href: "/Servicios-Industriales" },
  { label: "compromiso-ambiental-y-social", href: "/compromiso-ambiental-y-social" },
  { label: "Contacto", href: "/contacto" },
];
