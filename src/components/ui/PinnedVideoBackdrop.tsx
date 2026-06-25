/** client/src/components/ui/PinnedVideoBackdrop.tsx */
/** Envuelve varias secciones con un video de fondo "pineado": el video se queda
 *  quieto en pantalla mientras el contenido pasa por encima (efecto prompter).
 *  El recorrido del pin = altoTotal - altoViewport, por eso conviene envolver
 *  contenido más alto que una pantalla (p. ej. dos secciones). */

"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { VideoPreview } from "./VideoPreview";

type PinnedVideoBackdropProps = {
  children: ReactNode;
  src?: string;
  poster?: string;
  /** Opacidad del video (0-100 en clase tailwind ya fija); el overlay café se controla aparte. */
  className?: string;
};

export default function PinnedVideoBackdrop({
  children,
  src = "video/hero/cantera002",
  poster = "img-inicio/hero/cantera002",
  className = "",
}: PinnedVideoBackdropProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  // "Sticky manual": trasladamos la capa de video con el scroll para que se quede
  // pegada al viewport dentro de los límites del wrapper (desktop y móvil). Lo
  // hacemos por JS porque position:sticky se rompe con el overflow-x: clip global
  // de html/body.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const layer = layerRef.current;
    if (!wrapper || !layer) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = wrapper.getBoundingClientRect();
      const max = Math.max(0, wrapper.offsetHeight - window.innerHeight);
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
  }, []);

  return (
    <div ref={wrapperRef} className={`dark-image relative bg-stone-900 ${className}`}>
      <div
        ref={layerRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-screen overflow-hidden will-change-transform"
      >
        <VideoPreview
          src={src}
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          controls={false}
          useInternalOpacity={false}
          deferOnMobileScroll={false}
          placeholderClassName="bg-stone-900"
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 0.5;
          }}
          onPlay={(e) => {
            e.currentTarget.playbackRate = 0.5;
          }}
        />
        {/* Capa café para mantener el tono y el video opaco */}
        <div className="absolute inset-0 bg-stone-900/75" />
      </div>

      {/* Contenido (las secciones) por encima del video */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
