// client/src/components/ui/LCPImage.tsx
import { ImgHTMLAttributes } from "react";

interface LCPImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {
  src: string;           // Ej: "Hero/puerta-del-valle"
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  hoverZoom?: boolean;
  pictureClassName?: string;
}

const SIZES = [768, 1280, 1920, 2560, 3840];
// Traemos la URL de SiteGround desde el .env
const IMG_BASE = import.meta.env.VITE_IMG_URL;

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
  
  // 1. Quitamos la extensión si el usuario la puso por error
  const cleanPath = src.replace(/\.(avif|webp|jpg|jpeg|png)$/i, "");
  
  // 2. Construimos la URL base completa (SiteGround + Carpeta + Nombre)
  // Esto genera: https://kenifa.sg-host.com
  const fullBase = `${IMG_BASE}/${cleanPath}`;

  const buildSrcSet = (ext: string) =>
    SIZES.map((size) => `${fullBase}-${size}.${ext} ${size}w`).join(", ");

  return (
    <picture className={pictureClassName}>
      {/* AVIF de SiteGround */}
      <source srcSet={buildSrcSet("avif")} type="image/avif" sizes={sizes} />
      
      {/* WebP de SiteGround */}
      <source srcSet={buildSrcSet("webp")} type="image/webp" sizes={sizes} />
      
      <img
        // Fallback JPG de SiteGround
        src={`${fullBase}.jpg`}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={`
          ${hoverZoom ? "transition-transform duration-[1200ms] ease-out hover:scale-[1.02]" : ""}
          ${className} w-full h-full object-cover
        `}
        {...rest}
      />
    </picture>
  );
}
