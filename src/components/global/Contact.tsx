import { useEffect } from "react";
import { initContactanosPage } from "./contactanos";

type ContactProps = {
  className?: string;
};

const PRODUCT_OPTIONS = [
  "Piedra Caliza",
  "Cal Viva",
  "Cal Agricola",
  "Carbon Antracita",
  "Carbon Cisco",
  "Transporte Logistico",
  "Operacion con maquinaria",
  "Cotizacion general",
];

export default function Contact({ className = "" }: ContactProps) {
  useEffect(() => {
    const cleanup = initContactanosPage();
    return () => cleanup();
  }, []);

  return (
    <div className={`relative z-30 ${className}`}>
      <section className="rounded-2xl relative min-h-[20vh] bg-blue-900/50 backdrop-blur-lg p-8 shadow-2xl -mt-26 md:-23 ">
        <h3 className="text-xl font-semibold leading-snug">
          Déjanos tus datos y{" "}
          <span className="text-emerald-600">
            uno de nuestros especialistas
          </span>{" "}
          se pondrá en contacto contigo.
        </h3>

        <form
          id="contactForm"
          action="/formulario"
          method="POST"
          autoComplete="off"
          className="mt-6 grid gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              id="Nombres"
              name="Nombre"
              placeholder="Nombre"
              required
              className="h-11 rounded-md bg-[#3a3533] px-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
            <input
              type="text"
              id="empresa"
              name="Empresa"
              placeholder="Empresa"
              required
              className="h-11 rounded-md bg-[#3a3533] px-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <input
            type="email"
            id="correo"
            name="Correo"
            placeholder="Correo electrónico"
            required
            className="h-11 rounded-md bg-[#3a3533] px-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />

          <input
            type="tel"
            id="telefono"
            name="Telefono"
            placeholder="Teléfono"
            required
            className="h-11 rounded-md bg-[#3a3533] px-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />

          <select
            id="producto"
            name="Producto"
            required
            defaultValue=""
            className="h-11 rounded-md bg-[#3a3533] px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-600"
          >
            <option value="" disabled className="text-zinc-400">
              Selecciona un producto o servicio
            </option>
            {PRODUCT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <textarea
            id="Mensaje"
            name="Mensaje"
            placeholder="Mensaje"
            rows={4}
            required
            className="rounded-md bg-[#3a3533] p-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />

          <input type="hidden" name="recaptcha_token" id="recaptcha_token" />
          <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Sitio web</label>
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
            className="hidden rounded-lg border border-[#d6d6d6] bg-white/70 px-4 py-3 text-sm text-[#b42318]"
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="flex-1 mt-3 inline-flex h-12 items-center justify-center rounded-full bg-emerald-700 px-8 text-sm font-semibold text-zinc-100 transition hover:bg-emerald-900"
            >
              ENVIAR
            </button>

            <button
              type="button"
              id="clear-form"
              className="flex-1 mt-3 inline-flex h-12 items-center justify-center rounded-full bg-zinc-600 px-8 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              BORRAR
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
