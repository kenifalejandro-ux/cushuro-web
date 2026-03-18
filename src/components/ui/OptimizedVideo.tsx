/* client/src/components/ui/OptimizedVideo.tsx */
import { forwardRef } from "react";

interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string; // Ej: "videos-optim/hero/cantera001"
  poster?: string; // Ej: "imagenes-optim/hero/cantera001.jpg"
}

const SOURCES = [
  { media: "(max-width: 768px)", suffix: "768" },
  { media: "(max-width: 1280px)", suffix: "1280" },
  { media: "(min-width: 1281px)", suffix: "1920" },
];
const IMAGE_EXTENSION_REGEX = /\.(avif|webp|jpe?g|png)(?:\?.*)?$/i;

// Usamos la misma variable de entorno de SiteGround
const ASSETS_BASE = import.meta.env.VITE_IMG_URL;

export const OptimizedVideo = forwardRef<HTMLVideoElement, OptimizedVideoProps>(
  function OptimizedVideo(
    {
      src,
      poster,
      className = "",
      playsInline = true,
      muted = true,
      preload = "none",
      ...videoProps
    },
    ref
  ) {
    const cleanPath = src.replace(/\.mp4$/i, "").replace(/^\//, ""); // Quitamos barra inicial si existe
    const fullBase = `${ASSETS_BASE}/${cleanPath}`;
    const posterSuffix =
      typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
        ? "768"
        : "1280";

    const posterUrl = poster
      ? poster.startsWith("http")
        ? poster
        : IMAGE_EXTENSION_REGEX.test(poster)
          ? `${ASSETS_BASE}/${poster.replace(/^\//, "")}`
          : `${ASSETS_BASE}/${poster.replace(/^\//, "")}-${posterSuffix}.webp`
      : undefined;

    return (
      <video
        ref={ref}
        className={`w-full h-full object-cover ${className}`}
        // Si el poster viene de una ruta relativa, le ponemos la base de SiteGround
        poster={posterUrl}
        playsInline={playsInline}
        muted={muted}
        preload={preload}
        {...videoProps}
      >
        {SOURCES.map(({ media, suffix }) => (
          <source key={suffix} src={`${fullBase}-${suffix}.mp4`} type="video/mp4" media={media} />
        ))}
        {/* Fallback al video original en SiteGround */}
        <source src={`${fullBase}.mp4`} type="video/mp4" />
        Tu navegador no soporta video.
      </video>
    );
  }
);
