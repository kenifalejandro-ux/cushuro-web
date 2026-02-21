/**client/src/components/global/HeroTiestoCoffee.tsx */

import { useRef, useState } from "react";
import { TiestoCoffeeCarousel } from "../ui/TiestoCoffeeCarousel";


type Ripple = { x: number; y: number; id: number };

export  function HeroTiestoCoffee() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleHeroClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const ripple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, ripple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 1200);
  };

  return (
  <div
    ref={heroRef}
    onClick={handleHeroClick}
className="
  relative
  h-[100svh]
  sm:h-[80svh]
  lg:h-screen
  w-screen
  overflow-hidden
  cursor-pointer
  bg-gradient-to-br from-amber-900 via-stone-900 to-black
"
  >
    {/* ================= CAROUSEL DARK IMAGE ================= */}
    <section
      id="carrusel"
      className="absolute inset-0 h-full w-full"
    >
      <TiestoCoffeeCarousel />
    </section>

    {ripples.map((r) => (
      <span
        key={r.id}
        className="absolute w-4 h-4 bg-amber-400 rounded-full opacity-70 animate-ping pointer-events-none"
        style={{ left: r.x, top: r.y }}
      />
    ))}
  </div>
);

}
export default  HeroTiestoCoffee;