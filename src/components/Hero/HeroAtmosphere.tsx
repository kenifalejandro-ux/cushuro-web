/* client/src/components/Hero/HeroAtmosphere.tsx
 * Atmósfera reutilizable de los heros IMPACTO:
 *  - partículas de polvo (contenidas dentro del hero)
 *  - Ken Burns lento sobre el fondo  (anima el elemento con clase .hero-bg)
 *  - luz emergente pulsante          (anima el elemento con clase .light-emerge)
 *
 * El host debe proveer dentro de su <section>:
 *   - un contenedor de fondo con la clase "hero-bg"
 *   - (opcional) una capa con la clase "light-emerge"
 * y pasar aquí el ref de la <section> como scopeRef.
 */

import { gsap } from "gsap";
import { useEffect, type RefObject } from "react";

const ANIMATION_DURATION = 15; // segundos

interface HeroAtmosphereProps {
  scopeRef: RefObject<HTMLElement | null>;
  /** Mostrar partículas de polvo. */
  showParticles?: boolean;
  /** Número de partículas. */
  particleCount?: number;
  /** z-index del contenedor de partículas (subir si hay capas densas encima del fondo). */
  particlesZIndex?: number;
}

export function HeroAtmosphere({
  scopeRef,
  showParticles = true,
  particleCount = 15,
  particlesZIndex = 5,
}: HeroAtmosphereProps) {
  // Partículas (contenidas dentro del hero)
  useEffect(() => {
    if (!showParticles) return;
    const container = scopeRef.current?.querySelector(".particles-container");
    if (!container) return;

    const created: HTMLDivElement[] = [];
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 4 + 1;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 12;
      const delay = Math.random() * 5;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.8), rgba(16, 185, 129, 0));
        border-radius: 50%;
        left: ${left}%;
        bottom: -50px;
        box-shadow: 0 0 ${size * 2}px rgba(16, 185, 129, 0.6);
        pointer-events: none;
        animation: hero-particles-float ${duration}s infinite ease-in;
        animation-delay: ${delay}s;
      `;

      container.appendChild(particle);
      created.push(particle);
    }

    return () => {
      created.forEach((p) => p.remove());
    };
  }, [showParticles, particleCount, scopeRef]);

  // Ken Burns + luz emergente (en loop suave con yoyo, no resetea el contenido)
  useEffect(() => {
    if (!scopeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.12, filter: "brightness(0.95) contrast(1.04)" },
        {
          scale: 1,
          filter: "brightness(1.06) contrast(1.06)",
          duration: ANIMATION_DURATION,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      gsap.fromTo(
        ".light-emerge",
        { opacity: 0.3 },
        { opacity: 0.8, duration: 8, ease: "sine.inOut", repeat: -1, yoyo: true }
      );
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef]);

  return (
    <>
      <style>{`
        @keyframes hero-particles-float {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) translateX(50px) rotate(360deg); opacity: 0; }
        }
      `}</style>
      <div
        className="particles-container"
        style={{ position: "absolute", inset: 0, zIndex: particlesZIndex, pointerEvents: "none", overflow: "hidden" }}
      />
    </>
  );
}

export default HeroAtmosphere;
