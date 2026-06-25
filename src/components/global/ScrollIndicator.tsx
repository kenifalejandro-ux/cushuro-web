// client/src/components/global/ScrollIndicator.tsx
import { useEffect, useRef } from "react";

/**
 * Indicador de scroll propio (navy, delgado) que flota sobre el contenido.
 * La barra nativa va oculta en globals.css, así la web ocupa todo el ancho y
 * no queda ningún carril blanco. El thumb solo se ve mientras se hace scroll.
 */
export default function ScrollIndicator({ idleDelay = 800 }: { idleDelay?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const thumb = thumbRef.current;
    if (!container || !thumb) return;

    let idleTimeout: number;
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const scrollTop = window.scrollY;
      const viewport = window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const scrollable = total - viewport;

      // Si no hay nada que scrollear, ocultar.
      if (scrollable <= 0) {
        container.classList.remove("is-scrolling");
        return;
      }

      const thumbHeight = Math.max(40, (viewport / total) * viewport);
      const maxTravel = viewport - thumbHeight;
      const offset = (scrollTop / scrollable) * maxTravel;

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${offset}px)`;
    };

    const onScroll = () => {
      container.classList.add("is-scrolling");
      if (!rafId) rafId = window.requestAnimationFrame(update);
      window.clearTimeout(idleTimeout);
      idleTimeout = window.setTimeout(() => {
        container.classList.remove("is-scrolling");
      }, idleDelay);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.clearTimeout(idleTimeout);
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [idleDelay]);

  return (
    <div ref={containerRef} className="scroll-indicator" aria-hidden="true">
      <div ref={thumbRef} className="scroll-indicator__thumb" />
    </div>
  );
}
