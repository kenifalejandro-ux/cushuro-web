import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { runWhenIdle } from "@/utils/idle";

export function HeroPreciosWeb() {
  const heroPreciosWebRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);
  const lineWrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  const [showModel, setShowModel] = useState(false);

  // Cargar el modelo 3D cuando sea visible para cuidar LCP/TBT
  useEffect(() => {
    const target = modelContainerRef.current;
    if (!target || showModel) return;

    let timeoutId: number | null = null;
    const scheduleShow = () => {
      timeoutId = window.setTimeout(() => setShowModel(true), 800);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          scheduleShow();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [showModel]);

  // Animaciones GSAP después del LCP
  useEffect(() => {
  let ctx: any;
  let cancelled = false;

  const start = async () => {
    const { gsap } = await import("gsap");
    if (cancelled) return;

    ctx = gsap.context(() => {
      // tus animaciones aquí
    }, heroPreciosWebRef);
  };

  const cancelIdle = runWhenIdle(start, 300);

  return () => {
    cancelled = true;
    cancelIdle();
    ctx?.revert();
  };
}, []);


  // Parallax y float
  useGSAP(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          ctaRef.current?.children,
          threeContainerRef.current,
          lineWrapRef.current,
        ],
        { opacity: 1, y: 0, clearProps: "all" }
      );
      if (lineRef.current) {
        gsap.set(lineRef.current, {
          strokeDasharray: 0,
          strokeDashoffset: 0,
          opacity: 1,
        });
      }
      return;
    }

    gsap.to(threeContainerRef.current, {
      y: -120,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    if (lineRef.current) {
      const length = lineRef.current.getTotalLength();
      gsap.set(lineRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(lineRef.current, { strokeDashoffset: 0, duration: 1.8, delay: 0.3 })
        .set(lineRef.current, { strokeDasharray: "10 16", strokeDashoffset: 0 })
        .to(lineRef.current, {
          strokeDashoffset: -2000,
          duration: 14,
          ease: "none",
          repeat: -1,
        });
    }

    if (lineWrapRef.current) {
      gsap.to(lineWrapRef.current, {
        y: -6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
 
  }, { scope: heroPreciosWebRef });


  return (
    <div
      ref={heroPreciosWebRef}
     className="relative min-h-[100vh] overflow-hidden bg-white"
    >
      {/* Contenido textual */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          <div className="space-y-8 text-white">
            <div style={{ perspective: "1000px" }}>
              <h1
                ref={titleRef}
                className="text-5xl sm:text-5xl lg:text-6xl tracking-tight"
              >
                <span className="block bg-gradient-to-r from-zinc-400 via-cyan-400 to-zinc-400 bg-clip-text text-transparent">
                  Consulta nuestros paquetes de desarrollo web
                </span>
              </h1>
            </div>
      
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a
                href="https://www.zincelideas.com/planes-web"
                className="group text-black px-8 text-white hover:text-yellow-400 font-medium hover:scale-105 flex items-center gap-3"
              >
                Comenzar ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
          <div
            ref={(el) => {
              threeContainerRef.current = el;
              modelContainerRef.current = el;
            }}
            className="hidden lg:block w-full h-[520px] relative"
            aria-hidden
          >
          
          </div>
        </div>
      </div>


      {/* Línea decorativa inferior 
      <div
        ref={lineWrapRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
        aria-hidden
      >
        <svg
          className="w-full h-24 sm:h-28"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroPreciosWebLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="100%" stopColor="#9e18d3" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9e18d3" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9e18d3" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9e18d3" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 C200,20 400,120 600,70 C800,20 1000,120 1200,60"
            stroke="rgb(168, 8, 241)"
            strokeWidth="3"
            fill="none"
          />
          <path
            ref={lineRef}
            d="M0,80 C200,20 400,120 600,70 C800,20 1000,120 1200,60"
            stroke="url(#heroPreciosWebLineGradient)"
            strokeWidth="0"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>*/}
    </div>
    
  );
  
}

export default HeroPreciosWeb;
