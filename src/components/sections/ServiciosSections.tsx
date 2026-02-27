// client/src/components/sections/ProductosSections.tsx

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { LCPImage } from "../ui/LCPImage";
import { OptimizedImage } from "../ui/OptimizedImage";

gsap.registerPlugin(ScrollTrigger);

// Tipos
interface ContentSectionProps {
  title: string;
  description: string;
  reverse?: boolean;
  buttonText?: string;
  buttonLink?: string;
  imageElement?: React.ReactNode;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageSizes?: string;
  imagePriority?: boolean;
  imageAlt?: string;
  isLCP?: boolean; // 👈 NUEVO
  children?: React.ReactNode; // ✅ Esto permite que metas elementos dentro
}

interface PortfolioImage {
  srcSetAvif: string;
  srcSetWebp: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
}

interface PortfolioItem {
  id: number;
  href: string;
  ariaLabel: string;
  dataSize: string;
  image: PortfolioImage;
  overlay: {
    h3: string;
    p: string;
    buttonText: string;
  };
}

interface AccordionItem {
  title: string;
  content: string;
}

// ------------------- Lazy Image con Fade in/out -------------------
// Componente de sección de contenido reutilizable
export function ContentSection({
  title,
  description,
  imageUrl,
  imageWidth,
  imageHeight,
  imageSizes,
  imagePriority = false,
  imageAlt,
  reverse = false,
  buttonText,
  buttonLink,
  imageElement,
  children, // ✅ agregar esto
}: ContentSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center py-16 lg:py-24`}
    >
      <div className="w-full lg:w-1/2">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {imageElement ? (
            imageElement
          ) : imageUrl ? (
            <div
              className="relative w-full"
              style={{
                aspectRatio:
                  imageWidth && imageHeight ? `${imageWidth} / ${imageHeight}` : "16 / 9",
              }}
            >
              {imageWidth && imageHeight ? (
                <LCPImage
                  src={imageUrl}
                  alt={imageAlt ?? title}
                  width={imageWidth}
                  height={imageHeight}
                  sizes={imageSizes}
                  priority={imagePriority}
                />
              ) : (
                <OptimizedImage src={imageUrl} alt={imageAlt ?? title} sizes={imageSizes} fill />
              )}
            </div>
          ) : null}
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-4xl lg:text-5xl">{title}</h2>
        <p className="text-lg lg:text-xl opacity-80 leading-relaxed">{description}</p>
        {children} {/* 👈 Aquí se renderizan tus elementos hijos */}
        {buttonText && (
          <button
            onClick={() => buttonLink && window.open(buttonLink, "_blank")}
            className="px-8 py-4 bg-white/60 text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
