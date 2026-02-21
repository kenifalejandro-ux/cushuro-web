// client/src/components/Paginas/bkars/bkars.tsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../global/seo";

import {
  ContentSection,
  SplitContent,
  ShowCase,
  CardContents,
  ResultsSection,
} from "../sections/BkarsSection";

gsap.registerPlugin(ScrollTrigger);

export function Bkars() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".garage-fade", {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 80%",
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
     <>
  <SEO
  title="BKARS | Branding y Diseño Web para Taller Automotriz Lima – Zincel"
  description="Proyecto BKARS por Zincel: landing page moderna, branding potente y modelado 3D para taller mecánico automotriz en Lima. Diseño técnico y dinámico que transmite confianza y profesionalismo. Inspírate y cotiza tu marca."
  keywords="BKARS Zincel, taller mecánico Lima, branding automotriz Perú, diseño web taller autos, modelado 3D vehículos, agencia branding San Isidro, landing page mecánica automotriz, proyecto creativo Zincel Lima 2026"
  url="https://www.zincelideas.com/portfolio/bkars"  // Corrige si tu path es /trabajos/bkars
  // Ruta real y accesible (versión grande que existe)
  image="https://www.zincelideas.com/imagenes-optim/trabajos/bkars/logo-bkars/logo-bkars-1920.avif"
  // Alternativa si tienes AVIF grande:
  // image="https://www.zincelideas.com/imagenes-optim/trabajos/bkars/image/bkars-hero-1920.avif"
  imageAlt="Hero del proyecto BKARS: branding y landing page para taller automotriz en Lima, creado por Zincel Perú"
  schema={[
    // CreativeWork principal – el proyecto como entidad rica
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://www.zincelideas.com/portfolio/bkars#creativework",
      name: "BKARS – Taller Automotriz Profesional",
      headline: "Branding, Diseño Web y Modelado 3D para Marca Mecánica en Lima",
      url: "https://www.zincelideas.com/portfolio/bkars",
      description: "Proyecto conceptual desarrollado por Zincel en Lima: landing page responsiva con estética técnica y moderna, identidad visual potente para taller automotriz y modelado 3D detallado de vehículos y piezas. Transmite confianza, precisión y dinamismo en el sector mecánico peruano.",
      author: {
        "@type": "Organization",
        "@id": "https://www.zincelideas.com#organization"
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.zincelideas.com#organization"
      },
      image: [
        {
          "@type": "ImageObject",
          url: "https://www.zincelideas.com/imagenes-optim/trabajos/bkars/logo-bkars/logo-bkars-1920.avif",
          width: 1920,
          height: 1080,
          caption: "Imagen principal del proyecto BKARS – Branding y diseño web para taller automotriz por Zincel"
        }
        // Agrega más si tienes (mockup vehículo 3D, dashboard, detalle mecánico, etc.)
      ],
      inLanguage: "es-PE",
      datePublished: "2025-07-10",
      dateCreated: "2025-06-25",
      keywords: "taller mecánico Lima, branding automotriz Perú, diseño web taller autos, modelado 3D mecánica, landing page profesional autos",
      genre: "Diseño Digital / Branding / Case Study / Portafolio Técnico"
    },
    // Organization – consistente y completa
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.zincelideas.com#organization",
      name: "Zincel",
      alternateName: "Zincel Ideas",
      url: "https://www.zincelideas.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.zincelideas.com/imagenes-optim/logo-zincel/logo-zincel-white.svg",
        width: 512,
        height: 512
      },
      description: "Estudio creativo Lima especializado en diseño web profesional, branding empresarial, UI/UX y modelado 3D para marcas peruanas en diversos sectores, incluyendo automotriz.",
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "Kenif Carlos Alejandro Garro"
        }
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: " Lima",
        addressRegion: "Lima",
        addressCountry: "PE"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -12.0464,
        longitude: -77.0428
      },
      telephone: "+51 933 838 792",
      email: "kenif.alejandro@zincelideas.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+51 933 838 792",
        email: "kenif.alejandro@zincelideas.com",
        availableLanguage: ["es", "en"]
      },
      priceRange: "$$-$$$",
      sameAs: [
        "https://www.facebook.com/zincelideas",
        "https://www.instagram.com/zincelideas",
        "https://www.linkedin.com/company/zincelideas",
        "https://www.behance.net/zincelideas",
        "https://www.tiktok.com/@zincelideas"
      ]
    },
    // BreadcrumbList – para navegación y rich results
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://www.zincelideas.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Portafolio",
          item: "https://www.zincelideas.com/portfolio"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BKARS",
          item: "https://www.zincelideas.com/portfolio/bkars"
        }
      ]
    }
  ]}
/>
    <div
      ref={mainRef}
      className="min-h-screen bg-gradient-to-b from-zinc-950 via-neutral-900 to-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <ContentSection />
        <SplitContent />
        <ShowCase />
        <CardContents />
        <ResultsSection />
      </div>
    </div>
    </>
  );
}
export default Bkars;