import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { Box, Camera, Video, Package, Layers3, CheckCircle } from "lucide-react";

import { AdvancedHorizontalCarousel } from "../ui/AdvancedHorizontalCarousel";
import SEO from "../global/seo";
import { openWhatsApp } from "@/utils/whatsapp";

gsap.registerPlugin(ScrollTrigger);

interface ServiceSlide {
  title: string;
  description: string;
  icon: string;
  buttonText?: string;
  features?: string[];
}

export default function Modelado3D() {
  const [activeStep, setActiveStep] = useState(0);

  const handleWhatsAppClick = (text: string, section: string) => {
    openWhatsApp({
      text,
      section,
      component: "Modelado3D",
    });
  };

  /* ================= SLIDES CARRUSEL ================= */
  const slides: ServiceSlide[] = [
    {
      title: "Modelado de Productos 3D",
      description:
        "Creamos modelos 3D precisos para e-commerce, catálogos y presentaciones comerciales.",
      icon: "📦",
      buttonText: "Solicitar Modelado 3D",
      features: [
        "Modelos 3D precisos y realistas",
        "Compatible con campañas y catálogos",
        "Optimizado para visualización online",
        "Entrega de archivos listos para usar",
      ],
    },
    {
      title: "¿Qué es el Modelado 3D?",
      description:
        "El modelado 3D permite representar productos y espacios en tres dimensiones con realismo fotográfico.",
      icon: "📷",
      buttonText: "Ver ejemplos de 3D",
      features: [
        "Visualización detallada de productos",
        "Ideal para marketing y e-commerce",
        "Permite pruebas antes de producción",
        "Aporta imagen premium a tu marca",
      ],
    },
    {
      title: "Beneficios del Modelado 3D",
      description:
        "Aumenta el engagement publicitario, proyecta profesionalismo y permite mostrar productos antes de fabricarlos.",
      icon: "🎥",
      buttonText: "Quiero estos resultados",
      features: [
        "+ Presentación de producto realista",
        "+ Mejora percepción de marca",
        "+ Facilita campañas digitales",
        "+ Optimiza costos y tiempo de producción",
      ],
    },
  ];

  /* ================= BENEFICIOS ================= */
  const benefits = [
    {
      icon: <Box className="w-10 h-10" />,
      title: "Visuales de alta calidad",
      description: "Modelos 3D y renders listos para cualquier presentación.",
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Fotorealismo",
      description: "Renders realistas que transmiten profesionalismo.",
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Animaciones y demos",
      description: "Animaciones que muestran funciones y características de tus productos.",
    },
  ];

  /* ================= SERVICIOS ================= */
  const services = [
    {
      icon: <Package className="w-12 h-12" />,
      title: "Modelado 3D",
      description: "Construimos modelos 3D con precisión técnica y realismo.",
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Renders Publicitarios",
      description: "Imágenes impactantes para campañas, catálogos y redes sociales.",
    },
 

  ];

  /* ================= PROCESO ================= */
  const processSteps = [
    {
      title: "Briefing y Referencias",
      description: "Analizamos tu producto, objetivos y referencias visuales.",
    },
    {
      title: "Modelado 3D",
      description: "Construimos el modelo con precisión y realismo.",
    },
    {
      title: "Texturas e Iluminación",
      description: "Aplicamos materiales y lighting profesional.",
    },
    {
      title: "Render Final",
      description: "Entregamos imágenes o animaciones listas para usar.",
    },
  ];

  /* ================= PROGRESO SCROLL ================= */
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrolled / h;
      setActiveStep(Math.min(processSteps.length - 1, Math.floor(progress * (processSteps.length + 1))));
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [processSteps.length]);

  /* ================= ANIMACIONES GSAP ================= */
  useEffect(() => {
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
          scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
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
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
        }
      );
    });

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
          scrollTrigger: { trigger: step, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
    <SEO
  title="Modelado 3D Lima | Visuales 3D y Renderizado Profesional – Zincel"
  description="Modelado 3D y renderizado de alta calidad en Lima para productos, arquitectura y marketing. Visuales realistas que venden más. Cotiza tu proyecto 3D por WhatsApp."
  keywords="modelado 3d lima, renderizado 3d perú, modelado 3d productos lima, visuales 3d san isidro, agencia modelado 3d perú, render 3d arquitectura lima, cotizar modelado 3d 2026"
  url="https://www.zincelideas.com/servicios/modelado-3d"
  schema={[
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Modelado y Renderizado 3D",
      provider: { "@type": "Organization", "@id": "https://www.zincelideas.com#organization", name: "Zincel" },
      areaServed: { "@type": "Place", name: "Lima, Perú" },
      description: "Modelado 3D profesional, renderizado fotorrealista y animaciones para productos, arquitectura, joyería, alimentos y más. Ideal para e-commerce y marketing digital.",
      offers: { "@type": "Offer", priceCurrency: "PEN", price: "1800", priceValidUntil: "2026-12-31", url: "https://www.zincelideas.com/servicios/modelado-3d" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.zincelideas.com#organization",
      name: "Zincel",
      url: "https://www.zincelideas.com",
      address: { addressLocality: "San Isidro, Lima", addressCountry: "PE" },
      geo: { latitude: -12.0464, longitude: -77.0428 },
      telephone: "+51 933 838 792",
      email: "kenif.alejandro@zincelideas.com",
      sameAs: ["https://www.facebook.com/zincelideas", "https://www.instagram.com/zincelideas", "https://www.linkedin.com/company/zincelideas", "https://www.behance.net/zincelideas", "https://www.tiktok.com/@zincelideas"]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { position: 1, name: "Inicio", item: "https://www.zincelideas.com" },
        { position: 2, name: "Servicios", item: "https://www.zincelideas.com/servicios" },
        { position: 3, name: "Modelado 3D", item: "https://www.zincelideas.com/servicios/modelado-3d" }
      ]
    }
  ]}
