import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { initSlice } from "@/utils/BkarsGsap";

export default function HeroBkars() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (inView && !isLoaded) {
      initSlice();
      setIsLoaded(true);
    }

    return () => {
      if (window.__bkarsInterval) {
        clearInterval(window.__bkarsInterval);
        window.__bkarsInterval = null;
      }
    };
  }, [inView, isLoaded]);

  useEffect(() => {
    const addPreload = (href: string, type: string, priority?: "high") => {
      if (document.querySelector(`link[rel="preload"][href="${href}"]`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      link.type = type;
      link.setAttribute("data-preload", "bkars-lcp");
      if (priority) {
        link.setAttribute("fetchpriority", priority);
      }
      document.head.appendChild(link);
    };

    addPreload(
      "/imagenes-optim/trabajos/bkars/slice/motor-1920.avif",
      "image/avif",
      "high"
    );
    addPreload(
      "/imagenes-optim/trabajos/bkars/slice/motor-1920.webp",
      "image/webp"
    );

    return () => {
      document
        .querySelectorAll('link[data-preload="bkars-lcp"]')
        .forEach((el) => el.remove());
    };
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Hero principal Bkars"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* ===== IMAGEN BASE ===== */}
      <div
        className={`
          image-base
          absolute inset-0 z-0
          ${!isLoaded ? "skeleton" : ""}
        `}
        aria-hidden="true"
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="skeleton-slice flex-1 bg-neutral-800 animate-pulse"
                style={{
                  // @ts-ignore
                  "--i": i,
                  "--total-slices": 8,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===== SLICES ANIMADOS (GSAP) ===== */}
      <div
        className="slice-wrapper absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
      />


      {/* ================= OVERLAYS ================= */}
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ===== CONTENIDO HERO ===== */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="service-text max-w-xl text-white">
            <hr className="divider mb-6 w-12 border-white/40" />

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {isLoaded
                ? ""
                : "Cargando experiencia…"}
            </h1>

            <p className="mt-6 text-lg text-white/80">
              {isLoaded
                ? "Servicios automotrices de alto nivel con tecnología avanzada y procesos de precisión."
                : "Preparando animaciones y contenido visual."}
            </p>

            <hr className="divider my-8 w-12 border-white/40" />

            <a
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-full border bg-amber-600 border-white/30 px-6 py-3 text-sm uppercase tracking-wide transition hover:bg-amber-700 hover:text-white"
              aria-label="Ir a servicios Bkars"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
