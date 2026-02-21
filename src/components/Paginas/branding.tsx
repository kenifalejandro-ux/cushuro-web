import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import {
  Lightbulb,
  Sparkles,
  Palette,
  FileText,
  Layers,
  CheckCircle,
} from "lucide-react";

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

export default function Branding() {
  const [activeStep, setActiveStep] = useState(0);

  const handleWhatsAppClick = (text: string, section: string) => {
    openWhatsApp({
      text,
      section,
      component: "Branding",
    });
  };

  /* ================= SLIDES CARRUSEL ================= */
  const slides: ServiceSlide[] = [
    {
      title: "Branding Profesional",
      description:
        "Creamos marcas que comunican valor, generan confianza y se diferencian en el mercado.",
      icon: "💡",
      buttonText: "Iniciar proyecto de Branding",
      features: [
        "Definición de propósito y valores",
        "Identidad visual coherente",
        "Logotipos memorables",
        "Manual de marca completo",
      ],
    },
    {
      title: "¿Qué es Branding?",
      description:
        "El branding construye la personalidad, tono y percepción de tu marca para conectar con tu público.",
      icon: "✨",
      buttonText: "Mejorar mi marca",
      features: [
        "Construcción de identidad",
        "Experiencia consistente",
        "Conexión emocional",
        "Valor de marca a largo plazo",
      ],
    },
    {
      title: "Beneficios de un buen branding",
      description:
        "Una marca sólida aumenta reconocimiento, lealtad y credibilidad frente a tus clientes.",
      icon: "🚀",
      buttonText: "Quiero estos resultados",
      features: [
        "+ Diferenciación competitiva",
        "+ Reconocimiento instantáneo",
        "+ Confianza del público",
        "+ Valor empresarial",
      ],
    },
  ];

  /* ================= BENEFICIOS ================= */
  const benefits = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Estrategia sólida",
      description: "Definimos propósito, valores y posicionamiento de marca.",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Identidad visual coherente",
      description: "Creamos sistemas visuales consistentes y memorables.",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Diseño de logotipo",
      description: "Logotipos versátiles y atemporales que refuerzan tu marca.",
    },
  ];

  /* ================= SERVICIOS ================= */
  const services = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Estrategia de marca",
      description:
        "Definimos propósito, valores y posicionamiento para construir una base sólida.",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Identidad visual",
      description:
        "Creamos un sistema visual coherente que refleja la esencia de tu marca.",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Diseño de logotipo",
      description:
        "Logotipos memorables, versátiles y atemporales para todos los medios.",
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Manual de marca",
      description:
        "Documentamos normas de uso para asegurar consistencia visual.",
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Sistema escalable",
      description:
        "Marcas preparadas para crecer con nuevos productos y mercados.",
    },
  ];

  /* ================= PROCESO ================= */
  const processSteps = [
    {
      title: "Descubrimiento",
      description: "Analizamos tu negocio, audiencia y competencia.",
    },
    {
      title: "Estrategia",
      description: "Definimos personalidad, tono y posicionamiento.",
    },
    {
      title: "Diseño",
      description: "Creamos identidad visual y logotipo con iteraciones.",
    },
    {
      title: "Entrega",
      description: "Archivos finales y manual de marca listos para usar.",
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

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to("body", {
          background: `linear-gradient(to bottom, 
            hsl(30, 80%, 15%) ${progress * 30}%, 
            hsl(25, 70%, 18%) ${50 + progress * 30}%, 
            hsl(30, 80%, 15%)
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
  title="Branding Empresarial Lima | Identidad Visual y Marca Profesional – Zincel"
  description="Branding en Lima: logos, manuales de marca, papelería y estrategia visual que diferencian tu negocio. Creamos identidades potentes para empresas peruanas. Cotiza ahora."
  keywords="branding lima, diseño identidad visual perú, agencia branding san isidro, manual de marca lima, branding empresarial perú, logo diseño profesional lima, estrategia de marca 2026"
  url="https://www.zincelideas.com/servicios/branding"
  schema={[
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Branding y Diseño de Identidad Visual",
      provider: { "@type": "Organization", "@id": "https://www.zincelideas.com#organization", name: "Zincel" },
      areaServed: { "@type": "Place", name: "Lima, Perú" },
      description: "Creación de identidad de marca completa: logo, paleta de colores, tipografía, manual de marca y aplicaciones visuales para empresas que buscan posicionarse con fuerza.",
      offers: { "@type": "Offer", priceCurrency: "PEN", price: "2500", priceValidUntil: "2026-12-31", url: "https://www.zincelideas.com/servicios/branding" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.zincelideas.com#organization",
      name: "Zincel",
      url: "https://www.zincelideas.com",
      address: { addressLocality: "independecia, Lima", addressCountry: "PE" },
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
        { position: 3, name: "Branding", item: "https://www.zincelideas.com/servicios/branding" }
      ]
    }
  ]}
/>
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white overflow-x-hidden">
      {/* Hero Full Screen */}
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
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
            Branding Profesional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-12 text-xl text-orange-200 md:text-3xl"
          >
            Construimos marcas memorables que conectan y enamoran
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
        backgroundColor="#3b1e00"
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
                <p className="text-xl text-orange-200 lg:text-2xl">{slide.description}</p>

                {slide.features && (
                  <ul className="space-y-4">
                    {slide.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                        className="flex items-center gap-3 text-lg text-orange-300"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-sm">
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
                        "Branding - Carrusel"
                      )
                    }
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-5 text-xl font-semibold transition-all hover:scale-105"
                  >
                    <span className="relative z-10">{slide.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 transition-opacity group-hover:opacity-100" />
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
                  <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl" />
                  <div className="relative flex h-80 w-80 items-center justify-center rounded-full border-4 border-orange-500/30 bg-gradient-to-br from-orange-900/50 to-orange-800/50 backdrop-blur-sm">
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
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Beneficios del Branding
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefit-card bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-3xl p-10 text-center hover:bg-white/10 hover:scale-105 transition-all duration-500"
            >
              <div className="text-orange-400 mb-6 flex justify-center">{b.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{b.title}</h3>
              <p className="text-orange-200 text-lg">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="max-w-7xl mx-auto py-32 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Nuestros Servicios de Branding
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-3xl p-10 flex gap-6 hover:bg-white/10 hover:scale-105 transition-all duration-500"
            >
              <div className="text-orange-400 flex-shrink-0">{s.icon}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-orange-200 text-lg">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso */}
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
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-orange-500/30" />
          <motion.div
            className="absolute left-8 w-1 bg-gradient-to-b from-orange-500 to-orange-600"
            style={{ height: `${((activeStep + 1) / processSteps.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <div className="space-y-20">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step flex gap-10">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-500 ${
                    i <= activeStep
                      ? "bg-orange-600 text-white scale-110"
                      : "bg-white/10 border-2 border-orange-500/30 text-orange-300"
                  }`}
                >
                  {i <= activeStep ? <CheckCircle className="w-8 h-8" /> : <span className="text-2xl font-bold">{i + 1}</span>}
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8 flex-1">
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-orange-200">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl px-8 text-center"
        >
          <h2 className="mb-8 text-5xl font-bold md:text-7xl">
            ¿Listo para una marca que impacte?
          </h2>
          <p className="mb-12 text-2xl text-orange-200">
            Transformemos tu marca en una experiencia inolvidable
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              handleWhatsAppClick(
                "Contactar por WhatsApp",
                "Branding - CTA Final"
              )
            }
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-12 py-6 text-2xl font-semibold shadow-2xl hover:shadow-orange-500/50 transition-all"
          >
            Contactar por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </div>
    </>
  );
}
