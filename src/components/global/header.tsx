/* client/src/components/global/Header.tsx */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { useImageOverlap } from "../../hooks/useImageOverlap";

const IMG_BASE = import.meta.env.VITE_IMG_URL || import.meta.env.VITE_ASSETS_URL;

gsap.registerPlugin(ScrollTrigger);

/* -------- TYPES -------- */


interface Tab {
  label: string;
  href: string;
}

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

/* -------- Productos PARA EL SUBMENU -------- */

const PRODUCTS_SUBMENU = [
  {
    id: "CalViva",
    name: "Cal Viva",
    subtitle: "Sitios web modernos y escalables",
    href: "/Productos/cal-viva",
  },
  {
    id: "CalAgricola",
    name: "Cal Agricola",
    subtitle: "Experiencias digitales intuitivas",
    href: "/Productos/cal-agricola",
  },
  {
    id: "PiedraCaliza",
    name: "PiedraCaliza",
    subtitle: "Identidad de marca memorable",
    href: "/Productos/piedra-caliza",
  },
  {
    id: "CarbonAntracita",
    name: "Carbon Antracita",
    subtitle: "Visualización impactante",
    href: "/Productos/carbon-antracita",
  },
    {
    id: "CarbonCisco",
    name: "Carbon Cisco",
    subtitle: "Visualización impactante",
    href: "/Productos/carbon-cisco",
  },

];

/* -------- Productos PARA EL SUBMENU -------- */

const SERVICES_SUBMENU = [
    {
      id: "OxidodeCalcio",
    name: "Suministro de oxido de calcio",
    subtitle: "Sitios web modernos y escalables",
    href: "/Servicios-Industriales/suministro-de-oxido-de-calcio",
  },
  {
    id: "TransporteLogistico",
    name: "Transporte Logistico",
    subtitle: "Experiencias digitales intuitivas",
    href: "/Servicios-Industriales/transporte-logistico-especializado",
  },
  {
    id: "OperacionMaquinaria",
    name: "Operación con maquinaria",
    subtitle: "Identidad de marca memorable",
    href: "/Servicios-Industriales/operacion-con-maquinaria-pesada",
  },
];
/* -------- DEFAULT TABS -------- */

const DEFAULT_TABS: Tab[] = [
  { label: "La Empresa", href: "/la-empresa" },
  { label: "Productos", href: "/Productos" },
  { label: "Servicios-Industriales", href: "/Servicios-Industriales" },

];

