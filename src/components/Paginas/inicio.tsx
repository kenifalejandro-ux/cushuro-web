/**client/src/components/paginas/inicio.tsx */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lazy, Suspense, useEffect, useRef } from "react";

import SEO from "../global/seo";
import IntroConcept from "../sections/InicioSections";
import CarouselText from "../ui/CarouselText";
import CompanyLocationMap, { type CompanyLocationItem } from "../sections/CompanyLocationMap";
import { LazyOnView } from "../ui/LazyOnView";
import Metricas from "@/components/ui/Metricas";
import ServicesGrid from "@/components/ui/ServicesGrid";

const LazyCarouselPlanesWeb = lazy(() =>
  import("../ui/CarouselPlanesWeb").then((m) => ({ default: m.CarouselPlanesWeb }))
);
const LazyPortfolioText = lazy(() => import("../ui/PorfolioText"));

gsap.registerPlugin(ScrollTrigger);

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  locale?: string;
  siteName?: string;
  schema?: object | object[];
  icon: string;
  buttonIcon?: React.ReactNode;
}

const companyLocations: CompanyLocationItem[] = [
  {
    id: "cushuro-main-office",
    companyName: "EMPRESA DE TRANSPORTES Y Productos SANTA ISABEL DE CUSHURO S.A.C.",
    city: "Huamachuco, La Libertad",
    address: "AV. VIA DE EVITAMIENTO N°105 - HUAMACHUCO.",
    productionCenter: "CASERIO RODEOPAMPA - MARCABAL - HUAMACHUCO.",
    imageSrc: "/img-inicio/Productos-inicio/piedra-caliza/piedra-caliza",
    imageAlt: "Planta y operaciones de Calera Cushuro",
    coordinates: [-78.0489, -7.8154],
  },
];

