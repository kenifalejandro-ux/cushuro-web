// src/hooks/useMediaQuery.ts
import { useEffect, useState } from "react";

/**
 * Devuelve `true` mientras la media query coincida.
 * Útil para cambiar marcadores como `light-image` / `dark-image`,
 * que se leen por JS (classList) y no se pueden alternar con Tailwind.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mql.matches);
    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