export function Header({
  logo,
  logoLight = "img-inicio/logo/logo-caldera-cushuro.png",
  logoDark = "img-inicio/logo/logo-caldera-cushuro.png",
  brandName = "Calera Santa Isabel de Cushuro",
  tabs = DEFAULT_TABS,
  contactInfo = {
    email: "kenif.alejandro@zincelideas.com",
    phone: "+51 933 838 792",
    address: "Lima, Perú",
  },
}: HeaderProps) {
  const { isDarkOverlapping, isLightOverlapping } = useImageOverlap({
    targetElementId: "banner",
    debounceDelay: 10,
  });

  const isDarkTheme = isDarkOverlapping && !isLightOverlapping;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const submenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const location = useLocation();
  const isProductsActive = location.pathname.startsWith("/Productos");
  const isServicesActive = location.pathname.startsWith("/Servicios-Industriales");
  const forceWhiteLogo = location.pathname.startsWith("/Productos/");

  /*activa el submenu */
  const hasSubmenu = (label: string) => label === "Productos" || label === "Servicios-Industriales";

  const getSubmenuByTab = (label: string) => {
    if (label === "Productos") return PRODUCTS_SUBMENU;
    if (label === "Servicios-Industriales") return SERVICES_SUBMENU;
    return [];
  };

  const resolveAssetUrl = (value?: string) => {
    if (!value) return value;
    if (/^https?:\/\//i.test(value)) return value;
    if (!IMG_BASE) return value;
    return `${IMG_BASE}/${value.replace(/^\//, "")}`;
  };
  const logoSrc = resolveAssetUrl(
    logo ?? (forceWhiteLogo ? logoDark : isDarkTheme ? logoLight : logoDark)
  );
  const shouldShowLogo = Boolean(logoSrc);

  /* -------- SCROLL HEADER -------- */
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

  /* -------- GSAP NAV ANIMATION -------- */
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

  /* -------- HEADER CLASSES -------- */
  const headerClasses = `
    fixed top-0 left-0 right-0 z-[100]
    transition-all duration-300 bg-white/20 backdrop-blur-lg
    ${isHidden ? "-translate-y-full" : "translate-y-0"}
    ${
      isDarkTheme
        ? "bg-black/0 text-white"
        : isScrolled
          ? "bg-white/0 text-black shadow-lg"
          : "bg-transparent text-black"
    }
  `;

  return (
    <>
      {/* ================= HEADER OCULTO DESDE EL INICO - BANNER================= 
      <header
        id="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled
            ? "bg-white/30 backdrop-blur-lg shadow-lg opacity-100"
            : "bg-transparent shadow-none opacity-100"
        }`}
      >*/}
      {/**HEADER - BANNER QUE HACE VISIBLE EL BANNER */}
      <header id="banner" className={headerClasses}>
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-25">
            {/* LOGO */}
            <NavLink
              to="/"
              className="relative z-[110] flex items-center gap-3"
              onClick={() => setIsModalOpen(false)}
            >
              {shouldShowLogo ? (
                <img src={logoSrc} alt={brandName} className="h-15 md:h-20 mt-5" />
              ) : (
                <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">{brandName.charAt(0)}</span>
                </div>
              )}
              <span className="text-xl md:text-2xl text-black-900">{brandName}</span>
            </NavLink>

            {/* NAV DESKTOP - lg: (1024px+) */}
            <nav ref={navRef} className="hidden lg:flex items-center  gap-6 relative">
              {tabs.map((tab) => {
                const tabHasSubmenu = hasSubmenu(tab.label);
                const submenuItems = getSubmenuByTab(tab.label);
                const isDropdownOpen = openDesktopSubmenu === tab.label;
                const isActive =
                  tab.label === "Productos"
                    ? isProductsActive
                    : tab.label === "Servicios-Industriales"
                      ? isServicesActive
                      : location.pathname === tab.href;

                return tabHasSubmenu ? (
                  <div
                    key={tab.href}
                    className="relative group "
                    onMouseEnter={() => handleSubmenuEnter(tab.label)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={isDropdownOpen}
                      className={`
                        relative px-4 py-2 text-white rounded-lg transition-colors flex items-center gap-1 text-base font-medium cursor-default
                        ${isDarkTheme ? "!text-gray-800 hover:!text-gray-600" : "hover:text-gray-300"}
                      `}
                    >
                      {tab.label}
                      <svg
                        className="w-4 h-4  transition-transform group-hover:rotate-180"
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
                        className={`
                          absolute bottom-0 left-4 right-4 h-0.5 bg-purple-100 rounded-full
                          transition-all duration-300
                          ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-75"}
                        `}
                      />
                    </button>

                    {/* DROPDOWN DESKTOP */}
                    {isDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-3 w-72 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 transition-all duration-200"
                        onMouseEnter={() => handleSubmenuEnter(tab.label)}
                        onMouseLeave={handleSubmenuLeave}
                      >
                        {submenuItems.map((service) => (
                          <NavLink
                            key={service.id}
                            to={service.href}
                            className="block px-6 py-4 hover:bg-purple-600 hover:text-white transition-colors"
                            onClick={() => setOpenDesktopSubmenu(null)}
                          >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm opacity-70 mt-1">{service.subtitle}</div>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={tab.href}
                    to={tab.href}
                    className={`
                      relative px-4 text-white py-2 rounded-lg transition-colors text-base font-medium
                      ${isDarkTheme ? "!text-gray-800 hover:!text-gray-600" : "hover:text-gray-300"}
                    `}
                  >
                    {tab.label}
                    <span
                      className={`
                        absolute bottom-0 left-4 right-4 h-0.5 bg-white/60 rounded-full
                        transition-all duration-300
                        ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 hover:opacity-50 hover:scale-x-75"}
                      `}
                    />
                  </NavLink>
                );
              })}
            </nav>

            {/* MENU HAMBURGUESA (mobile) */}
            <button
              onClick={() => setIsModalOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isDarkTheme ? "text-zinc-900 hover:text-zinc-700" : "text-white hover:text-zinc-200"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= CONTACT MODAL (MÓVIL) ================= */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-full md:w-96
          transform transition-transform duration-300
          ${isModalOpen ? "translate-x-0" : "translate-x-full"}
          bg-white text-black
        `}
      >
        <div className="h-full flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-black/10">
            <h2 className="text-2xl">Zincel Ideas Globales</h2>
            <button onClick={closeModal}>
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* CONTACT INFO */}
            {contactInfo.email && (
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={closeModal}
                className="flex items-start gap-4 p-4 rounded-lg hover:text-white hover:bg-black transition-colors"
              >
                <Mail className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-sm opacity-60">Email</p>
                  <p>{contactInfo.email}</p>
                </div>
              </a>
            )}

            {contactInfo.phone && (
              <a
                href={`tel:${contactInfo.phone}`}
                onClick={closeModal}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                <Phone className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-sm opacity-60">Teléfono</p>
                  <p>{contactInfo.phone}</p>
                </div>
              </a>
            )}

            {contactInfo.address && (
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-black hover:text-white transition-colors">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-sm opacity-60">Dirección</p>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
            )}

            {/* NAV LINKS CON SUBMENÚ EN MÓVIL */}
            <div className="pt-6 border-t border-black/10 hover:text-black/70 transition-colors">
              <p className="text-sm opacity-60 mb-3">Navegación</p>
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const tabHasSubmenu = hasSubmenu(tab.label);
                  const submenuItems = getSubmenuByTab(tab.label);
                  const isMobileSubmenuOpen = openMobileSubmenu === tab.label;

                  if (tabHasSubmenu) {
                    return (
                      <div key={tab.href}>
                        <button
                          onClick={() =>
                            setOpenMobileSubmenu((current) => (current === tab.label ? null : tab.label))
                          }
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <span>{tab.label}</span>
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${
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
                          <div className="ml-6 mt-1 space-y-1">
                            {submenuItems.map((service) => (
                              <NavLink
                                key={service.id}
                                to={service.href}
                                onClick={() => {
                                  closeModal();
                                  setOpenMobileSubmenu(null);
                                }}
                                className="block px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
                              >
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs opacity-70">{service.subtitle}</div>
                              </NavLink>
                            ))}
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
                      className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      {tab.label}
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;
