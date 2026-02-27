// Optimiza FCP sin perder animación ni carga visual

let gsapInstance: typeof import("gsap").gsap | null = null;

/* =========================
   TIPOS
========================= */

type ImageSizes = {
  768: string;
  1280: string;
  1920: string;
  2560: string;
  3840: string;
};

interface ServiceImages {
  avif: ImageSizes;
  webp: ImageSizes;
}

export interface Service {
  images: ServiceImages;
  slug: string;
  title: string;
  description: string;
  selectedImage?: string;
}

/* =========================
   CARGA DINÁMICA GSAP
========================= */

async function loadGsap() {
  if (!gsapInstance) {
    const module = await import("gsap");
    gsapInstance = module.gsap;
  }
  return gsapInstance;
}

/* =========================
   DATA
========================= */

export const services: Service[] = [
  {
    images: {
      avif: {
        768: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-768.avif",
        1280: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-1280.avif",
        1920: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-1920.avif",
        2560: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-2560.avif",
        3840: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-3840.avif",
      },
      webp: {
        768: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-768.webp",
        1280: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-1280.webp",
        1920: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-1920.webp",
        2560: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-2560.webp",
        3840: "/imagenes-optim/trabajos/bkars/slice/mantenimiento-3840.webp",
      },
    },
    slug: "mantenimiento",
    title: "Mantenimiento",
    description: "Servicio integral para mantener tu vehículo en óptimas condiciones.",
  },
  {
    images: {
      avif: {
        768: "/imagenes-optim/trabajos/bkars/slice/diagnostico-768.avif",
        1280: "/imagenes-optim/trabajos/bkars/slice/diagnostico-1280.avif",
        1920: "/imagenes-optim/trabajos/bkars/slice/diagnostico-1920.avif",
        2560: "/imagenes-optim/trabajos/bkars/slice/diagnostico-2560.avif",
        3840: "/imagenes-optim/trabajos/bkars/slice/diagnostico-3840.avif",
      },
      webp: {
        768: "/imagenes-optim/trabajos/bkars/slice/diagnostico-768.webp",
        1280: "/imagenes-optim/trabajos/bkars/slice/diagnostico-1280.webp",
        1920: "/imagenes-optim/trabajos/bkars/slice/diagnostico-1920.webp",
        2560: "/imagenes-optim/trabajos/bkars/slice/diagnostico-2560.webp",
        3840: "/imagenes-optim/trabajos/bkars/slice/diagnostico-3840.webp",
      },
    },
    slug: "diagnostico",
    title: "Diagnóstico",
    description: "Análisis preciso de problemas con tecnología avanzada.",
  },
  {
    images: {
      avif: {
        768: "/imagenes-optim/trabajos/bkars/slice/motor-768.avif",
        1280: "/imagenes-optim/trabajos/bkars/slice/motor-1280.avif",
        1920: "/imagenes-optim/trabajos/bkars/slice/motor-1920.avif",
        2560: "/imagenes-optim/trabajos/bkars/slice/motor-2560.avif",
        3840: "/imagenes-optim/trabajos/bkars/slice/motor-3840.avif",
      },
      webp: {
        768: "/imagenes-optim/trabajos/bkars/slice/motor-768.webp",
        1280: "/imagenes-optim/trabajos/bkars/slice/motor-1280.webp",
        1920: "/imagenes-optim/trabajos/bkars/slice/motor-1920.webp",
        2560: "/imagenes-optim/trabajos/bkars/slice/motor-2560.webp",
        3840: "/imagenes-optim/trabajos/bkars/slice/motor-3840.webp",
      },
    },
    slug: "motor",
    title: "Motor",
    description: "Reparación y optimización del motor para máximo rendimiento.",
  },
  {
    images: {
      avif: {
        768: "/imagenes-optim/trabajos/bkars/slice/frenos-768.avif",
        1280: "/imagenes-optim/trabajos/bkars/slice/frenos-1280.avif",
        1920: "/imagenes-optim/trabajos/bkars/slice/frenos-1920.avif",
        2560: "/imagenes-optim/trabajos/bkars/slice/frenos-2560.avif",
        3840: "/imagenes-optim/trabajos/bkars/slice/frenos-3840.avif",
      },
      webp: {
        768: "/imagenes-optim/trabajos/bkars/slice/frenos-768.webp",
        1280: "/imagenes-optim/trabajos/bkars/slice/frenos-1280.webp",
        1920: "/imagenes-optim/trabajos/bkars/slice/frenos-1920.webp",
        2560: "/imagenes-optim/trabajos/bkars/slice/frenos-2560.webp",
        3840: "/imagenes-optim/trabajos/bkars/slice/frenos-3840.webp",
      },
    },
    slug: "frenos",
    title: "Sistemas de Frenos",
    description: "Mantenimiento y reparación de frenos para tu seguridad.",
  },
];

