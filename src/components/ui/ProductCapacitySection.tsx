/**client/src/components/ui/ProductCapacitySection.tsx */

/** Capacidad Operativa de Extracción*/

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

export type ProductCapacityStat = {
  value: string | number;
  label: string;
  description: string;
  tone?: "primary" | "soft" | "muted";
};

export type ProductCapacityLocation = {
  title: string;
  description: string;
};

type ProductCapacitySectionProps = {
  title: string;
  stats: ProductCapacityStat[];
  locations?: ProductCapacityLocation[];
};

const defaultLocations: ProductCapacityLocation[] = [
  {
    title: "Ubicación de Planta Principal",
    description: "Caserío Rodeopampa – Marcabal – Huamachuco – La Libertad",
  },
  {
    title: "Ubicación de Planta Sucursal",
    description: "Bambamarca – Cajamarca",
  },
];

const toneStyles = {
  primary: {
    valueClassName: "text-neutral-900",
    accentClassName: "bg-neutral-900",
  },
  soft: {
    valueClassName: "text-neutral-900",
    accentClassName: "bg-brand-accent",
  },
  muted: {
    valueClassName: "text-neutral-800",
    accentClassName: "bg-ore",
  },
} as const;

export default function ProductCapacitySection({
  title,
  stats,
  locations = defaultLocations,
}: ProductCapacitySectionProps) {
  const copy = useLocalizedContent({
    es: {
      eyebrow: "Capacidad Operativa",
      strategicLocations: "Ubicaciones estratégicas",
      presence: "Presencia operativa",
      defaultLocations,
    },
    en: {
      eyebrow: "Operational capacity",
      strategicLocations: "Strategic locations",
      presence: "Operational presence",
      defaultLocations: [
        {
          title: "Main Plant Location",
          description: "Caserío Rodeopampa – Marcabal – Huamachuco – La Libertad",
        },
        {
          title: "Branch Plant Location",
          description: "Bambamarca – Cajamarca",
        },
      ],
    },
  });
  const sectionRef = useRef<HTMLElement>(null);
  const resolvedLocations = locations === defaultLocations ? copy.defaultLocations : locations;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".capacity-stat-card");
      const locationCard = gsap.utils.toArray<HTMLElement>(".capacity-location-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        locationCard,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [resolvedLocations, stats]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200 py-section-md md:py-section-lg"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/80 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Encabezado */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-neutral-300" />
            <span className="text-tech-sm text-neutral-600">
              {copy.eyebrow}
            </span>
            <span className="h-px w-12 bg-neutral-300" />
          </div>

          <h2 className="text-display-md tracking-tight text-neutral-900 md:text-display-lg">
            {title}
          </h2>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map(({ value, label, description, tone = "primary" }, index) => {
            const style = toneStyles[tone];

            return (
              <article
                key={`${label}-${index}`}
                className="capacity-stat-card group relative rounded-lg border border-neutral-300 bg-white p-8 shadow-lg transition-all duration-base hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/80 to-transparent"
                  aria-hidden
                />

                <span
                  className={`mb-6 block h-1.5 w-14 rounded-full ${style.accentClassName}`}
                />

                <div
                  className={`mb-3 text-display-lg md:text-display-xl ${style.valueClassName}`}
                >
                  {value}
                </div>

                <h3 className="mb-3 text-body-lg font-semibold text-neutral-900">
                  {label}
                </h3>

                <p className="text-body-sm leading-relaxed text-neutral-700">
                  {description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Ubicaciones */}
        {resolvedLocations.length ? (
          <div className="capacity-location-card mt-section-md rounded-lg border border-neutral-300 bg-white p-8 shadow-lg md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-neutral-900 text-white shadow-md">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-tech-sm text-neutral-600">
                    {copy.strategicLocations}
                  </p>
                  <h3 className="mt-2 text-body-lg font-semibold text-neutral-900">
                    {copy.presence}
                  </h3>
                </div>
              </div>

              <div className="grid gap-5 md:min-w-[58%] md:grid-cols-2">
                {resolvedLocations.map(({ title: locationTitle, description }, index) => (
                  <div
                    key={`${locationTitle}-${index}`}
                    className="rounded-md border border-neutral-300 bg-neutral-100 p-5"
                  >
                    <h4 className="mb-2 text-tech-md text-neutral-800">
                      {locationTitle}
                    </h4>
                    <p className="text-body-sm leading-relaxed text-neutral-700">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
