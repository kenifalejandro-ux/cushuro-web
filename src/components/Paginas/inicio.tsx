/**client/src/components/paginas/inicio.tsx */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lazy, Suspense, useEffect, useRef } from "react";

import PageSEO from "../global/PageSEO";
import { type CompanyLocationItem } from "../sections/CompanyLocationMap";
import IntroConcept from "../sections/InicioSections";
import CarouselText from "../ui/CarouselText";
import { LazyOnView } from "../ui/LazyOnView";
import Metricas from "@/components/ui/Metricas";
import ServicesGrid from "@/components/ui/ServicesGrid";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

const LazyCarouselPlanesWeb = lazy(() =>
  import("../ui/CarouselPlanesWeb").then((m) => ({ default: m.CarouselPlanesWeb }))
);
const LazyPortfolioText = lazy(() => import("../ui/PorfolioText"));
const LazyCompanyMapHybrid = lazy(() => import("../ui/CompanyMapHybrid"));

gsap.registerPlugin(ScrollTrigger);

export default function Inicio() {
  const copy = useLocalizedContent({
    es: {
      metrics: [
        { valor: "15+", etiqueta: "Años de experiencia" },
        { valor: "5", etiqueta: "Hornos operativos 24/7" },
        { valor: "176 TM", etiqueta: "Capacidad diaria" },
      ],
      map: {
        title: "Ubicación de nuestras plantas",
        subtitle: "Conoce nuestras sedes operativas en La Libertad y Cajamarca.",
      },
      locations: [
        {
          id: "cushuro-main-office",
          companyName: "EMPRESA DE TRANSPORTES Y Productos SANTA ISABEL DE CUSHURO S.A.C.",
          city: "Huamachuco, La Libertad",
          address: "AV. VIA DE EVITAMIENTO N°105 - HUAMACHUCO.",
          productionCenter: "CASERIO RODEOPAMPA - MARCABAL - HUAMACHUCO.",
          imageSrc: "/img-servicios/hero/hero-oxido-de-calcio/oxido-de-calcio001",
          imageAlt: "Planta y Compromiso Ambiental Y Social de Calera Cushuro",
          coordinates: [-78.0489, -7.8154] as [number, number],
        },
        {
          id: "bambamarca-plant",
          companyName: "Planta Bambamarca - Santa Isabel de Cushuro",
          city: "Bambamarca, Cajamarca",
          address: "Bambamarca - Cajamarca, Perú.",
          productionCenter: "Zona Industrial Bambamarca.",
          imageSrc: "/img-servicios/hero/hero-oxido-de-calcio/oxido-de-calcio002",
          imageAlt: "Planta de producción en Bambamarca - Cajamarca",
          coordinates: [-78.5213, -6.6828] as [number, number],
        },
      ] satisfies CompanyLocationItem[],
    },
    en: {
      metrics: [
        { valor: "15+", etiqueta: "Years of experience" },
        { valor: "5", etiqueta: "24/7 operating kilns" },
        { valor: "176 TM", etiqueta: "Daily capacity" },
      ],
      map: {
        title: "Location of our plants",
        subtitle: "Explore our operational sites in La Libertad and Cajamarca.",
      },
      locations: [
        {
          id: "cushuro-main-office",
          companyName: "SANTA ISABEL DE CUSHURO TRANSPORT AND PRODUCTS COMPANY S.A.C.",
          city: "Huamachuco, La Libertad",
          address: "AV. VIA DE EVITAMIENTO N°105 - HUAMACHUCO.",
          productionCenter: "RODEOPAMPA - MARCABAL - HUAMACHUCO PRODUCTION CENTER.",
          imageSrc: "/img-servicios/hero/hero-oxido-de-calcio/oxido-de-calcio001",
          imageAlt: "Cushuro lime plant and environmental-social commitment",
          coordinates: [-78.0489, -7.8154] as [number, number],
        },
        {
          id: "bambamarca-plant",
          companyName: "Bambamarca Plant - Santa Isabel de Cushuro",
          city: "Bambamarca, Cajamarca",
          address: "Bambamarca - Cajamarca, Peru.",
          productionCenter: "Bambamarca Industrial Zone.",
          imageSrc: "/img-servicios/hero/hero-oxido-de-calcio/oxido-de-calcio002",
          imageAlt: "Production plant in Bambamarca - Cajamarca",
          coordinates: [-78.5213, -6.6828] as [number, number],
        },
      ] satisfies CompanyLocationItem[],
    },
  });

  const heroRef = useRef<HTMLDivElement | null>(null);
  const responsiveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ScrollTrigger.defaults({
      markers: false,
      scrub: false,
    });

    // HERO animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // RESPONSIVE section animation
    if (responsiveRef.current) {
      gsap.fromTo(
        responsiveRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: responsiveRef.current,
            start: "top 80%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <PageSEO pageId="inicio" />
        {/* ================= METRICAS ================= */}
        <div className="relative z-30 -mt-4 md:-mt-6 lg:-mt-8">
          <Metricas
            variant="grid"
            estilo="moderno"
            vista="desktop"
            color="#111111"
            data={copy.metrics}
          />
        </div>
        {/* ================= CONTENIDO ================= */}
        <section id="IntroConcept">
          <IntroConcept />
        </section>

        {/* ================= Productos GRID ================= */}
        <ServicesGrid />

        {/* ================= CARRUSEL TEXT ================= */}
        <LazyOnView minHeight={240}>
          <Suspense fallback={<div className="h-[240px]" />}>
            <CarouselText />
          </Suspense>
        </LazyOnView>
        {/* ================= UBICACIÓN MAPS================= */}

        <LazyOnView minHeight={560}>
          <Suspense fallback={<div className="mt-12 h-[520px] md:h-[640px]" />}>
            <LazyCompanyMapHybrid
              className="mt-12 pb-20"
              title={copy.map.title}
              subtitle={copy.map.subtitle}
              locations={copy.locations}
              center={[-78.3, -7.2]}
              projectionScale={1300}
              primaryColor="#0e5814"
              mapClassName="h-[520px] md:h-[640px]"
            />
          </Suspense>
        </LazyOnView>
      </div>
    </div>
  );
}
