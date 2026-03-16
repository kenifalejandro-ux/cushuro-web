/*client/src/components/inicio/Footer.tsx*/

import { Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { trackWhatsAppClick } from "@/utils/whatsapp";
import Contact from "./Contact";
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

          {/* ================= FORNULARIO BASE ================= */}
         <Contact />
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
