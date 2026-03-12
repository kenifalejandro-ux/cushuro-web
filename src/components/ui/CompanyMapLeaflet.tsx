/**client/src/components/ui/CompanyMapLeaflet.tsx */

"use client";

import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";
import { Marker, MapContainer, Popup, TileLayer } from "react-leaflet";

import { OptimizedImage } from "./OptimizedImage";
import { type CompanyLocationItem } from "../sections/CompanyLocationMap";

interface CompanyMapLeafletProps {
  locations: CompanyLocationItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  mapClassName?: string;
  center?: [number, number];
  initialZoom?: number;
  minZoom?: number;
  maxZoom?: number;
  projectionScale?: number;
  primaryColor?: string;
}

// Ajuste necesario en Leaflet para mostrar íconos en Vite.
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

export default function CompanyMapLeaflet({
  locations,
  title,
  subtitle,
  className,
  mapClassName,
  center,
  initialZoom = 8,
  minZoom = 1,
  maxZoom = 18,
}: CompanyMapLeafletProps) {
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
    <section className={className ?? "mt-12 pb-20"}>
      {title ? (
        <h2 className="mb-4 text-center text-4xl font-bold text-blue-900">{title}</h2>
      ) : null}
      {subtitle ? <p className="mb-10 text-center text-slate-600">{subtitle}</p> : null}

      <MapContainer
        center={mapCenter}
        zoom={initialZoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        scrollWheelZoom={false}
        className={`${mapClassName ?? "h-[520px] md:h-[640px]"} w-full rounded-2xl shadow-lg`}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location, index) => (
          <Marker
            key={location.id ?? `${location.companyName}-${index}`}
            position={toLeafletLatLng(location.coordinates)}
          >
            <Popup minWidth={280} maxWidth={320}>
              <div className="w-[280px] overflow-hidden rounded-xl border border-zinc-200 bg-white">
                {location.imageSrc ? (
                  <div className="relative h-28 w-full overflow-hidden">
                    <OptimizedImage
                      src={location.imageSrc}
                      alt={location.imageAlt ?? location.companyName}
                      fill
                      sizes="280px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}

                <div className="space-y-1 p-3 text-[12px] leading-snug text-zinc-700">
                  {location.city ? (
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                      {location.city}
                    </p>
                  ) : null}

                  <h4 className="text-sm font-bold leading-tight text-zinc-900">
                    {location.companyName}
                  </h4>

                  {location.status ? (
                    <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                      {location.status}
                    </span>
                  ) : null}

                  {location.mineralType ? (
                    <p>
                      <span className="font-semibold text-zinc-500">Mineral:</span>{" "}
                      {location.mineralType}
                    </p>
                  ) : null}

                  {location.productionCenter ? (
                    <p>
                      <span className="font-semibold text-zinc-500">Unidad:</span>{" "}
                      {location.productionCenter}
                    </p>
                  ) : null}

                  {location.address ? (
                    <p>
                      <span className="font-semibold text-zinc-500">Ubicación:</span>{" "}
                      {location.address}
                    </p>
                  ) : null}

                  {location.ruc ? (
                    <p>
                      <span className="font-semibold text-zinc-500">RUC:</span> {location.ruc}
                    </p>
                  ) : null}

                  {location.manager ? (
                    <p>
                      <span className="font-semibold text-zinc-500">Responsable:</span>{" "}
                      {location.manager}
                    </p>
                  ) : null}

                  {location.phone ? (
                    <p>
                      <span className="font-semibold text-zinc-500">Teléfono:</span>{" "}
                      {location.phone}
                    </p>
                  ) : null}

                  {location.email ? (
                    <p>
                      <span className="font-semibold text-zinc-500">Email:</span> {location.email}
                    </p>
                  ) : null}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
