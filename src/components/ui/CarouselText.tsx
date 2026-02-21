/* client/src/components/ui/CarouselText.tsx */
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMG_BASE =
  import.meta.env.VITE_IMG_URL || import.meta.env.VITE_ASSETS_URL;
const FALLBACK_LOGO = "img/logo/logo-caldera-cushuro.png";
const CAROUSEL_SPEED = {
  card: 32,
  masonry: 38,
  inline: 24,
} as const;

type CarouselVariant = "card" | "masonry" | "inline";

interface MiningProject {
  name: string;
  desc: string;
  logo: string;
  mineral: string;
  zone: string;
  front: string;
  status: string;
  refCode: string;
}

interface CarouselTextProps {
  variant?: CarouselVariant;
  showVariantPicker?: boolean;
}

const VARIANT_OPTIONS: Array<{
  id: CarouselVariant;
  label: string;
  caption: string;
}> = [
  { id: "card", label: "Card", caption: "Panel técnico" },
  { id: "masonry", label: "Masonry", caption: "Bloques escalonados" },
  { id: "inline", label: "Inline", caption: "Banda operativa" },
];

const VARIANT_HEIGHTS: Record<
  CarouselVariant,
  {
    sectionViewportHeight: string;
    trackMarginTop: string;
    itemHeights: [string, string, string];
  }
> = {
  card: {
    sectionViewportHeight: "min-h-[68vh] md:min-h-[72vh]",
    trackMarginTop: "mt-8 md:mt-10",
    itemHeights: ["min-h-[210px]", "min-h-[240px]", "min-h-[225px]"],
  },
  masonry: {
    sectionViewportHeight: "min-h-[72vh] md:min-h-[78vh]",
    trackMarginTop: "mt-8 md:mt-10",
    itemHeights: ["min-h-[220px]", "min-h-[260px]", "min-h-[235px]"],
  },
  inline: {
    sectionViewportHeight: "min-h-[20vh] md:min-h-[44vh]",
    trackMarginTop: "mt-10 md:mt-12",
    itemHeights: ["min-h-[84px]", "min-h-[96px]", "min-h-[90px]"],
  },
};

