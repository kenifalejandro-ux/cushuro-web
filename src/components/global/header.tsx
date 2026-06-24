/* client/src/components/global/Header.tsx */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Menu, X } from "lucide-react";
import { Globe, Envelope, MapPin, Phone } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  DEFAULT_TABS,
  PRODUCTS_SUBMENU,
  RESPONSIBILITY_SUBMENU,
  SERVICES_SUBMENU,
  type MenuItem,
  type Tab,
} from "./header.data";
import { useSiteLanguage, type SiteLanguage } from "../../context/SiteLanguageContext";
import { useImageOverlap } from "../../hooks/useImageOverlap";

const IMG_BASE = import.meta.env.VITE_IMG_URL || import.meta.env.VITE_ASSETS_URL;

gsap.registerPlugin(ScrollTrigger);

type HeaderCopy = {
  address: string;
  brandName: string;
  brandTagline: string;
  closeMenuLabel: string;
  contact: string;
  ctaQuote: string;
  email: string;
  languageSectionTitle: string;
  mobilePanelLabel: string;
  navigation: string;
  openMenuLabel: string;
  phone: string;
  switchLanguageAriaLabel: string;
  switchLanguageLabel: string;
  tabs: Record<string, string>;
};

interface HeaderProps {
  logo?: string;
  logoLight?: string;
  logoDark?: string;
  brandName?: string;
  tabs?: Tab[];
  /** Ruta del CTA de cotización. */
  quoteHref?: string;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}

const HEADER_COPY: Record<SiteLanguage, HeaderCopy> = {
  es: {
    address: "Dirección",
    brandName: "Santa Isabel de Cushuro",
    brandTagline: "Santa Isabel · Minería",
    closeMenuLabel: "Cerrar menu de navegacion",
    contact: "CONTACTO",
    ctaQuote: "Cotización",
    email: "Correo",
    languageSectionTitle: "Idioma",
    mobilePanelLabel: "Panel de navegacion y contacto",
    navigation: "Navegación",
    openMenuLabel: "Abrir menu de navegacion",
    phone: "Teléfono",
    switchLanguageAriaLabel: "Cambiar idioma a inglés",
    switchLanguageLabel: "EN",
    tabs: {
      "La Empresa": "La Empresa",
      Productos: "Productos",
      "Servicios-Industriales": "Servicios",
      "compromiso-ambiental-y-social": "Compromiso",
      Contacto: "Contacto",
    },
  },
  en: {
    address: "Address",
    brandName: "Santa Isabel de Cushuro",
    brandTagline: "Santa Isabel · Mining",
    closeMenuLabel: "Close navigation menu",
    contact: "CONTACT",
    ctaQuote: "Get a quote",
    email: "Email",
    languageSectionTitle: "Language",
    mobilePanelLabel: "Navigation and contact panel",
    navigation: "Navigation",
    openMenuLabel: "Open navigation menu",
    phone: "Phone",
    switchLanguageAriaLabel: "Switch language to Spanish",
    switchLanguageLabel: "ES",
    tabs: {
      "La Empresa": "Company",
      Productos: "Products",
      "Servicios-Industriales": "Services",
      "compromiso-ambiental-y-social": "Commitment",
      Contacto: "Contact",
    },
  },
};

