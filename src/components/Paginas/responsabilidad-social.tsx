/**client/src/components/Paginas/responsabilidad-social.tsx */

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Sprout,
  Users,
  Trophy,
  Quote,
} from "lucide-react";
import PageSEO from "../global/PageSEO";
import PilaresGrid from "../ui/PilaresGrid";
import ReorderImageStack from "../ui/ReorderImageStack";
import { ImageStack } from "../ui/ImageStack";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ResponsabilidadSocial: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const copy = useLocalizedContent({
    es: {
      hero: {
        title: "Compromiso",
        accent: "Social",
        description:
          "En Santa Isabel de Cushuro no alteramos vidas; las transformamos. No cambiamos entornos; los mejoramos. No alteramos sus costumbres, lo ayudamos a preservarlas. Nuestro compromiso es con las personas y su futuro.",
      },
      philosophy: {
        eyebrow: "Filosofía social",
        title: "Más que minería,",
        accent: "es humanidad",
        paragraphs: [
          "Entendemos que cada proyecto minero toca vidas reales. Por eso, nuestro compromiso social no es un añadido: es parte esencial de nuestra operación.",
          "Respetamos costumbres, celebramos culturas y protegemos la salud y el ambiente, promoviendo relaciones sostenibles con las comunidades de nuestro entorno.",
        ],
        quote:
          "La verdadera riqueza no está en lo que extraemos, sino en lo que construimos con las comunidades.",
        images: [
          {
            src: "/img-responsabilidad-social/mineria/imagenes/img-001",
            alt: "Relación social con comunidades",
          },
          {
            src: "/img-medio-ambiente/hero/medio-ambiente/reforestacion-medio-ambiente",
            alt: "Reforestación y compromiso ambiental",
          },
          {
            src: "/img-responsabilidad-social/mineria/imagenes/img-002",
            alt: "Desarrollo social y entorno comunitario",
          },
        ],
      },
      pillars: {
        title: "Nuestros Pilares",
        description:
          "En educación, cultura, deportes y recreación, esta propuesta surge como un compromiso y una responsabilidad de nuestra empresa frente al reto del desarrollo humano en nuestros distritos.",
        items: [
          {
            icon: GraduationCap,
            title: "Trabajo comunitario",
            desc: "Asumimos la educación como eje del desarrollo humano en nuestros distritos.",
            commitments: [
              "Mejorar la calidad educativa en todos los niveles.",
              "Articular la educación con la salud.",
              "Disminuir el analfabetismo.",
              "Promover la educación por el trabajo.",
            ],
          },
          {
            icon: Users,
            title: "Cultura e Interculturalidad",
            desc: "Fortalecemos las raíces locales y la convivencia intercultural regional.",
            commitments: [
              "Fortalecer la identidad cultural regional.",
              "Cultivar y consolidar la interculturalidad regional.",
            ],
          },
          {
            icon: Sprout,
            title: "Medio Ambiente",
            desc: "Defender el entorno natural es parte esencial de nuestra responsabilidad social.",
            commitments: ["Preservar y defender el medio ambiente."],
          },
          {
            icon: Trophy,
            title: "Deporte y Recreación",
            desc: "Impulsamos hábitos saludables e integración social mediante la actividad deportiva.",
            commitments: ["Impulsar la práctica y la cultura deportiva y de recreación."],
          },
        ],
      },
      quote:
        "Construimos una convivencia de respeto y equidad, donde la empresa y la comunidad crecen juntas.",
      workEducation: {
        eyebrow: "Desarrollo social",
        title: "Educación",
        accent: "por el Trabajo",
        paragraphs: [
          "No solo generamos empleos; formamos profesionales. Cada trabajador representa una oportunidad de desarrollo y cada capacitación una inversión concreta en el futuro.",
          "Articulamos educación con trabajo, salud con productividad y cultura con desarrollo integral para fortalecer el crecimiento sostenible en nuestro entorno.",
        ],
        commitmentTitle: "Nuestro compromiso",
        commitment:
          "Formar con el apoyo de la inversión privada para construir puentes de desarrollo sostenible y paz social.",
        imageAlt: "Educación por el trabajo",
      },
    },
    en: {
      hero: {
        title: "Social",
        accent: "Commitment",
        description:
          "At Santa Isabel de Cushuro we do not disrupt lives; we transform them. We do not change environments; we improve them. We do not alter traditions; we help preserve them. Our commitment is to people and their future.",
      },
      philosophy: {
        eyebrow: "Social philosophy",
        title: "More than mining,",
        accent: "it is humanity",
        paragraphs: [
          "We understand that every mining project touches real lives. That is why our social commitment is not an add-on: it is an essential part of our operation.",
          "We respect customs, celebrate cultures, and protect health and the environment, promoting sustainable relationships with the communities around us.",
        ],
        quote:
          "True wealth is not in what we extract, but in what we build together with communities.",
        images: [
          {
            src: "/img-responsabilidad-social/mineria/imagenes/img-001",
            alt: "Social relationship with communities",
          },
          {
            src: "/img-medio-ambiente/hero/medio-ambiente/reforestacion-medio-ambiente",
            alt: "Reforestation and environmental commitment",
          },
          {
            src: "/img-responsabilidad-social/mineria/imagenes/img-002",
            alt: "Social development and community environment",
          },
        ],
      },
      pillars: {
        title: "Our Pillars",
        description:
          "In education, culture, sports, and recreation, this initiative emerges as a commitment and responsibility of our company in response to the challenge of human development in our districts.",
        items: [
          {
            icon: GraduationCap,
            title: "Community Work",
            desc: "We embrace education as a key driver of human development in our districts.",
            commitments: [
              "Improve educational quality at all levels.",
              "Link education with health.",
              "Reduce illiteracy.",
              "Promote work-oriented education.",
            ],
          },
          {
            icon: Users,
            title: "Culture and Interculturality",
            desc: "We strengthen local roots and regional intercultural coexistence.",
            commitments: [
              "Strengthen regional cultural identity.",
              "Cultivate and consolidate regional interculturality.",
            ],
          },
          {
            icon: Sprout,
            title: "Environment",
            desc: "Protecting the natural environment is an essential part of our social responsibility.",
            commitments: ["Preserve and protect the environment."],
          },
          {
            icon: Trophy,
            title: "Sports and Recreation",
            desc: "We promote healthy habits and social integration through sports activity.",
            commitments: ["Promote sports and recreational culture."],
          },
        ],
      },
      quote:
        "We build coexistence based on respect and equity, where the company and the community grow together.",
      workEducation: {
        eyebrow: "Social development",
        title: "Education",
        accent: "through Work",
        paragraphs: [
          "We do not just create jobs; we develop professionals. Every worker represents an opportunity for development, and every training effort is a concrete investment in the future.",
          "We connect education with work, health with productivity, and culture with integral development to strengthen sustainable growth in our environment.",
        ],
        commitmentTitle: "Our commitment",
        commitment:
          "To educate with the support of private investment in order to build bridges toward sustainable development and social peace.",
        imageAlt: "Work-oriented education",
      },
    },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-social", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      gsap.from(".hero-line-social", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        delay: 0.5,
        ease: "power3.inOut",
      });

      imageRefs.current.forEach((img, index) => {
        if (!img) return;

        gsap.fromTo(
          img,
          { y: 56, autoAlpha: 0, scale: 0.95, filter: "blur(8px)" },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            delay: index * 0.08,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: img,
              start: "top 88%",
              once: true,
            },
          }
        );

        const innerLayers = img.querySelectorAll<HTMLElement>(".parallax-inner");
        innerLayers.forEach((inner) => {
          gsap.to(inner, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-social").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".pillar-social").forEach((pillar, index) => {
        gsap.fromTo(
          pillar,
          { y: 60, autoAlpha: 0, scale: 0.95 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            immediateRender: false,
            scrollTrigger: {
              trigger: pillar,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="dark-image bg-white text-zinc-900 font-light overflow-hidden">
      <PageSEO pageId="responsabilidad-social" />

      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="hero-title-social text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tighter text-zinc-800">
            {copy.hero.title}
            <br />
            <span className="text-emerald-600">{copy.hero.accent}</span>
          </h1>
          <div className="hero-line-social h-[1px] w-48 bg-emerald-500 mx-auto" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            {copy.hero.description}
          </p>
        </div>
      </section>

      <section className="reveal-social bg-white px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="order-1 space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200/80 bg-white px-4 py-2 shadow-[0_10px_24px_rgba(24,24,27,0.06)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-600">
                {copy.philosophy.eyebrow}
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-zinc-900 md:text-5xl lg:text-6xl">
              {copy.philosophy.title} <br />
              <span className="text-emerald-600 tracking-[-0.06em]">
                {copy.philosophy.accent}
              </span>
            </h2>

            <div className="max-w-2xl space-y-5 text-base leading-8 text-zinc-600 md:text-lg">
              {copy.philosophy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="max-w-xl rounded-[1.75rem] border border-zinc-200/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(245,247,244,0.9))] px-6 py-5 shadow-[0_18px_40px_-28px_rgba(24,24,27,0.14)]">
              <p className="text-sm leading-7 italic text-zinc-700 md:text-base">
                "{copy.philosophy.quote}"
              </p>
            </div>
          </div>

          <div
            ref={(el) => {
              imageRefs.current[0] = el;
            }}
            className="relative order-2"
          >
            <div className="relative mx-auto max-w-[42rem]">
              <ReorderImageStack images={copy.philosophy.images} />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border border-white/20 bg-white/10 p-6 backdrop-blur-[2px]">
                  <Users className="h-12 w-12 text-white/70 md:h-16 md:w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="light-image relative min-h-screen rounded-t-[520px] py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-zinc-800">
        <h2 className="text-center text-4xl font-light text-emerald-600 mb-20 uppercase tracking-widest reveal-social">
          {copy.pillars.title}
        </h2>
        <p className="reveal-social max-w-4xl mx-auto text-center text-zinc-100 leading-relaxed mb-14">
          {copy.pillars.description}
        </p>
        <div className="pillars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.pillars.items.map((pillar, i) => {
            const Icon = pillar.icon;

            return (
              <div
                key={i}
                className="pillar-social p-15 w-[350px] transition-all duration-100 group hover:shadow-lg"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 transition-colors group-hover:bg-stone-100">
                  <Icon className="w-7 h-7 text-emerald-600 group-hover:text-zinc-600 transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-zinc-100 mb-4">{pillar.title}</h3>
                <p className="text-zinc-100 leading-relaxed text-sm">{pillar.desc}</p>
                {pillar.commitments.length > 0 ? (
                  <ul className="mt-5 space-y-2">
                    {pillar.commitments.map((commitment, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-zinc-100 text-sm leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" />
                        {commitment}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>

        <PilaresGrid />
      </section>

      <section className="light-image py-24 px-6 bg-zinc-800 text-white overflow-hidden relative reveal-social">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
          <Quote className="w-12 h-12 text-emerald-500/40 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-light leading-tight">{copy.quote}</h2>
        </div>
      </section>

      <section className="bg-[#f5f7f8] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20">
          <div
            ref={(el) => {
              imageRefs.current[1] = el;
            }}
            className="order-2 md:order-1"
          >
            <ImageStack
              className="mx-auto max-w-[38rem]"
              images={[
                {
                  src: "/img-responsabilidad-social/educacion-trabajo/imagenes/img001",
                  alt: copy.workEducation.imageAlt,
                },
              ]}
            />
          </div>

          <div className="reveal-social order-1 space-y-8 md:order-2">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/75 px-4 py-2 shadow-[0_10px_24px_rgba(24,24,27,0.06)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-600">
                {copy.workEducation.eyebrow}
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-zinc-900 md:text-5xl lg:text-6xl">
              {copy.workEducation.title} <br />
              <span className="text-emerald-600 italic tracking-[-0.06em]">
                {copy.workEducation.accent}
              </span>
            </h2>

            <div className="max-w-2xl space-y-5 text-base leading-8 text-zinc-600 md:text-lg">
              {copy.workEducation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="max-w-xl rounded-[2rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(245,247,250,0.88))] p-8 shadow-[0_18px_45px_-28px_rgba(24,24,27,0.14)]">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                {copy.workEducation.commitmentTitle}
              </p>

              <p className="text-base leading-7 text-zinc-700 md:text-lg">
                {copy.workEducation.commitment}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsabilidadSocial;
