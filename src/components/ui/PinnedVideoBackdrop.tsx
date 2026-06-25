/** client/src/components/ui/PinnedVideoBackdrop.tsx */
/** Envuelve varias secciones con un video de fondo fijo: el video se queda quieto
 *  en pantalla mientras el contenido pasa por encima (efecto prompter).
 *
 *  Usamos `position: sticky` (no JS) para que sea perfectamente suave: lo maneja
 *  el compositor del navegador, sincronizado con el scroll, sin temblor. El video
 *  sticky ocupa su 100vh y el contenido se sube con -mt-[100vh] para superponerse.
 *  Requiere que el contenido envuelto sea más alto que una pantalla (por eso se
 *  envuelven dos secciones). */

"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { VideoPreview } from "./VideoPreview";

type PinnedVideoBackdropProps = {
  children: ReactNode;
  src?: string;
  poster?: string;
  className?: string;
};

export default function PinnedVideoBackdrop({
  children,
  src = "video/hero/cantera002",
  poster = "img-inicio/hero/cantera002",
  className = "",
}: PinnedVideoBackdropProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Autoplay robusto en mobile/tablet. El atributo `autoplay` por sí solo no es
  // confiable en móvil (y React no siempre aplica `muted` como propiedad real, lo
  // que hace que el navegador bloquee el autoplay). Forzamos muted + play() por JS,
  // reintentando cuando hay datos y desbloqueando al primer gesto del usuario.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true; // imprescindible para autoplay en móvil
    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay, { once: true });

    // Fallback iOS/algunos Android: desbloquear con el primer gesto.
    const unlock = () => {
      video.muted = true;
      tryPlay();
    };
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("pointerdown", unlock, { once: true, passive: true });

    return () => {
      video.removeEventListener("canplay", tryPlay);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("pointerdown", unlock);
    };
  }, []);

  return (
    <div className={`dark-image relative bg-stone-900 ${className}`}>
      {/* Video de fondo sticky: se queda fijo (suave, compositor-driven) mientras
          el contenido pasa por encima. */}
      <div
        aria-hidden
        className="pointer-events-none sticky top-0 z-0 h-screen overflow-hidden"
      >
        <VideoPreview
          ref={videoRef}
          src={src}
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
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

      {/* Contenido: se sube sobre el video sticky para pasar por encima (prompter). */}
      <div className="relative z-10 -mt-[100vh]">{children}</div>
    </div>
  );
}
