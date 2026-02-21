/**client/src/components/Paginas/tiesto-coffee.tsx */


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../global/seo";

import {
  StorySection,
  ProcessSection,
  ShowcaseSection,
  ImpactSection,
} from "../sections/TiestoCoffeeSection";

gsap.registerPlugin(ScrollTrigger);

export default function TiestoCoffee() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".coffee-fade", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".coffee-fade",
          start: "top 80%",
        },
      });

      gsap.from(".coffee-slide", {
        x: -80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".coffee-slide",
          start: "top 75%",
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
<SEO
  title="Tiesto Coffee | Branding y Diseño Web para Cafetería Artesanal Perú – Zincel"
  description="Proyecto conceptual tiesto Coffee por Zincel: landing page moderna, branding cálido y modelado 3D inmersivo para una cafetería artesanal en Perú. Diseño que transmite aroma y experiencia. Inspírate y cotiza tu proyecto."
  keywords="tiesto Coffee Zincel, cafetería artesanal Perú, branding café Lima, diseño web landing page cafetería, modelado 3D café, agencia branding San Isidro, portafolio diseño digital Perú 2026, proyecto creativo Zincel Lima"
  url="https://www.zincelideas.com/portfolio/tiesto-coffee"  // Corrige si tu path es /trabajos/tiesto-coffee
  // Imagen real y accesible (usa la versión grande que SÍ existe)
  image="https://www.zincelideas.com/imagenes-optim/Hero/tiesto-coffee/Hero/Hero-tiesto-1920.avif"
  // Alternativa si tienes AVIF grande: 
  // image="https://www.zincelideas.com/imagenes-optim/contactanos/image/tiesto-coffee-hero-1920.avif"
  imageAlt="Hero del proyecto tiesto Coffee: branding y landing page para cafetería artesanal creado por Zincel en Lima, Perú"
  schema={[
    // CreativeWork – el proyecto como entidad principal (mejor para case study individual)
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://www.zincelideas.com/portfolio/tiesto-coffee#creativework",
      name: "tiesto Coffee – Cafetería Artesanal",
      headline: "Branding, Diseño Web y Modelado 3D para Experiencia Cafetera Premium",
      url: "https://www.zincelideas.com/portfolio/tiesto-coffee",
      description: "Proyecto conceptual desarrollado por Zincel en Lima: landing page responsiva con diseño cálido y moderno, identidad de marca artesanal y modelado 3D inmersivo de granos de café y bebidas. Transmite pasión, aroma y calidad para cafeterías peruanas.",
      author: {
        "@type": "Organization",
        "@id": "https://www.zincelideas.com#organization",
        name: "Zincel"
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.zincelideas.com#organization"
      },
      image: [
        {
          "@type": "ImageObject",
          url: "https://www.zincelideas.com/imagenes-optim/Hero/tiesto-coffee/Hero/caramelo-1920.avif",
          width: 1920,
          height: 1080,
          caption: "Imagen principal del proyecto Tiesto Coffee – Branding y diseño web por Zincel"
        }
        // Agrega más si tienes (mockup móvil, 3D grano de café, etc.)
      ],
      inLanguage: "es-PE",
      datePublished: "2025-08-01",
      dateCreated: "2025-07-20",
      keywords: "cafetería artesanal Perú, branding café Lima, diseño web responsivo, modelado 3D alimentos, landing page café",
      genre: "Diseño Digital / Branding / Case Study / Portafolio Creativo"
    },
    // Organization – full y consistente (refuerza E-E-A-T en todo el sitio)
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
      description: "Estudio creativo Lima especializado en diseño web profesional, branding empresarial, UI/UX intuitivo y modelado 3D para marcas peruanas.",
      foundingDate: "2025",
      founders: [
        {
          "@type": "Person",
          name: "Kenif Carlos Alejandro Garro"
        }
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lima",
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
    // BreadcrumbList – navegación clara y rich snippets
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
          name: "tiesto Coffee",
          item: "https://www.zincelideas.com/portfolio/tiesto-coffee"
        }
      ]
    }
  ]}
/>
    <div
      ref={mainRef}
      className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-800"
    >

      <div className="max-w-7xl mx-auto px-6 py-20">
        <StorySection />
        <ProcessSection />
        <ShowcaseSection />
        <ImpactSection />
      </div>
    </div>
     </>
  );
}
