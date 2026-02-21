// client/src/components/OptimizedImage.tsx

const SIZES = [768, 1280, 1920, 2560, 3840];

// Traemos la URL de SiteGround desde el .env
const IMG_BASE = import.meta.env.VITE_IMG_URL;

interface OptimizedImageProps {
  src: string;      // Ej: "Hero/banner-principal"
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
  
  
  // 1. Limpiamos la extensión y unimos con la URL de SiteGround
  const cleanPath = src.replace(/\.(avif|webp|jpg|jpeg|png)$/i, "");
  const fullBase = `${IMG_BASE}/${cleanPath}`;

  const buildSrcSet = (ext: string) =>
    SIZES.map((size) => `${fullBase}-${size}.${ext} ${size}w`).join(", ");

  return (
    <picture className={fill ? "absolute inset-0 block" : "block"}>
      {/* AVIF de SiteGround */}
      <source
        type="image/avif"
        srcSet={buildSrcSet("avif")}
        {...(sizes ? { sizes } : {})}
      />

      {/* WEBP de SiteGround */}
      <source
        type="image/webp"
        srcSet={buildSrcSet("webp")}
        {...(sizes ? { sizes } : {})}
      />

      {/* IMG Fallback de SiteGround */}
      <img
        src={`${fullBase}.jpg`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={`
          ${fill ? "absolute inset-0 w-full h-full" : "w-full h-auto"}
          object-cover
          object-center
          ${className}
        `}
        {...(sizes ? { sizes } : {})}
      />
    </picture>
  );
}
