
/**client/src/components/Paginas/Portfolio.tsx */

import { useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LCPImage } from '../ui/LCPImage';
import { OptimizedImage } from '../ui/OptimizedImage';
import { Tooltip } from '../ui/Tooltip';
import SEO from '../global/seo';
import { VideoPreview } from "../ui/VideoPreview";
import { useVideoInView } from "../ui/useVideoInView";

gsap.registerPlugin(ScrollTrigger);

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;        // imagen base
  videoBase: string;  // video base
  poster: string;
  link: string;
}

const projects: ProjectItem[] = [
{
  id: 'puerta-del-valle',
  title: 'Puerta del Valle',
  subtitle: 'Quesos Artesanales',
  src: '/imagenes-optim/trabajos/puerta-del-valle/portfolio/puerta-del-valle',
  videoBase: '/videos-optim/hero/puerta-del-valle/puerta-del-valle.mp4',
  poster: '/imagenes-optim/trabajos/puerta-del-valle/portfolio/puerta-del-valle-768.avif',
  link: '/portfolio/puerta-del-valle'
},
  {
    id: 'tiesto-coffee',
    title: 'Tiesto Coffee',
    subtitle: 'Cafetería',
    src: '/imagenes-optim/trabajos/imagenes/tiesto-coffee/branding/tiesto-coffee',
    videoBase: '/videos-optim/hero/tiesto-coffee/tiesto-coffee.mp4',
    poster: '/imagenes-optim/trabajos/imagenes/tiesto-coffee/branding/tiesto-coffee-768.avif',
    link: '/portfolio/tiesto-coffee'
  },
  {
    id: 'inti-pintay',
    title: 'Inti Pintay',
    subtitle: 'Licores Artesanales',
    src: '/imagenes-optim/trabajos/imagenes/inti-pintay/inti-pintay',
    videoBase: '/videos-optim/hero/inti-pintay/inti-pintay.mp4',
    poster: '/imagenes-optim/trabajos/imagenes/inti-pintay/inti-pintay-768.avif',
    link: '/portfolio/inti-pintay'
  },
  {
    id: 'bkars',
    title: 'BKARS',
    subtitle: 'Taller Automotriz',
    src: '/imagenes-optim/trabajos/imagenes/bkars/bkars',
    videoBase: '/videos-optim/hero/bkars/bkars.mp4',
    poster: '/imagenes-optim/trabajos/imagenes/bkars/bkars-768.avif',
    link: '/portfolio/bkars'
  }
];

