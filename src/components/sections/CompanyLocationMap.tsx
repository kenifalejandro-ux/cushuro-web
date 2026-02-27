/*client/src/components/ui/CompanyLocationMap.tsx*/

import { type Dispatch, type SetStateAction, useEffect, useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  useMapContext,
} from "react-simple-maps";

import { OptimizedImage } from "../ui/OptimizedImage";

export interface CompanyLocationItem {
  id?: string;
  companyName: string;
  coordinates: [number, number];
  city?: string;
  address?: string;
  productionCenter?: string;
  ruc?: string;
  phone?: string;
  email?: string;
  manager?: string;

  // Puede ser base sin extensión (para variantes) o archivo directo con extensión.
  // Ej: "/imagenes-optim/ruta/mi-imagen" o "/imagenes-optim/ruta/mi-imagen.jpeg"
  imageSrc?: string;
  imageAlt?: string;
  status?: "Operativa" | "En Exploración" | "En Construcción";
  mineralType?: string; // Ej: Caliza, Cobre, Oro
}

interface CompanyLocationMapProps {
  locations: CompanyLocationItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  mapClassName?: string;
  geographyUrl?: string;
  projection?: string;
  center?: [number, number];
  projectionScale?: number;
  primaryColor?: string;
  initialZoom?: number;
  minZoom?: number;
  maxZoom?: number;
}

interface MapContextShape {
  projection?: ((coordinates: [number, number]) => [number, number] | null) | null;
  width?: number;
}

