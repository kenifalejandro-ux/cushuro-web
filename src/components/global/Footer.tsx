/*client/src/components/inicio/Footer.tsx*/

import { Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { trackWhatsAppClick } from "@/utils/whatsapp";
import {
  DEFAULT_TABS,
  PRODUCTS_SUBMENU,
  RESPONSIBILITY_SUBMENU,
  SERVICES_SUBMENU,
} from "./header";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
];

const WHATSAPP_NUMBER = "959173472";
const WHATSAPP_URL = `https://wa.me/51${WHATSAPP_NUMBER}`;

export default function Footer() {
  const [openFooterSections, setOpenFooterSections] = useState<Record<string, boolean>>({});

  const footerSubmenus: Record<string, { name: string; href: string }[]> = {
    Productos: PRODUCTS_SUBMENU,
    "Servicios-Industriales": SERVICES_SUBMENU,
    "compromiso-ambiental-y-social": RESPONSIBILITY_SUBMENU,
  };

  const toggleFooterSection = (label: string) => {
    setOpenFooterSections((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  return (
    <footer className="relative text-white">
      {/* Fondo oscuro tipo imagen */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b2726] via-[#2f2b2a] to-[#1f1c1b]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* ================= IZQUIERDA ================= */}
          <section>
            {/* Logo + Nombre */}
            <div className="flex items-center gap-4">
              <img
                src="/logo-caldera/logo-caldera-cushuro.png"
                alt="Calera Cushuro"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h2 className="text-2xl font-semibold tracking-wide text-emerald-600">
                  CALERA CUSHURO
                </h2>
                <p className="text-sm text-zinc-400">
                  Industria Minera
                </p>
              </div>
            </div>

            <div className="my-8 h-px bg-zinc-600/40" />

            {/* Enlaces */}
            <div className="grid gap-10 md:grid-cols-2 text-sm text-zinc-300">
              <div className="space-y-3">
                <p className="font-semibold text-white">Empresa</p>
                {DEFAULT_TABS.map((tab) => {
                  const submenu = footerSubmenus[tab.label];
                  const isOpen = Boolean(openFooterSections[tab.label]);
                  const submenuId = `footer-submenu-${tab.label.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

                  if (!submenu) {
                    return (
                      <NavLink
                        key={tab.href}
                        to={tab.href}
                        className="block hover:text-emerald-600 transition-colors"
                      >
                        {tab.label}
                      </NavLink>
                    );
                  }

                  return (
                    <div key={tab.href} className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <NavLink
                          to={tab.href}
                          className="hover:text-emerald-600 transition-colors"
                        >
                          {tab.label}
                        </NavLink>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={submenuId}
                          onClick={() => toggleFooterSection(tab.label)}
                          className="text-zinc-400 hover:text-emerald-600 transition-colors"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>

                      <div
                        id={submenuId}
                        className={`grid overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {submenu.map((item) => (
                          <NavLink
                            key={item.href}
                            to={item.href}
                            className="block text-xs text-zinc-400 hover:text-emerald-600 transition-colors"
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-white">Contacto</p>
                <p>Planta: Centro de Producción Cas. Rodeopampa – Marcabal</p>
                <p className="text-emerald-600">
                  Celulares:{" "}
                  <a href="tel:+51986671128" className="hover:underline">
                    986 671128
                  </a>{" "}
                  /{" "}
                  <a href="tel:+51910582455" className="hover:underline">
                    910 582 455
                  </a>
                </p>
                <p className="text-emerald-600">
                  E-mail:{" "}
                  <a
                    href="mailto:administracion@cushuro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    administracion@cushuro.com
                  </a>
                </p>
              </div>
            </div>

            {/* Redes */}
            <div className="mt-8 flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-emerald-600"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </section>

          {/* ================= DERECHA - FORM================= */}
          <div className="relative z-30 -mt-16 md:-mt-24 lg:-mt-20">
            <section className="rounded-2xl relative min-h-[20vh]  bg-blue-900/50 backdrop-blur-lg p-8 shadow-2xl">
              <h3 className="text-xl font-semibold leading-snug">
                Déjanos tus datos y{" "}
                <span className="text-emerald-600">
                  uno de nuestros especialistas
                </span>{" "}
                se pondrá en contacto contigo.
              </h3>

              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="h-11 rounded-md bg-[#3a3533] px-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="h-11 rounded-md bg-[#3a3533] px-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="h-11 rounded-md bg-[#3a3533] px-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />

                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="h-11 rounded-md bg-[#3a3533] px-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />

                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="rounded-md bg-[#3a3533] p-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />

                <label className="flex items-center gap-2 text-xs text-zinc-400">
                  <input type="checkbox" className="h-4 w-4 accent-emerald-600" />
                  Estoy de acuerdo con las políticas de privacidad.
                </label>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      text: "Formulario Footer",
                      section: "Footer",
                      component: "FooterForm",
                      variant: "Mineria",
                      href: WHATSAPP_URL,
                    })
                  }
                  className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-emerald-700 px-8 text-sm font-semibold text-zinc-100 transition hover:bg-emerald-900"
                >
                  ENVIAR
                </a>
              </form>
            </section>
          </div>
        </div>

        {/* ================= FOOTER BASE ================= */}
        <div className="mt-16 flex flex-col items-center gap-3 border-t border-zinc-600/40 pt-6 text-xs text-zinc-400 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Empresa de Transportes y Servicios Santa Isabel de Cushuro S.A.C.</p>
          <p>Huamachuco - La Libertad - Perú</p>
          <p className="text-emerald-600">

            Elaborado por:{" "}

            <a
              href="https://www.zincelideas.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.zincelideas.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