const PROJECTS: MiningProject[] = [
  {
    name: "MINERA BORRO MISQUICHILCA S.A",
    desc: "Desbloqueando valor para un futuro mejor.",
    logo: "img/logo-clientes/borro-minera.png",
    mineral: "Au / Ag",
    zone: "La Libertad, PE",
    front: "Tajo Norte",
    status: "Operación 24/7",
    refCode: "M-011",
  },
  {
    name: "SUMMA GOLD CORPORATION",
    desc: "Producción formal y optimizada en Huamachuco.",
    logo: "img/logo-clientes/summa-gold.png",
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

const resolveAssetUrl = (value: string) => {
  if (/^https?:\/\//i.test(value)) return value;
  if (!IMG_BASE) return value;
  return `${IMG_BASE}/${value.replace(/^\//, "")}`;
};

{/** cambiar estilos */}
export function CarouselText({
  variant,
  showVariantPicker = false,
}: CarouselTextProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const trackEntryRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeVariant, setActiveVariant] = useState<CarouselVariant>(
    variant ?? "inline"
  );

  const canSwitchVariant = showVariantPicker && !variant;
  const carouselItems = useMemo(() => [...PROJECTS, ...PROJECTS], []);
  const activeHeights = VARIANT_HEIGHTS[activeVariant];

  useEffect(() => {
    if (variant) setActiveVariant(variant);
  }, [variant]);

  useEffect(() => {
    if (!carouselRef.current) return;

    const track = carouselRef.current;
    let tween: gsap.core.Tween | null = null;

    const buildAnimation = () => {
      const items = Array.from(track.children) as HTMLElement[];
      if (!items.length) return;

      const middle = Math.floor(items.length / 2);
      const distance = items
        .slice(0, middle)
        .reduce((acc, el) => acc + el.offsetWidth, 0);

      if (!distance) return;

      tween?.kill();
      gsap.set(track, { x: 0 });
      tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        duration: CAROUSEL_SPEED[activeVariant],
        repeat: -1,
      });
    };

    buildAnimation();

    const resizeObserver = new ResizeObserver(() => {
      buildAnimation();
    });
    resizeObserver.observe(track);
    Array.from(track.children).forEach((item) => resizeObserver.observe(item));

    const onEnter = () => tween?.pause();
    const onLeave = () => tween?.play();

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    return () => {
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      resizeObserver.disconnect();
      tween?.kill();
    };
  }, [activeVariant]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const headingElements = headingRef.current.querySelectorAll("p, h2, span");

        gsap.fromTo(
          headingElements,
          { autoAlpha: 0, y: 20, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      if (trackEntryRef.current) {
        const direction = activeVariant === "inline" ? 90 : -90;

        gsap.fromTo(
          trackEntryRef.current,
          { autoAlpha: 0, x: direction, y: 16, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: trackEntryRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      const logos = gsap.utils.toArray<HTMLElement>("[data-carousel-logo]");
      if (logos.length) {
        gsap.fromTo(
          logos,
          { autoAlpha: 0, scale: 0.82, y: 10 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeVariant]);

  const renderProject = (project: MiningProject, i: number) => {
    const itemHeightClass =
      activeHeights.itemHeights[i % activeHeights.itemHeights.length];

    // ESTILO: MASONRY
    if (activeVariant === "masonry") {
      return (
        <div
          key={`${project.refCode}-${i}`}
          className="inline-flex flex-shrink-0 px-3 md:px-4"
        >
          {/** masonry estilo grid */}
          <article
            className={`group grid min-w-[300px] md:min-w-[350px] grid-cols-[68px_1fr] grid-rows-[auto_auto_auto] gap-x-4 gap-y-3 rounded-2xl border border-emerald-500/30 bg-white p-4 ${itemHeightClass} shadow-[0_18px_45px_-30px_rgba(16,185,129,0.45)]`}
          >
            <div
              className="row-span-2 h-16 w-16 rounded-xl border border-zinc-200 bg-zinc-50 p-2"
              data-carousel-logo
            >
              <img
                src={resolveAssetUrl(project.logo)}
                alt={project.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = resolveAssetUrl(FALLBACK_LOGO);
                }}
                className="h-full w-full object-contain opacity-90"
              />
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                REF {project.refCode}
              </p>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                {project.mineral}
              </span>
            </div>

            <h3 className="text-sm font-black uppercase leading-tight tracking-[0.08em] text-zinc-900">
              {project.name}
            </h3>

            <p className="col-span-2 border-t border-zinc-100 pt-3 text-xs leading-relaxed text-zinc-700">
              {project.desc}
            </p>

            <div className="col-span-2 grid grid-cols-2 gap-2 text-[10px] font-mono uppercase tracking-[0.14em] text-zinc-600">
              <p className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1">
                Frente: {project.front}
              </p>
              <p className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1">
                Zona: {project.zone}
              </p>
              <p className="col-span-2 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-emerald-700">
                {project.status}
              </p>
            </div>
          </article>
        </div>
      );
    }

    // ESTILO: INLINE
    if (activeVariant === "inline") {
      return (
        <div
          key={`${project.refCode}-${i}`}
          className="inline-flex flex-shrink-0 items-stretch px-3 md:px-4"
        >
          {/**fondo del banner */}
          <article
            className={`group flex min-w-[420px] md:min-w-[560px] items-center gap-4 rounded-full border border-blue-500/90 bg-zinc-800 px-4 py-3 shadow-[0_22px_45px_-35px_rgba(245,158,11,0.9)] backdrop-blur ${itemHeightClass}`}
          >
            {/**fondo del logo */}
            <div
              className="h-14 w-14 flex-shrink-0 rounded-full border border-zinc-700 bg-white p-2"
              data-carousel-logo
            >
              <img
                src={resolveAssetUrl(project.logo)}
                alt={project.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = resolveAssetUrl(FALLBACK_LOGO);
                }}
                className="h-full w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm md:text-base font-black uppercase tracking-[0.1em] text-zinc-100">
                {project.name}
              </h3>
              <p className="truncate text-xs uppercase  tracking-[0.16em] text-amber-200/90">
                {project.front} • {project.zone}
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <span className="rounded-full border border-amber-500/40  bg-amber-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200">
                {project.mineral}
              </span>
              <span className="rounded-full border border-zinc-600/70 bg-zinc-900/80 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-zinc-300">
                {project.refCode}
              </span>
            </div>
          </article>
        </div>
      );
    }

    // ESTILO: CARD (default)
    return (
      <div
        key={`${project.refCode}-${i}`}
        className="inline-flex flex-shrink-0 items-stretch px-4 md:px-6"
      >
        <article
          className={`group flex min-w-[340px] md:min-w-[430px] items-center gap-5 rounded-xl border border-amber-500/25 bg-zinc-950/70 px-5 py-5 shadow-[0_20px_55px_-35px_rgba(245,158,11,0.7)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:bg-zinc-900/80 ${itemHeightClass}`}
        >
          <div
            className="h-16 w-16 md:h-20 md:w-20 flex-shrink-0 rounded-lg border border-zinc-700 bg-zinc-900/80 p-2"
            data-carousel-logo
          >
            <img
              src={resolveAssetUrl(project.logo)}
              alt={project.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = resolveAssetUrl(FALLBACK_LOGO);
              }}
              className="h-full w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              REF {project.refCode}
            </p>
            <h3 className="mt-1 text-sm md:text-base font-black uppercase leading-tight tracking-[0.1em] text-zinc-100">
              {project.name}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-300">
              {project.desc}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200">
                {project.mineral}
              </span>
              <span className="rounded-full border border-zinc-600/80 bg-zinc-900/80 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-zinc-300">
                {project.front}
              </span>
            </div>
          </div>

          <div className="hidden lg:block self-start text-[10px] font-mono uppercase tracking-[0.17em] text-zinc-500">
            {project.status}
          </div>
        </article>
      </div>
    );
  };

  {/** config general */}
  return (
    <div
      ref={sectionRef}
      className={`relative left-1/2 -translate-x-1/2 overflow-hidden   py-16 md:py-20 ${activeHeights.sectionViewportHeight}`}
      data-variant={activeVariant}
    >
      <div ref={headingRef} className="relative z-20 mb-10 px-4 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-500">
          Nuestros Clientes
        </p>
        <div className="mt-2 flex items-center justify-center gap-4 md:gap-6">
          <span className="h-px w-10 md:w-24 bg-gradient-to-r from-transparent to-amber-500/80" />
          <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-zinc-800 md:text-4xl">
            Ellos confían en nosotros
          </h2>
          <span className="h-px w-10 md:w-24 bg-gradient-to-l from-transparent to-amber-500/80" />
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-700 md:text-base">
          Aliados del rubro minero que confían en nuestra ejecución para
          construir marca, presencia y resultados.
        </p>
      </div>

      <div ref={trackEntryRef} className={`relative z-10 ${activeHeights.trackMarginTop}`}>
        <div
          ref={carouselRef}
          className="flex w-max items-stretch will-change-transform"
        >
          {carouselItems.map((project, i) => renderProject(project, i))}
        </div>
      </div>
    </div>
  );
}

export default CarouselText;
