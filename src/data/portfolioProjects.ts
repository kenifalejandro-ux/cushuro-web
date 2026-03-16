export interface PortfolioProject {
  name: string;
  desc: string;
  year: string;
  category: string;
  href: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Piedra Caliza",
    desc: "Base mineral para procesos industriales",
    year: "2026",
    category: "Producto",
    href: "/Productos/piedra-caliza",
  },
  {
    name: "Cal Viva",
    desc: "Insumo clave para operaciones de alto rendimiento",
    year: "2026",
    category: "Producto",
    href: "/Productos/cal-viva",
  },
  {
    name: "Cal Agricola",
    desc: "Mejora de suelos y productividad del cultivo",
    year: "2026",
    category: "Producto",
    href: "/Productos/cal-agricola",
  },
  {
    name: "Transporte Logistico",
    desc: "Cobertura segura para rutas mineras e industriales",
    year: "2026",
    category: "Servicio",
    href: "/Servicios-Industriales/transporte-logistico-especializado",
  },
  {
    name: "Maquinaria Pesada",
    desc: "Operacion tecnica para faenas y movimiento de carga",
    year: "2026",
    category: "Servicio",
    href: "/Servicios-Industriales/operacion-con-maquinaria-pesada",
  },
  {
    name: "Medio Ambiente",
    desc: "Compromiso activo con restauracion y sostenibilidad",
    year: "2026",
    category: "Impacto",
    href: "/compromiso-ambiental-y-social/medio-ambiente",
  },
];
