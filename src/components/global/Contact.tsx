import { useEffect } from "react";
import { initContactanosPage } from "./contactanos";
import { useLocalizedContent, useSiteLanguage } from "../../context/SiteLanguageContext";

type ContactProps = {
  className?: string;
};

const PRODUCT_OPTIONS = [
  { value: "Piedra Caliza", labelEs: "Piedra Caliza", labelEn: "Limestone" },
  { value: "Cal Viva", labelEs: "Cal Viva", labelEn: "Quicklime" },
  { value: "Cal Agricola", labelEs: "Cal Agricola", labelEn: "Agricultural Lime" },
  { value: "Carbon Antracita", labelEs: "Carbon Antracita", labelEn: "Anthracite Coal" },
  { value: "Carbon Tipo Cisco", labelEs: "Carbon Tipo Cisco", labelEn: "Carbon Cisco" },
  { value: "Cotizacion general", labelEs: "Cotizacion general", labelEn: "General quotation" },
];

export default function Contact({ className = "" }: ContactProps) {
  const { language } = useSiteLanguage();
  const copy = useLocalizedContent({
    es: {
      badge: "Atencion Comercial",
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
        submit: "ENVIAR",
        clear: "BORRAR",
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
        submit: "SEND",
        clear: "CLEAR",
      },
    },
  });

  useEffect(() => {
    const cleanup = initContactanosPage();
    return () => cleanup();
  }, []);

  return (
    <div className={`relative z-30 ${className}`}>
      <section className="relative -mt-30  min-h-[20vh] overflow-hidden rounded-[2rem] border border-stone-700/70 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_30%),linear-gradient(160deg,#18181b_0%,#27272a_55%,#292524_100%)] p-8 shadow-[0_32px_70px_-40px_rgba(0,0,0,0.68)]">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/70 to-transparent" />
        <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {copy.badge}
        </div>

        <h3 className="max-w-xl text-xl font-semibold leading-snug text-stone-100">
          {copy.titleStart}{" "}
          <span className="text-emerald-400">
            {copy.titleHighlight}
          </span>{" "}
          {copy.titleEnd}
        </h3>

        <form
          id="contactForm"
          action="/formulario"
          method="POST"
          className="mt-8 grid gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
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
                className="h-12 w-full rounded-xl border border-white/8 bg-black/20 px-4 text-sm text-stone-100 placeholder:text-stone-500 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
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
                className="h-12 w-full rounded-xl border border-white/8 bg-black/20 px-4 text-sm text-stone-100 placeholder:text-stone-500 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
              />
            </div>
          </div>

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
              className="h-12 w-full rounded-xl border border-white/8 bg-black/20 px-4 text-sm text-stone-100 placeholder:text-stone-500 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
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
              className="h-12 w-full rounded-xl border border-white/8 bg-black/20 px-4 text-sm text-stone-100 placeholder:text-stone-500 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
            />
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
              className="h-12 w-full rounded-xl border border-white/8 bg-black/20 px-4 text-sm text-stone-100 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
            >
              <option value="" disabled className="text-stone-500">
                {copy.fields.productPlaceholder}
              </option>
              {PRODUCT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
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
              rows={4}
              required
              className="w-full rounded-xl border border-white/8 bg-black/20 p-4 text-sm text-stone-100 placeholder:text-stone-500 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
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
            className="hidden rounded-xl border border-red-400/30 bg-red-950/20 px-4 py-3 text-sm text-red-200"
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="mt-3 inline-flex h-12 min-h-[50px] flex-1 items-center justify-center rounded-full bg-emerald-700 px-8 text-sm font-semibold text-stone-50 transition hover:bg-emerald-600"
            >
              {copy.actions.submit}
            </button>

            <button
              type="button"
              id="clear-form"
              className="mt-3 inline-flex h-12 min-h-[50px] flex-1 items-center justify-center rounded-full border border-stone-500/60 bg-stone-800/80 px-8 text-sm font-semibold text-stone-100 transition hover:bg-stone-700"
            >
              {copy.actions.clear}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