export default function Inicio() {
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
    <div className="min-h-screen   bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SEO
          title="Diseño Web Lima 2026 | Agencia Profesional Páginas Web y Branding – Zincel"
          description="Agencia de diseño web en Lima: páginas rápidas, SEO optimizado y branding que generan +40% más leads. Cotiza gratis por WhatsApp desde S/1,500. Soluciones para empresas en Perú."
          keywords="diseño web lima, agencia diseño web lima, páginas web profesionales lima, diseño web para empresas perú, branding lima, crear página web lima, agencia branding san isidro, diseño web responsivo perú 2026, cotizar web lima"
          url="https://www.zincelideas.com"
          image="https://www.zincelideas.com/imagenes-optim/ImageInicio/build-branding.avif" // Mejor usar hero image real en lugar de logo para social/OG
          imageAlt="Agencia Zincel: diseño web profesional y branding en Lima, Perú 2026"
          schema={{
            "@context": "https://schema.org",
            "@graph": [
              // WebSite
              {
                "@type": "WebSite",
                "@id": "https://www.zincelideas.com#website",
                url: "https://www.zincelideas.com",
                name: "Zincel",
                alternateName: "Zincel Ideas",
                description:
                  "Agencia de diseño web, branding, UI/UX y modelado 3D en Lima, Perú. Creamos sitios profesionales que convierten visitantes en clientes.",
                inLanguage: "es-PE",
                publisher: {
                  "@type": "Organization",
                  "@id": "https://www.zincelideas.com#organization",
                  name: "Zincel",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.zincelideas.com/imagenes-optim/logo-zincel/logo-zincel-black.svg",
                    width: 512,
                    height: 512,
                  },
                },
              },
              // Organization (detallada)
              {
                "@type": "Organization",
                "@id": "https://www.zincelideas.com#organization",
                name: "Zincel",
                url: "https://www.zincelideas.com",
                logo: "https://www.zincelideas.com/imagenes-optim/logo-zincel/logo-zincel-black.svg",
                description:
                  "Estudio creativo en Lima especializado en diseño web profesional, branding empresarial, diseño UI/UX y modelado 3D para empresas peruanas.",
                foundingDate: "2024", // Corrige al año real de fundación
                founders: [
                  {
                    "@type": "Person",
                    name: "Kenif Carlos Alejandro Garro",
                  },
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "San Isidro", // Agrega calle si tienes (mejora local pack)
                  addressLocality: "San Isidro, Lima",
                  addressRegion: "Lima",
                  postalCode: "27", // Ejemplo, ajusta
                  addressCountry: "PE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -12.0464,
                  longitude: -77.0428,
                },
                telephone: "+51 933 838 792",
                email: "hello@zincelideas.com",
                priceRange: "$$-$$$",
                paymentAccepted: ["Transferencia", "Efectivo", "Tarjetas"],
                sameAs: [
                  "https://www.facebook.com/zincelideas",
                  "https://www.instagram.com/zincelideas",
                  "https://www.linkedin.com/company/zincelideas",
                  "https://www.behance.net/zincelideas",
                  "https://www.tiktok.com/@zincelideas",
                ],
              },
              // LocalBusiness (subtype de Organization, clave para local pack en Lima)
              {
                "@type": "LocalBusiness",
                "@id": "https://www.zincelideas.com#localbusiness",
                name: "Zincel - Agencia de Diseño Web y Branding",
                url: "https://www.zincelideas.com",
                telephone: "+51 933 838 792",
                priceRange: "$$-$$$",
                image: "https://www.zincelideas.com/imagenes-optim/ImageInicio/build-branding.avif",
                description:
                  "Agencia local en Lima: diseño de páginas web optimizadas SEO, branding y visuales 3D para empresas que buscan crecer digitalmente en Perú.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "San Isidro, Lima",
                  addressCountry: "PE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -12.0464,
                  longitude: -77.0428,
                },
                openingHoursSpecification: [
                  // Agrega si tienes horario real
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "18:00",
                  },
                ],
                areaServed: {
                  "@type": "Place",
                  name: "Lima, Perú",
                },
              },
              // BreadcrumbList (para homepage)
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.zincelideas.com#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Inicio",
                    item: "https://www.zincelideas.com",
                  },
                ],
              },
              // FAQPage (muy potente en 2026 para snippets y AI answers)
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿Cuánto cuesta una página web profesional en Lima 2026?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Desde S/500 para sitios básicos hasta S/. 3000+ para proyectos con e-commerce, SEO avanzado y branding. Cotiza personalizado por WhatsApp sin costo.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Por qué elegir una agencia de diseño web en Lima como Zincel?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Entendemos el mercado peruano: pagos en soles, entrega rápida, enfoque local (San Isidro, Miraflores, etc.) y optimización para búsquedas en Perú. +40% leads promedio en clientes.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Incluyen SEO en sus diseños web?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sí, todos los sitios incluyen SEO on-page básico + Core Web Vitals optimizados (LCP <2.5s, INP <200ms) para rankear mejor en Google Perú 2026.",
                    },
                  },
                ],
              },
            ],
          }}
        />
        {/* ================= METRICAS ================= */}
        <div className="relative z-30 -mt-16 md:-mt-24 lg:-mt-20">
          <Metricas
            variant="grid"
            estilo="industrial"
            vista="desktop"
            color="#ffffff"
            data={[
              { valor: "15+", etiqueta: "Años de experiencia" },
              { valor: "5", etiqueta: "hornos operativos 24h" },
              { valor: "176 TM", etiqueta: "producción diaria" },
            ]}
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

        <LazyOnView minHeight={560}>
          <CompanyLocationMap
            className="mt-12 pb-20"
            title="Ubicacion de la empresa"
            subtitle="Punto de referencia principal y datos corporativos de CALERA CUSHURO."
            locations={companyLocations}
            center={[-78.0489, -7.8154]}
            projectionScale={1500}
            primaryColor="#0a1f7e"
            mapClassName="h-[520px] md:h-[640px]"
          />
        </LazyOnView>
      </div>
    </div>
  );
}
