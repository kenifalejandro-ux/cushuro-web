// client/src/hooks/useNetworkQuality.ts
//
// Detecta si el usuario tiene conexión lenta para servir assets ligeros.
// Estrategia por prioridad:
//   1. navigator.connection (Chrome/Android) → effectiveType + saveData + downlink
//   2. Speed test con fetch de imagen pequeña como fallback (Safari / iOS / desktop)
//   3. Cache con TTL de 5 min en sessionStorage — expira para que mejoras de red
//      se reflejen cuando el usuario vuelve a la pestaña (visibilitychange).

import { useEffect, useState } from "react";

export type NetworkQuality = "low" | "high" | "unknown";

const CACHE_KEY     = "cushuro-net-quality";
const CACHE_TS_KEY  = "cushuro-net-quality-ts";
const CACHE_TTL_MS  = 5 * 60 * 1000; // 5 minutos
const SLOW_MBPS     = 1.5;
const TEST_IMAGE    = `${import.meta.env.VITE_IMG_URL}/img-inicio/hero/cantera001-768.webp`;

// ── Cache con TTL ──────────────────────────────────────────────────────────

function getCached(): NetworkQuality | null {
  try {
    const ts = Number(sessionStorage.getItem(CACHE_TS_KEY) ?? 0);
    if (Date.now() - ts > CACHE_TTL_MS) return null; // expirado
    const v = sessionStorage.getItem(CACHE_KEY);
    if (v === "low" || v === "high") return v;
  } catch { /* sessionStorage bloqueado */ }
  return null;
}

function setCached(q: NetworkQuality) {
  try {
    sessionStorage.setItem(CACHE_KEY, q);
    sessionStorage.setItem(CACHE_TS_KEY, String(Date.now()));
  } catch { /* noop */ }
}

// ── Señal 1: Network Information API (Chrome / Android) ───────────────────

function fromConnectionAPI(): NetworkQuality | null {
  if (typeof navigator === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const conn = (navigator as any).connection
    ?? (navigator as any).mozConnection
    ?? (navigator as any).webkitConnection;
  if (!conn) return null;

  if (conn.saveData) return "low";

  const type: string = conn.effectiveType ?? "";
  if (type === "slow-2g" || type === "2g" || type === "3g") return "low";
  if (type === "4g") {
    if (typeof conn.downlink === "number" && conn.downlink < SLOW_MBPS) return "low";
    return "high";
  }
  return null; // tipo no reconocible → caer al speed test
}

// ── Señal 2: Speed test real ───────────────────────────────────────────────

async function fromSpeedTest(): Promise<NetworkQuality> {
  try {
    const url = `${TEST_IMAGE}?_nc=${Date.now()}`;
    const start = performance.now();
    const res   = await fetch(url, { cache: "no-store" });
    const blob  = await res.blob();
    const secs  = (performance.now() - start) / 1000;
    const mbps  = (blob.size * 8) / (secs * 1_000_000);
    return mbps < SLOW_MBPS ? "low" : "high";
  } catch {
    return "low"; // sin red → conservador
  }
}

// ── Medición completa (API → speed test) ──────────────────────────────────

async function measure(): Promise<NetworkQuality> {
  return fromConnectionAPI() ?? (await fromSpeedTest());
}

// ── Hook ──────────────────────────────────────────────────────────────────

export function useNetworkQuality(): NetworkQuality {
  const [quality, setQuality] = useState<NetworkQuality>(() => {
    // Inicialización síncrona: cache válido → Connection API → unknown
    return getCached() ?? fromConnectionAPI() ?? "unknown";
  });

  // Medición asíncrona inicial (cuando no había cache ni API)
  useEffect(() => {
    if (quality !== "unknown") return;
    let cancelled = false;
    measure().then((q) => {
      if (cancelled) return;
      setCached(q);
      setQuality(q);
    });
    return () => { cancelled = true; };
  }, [quality]);

  // Re-medir cuando el usuario vuelve a la pestaña y el cache expiró.
  // Cubre desktop donde connection.change no es confiable.
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState !== "visible") return;
      if (getCached() !== null) return; // cache aún válido, no remedir

      let cancelled = false;
      measure().then((q) => {
        if (cancelled) return;
        setCached(q);
        setQuality(q);
      });
      return () => { cancelled = true; };
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Cambios en tiempo real via Connection API (Android Chrome / desktop Chrome)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const conn = (navigator as any).connection;
    if (!conn) return;

    const handleChange = () => {
      const q = fromConnectionAPI();
      if (q) {
        setCached(q);
        setQuality(q);
      }
    };

    conn.addEventListener("change", handleChange);
    return () => conn.removeEventListener("change", handleChange);
  }, []);

  return quality;
}
