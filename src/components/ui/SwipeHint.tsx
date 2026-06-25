/** client/src/components/ui/SwipeHint.tsx */
/**manos de señalizacion de desliza ver mas */

"use client";

import { HandSwipeRight, ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "./utils";

/**
 * SwipeHint — pista "Desliza para ver más" para carruseles touch.
 *
 * - Solo visible en el rango del carrusel (mobile/tablet); se oculta en `until`+.
 * - Pastilla glass (backdrop-blur) con mano holograma esmeralda animada.
 * - Auto-desaparece al primer scroll del carrusel (vía `targetRef`) y, como
 *   respaldo, a los ~6s.
 */

type SwipeHintProps = {
  /** Ref al contenedor scrollable del carrusel; al deslizarlo, el hint se oculta. */
  targetRef?: React.RefObject<HTMLElement | null>;
  /** Hasta qué breakpoint vive el carrusel (debe coincidir con SnapCarousel). */
  until?: "md" | "lg";
  /** "dark" = sobre fondo oscuro (texto claro). "light" = sobre fondo claro. */
  tone?: "dark" | "light";
  label?: string;
  className?: string;
};

export default function SwipeHint({
  targetRef,
  until = "lg",
  tone = "light",
  label = "Desliza para ver más",
  className,
}: SwipeHintProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = targetRef?.current;
    if (!el) return;
    const dismiss = () => setVisible(false);
    el.addEventListener("scroll", dismiss, { passive: true, once: true });
    return () => el.removeEventListener("scroll", dismiss);
  }, [targetRef]);

  return (
    <div
      aria-hidden
      className={cn(
        // Oculto por defecto; SOLO visible (flex) en el rango del carrusel.
        "pointer-events-none mt-5 hidden justify-center transition-opacity duration-500",
        until === "lg" ? "max-lg:flex" : "max-md:flex",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2.5 rounded-full border px-4 py-2 backdrop-blur-md shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]",
          tone === "dark"
            ? "border-white/20 bg-white/10 text-stone-200"
            : "border-black/10 bg-black/[0.04] text-zinc-600"
        )}
      >
        <motion.span
          animate={{ x: [0, 7, 0] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
          className="flex"
        >
          <HandSwipeRight
            weight="duotone"
            className="h-5 w-5 text-emerald-400 [filter:drop-shadow(0_0_6px_rgba(16,185,129,0.7))]"
          />
        </motion.span>
        <span className="text-[12px] font-medium tracking-wide">{label}</span>
        <ArrowRight weight="bold" className="h-3.5 w-3.5 text-emerald-400" />
      </span>
    </div>
  );
}
