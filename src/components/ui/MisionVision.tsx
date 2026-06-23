/* client/src/components/ui/MisionVision.tsx */
/* Misión & Visión unificadas — bloque premium minero (fondo carbón, acento emerald) */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkle, Lightbulb, CheckCircle, TrendUp, ShieldCheck, Handshake } from "@phosphor-icons/react";

import { ImageStack } from "./ImageStack";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function MisionVision() {
  const sectionRef = useRef<HTMLElement>(null);

  const copy = useLocalizedContent({
    es: {
      eyebrow: "Misión & Visión",
      meta: ["LOC: HUAMACHUCO_LIBERTAD", "2026", "SANTA ISABEL DE CUSHURO"],
      mision: {
        kicker: "Nuestra Misión",
        title: "Nuestro Propósito",
        description:
          "La misión de CALERA “SANTA ISABEL DE CUSHURO SAC” es otorgar productos de calidad en el suministro de óxido de calcio con responsabilidad ambiental, social, integridad e identificación con nuestro personal, proveedores, clientes y comunidad, fomentando la capacitación permanente de nuestros recursos humanos y logrando un posicionamiento competitivo dentro del mercado empresarial local y regional.",
        imageSrc: "/img-la-empresa/mision/mision",
        imageAlt: "Operación de Calera Santa Isabel de Cushuro",
        pillars: [
          { icon: CheckCircle, title: "Calidad", subtitle: "Certificada" },
          { icon: Handshake, title: "Compromiso", subtitle: "Social" },
        ],
      },
      vision: {
        kicker: "Nuestra Visión",
        title: "Nuestro Futuro",
        description:
          "La empresa CALERA “SANTA ISABEL DE CUSHURO SAC” se proyecta a consolidarse en el suministro de Óxido de Calcio en el mercado minero de la región La Libertad; por su organización, logística, ambiente de trabajo, cuidado del medio ambiente, seguridad y responsabilidad social, por lo cual debe ser considerada como una empresa con credibilidad y confianza.",
        imageSrc: "/img-la-empresa/vision/vision",
        imageAlt: "Equipo y trabajo operativo de Calera Cushuro",
        pillars: [
          { icon: TrendUp, value: "100%", label: "Crecimiento" },
          { icon: ShieldCheck, value: "100%", label: "Seguridad" },
        ],
      },
    },
    en: {
      eyebrow: "Mission & Vision",
      meta: ["LOC: HUAMACHUCO_LIBERTAD", "2025", "CALERA CUSHURO"],
      mision: {
        kicker: "Our Mission",
        title: "Our Purpose",
        description:
          "The mission of CALERA “SANTA ISABEL DE CUSHURO SAC” is to provide quality products in the supply of calcium oxide with environmental and social responsibility, integrity, and strong identification with our personnel, suppliers, clients, and community, fostering permanent training of our human resources and achieving a competitive position in the local and regional business market.",
        imageSrc: "/img-la-empresa/mision/mision",
        imageAlt: "Calera Santa Isabel de Cushuro operations",
        pillars: [
          { icon: CheckCircle, title: "Quality", subtitle: "Certified" },
          { icon: Handshake, title: "Commitment", subtitle: "Social" },
        ],
      },
      vision: {
        kicker: "Our Vision",
        title: "Our Future",
        description:
          "CALERA “SANTA ISABEL DE CUSHURO SAC” aims to consolidate its position in the supply of calcium oxide in the mining market of the La Libertad region through its organization, logistics, work environment, environmental care, safety, and social responsibility, being recognized as a company of credibility and trust.",
        imageSrc: "/img-la-empresa/vision/vision",
        imageAlt: "Calera Cushuro team and operational work",
        pillars: [
          { icon: TrendUp, value: "100%", label: "Growth" },
          { icon: ShieldCheck, value: "100%", label: "Safety" },
        ],
      },
    },
  });

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".mv-image").forEach((el) => {
        gsap.from(el, {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".mv-content").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".mv-card").forEach((el, i) => {
        gsap.from(el, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          delay: (i % 2) * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="dark-image relative overflow-hidden rounded-[0px] px-4 py-24 text-white md:rounded-[160px] md:px-8 md:py-32 lg:rounded-[320px] lg:px-16 bg-[linear-gradient(180deg,#171717_0%,#222020_58%,#2b2725_100%)]"
    >
      {/* Textura de planta — retícula de puntos */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 0.6px, transparent 0.6px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden
      />
      {/* Resplandor superior emerald */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[520px] max-w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header común */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300 backdrop-blur-md">
            <Lightbulb size={16} weight="duotone" className="text-emerald-400" />
            {copy.eyebrow}
            <Sparkle size={16} weight="duotone" className="text-emerald-400" />
          </span>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400 sm:text-xs">
            {copy.meta.map((m, i) => (
              <span key={m} className="flex items-center gap-4">
                {i > 0 && <span className="text-emerald-500">⬥</span>}
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* ───────── MISIÓN ───────── */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="mv-content order-2 lg:order-1">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
              {copy.mision.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {copy.mision.title}
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-stone-300">
              {copy.mision.description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {copy.mision.pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="mv-card rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-colors duration-300 hover:border-emerald-500/40 hover:bg-white/[0.07]"
                  >
                    <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Icon size={26} weight="duotone" />
                    </span>
                    <p className="font-semibold text-white">{p.title}</p>
                    <p className="text-sm text-stone-400">{p.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mv-image relative h-[360px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:h-[440px] md:h-[560px] lg:h-[620px]">
              <ImageStack
                layout="stacked"
                showOverlay={false}
                images={[{ src: copy.mision.imageSrc, alt: copy.mision.imageAlt }]}
                className="w-full"
                stackedLayoutOverrides={{
                  1: {
                    stackHeight: "h-[360px] sm:h-[440px] md:h-[560px] lg:h-[620px]",
                    slots: { primary: "absolute inset-0 h-full w-full z-10" },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="my-20 flex items-center gap-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </div>

        {/* ───────── VISIÓN ───────── */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="order-1">
            <div className="mv-image relative h-[360px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:h-[440px] md:h-[560px] lg:h-[620px]">
              <ImageStack
                layout="stacked"
                showOverlay={false}
                images={[{ src: copy.vision.imageSrc, alt: copy.vision.imageAlt }]}
                className="w-full"
                stackedLayoutOverrides={{
                  1: {
                    stackHeight: "h-[360px] sm:h-[440px] md:h-[560px] lg:h-[620px]",
                    slots: { primary: "absolute inset-0 h-full w-full z-10" },
                  },
                }}
              />
            </div>
          </div>

          <div className="mv-content order-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
              {copy.vision.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {copy.vision.title}
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-stone-300">
              {copy.vision.description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {copy.vision.pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.label}
                    className="mv-card rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-colors duration-300 hover:border-emerald-500/40 hover:bg-white/[0.07]"
                  >
                    <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Icon size={26} weight="duotone" />
                    </span>
                    <p className="text-3xl font-bold text-white">{p.value}</p>
                    <p className="mt-1 text-sm uppercase tracking-wider text-stone-400">{p.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MisionVision;