const DEFAULT_GEOGRAPHY_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function CompanyTooltipMarker({
  location,
  index,
  hoveredIndex,
  setHoveredIndex,
  activeTouchIndex,
  setActiveTouchIndex,
  isTouchDevice,
  primaryColor,
}: {
  location: CompanyLocationItem;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  activeTouchIndex: number | null;
  setActiveTouchIndex: Dispatch<SetStateAction<number | null>>;
  isTouchDevice: boolean;
  primaryColor: string;
}) {
  const mapContext = useMapContext() as MapContextShape | undefined;
  const projection = mapContext?.projection;
  const mapWidth = mapContext?.width ?? 800;
  const projected = projection ? projection(location.coordinates) : null;
  const [x, y] = projected ?? [0, 0];
  const tooltipWidth = 280;
  const tooltipHeight = 240;
  const padding = 12;
  const isHovered = hoveredIndex === index || activeTouchIndex === index;

  const xOffset =
    x < tooltipWidth / 2 + padding
      ? padding
      : x > mapWidth - tooltipWidth / 2 - padding
        ? -tooltipWidth - padding
        : -tooltipWidth / 2;
  const yOffset = y < tooltipHeight + padding ? padding : -tooltipHeight - padding;

  return (
    <Marker
      coordinates={location.coordinates}
      onMouseEnter={() => {
        if (!isTouchDevice) setHoveredIndex(index);
      }}
      onMouseMove={() => {
        if (!isTouchDevice) setHoveredIndex(index);
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) setHoveredIndex(null);
      }}
      onTouchStart={(event: any) => {
        event?.stopPropagation?.();
        setActiveTouchIndex((prev) => (prev === index ? null : index));
      }}
    >
      <g className="group cursor-pointer pointer-events-auto">
        <circle r={12} fill="#000000" pointerEvents="all" />
        <circle r={35} fill="#f8f408" className="animate-ping opacity-25" />
        <circle r={10} fill="#07f3cc" className="stroke-white stroke-2 shadow-lg" />
        <foreignObject
          x={xOffset}
          y={yOffset}
          width={tooltipWidth}
          height={tooltipHeight}
          className="pointer-events-none transition-all duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <div
            className={` rounded-2xl border border-zinc-300 bg-white shadow-2xl overflow-hidden transition-all duration-300 ${
              isHovered ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Imagen */}
            {location.imageSrc && (
              <div className="relative h-28 w-full overflow-hidden">
                <OptimizedImage
                  src={location.imageSrc} //en inicio.tsx esta para cambiar la iamgen
                  alt={location.imageAlt ?? location.companyName}
                  fill
                  sizes="280px"
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="p-4">
              {/* Ciudad */}
              {location.city && (
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                  {location.city}
                </p>
              )}

              {/* Nombre */}
              <h4 className="mt-1 text-sm font-bold text-zinc-900 leading-tight">
                {location.companyName}
              </h4>

              {/* Badge estado */}
              {location.status && (
                <span className="mt-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                  {location.status}
                </span>
              )}

              <div className="mt-3 space-y-1 text-[11px] text-zinc-700 leading-snug">
                {location.mineralType && (
                  <p>
                    <span className="font-semibold text-zinc-500">Mineral:</span>{" "}
                    {location.mineralType}
                  </p>
                )}

                {location.productionCenter && (
                  <p>
                    <span className="font-semibold text-zinc-500">Unidad:</span>{" "}
                    {location.productionCenter}
                  </p>
                )}

                {location.address && (
                  <p>
                    <span className="font-semibold text-zinc-500">Ubicación:</span>{" "}
                    {location.address}
                  </p>
                )}

                {location.ruc && (
                  <p>
                    <span className="font-semibold text-zinc-500">RUC:</span> {location.ruc}
                  </p>
                )}

                {location.manager && (
                  <p>
                    <span className="font-semibold text-zinc-500">Responsable:</span>{" "}
                    {location.manager}
                  </p>
                )}
              </div>
            </div>
          </div>
        </foreignObject>
      </g>
    </Marker>
  );
}

export default function CompanyLocationMap({
  locations,
  title,
  subtitle,
  className,
  mapClassName,
  geographyUrl = DEFAULT_GEOGRAPHY_URL,
  projection = "geoMercator",
  center,
  projectionScale = 2100,
  primaryColor = "#09682c",
  initialZoom = 1,
  minZoom = 1,
  maxZoom = 2.5,
}: CompanyLocationMapProps) {
  const [mapZoom, setMapZoom] = useState(initialZoom);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeTouchIndex, setActiveTouchIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setMapZoom(initialZoom);
  }, [initialZoom]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouchDevice(media.matches);
    update();

    const addListener = media.addEventListener?.bind(media);
    const removeListener = media.removeEventListener?.bind(media);

    if (addListener && removeListener) {
      addListener("change", update);
      return () => removeListener("change", update);
    }

    media.addListener?.(update);
    return () => media.removeListener?.(update);
  }, []);

  const mapCenter = useMemo<[number, number]>(() => {
    if (center) return center;
    if (!locations.length) return [0, 0];

    const totals = locations.reduce(
      (acc, location) => {
        acc.longitude += location.coordinates[0];
        acc.latitude += location.coordinates[1];
        return acc;
      },
      { longitude: 0, latitude: 0 }
    );

    return [totals.longitude / locations.length, totals.latitude / locations.length];
  }, [center, locations]);

  if (!locations.length) {
    return null;
  }

  return (
    <section className={`dark-image ${className ?? ""}`}>
      {title || subtitle ? (
        <header className="mb-6 ">
          {title ? (
            <h2 className="text-3xl font-extrabold text-zinc-800 tracking-tight">{title}</h2>
          ) : null}
          {subtitle ? <p className="mt-2 max-w-3xl text-sm text-zinc-400">{subtitle}</p> : null}
        </header>
      ) : null}

      <div
        className={`relative w-full overflow-hidden rounded-[2rem] bg-white 
shadow-2xl ${mapClassName ?? "h-[520px] md:h-[680px]"}`}
      >
        <div className="absolute left-6 top-6 z-20 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setMapZoom((prev) => Math.min(prev + 0.3, maxZoom))}
            className="h-10 w-10 rounded-full bg-white/90 text-zinc-900 shadow-md transition hover:bg-white"
            aria-label="Acercar mapa"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => setMapZoom((prev) => Math.max(prev - 0.3, minZoom))}
            className="h-10 w-10 rounded-full bg-white/90 text-zinc-900 shadow-md transition hover:bg-white"
            aria-label="Alejar mapa"
          >
            -
          </button>
        </div>

        <ComposableMap
          projection={projection}
          projectionConfig={{
            scale: projectionScale,
            center: mapCenter,
          }}
          className="h-full w-full outline-none"
        >
          <ZoomableGroup
            zoom={mapZoom}
            minZoom={minZoom}
            maxZoom={maxZoom}
            center={mapCenter}
            filterZoomEvent={(event: any) => {
              if (!event) return false;
              if (event.type === "wheel") return false;
              if (event.type === "dblclick") return false;
              if ("touches" in event && event.touches?.length > 1) return false;
              return !event.ctrlKey && !event.button;
            }}
          >
            <Geographies geography={geographyUrl}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={primaryColor}
                    stroke="#ffffff3a"
                    strokeWidth={1}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#0b9145", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {locations.map((location, index) => (
              <CompanyTooltipMarker
                key={location.id ?? `${location.companyName}-${index}`}
                location={location}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                activeTouchIndex={activeTouchIndex}
                setActiveTouchIndex={setActiveTouchIndex}
                isTouchDevice={isTouchDevice}
                primaryColor={primaryColor}
              />
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </section>
  );
}
