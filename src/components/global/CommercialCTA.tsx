/**client/src/components/global/ComercialCTA.tsx */

import { ArrowRight, BadgeCheck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

type CommercialCTAProps = {
  title: string;
  description: string;
  highlights: string[];
  whatsappMessage: string;
};

const WHATSAPP_NUMBER = "51986671128";

export default function CommercialCTA({
  title,
  description,
  highlights,
  whatsappMessage,
}: CommercialCTAProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
   <section
      className="light-image relative overflow-hidden bg-[#ece5d9] py-24 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-700/45 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] border border-stone-300 bg-[linear-gradient(180deg,#f6f1e7_0%,#efe7da_100%)] shadow-[0_26px_56px_-38px_rgba(24,24,27,0.24)]">
          <div className="grid min-h-[72vh] items-stretch gap-0 lg:min-h-[62vh] lg:grid-cols-[1.45fr_0.95fr]">
            {/* Lado izquierdo */}
            <div className="relative flex h-full flex-col justify-center border-b border-stone-300 px-7 py-10 sm:px-10 sm:py-12 lg:border-b-0 lg:border-r lg:px-12 lg:py-14">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-700/55 to-transparent" />

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-100">
                <BadgeCheck className="h-4 w-4" />
                Atención comercial
              </div>

              <div className="max-w-3xl space-y-5">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  {title}
                </h2>

                <p className="text-sm leading-7 text-zinc-700 sm:text-base sm:leading-8">
                  {description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-stone-300 bg-white/85 px-4 py-2 text-xs font-medium tracking-wide text-zinc-700 shadow-[0_8px_24px_-18px_rgba(24,24,27,0.14)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Lado derecho */}
            <div className="relative bg-zinc-950">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/45 to-transparent" />

              <div className="relative flex h-full flex-col justify-between px-7 py-10 sm:px-10 sm:py-12 lg:px-10 lg:py-14">
                <div className="space-y-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                    Solicitud comercial
                  </p>

                  <h3 className="max-w-sm text-2xl font-semibold leading-tight text-stone-100">
                    Atención directa para producto, despacho y coordinación operativa
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-stone-300">
                    Comparta su requerimiento y le brindaremos información técnica,
                    condiciones de suministro y alternativas de atención de acuerdo con
                    las necesidades de su operación.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3.5 text-sm font-semibold text-stone-50 transition duration-300 hover:bg-emerald-600"
                  >
                    Solicitar cotización
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-500/70 bg-stone-900 px-5 py-3.5 text-sm font-semibold text-stone-100 transition duration-300 hover:bg-stone-800"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp comercial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
