import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import SEO from "../global/seo";



import AboutConcept, {
  SobreNosotrosSectionAccordion,
} from "../sections/SobreNosotrosSection";


// Registra el plugin
gsap.registerPlugin(ScrollTrigger);

export default function SobreNosotros() {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null); // Scope principal
  const heroRef = useRef<HTMLElement>(null);
  const responsiveRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null); // Si tienes un contenedor flotante
  const heroImageRef = useRef<HTMLImageElement | null>(null);


  // Todas las animaciones dentro de useGSAP
  useGSAP(
    () => {
      // Timeline de entrada que se activa cuando el hero entra en viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%", // Cuando el top del hero llega al 80% del viewport
          end: "bottom top",
          toggleActions: "play none none reverse",
          // markers: true, // Quitar en producción
        },
      });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { y: 30, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          threeContainerRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
          "-=0.8"
        );

      // Animación flotante continua (independiente del scroll)
      gsap.to(threeContainerRef.current, {
        y: -110,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.8,
      });
    },
    { scope: containerRef }
  );

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
useEffect(() => {
  gsap.to(heroImageRef.current, {
    y: -100, // movimiento vertical
    scrollTrigger: {
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}, []);


  
  return (
     <>
<SEO
  title="Sobre Nosotros | Agencia Diseño Web y Branding en Lima – Zincel 2026"
  description="Conoce a Zincel: estudio creativo en San Isidro, Lima especializado en diseño web profesional, branding empresarial y modelado 3D. Ayudamos a marcas peruanas a crecer con identidad sólida y presencia digital que genera resultados reales. Cotiza ahora."
  keywords="sobre nosotros Zincel, estudio diseño web Lima, agencia branding Lima Perú, diseño UI UX San Isidro, modelado 3D Lima, equipo creativo digital Perú, Kenif Garro diseñador Lima, agencia creativa San Isidro 2026"
  url="https://www.zincelideas.com/sobre-nosotros"
  image="https://www.zincelideas.com/imagenes-optim/meta/sobre-nosotros-1920.webp"
  imageAlt="Equipo Zincel: estudio de diseño web, branding y modelado 3D en San Isidro, Lima Perú"
  schema={[
    // Organization – principal y más completo (mejor para Knowledge Graph y local pack)
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.zincelideas.com#organization",
      name: "Zincel",
      alternateName: "Zincel Ideas",
      url: "https://www.zincelideas.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.zincelideas.com/imagenes-optim/logo-zincel/logo-zincel-black.svg",
        width: 512,
        height: 512
      },
      description: "Estudio creativo ubicado Lima, Perú. Especializados en diseño web profesional, branding empresarial, diseño UI/UX intuitivo y modelado 3D de alta calidad para marcas y empresas que buscan destacar en el mercado digital peruano.",
      foundingDate: "2025",  // Ajusta si es diferente
      founders: [
        {
          "@type": "Person",
          name: "Kenif Carlos Alejandro Garro",
          jobTitle: "Fundador y Director Creativo",
          url: "https://www.zincelideas.com/sobre-nosotros#kenif"  // Puedes linkear a bio si existe
        }
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lima",  // Agrega calle exacta si quieres más precisión local
        addressLocality: " Lima",
        addressRegion: "Lima",
        postalCode: "051",  // Código postal aproximado de San Isidro; ajusta si tienes
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
    // WebPage – para la página específica (mejora contexto)
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Sobre Nosotros - Zincel",
      url: "https://www.zincelideas.com/sobre-nosotros",
      description: "Página oficial de 'Quiénes Somos' de Zincel: equipo, misión y valores de nuestro estudio de diseño web y branding en Lima, Perú.",
      inLanguage: "es-PE",
      isPartOf: {
        "@type": "WebSite",
        name: "Zincel",
        url: "https://www.zincelideas.com"
      },
      image: "https://www.zincelideas.com/magenes-optim/quienes-somos/imagenes/carrusel/Desktop2.avif",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.zincelideas.com/magenes-optim/quienes-somos/imagenes/carrusel/Desktop2-1280.avif"
      }
    },
    // BreadcrumbList – esencial para navegación y rich snippets
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
          name: "Sobre Nosotros",
          item: "https://www.zincelideas.com/sobre-nosotros"
        }
      ]
    }
  ]}
/>

  
       <div ref={containerRef} className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
       
               {/* ================= CONTENIDO ================= */}
        <section id="ContentSection">
          <AboutConcept/>
        </section>

        {/* ================= ACORDEON ================= */}
        <section id="sobre-nosotros">
          <SobreNosotrosSectionAccordion />
        </section>

        {/* ================= LAPTOP GLB ================= 
       
    
      <section id="laptop-section" ref={responsiveRef}>
        <LaptopSection />
      </section>
      */}
        </div>
      </div>
    </>
    
  );
}

