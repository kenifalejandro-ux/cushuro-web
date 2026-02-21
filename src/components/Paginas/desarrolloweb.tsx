import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import SEO from "../global/seo";

import {
  Zap,
  Smartphone,
  Code,
  ShoppingCart,
  FileText,
  Cog,
  Shield,
  CheckCircle,
} from "lucide-react";

import { AdvancedHorizontalCarousel } from "../ui/AdvancedHorizontalCarousel";
import { openWhatsApp } from "@/utils/whatsapp";

interface ServiceSlide {
  title: string;
  description: string;
  icon: string;
  buttonText?: string;
  features?: string[];
}

gsap.registerPlugin(ScrollTrigger);

export default function DesarrolloWeb() {
  const [activeStep, setActiveStep] = useState(0);

  const handleWhatsAppClick = (text: string, section: string) => {
    openWhatsApp({
      text,
      section,
      component: "DesarrolloWeb",
    });
  };

  // Datos del carrusel horizontal (tus 3 slides originales)
  const slides: ServiceSlide[] = [
    {
      title: "Desarrollo web profesional",
      description:
        "Creamos sitios web rápidos, seguros y escalables. Desde webs corporativas hasta aplicaciones complejas, desarrollamos experiencias digitales que generan resultados.",
      icon: "💻",
      buttonText: "Comienza tu proyecto web",
      features: [
        "Diseño responsive",
        "Optimización SEO",
        "Alto rendimiento",
        "Seguridad garantizada",
      ],
    },
    {
      title: "¿Qué es el desarrollo web?",
      description:
        "El desarrollo web es la creación de experiencias digitales donde tu marca conecta con clientes. Diseñamos sitios web seguros, rápidos y orientados a resultados.",
      icon: "🚀",
      buttonText: "Crear mi sitio web",
      features: [
        "Tecnologías modernas",
        "Código limpio",
        "Escalabilidad",
        "Soporte continuo",
      ],
    },
    {
      title: "Beneficios del desarrollo web",
      description:
        "Un sitio web bien desarrollado fortalece tu marca, mejora conversiones y amplía tu alcance digital.",
      icon: "✨",
      buttonText: "Descubre más",
      features: [
        "Mayor visibilidad",
        "Más conversiones",
        "Mejor experiencia",
        "Crecimiento continuo",
      ],
    },
  ];

  // Datos de las nuevas secciones
  const benefits = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Mayor presencia en línea",
      description: "Un sitio web profesional genera credibilidad y confianza.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Alto rendimiento",
      description: "Sitios rápidos mejoran experiencia y conversiones.",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "100% responsive",
      description: "Optimizado para móviles, tablets y escritorio.",
    },
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Desarrollo web personalizado",
      description: "Sitios web hechos a medida alineados a tu marca y objetivos.",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce",
      description: "Tiendas online con pagos seguros y experiencia optimizada.",
    },
    /*i{
      con: <FileText className="w-12 h-12" />,
      title: "CMS (WordPress, etc.)",
      description: "Gestión de contenido fácil y escalable.",
    },*/
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Aplicaciones web",
      description: "Apps web robustas para procesos complejos.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Optimización y mantenimiento",
      description: "Soporte continuo, seguridad y mejoras de rendimiento.",
    },
  ];

  const processSteps = [
    { title: "Consulta", description: "Entendemos objetivos, audiencia y requerimientos." },
    { title: "Planificación y diseño", description: "Definimos arquitectura, UX y estrategia." },
    { title: "Desarrollo y pruebas", description: "Construcción, pruebas y optimización." },
    { title: "Lanzamiento", description: "Publicación, soporte y mejoras continuas." },
  ];

  // Progreso del timeline (tu lógica original)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrolled / h;
      setActiveStep(Math.min(processSteps.length - 1, Math.floor(progress * (processSteps.length + 1))));
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Inicial

    return () => window.removeEventListener("scroll", onScroll);
  }, [processSteps.length]);

  // Animaciones GSAP para secciones (entrada suave + hover)
  useEffect(() => {
    // Animación de tarjetas al entrar en viewport
    gsap.utils.toArray<HTMLElement>(".benefit-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Timeline proceso
    gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Cambio sutil de fondo global con scroll (efecto parallax color)
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to("body", {
          background: `linear-gradient(to bottom, 
            hsl(260, 40%, 8%) ${progress * 30}%, 
            hsl(280, 60%, 12%) ${50 + progress * 30}%, 
            hsl(260, 40%, 8%)
          )`,
          duration: 0.5,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
    <SEO
  title="Desarrollo Web Profesional Lima | Páginas Web Rápidas y SEO – Zincel"
  description="Desarrollo web en Lima: sitios responsivos, rápidos y optimizados SEO que generan leads. Desde landing pages hasta e-commerce. Cotiza gratis por WhatsApp desde S/1,500."
  keywords="desarrollo web lima, páginas web profesionales lima, crear sitio web empresa perú, desarrollo web responsivo lima, agencia desarrollo web san isidro, desarrollo web ecommerce perú, cotizar página web lima 2026"
  url="https://www.zincelideas.com/servicios/desarrollo-web"
  schema={[
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Desarrollo Web Profesional",
      provider: {
        "@type": "Organization",
        "@id": "https://www.zincelideas.com#organization",
        name: "Zincel"
      },
      areaServed: {
        "@type": "Place",
        name: "Lima, Perú"
      },
      description: "Desarrollo de sitios web modernos, responsivos y optimizados para motores de búsqueda. Incluye diseño UI/UX, velocidad Core Web Vitals y SEO on-page para empresas en Lima.",
      offers: {
        "@type": "Offer",
        priceCurrency: "PEN",
        price: "1500",
        priceValidUntil: "2026-12-31",
        url: "https://www.zincelideas.com/servicios/desarrollo-web",
        availability: "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.zincelideas.com#organization",
      name: "Zincel",
      url: "https://www.zincelideas.com",
      logo: "https://www.zincelideas.com/imagenes-optim/logo-zincel/logo-zincel-w.svg",
      address: { addressLocality: "Independencia, Lima", addressCountry: "PE" },
      geo: { latitude: -12.0464, longitude: -77.0428 },
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
        { position: 1, name: "Inicio", item: "https://www.zincelideas.com" },
        { position: 2, name: "Servicios", item: "https://www.zincelideas.com/servicios" },
        { position: 3, name: "Desarrollo Web", item: "https://www.zincelideas.com/servicios/desarrollo-web" }
      ]
    }
  ]}
/>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl px-8 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-8 text-6xl font-bold md:text-8xl"
          >
            Desarrollo Web
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-12 text-xl text-purple-200 md:text-3xl"
          >
            Scroll para explorar nuestros servicios
          </motion.p>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <AdvancedHorizontalCarousel
        slides={slides}
        showProgress={true}
        showIndicators={true}
        backgroundColor="#0f172a"
        renderSlide={(slide, index, isActive) => (
          <div className="flex h-full w-full items-center justify-center px-8 lg:px-16">
            <div className="flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -50 }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-8"
              >
                <h2 className="text-5xl font-bold lg:text-7xl">{slide.title}</h2>
                <p className="text-xl text-purple-200 lg:text-2xl">{slide.description}</p>

                {slide.features && (
                  <ul className="space-y-4">
                    {slide.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                        className="flex items-center gap-3 text-lg text-purple-300"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm">
                          ✓
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                )}

                {slide.buttonText && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    onClick={() =>
                      handleWhatsAppClick(
                        slide.buttonText ?? "CTA Carrusel",
                        "DesarrolloWeb - Carrusel"
                      )
                    }
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 text-xl font-semibold transition-all hover:scale-105"
                  >
                    <span className="relative z-10">{slide.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.button>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="flex flex-1 items-center justify-center"
              >
                <motion.div
                  animate={
                    isActive
                      ? { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />
                  <div className="relative flex h-80 w-80 items-center justify-center rounded-full border-4 border-purple-500/30 bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
                    <span className="text-9xl">{slide.icon}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
      />

      {/* ================= BENEFICIOS ICONOS ================= */}
      <section className="max-w-7xl mx-auto py-32 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Beneficios de tener un sitio web
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefit-card bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-10 text-center hover:bg-white/10 hover:scale-105 transition-all duration-500"
            >
              <div className="text-purple-400 mb-6 flex justify-center">{b.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{b.title}</h3>
              <p className="text-purple-200 text-lg">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}
      <section className="max-w-7xl mx-auto py-32 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-10 flex gap-6 hover:bg-white/10 hover:scale-105 transition-all duration-500"
            >
              <div className="text-purple-400 flex-shrink-0">{s.icon}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-purple-200 text-lg">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESO ================= */}
      <section className="py-32 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Nuestro Proceso
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-purple-500/30" />
          <motion.div
            className="absolute left-8 w-1 bg-gradient-to-b from-purple-500 to-pink-500"
            style={{ height: `${((activeStep + 1) / processSteps.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <div className="space-y-20">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step flex gap-10">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-500 ${
                    i <= activeStep
                      ? "bg-purple-600 text-white scale-110"
                      : "bg-white/10 border-2 border-purple-500/30 text-purple-300"
                  }`}
                >
                  {i <= activeStep ? <CheckCircle className="w-8 h-8" /> : <span className="text-2xl font-bold">{i + 1}</span>}
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 flex-1">
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-purple-200">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Final */}
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl px-8 text-center"
        >
          <h2 className="mb-8 text-5xl font-bold md:text-7xl">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="mb-12 text-2xl text-purple-200">
            Contacta con nosotros y lleva tu presencia digital al siguiente nivel
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              handleWhatsAppClick(
                "Contactar por WhatsApp",
                "DesarrolloWeb - CTA Final"
              )
            }
            className="rounded-full bg-gradient-to-r text-white from-purple-500/20 to-purple-500/20 px-12 py-6 text-2xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Contactar por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </div>
    </>
  );
}
