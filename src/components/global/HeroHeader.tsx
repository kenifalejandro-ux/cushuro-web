import React, { useEffect, useState, lazy, Suspense, useRef } from "react";
import { useVideoInView } from "../ui/useVideoInView";
import { runWhenIdle } from "@/utils/idle";

// Lazy load de heroes
const HeroInicio = lazy(() => import("./Hero"));
const HeroPortfolio = lazy(() => import("./HeroPortfolio"));
const HeroServicios = lazy(() => import("./HeroServicios"));
const HeroSobreNosotros = lazy(() => import("./HeroSobreNosotros"));
const HeroPuertadelvalle = lazy(() => import("./HeroPuertadelvalle"));
const HeroIntiPintay = lazy(() => import("./HeroIntiPintay"));
const HeroTiestoCoffee = lazy(() => import("./HeroTiestoCoffee"));
const HeroBkars = lazy(() => import("./HeroBkars"));

export type HeroPage =
  | "inicio"
  | "servicios"
  | "portfolio"
  | "sobrenosotros"
  | "puerta-del-valle"
  | "inti-pintay"
  | "tiesto-coffee"
  | "bkars";

type HeroHeaderProps = {
  page: HeroPage;
  showVideo?: boolean;
};

const HeroHeader: React.FC<HeroHeaderProps> = ({ page, showVideo = true }) => {
  const [canRenderVideos, setCanRenderVideos] = useState(false);

  // Lazy load optimizado
  useEffect(() => {
    if (!showVideo) return;
    runWhenIdle(() => setCanRenderVideos(true), 800);
  }, [showVideo]);

  // ============================================
  // Refs para cada mini-video
  // ============================================
  const videoRefs = {
    tiesto: useRef<HTMLVideoElement>(null),
    bkars: useRef<HTMLVideoElement>(null),
    inti: useRef<HTMLVideoElement>(null),
    puerta: useRef<HTMLVideoElement>(null),
  };

  // ============================================
  // Activar autoplay solo cuando cada video entra en viewport
  // ============================================
  Object.values(videoRefs).forEach((ref) => useVideoInView(ref));

  
  return (
    <>
      {/* HERO DINÁMICO */}
      <Suspense fallback={null}>
        {page === "inicio" && <HeroInicio />}
        {page === "servicios" && <HeroServicios />}
        {page === "portfolio" && <HeroPortfolio />}
        {page === "sobrenosotros" && <HeroSobreNosotros />}
        {page === "puerta-del-valle" && <HeroPuertadelvalle />}
        {page === "inti-pintay" && <HeroIntiPintay />}
        {page === "tiesto-coffee" && <HeroTiestoCoffee />}
        {page === "bkars" && <HeroBkars />}
      </Suspense>
    </>
  );
};

export default HeroHeader;
