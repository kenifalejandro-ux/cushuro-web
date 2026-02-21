import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OptimizedImage } from "../ui/OptimizedImage";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

gsap.registerPlugin(ScrollTrigger);

export default function HeroPuertaDelValle() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const latestPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    /* ================= GLOW ================= */
    const setGlow = () => {
      if (!latestPosRef.current) return;
      const rect = hero.getBoundingClientRect();
      const x = ((latestPosRef.current.x - rect.left) / rect.width) * 100;
      const y = ((latestPosRef.current.y - rect.top) / rect.height) * 100;
      hero.style.setProperty("--glow-x", `${x}%`);
      hero.style.setProperty("--glow-y", `${y}%`);
    };

    const scheduleGlow = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        setGlow();
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      latestPosRef.current = { x: e.clientX, y: e.clientY };
      scheduleGlow();
    };

    const handleMouseLeave = () => {
      latestPosRef.current = null;
      hero.style.setProperty("--glow-x", "50%");
      hero.style.setProperty("--glow-y", "50%");
    };

    hero.style.setProperty("--glow-x", "50%");
    hero.style.setProperty("--glow-y", "50%");

    hero.addEventListener("mousemove", handleMouseMove, { passive: true });
    hero.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    /* ================= GSAP ================= */
    const ctx = gsap.context(() => {
      const items = contentRef.current
        ? Array.from(contentRef.current.children)
        : [];

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        imageLayerRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.8 }
      ).fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
        },
        "-=1.4"
      );

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          gsap.to(imageLayerRef.current, {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        },
      });
    }, hero);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      ctx.revert();
    };
  }, []);

  const handleWhatsAppClick = () => {
    openWhatsApp({
      text: "Comenzar ahora",
      section: "Hero",
      component: "HeroPuertaDelValle",
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-[100svh] w-full overflow-hidden bg-black/80 "
    >
      {/* IMAGE */}
      <div ref={imageLayerRef} className="absolute inset-0 z-0">
        <OptimizedImage
          src="/imagenes-optim/Hero/puerta-del-valle/puerta-del-valle-hero"
          alt="Puerta del Valle"
          className="absolute inset-0 w-full h-full object-cover"
          priority
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"

        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px at var(--glow-x, 50%) var(--glow-y, 50%), rgba(175, 119, 15, 0.37), transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-7xl mx-auto px-6 min-h-screen flex items-center"
      >
        <div className="space-y-8 text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl">
            Puerta Del Valle
          </h1>

          <p className="max-w-xl text-lg text-white/80">
            Proyecto conceptual de desarrollo web y branding
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="bg-black/50 px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition"
          >
            Comenzar ahora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
