export interface PortfolioProject {
  name: string;
  desc: string;
  href: string;
  year: string;
  category: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Puerta del Valle",
    desc: "Quesería Artesanal",
    href: "/portfolio/puerta-del-valle",
    year: "2025",
    category: "Branding",
  },
  {
    name: "Tiesto Coffee",
    desc: "Coffee shop · Experiencia sensorial", 
    href: "/portfolio/tiesto-coffee",
    year: "2025",
    category: "Web Design",
  },
  {
    name: "BKARS", 
    desc: "Taller Automotríz · Lima", 
    href: "/portfolio/bkars",
    year: "2025",
    category: "UI/UX",
  },
  {
    name: "Inti Pintay", 
    desc: "Licores Andinos · Chiquián", 
    href: "/portfolio/inti-pintay",
    year: "2025",
    category: "Art Direction",
  },
  
];