/>
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white overflow-x-hidden">
      {/* Hero Full Screen */}
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl px-8 text-center"
        >
          <motion.h1 className="mb-8 text-6xl font-bold md:text-8xl">
            Modelado 3D Profesional
          </motion.h1>
          <motion.p className="mb-12 text-xl text-cyan-200 md:text-3xl">
            Visualiza tus productos y espacios con realismo y detalle
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

      {/* Advanced Horizontal Carousel */}
      <AdvancedHorizontalCarousel
        slides={slides}
        showProgress={true}
        showIndicators={true}
        backgroundColor="#022c3c"
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
                <p className="text-xl text-cyan-200 lg:text-2xl">{slide.description}</p>

                {slide.features && (
                  <ul className="space-y-4">
                    {slide.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                        className="flex items-center gap-3 text-lg text-cyan-200"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-sm">
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
                        "Modelado3D - Carrusel"
                      )
                    }
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-10 py-5 text-xl font-semibold transition-all hover:scale-105"
                  >
                    <span className="relative z-10">{slide.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
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
                  animate={isActive ? { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />
                  <div className="relative flex h-80 w-80 items-center justify-center rounded-full border-4 border-cyan-500/30 bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 backdrop-blur-sm">
                    <span className="text-9xl">{slide.icon}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
      />

      {/* Beneficios */}
      <section className="max-w-7xl mx-auto py-32 px-8">
        <motion.h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          Beneficios del Modelado 3D
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefit-card bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-10 text-center hover:bg-white/10 hover:scale-105 transition-all duration-500"
            >
              <div className="text-cyan-400 mb-6 flex justify-center">{b.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{b.title}</h3>
              <p className="text-cyan-200 text-lg">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="max-w-7xl mx-auto py-32 px-8">
        <motion.h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          Nuestros Servicios de Modelado 3D
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-10 flex gap-6 hover:bg-white/10 hover:scale-105 transition-all duration-500"
            >
              <div className="text-cyan-400 flex-shrink-0">{s.icon}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-cyan-200 text-lg">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="py-32 px-8">
        <motion.h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          Nuestro Proceso
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-cyan-500/30" />
          <motion.div
            className="absolute left-8 w-1 bg-gradient-to-b from-cyan-500 to-cyan-600"
            style={{ height: `${((activeStep + 1) / processSteps.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <div className="space-y-20">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step flex gap-10">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-500 ${
                    i <= activeStep
                      ? "bg-cyan-600 text-white scale-110"
                      : "bg-white/10 border-2 border-cyan-500/30 text-cyan-300"
                  }`}
                >
                  {i <= activeStep ? <CheckCircle className="w-8 h-8" /> : <span className="text-2xl font-bold">{i + 1}</span>}
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 flex-1">
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-cyan-200">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
        <motion.div className="relative z-10 max-w-5xl px-8 text-center">
          <h2 className="mb-8 text-5xl font-bold md:text-7xl">
            ¿Listo para tus visuales 3D?
          </h2>
          <p className="mb-12 text-2xl text-cyan-200">
            Llevemos tus productos y espacios a una experiencia visual impactante
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              handleWhatsAppClick(
                "Contactar por WhatsApp",
                "Modelado3D - CTA Final"
              )
            }
            className="rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-12 py-6 text-2xl font-semibold shadow-2xl hover:shadow-cyan-500/50 transition-all"
          >
            Contactar por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </div>
    </>
  );
}
