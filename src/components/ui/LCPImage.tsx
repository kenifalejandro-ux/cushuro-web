// client/src/components/ui/LCPImage.tsx

import { ImgHTMLAttributes } from "react";
import { resolveLCPImageSources } from "./lcpImageSources";
import { useNetworkQuality } from "../../hooks/useNetworkQuality";

interface LCPImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  hoverZoom?: boolean;
  pictureClassName?: string;
}

const IMG_BASE = (import.meta.env.VITE_IMG_URL ?? "").replace(/\/+$/, "");

export function LCPImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  priority = false,
  hoverZoom = false,
  pictureClassName = "block w-full h-full bg-black rounded-2xl overflow-hidden",
  ...rest
}: LCPImageProps) {
  const networkQuality = useNetworkQuality();
  const isSlowNetwork = networkQuality === "low";

  const imgClassName = `
    ${hoverZoom ? "transition-transform duration-[1200ms] ease-out hover:scale-[1.02]" : ""}
    ${className} w-full h-full object-cover
  `;

  // Red lenta: una sola imagen 768 sin srcset, carga mínima garantizada.
  if (isSlowNetwork) {
    const isAbsolute = /^https?:\/\//i.test(src.trim());
    const EXTENSION_REGEX = /\.(avif|webp|jpe?g|png)$/i;
    const hasExtension = EXTENSION_REGEX.test(src.trim());

    let slowSrc: string;
    if (isAbsolute) {
      // URL absoluta: añadimos el sufijo -768.webp si no tiene extensión
      slowSrc = hasExtension
        ? src.trim()
        : `${src.trim().replace(/\/+$/, "")}-768.webp`;
    } else {
      const cleanPath = src.trim().replace(/^\/+/, "").replace(EXTENSION_REGEX, "");
      slowSrc = `${IMG_BASE}/${cleanPath}-768.webp`;
    }

    return (
      <picture className={pictureClassName}>
        <img
          src={slowSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className={imgClassName}
          {...rest}
        />
      </picture>
    );
  }

  const imageSources = resolveLCPImageSources(src);

  return (
    <picture className={pictureClassName}>
      {!imageSources.hasExplicitExtension && (
        <>
          <source srcSet={imageSources.avifSrcSet} type="image/avif" sizes={sizes} />
          <source srcSet={imageSources.webpSrcSet} type="image/webp" sizes={sizes} />
        </>
      )}
      <img
        src={imageSources.fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={imgClassName}
        {...rest}
      />
    </picture>
  );
}
