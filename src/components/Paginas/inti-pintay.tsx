import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../global/seo";

import {
  ContentSection,
  SplitContent,
  CardContents,
  ShowCase,
  ResultsSection,
} from "../sections/IntiPintaySection";

gsap.registerPlugin(ScrollTrigger);

export default function IntiPintay() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".spirit-fade", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".spirit-fade",
          start: "top 80%",
        },
      });

      gsap.from(".spirit-reveal", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".spirit-reveal",
          start: "top 75%",
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);


return (
  <>
<SEO
  title="Inti Pintay | Branding y Diseño Web para Licores Artesanales Andinos – Zincel"
  description="Proyecto Inti Pintay por Zincel: landing page inmersiva, branding inspirado en la cultura andina y modelado 3D para licores artesanales peruanos. Tradición, misticismo y calidad en diseño digital premium. Cotiza tu marca."
  keywords="Inti Pintay Zincel, licores artesanales Perú, branding andino, diseño web licores Perú, modelado 3D bebidas alcohólicas, agencia branding Lima, cultura andina diseño digital, proyecto creativo Zincel San Isidro 2026"
  url="https://www.zincelideas.com/portfolio/inti-pintay"  // Corrige si tu path es /trabajos/inti-pintay
  // Usa la versión real grande y accesible (evita 404 en OG cards)
  image="https://www.zincelideas.com/imagenes-optim/carrousel/inti-pintay/inti-pintay-1920.avif"
  // Alternativa AVIF si la tienes grande:
  // image="https://www.zincelideas.com/imagenes-optim/trabajos/inti-pintay/image/inti-pintay-hero-1920.avif"
  imageAlt="Hero del proyecto Inti Pintay: branding y landing page para licores artesanales andinos por Zincel, Lima Perú"
  schema={[
    // CreativeWork principal – el proyecto como entidad rica
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://www.zincelideas.com/portfolio/inti-pintay#creativework",
      name: "Inti Pintay – Licores Artesanales Andinos",
      headline: "Branding, Diseño Web y Modelado 3D Inspirado en la Cultura Andina",
      url: "https://www.zincelideas.com/portfolio/inti-pintay",
      description: "Proyecto conceptual de Zincel en Lima: landing page responsiva con estética mística andina, identidad visual poderosa y modelado 3D detallado de botellas y elementos culturales. Celebra la tradición peruana en diseño digital premium.",
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
          url: "https://www.zincelideas.com/imagenes-optim/carrousel/inti-pintay/inti-pintay-1920.avif",
          width: 1920,
          height: 1080,
          caption: "Imagen hero del proyecto Inti Pintay – Branding y diseño web inspirado en la cultura andina por Zincel"
        }
        // Agrega más si tienes (botella 3D, mockup móvil, detalle cultural, etc.)
      ],
      inLanguage: "es-PE",
      datePublished: "2025-07-01",
      dateCreated: "2025-06-20",
      keywords: "licores artesanales Perú, branding andino, diseño web cultura andina, modelado 3D bebidas, landing page artesanal",
      genre: "Diseño Digital / Branding / Case Study / Inspiración Cultural"
    },
    // Organization – consistente y completa en todo el sitio
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.zincelideas.com#organization",
      name: "Zincel",
      alternateName: "Zincel Ideas",
      url: "https://www.zincelideas.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.zincelideas.com/imagenes-optim/meta/logo-zincel-512.webp",
        width: 512,
        height: 512
      },
      description: "Estudio creativo en San Isidro, Lima especializado en diseño web profesional, branding empresarial, UI/UX y modelado 3D para marcas peruanas con enfoque en autenticidad cultural.",
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "Kenif Carlos Alejandro Garro"
        }
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Isidro, Lima",
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
    // BreadcrumbList – estructura clara para rich snippets
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
          name: "Inti Pintay",
          item: "https://www.zincelideas.com/portfolio/inti-pintay"
        }
      ]
    }
  ]}
/>
  <div
    ref={mainRef}
className="min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF]"
  >
    <div className="max-w-7xl mx-auto px-6 py-20">
      <ContentSection />
      <SplitContent />
      <CardContents />
      <ShowCase />
      <ResultsSection />
    </div>
  </div>
   </>
);

}
