/**client/src/components/ui/CompanyMapHybrid.tsx */

"use client";

import * as L from "leaflet";
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

delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const toLeafletLatLng = ([longitude, latitude]: [number, number]): [
  number,
  number
] => [latitude, longitude];

const getPulsingMarkerIcon = () =>
  L.divIcon({
    className: "company-marker-icon",
    html: `
      <div class="relative flex h-[120px] w-[120px] items-center justify-center">
        <span class="absolute h-[110px] w-[110px] rounded-full bg-[#f3f707] opacity-25 animate-ping"></span>
        <span class="relative h-5 w-5 rounded-full border-2 border-white shadow-lg bg-[#79f307]"></span>
      </div>
    `,
    iconSize: [120, 120],
    iconAnchor: [60, 60],
    popupAnchor: [0, -52],
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

    const bounds = L.latLngBounds(
      locations.map((l) => toLeafletLatLng(l.coordinates))
    );

    map.fitBounds(bounds, {
      padding: [140, 140],
      maxZoom: fitMaxZoom,
    });
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

}: CompanyMapHybridProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const markerRefs = useRef<Record<number, L.Marker | null>>({});
  const activeIndexRef = useRef<number | null>(null);
  const markerIcon = useMemo(() => getPulsingMarkerIcon(), []);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [mapMode, setMapMode] = useState<"satellite" | "map">("map");

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
    <section className={className}>
      {(title || subtitle) && (
        <header className="mb-6">
          {title && (
            <h2 className="text-3xl font-bold text-zinc-800">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-2 max-w-2xl text-zinc-500">{subtitle}</p>
          )}
        </header>
      )}

      <div
        className={`relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ${
          mapClassName ?? "h-[520px] md:h-[680px]"
        }`}
      >
       <MapContainer
  ref={mapRef}
  center={mapCenter}
  zoom={initialZoom}
  minZoom={minZoom}
  maxZoom={maxZoom}
  scrollWheelZoom={false}
  className="h-full w-full" 
>
        {mapMode === "satellite" ? (
  <TileLayer
    attribution="© Esri"
    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  />
) : (
  <TileLayer
    attribution="© OpenStreetMap"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
)}

          <FitBounds locations={locations} />


          {locations.length > 1 && (
            <Polyline
              positions={locations.map((l) =>
                toLeafletLatLng(l.coordinates)
              )}
              pathOptions={{
                color: "#0b22f0",
                weight: 3,
                opacity: 0.7,
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

  if (hoverTimeout.current) {
    clearTimeout(hoverTimeout.current);
  }

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
           <Popup
                minWidth={280}
                maxWidth={320}
                autoPan={false}
                autoClose={false}
                closeButton={isTouchDevice}
              >
                <div className="w-[280px] overflow-hidden rounded-xl border border-zinc-200 bg-white">
                  {location.imageSrc && (
                    <div className="relative h-28 w-full overflow-hidden">
                      <OptimizedImage
                        src={location.imageSrc}
                        alt={location.imageAlt ?? location.companyName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-1 p-3 text-[12px] text-zinc-700">
                    {location.city && (
                      <p className="text-[10px] font-semibold uppercase text-zinc-500">
                        {location.city}
                      </p>
                    )}

                    <h4 className="text-sm font-bold text-zinc-900">
                      {location.companyName}
                    </h4>

                    {location.status && (
                      <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                        {location.status}
                      </span>
                    )}

                    {location.mineralType && (
                      <p>
                        <span className="font-semibold text-zinc-500">
                          Mineral:
                        </span>{" "}
                        {location.mineralType}
                      </p>
                    )}

                    {location.address && (
                      <p>
                        <span className="font-semibold text-zinc-500">
                          Ubicación:
                        </span>{" "}
                        {location.address}
                      </p>
                    )}

                    {location.phone && (
                      <p>
                        <span className="font-semibold text-zinc-500">
                          Teléfono:
                        </span>{" "}
                        {location.phone}
                      </p>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="absolute right-6 top-6 z-[1000] flex overflow-hidden rounded-full bg-white shadow-lg">
  <button
    type="button"
    onClick={() => setMapMode("map")}
    aria-pressed={mapMode === "map"}
    className={`px-4 py-2 text-sm font-semibold ${
      mapMode === "map" ? "bg-green-600 text-white" : "text-gray-600"
    }`}
  >
    2D
  </button>

  <button
    type="button"
    onClick={() => setMapMode("satellite")}
    aria-pressed={mapMode === "satellite"}
    className={`px-4 py-2 text-sm font-semibold ${
      mapMode === "satellite" ? "bg-green-600 text-white" : "text-gray-600"
    }`}
  >
    Satelite
  </button>
</div>
      </div>
    </section>
  );
}
