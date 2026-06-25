/** client/src/components/ui/ProductTeamSection.tsx */
/** ejemplo: Mano de Obra por Horno (35 TM) */

"use client";

import { UsersThree } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLocalizedContent } from "../../context/SiteLanguageContext";
import { VideoPreview } from "./VideoPreview";
import SnapCarousel, { SnapCarouselItem } from "./SnapCarousel";

export type ProductTeamMember = {
  role: string;
  workers: number | string;
};

type ProductTeamSectionProps = {
  title: string;
  members: ProductTeamMember[];
  totalValue: number | string;
  totalLabel: string;
  accentClassName?: string;
  gridWidthClassName?: string;
  /** Cuando se renderiza dentro de un fondo compartido (PinnedVideoBackdrop):
   *  sin fondo ni video propio, transparente para dejar ver el video de atrás. */
  embedded?: boolean;
};

export default function ProductTeamSection({
  title,
  members,
  totalValue,
  totalLabel,
  accentClassName = "text-emerald-700",
  gridWidthClassName = "max-w-5xl",
  embedded = false,
}: ProductTeamSectionProps) {
  const copy = useLocalizedContent({
    es: {
      eyebrow: "Estructura Operativa",
    },
    en: {
      eyebrow: "Operational structure",
    },
  });

  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const [enablePin, setEnablePin] = useState(false);

  // Solo activamos el efecto "pin" (video quieto + contenido por encima) en desktop.
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setEnablePin(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // "Sticky manual": trasladamos la capa de video con el scroll para que se quede
  // pegada al viewport dentro de los límites de la sección, mientras el contenido
  // pasa por encima (efecto prompter/parallax). Lo hacemos por JS porque
  // position:sticky se rompe con el overflow-x: clip global de html/body.
  useEffect(() => {
    const section = sectionRef.current;
    const layer = pinRef.current;
    if (embedded || !enablePin || !section || !layer) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const max = Math.max(0, section.offsetHeight - window.innerHeight);
      const y = Math.min(Math.max(-rect.top, 0), max);
      layer.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      layer.style.transform = "";
    };
  }, [embedded, enablePin]);

  return (
    <section
      ref={sectionRef}
      className={embedded ? "relative" : "dark-image relative bg-stone-900"}
    >
      {/* Fondo de video propio (solo standalone). En modo embedded el video lo
          aporta el contenedor compartido (PinnedVideoBackdrop). */}
      {!embedded && (
        <div
          ref={pinRef}
          aria-hidden
          className={`pointer-events-none z-0 overflow-hidden ${
            enablePin
              ? "absolute inset-x-0 top-0 h-screen will-change-transform"
              : "absolute inset-0"
          }`}
        >
          <VideoPreview
            src="video/hero/cantera002"
            poster="img-inicio/hero/cantera002"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            controls={false}
            useInternalOpacity={false}
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.5;
            }}
            onPlay={(e) => {
              e.currentTarget.playbackRate = 0.5;
            }}
          />
          {/* Capa café para mantener el tono y mantener el video opaco */}
          <div className="absolute inset-0 bg-stone-900/75" />
        </div>
      )}

      {/* Contenido por encima del video (z-10). */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-16">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#6db820]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#6db820]">
              {copy.eyebrow}
            </span>
            <span className="h-px w-12 bg-[#6db820]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
            {title}
          </h2>
        </motion.div>

        {/* Grid principal */}
        <div className={`mx-auto ${gridWidthClassName}`}>
          <SnapCarousel until="lg" hintTone="dark" className="grid gap-5 lg:grid-cols-2">
          {members.map(({ role, workers }, index) => (
            <SnapCarouselItem key={`${role}-${index}`}>
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group h-full rounded-3xl border border-zinc-200 bg-white/30 px-6 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 h-[3px] w-12 rounded-full bg-[#6db820]" />

              <div className="flex items-center justify-between gap-4">
                <div className="max-w-[75%]">
                  <h3 className="text-base font-medium leading-relaxed text-zinc-100 md:text-lg">
                    {role}
                  </h3>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-2.5">
                  <UsersThree className={`h-4 w-4 ${accentClassName}`} />
                  <span className={`text-2xl font-semibold tracking-tight ${accentClassName}`}>
                    {workers}
                  </span>
                </div>
              </div>
            </motion.article>
            </SnapCarouselItem>
          ))}
          </SnapCarousel>

          {/* Total */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            viewport={{ once: true }}
            className="mt-5"
          >
            <div className="dark-image rounded-[2rem] border border-zinc-200 bg-stone-900/40 px-8 py-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
              <div className="mx-auto mb-4 h-[3px] w-16 rounded-full bg-emerald-500" />
              <div className="mb-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {totalValue}
              </div>
              <div className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-100 md:text-base">
                {totalLabel}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
