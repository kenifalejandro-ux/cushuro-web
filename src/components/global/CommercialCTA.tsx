/** client/src/components/global/ComercialCTA.tsx */

import { ArrowRight, Check } from "lucide-react";
import { ChatCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

type Stat = { value: string; label: string };

type CommercialCTAProps = {
  title: string;
  description: string;
  /** Checklist de capacidades (recomendado: 4 ítems). */
  highlights: string[];
  whatsappMessage: string;
  /** Indicadores operativos (recomendado: 3). Si no se pasan, usa los por defecto. */
  stats?: Stat[];
};

const WHATSAPP_NUMBER = "51986671128";
const WHATSAPP_DISPLAY = "+51 986 671 128";

export default function CommercialCTA({
  title,
  description,
  highlights,
  whatsappMessage,
  stats,
}: CommercialCTAProps) {
  const copy = useLocalizedContent({
    es: {
      badge: "Atención comercial · Minería & Industria",
      ref: "REF · CO–2024",
      requestEyebrow: "[ Requerimiento de suministro ]",
      requestTitle:
        "Coordinación directa de producto, despacho y abastecimiento operativo",
      requestDescription:
        "Comparta el detalle de su operación y recibirá una respuesta técnica con todo lo necesario para evaluar el suministro.",
      deliverables: [
        "Ficha técnica del producto",
        "Condiciones y capacidad de suministro",
        "Programación de despacho a faena",
      ],
      requestButton: "Solicitar cotización técnica",
      whatsappButton: "WhatsApp comercial",
      hours: "Lun–Sáb 07:00–19:00",
      defaultStats: [
        { value: "24/7", label: "Despacho programado" },
        { value: "100%", label: "Producto certificado" },
        { value: "+12", label: "Regiones con cobertura" },
      ] as Stat[],
    },
    en: {
      badge: "Commercial support · Mining & Industry",
      ref: "REF · CO–2024",
      requestEyebrow: "[ Supply request ]",
      requestTitle:
        "Direct coordination of product, dispatch, and operational supply",
      requestDescription:
        "Share the details of your operation and you will receive a technical reply with everything needed to evaluate the supply.",
      deliverables: [
        "Product technical data sheet",
        "Supply conditions and capacity",
        "Dispatch scheduling to site",
      ],
      requestButton: "Request a technical quote",
      whatsappButton: "Commercial WhatsApp",
      hours: "Mon–Sat 07:00–19:00",
      defaultStats: [
        { value: "24/7", label: "Scheduled dispatch" },
        { value: "100%", label: "Certified product" },
        { value: "+12", label: "Regions covered" },
      ] as Stat[],
    },
  });

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const resolvedStats = stats?.length ? stats : copy.defaultStats;

  return (
    <section className="dark-image relative overflow-hidden bg-gradient-to-br from-[#1d3461] to-[#11375c] py-24 md:py-32">
      {/* Glow esmeralda superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]"
      />
      {/* Trama hexagonal sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 0l28 16v32L28 64 0 48V16z' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E\")",
          backgroundSize: "56px 100px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4fa81e]/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-[0_30px_60px_-42px_rgba(0,0,0,0.55)]">
          <div className="grid items-stretch lg:min-h-[60vh] lg:grid-cols-[1.4fr_1fr]">

            {/* ============ LADO IZQUIERDO ============ */}
            <div className="relative flex flex-col border-b border-white/12 px-7 py-10 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-11">

              {/* Cabecera técnica */}
              <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-6">
                <div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#4fa81e] shadow-[0_0_0_3px_rgba(79,168,30,0.18)]" />
                  {copy.badge}
                </div>
                <div className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
                  {copy.ref}
                </div>
              </div>

              {/* Titular */}
              <div className="max-w-2xl pt-8">
                <h2 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-[44px]">
                  {title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-blue-100/80">
                  {description}
                </p>
              </div>

              {/* Tira de indicadores */}
              <div className="mt-9 grid grid-cols-3 overflow-hidden rounded-xl border border-white/12">
                {resolvedStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-5 py-[18px] ${
                      i < resolvedStats.length - 1 ? "border-r border-white/12" : ""
                    }`}
                  >
                    <div className="font-mono text-[26px] font-semibold leading-none text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs leading-snug text-white/55">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-stone-100"
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#4fa81e]" strokeWidth={2.4} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* ============ LADO DERECHO ============ */}
            <div className="dark-image relative bg-black/15">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#4fa81e] to-transparent" />

              <div className="relative flex h-full flex-col justify-between px-7 py-10 sm:px-10 lg:px-10 lg:py-11">
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[#7d8a6b]">
                    {copy.requestEyebrow}
                  </p>
                  <h3 className="mt-4 max-w-sm text-[25px] font-bold leading-tight tracking-tight text-stone-50">
                    {copy.requestTitle}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
                    {copy.requestDescription}
                  </p>

                  {/* Entregables */}
                  <div className="mt-6 flex flex-col border-t border-stone-700/60">
                    {copy.deliverables.map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 border-b border-stone-700/60 py-3 text-[13px] text-stone-200"
                      >
                        <span className="font-mono text-[11px] text-[#4fa81e]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-50 px-5 py-3.5 text-sm font-bold text-stone-900 transition duration-300 hover:bg-stone-200"
                    >
                      {copy.requestButton}
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-500/70 bg-stone-900 px-5 py-3.5 text-sm font-semibold text-stone-100 transition duration-300 hover:bg-stone-800"
                    >
                      <ChatCircle className="h-4 w-4 text-[#4fa81e]" weight="fill" />
                      {copy.whatsappButton}
                    </a>
                  </div>

                  <div className="mt-[18px] flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-white/55">
                    {WHATSAPP_DISPLAY} &nbsp;·&nbsp; {copy.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}