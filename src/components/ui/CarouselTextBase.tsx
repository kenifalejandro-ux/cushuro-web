/* client/src/components/ui/CarouselTextBase.tsx */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

const IMG_BASE = import.meta.env.VITE_IMG_URL || import.meta.env.VITE_ASSETS_URL;

function resolveAssetUrl(value: string) {
  if (!value) return value;
  if (/^https?:\/\//i.test(value)) return value;
  if (!IMG_BASE) return value;
  return `${IMG_BASE}/${value.replace(/^\//, "")}`;
}

export interface MiningProject {
  name: string;
  desc: string;
  logo: string;
  mineral: string;
  zone: string;
  front: string;
  status: string;
  refCode: string;
}

export interface CarouselVariantProps {
  projects?: MiningProject[];
  headingEyebrow?: string;
  headingTitle?: string;
  headingDescription?: string;
  className?: string;
}

export interface CarouselRenderProjectArgs {
  project: MiningProject;
  index: number;
}

interface CarouselProjectLogoProps {
  project: MiningProject;
  className: string;
  imageClassName: string;
}

export function CarouselProjectLogo({ project, className, imageClassName }: CarouselProjectLogoProps) {
  const src = resolveAssetUrl(project.logo);
  return (
    <div className={className} data-carousel-logo>
      {src ? (
        <img src={src} alt={project.name} className={imageClassName} loading="lazy" />
      ) : (
        <span className="font-mono text-[10px] text-zinc-400">
          {project.name.slice(0, 2)}
        </span>
      )}
    </div>
  );
}

const DEFAULT_PROJECTS: Record<"es" | "en", MiningProject[]> = {
  es: [
    {
      name: "MINERA BORRO MISQUICHILCA S.A",
      desc: "Desbloqueando valor para un futuro mejor.",
      logo: "img-inicio/logo-clientes/borro-minera.png",
      mineral: "Au / Ag",
      zone: "La Libertad, PE",
      front: "Tajo Norte",
      status: "Operación 24/7",
      refCode: "M-011",
    },
    {
      name: "SUMMA GOLD CORPORATION",
      desc: "Producción formal y optimizada en Huamachuco.",
      logo: "img-inicio/logo-clientes/summa-gold.png",
      mineral: "Au",
      zone: "Huamachuco, PE",
      front: "Zona Central",
      status: "Extracción Activa",
      refCode: "M-024",
    },
    {
      name: "COMPAÑÍA MINERA QUIRUVILCA S.A",
      desc: "Operaciones de extracción y logística minera.",
      logo: "logos/quiruvilca.png",
      mineral: "Pb / Zn / Ag",
      zone: "Santiago de Chuco, PE",
      front: "Planta Sur",
      status: "Ruta Logística",
      refCode: "M-031",
    },
  ],
  en: [
    {
      name: "MINERA BORRO MISQUICHILCA S.A",
      desc: "Unlocking value for a better future.",
      logo: "img-inicio/logo-clientes/borro-minera.png",
      mineral: "Au / Ag",
      zone: "La Libertad, PE",
      front: "North Pit",
      status: "24/7 Operation",
      refCode: "M-011",
    },
    {
      name: "SUMMA GOLD CORPORATION",
      desc: "Formal and optimized production in Huamachuco.",
      logo: "img-inicio/logo-clientes/summa-gold.png",
      mineral: "Au",
      zone: "Huamachuco, PE",
      front: "Central Area",
      status: "Active Extraction",
      refCode: "M-024",
    },
    {
      name: "COMPAÑÍA MINERA QUIRUVILCA S.A",
      desc: "Mining extraction and logistics operations.",
      logo: "logos/quiruvilca.png",
      mineral: "Pb / Zn / Ag",
      zone: "Santiago de Chuco, PE",
      front: "South Plant",
      status: "Logistics Route",
      refCode: "M-031",
    },
  ],
};

export default function CarouselTextBase({
  projects,
  headingEyebrow,
  headingTitle,
  headingDescription,
  className = "",
}: CarouselVariantProps) {
  const localizedDefaults = useLocalizedContent({
    es: {
      projects: DEFAULT_PROJECTS.es,
      headingEyebrow: "Nuestros clientes",
      headingTitle: "Empresas que confían en nosotros",
      headingDescription:
        "Operaciones activas con aliados del sector minero e industrial a lo largo del norte del Perú.",
    },
    en: {
      projects: DEFAULT_PROJECTS.en,
      headingEyebrow: "Our clients",
      headingTitle: "Companies that trust us",
      headingDescription:
        "Active operations with mining and industrial partners across northern Peru.",
    },
  });

  const carouselRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const carouselItems = useMemo(() => {
    const active = projects?.length ? projects : localizedDefaults.projects;
    return [...active, ...active];
  }, [localizedDefaults.projects, projects]);

  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;

    let tween: gsap.core.Tween | null = null;
    let frameId = 0;

    const buildAnimation = () => {
      const items = Array.from(track.children) as HTMLElement[];
      if (!items.length) return;
      const half = Math.floor(items.length / 2);
      const distance = items
        .slice(0, half)
        .reduce((total, item) => total + item.offsetWidth, 0);
      if (!distance) return;

      tween?.kill();
      gsap.set(track, { x: 0 });
      tween = gsap.to(track, { x: -distance, duration: 28, ease: "none", repeat: -1 });
    };

    const requestBuild = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(buildAnimation);
    };

    requestBuild();
    const resizeObserver = new ResizeObserver(requestBuild);
    resizeObserver.observe(track);

    const pause = () => tween?.pause();
    const play = () => tween?.play();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      cancelAnimationFrame(frameId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
      resizeObserver.disconnect();
      tween?.kill();
    };
  }, [carouselItems]);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading.querySelectorAll("[data-heading-item]"),
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: heading, start: "top 88%", once: true },
        }
      );
    }, heading);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`light-image relative left-1/2 w-screen -translate-x-1/2 overflow-hidden  py-16 md:py-20 ${className}`.trim()}
    >
      <div ref={headingRef} className="relative z-20 mx-auto max-w-3xl px-6 text-center">
        <div className="flex items-center justify-center gap-3" data-heading-item>
          <span className="h-px w-8 bg-zinc-300 md:w-10" />
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            {headingEyebrow ?? localizedDefaults.headingEyebrow}
          </p>
          <span className="h-px w-8 bg-zinc-300 md:w-10" />
        </div>
        <h2
          className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-5xl"
          data-heading-item
        >
          {headingTitle ?? localizedDefaults.headingTitle}
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base"
          data-heading-item
        >
          {headingDescription ?? localizedDefaults.headingDescription}
        </p>
      </div>

      <div className="relative z-10 mt-10 overflow-hidden ">
        <div ref={carouselRef} className="flex w-max items-center will-change-transform">
          {carouselItems.map((project, index) => (
            <div
              key={`${project.refCode}-${index}`}
              className="inline-flex flex-shrink-0 items-center gap-4 border-r border-zinc-200 px-10 py-4"
            >
              <CarouselProjectLogo
                project={project}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white p-1.5 shadow-sm"
                imageClassName="h-full w-full object-contain"
              />
              <span className="whitespace-nowrap text-sm font-medium text-zinc-700">
                {project.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
