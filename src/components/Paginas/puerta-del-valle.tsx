/* client/src/components/paginas/puerta-del-valle.tsx */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PuertaDelValleCarousel } from "../ui/PuertaDelValleCarousel";
import SEO from "../global/seo";
import {
  IntroSection,
  ServicesSection,
  ResultsSection,
} from "../sections/PuertaDelValleSections";

gsap.registerPlugin(ScrollTrigger);

export default function PuertaDelValle() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Solo ejecutamos si estamos en el cliente
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      // Animación fade-in para todas las secciones
      gsap.utils.toArray(".fade-in-section").forEach((section: any) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animación clip-path para imágenes
      gsap.utils.toArray(".image-slice").forEach((slice: any) => {
        gsap.fromTo(
          slice,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slice,
              start: "top 80%",
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
      <>
<SEO
  title="Puerta del Valle | Branding y Diseño Web para Quesos Artesanales Chiquián – Zincel"
  description="Proyecto Puerta del Valle por Zincel: landing page responsiva, branding auténtico andino y modelado 3D para quesos artesanales de Chiquián, Ancash. Tradición peruana en diseño digital premium. Inspírate y cotiza tu marca."
  keywords="Puerta del Valle Zincel, quesos artesanales Chiquián Ancash, branding quesería Perú, diseño web landing page artesanal, modelado 3D productos lácteos, agencia diseño web Lima, proyecto creativo Zincel San Isidro, quesos andinos Perú 2026"
  url="https://www.zincelideas.com/portfolio/puerta-del-valle"
  // Usa la versión grande real (1920 o 1280) que SÍ existe y es accesible
  image="https://www.zincelideas.com/imagenes-optim/Hero/puerta-del-valle/puerta-del-valle-hero-1920.webp"
  // Fallback seguro: si no tienes -1920.webp, usa .avif o .jpg
  // image="https://www.zincelideas.com/imagenes-optim/Hero/puerta-del-valle/puerta-del-valle-hero-1920.avif"
  imageAlt="Hero del proyecto Puerta del Valle: branding y landing page para quesos artesanales andinos por Zincel, Lima Perú"
  schema={[
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://www.zincelideas.com/portfolio/puerta-del-valle#creativework",
      name: "Puerta del Valle – Quesos Artesanales de Chiquián",
      headline: "Branding, Diseño Web y Modelado 3D para Marca Andina",
      url: "https://www.zincelideas.com/portfolio/puerta-del-valle",
      description: "Proyecto conceptual de Zincel: landing page responsiva, identidad visual inspirada en los Andes peruanos y modelado 3D realista para quesos artesanales de Chiquián, Ancash. Combina tradición, autenticidad y diseño digital premium.",
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
          url: "https://www.zincelideas.com/imagenes-optim/Hero/puerta-del-valle/puerta-del-valle-hero-1920.webp",
          width: 1920,
          height: 1080,
          caption: "Imagen principal del proyecto Puerta del Valle – Diseño web y branding por Zincel"
        },
        // Puedes agregar más imágenes del proyecto aquí (mockups, proceso, etc.)
      ],
      inLanguage: "es-PE",
      datePublished: "2025-07-15",
      dateCreated: "2025-07-01",
      keywords: "quesos artesanales Chiquián, branding andino Perú, diseño web Ancash, modelado 3D alimentos, landing page artesanal",
      genre: "Diseño Digital / Branding / Case Study / Portfolio"
    },
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
      description: "Estudio creativo en San Isidro, Lima especializado en diseño web, branding y modelado 3D para marcas peruanas.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lima",
        addressCountry: "PE"
      },
      geo: { "@type": "GeoCoordinates", latitude: -12.0464, longitude: -77.0428 },
      telephone: "+51 933 838 792",
      email: "kenif.alejandro@zincelideas.com",
      sameAs: [
        "https://www.facebook.com/zincelideas",
        "https://www.instagram.com/zincelideas",
        "https://www.linkedin.com/company/zincelideas",
        "https://www.behance.net/zincelideas",
        "https://www.tiktok.com/@zincelideas"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.zincelideas.com" },
        { "@type": "ListItem", position: 2, name: "Portafolio", item: "https://www.zincelideas.com/portfolio" },
        { "@type": "ListItem", position: 3, name: "Puerta del Valle", item: "https://www.zincelideas.com/portfolio/puerta-del-valle" }
      ]
    }
  ]}
/>

    <div ref={mainRef} className="min-h-screen bg-[#faf8f5]">
      <div className="dark-image">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Cada sección lleva la clase fade-in-section */}
          <section className="fade-in-section mb-32">
            <IntroSection />
          </section>

          <section className="fade-in-section mb-32">
            <ServicesSection />
          </section>

          {/* ================= CAROUSEL ================= */}
          <section id="carrusel">
            <PuertaDelValleCarousel />
          </section>

          <section className="fade-in-section">
            <ResultsSection />
          </section>
        </div>
      </div>

      {/* Solo para depurar: si ves este texto, el componente sí se está renderizando */}
      {/* <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded">
        Componente cargado
      </div> */}
    </div>
     </>
  );
}
