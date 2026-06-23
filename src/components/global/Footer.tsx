/*client/src/components/inicio/Footer.tsx*/

import { Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { MapPin, Phone, Envelope } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Contact from "./Contact";
import {
  DEFAULT_TABS,
  PRODUCTS_SUBMENU,
  RESPONSIBILITY_SUBMENU,
  SERVICES_SUBMENU,
} from "./header.data";
import { useLocalizedContent, useSiteLanguage } from "../../context/SiteLanguageContext";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
];

export default function Footer() {
  const [openFooterSections, setOpenFooterSections] = useState<Record<string, boolean>>({});
  const { language } = useSiteLanguage();
  const copy = useLocalizedContent({
    es: {
      brandSubtitle: "",
      company: "Empresa",
      contact: "Contacto",
      mobileToggle: {
        hide: "Ocultar submenu de",
        show: "Mostrar submenu de",
      },
      contactLines: {
        plantsLabel: "Plantas:",
        plants: [
          {
            name: "Centro de Producción Cas. Rodeopampa – Marcabal – Huamachuco",
            mapUrl: "https://www.google.com/maps?q=-7.8154,-78.0489",
          },
          {
            name: "Planta Bambamarca – Cajamarca",
            mapUrl: "https://www.google.com/maps?q=-6.6828,-78.5213",
          },
        ],
        phones: "Celulares:",
        email: "E-mail:",
      },
      visitLabel: "Visitar",
      location: "Huamachuco - La Libertad - Perú",
      rightsReserved: "Todos los derechos reservados.",
      developedBy: "Elaborado por:",
      tabs: {
        "La Empresa": "La Empresa",
        Productos: "Productos",
        "Servicios-Industriales": "Servicios Industriales",
        "compromiso-ambiental-y-social": "Compromiso Ambiental y Social",
        Contacto: "Contacto",
      },
    },
    en: {
      brandSubtitle: "Mining Industry",
      company: "Company",
      contact: "Contact",
      mobileToggle: {
        hide: "Hide submenu for",
        show: "Show submenu for",
      },
      contactLines: {
        plantsLabel: "Plants:",
        plants: [
          {
            name: "Production Center Cas. Rodeopampa – Marcabal – Huamachuco",
            mapUrl: "https://www.google.com/maps?q=-7.8154,-78.0489",
          },
          {
            name: "Bambamarca Plant – Cajamarca",
            mapUrl: "https://www.google.com/maps?q=-6.6828,-78.5213",
          },
        ],
        phones: "Phones:",
        email: "E-mail:",
      },
      visitLabel: "Visit",
      location: "Huamachuco - La Libertad - Peru",
      rightsReserved: "All rights reserved.",
      developedBy: "Developed by:",
      tabs: {
        "La Empresa": "Company",
        Productos: "Products",
        "Servicios-Industriales": "Industrial Services",
        "compromiso-ambiental-y-social": "Environmental Commitment",
        Contacto: "Contact",
      },
    },
  });

  const footerSubmenus: Record<string, { name: string; href: string }[]> = {
    Productos: PRODUCTS_SUBMENU.map((item) => ({
      href: item.href,
      name: language === "en" ? item.nameEn : item.name,
    })),
    "Servicios-Industriales": SERVICES_SUBMENU.map((item) => ({
      href: item.href,
      name: language === "en" ? item.nameEn : item.name,
    })),
    "compromiso-ambiental-y-social": RESPONSIBILITY_SUBMENU.map((item) => ({
      href: item.href,
      name: language === "en" ? item.nameEn : item.name,
    })),
  };

  const toggleFooterSection = (label: string) => {
    setOpenFooterSections((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  return (
    <footer className="dark-image relative text-white">
      {/* Fondo oscuro tipo imagen */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#141719] via-[#141719] to-[#141719]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* ================= IZQUIERDA ================= */}
          <section>
            {/* Logo + Nombre */}
            <div className="flex items-center gap-4">
              <img
                src="/logo-caldera/logo-caldera-cushuro.png"
                alt="Logo santa isable de cushuro"
                className="h-16 w-36 object-contain brightness-125 contrast-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              />
              <div>

                <p className="text-sm text-zinc-400">{copy.brandSubtitle}</p>
              </div>
            </div>

            <div className="my-8 h-px bg-zinc-600/40" />

            {/* Enlaces */}
            <div className="grid gap-10 md:grid-cols-2 text-sm text-zinc-300">
              <div className="space-y-3">
                <p className="font-semibold text-white">{copy.company}</p>
                {DEFAULT_TABS.map((tab) => {
                  const submenu = footerSubmenus[tab.label];
                  const isOpen = Boolean(openFooterSections[tab.label]);
                  const submenuId = `footer-submenu-${tab.label.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
                  const tabLabel = copy.tabs[tab.label as keyof typeof copy.tabs] ?? tab.label;

                  if (!submenu) {
                    return (
                      <NavLink
                        key={tab.href}
                        to={tab.href}
                        className="block hover:text-emerald-600 transition-colors"
                      >
                        {tabLabel}
                      </NavLink>
                    );
                  }

                  return (
                    <div key={tab.href} className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <NavLink to={tab.href} className="hover:text-emerald-600 transition-colors">
                          {tabLabel}
                        </NavLink>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={submenuId}
                          aria-label={`${isOpen ? copy.mobileToggle.hide : copy.mobileToggle.show} ${tabLabel}`}
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

              <div className="space-y-4">
                <p className="font-semibold text-white">{copy.contact}</p>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                  <div className="text-zinc-300">
                    <span className="block text-xs uppercase tracking-wide text-zinc-500">
                      {copy.contactLines.plantsLabel}
                    </span>
                    {copy.contactLines.plants.map((plant) => (
                      <a
                        key={plant.name}
                        href={plant.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block transition-colors hover:text-emerald-600"
                      >
                        {plant.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                  <p className="text-zinc-300">
                    <span className="block text-xs uppercase tracking-wide text-zinc-500">
                      {copy.contactLines.phones}
                    </span>
                    <a href="tel:+51986671128" className="transition-colors hover:text-emerald-600">
                      986 671128
                    </a>{" "}
                    /{" "}
                    <a href="tel:+51986067417" className="transition-colors hover:text-emerald-600">
                      986 067417
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Envelope size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                  <p className="text-zinc-300">
                    <span className="block text-xs uppercase tracking-wide text-zinc-500">
                      {copy.contactLines.email}
                    </span>
                    <a
                      href="mailto:administracion@cushuro.pe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all transition-colors hover:text-emerald-600"
                    >
                      administracion@cushuro.pe
                    </a>
                  </p>
                </div>
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
                  aria-label={`${copy.visitLabel} ${label}`}
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
          <p>
            © {new Date().getFullYear()} Empresa de Transportes y Servicios Santa Isabel de Cushuro
            S.A.C. {copy.rightsReserved}
          </p>
          <p>{copy.location}</p>
          <p className="text-emerald-600">
            {copy.developedBy}{" "}
            <a href="https://www.zincelideas.com" target="_blank" rel="noopener noreferrer">
              www.zincelideas.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
