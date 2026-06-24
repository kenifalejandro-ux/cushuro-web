import { gsap } from "gsap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition() {
  const location = useLocation();

  // Evita que el navegador restaure la posición de scroll anterior al navegar.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Al cambiar de página, volver SIEMPRE al inicio (salvo navegación con ancla #).
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    const page = document.querySelector("#page-root");
    if (!page) return;

    gsap.fromTo(
      page,
      {
        opacity: 0,
        scale: 0.985,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.22,
        ease: "power2.out",
        clearProps: "opacity,scale",
      }
    );
  }, [location.pathname, location.hash]);

  return null;
}
