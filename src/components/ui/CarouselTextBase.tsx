/* client/src/components/ui/CarouselTextBase.tsx */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useEffect, useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const IMG_BASE = import.meta.env.VITE_IMG_URL || import.meta.env.VITE_ASSETS_URL;
const FALLBACK_LOGO = "img-inicio/logo/logo-caldera-cushuro.png";

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
  itemHeightClass: string;
}

interface CarouselTextBaseProps extends CarouselVariantProps {
  variantName: "card" | "masonry" | "inline";
  speed: number;
  sectionViewportHeight: string;
  trackMarginTop: string;
  itemHeights: [string, string, string];
  entryDirection?: number;
  renderProject: (args: CarouselRenderProjectArgs) => ReactNode;
}

interface CarouselProjectLogoProps {
  project: MiningProject;
  className: string;
  imageClassName: string;
}

const DEFAULT_PROJECTS: MiningProject[] = [
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
];

export function resolveAssetUrl(value: string) {
  if (!value) return resolveFallbackAsset();
  if (/^https?:\/\//i.test(value)) return value;
  if (!IMG_BASE) return value;
  return `${IMG_BASE}/${value.replace(/^\//, "")}`;
}

function resolveFallbackAsset() {
  if (!IMG_BASE) return FALLBACK_LOGO;
  return `${IMG_BASE}/${FALLBACK_LOGO.replace(/^\//, "")}`;
}

export function CarouselProjectLogo({
  project,
  className,
  imageClassName,
}: CarouselProjectLogoProps) {
  return (
    <div className={className} data-carousel-logo>
      <img
        src={resolveAssetUrl(project.logo)}
        alt={project.name}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = resolveFallbackAsset();
        }}
        className={imageClassName}
      />
    </div>
  );
}

export function CarouselTextBase({
  projects = DEFAULT_PROJECTS,
  headingEyebrow = "Nuestros clientes",
  headingTitle = "Empresas que confían en nosotros",
  headingDescription = "Aliados del sector minero e industrial que confían en nuestra capacidad operativa, presencia y ejecución.",
  className = "",
  variantName,
  speed,
  sectionViewportHeight,
  trackMarginTop,
  itemHeights,
  entryDirection = -64,
  renderProject,
}: CarouselTextBaseProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const trackEntryRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselItems = useMemo(() => {
    if (!projects.length) return DEFAULT_PROJECTS.concat(DEFAULT_PROJECTS);
    return [...projects, ...projects];
  }, [projects]);

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

      tween = gsap.to(track, {
        x: -distance,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    const requestBuild = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(buildAnimation);
    };

    requestBuild();

    const resizeObserver = new ResizeObserver(() => {
      requestBuild();
    });

    resizeObserver.observe(track);
    Array.from(track.children).forEach((child) => resizeObserver.observe(child));

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
  }, [carouselItems, speed]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const headingElements = headingRef.current.querySelectorAll("[data-heading-item]");

        gsap.fromTo(
          headingElements,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      if (trackEntryRef.current) {
        gsap.fromTo(
          trackEntryRef.current,
          { autoAlpha: 0, x: entryDirection, y: 14 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: trackEntryRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      const logos = section.querySelectorAll<HTMLElement>("[data-carousel-logo]");
      if (logos.length) {
        gsap.fromTo(
          logos,
          { autoAlpha: 0, scale: 0.92, y: 8 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [carouselItems, entryDirection]);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-zinc-100 rounded-b-[10px] rounded-t-[10px] left-1/2 w-screen -translate-x-1/2 overflow-hidden py-16 md:py-20 ${sectionViewportHeight} ${className}`.trim()}
      data-variant={variantName}
    >
      <div
        ref={headingRef}
        className="relative z-20 mx-auto max-w-3xl px-6 text-center"
      >
        <div className="flex items-center justify-center gap-3" data-heading-item>
          <span className="h-px w-8 bg-zinc-300 md:w-10" />
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            {headingEyebrow}
          </p>
          <span className="h-px w-8 bg-zinc-300 md:w-10" />
        </div>

        <h2
          className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-5xl"
          data-heading-item
        >
          {headingTitle}
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base"
          data-heading-item
        >
          {headingDescription}
        </p>
      </div>

      <div ref={trackEntryRef} className={`relative z-10 ${trackMarginTop}`}>
        <div
          ref={carouselRef}
          className="flex w-max items-stretch will-change-transform"
        >
          {carouselItems.map((project, index) =>
            renderProject({
              project,
              index,
              itemHeightClass: itemHeights[index % itemHeights.length],
            })
          )}
        </div>
      </div>
    </section>
  );
}