// client/src/components/OptimizedImage.tsx

import { useNetworkQuality } from "../../hooks/useNetworkQuality";

const SIZES = [768, 1280, 1920];
const EXTENSION_REGEX = /\.(avif|webp|jpe?g|png)(?:\?.*)?$/i;
const IMG_BASE = import.meta.env.VITE_IMG_URL;

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
  sizes,
}: OptimizedImageProps) {
  const networkQuality = useNetworkQuality();
  const isSlowNetwork = networkQuality === "low";

  const baseHost = (IMG_BASE ?? "").replace(/\/+$/, "");
  const normalizedSrc = src.trim();
  const isAbsoluteUrl = /^https?:\/\//i.test(normalizedSrc);
  const cleanPath = (isAbsoluteUrl ? normalizedSrc : normalizedSrc.replace(/^\/+/, ""))
    .replace(EXTENSION_REGEX, "");
  const directPath = normalizedSrc.replace(/^\/+/, "");
  const fullBase = isAbsoluteUrl
    ? cleanPath
    : baseHost
      ? `${baseHost}/${cleanPath}`
      : `/${cleanPath}`;
  const directUrl = isAbsoluteUrl
    ? normalizedSrc
    : baseHost
      ? `${baseHost}/${directPath}`
      : `/${directPath}`;
  const hasExplicitExtension = EXTENSION_REGEX.test(normalizedSrc);

  const imgClassName = `
    ${fill ? "absolute inset-0 w-full h-full" : "w-full h-auto"}
    object-cover object-center ${className}
  `;

  const activeSizes = isSlowNetwork ? [768] : SIZES;
  const buildSrcSet = (ext: string) =>
    activeSizes.map((size) => `${fullBase}-${size}.${ext} ${size}w`).join(", ");

  // Red lenta: apuntamos directo al 768 sin srcset
  const slowSrc = `${fullBase}-768.webp`;

  if (isAbsoluteUrl || hasExplicitExtension) {
    return (
      <img
        src={directUrl}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={imgClassName}
        {...(sizes ? { sizes } : {})}
      />
    );
  }

  if (isSlowNetwork) {
    // Si ya es URL absoluta, añadir sufijo directamente; si no, usar fullBase
    const resolvedSlowSrc = isAbsoluteUrl
      ? hasExplicitExtension
        ? directUrl
        : `${directUrl}-768.webp`
      : slowSrc;

    return (
      <img
        src={resolvedSlowSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={imgClassName}
      />
    );
  }

  return (
    <picture className={fill ? "absolute inset-0 block" : "block"}>
      <source type="image/avif" srcSet={buildSrcSet("avif")} {...(sizes ? { sizes } : {})} />
      <source type="image/webp" srcSet={buildSrcSet("webp")} {...(sizes ? { sizes } : {})} />
      <img
        src={`${fullBase}.jpg`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={imgClassName}
        {...(sizes ? { sizes } : {})}
      />
    </picture>
  );
}
