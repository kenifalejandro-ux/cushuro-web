/* client/src/components/Hero/HeroImpact.tsx
 * Hero reutilizable con efectos avanzados (IMPACTO):
 * atmósfera (partículas + Ken Burns + luz emergente), glitch + entrada 3D del
 * título, subtítulo, badges con pulse glow y carrusel opcional con thumbnails.
 *
 * Fondo flexible: `image` (imagen única), `slides` (carrusel) o `backgroundSlot`
 * (fondo custom, p.ej. video). Acciones/CTA vía `actionsSlot`, barra inferior
 * custom vía `bottomSlot`. Ref de la sección vía `sectionRef`.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { HeroAtmosphere } from "./HeroAtmosphere";
import { HeroMediaThumbnails } from "../ui/HeroMediaThumbnails";
import { LCPImage } from "../ui/LCPImage";

export interface HeroImpactBadge {
  icon: ReactNode;
  label: string;
}

interface HeroImpactProps {
  alt: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  badges?: HeroImpactBadge[];
  /** Reduce el tamaño del título para textos largos. */
  compactTitle?: boolean;
  /** Mostrar partículas de polvo en la atmósfera. */
  showParticles?: boolean;

  // Fondo (uno de estos)
  image?: string;
  slides?: { poster: string }[];
  slideAlt?: string;
  thumbnailAlt?: string;
  thumbnailLabel?: string;
  slideCount?: number;
  slideRotationMs?: number;
  /** Fondo custom (p.ej. carrusel de video). Tiene prioridad sobre image/slides. */
  backgroundSlot?: ReactNode;

  // Slots de contenido
  actionsSlot?: ReactNode;
  bottomSlot?: ReactNode;

  /** Permite al host obtener el nodo de la <section> (intersection observers, etc.). */
  sectionRef?: (node: HTMLElement | null) => void;
}

