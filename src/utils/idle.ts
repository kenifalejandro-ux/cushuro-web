// utils/idle.ts
// Ejecuta un callback cuando el hilo esté libre y devuelve un cancelador.
export const runWhenIdle = (cb: () => void, delay = 600): (() => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(cb);
    return () => window.cancelIdleCallback?.(id);
  }

  const id = window.setTimeout(cb, delay);
  return () => window.clearTimeout(id);
};
