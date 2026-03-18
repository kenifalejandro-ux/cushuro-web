import React, { lazy, Suspense, useRef } from "react";

import { useVideoInView } from "../ui/useVideoInView";
import HeroInicio from "../Hero/Hero";

// Lazy load de heroes la empresa
const HeroLaEmpresa = lazy(() => import("../Hero/HeroLaEmpresa"));
// Lazy load de heroes Products
const HeroCalViva = lazy(() => import("../Hero/HeroCalViva"));
const HeroPiedraCaliza = lazy(() => import("../Hero/HeroPiedraCaliza"));
const HeroCalAgricola = lazy(() => import("../Hero/HeroCalAgricola"));
const HeroCarbonAntracita = lazy(() => import("../Hero/HeroCarbonAntracita"));
const HeroCarbonCisco = lazy(() => import("../Hero/HeroCarbonCisco"));
// Lazy load de heroes Services
const HeroTransporteLogistico = lazy(() => import("../Hero/HeroTransporteLogistico"));
const HeroMaquinariaPesada = lazy(() => import("../Hero/HeroMaquinariaPesada"));
// Lazy load de heroes Operaciones
const HeroMedioAmbiente = lazy(() => import("../Hero/HeroMedioAmbiente"));
const HeroResponsabilidadSocial = lazy(() => import("../Hero/HeroResponsabilidadSocial"));


export type HeroPage =
  | "inicio"
  | "cal-viva"
  | "cal-agricola"
  | "piedra-caliza"
  | "carbon-antracita"
  | "carbon-cisco"
  | "la-empresa"
  | "suministro-de-oxido-de-calcio"
  | "transporte-logistico-especializado"
  | "operacion-con-maquinaria-pesada"
  | "medio-ambiente"
  | "responsabilidad-social"

type HeroHeaderProps = {
  page: HeroPage;
  showVideo?: boolean;
};

const HeroHeader: React.FC<HeroHeaderProps> = ({ page, showVideo: _showVideo = true }) => {
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
  useVideoInView(videoRefs.tiesto);
  useVideoInView(videoRefs.bkars);
  useVideoInView(videoRefs.inti);
  useVideoInView(videoRefs.puerta);

  return (
    <>
      {/* HERO DINÁMICO */}
      <Suspense fallback={null}>
        {page === "inicio" && <HeroInicio />}
        {page === "la-empresa" && <HeroLaEmpresa />}
        {page == "cal-viva" && <HeroCalViva/>}
        {page == "cal-agricola" && <HeroCalAgricola/>}
        {page == "piedra-caliza" && <HeroPiedraCaliza/>}
        {page === "carbon-antracita" && <HeroCarbonAntracita />}
        {page === "carbon-cisco" && <HeroCarbonCisco />}
        {page === "transporte-logistico-especializado" && <HeroTransporteLogistico />}
        {page === "operacion-con-maquinaria-pesada" && <HeroMaquinariaPesada />}
        {page === "medio-ambiente" && <HeroMedioAmbiente />}
        {page === "responsabilidad-social" && <HeroResponsabilidadSocial />}

      </Suspense>
    </>
  );
};

export default HeroHeader;
