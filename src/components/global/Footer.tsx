import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import { FooterVariantA } from "./footer/FooterVariantA";
import { FooterVariantB } from "./footer/FooterVariantB";
import { FooterVariantC } from "./footer/FooterVariantC";
import { FooterVariantD } from "./footer/FooterVariantD";
import { trackWhatsAppClick, WHATSAPP_URL } from "@/utils/whatsapp";


const footers = [
  {
    name: "FooterVariantA",
    component: <FooterVariantA />,
    gradient: "linear-gradient(to bottom, #1c1b22 0%, #2a1f2f 100%)",
    glow: "bg-purple-500/10",
  },
  {
    name: "FooterVariantB",
    component: <FooterVariantB />,
    gradient: "linear-gradient(to bottom, #0f172a 0%, #020617 100%)",
    glow: "bg-blue-500/10",
  },
  {
    name: "FooterVariantC",
    component: <FooterVariantC />,
    gradient: "linear-gradient(to bottom, #18181b 0%, #09090b 100%)",
    glow: "bg-rose-500/10",
  },
    {
    name: "FooterVariantD",
    component: <FooterVariantD />,
    gradient: "linear-gradient(to bottom, #072a35 0%, #09090b 100%)",
    glow: "bg-ambar-500/10",
  },
];

export default function Footer() {
  const [index, setIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  /* ⏱️ Rotación estable (15s) */
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % footers.length);
    }, 6000);

    return () => clearInterval(id);
  }, []);

  /* ✨ Animación SOLO del footer */
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const tl = gsap.timeline();

    tl.fromTo(
      el,
      {
        opacity: 0,
        scale: 0.985,
        filter: "blur(2px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 3.2,
        ease: "sine.inOut",
      }
    );

    return () => {
      tl.kill();
    };
  }, [index]);

  const current = footers[index];

  return (
    <footer className="relative overflow-hidden text-zinc-300">
      {/* Fondo dinámico */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{ background: current.gradient }}
      />

      {/* Glow suave */}
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-72 w-[560px]
        -translate-x-1/2 rounded-full blur-[180px] transition-all duration-700 ${current.glow}`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* 🔑 Key fuerza remount real */}
          <div ref={contentRef} key={index}>
            {current.component}
          </div>

          {/* Bloque fijo */}
          <div className="flex flex-col justify-between gap-14">
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:hello@zincelideas.com"
                className="inline-flex items-center gap-2 text-white hover:opacity-80"
              >
                <Mail className="h-4 w-4" />
                kenif.alejandro@zincelideas.com
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
                onClick={() =>
                  trackWhatsAppClick({
                    text: "+51 933 838 792",
                    section: "Footer",
                    component: "Footer",
                    variant: current.name,
                  })
                }
              >
                <Phone className="h-4 w-4" />
                +51 933 838 792
              </a>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
              {[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/servicios" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contacto", href: "/contacto" },
              ].map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="text-zinc-400 hover:text-white"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
              <span>© {new Date().getFullYear()} Zincel</span>
              <span className="text-zinc-700">—</span>
              <NavLink to="/privacidad" className="hover:text-white">
                Privacidad
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
