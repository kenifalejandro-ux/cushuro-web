/** client/src/utils/MedioAmbienteGsap.tsx */

import { resolveLCPImageSources } from "@/components/ui/lcpImageSources";

let gsapInstance: typeof import("gsap").gsap | null = null;
let currentIndex = 0;

export interface Service {
  image: string;
  slug: string;
  title: string;
  description: string;
  selectedImage?: string;
}

async function loadGsap() {
  if (!gsapInstance) {
    const module = await import("gsap");
    gsapInstance = module.gsap;
  }
  return gsapInstance;
}

const BREAKPOINTS = [768, 1280, 1920, 2560, 3840] as const;
let avifSupport: boolean | null = null;

async function supportsAvif(): Promise<boolean> {
  if (avifSupport !== null) return avifSupport;
  if (!("createImageBitmap" in window)) return (avifSupport = false);

  const avifData =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAG1pZjEAAACgYXYxAAAAMm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAHBpY3QAAAAAAAAAAAAAAAAAAAAAAApwaXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEKAAAAKAAAAAEAAAAIAAAACAAAAAEAAAACAAAAAQAAAAEAAAAAAAACAAAA";

  const blob = await (await fetch(avifData)).blob();
  try {
    await createImageBitmap(blob);
    avifSupport = true;
  } catch {
    avifSupport = false;
  }

  return avifSupport;
}

function pickSrcFromSrcSet(srcSet: string, targetWidth: number): string | null {
  const items = srcSet.split(",").map((item) => item.trim());
  const match = items.find((item) => item.endsWith(`${targetWidth}w`));
  return match ? match.split(" ")[0] : null;
}

function resolveBackgroundCandidate(src: string, preferAvif: boolean) {
  const resolved = resolveLCPImageSources(src);
  if (resolved.hasExplicitExtension) {
    return { preferred: resolved.directSrc, fallback: resolved.fallbackSrc };
  }

  const width = window.innerWidth;
  const selectedWidth =
    BREAKPOINTS.find((breakpoint) => breakpoint >= width) ?? BREAKPOINTS[BREAKPOINTS.length - 1];

  const avifCandidate =
    pickSrcFromSrcSet(resolved.avifSrcSet, selectedWidth) ||
    `${resolved.directSrc}-${selectedWidth}.avif`;
  const webpCandidate =
    pickSrcFromSrcSet(resolved.webpSrcSet, selectedWidth) ||
    `${resolved.directSrc}-${selectedWidth}.webp`;

  return {
    preferred: preferAvif ? avifCandidate : webpCandidate,
    fallback: webpCandidate,
  };
}

export async function preloadImages(servicesToLoad: Service[]): Promise<void> {
  if (servicesToLoad.length === 0) return;

  const preferAvif = await supportsAvif();
  let loaded = 0;
  return new Promise((resolve) => {
    servicesToLoad.forEach((service) => {
      const candidates = resolveBackgroundCandidate(service.image, preferAvif);
      const img = new Image();
      img.src = candidates.preferred;

      img.onload = () => {
        service.selectedImage = img.src;
        if (++loaded === servicesToLoad.length) resolve();
      };

      img.onerror = () => {
        service.selectedImage = candidates.fallback;
        if (++loaded === servicesToLoad.length) resolve();
      };
    });
  });
}

export function setBaseImage(service: Service) {
  const base =
    document.querySelector<HTMLDivElement>(".image-base-content") ||
    document.querySelector<HTMLDivElement>(".image-base");
  if (!base || !service.selectedImage) return;

  base.innerHTML = "";

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 8; i++) {
    const div = document.createElement("div");
    div.className = "slice-bg";
    div.style.backgroundImage = `url(${service.selectedImage})`;
    div.style.setProperty("--i", String(i));
    div.style.setProperty("--total-slices", "8");
    fragment.appendChild(div);
  }
  base.appendChild(fragment);
}

export function createSlices(service: Service) {
  const wrapper = document.querySelector<HTMLDivElement>(".slice-wrapper");
  if (!wrapper || !service.selectedImage) return;

  wrapper.innerHTML = "";

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 8; i++) {
    const div = document.createElement("div");
    div.className = "slice";
    div.style.backgroundImage = `url(${service.selectedImage})`;
    div.style.setProperty("--i", String(i));
    div.style.setProperty("--total-slices", "8");
    fragment.appendChild(div);
  }
  wrapper.appendChild(fragment);
}

export async function updateText(service: Service, animate = false) {
  const text = document.querySelector<HTMLElement>(".service-text");
  if (!text) return;

  const h1 = text.querySelector<HTMLHeadingElement>("h1");
  const h2 = text.querySelector<HTMLHeadingElement>("h2");
  const p = text.querySelector<HTMLParagraphElement>("p");

  if (h1) {
    h1.textContent = service.title;
    const baseClass = h1.dataset.baseClass ?? h1.className;
    h1.dataset.baseClass = baseClass;
    h1.className = `${baseClass} ${service.slug}`.trim();
  }
  if (h2) {
    h2.textContent = service.title;
    const baseClass = h2.dataset.baseClass ?? h2.className;
    h2.dataset.baseClass = baseClass;
    h2.className = `${baseClass} ${service.slug}`.trim();
  }
  if (p) p.textContent = service.description;

  if (animate) {
    const gsap = await loadGsap();
    gsap.fromTo(
      text,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }
}

export async function animateTransition(nextIndex: number, services: Service[]) {
  const gsap = await loadGsap();
  const nextService = services[nextIndex];
  if (!nextService) return;

  if (!nextService.selectedImage) {
    await preloadImages([nextService]);
  }

  createSlices(nextService);
  const slices = document.querySelectorAll<HTMLElement>(".slice");
  if (slices.length === 0) {
    setBaseImage(nextService);
    void updateText(nextService, true);
    return;
  }

  gsap.set(slices, {
    y: (index: number) => (index % 2 === 0 ? "-100%" : "100%"),
    opacity: 0,
  });

  gsap.to(slices, {
    y: 0,
    opacity: 1,
    duration: 2,
    ease: "power3.out",
    onStart: () => {
      void updateText(nextService, true);
    },
    onComplete: () => {
      setBaseImage(nextService);
      gsap.to(slices, {
        opacity: 0,
        duration: 0.1,
        delay: 0.2,
        onComplete: () => {
          const wrapper = document.querySelector<HTMLDivElement>(".slice-wrapper");
          if (wrapper) wrapper.innerHTML = "";
        },
      });
    },
  });
}

async function autoTransition(services: Service[]) {
  const nextIndex = (currentIndex + 1) % services.length;
  await animateTransition(nextIndex, services);
  currentIndex = nextIndex;
}

export async function initSlice(services: Service[]) {
  if (services.length === 0) return;

  const base = document.querySelector(".image-base");
  if (!base) {
    setTimeout(() => {
      void initSlice(services);
    }, 100);
    return;
  }

  currentIndex = 0;
  await preloadImages([services[0]]);
  setBaseImage(services[0]);
  void updateText(services[0], false);

  if (services.length === 1) {
    setTimeout(() => {
      void animateTransition(0, services);
    }, 100);
    return;
  }

  if (services.length > 1) {
    if (window.__bkarsInterval) {
      clearInterval(window.__bkarsInterval);
      window.__bkarsInterval = null;
    }
    setTimeout(() => {
      void autoTransition(services);
      window.__bkarsInterval = window.setInterval(() => {
        void autoTransition(services);
      }, 3000);
    }, 1500);
  }
}
