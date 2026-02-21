/**client/src/components/paginas/servicios.tsx */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import SEO from "../global/seo";





import {
  ContentSection,
} from "../sections/ServiciosSections";


gsap.registerPlugin(ScrollTrigger);

export default function Inicio() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const responsiveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ScrollTrigger.defaults({
      markers: false,
      scrub: false,
    });

    const ctx = gsap.context(() => {
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
    }, pageRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={pageRef} className="min-h-screen text-white bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
<SEO
          title="Servicios Diseño Web y Branding Lima 2026 | Agencia Zincel"
          description="Diseño web profesional, branding, UI/UX y modelado 3D en Lima. Páginas rápidas que generan +40% leads. Cotiza gratis por WhatsApp desde S/1,500. Agencia local con enfoque en resultados para empresas peruanas."
          keywords="servicios diseño web lima, agencia branding lima, diseño UI UX perú, modelado 3D productos lima, páginas web profesionales lima, desarrollo web san isidro, branding empresarial perú 2026, cotizar página web lima"
          url="https://www.zincelideas.com/servicios"
          image="https://www.zincelideas.com/imagenes-optim/servicios/imagenes/desarrollo-web-1920.avif"
          imageAlt="Agencia de diseño web y branding en Lima Perú - Zincel 2026"
          schema={[
            // Organization (mejorado)
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zincel",
              url: "https://www.zincelideas.com",
              logo: "https://www.zincelideas.com/imagenes-optim/logo-zincel/logo-zincel-white.svg",
              description: "Agencia de diseño web, branding, UI/UX y modelado 3D en Lima, Perú. Creamos experiencias digitales que generan clientes reales.",
              foundingDate: "2025", // Corrige al año real
              founders: [{ "@type": "Person", name: "Kenif Carlos Alejandro Garro" }],
              address: { "@type": "PostalAddress", addressLocality: "Independecia, Lima", addressCountry: "PE" },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+51-933-838-792",
                email: "kenif.alejandro@zincelideas.com",
                availableLanguage: ["es", "en"],
              },
              sameAs: [
                "https://www.facebook.com/zincelideas",
                "https://www.instagram.com/zincelideas",
                "https://www.linkedin.com/company/zincelideas",
                "https://www.behance.net/zincelideas",
                "https://www.tiktok.com/@zincelideas",
              ],
              priceRange: "$$-$$$",
            },
            // WebPage + Breadcrumb
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Servicios - Zincel Ideas",
              url: "https://www.zincelideas.com/servicios",
              description: "Servicios profesionales de diseño web, branding y modelado 3D en Lima, Perú.",
              inLanguage: "es-PE",
              isPartOf: { "@type": "WebSite", name: "Zincel", url: "https://www.zincelideas.com" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.zincelideas.com" },
                  { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.zincelideas.com/servicios" },
                ],
              },
            },
            // Service (agrupado)
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Diseño Web Profesional, Branding, Diseño UI/UX, Modelado 3D",
              provider: { "@type": "Organization", name: "Zincel", url: "https://www.zincelideas.com" },
              areaServed: { "@type": "Place", name: "Lima, Perú" },
              description: "Servicios integrales para empresas en Lima: páginas web optimizadas SEO, identidades visuales potentes y visuales 3D que venden más.",
              offers: {
                "@type": "Offer",
                url: "https://www.zincelideas.com/servicios",
                priceCurrency: "PEN",
                price: "500", // Desde
                priceValidUntil: "2026-12-31",
                eligibleRegion: { "@type": "Country", name: "Perú" },
                availability: "https://schema.org/InStock",
              },
            },
            // FAQPage (agrega valor enorme en 2026)
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuánto cuesta una página web profesional en Lima 2026?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Desde S/500 para sitios básicos hasta S/3,000+ para e-commerce avanzados con SEO y branding incluido. Cotiza gratis por WhatsApp para precio personalizado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto tiempo toma desarrollar un sitio web en Zincel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Proyectos estándar: 4-8 semanas. Incluimos diseño, desarrollo, responsive y optimización inicial SEO.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Hacen branding para pymes en Lima?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, especializamos en branding para pymes y medianas empresas en Lima. Creamos manuales de marca completos desde S/. 100.",
                  },
                },
              ],
            },
          ]}
        />
        {/* ================= DESARROLLO WEB ================= */}
        <section ref={heroRef}>
          <ContentSection
            title="Servicios de Diseño Web en Lima"
            description="Diseñamos páginas web modernas, rápidas y optimizadas para empresas que buscan mejorar su presencia digital y generar más clientes en Lima, Perú."
            reverse={false}
            buttonText="💻 Diseñamos tu página web"
            buttonLink="servicios/desarrollo-web"
             imageElement={
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 0.9 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex items-center justify-center  w-full"
  >
    <motion.div
      animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="absolute  inset-0 rounded-full  blur-3xl" />
      <div className="relative flex h-100 w-100 items-center justify-center rounded-full  bg-gradient-to-br from-gray-900 to-gray-900 backdrop-blur-sm">
        <span className="text-9xl ">💻</span>
      </div>
    </motion.div>
  </motion.div>
  
}
/>

        </section>

        {/* ================= BRANDING ================= */}
        <section>
          <ContentSection
            title="Servicios de Branding en Lima"
            description="Creamos identidades de marca profesionales para empresas  que buscan diferenciarse y conectar con su público en Perú."
            reverse={true}
            buttonText="🎨 Creamos tu marca"
            buttonLink="servicios/branding"
            imageElement={
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 0.9 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex items-center justify-center  w-full"
  >
    <motion.div
      animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="absolute  inset-0 rounded-full  blur-3xl" />
      <div className="relative flex h-100 w-100 items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-gray-900 backdrop-blur-sm">
        <span className="text-9xl ">🖌️</span>
      </div>
    </motion.div>
  </motion.div>
  
}
/>
        </section>
  {/* ================= UI/UX ================= */}
        <section ref={responsiveRef}>
          <ContentSection
            title="Diseño Profesional UI/UX"
            description="Creamos interfaces web intuitivas, modernas y centradas en el usuario que convierten visitantes en clientes leales."
            reverse={false}
             buttonText="🖱️ Más información "
            buttonLink="servicios/diseno-ui-ux"
            imageElement={
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 0.9 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex items-center justify-center  w-full"
  >
    <motion.div
      animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="absolute  inset-0 rounded-full  blur-3xl" />
      <div className="relative flex h-100 w-100 items-center justify-center rounded-full  bg-gradient-to-br from-gray-900 to-gray-900 backdrop-blur-sm">
        <span className="text-9xl ">🖥️</span>
      </div>
    </motion.div>
  </motion.div>
  
}
/>

        </section>
        {/* ================= MODELADO 3D ================= */}
        <section>
          <ContentSection
            title="Servicios de Modelado 3D en Lima"
            description="Creamos modelado y visuales 3D profesionales para empresas que buscan destacar sus productos y mejorar su imagen de marca."
            reverse={true}
            buttonText="🔷 Descubre que podemos modelar en 3d "
            buttonLink="servicios/modelado-3d"
            imageElement={
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 0.9 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex items-center justify-center  w-full"
  >
    <motion.div
      animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="absolute  inset-0 rounded-full  blur-3xl" />
      <div className="relative flex h-100 w-100 items-center justify-center rounded-full  bg-gradient-to-br from-gray-900 to-gray-900 backdrop-blur-sm">
        <span className="text-9xl ">🔷</span>
      </div>
    </motion.div>
  </motion.div>
  
}
/>
        </section>
        
      </div>
      
    </div>
    
  );
}
