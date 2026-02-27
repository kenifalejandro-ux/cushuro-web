/**client/components/Paginas/la-empresa.tsx */

import SEO from "../global/seo";
import { MiningStats } from "../ui/MiningStats";
import { Mision } from "../ui/Mision";
import Nosotros from "../ui/Nosotros";
import { Vision } from "../ui/Vision";
import Politicas from "../ui/Politicas";
import Objetivos from "../ui/Objetivos";

export default function LaEmpresa() {
  return (
    <>
      <SEO
        title="La Empresa | Agencia Diseño Web y Branding en Lima – Zincel 2026"
        description="Conoce a Zincel: estudio creativo en San Isidro, Lima especializado en diseño web profesional, branding empresarial y modelado 3D. Ayudamos a marcas peruanas a crecer con identidad sólida y presencia digital que genera resultados reales. Cotiza ahora."
        keywords="la empresa Zincel, sobre nosotros Zincel, estudio diseño web Lima, agencia branding Lima Perú, diseño UI UX San Isidro, modelado 3D Lima, equipo creativo digital Perú, Kenif Garro diseñador Lima, agencia creativa San Isidro 2026"
        url="https://www.zincelideas.com/la-empresa"
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
              height: 512,
            },
            description:
              "Estudio creativo ubicado Lima, Perú. Especializados en diseño web profesional, branding empresarial, diseño UI/UX intuitivo y modelado 3D de alta calidad para marcas y empresas que buscan destacar en el mercado digital peruano.",
            foundingDate: "2025", // Ajusta si es diferente
            founders: [
              {
                "@type": "Person",
                name: "Kenif Carlos Alejandro Garro",
                jobTitle: "Fundador y Director Creativo",
                url: "https://www.zincelideas.com/la-empresa#kenif", // Puedes linkear a bio si existe
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Lima", // Agrega calle exacta si quieres más precisión local
              addressLocality: " Lima",
              addressRegion: "Lima",
              postalCode: "051", // Código postal aproximado de San Isidro; ajusta si tienes
              addressCountry: "PE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -12.0464,
              longitude: -77.0428,
            },
            telephone: "+51 933 838 792",
            email: "kenif.alejandro@zincelideas.com",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: "+51 933 838 792",
              email: "kenif.alejandro@zincelideas.com",
              availableLanguage: ["es", "en"],
            },
            priceRange: "$$-$$$",
            sameAs: [
              "https://www.facebook.com/zincelideas",
              "https://www.instagram.com/zincelideas",
              "https://www.linkedin.com/company/zincelideas",
              "https://www.behance.net/zincelideas",
              "https://www.tiktok.com/@zincelideas",
            ],
          },
          // WebPage – para la página específica (mejora contexto)
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "La Empresa - Zincel",
            url: "https://www.zincelideas.com/la-empresa",
            description:
              "Página oficial de 'Quiénes Somos' de Zincel: equipo, misión y valores de nuestro estudio de diseño web y branding en Lima, Perú.",
            inLanguage: "es-PE",
            isPartOf: {
              "@type": "WebSite",
              name: "Zincel",
              url: "https://www.zincelideas.com",
            },
            image:
              "https://www.zincelideas.com/magenes-optim/quienes-somos/imagenes/carrusel/Desktop2.avif",
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.zincelideas.com/magenes-optim/quienes-somos/imagenes/carrusel/Desktop2-1280.avif",
            },
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
                item: "https://www.zincelideas.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "La Empresa",
                item: "https://www.zincelideas.com/la-empresa",
              },
            ],
          },
        ]}
      />

      <div className="relative  bg-gradient-to-b from-white via-blue-50/30  to-white">
             {/* Sección de Estadísticas */}
        <div className="relative z-30 bg-gradient-to-b from-blue-50/20 via-emerald-50/10 to-blue-50/20">

          <MiningStats />
        </div>

        {/* Sección Nosotros */}
        <div className="">
          <Nosotros />
        </div>

        {/* Sección Misión */}
        <div className="-mt-0">
          <Mision />
        </div>

        {/* Sección Visión */}
        <div className="-mt-60">
          <Vision />
        </div>
          {/* Sección Objetivos */}
        <div className="-mt-0">
          <Objetivos />
        </div>
        {/* Sección politicas */}
        <div className="-mt-0">
          <Politicas />
        </div>

      </div>
    </>
  );
}
