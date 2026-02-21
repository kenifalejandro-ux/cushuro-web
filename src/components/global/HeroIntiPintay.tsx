import { useEffect, useRef, useState } from "react";
import { VideoPreview } from "../ui/VideoPreview";
import { useVideoInView } from "../ui/useVideoInView";

export default function HeroIntiPintay() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  // ============================
  // GLOW QUE SIGUE EL MOUSE
  // ============================
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      setGlowPosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ============================
  // Reproducir video solo cuando entra en viewport
  // ============================
  useVideoInView(videoRef);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* ================= VIDEO OPTIMIZADO ================= */}
      <VideoPreview
        ref={videoRef}
        src="/videos-optim/hero/inti-pintay/inti-pintay.mp4"
        poster="/videos-optim/trabajos/inti-pintay-poster.avif"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Glow dinámico */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(
            600px at ${glowPosition.x}% ${glowPosition.y}%,
            rgba(227, 231, 19, 0.18),
            transparent 70%
          )`,
        }}
      />

      {/* ================= CONTENIDO ================= */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-xs tracking-[0.35em] uppercase text-white/60">
              Proyecto Arquitectónico
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-white">
              Inti Pintay
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-white/70 leading-relaxed">
              Diseño, concepto y ejecución visual.  
              Una experiencia natural pensada para perdurar.
            </p>

            <div className="pt-6 flex gap-4">
              <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition">
                Ver proyecto
              </button>

              <button className="px-6 py-3 rounded-full border border-white/30 text-white text-sm hover:border-white transition">
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