export function HeroImpact({
  alt,
  eyebrow,
  title,
  subtitle,
  badges = [],
  compactTitle,
  showParticles = true,
  image,
  slides,
  slideAlt = "",
  thumbnailAlt = "",
  thumbnailLabel = "",
  slideCount,
  slideRotationMs = 4000,
  backgroundSlot,
  actionsSlot,
  bottomSlot,
  sectionRef,
}: HeroImpactProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const useCarousel = !backgroundSlot && Array.isArray(slides) && slides.length > 0;
  const activeSlides = useCarousel
    ? slides!.slice(0, Math.max(1, Math.min(slideCount ?? slides!.length, slides!.length)))
    : [];

  const titleFontSize = compactTitle
    ? "clamp(1.6rem, 3.5vw, 2.5rem)"
    : "clamp(1.875rem, 4.5vw, 3rem)";
  const titleLineHeight = compactTitle ? 1.1 : 1.05;
  const titleLetterSpacing = compactTitle ? "-0.04em" : "-0.05em";
  const titleMaxWidth = compactTitle ? "20ch" : "18ch";

  // Timeline de contenido (texto + badges). El fondo lo anima HeroAtmosphere.
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.to(".reveal-line", { scaleX: 1, opacity: 1, duration: 0.7, ease: "power2.out" }, 0.3);
      timeline.to(".eyebrow-text", { opacity: 1, duration: 0.6 }, 0.6);

      timeline.to(".title-glitch", { opacity: 1, duration: 0.15, ease: "power4.out" }, 1.2);
      timeline.to(".title-glitch", { opacity: 0, duration: 0.1 }, 1.35);

      timeline.to(
        ".title-main",
        {
          opacity: 1,
          transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)",
          duration: 0.9,
          ease: "back.out",
        },
        1.3
      );

      timeline.to(
        ".subtitle-main",
        { opacity: 1, transform: "translateY(0px)", duration: 0.8, ease: "power2.out" },
        1.8
      );

      if (badges.length > 0) {
        timeline.to(
          ".badge-item",
          { opacity: 1, transform: "scale(1)", duration: 0.6, stagger: 0.15, ease: "back.out" },
          2.2
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Ocultar el contenido al hacer scroll (reaparece al volver arriba).
  useEffect(() => {
    if (!heroRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(".hero-content", {
        opacity: 0,
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "55% top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Rotación automática del carrusel
  useEffect(() => {
    if (activeSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % activeSlides.length);
    }, slideRotationMs);
    return () => window.clearInterval(id);
  }, [activeSlides.length, slideRotationMs]);

  useEffect(() => {
    if (activeIndex >= activeSlides.length && activeSlides.length > 0) {
      setActiveIndex(0);
    }
  }, [activeIndex, activeSlides.length]);

  return (
    <section
      ref={(node) => {
        heroRef.current = node;
        sectionRef?.(node);
      }}
      className="dark-image relative min-h-[90vh] xl:min-h-screen 2xl:min-h-[90vh] w-full overflow-hidden bg-[#0a0a09]"
      style={{ background: "#ebebd9" }}
    >
      {/* ATMÓSFERA (partículas + Ken Burns + luz) */}
      <HeroAtmosphere scopeRef={heroRef} showParticles={showParticles} />

      {/* FONDO */}
      <div className="hero-bg absolute inset-0 z-0" style={{ filter: "contrast(1.05)" }}>
        {backgroundSlot ? (
          backgroundSlot
        ) : useCarousel ? (
          activeSlides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <LCPImage
                key={slide.poster}
                src={slide.poster}
                alt={`${slideAlt} ${index + 1}`}
                width={1920}
                height={1080}
                sizes="100vw"
                priority={index === 0}
                pictureClassName="absolute inset-0 block w-full h-full overflow-hidden"
                className={`w-full h-full object-cover transition-opacity duration-1000 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!isActive}
              />
            );
          })
        ) : image ? (
          <LCPImage
            src={image}
            alt={alt}
            width={2560}
            height={1080}
            sizes="100vw"
            priority
            pictureClassName="block w-full h-full overflow-hidden"
            className="w-full h-full object-cover opacity-100"
          />
        ) : null}

        {/* Luz emergente (animada por HeroAtmosphere) */}
        <div
          className="light-emerge"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 800px 600px at 50% 30%, rgba(16, 185, 129, 0.32) 0%, transparent 70%)",
            pointerEvents: "none",
            opacity: 0.3,
          }}
        />
      </div>

      {/* SCRIM sutil para legibilidad del texto (lado izquierdo) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(7,10,9,0.60) 0%, rgba(7,10,9,0.28) 38%, rgba(7,10,9,0) 62%)",
        }}
      />

      {/* CONTENIDO */}
      <div className="hero-content relative z-30 flex min-h-[85vh] xl:min-h-screen 2xl:min-h-[85vh] items-center">
        <div className="mx-auto max-w-7xl px-6 w-full py-20 mt-8 xl:mt-10 2xl:mt-14">
          <div style={{ maxWidth: "50rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* EYEBROW */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", width: "fit-content" }}>
              <div
                className="reveal-line"
                style={{
                  height: "1px",
                  width: "5rem",
                  background: "linear-gradient(to right, rgba(230, 224, 224, 0.8), rgba(16, 185, 129, 0.8), transparent)",
                  transformOrigin: "left",
                  opacity: 0,
                }}
              />
              <span
                className="eyebrow-text"
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#10b981",
                  opacity: 0,
                }}
              >
                {eyebrow}
              </span>
            </div>

            {/* TÍTULO CON GLITCH */}
            <div style={{ perspective: "1500px", position: "relative" }}>
              <h1
                className="title-main"
                style={{
                  fontSize: titleFontSize,
                  fontWeight: 700,
                  color: "#ffffff",
                  maxWidth: titleMaxWidth,
                  lineHeight: titleLineHeight,
                  letterSpacing: titleLetterSpacing,
                  margin: 0,
                  textShadow: "0 10px 40px rgba(16, 185, 129, 0.3)",
                  opacity: 0,
                  transform: "perspective(1200px) rotateX(90deg) rotateY(-20deg) translateZ(0)",
                }}
              >
                {title}
              </h1>
              {/* Glitch layer */}
              <h1
                className="title-glitch"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  fontSize: titleFontSize,
                  fontWeight: 700,
                  color: "transparent",
                  background: "linear-gradient(90deg, #10b981, #059669)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  maxWidth: titleMaxWidth,
                  lineHeight: titleLineHeight,
                  letterSpacing: titleLetterSpacing,
                  margin: 0,
                  opacity: 0,
                  clipPath: "inset(0)",
                }}
              >
                {title}
              </h1>
            </div>

            {/* SUBTÍTULO */}
            <p
              className="subtitle-main"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                fontWeight: 400,
                color: "rgba(230, 224, 224, 0.8)",
                maxWidth: "45rem",
                lineHeight: 1.75,
                letterSpacing: "-0.01em",
                margin: 0,
                opacity: 0,
                transform: "translateY(30px)",
              }}
            >
              {subtitle}
            </p>

            {/* BADGES */}
            {badges.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "0.75rem" }}>
                {badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="badge-item"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "9px",
                      border: "1px solid rgba(16, 185, 129, 0.5)",
                      background: "linear-gradient(135deg, rgba(12, 20, 17, 0.92) 0%, rgba(9, 15, 13, 0.92) 100%)",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                      padding: "0.4rem 0.8rem",
                      backdropFilter: "blur(6px)",
                      fontSize: "0.8rem",
                      color: "#ffffff",
                      fontWeight: 600,
                      opacity: 0,
                      transform: "scale(0.8)",
                      willChange: "transform, opacity",
                    }}
                  >
                    {badge.icon}
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* ACCIONES / CTA */}
            {actionsSlot}
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR: slot custom o thumbnails del carrusel */}
      {bottomSlot
        ? bottomSlot
        : useCarousel && activeSlides.length > 1 && (
            <div className="absolute inset-x-0 bottom-4 z-40 flex justify-center px-6 sm:bottom-6 lg:bottom-8">
              <HeroMediaThumbnails
                items={activeSlides.map((slide, index) => ({
                  src: slide.poster,
                  alt: `${thumbnailAlt} ${index + 1}`,
                  label: `${thumbnailLabel} ${index + 1}`,
                }))}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />
            </div>
          )}
    </section>
  );
}

export default HeroImpact;
