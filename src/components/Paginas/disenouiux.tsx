import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import SEO from "../global/seo";

import {
  Users,
  TrendingUp,
  Award,
  Search,
  Layout,
  Monitor,
  Smartphone,
  LayoutDashboard,
  Box,
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

export default function DisenoUIUX() {
  const [activeStep, setActiveStep] = useState(0);

  const handleWhatsAppClick = (text: string, section: string) => {
    openWhatsApp({
      text,
      section,
      component: "DisenoUIUX",
    });
  };

  // Slides para el carousel horizontal (3 slides impactantes)
  const slides: ServiceSlide[] = [
    {
      title: "Diseño UI/UX Profesional",
      description:
        "Creamos interfaces intuitivas, modernas y centradas en el usuario que convierten visitantes en clientes leales.",
      icon: "🎨",
      buttonText: "Iniciar proyecto UI/UX",
      features: [
        "Investigación de usuarios",
        "Wireframes interactivos",
        "Diseños de alta fidelidad",
        "Prototipado clickable",
      ],
    },
    {
      title: "¿Qué es el diseño UI/UX?",
      description:
        "UI es la apariencia visual. UX es la experiencia completa. Juntos crean productos digitales que las personas aman usar.",
      icon: "✨",
      buttonText: "Mejorar mi producto",
      features: [
        "Usabilidad intuitiva",
        "Flujos optimizados",
        "Diseño emocional",
        "Accesibilidad incluida",
      ],
    },
    {
      title: "Beneficios del buen diseño",
      description:
        "Un gran diseño aumenta la retención, mejora conversiones y fortalece tu marca en un mercado competitivo.",
      icon: "🚀",
      buttonText: "Quiero esos resultados",
      features: [
        "+ Participación usuario",
        "+ Tasas de conversión",
        "+ Credibilidad de marca",
        "+ Ventaja competitiva",
      ],
    },
  ];

  // Datos de las secciones (tus datos originales)
  const benefits = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Mayor participación del usuario",
      description: "Los diseños y flujos intuitivos mantienen a sus usuarios activos y conectados.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Tasas de conversión más altas",
      description: "Las decisiones centradas en el usuario generan más registros y ventas.",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Marca más fuerte",
      description: "Interfaces limpias y consistentes refuerzan la credibilidad.",
    },
  ];

  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Investigación y análisis de usuarios",
      description: "Comprendemos comportamientos, necesidades y motivaciones.",
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "Wireframes y prototipos",
      description: "Estructuras y flujos interactivos antes del desarrollo.",
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Diseño UI/UX web",
      description: "Interfaces modernas y responsivas orientadas a conversión.",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "UI/UX para apps móviles",
      description: "Diseños intuitivos para Android y iOS.",
    },
    {
      icon: <LayoutDashboard className="w-12 h-12" />,
      title: "Dashboards y SaaS",
      description: "Paneles claros, eficientes y escalables.",
    },
    {
      icon: <Box className="w-12 h-12" />,
      title: "Sistemas de diseño",
      description: "Componentes reutilizables y consistencia visual.",
    },
  ];

  const processSteps = [
    { title: "Descubrimiento", description: "Análisis de objetivos, usuarios y producto." },
    { title: "UX & Wireframes", description: "Arquitectura, flujos y estructura." },
    { title: "Diseño UI", description: "Interfaces visuales de alta fidelidad." },
    { title: "Entrega", description: "Activos finales y soporte continuo." },
  ];

  // Progreso del timeline
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

  // Animaciones GSAP
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

    // Cambio de fondo suave al scroll
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to("body", {
          background: `linear-gradient(to bottom, 
            hsl(200, 70%, 8%) ${progress * 30}%, 
            hsl(170, 80%, 12%) ${50 + progress * 30}%, 
            hsl(200, 70%, 8%)
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
  title="Diseño UI/UX Lima | Interfaces Intuitivas y Experiencias que Convierten – Zincel"
  description="Diseño UI/UX profesional en Lima: interfaces modernas, usables y centradas en el usuario que aumentan conversiones. Proyectos para apps y webs. Cotiza por WhatsApp."
  keywords="diseño ui ux lima, diseño interfaces usuario perú, ux design san isidro, diseño experiencia usuario lima, agencia ui ux perú, diseño app móvil lima, cotizar diseño ui ux 2026"
  url="https://www.zincelideas.com/servicios/diseno-ui-ux"
  schema={[
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Diseño UI/UX",
      provider: { "@type": "Organization", "@id": "https://www.zincelideas.com#organization", name: "Zincel" },
      areaServed: { "@type": "Place", name: "Lima, Perú" },
      description: "Diseño de interfaces de usuario (UI) y experiencia de usuario (UX) intuitivas, modernas y orientadas a conversión para sitios web, aplicaciones y productos digitales.",
      offers: { "@type": "Offer", priceCurrency: "PEN", price: "2000", priceValidUntil: "2026-12-31", url: "https://www.zincelideas.com/servicios/diseno-ui-ux" }
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
        { position: 3, name: "Diseño UI/UX", item: "https://www.zincelideas.com/servicios/diseno-ui-ux" }
      ]
    }
  ]}
/>
    <div className=" min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Full Screen */}
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
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
            Diseño UI/UX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-12 text-xl text-cyan-200 md:text-3xl"
          >
            Experiencias digitales que convierten y enamoran
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
                <p className="text-xl text-cyan-200 lg:text-2xl">{slide.description}</p>

                {slide.features && (
                  <ul className="space-y-4">
                    {slide.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                        className="flex items-center gap-3 text-lg text-cyan-300"
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
                        "DisenoUIUX - Carrusel"
                      )
                    }
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-teal-600 px-10 py-5 text-xl font-semibold transition-all hover:scale-105"
                  >
                    <span className="relative z-10">{slide.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
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
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />
                  <div className="relative flex h-80 w-80 items-center justify-center rounded-full border-4 border-cyan-500/30 bg-gradient-to-br from-cyan-900/50 to-teal-900/50 backdrop-blur-sm">
                    <span className="text-9xl">{slide.icon}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
      />

      {/* Beneficios con iconos */}
      <section className="max-w-7xl mx-auto py-32 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Beneficios del diseño UI/UX
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
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Nuestros Servicios UI/UX
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
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Nuestro Proceso
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-cyan-500/30" />
          <motion.div
            className="absolute left-8 w-1 bg-gradient-to-b from-cyan-500 to-teal-500"
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl px-8 text-center"
        >
          <h2 className="mb-8 text-5xl font-bold md:text-7xl">
            ¿Listo para un diseño que impacte?
          </h2>
          <p className="mb-12 text-2xl text-cyan-200">
            Transformemos tu producto en una experiencia inolvidable
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              handleWhatsAppClick(
                "Contactar por WhatsApp",
                "DisenoUIUX - CTA Final"
              )
            }
            className="rounded-full bg-gradient-to-r from-cyan-500 to-teal-600 px-12 py-6 text-2xl font-semibold shadow-2xl hover:shadow-cyan-500/50 transition-all"
          >
            Contactar por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </div>
    </>
  );
}
