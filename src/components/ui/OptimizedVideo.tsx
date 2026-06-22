/* client/src/components/ui/OptimizedVideo.tsx */
import { forwardRef } from "react";
import { useNetworkQuality } from "../../hooks/useNetworkQuality";

interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

const SOURCES = [
  { media: "(max-width: 768px)", suffix: "768" },
  { media: "(max-width: 1280px)", suffix: "1280" },
  { media: "(min-width: 1281px)", suffix: "1920" },
];
const IMAGE_EXTENSION_REGEX = /\.(avif|webp|jpe?g|png)(?:\?.*)?$/i;

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
    const networkQuality = useNetworkQuality();
    const isSlowNetwork = networkQuality === "low";

    const cleanPath = src.replace(/\.mp4$/i, "").replace(/^\//, "");
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

    // Red lenta: solo la variante ligera (768) y sin preload para ahorrar datos.
    const sources = isSlowNetwork
      ? [{ src: `${fullBase}-768.mp4`, media: undefined }]
      : SOURCES.map(({ media, suffix }) => ({
          src: `${fullBase}-${suffix}.mp4`,
          media,
        }));

    const resolvedPreload = isSlowNetwork ? "none" : preload;

    return (
      <video
        ref={ref}
        className={`w-full h-full object-cover ${className}`}
        poster={posterUrl}
        playsInline={playsInline}
        muted={muted}
        preload={resolvedPreload}
        {...videoProps}
      >
        {sources.map(({ src: sourceSrc, media }) => (
          <source
            key={sourceSrc}
            src={sourceSrc}
            type="video/mp4"
            {...(media ? { media } : {})}
          />
        ))}
        <source src={`${fullBase}.mp4`} type="video/mp4" />
        Tu navegador no soporta video.
      </video>
    );
  }
);