const PortfolioItem = ({ project, index }: { project: ProjectItem; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const navigate = useNavigate();

    // Hook para reproducir video cuando entra en viewport
  useVideoInView(videoRef);

  // Solución al error rojo: useCallback para la navegación
  const handleNavigation = useCallback(() => {
    navigate(project.link);
  }, [navigate, project.link]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Parallax scroll effect
    gsap.to(containerRef.current, {
      y: index % 2 === 0 ? -50 : -30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Fade in animation
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [index]);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isHovered && videoLoaded) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isHovered, videoLoaded]);

  const handleMouseEnter = () => {
    setIsHovered(true);

    // Forzar carga del video al hacer hover
    if (videoRef.current && !videoLoaded) {
      videoRef.current.load();
    }

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        y: -10,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!containerRef.current || !overlayRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const overlay = overlayRef.current;

    gsap.set(overlay, {
      position: 'fixed',
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      zIndex: 9999,
      opacity: 1
    });

    const tl = gsap.timeline({
      onComplete: handleNavigation  // ← Ahora sin error rojo
    });

    tl.to(overlay, {
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      duration: 0.9,
      ease: 'power4.inOut'
    })
    .to(overlay, {
      opacity: 0,
      duration: 0.4
    }, '-=0.2');
  };

  // Different sizes and alignments
  const sizes = [
    'w-full md:w-[75%]',
    'w-full md:w-[85%]',
    'w-full md:w-[70%]',
    'w-full md:w-[80%]'
  ];

  const alignments = [
    'md:ml-0',
    'md:ml-auto',
    'md:ml-0',
    'md:ml-auto'
  ];

  return (
    
    <div
    
      ref={containerRef}
      className={`relative ${sizes[index]} ${alignments[index]} mb-32 md:mb-48 last:mb-0 `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      
      <div className="group relative overflow-hidden rounded-2xl  md:rounded-3xl cursor-pointer bg-white">
        {/* Aspect ratio container */}
        <div className="relative aspect-[4/3] md:aspect-[16/10]">
        
          {/* Imagen optimizada con tu sistema (AVIF + WebP) */}
          <picture className="absolute inset-0">
            <source type="image/avif" srcSet={project.src} />
            {project.src && (
              <source type="image/webp" srcSet={project.src} />
            )}

            {/* Primera tarjeta → LCPImage (máxima prioridad) */}
            {index === 0 ? (
              <LCPImage
                src={project.src}
                alt={project.title}
                width={1920}
                height={1080}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  isHovered && videoLoaded 
                    ? 'opacity-0 scale-105' 
                    : 'opacity-100 scale-100'
                }`}
              />
            ) : (
              /* Resto → OptimizedImage (lazy loading) */
              <OptimizedImage
                src={project.src}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  isHovered && videoLoaded 
                    ? 'opacity-0 scale-105' 
                    : 'opacity-100 scale-100'
                }`}
              />
            )}
          </picture>

         
        {/* Video optimizado */}
        {isHovered && (
         <VideoPreview
              ref={videoRef}
              src={project.videoBase}
              poster={project.poster}
              className="absolute inset-0 w-full h-full object-cover scale-105"
              muted
              loop
              playsInline
              autoPlay
              preload="none"
              controls={false}
              onLoad={() => setVideoLoaded(true)}
            />
        )}
<Tooltip
  content="Mira este caso de estudio"
  active={isHovered && videoLoaded}
  showHand
  handPosition="bottom-right"
/>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />

          {/* Vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />
        </div>
      </div>

      {/* Content below image */}
      <div ref={contentRef} className="mt-6 md:mt-8 px-4 md:px-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className=" text-xs md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4">
              {project.subtitle}
            </p>
            <h3 className=" text-3xl md:text-5xl lg:text-6xl tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Arrow icon navigtion*/}
          
          <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white flex items-center justify-center transition-all duration-500 ${
            isHovered 
              ? 'bg-black border-white' 
              : 'bg-black'
          }`}>
            <svg
              className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-500 ${
                isHovered 
                  ? 'text-white translate-x-1' 
                  : ' text-white translate-x-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-6 md:mt-8 h-px bg-gradient-to-r from-white via-white to-transparent" />
      </div>

      {/* Expand overlay for navigation animation */}
      <div
        ref={overlayRef}
        className="pointer-events-none rounded-2xl md:rounded-3xl overflow-hidden"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${project.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0
        }}
      />
    </div>
  );
};

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Smooth fade in for entire section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1.5,
        ease: 'power2.out'
      }
    );
  }, []);

  return (
    <>
      <SEO
        title="Portafolio Diseño Web y Branding Lima | Proyectos Zincel 2026"
        description="Explora nuestro portafolio: landing pages, branding, UI/UX y visuales 3D creados en Lima para marcas peruanas. Proyectos que convierten visitantes en clientes. Inspírate y cotiza."
        keywords="portafolio diseño web lima, agencia branding lima, proyectos diseño web perú, landing pages profesionales lima, modelado 3D lima, portafolio agencia creativa san isidro, casos estudio diseño lima 2026"
        url="https://www.zincelideas.com/portfolio"
        image="https://www.zincelideas.com/imagenes-optim/trabajos/imagenes/puerta-del-valle"
        imageAlt="Portafolio Zincel: proyectos de diseño web, branding y modelado 3D en Lima Perú"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.zincelideas.com#organization",
              name: "Zincel",
              url: "https://www.zincelideas.com",
              logo: "https://www.zincelideas.com/imagenes-optim/logo-zincel/logo-zincel-black.svg",
              description: "Agencia creativa en Lima: diseño web profesional, branding empresarial, UI/UX y modelado 3D para marcas peruanas.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Independencia, Lima",
                addressRegion: "Lima",
                addressCountry: "PE"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -12.0464,
                longitude: -77.0428
              },
              telephone: "+51 933 838 792",
              email: "kenif.alejandro@zincelideas.com",
              priceRange: "$$-$$$",
              sameAs: [
                "https://www.facebook.com/zincelideas",
                "https://www.instagram.com/zincelideas",
                "https://www.linkedin.com/company/zincelideas",
                "https://www.behance.net/zincelideas",
                "https://www.tiktok.com/@zincelideas"
              ]
            },
            {
              "@type": "CollectionPage",
              "@id": "https://www.zincelideas.com/portfolio#page",
              name: "Portafolio de Proyectos - Zincel",
              url: "https://www.zincelideas.com/portfolio",
              description: "Selección de proyectos conceptuales y demostrativos en diseño web, branding, UI/UX y modelado 3D desarrollados en Lima, Perú.",
              inLanguage: "es-PE",
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.zincelideas.com#website",
                name: "Zincel",
                url: "https://www.zincelideas.com"
              },
              about: {
                "@type": "Organization",
                "@id": "https://www.zincelideas.com#organization"
              },
              hasPart: projects.map((p) => ({
                "@type": "CreativeWork",
                name: p.title,
                description: `${p.title} - ${p.subtitle}. Proyecto de ${p.subtitle.toLowerCase()} creado por Zincel en Lima.`,
                url: `https://www.zincelideas.com${p.link}`,
                image: `https://www.zincelideas.com${p.src}`
              })),
              mainEntity: {
                "@type": "ItemList",
                itemListElement: projects.map((p, idx) => ({
                  "@type": "ListItem",
                  position: idx + 1,
                  item: {
                    "@type": "CreativeWork",
                    name: p.title,
                    description: p.subtitle
                  }
                }))
              }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://www.zincelideas.com/portfolio#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://www.zincelideas.com"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://www.zincelideas.com/portfolio"
                }
              ]
            }
          ]
        }}
      />
    <section 
      ref={sectionRef}
      className="w-full min-h-screen text-white bg-black py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-40">
          <p className="text-white text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Portfolio
          </p>
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">
            Proyectos Seleccionados
          </h2>
        </div>


        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <PortfolioItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
        
      </div>
      
    </section>
    </>
  );
}