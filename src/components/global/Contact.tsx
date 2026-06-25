/**client/src/components/global/contact.tsx */

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { initContactanosPage } from "./contactanos";
import { useLocalizedContent, useSiteLanguage } from "../../context/SiteLanguageContext";

type ContactProps = {
  className?: string;
};

const PRODUCT_OPTIONS = [
  { value: "Piedra Caliza", labelEs: "Piedra Caliza", labelEn: "Limestone" },
  { value: "Cal Viva", labelEs: "Cal Viva", labelEn: "Quicklime" },
  { value: "Cotizacion general", labelEs: "Cotizacion general", labelEn: "General quotation" },
];

export default function Contact({ className = "" }: ContactProps) {
  const { language } = useSiteLanguage();
  const { pathname } = useLocation();
  // En /contacto el mapa va justo encima: no subimos el formulario (evita que lo corte).
  const isContactPage = pathname.toLowerCase().startsWith("/contacto");
  const copy = useLocalizedContent({
    es: {
      badge: "Atención Comercial",
      titleStart: "Déjanos tus datos y",
      titleHighlight: "uno de nuestros especialistas",
      titleEnd: "se pondrá en contacto contigo.",
      fields: {
        name: "Nombre",
        company: "Empresa",
        email: "Correo electrónico",
        phone: "Teléfono",
        product: "Producto o servicio",
        productPlaceholder: "Selecciona un producto o servicio",
        message: "Mensaje",
        website: "Sitio web",
      },
      actions: {
        submit: "Enviar solicitud",
        clear: "Borrar",
      },
    },
    en: {
      badge: "Commercial Support",
      titleStart: "Leave us your details and",
      titleHighlight: "one of our specialists",
      titleEnd: "will get in touch with you.",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        product: "Product or service",
        productPlaceholder: "Select a product or service",
        message: "Message",
        website: "Website",
      },
      actions: {
        submit: "Send request",
        clear: "Clear",
      },
    },
  });

  useEffect(() => {
    const cleanup = initContactanosPage();
    return () => cleanup();
  }, []);

  const fieldClasses =
    "peer h-12 w-full border-0 border-b border-white/12 bg-transparent px-0 text-sm text-stone-100 placeholder:text-stone-500 transition-colors focus:border-[#4fa81e]/80 focus:outline-none focus:ring-0";

  return (
    <div className={`relative z-30 ${className}`}>
      <section className={`dark-image relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,#1a1a1d_0%,#201f22_60%,#211d1b_100%)] p-8 shadow-[0_32px_70px_-40px_rgba(0,0,0,0.7)] sm:p-10 ${isContactPage ? "mt-8 lg:mt-12" : "-mt-30"}`}>
        {/* Hairline de acento superior */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4fa81e]/55 to-transparent" />

        {/* Encabezado - punto latente*/}
        <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.26em] text-stone-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4fa81e] animate-pulse-glow" />
          {copy.badge}
        </div>

        <h3 className="mt-5 max-w-md text-[22px] font-semibold leading-snug tracking-[-0.01em] text-stone-100">
          {copy.titleStart}{" "}
          <span className="text-[#6db820]">{copy.titleHighlight}</span>{" "}
          {copy.titleEnd}
        </h3>

        <form id="contactForm" action="/formulario" method="POST" className="mt-10 grid gap-7">
          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <label htmlFor="Nombres" className="sr-only">
                {copy.fields.name}
              </label>
              <input
                type="text"
                id="Nombres"
                name="Nombre"
                placeholder={copy.fields.name}
                autoComplete="name"
                required
                className={fieldClasses}
              />
            </div>
            <div>
              <label htmlFor="empresa" className="sr-only">
                {copy.fields.company}
              </label>
              <input
                type="text"
                id="empresa"
                name="Empresa"
                placeholder={copy.fields.company}
                autoComplete="organization"
                required
                className={fieldClasses}
              />
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <label htmlFor="correo" className="sr-only">
                {copy.fields.email}
              </label>
              <input
                type="email"
                id="correo"
                name="Correo"
                placeholder={copy.fields.email}
                autoComplete="email"
                required
                className={fieldClasses}
              />
            </div>
            <div>
              <label htmlFor="telefono" className="sr-only">
                {copy.fields.phone}
              </label>
              <input
                type="tel"
                id="telefono"
                name="Telefono"
                placeholder={copy.fields.phone}
                autoComplete="tel"
                inputMode="tel"
                required
                className={fieldClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="producto" className="sr-only">
              {copy.fields.product}
            </label>
            <select
              id="producto"
              name="Producto"
              required
              defaultValue=""
              className={`${fieldClasses} cursor-pointer`}
            >
              <option value="" disabled className="bg-[#1a1a1d] text-stone-500">
                {copy.fields.productPlaceholder}
              </option>
              {PRODUCT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value} className="bg-[#1a1a1d] text-stone-100">
                  {language === "en" ? option.labelEn : option.labelEs}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="Mensaje" className="sr-only">
              {copy.fields.message}
            </label>
            <textarea
              id="Mensaje"
              name="Mensaje"
              placeholder={copy.fields.message}
              rows={3}
              required
              className="w-full resize-none border-0 border-b border-white/12 bg-transparent px-0 py-3 text-sm text-stone-100 placeholder:text-stone-500 transition-colors focus:border-[#4fa81e]/80 focus:outline-none focus:ring-0"
            />
          </div>

          <input type="hidden" name="recaptcha_token" id="recaptcha_token" />
          <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">{copy.fields.website}</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </div>

          <div
            id="mensaje"
            aria-live="polite"
            className="hidden rounded-lg border border-red-400/30 bg-red-950/20 px-4 py-3 text-sm text-red-200"
          />

          <div className="mt-2 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              id="clear-form"
              className="order-2 text-[13px] font-medium uppercase tracking-[0.12em] text-stone-400 transition-colors hover:text-stone-200 sm:order-1"
            >
              {copy.actions.clear}
            </button>

            <button
              type="submit"
              className="group order-1 inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#1d3461] px-8 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all hover:bg-[#1d3461]/80 hover:shadow-[0_14px_34px_-14px_rgba(29,52,97,0.55)] sm:order-2"
            >
              {copy.actions.submit}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}