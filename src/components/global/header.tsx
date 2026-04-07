/* client/src/components/global/Header.tsx */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Mail, MapPin, Menu, Phone, X } from "lucide-react";
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
import { useImageOverlap } from "../../hooks/useImageOverlap";
import { useSiteLanguage, type SiteLanguage } from "../../context/SiteLanguageContext";

const IMG_BASE = import.meta.env.VITE_IMG_URL || import.meta.env.VITE_ASSETS_URL;

gsap.registerPlugin(ScrollTrigger);

type HeaderCopy = {
  address: string;
  brandName: string;
  brandStrip: string;
  closeMenuLabel: string;
  contact: string;
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
    brandStrip: "",
    closeMenuLabel: "Cerrar menu de navegacion",
    contact: "CONTACTO",
    email: "Correo",
    languageSectionTitle: "Idioma",
    mobilePanelLabel: "Panel de navegacion y contacto",
    navigation: "Navegación",
    openMenuLabel: "Abrir menu de navegacion",
    phone: "Teléfono",
    switchLanguageAriaLabel: "Cambiar idioma a inglés",
    switchLanguageLabel: "English",
    tabs: {
      "La Empresa": "La Empresa",
      Productos: "Productos",
      "Servicios-Industriales": "Servicios-Industriales",
      "compromiso-ambiental-y-social": "compromiso-ambiental-y-social",
      Contacto: "Contacto",
    },
  },
  en: {
    address: "Address",
    brandName: "Santa Isabel de Cushuro",
    brandStrip: "",
    closeMenuLabel: "Close navigation menu",
    contact: "CONTACT",
    email: "Email",
    languageSectionTitle: "Language",
    mobilePanelLabel: "Navigation and contact panel",
    navigation: "Navigation",
    openMenuLabel: "Open navigation menu",
    phone: "Phone",
    switchLanguageAriaLabel: "Switch language to Spanish",
    switchLanguageLabel: "Español",
    tabs: {
      "La Empresa": "Company",
      Productos: "Products",
      "Servicios-Industriales": "Industrial Services",
      "compromiso-ambiental-y-social": "Environmental Commitment",
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
  contactInfo = {
    email: "administracion@cushuro.com",
    phone: "+51 986 671 128",
    address: "Huamachuco, La Libertad",
  },
}: HeaderProps) {
  const { isDarkOverlapping, isLightOverlapping } = useImageOverlap({
    targetElementId: "banner",
    debounceDelay: 10,
  });

  const useLightHeader = isLightOverlapping && !isDarkOverlapping;

  const [isScrolled, setIsScrolled] = useState(false);
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
  const isContactPage = location.pathname.startsWith("/contacto");
  const forceWhiteLogo = location.pathname.startsWith("/Productos/");

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

  const logoSrc = resolveAssetUrl(
    logo ?? (forceWhiteLogo ? logoDark : useLightHeader || !isScrolled ? logoLight : logoDark)
  );
  const shouldShowLogo = Boolean(logoSrc);
  const desktopContactTab = tabs.find((tab) => tab.label === "Contacto");
  const desktopPrimaryTabs = tabs.filter((tab) => tab.label !== "Contacto");
  const isDesktopContactActive = Boolean(
    desktopContactTab && location.pathname === desktopContactTab.href
  );

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const current = window.scrollY;

      setIsScrolled(current > 10);

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
        opacity: 1,
        y: 10,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: navTabs[0],
          start: "top 90%",
          toggleActions: "play none none none",
        },
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

  const elevatedHeader = isScrolled || isContactPage || forceWhiteLogo || useLightHeader;

  const headerClasses = `
    fixed top-0 left-0 right-0 z-[100] transition-transform duration-300
    ${isHidden ? "-translate-y-full" : "translate-y-0"}
  `;

  const headerSurfaceClasses = elevatedHeader
    ? "border-zinc-200/80 bg-white/96 text-zinc-900 shadow-[0_18px_48px_-34px_rgba(24,24,27,0.26)] backdrop-blur-xl"
    : "border-zinc-200/60 bg-white/80 text-zinc-900 shadow-[0_18px_42px_-34px_rgba(24,24,27,0.22)] backdrop-blur-md";

  const rowDividerClasses = elevatedHeader ? "border-zinc-200/80" : "border-zinc-300/60";
  const topLineClasses = elevatedHeader ? "bg-zinc-500/70" : "bg-zinc-600/60";
  const topMetaTextClasses = elevatedHeader ? "text-zinc-500" : "text-zinc-600/85";
  const topContactClasses = isDesktopContactActive
    ? "text-zinc-950"
    : "text-zinc-700 transition-colors hover:text-[#6d9219]";

  const desktopNavTextClasses =
    "text-zinc-800 transition-colors hover:text-[#6d9219] focus-visible:outline-none focus-visible:text-[#6d9219]";
  const desktopNavUnderlineClasses = "bg-[#6d9219]";
  const desktopLanguageButtonClasses =
    "inline-flex items-center gap-2 rounded-full border border-zinc-300/90 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-[#92be1f] hover:text-[#6d9219]";
  const mobileActionButtonClasses =
    "inline-flex items-center justify-center rounded-xl border border-zinc-300/90 px-3 py-2.5 text-zinc-900 transition-colors hover:border-[#92be1f] hover:text-[#6d9219]";

  return (
    <>
      <header id="banner" className={headerClasses}>
        <div className={`w-full  border-y ${headerSurfaceClasses}`}>
          <div className="lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-3">
                <NavLink
                  to="/"
                  className="relative z-[110] flex min-w-0 items-center"
                  onClick={() => setIsModalOpen(false)}
                >
                  {shouldShowLogo ? (
                    <img
                      src={logoSrc}
                      alt={displayBrandName}
                      className="h-12 w-auto max-w-[13rem] object-contain sm:h-14"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6d9219] via-[#87b11d] to-[#26400d]">
                      <span className="text-xl font-semibold text-white">
                        {displayBrandName.charAt(0) || "S"}
                      </span>
                    </div>
                  )}
                </NavLink>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={copy.switchLanguageAriaLabel}
                    onClick={handleLanguageToggle}
                    className={mobileActionButtonClasses}
                  >
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">{copy.switchLanguageLabel}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    aria-expanded={isModalOpen}
                    aria-controls="mobile-navigation-drawer"
                    aria-label={isModalOpen ? copy.closeMenuLabel : copy.openMenuLabel}
                    className={`${mobileActionButtonClasses} ${isModalOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-[2px] bg-[#6d9219]" />
            <div className="h-[10px] bg-[#92be1f]" />
          </div>

          <div className="hidden lg:block">
            <div className={`border-b ${rowDividerClasses}`}>
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-start gap-8 xl:gap-10">
                  <NavLink
                    to="/"
                    className="relative z-[110] flex shrink-0 items-center"
                    onClick={() => setIsModalOpen(false)}
                  >
                    {shouldShowLogo ? (
                      <img
                        src={logoSrc}
                        alt={displayBrandName}
                        className="h-[4.6rem] w-auto max-w-[16rem] object-contain"
                      />
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#6d9219] via-[#87b11d] to-[#26400d]">
                        <span className="text-2xl font-semibold text-white">
                          {displayBrandName.charAt(0) || "S"}
                        </span>
                      </div>
                    )}
                  </NavLink>

                  <div className="flex min-w-0 flex-1 items-center gap-4 pt-8">
                    <span
                      className={`shrink-0 pl-1 text-[10px] font-semibold uppercase tracking-[0.42em] ${topMetaTextClasses}`}
                    >
                      {copy.brandStrip}
                    </span>

                    <div className={`h-px flex-1 ${topLineClasses}`} />

                    {desktopContactTab ? (
                      <NavLink
                        to={desktopContactTab.href}
                        className={`group relative shrink-0 translate-y-[5px] text-[13px] font-semibold uppercase tracking-[0.14em] ${topContactClasses}`}
                      >
                        {copy.contact}
                        <span
                          className={`absolute -bottom-0.5 left-0 h-px bg-current transition-all duration-300 ${
                            isDesktopContactActive
                              ? "w-full opacity-100"
                              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
                          }`}
                        />
                      </NavLink>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-8">
                <nav
                  ref={navRef}
                  className="relative flex min-w-0 flex-wrap items-center gap-1 xl:gap-4"
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
                            className={`relative flex items-center gap-1 rounded-lg px-4 py-2 text-base font-medium ${desktopNavTextClasses}`}
                          >
                            {getTabLabel(tab.label)}
                            <svg
                              className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>

                            <span
                              className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${desktopNavUnderlineClasses} ${
                                isActive
                                  ? "opacity-100 scale-x-100"
                                  : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75"
                              }`}
                            />
                          </button>

                          {isDropdownOpen && (
                            <div
                              className="absolute   top-full left-0 mt-3 w-80 overflow-hidden rounded-[1.1rem] border border-zinc-200 bg-white text-zinc-900 shadow-[0_24px_42px_-28px_rgba(24,24,27,0.24)]"
                              onMouseEnter={() => handleSubmenuEnter(tab.label)}
                              onMouseLeave={handleSubmenuLeave}
                            >
                              {submenuItems.map((service) => {
                                const itemCopy = getMenuItemCopy(service);

                                return (
                                  <NavLink
                                    key={service.id}
                                    to={service.href}
                                    className="block border-b border-zinc-200 px-6 py-4 transition-colors last:border-b-0 hover:bg-[#f4f7ea]"
                                    onClick={() => setOpenDesktopSubmenu(null)}
                                  >
                                    <div className="font-semibold text-zinc-900">
                                      {itemCopy.name}
                                    </div>
                                    <div className="mt-1 text-sm text-zinc-600">
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
                        className={`relative rounded-lg px-4 py-2 text-base font-medium ${desktopNavTextClasses}`}
                      >
                        {getTabLabel(tab.label)}
                        <span
                          className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${desktopNavUnderlineClasses} ${
                            isActive
                              ? "opacity-100 scale-x-100"
                              : "opacity-0 scale-x-0 hover:opacity-60 hover:scale-x-75"
                          }`}
                        />
                      </NavLink>
                    );
                  })}
                </nav>

                <button
                  type="button"
                  aria-label={copy.switchLanguageAriaLabel}
                  onClick={handleLanguageToggle}
                  className={desktopLanguageButtonClasses}
                >
                  <Globe className="h-4 w-4" />
                  <span>{copy.switchLanguageLabel}</span>
                </button>
              </div>
            </div>

            <div className="h-[2px] bg-[#6d9219]" />
            <div className="h-[10px] bg-[#92be1f]" />
            
          </div>
        </div>
      </header>

      <aside
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal={isModalOpen || undefined}
        aria-hidden={!isModalOpen}
        aria-label={copy.mobilePanelLabel}
        className={`
          fixed top-0 right-0 z-[130] h-full w-full border-l border-zinc-200 md:w-96
          transform bg-white text-zinc-900 transition-transform duration-300
          ${isModalOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-zinc-200 p-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.16em] text-zinc-900">
              {displayBrandName}
            </h2>
            <button type="button" onClick={closeModal} aria-label={copy.closeMenuLabel}>
              <X className="h-8 w-8" />
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            {contactInfo.email && (
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={closeModal}
                className="flex items-start gap-4 rounded-2xl border border-zinc-200 p-4 transition-colors hover:bg-[#f4f7ea]"
              >
                <Mail className="h-6 w-6 text-[#6d9219]" />
                <div>
                  <p className="text-sm text-zinc-500">{copy.email}</p>
                  <p className="text-zinc-900">{contactInfo.email}</p>
                </div>
              </a>
            )}

            {contactInfo.phone && (
              <a
                href={`tel:${contactInfo.phone}`}
                onClick={closeModal}
                className="flex items-start gap-4 rounded-2xl border border-zinc-200 p-4 transition-colors hover:bg-[#f4f7ea]"
              >
                <Phone className="h-6 w-6 text-[#6d9219]" />
                <div>
                  <p className="text-sm text-zinc-500">{copy.phone}</p>
                  <p className="text-zinc-900">{contactInfo.phone}</p>
                </div>
              </a>
            )}

            {contactInfo.address && (
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 p-4 transition-colors hover:bg-[#f4f7ea]">
                <MapPin className="h-6 w-6 text-[#6d9219]" />
                <div>
                  <p className="text-sm text-zinc-500">{copy.address}</p>
                  <p className="text-zinc-900">{contactInfo.address}</p>
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {copy.languageSectionTitle}
              </p>
              <button
                type="button"
                aria-label={copy.switchLanguageAriaLabel}
                onClick={handleLanguageToggle}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-[#92be1f] hover:text-[#6d9219]"
              >
                <Globe className="h-4 w-4" />
                <span>{copy.switchLanguageLabel}</span>
              </button>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <p className="mb-3 text-sm text-zinc-500">{copy.navigation}</p>
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
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-[#f4f7ea]"
                        >
                          <span>{getTabLabel(tab.label)}</span>
                          <svg
                            className={`h-5 w-5 transition-transform duration-200 ${
                              isMobileSubmenuOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {isMobileSubmenuOpen && (
                          <div className="ml-4 mt-1 space-y-1 border-l border-zinc-200 pl-4">
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
                                  className="block rounded-xl px-4 py-2.5 text-sm transition-colors hover:bg-[#f4f7ea]"
                                >
                                  <div className="font-medium">{itemCopy.name}</div>
                                  <div className="text-xs text-zinc-500">{itemCopy.subtitle}</div>
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
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-[#f4f7ea]"
                    >
                      {getTabLabel(tab.label)}
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="mt-auto">
            <div className="h-[2px] bg-[#6d9219]" />
            <div className="h-[10px] bg-[#92be1f]" />
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;
