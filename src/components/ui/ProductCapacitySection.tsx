/**client/src/components/ui/ProductCapacitySection.tsx */

/** Capacidad Operativa de Extracción*/

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

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
    valueClassName: "text-zinc-950",
    accentClassName: "bg-zinc-900",
  },
  soft: {
    valueClassName: "text-zinc-950",
    accentClassName: "bg-emerald-700",
  },
  muted: {
    valueClassName: "text-zinc-800",
    accentClassName: "bg-stone-400",
  },
} as const;

export default function ProductCapacitySection({
  title,
  stats,
  locations = defaultLocations,
}: ProductCapacitySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

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
  }, [stats, locations]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f2ea_0%,#ede7dc_100%)] py-24"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300/80 to-transparent"
        aria-hidden
      />

      <div className="mx-auto  max-w-7xl px-6 lg:px-16">
        {/* Encabezado */}
        <div className="mx-auto  mb-16 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-zinc-300" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
              Capacidad Operativa
            </span>
            <span className="h-px w-12 bg-zinc-300" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            {title}
          </h2>
        </div>

        {/* Stats */}
        <div className="grid  gap-6 md:grid-cols-3">
          {stats.map(({ value, label, description, tone = "primary" }, index) => {
            const style = toneStyles[tone];

            return (
              <article
                key={`${label}-${index}`}
                className="capacity-stat-card group relative rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_14px_44px_-34px_rgba(24,24,27,0.20)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-34px_rgba(24,24,27,0.26)]"
              >
                <div
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300/80 to-transparent"
                  aria-hidden
                />

                <span
                  className={`mb-6 block h-1.5 w-14 rounded-full ${style.accentClassName}`}
                />

                <div
                  className={`mb-3 text-4xl font-semibold tracking-tight md:text-5xl ${style.valueClassName}`}
                >
                  {value}
                </div>

                <h3 className="mb-3 text-lg font-medium text-zinc-950 md:text-xl">
                  {label}
                </h3>

                <p className="text-sm leading-7 text-zinc-600 md:text-[15px]">
                  {description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Ubicaciones */}
        {locations.length ? (
          <div className="capacity-location-card mt-12 rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_14px_40px_-32px_rgba(24,24,27,0.18)] md:p-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-950 text-white shadow-sm">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                    Ubicaciones estratégicas
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-950">
                    Presencia operativa
                  </h3>
                </div>
              </div>

              <div className="grid gap-5 md:min-w-[58%] md:grid-cols-2">
                {locations.map(({ title: locationTitle, description }, index) => (
                  <div
                    key={`${locationTitle}-${index}`}
                    className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
                  >
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-700">
                      {locationTitle}
                    </h4>
                    <p className="text-sm leading-7 text-zinc-600">
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
