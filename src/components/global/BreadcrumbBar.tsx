/**client/src/global/BreadcrumbBar.tsx */ //guia de pestañas

import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocalizedContent } from "../../context/SiteLanguageContext";

type Crumb = {
  href?: string;
  label: string;
};

const ROUTE_CRUMBS: Record<string, Crumb[]> = {
  "/la-empresa": [{ label: "La Empresa" }],
  "/Productos/cal-viva": [
    { href: "/Productos", label: "Productos" },
    { label: "Cal Viva" },
  ],
  "/Productos/cal-agricola": [
    { href: "/Productos", label: "Productos" },
    { label: "Cal Agricola" },
  ],
  "/Productos/piedra-caliza": [
    { href: "/Productos", label: "Productos" },
    { label: "Piedra Caliza" },
  ],
  "/Productos/carbon-antracita": [
    { href: "/Productos", label: "Productos" },
    { label: "Carbon Antracita" },
  ],
  "/Productos/carbon-cisco": [
    { href: "/Productos", label: "Productos" },
    { label: "Carbon Cisco" },
  ],
  "/Servicios-Industriales/transporte-logistico-especializado": [
    { href: "/Servicios-Industriales", label: "Servicios Industriales" },
    { label: "Transporte Logistico" },
  ],
  "/Servicios-Industriales/operacion-con-maquinaria-pesada": [
    { href: "/Servicios-Industriales", label: "Servicios Industriales" },
    { label: "Operacion con Maquinaria" },
  ],
  "/compromiso-ambiental-y-social/medio-ambiente": [
    {
      href: "/compromiso-ambiental-y-social",
      label: "Compromiso Ambiental y Social",
    },
    { label: "Medio Ambiente" },
  ],
  "/compromiso-ambiental-y-social/responsabilidad-social": [
    {
      href: "/compromiso-ambiental-y-social",
      label: "Compromiso Ambiental y Social",
    },
    { label: "Responsabilidad Social" },
  ],
  "/contacto": [{ label: "Contacto" }],
};

const ROUTE_CRUMBS_EN: Record<string, Crumb[]> = {
  "/la-empresa": [{ label: "Company" }],
  "/Productos/cal-viva": [
    { href: "/Productos", label: "Products" },
    { label: "Quicklime" },
  ],
  "/Productos/cal-agricola": [
    { href: "/Productos", label: "Products" },
    { label: "Agricultural Lime" },
  ],
  "/Productos/piedra-caliza": [
    { href: "/Productos", label: "Products" },
    { label: "Limestone" },
  ],
  "/Productos/carbon-antracita": [
    { href: "/Productos", label: "Products" },
    { label: "Anthracite Coal" },
  ],
  "/Productos/carbon-cisco": [
    { href: "/Productos", label: "Products" },
    { label: "Carbon Cisco" },
  ],
  "/Servicios-Industriales/transporte-logistico-especializado": [
    { href: "/Servicios-Industriales", label: "Industrial Services" },
    { label: "Logistics Transport" },
  ],
  "/Servicios-Industriales/operacion-con-maquinaria-pesada": [
    { href: "/Servicios-Industriales", label: "Industrial Services" },
    { label: "Heavy Equipment Operations" },
  ],
  "/compromiso-ambiental-y-social/medio-ambiente": [
    {
      href: "/compromiso-ambiental-y-social",
      label: "Environmental Commitment",
    },
    { label: "Environment" },
  ],
  "/compromiso-ambiental-y-social/responsabilidad-social": [
    {
      href: "/compromiso-ambiental-y-social",
      label: "Environmental Commitment",
    },
    { label: "Social Responsibility" },
  ],
  "/contacto": [{ label: "Contact" }],
};

function toTitleCase(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildFallbackCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);
  let currentPath = "";

  return segments.map((segment, index) => {
    currentPath += `/${segment}`;
    return {
      href: index === segments.length - 1 ? undefined : currentPath,
      label: toTitleCase(segment),
    };
  });
}

export function BreadcrumbBar() {
  const location = useLocation();
  const copy = useLocalizedContent({
    es: {
      home: "Inicio",
      ariaLabel: "Breadcrumb",
      routeCrumbs: ROUTE_CRUMBS,
    },
    en: {
      home: "Home",
      ariaLabel: "Breadcrumb",
      routeCrumbs: ROUTE_CRUMBS_EN,
    },
  });

  if (location.pathname === "/") {
    return null;
  }

  const crumbs = copy.routeCrumbs[location.pathname] ?? buildFallbackCrumbs(location.pathname);

  return (
    <section className="dark-image border-b border-zinc-200/80 bg-zinc-100/10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav
          aria-label={copy.ariaLabel}
          className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-500 sm:text-xs md:text-sm"
        >
          <Link to="/" className="font-medium text-emerald-600 transition-colors hover:text-emerald-700">
            {copy.home}
          </Link>

          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;

            return (
              <Fragment key={`${crumb.label}-${index}`}>
                <span className="text-zinc-300">/</span>
                {crumb.href && !isLast ? (
                  <Link
                    to={crumb.href}
                    className="transition-colors hover:text-zinc-700"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-zinc-700">{crumb.label}</span>
                )}
              </Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

export default BreadcrumbBar;
