/**client/src/components/ui/SnapCarousel.tsx */

"use client";

import React, { createContext, useContext, useRef } from "react";
import { cn } from "./utils";
import SwipeHint from "./SwipeHint";

/**
 * SnapCarousel — carrusel swipe con CSS Scroll Snap, sin JavaScript.
 *
 * Enfoque seguro con variantes `max-*`: tú pasas tu layout de desktop tal cual
 * en `className` (ej. "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8") y
 * el componente SOLO añade el carrusel por debajo de un breakpoint. En desktop
 * ninguna regla del carrusel existe, así que tu grilla queda intacta.
 *
 * `until` controla hasta dónde vive el carrusel:
 *   - "md" (default): carrusel solo en mobile (<768px), 1 card por vista.
 *   - "lg": carrusel en mobile + tablet (<1024px). En tablet muestra 2 cards.
 *
 * Uso:
 *   <SnapCarousel until="lg" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
 *     {items.map((it) => (
 *       <SnapCarouselItem key={it.id} className="...card...">...</SnapCarouselItem>
 *     ))}
 *   </SnapCarousel>
 */

type Breakpoint = "md" | "lg";

const BreakpointCtx = createContext<Breakpoint>("md");

const CONTAINER: Record<Breakpoint, string> = {
  md: "max-md:flex max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:pb-4",
  lg: "max-lg:flex max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:pb-4",
};

const GAP: Record<Breakpoint, string> = {
  md: "max-md:gap-4",
  lg: "max-lg:gap-4",
};

const BLEED: Record<Breakpoint, string> = {
  md: "max-md:-mx-4 max-md:px-4",
  lg: "max-lg:-mx-4 max-lg:px-4",
};

// Ancho de cada card: 1-up en mobile; en "lg" además 2-up en tablet (md..lg).
const ITEM_WIDTH: Record<Breakpoint, string> = {
  md: "max-md:w-[80vw] max-md:max-w-[330px]",
  lg: "max-md:w-[80vw] max-md:max-w-[330px] md:max-lg:w-[46%] md:max-lg:max-w-none",
};

const ITEM_SNAP: Record<Breakpoint, string> = {
  md: "max-md:shrink-0 max-md:snap-center",
  lg: "max-lg:shrink-0 max-lg:snap-center",
};

type SnapCarouselProps = {
  children: React.ReactNode;
  /** Tu layout de desktop tal cual (grid/cols/gap). Se respeta sin tocar. */
  className?: string;
  /** Hasta qué breakpoint vive el carrusel. "md" = solo mobile, "lg" = mobile + tablet. */
  until?: Breakpoint;
  /** Separación entre tarjetas dentro del carrusel. */
  gap?: string;
  /** "Bleed" lateral (pásale el padding de tu sección). `false` para desactivar. */
  bleed?: string | false;
  /** Muestra la pista "Desliza para ver más" en mobile/tablet. Default true. */
  hint?: boolean;
  /** Tono del hint según el fondo de la sección. Default "light". */
  hintTone?: "dark" | "light";
  /** Texto del hint. */
  hintLabel?: string;
};

export const SnapCarousel: React.FC<SnapCarouselProps> = ({
  children,
  className,
  until = "md",
  gap,
  bleed,
  hint = true,
  hintTone = "light",
  hintLabel,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <BreakpointCtx.Provider value={until}>
      <div
        ref={scrollRef}
        className={cn(
          className,
          CONTAINER[until],
          gap ?? GAP[until],
          bleed === false ? "" : (bleed ?? BLEED[until])
        )}
      >
        {children}
      </div>
      {hint ? (
        <SwipeHint
          targetRef={scrollRef}
          until={until}
          tone={hintTone}
          {...(hintLabel ? { label: hintLabel } : {})}
        />
      ) : null}
    </BreakpointCtx.Provider>
  );
};

type SnapCarouselItemProps = {
  children: React.ReactNode;
  /** Clases de la card (las de desktop se respetan; usa `max-*` para mobile/tablet). */
  className?: string;
  /** Ancho de la tarjeta dentro del carrusel (sobreescribe el default del breakpoint). */
  width?: string;
};

export const SnapCarouselItem: React.FC<SnapCarouselItemProps> = ({
  children,
  className,
  width,
}) => {
  const until = useContext(BreakpointCtx);
  return (
    <div className={cn(className, width ?? ITEM_WIDTH[until], ITEM_SNAP[until])}>
      {children}
    </div>
  );
};

export default SnapCarousel;
