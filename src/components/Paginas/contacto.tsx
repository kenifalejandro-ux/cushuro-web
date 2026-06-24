/**client/src/components/Paginas/contacto.tsx */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { lazy, Suspense } from "react";

/** componente MAP */
import { LazyOnView, } from "../ui/LazyOnView";
import { type CompanyLocationItem } from "../sections/CompanyLocationMap";
import {
  Envelope,
  MapPin,
  Buildings,
  ArrowUpRight,
  CheckCircle,
  ChatCircle,
  Factory,
} from "@phosphor-icons/react";
import PageSEO from "../global/PageSEO";
import { ImageStack } from "../ui/ImageStack";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

const CONTACT_EMAIL = "administracion@cushuro.pe";
const WHATSAPP_LABEL = "+51 986 671 128";
const WHATSAPP_URL = "https://wa.me/51986671128";

const LazyCompanyMapHybrid = lazy(() => import("../ui/CompanyMapHybrid"));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const copy = useLocalizedContent({
    es: {
      hero: {
        eyebrow: "División Minera No Metálica",
        title: "Contacto Comercial",
        description:
          "Atendemos requerimientos de cotización y abastecimiento para Óxido de Calcio, Cal Hidratada, Cal Agrícola y Piedra Caliza con enfoque técnico, continuidad operativa y atención comercial directa.",
      },
      imageAlt: "Producción industrial de óxido de calcio",
      highlights: [
        "Producción continua para requerimientos industriales",
        "900 TM diarias de capacidad estimada",
        "Registro vigente en Bienes Fiscalizados",
        "Facturación electrónica – RUC 20482610944",
      ],
      channelsTitle: "Canales de atención",
      emailLabel: "Correo corporativo",
      whatsappLabelTitle: "WhatsApp comercial",
      whatsappMessage:
        "Hola, deseo información comercial sobre sus productos (óxido de calcio, cal hidratada, cal agrícola y piedra caliza).",
      companyLabel: "Razón social",
      companyName: "Empresa de Transportes y Servicios Santa Isabel de Cushuro S.A.C.",
      officeLabel: "Oficina",
      officeAddress: "Av. Vía Aviación Oeste N°155 – Huamachuco, La Libertad",
      plantLabel: "Planta",
      plantAddress: "Centro de Producción Cas. Rodeopampa – Marcabal",
      map: {
        title: "Ubicación de nuestras plantas",
        subtitle: "Conoce nuestras sedes operativas en La Libertad y Cajamarca.",
      },
      locations: [
        {
          id: "cushuro-main-office",
          companyName: "EMPRESA DE TRANSPORTES Y Productos SANTA ISABEL DE CUSHURO S.A.C.",
          city: "Huamachuco, La Libertad",
          address: "AV. VIA DE EVITAMIENTO N°105 - HUAMACHUCO.",
          productionCenter: "CASERIO RODEOPAMPA - MARCABAL - HUAMACHUCO.",
          imageSrc: "/img-servicios/hero/hero-óxido-de-calcio/óxido-de-calcio001",
          imageAlt: "Planta y Compromiso Ambiental Y Social de Calera Cushuro",
          coordinates: [-78.0489, -7.8154] as [number, number],
        },
        {
          id: "bambamarca-plant",
          companyName: "Planta Bambamarca - Santa Isabel de Cushuro",
          city: "Bambamarca, Cajamarca",
          address: "Bambamarca - Cajamarca, Perú.",
          productionCenter: "Zona Industrial Bambamarca.",
          imageSrc: "/img-servicios/hero/hero-óxido-de-calcio/óxido-de-calcio002",
          imageAlt: "Planta de producción en Bambamarca - Cajamarca",
          coordinates: [-78.5213, -6.6828] as [number, number],
        },
      ] satisfies CompanyLocationItem[],
    },
    en: {
      hero: {
        eyebrow: "Non-metallic Mining Division",
        title: "Commercial Contact",
        description:
          "We handle quotation and supply requests for Calcium Oxide, Hydrated Lime, Agricultural Lime, and Limestone with a technical approach, operational continuity, and direct commercial support.",
      },
      imageAlt: "Industrial quicklime production",
      highlights: [
        "Continuous production for industrial requirements",
        "Estimated capacity of 900 TM per day",
        "Current registration in controlled goods",
        "Electronic invoicing – RUC 20482610944",
      ],
      channelsTitle: "Contact channels",
      emailLabel: "Corporate email",
      whatsappLabelTitle: "Commercial WhatsApp",
      whatsappMessage:
        "Hello, I would like commercial information about your products (calcium oxide, hydrated lime, agricultural lime, and limestone).",
      companyLabel: "Corporate name",
      companyName: "Empresa de Transportes y Servicios Santa Isabel de Cushuro S.A.C.",
      officeLabel: "Office",
      officeAddress: "Av. Vía Aviación Oeste N°155 – Huamachuco, La Libertad",
      plantLabel: "Plant",
      plantAddress: "Production Center Cas. Rodeopampa – Marcabal",
      map: {
        title: "Location of our plants",
        subtitle: "Explore our operational sites in La Libertad and Cajamarca.",
      },
      locations: [
        {
          id: "cushuro-main-office",
          companyName: "SANTA ISABEL DE CUSHURO TRANSPORT AND PRODUCTS COMPANY S.A.C.",
          city: "Huamachuco, La Libertad",
          address: "AV. VIA DE EVITAMIENTO N°105 - HUAMACHUCO.",
          productionCenter: "RODEOPAMPA - MARCABAL - HUAMACHUCO PRODUCTION CENTER.",
          imageSrc: "/img-servicios/hero/hero-óxido-de-calcio/óxido-de-calcio001",
          imageAlt: "Cushuro lime plant and environmental-social commitment",
          coordinates: [-78.0489, -7.8154] as [number, number],
        },
        {
          id: "bambamarca-plant",
          companyName: "Bambamarca Plant - Santa Isabel de Cushuro",
          city: "Bambamarca, Cajamarca",
          address: "Bambamarca - Cajamarca, Peru.",
          productionCenter: "Bambamarca Industrial Zone.",
          imageSrc: "/img-servicios/hero/hero-óxido-de-calcio/óxido-de-calcio002",
          imageAlt: "Production plant in Bambamarca - Cajamarca",
          coordinates: [-78.5213, -6.6828] as [number, number],
        },
      ] satisfies CompanyLocationItem[],
    },
  });

  return (
    <div className="light-image bg-white text-zinc-900 selection:bg-[#6db820]/20">
      <PageSEO pageId="contacto" />

      <main>
        <section className=" relative">
          <div className="mx-auto max-w-7xl px-6 pt-36 pb-24 sm:pt-40 sm:pb-28 lg:px-10">
            {/* Encabezado */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mx-auto mb-14 max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-10 bg-[#2d6e1a]" />
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  <Factory size={16} weight="duotone" className="text-[#2d6e1a]" />
                  {copy.hero.eyebrow}
                </span>
                <div className="h-px w-10 bg-[#2d6e1a]" />
              </div>

              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-6xl">
                {copy.hero.title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
                {copy.hero.description}
              </p>
            </motion.div>

            {/* Contenido principal */}
            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              {/* Izquierda */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="space-y-10"
              >
                <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50">
                  <ImageStack
                    layout="inline"
                    images={[
                      {
                        src: "/contacto/imagenes/contacto",
                        alt: copy.imageAlt,
                        priority: true,
                      },
                    ]}
                  />
                </div>

                <div className="space-y-4 border-t border-zinc-200 pt-8">
                  {copy.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="mt-1 shrink-0 text-[#2d6e1a]"
                      />
                      <p className="text-sm leading-7 text-zinc-700 sm:text-[15px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Derecha */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14 }}
                className="flex flex-col justify-start"
              >
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#6db820]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#6db820]">
                    {copy.channelsTitle}
                  </span>
                </div>

                <div className="mt-8 space-y-7">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group flex items-center justify-between gap-4 border-b border-zinc-200 pb-5 text-zinc-900 transition-colors hover:text-[#2d6e1a]"
                  >
                    <div className="flex items-start gap-4">
                      <Envelope
                        size={22}
                        weight="duotone"
                        className="mt-1 shrink-0 text-[#2d6e1a]"
                      />
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                          {copy.emailLabel}
                        </p>
                        <p className="mt-2 text-sm leading-7 sm:text-base">
                          {CONTACT_EMAIL}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#2d6e1a]"
                    />
                  </a>

                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(copy.whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-zinc-200 pb-5 text-zinc-900 transition-colors hover:text-[#2d6e1a]"
                  >
                    <div className="flex items-start gap-4">
                      <ChatCircle
                        size={22}
                        weight="duotone"
                        className="mt-1 shrink-0 text-[#2d6e1a]"
                      />
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                          {copy.whatsappLabelTitle}
                        </p>
                        <p className="mt-2 text-sm leading-7 sm:text-base">
                          {WHATSAPP_LABEL}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#2d6e1a]"
                    />
                  </a>
                </div>

                <div className="mt-10 space-y-8">
                  <div className="flex items-start gap-4">
                    <Buildings
                      size={22}
                      weight="duotone"
                      className="mt-1 shrink-0 text-[#2d6e1a]"
                    />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                        {copy.companyLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-zinc-700 sm:text-[15px]">
                        {copy.companyName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin
                      size={22}
                      weight="duotone"
                      className="mt-1 shrink-0 text-[#2d6e1a]"
                    />
                    <div className="space-y-5">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                          {copy.officeLabel}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-zinc-700 sm:text-[15px]">
                          {copy.officeAddress}
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                          {copy.plantLabel}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-zinc-700 sm:text-[15px]">
                          {copy.plantAddress}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

          
              </motion.div>
            </div>
          </div>
          {/* ================= UBICACIÓN MAPS================= */}

        <LazyOnView minHeight={560}>
          <Suspense fallback={<div className="mt-12 h-[520px] md:h-[640px]" />}>
            <LazyCompanyMapHybrid
              className="mt-12"
              title={copy.map.title}
              subtitle={copy.map.subtitle}
              locations={copy.locations}
              center={[-78.3, -7.2]}
              projectionScale={1300}
              primaryColor="#0e5814"
              mapClassName="h-[70vh] md:h-[80vh]"
            />
          </Suspense>
        </LazyOnView>
        </section>
        
      </main>
    </div>
  );
}