export function Header({
  logo,
  logoLight = "img-inicio/logo/logo-caldera-cushuro.png",
  logoDark = "img-inicio/logo/logo-caldera-cushuro.png",
  brandName = "",
  tabs = DEFAULT_TABS,
  quoteHref = "/contacto",
  contactInfo = {
    email: "administracion@cushuro.pe",
    phone: "+51 986 671 128",
    address: "Huamachuco, La Libertad",
  },
}: HeaderProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const submenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { language, toggleLanguage } = useSiteLanguage();

  const location = useLocation();
  const isProductsActive = location.pathname.startsWith("/Productos");
  const isServicesActive = location.pathname.startsWith("/Servicios-Industriales");
  const isResponsibilityActive = location.pathname.startsWith("/compromiso-ambiental-y-social");

  const { isLightOverlapping } = useImageOverlap({ targetElementId: "banner" });

  const navTextColor = isLightOverlapping ? "text-zinc-800" : "text-white";
  const navHoverColor = isLightOverlapping ? "hover:text-[#1d3461]" : "hover:text-white/80";
  const mainBarBg = isLightOverlapping
    ? "bg-white/70 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)]"
    : "bg-white/[0.09] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6),0_2px_0_0_rgba(255,255,255,0.04)_inset]";

  const copy = HEADER_COPY[language];
  const displayBrandName = brandName.trim() || copy.brandName;

  const hasSubmenu = (label: string) =>
    label === "Productos" ||
    label === "Servicios-Industriales" ||
    label === "compromiso-ambiental-y-social";

  const getSubmenuByTab = (label: string) => {
    if (label === "Productos") return PRODUCTS_SUBMENU;
    if (label === "Servicios-Industriales") return SERVICES_SUBMENU;
    if (label === "compromiso-ambiental-y-social") return RESPONSIBILITY_SUBMENU;
    return [];
  };

  const getTabLabel = (label: string) => copy.tabs[label] ?? label;

  const getMenuItemCopy = (item: MenuItem) =>
    language === "en"
      ? { name: item.nameEn, subtitle: item.subtitleEn }
      : { name: item.name, subtitle: item.subtitle };

  const resolveAssetUrl = (value?: string) => {
    if (!value) return value;
    if (/^https?:\/\//i.test(value)) return value;
    if (!IMG_BASE) return value;
    return `${IMG_BASE}/${value.replace(/^\//, "")}`;
  };

  // Header oscuro: usamos siempre el logo claro (sobre fondo acero).
  const logoSrc = resolveAssetUrl(logo ?? logoLight ?? logoDark);
  const shouldShowLogo = Boolean(logoSrc);
  const desktopPrimaryTabs = tabs.filter((tab) => tab.label !== "Contacto");

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 120) {
        setIsHidden(true);
        setOpenDesktopSubmenu(null);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = current;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    requestAnimationFrame(() => {
      const navTabs = Array.from(navRef.current!.children) as HTMLElement[];
      if (!navTabs.length) return;

      gsap.from(navTabs, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        // Sólo animamos opacidad/posición; nunca tocamos el color.
        clearProps: "opacity,transform",
      });
    });
  }, []);

  useEffect(() => {
    return () => {
      if (submenuTimeout.current) {
        clearTimeout(submenuTimeout.current);
      }
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setOpenMobileSubmenu(null);
  };

  const handleSubmenuEnter = (label: string) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setOpenDesktopSubmenu(label);
  };

  const handleSubmenuLeave = () => {
    submenuTimeout.current = setTimeout(() => {
      setOpenDesktopSubmenu(null);
    }, 200);
  };

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  return (
    <>
      <header
        id="banner"
        className={`fixed left-0 right-0 top-0 z-[1100] transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* ===================== BARRA UTILITARIA ===================== */}
        <div className="border-b border-white/[0.07] bg-[#0c0d0e]">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-3 px-4 font-mono text-[9px] uppercase tracking-[0.12em] text-white/50 sm:h-11 sm:px-6 sm:text-[10px] sm:tracking-[0.14em] lg:h-11 lg:px-8 lg:text-[11px] 2xl:h-14">
            <span className="flex min-w-0 items-center gap-2 sm:gap-2.5">
              <MapPin className="h-3 w-3 shrink-0 text-emerald-700 sm:h-3.5 sm:w-3.5" />
              <span className="truncate">{contactInfo.address}</span>
            </span>
            <div className="flex items-center gap-3 sm:gap-6">
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-1.5 transition-colors hover:text-emerald-700 sm:gap-2"
                >
                  <Phone className="h-3 w-3 shrink-0 text-emerald-700" />
                  <span className="whitespace-nowrap">{contactInfo.phone}</span>
                </a>
              )}
              {contactInfo.email && (
                <>
                  <span className="hidden text-white/15 sm:inline">|</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hidden items-center gap-2 transition-colors hover:text-emerald-700 sm:flex"
                  >
                    <Envelope className="h-3 w-3 shrink-0 text-emerald-700" />
                    <span className="whitespace-nowrap">{contactInfo.email}</span>
                  </a>
                </>
              )}
              <span className="text-white/15">|</span>
              <button
                type="button"
                aria-label={copy.switchLanguageAriaLabel}
                onClick={handleLanguageToggle}
                className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-emerald-700"
              >
                <Globe className="h-3 w-3 shrink-0" />
                {copy.switchLanguageLabel}
              </button>
            </div>
          </div>
        </div>

 {/* ===================== BARRA PRINCIPAL ===================== */}
        <div className=" relative border-b border-white/[0.06] bg-white/[0.09] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6),0_2px_0_0_rgba(255,255,255,0.04)_inset] backdrop-blur-2xl before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/[0.07] before:to-transparent">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-[78px] lg:gap-9 lg:px-8 2xl:h-[94px]">
            {/* Logo lockup */}
            <NavLink
              to="/"
              className="relative z-[110] flex shrink-0 items-center gap-3.5"
              onClick={() => setIsModalOpen(false)}
            >
              {shouldShowLogo ? (
                <img
                  src={logoSrc}
                  alt={displayBrandName}
                  className="h-10 w-auto max-w-[13rem] object-contain brightness-125 contrast-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] lg:h-12 2xl:h-[3.4rem]"
                />
              ) : (
                <>
                  <div className="flex h-[50px] w-[50px] items-center justify-center border border-emerald-600/50 bg-[linear-gradient(150deg,#1c1f22,#0e1012)]">
                    <span className="text-[26px] font-bold leading-none text-emerald-700">
                      {displayBrandName.charAt(0) || "C"}
                    </span>
                  </div>
                  <div className="hidden flex-col leading-none sm:flex">
                    <span className="text-[23px] font-semibold tracking-[0.02em] text-white">
                      CUSHURO
                    </span>
                    <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.26em] text-white/40">
                      {copy.brandTagline}
                    </span>
                  </div>
                </>
              )}
            </NavLink>

            {/* Navegación desktop */}
            <nav
              ref={navRef}
              className="hidden items-center gap-1 text-[13.5px] font-medium tracking-[0.04em] text-white lg:flex"
            >
              {desktopPrimaryTabs.map((tab) => {
                const tabHasSubmenu = hasSubmenu(tab.label);
                const submenuItems = getSubmenuByTab(tab.label);
                const isDropdownOpen = openDesktopSubmenu === tab.label;
                const isActive =
                  tab.label === "Productos"
                    ? isProductsActive
                    : tab.label === "Servicios-Industriales"
                      ? isServicesActive
                      : tab.label === "compromiso-ambiental-y-social"
                        ? isResponsibilityActive
                        : location.pathname === tab.href;

                if (tabHasSubmenu) {
                  return (
                    <div
                      key={tab.href}
                      className="group relative"
                      onMouseEnter={() => handleSubmenuEnter(tab.label)}
                      onMouseLeave={handleSubmenuLeave}
                    >
                      <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={isDropdownOpen}
                        className={`relative flex items-center gap-1.5 px-3.5 py-2.5 uppercase transition-colors ${navTextColor} ${navHoverColor}`}
                      >
                        {getTabLabel(tab.label)}
                        <svg
                          className="h-3 w-3 text-emerald-700 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.4}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                        </svg>
                        <span
                          className={`absolute inset-x-3.5 bottom-1 h-[2px] bg-[#4fa81e] transition-all duration-300 ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                          }`}
                        />
                      </button>

                      {isDropdownOpen && (
                        <div
                          className="absolute left-0 top-[calc(100%+14px)] w-[340px] overflow-hidden border border-white/10 bg-[#141719] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.85)]"
                          onMouseEnter={() => handleSubmenuEnter(tab.label)}
                          onMouseLeave={handleSubmenuLeave}
                        >
                          <div className="h-[2px] bg-gradient-to-r from-emerald-600 to-transparent" />
                          {submenuItems.map((service, index) => {
                            const itemCopy = getMenuItemCopy(service);

                            return (
                              <NavLink
                                key={service.id}
                                to={service.href}
                                className="block border-b border-white/[0.06] px-5 py-4 transition-colors last:border-b-0 hover:bg-emerald-600/[0.07]"
                                onClick={() => setOpenDesktopSubmenu(null)}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[15px] font-semibold text-white">
                                    {itemCopy.name}
                                  </span>
                                  <span className="font-mono text-[10px] tracking-[0.1em] text-emerald-700">
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                </div>
                                <div className="mt-1 text-[12.5px] text-white/50">
                                  {itemCopy.subtitle}
                                </div>
                              </NavLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={tab.href}
                    to={tab.href}
                    className={`relative px-3.5 py-2.5 uppercase transition-colors ${navTextColor} ${navHoverColor}`}
                  >
                    {getTabLabel(tab.label)}
                    <span
                      className={`absolute inset-x-3.5 bottom-1 h-[2px] bg-[#4fa81e] transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 hover:opacity-60"
                      }`}
                    />
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA + acciones + cotizacion*/}
            <div className="flex items-center gap-2.5">
              <NavLink
                to={quoteHref}
                className="hidden items-center gap-2 border border-[#1d3461] bg-[#1d3461] px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-all duration-200 hover:bg-[#162848] hover:shadow-[0_12px_30px_-12px_rgba(29,52,97,0.7)] lg:inline-flex"
              >
                {copy.ctaQuote}
                <ArrowRight className="h-[15px] w-[15px]" strokeWidth={2.2} />
              </NavLink>

              {/* Menú (móvil) */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                aria-expanded={isModalOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={isModalOpen ? copy.closeMenuLabel : copy.openMenuLabel}
                className={`inline-flex items-center justify-center px-3 py-2.5 transition-colors hover:text-emerald-700 lg:hidden ${navTextColor} ${
                  isModalOpen ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Línea de precisión */}
          <div className="h-[2px] bg-[linear-gradient(90deg,#1d3461_0%,#2d6e1a_40%,#6db820_50%,#2d6e1a_60%,#1d3461_100%)]" />
        </div>
      </header>

      {/* ===================== DRAWER MÓVIL ===================== */}
      <aside
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal={isModalOpen || undefined}
        aria-hidden={!isModalOpen}
        aria-label={copy.mobilePanelLabel}
        className={`fixed right-0 top-0 z-[1200] h-full w-full transform border-l border-white/10 bg-[#0c0d0e] text-white transition-transform duration-300 md:w-96 ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <div className="flex flex-col leading-none">
              <span className="text-[20px] font-semibold tracking-[0.02em] text-white">CUSHURO</span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.26em] text-white/40">
                {copy.brandTagline}
              </span>
            </div>
            <button
              type="button"
              onClick={closeModal}
              aria-label={copy.closeMenuLabel}
              className="text-white/70 transition-colors hover:text-emerald-700"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            {/* Navegación */}
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-700">
                {copy.navigation}
              </p>
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const tabHasSubmenu = hasSubmenu(tab.label);
                  const submenuItems = getSubmenuByTab(tab.label);
                  const isMobileSubmenuOpen = openMobileSubmenu === tab.label;

                  if (tabHasSubmenu) {
                    return (
                      <div key={tab.href}>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenMobileSubmenu((current) =>
                              current === tab.label ? null : tab.label
                            )
                          }
                          className="flex w-full items-center justify-between px-4 py-3 text-[15px] font-medium uppercase tracking-[0.04em] text-white transition-colors hover:bg-emerald-600/[0.07]"
                        >
                          <span>{getTabLabel(tab.label)}</span>
                          <svg
                            className={`h-5 w-5 text-emerald-700 transition-transform duration-200 ${
                              isMobileSubmenuOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        {isMobileSubmenuOpen && (
                          <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                            {submenuItems.map((service) => {
                              const itemCopy = getMenuItemCopy(service);

                              return (
                                <NavLink
                                  key={service.id}
                                  to={service.href}
                                  onClick={() => {
                                    closeModal();
                                    setOpenMobileSubmenu(null);
                                  }}
                                  className="block px-4 py-2.5 transition-colors hover:bg-emerald-600/[0.07]"
                                >
                                  <div className="text-[14px] font-medium text-white">
                                    {itemCopy.name}
                                  </div>
                                  <div className="text-[12px] text-white/45">{itemCopy.subtitle}</div>
                                </NavLink>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={tab.href}
                      to={tab.href}
                      onClick={closeModal}
                      className="block px-4 py-3 text-[15px]  font-medium uppercase tracking-[0.04em] text-white transition-colors hover:bg-emerald-600/[0.07]"
                    >
                      {getTabLabel(tab.label)}
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            {/* CTA cotización */}
            <NavLink
              to={quoteHref}
              onClick={closeModal}
              className="flex items-center justify-center gap-2 bg-[#1d3461] px-5 py-3.5 text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#162848]"
            >
              {copy.ctaQuote}
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </NavLink>

            {/* Contacto */}
            <div className="space-y-3 border-t border-white/10 pt-6">
              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  onClick={closeModal}
                  className="flex items-start gap-4 border border-white/10 p-4 transition-colors hover:border-emerald-600/50"
                >
                  <Envelope className="h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {copy.email}
                    </p>
                    <p className="text-[14px] text-white">{contactInfo.email}</p>
                  </div>
                </a>
              )}

              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone}`}
                  onClick={closeModal}
                  className="flex items-start gap-4 border border-white/10 p-4 transition-colors hover:border-emerald-600/50"
                >
                  <Phone className="h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {copy.phone}
                    </p>
                    <p className="text-[14px] text-white">{contactInfo.phone}</p>
                  </div>
                </a>
              )}

              {contactInfo.address && (
                <div className="flex items-start gap-4 border border-white/10 p-4">
                  <MapPin className="h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {copy.address}
                    </p>
                    <p className="text-[14px] text-white">{contactInfo.address}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Idioma */}
            <div className="border-t border-white/10 pt-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                {copy.languageSectionTitle}
              </p>
              <button
                type="button"
                aria-label={copy.switchLanguageAriaLabel}
                onClick={handleLanguageToggle}
                className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-[13px] font-medium text-white/80 transition-colors hover:border-emerald-600 hover:text-emerald-700"
              >
                <Globe className="h-4 w-4" />
                <span>{copy.switchLanguageLabel}</span>
              </button>
            </div>
          </div>

          {/* Línea de precisión */}
          <div className="mt-auto h-[2px] bg-[linear-gradient(90deg,#1d3461_0%,#2d6e1a_40%,#6db820_50%,#2d6e1a_60%,#1d3461_100%)]" />
        </div>
      </aside>
    </>
  );
}

export default Header;
