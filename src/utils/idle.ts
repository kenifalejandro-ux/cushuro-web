// utils/idle.ts
// Ejecuta un callback cuando el hilo esté libre y devuelve un cancelador.
export const runWhenIdle = (cb: () => void, delay = 600): (() => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  if ("requestIdleCallback" in window) {
    const id = (window as any).requestIdleCallback(cb);
    return () => {
      if ("cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(id);
      }
    };
  }

  const id = window.setTimeout(cb, delay);
  return () => window.clearTimeout(id);
};
