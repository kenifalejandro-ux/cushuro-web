/**client/src/components/ui/CompanyMapHybrid.tsx */

"use client";

import * as L from "leaflet";
import { MapPin } from "@phosphor-icons/react";
import { useEffect, useMemo, useRef, useState } from "react";

import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  Polyline,
  TileLayer,
  useMap,
} from "react-leaflet";

import { OptimizedImage } from "./OptimizedImage";

type LocationType = "planta" | "mina" | "oficina" | "cantera";

export interface CompanyLocationItem {
  id?: string;
  companyName: string;
  coordinates: [number, number];
  type?: LocationType;
  mineralType?: string;
  city?: string;
  address?: string;
  productionCenter?: string;
  manager?: string;
  phone?: string;
  email?: string;
  imageSrc?: string;
  imageAlt?: string;
  status?: "Operativa" | "En Exploración" | "En Construcción";
}

interface CompanyMapHybridProps {
  locations: CompanyLocationItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  mapClassName?: string;
  center?: [number, number];
  initialZoom?: number;
  minZoom?: number;
  maxZoom?: number;

  // Props heredadas del mapa anterior
  projectionScale?: number;
  primaryColor?: string;
}

/* ───────────────────────────────────────────────────────────────────
   Estilos alineados al sistema Cushuro (emerald + Inter + tarjeta b2b).
   Se inyectan una sola vez. El acento llega por la CSS var --cushuro-accent
   seteada en el contenedor, así marcadores y popup lo heredan.
   ─────────────────────────────────────────────────────────────────── */
const MAP_CSS = `
.cushuro-map-wrap { --cushuro-accent: #059669; }
.cushuro-marker { position: relative; width: 24px; height: 24px; }
.cushuro-marker-ring,
.cushuro-marker-dot { position: absolute; left: 50%; top: 50%; border-radius: 9999px; }
.cushuro-marker-ring {
  width: 16px; height: 16px; background: var(--cushuro-accent);
  transform: translate(-50%, -50%);
  animation: cushuroRing 2.4s ease-out infinite;
}
.cushuro-marker-dot {
  width: 14px; height: 14px; background: var(--cushuro-accent);
  border: 2px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,.5);
  transform: translate(-50%, -50%);
  animation: cushuroGlow 2.2s ease-in-out infinite;
}
@keyframes cushuroRing {
  0%   { transform: translate(-50%, -50%) scale(.5); opacity: .7; }
  100% { transform: translate(-50%, -50%) scale(2.6); opacity: 0; }
}
@keyframes cushuroGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
  50%      { box-shadow: 0 0 12px 3px rgba(16,185,129,.7); }
}
@media (prefers-reduced-motion: reduce) {
  .cushuro-marker-ring, .cushuro-marker-dot { animation: none; }
}
/* Limpia el chrome por defecto del popup de Leaflet: la ficha b2b se ve sola */
.cushuro-map-wrap .leaflet-popup-content-wrapper {
  background: transparent; box-shadow: none; padding: 0; border-radius: 16px;
}
.cushuro-map-wrap .leaflet-popup-content { margin: 0; width: auto !important; }
.cushuro-map-wrap .leaflet-popup-tip {
  background: #fff; box-shadow: 0 2px 10px rgba(24,24,27,.18);
}
.cushuro-map-wrap .leaflet-popup-close-button {
  color: #a8a29e; padding: 8px 9px 0 0;
}
.cushuro-map-wrap .leaflet-control-attribution {
  background: rgba(255,255,255,.7); color: rgba(24,24,27,.5);
  font-size: 10px; border-radius: 6px 0 0 0;
}
.cushuro-map-wrap .leaflet-control-attribution a { color: rgba(24,24,27,.65); }
`;

let stylesInjected = false;
function useMapStyles() {
  useEffect(() => {
    if (stylesInjected || typeof document === "undefined") return;
    const el = document.createElement("style");
    el.setAttribute("data-cushuro-map", "");
    el.textContent = MAP_CSS;
    document.head.appendChild(el);
    stylesInjected = true;
  }, []);
}

delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const toLeafletLatLng = ([longitude, latitude]: [number, number]): [number, number] => [
  latitude,
  longitude,
];

const getPulsingMarkerIcon = () =>
  L.divIcon({
    className: "company-marker-icon",
    html: `
      <div class="cushuro-marker">
        <span class="cushuro-marker-ring"></span>
        <span class="cushuro-marker-dot"></span>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -14],
  });

function FitBounds({
  locations,
  fitMaxZoom = 9,
}: {
  locations: CompanyLocationItem[];
  fitMaxZoom?: number;
}) {
  const map = useMap();

  useEffect(() => {
    if (!locations.length) return;
    const bounds = L.latLngBounds(locations.map((l) => toLeafletLatLng(l.coordinates)));
    map.fitBounds(bounds, { padding: [140, 140], maxZoom: fitMaxZoom });
  }, [locations, map, fitMaxZoom]);

  return null;
}

export default function CompanyMapHybrid({
  locations,
  title,
  subtitle,
  className,
  mapClassName,
  center,
  initialZoom = 5,
  minZoom = 4,
  maxZoom = 12,
  primaryColor = "#059669",
}: CompanyMapHybridProps) {
  useMapStyles();

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const markerRefs = useRef<Record<number, L.Marker | null>>({});
  const activeIndexRef = useRef<number | null>(null);
  const markerIcon = useMemo(() => getPulsingMarkerIcon(), []);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [mapMode, setMapMode] = useState<"satellite" | "map">("map");

  const accent = primaryColor || "#059669";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouchDevice(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const mapCenter = useMemo<[number, number]>(() => {
    if (center) return toLeafletLatLng(center);
    if (!locations.length) return [-9.19, -75.0152];

    const totals = locations.reduce(
      (acc, location) => {
        acc.longitude += location.coordinates[0];
        acc.latitude += location.coordinates[1];
        return acc;
      },
      { longitude: 0, latitude: 0 }
    );

    return toLeafletLatLng([
      totals.longitude / locations.length,
      totals.latitude / locations.length,
    ]);
  }, [center, locations]);

  if (!locations.length) return null;

  return (
    <section className={`light-image  ${className ?? ""}`}>
      {(title || subtitle) && (
        <header className="mb-8 text-center px-6 lg:px-12">
          <p className="b2b-eyebrow text-center">Sedes &amp; cobertura</p>
          {title && (
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-900 md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-600 md:text-base">
              {subtitle}
            </p>
          )}
        </header>
      )}

      <div
        className={`cushuro-map-wrap relative overflow-hidden bg-[#fafafa] shadow-2xl ${
          mapClassName ?? "h-[520px] md:h-[680px]"
        }`}
        style={{ ["--cushuro-accent" as string]: accent }}
      >
        <MapContainer
          ref={mapRef}
          center={mapCenter}
          zoom={initialZoom}
          minZoom={minZoom}
          maxZoom={maxZoom}
          scrollWheelZoom={false}
          className="h-full w-full"
          style={{ background: "#fafafa" }}
        >
          {mapMode === "satellite" ? (
            <TileLayer
              attribution="&copy; Esri, Maxar, Earthstar Geographics"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          ) : (
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              subdomains="abcd"
              detectRetina
            />
          )}

          <FitBounds locations={locations} />

          {locations.length > 1 && (
            <Polyline
              positions={locations.map((l) => toLeafletLatLng(l.coordinates))}
              pathOptions={{
                color: accent,
                weight: 2.5,
                opacity: 0.85,
                dashArray: "2 10",
                lineCap: "round",
              }}
            />
          )}

          {locations.map((location, index) => (
            <Marker
              key={location.id ?? index}
              position={toLeafletLatLng(location.coordinates)}
              icon={markerIcon}
              ref={(marker) => {
                markerRefs.current[index] = marker;
              }}
              eventHandlers={{
                mouseover: () => {
                  if (isTouchDevice) return;
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

                  const marker = markerRefs.current[index];
                  if (!marker) return;

                  const position = marker.getLatLng();
                  mapRef.current?.flyTo(position, mapRef.current.getZoom(), {
                    duration: 0.6,
                  });

                  Object.values(markerRefs.current).forEach((m) => m?.closePopup());
                  marker.openPopup();
                },
                mouseout: () => {
                  if (isTouchDevice) return;
                  hoverTimeout.current = setTimeout(() => {
                    markerRefs.current[index]?.closePopup();
                  }, 120);
                },
                click: () => {
                  if (!isTouchDevice) return;
                  if (activeIndexRef.current === index) {
                    markerRefs.current[index]?.closePopup();
                    activeIndexRef.current = null;
                    return;
                  }
                  Object.values(markerRefs.current).forEach((m) => m?.closePopup());
                  markerRefs.current[index]?.openPopup();
                  activeIndexRef.current = index;
                },
              }}
            >
              <Popup minWidth={280} maxWidth={300} autoPan={false} autoClose={false} closeButton={isTouchDevice}>
                {/* ─── Ficha de sede (estilo b2b-card) ─── */}
                <div className="relative w-[280px] overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                  {/* hairline emerald, firma del sistema */}
                  <span
                    className="absolute inset-x-[18px] top-0 z-[2] h-0.5"
                    style={{
                      background: `linear-gradient(90deg, ${accent}, rgba(24,24,27,0))`,
                    }}
                  />

                  {location.imageSrc && (
                    <div className="relative h-24 w-full overflow-hidden bg-stone-100">
                      <OptimizedImage
                        src={location.imageSrc}
                        alt={location.imageAlt ?? location.companyName}
                        fill
                        className="object-cover"
                      />
                      {location.type && (
                        <span
                          className="absolute bottom-2.5 left-3 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                          style={{ background: "rgba(5,150,105,.92)" }}
                        >
                          {location.type}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-4 pt-3.5">
                    {location.city && (
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                        {location.city}
                      </p>
                    )}

                    <h4 className="mt-1.5 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-zinc-900">
                      {location.companyName}
                    </h4>

                    {location.status && (
                      <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: accent }}
                        />
                        <span className="text-[11px] font-semibold text-emerald-700">
                          {location.status}
                        </span>
                      </span>
                    )}

                    {(location.address || location.productionCenter) && (
                      <div className="mt-3 flex items-start gap-2">
                        <MapPin size={15} strokeWidth={1.8} className="mt-0.5 shrink-0 text-emerald-600" />
                        <p className="text-[12px] leading-snug text-zinc-600">
                          {location.address ?? location.productionCenter}
                        </p>
                      </div>
                    )}

                    {location.mineralType && (
                      <div className="mt-3 border-t border-stone-100 pt-3">
                        <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-stone-400">
                          Materiales en sede
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {location.mineralType
                            .split(/[/,]/)
                            .map((m) => m.trim())
                            .filter(Boolean)
                            .map((mat) => (
                              <span
                                key={mat}
                                className="rounded-full border border-stone-200 bg-stone-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700"
                              >
                                {mat}
                              </span>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Control 2D / Satélite — pill de marca */}
        <div className="absolute right-5 top-5 z-[1000] flex gap-[3px] rounded-full border border-stone-200 bg-white p-1 shadow-lg">
          <button
            type="button"
            onClick={() => setMapMode("map")}
            aria-pressed={mapMode === "map"}
            className="rounded-full px-4 py-1.5 text-xs font-semibold transition"
            style={{
              background: mapMode === "map" ? accent : "transparent",
              color: mapMode === "map" ? "#fff" : "#52525b",
            }}
          >
            Mapa
          </button>
          <button
            type="button"
            onClick={() => setMapMode("satellite")}
            aria-pressed={mapMode === "satellite"}
            className="rounded-full px-4 py-1.5 text-xs font-semibold transition"
            style={{
              background: mapMode === "satellite" ? accent : "transparent",
              color: mapMode === "satellite" ? "#fff" : "#52525b",
            }}
          >
            Satélite
          </button>
        </div>
      </div>
    </section>
  );
}