/* =========================
   CONFIG
========================= */

const sizes = [768, 1280, 1920] as const;
let avifSupport: boolean | null = null;
let currentIndex = 0;

/* =========================
   AVIF DETECTION
========================= */

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

/* =========================
   IMAGE SELECTION
========================= */

function selectImage(images: ServiceImages) {
  const width = window.innerWidth;
  const selectedSize = sizes.find((s) => s >= width) ?? sizes[sizes.length - 1];

  return {
    avif: images.avif[selectedSize],
    webp: images.webp[selectedSize],
  };
}

/* =========================
   PRELOAD
========================= */

export async function preloadImages(servicesToLoad: Service[] = services): Promise<void> {
  const support = await supportsAvif();
  let loaded = 0;

  return new Promise((resolve) => {
    servicesToLoad.forEach((service) => {
      const { avif, webp } = selectImage(service.images);
      const img = new Image();
      img.src = support ? avif : webp;

      img.onload = () => {
        service.selectedImage = img.src;
        if (++loaded === servicesToLoad.length) resolve();
      };

      img.onerror = () => {
        service.selectedImage = webp;
        if (++loaded === servicesToLoad.length) resolve();
      };
    });
  });
}

/* =========================
   RENDER
========================= */

export function setBaseImage(service: Service) {
  const base = document.querySelector<HTMLDivElement>(".image-base");
  if (!base || !service.selectedImage) return;

  base.innerHTML = "";

  const frag = document.createDocumentFragment();
  for (let i = 0; i < 8; i++) {
    const div = document.createElement("div");
    div.className = "slice-bg";
    div.style.backgroundImage = `url(${service.selectedImage})`;
    div.style.setProperty("--i", String(i));
    div.style.setProperty("--total-slices", "8");
    frag.appendChild(div);
  }
  base.appendChild(frag);
}

export function createSlices(service: Service) {
  const wrap = document.querySelector<HTMLDivElement>(".slice-wrapper");
  if (!wrap || !service.selectedImage) return;

  wrap.innerHTML = "";

  const frag = document.createDocumentFragment();
  for (let i = 0; i < 8; i++) {
    const div = document.createElement("div");
    div.className = "slice";
    div.style.backgroundImage = `url(${service.selectedImage})`;
    div.style.setProperty("--i", String(i));
    div.style.setProperty("--total-slices", "8");
    frag.appendChild(div);
  }
  wrap.appendChild(frag);
}

export async function updateText(service: Service, animate: boolean = false) {
  const text = document.querySelector<HTMLElement>(".service-text");
  if (!text) return;

  const h2 = text.querySelector<HTMLHeadingElement>("h2");
  const p = text.querySelector<HTMLParagraphElement>("p");

  if (h2) {
    h2.textContent = service.title;
    h2.className = `service-title ${service.slug}`;
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

/* =========================
   TRANSITION
========================= */

export async function animateTransition(nextIndex: number) {
  const gsap = await loadGsap();
  const nextService = services[nextIndex];

  if (!nextService.selectedImage) {
    await preloadImages([nextService]);
  }

  createSlices(nextService);
  const slices = document.querySelectorAll(".slice");

  gsap.set(slices, {
    y: (i: number) => (i % 2 === 0 ? "-100%" : "100%"),
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
          const wrap = document.querySelector<HTMLDivElement>(".slice-wrapper");
          if (wrap) wrap.innerHTML = "";
        },
      });
    },
  });
}

/* =========================
   LOOP
========================= */

async function autoTransition() {
  const nextIndex = (currentIndex + 1) % services.length;
  await animateTransition(nextIndex);
  currentIndex = nextIndex;
}

/* =========================
   INIT
========================= */

export async function initSlice() {
  const base = document.querySelector(".image-base");
  if (!base) {
    setTimeout(initSlice, 100);
    return;
  }

  await preloadImages([services[0]]);
  setBaseImage(services[0]);
  updateText(services[0], false);

  const skeleton = document.querySelector(".image-base.skeleton") as HTMLElement | null;

  if (skeleton) skeleton.style.display = "none";

  setTimeout(() => {
    autoTransition();
    window.__bkarsInterval = window.setInterval(autoTransition, 3000);
  }, 1500);
}
