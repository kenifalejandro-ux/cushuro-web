import * as THREE from "three";

declare const grecaptcha: any;

function toPhpApiPath(pathname: string) {
  if (!pathname.startsWith("/api/") || pathname.endsWith(".php")) {
    return pathname;
  }

  return `${pathname}.php`;
}

function getApiCandidates(pathname: string) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const phpPath = toPhpApiPath(normalizedPath);

  if (typeof window === "undefined") {
    return [...new Set([normalizedPath, phpPath])];
  }

  const { protocol, hostname, origin } = window.location;
  const candidates = [
    `${origin}${normalizedPath}`,
    normalizedPath,
    `${origin}${phpPath}`,
    phpPath,
    `${protocol}//${hostname}:3000${normalizedPath}`,
  ];

  if (hostname !== "localhost" && hostname !== "127.0.0.1") {
    candidates.push(`http://localhost:3000${normalizedPath}`);
  }

  return [...new Set(candidates)];
}

async function fetchFromApi(pathname: string, init?: RequestInit) {
  const candidates = getApiCandidates(pathname);
  let lastError: Error | null = null;

  for (const url of candidates) {
    try {
      const response = await fetch(url, init);
      const contentType = response.headers.get("content-type") || "";
      const looksLikeHtml =
        contentType.includes("text/html") ||
        contentType.includes("application/xhtml+xml");
      const isRetryableProxyFailure =
        pathname.startsWith("/api/") &&
        !response.ok &&
        response.status >= 500 &&
        !contentType.includes("application/json");

      // During local Vite dev, unknown `/api/*` routes often fall back to index.html.
      // If that happens, keep trying the next API candidate instead of returning HTML.
      if ((pathname.startsWith("/api/") && looksLikeHtml) || isRetryableProxyFailure) {
        lastError = new Error(`El endpoint ${url} no devolvio una respuesta valida de la API.`);
        continue;
      }

      return response;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(`No se pudo conectar a ${url}`);
    }
  }

  throw lastError ?? new Error("No se pudo conectar con el backend.");
}

function ensureRecaptchaScript(siteKey: string) {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      reject(new Error("El navegador no está disponible para cargar reCAPTCHA."));
      return;
    }

    if (typeof (window as any).grecaptcha !== "undefined") {
      resolve();
      return;
    }

    const scriptSrc = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    const existing = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("No se pudo cargar reCAPTCHA.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("No se pudo cargar reCAPTCHA."));
    document.head.appendChild(script);
  });
}

// Utilidad: Debounce
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// === BLOQUE: BANNER, TABS, LOGO Y EFECTOS DE SCROLL ===
function setupHeaderAndTabs() {
  const banner = document.getElementById('banner');
  const tabs = document.getElementById('tabs');
  const floatingIcon = document.getElementById('floating-icon');
  const modalBackground = document.getElementById('modal-background');
  const modalContact = document.getElementById('modal-contact');
  
  let lastScrollTop = 0;

  if (!banner || !tabs || !floatingIcon) {
    console.warn('Elementos del header no encontrados:', { banner, tabs, floatingIcon });
    return () => {};
  }

  // Detección de pestaña activa
  function setupActiveTab() {
    const links = document.querySelectorAll('.tab-link');
    const currentPath = window.location.pathname.replace(/\/$/, '');
    links.forEach(link => {
      const linkPath = link.getAttribute('href').replace(/\/$/, '');
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });
    banner.classList.remove('active');
  }

  // Manejo de scroll para banner, tabs, logo y efectos de scroll
  const handleScroll = debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Lógica de visibilidad del banner y tabs
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      banner.classList.add('hidden');
      banner.classList.remove('active');
      tabs.classList.add('hidden');
      if (window.innerWidth <= 430 && !modalContact.classList.contains('active')) {
        floatingIcon.classList.add('hidden');
      }
    } else {
      banner.classList.remove('hidden');
      tabs.classList.remove('hidden');
      if (window.innerWidth <= 430) {
        floatingIcon.classList.remove('hidden');
      }
      banner.classList.toggle('active', scrollTop > 50);
    }
    lastScrollTop = scrollTop;

  }, 10);

  // Eventos del modal
  if (floatingIcon && modalBackground && modalContact) {
    floatingIcon.addEventListener('click', () => {
      modalContact.classList.toggle('active');
      modalBackground.classList.toggle('active');
      floatingIcon.classList.toggle('active');
    });

    modalBackground.addEventListener('click', () => {
      modalContact.classList.remove('active');
      modalBackground.classList.remove('active');
      floatingIcon.classList.remove('active');
    });
  }

  // Inicializar pestaña activa al cargar
  setupActiveTab();

  // Agregar eventos de scroll, resize y load
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  window.addEventListener('load', handleScroll);

  // Devolver función de limpieza
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
    window.removeEventListener('load', handleScroll);
  };
}

// Escena 3D para servicios
function initServicesScene(containerId) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const container = document.getElementById(containerId);
  if (!container) return () => {};

  function updateRendererSize() {
    const scaleFactor = 1.5;
    const width = container.clientWidth * scaleFactor;
    const height = container.clientHeight * scaleFactor;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function updateCameraViewport() {
    camera.position.set(0, 5, 16);
    camera.fov = 60;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }

  updateRendererSize();
  container.appendChild(renderer.domElement);
  updateCameraViewport();

  const geometryMoon = new THREE.BoxGeometry(0, 0, 0);
  const materialMoon = new THREE.MeshStandardMaterial({
    color: 0xe6e0e0,
    roughness: 0.7,
    metalness: 0.1,
    emissive: 0xffffff,
    emissiveIntensity: 0.4
  });
  const moon = new THREE.Mesh(geometryMoon, materialMoon);
  moon.castShadow = true;
  moon.receiveShadow = true;
  scene.add(moon);

  const spiralPoints = [];
  const spiralRadius = 8;
  const spiralHeight = 12;
  for (let i = 0; i < 100; i++) {
    const theta = (i / 100) * Math.PI * 4;
    const x = spiralRadius * Math.cos(theta);
    const y = (i / 100) * spiralHeight - spiralHeight / 2;
    const z = spiralRadius * Math.sin(theta);
    spiralPoints.push(new THREE.Vector3(x, y, z));
  }
  const spiralGeometry = new THREE.BufferGeometry().setFromPoints(spiralPoints);
  const spiralMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 4 });
  const spiral = new THREE.Line(spiralGeometry, spiralMaterial);
  scene.add(spiral);

  const waveLines = [];
  const waveCount = 3;
  for (let i = 0; i < waveCount; i++) {
    const points = [];
    const radius = 8 + i * 0.7;
    for (let j = 0; j < 50; j++) {
      const theta = (j / 50) * Math.PI * 2;
      const x = radius * Math.cos(theta);
      const y = 0;
      const z = radius * Math.sin(theta);
      points.push(new THREE.Vector3(x, y, z));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1, transparent: true, opacity: 0.5 });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    waveLines.push(line);
  }

  const geometryWormhole = new THREE.TorusGeometry(14, 0.4, 16, 100);
  const materialWormhole = new THREE.MeshStandardMaterial({
    color: 0xe6e0e0,
    roughness: 0.8,
    metalness: 0.2,
    emissive: 0xf1f1f1,
    emissiveIntensity: 0.5
  });
  const wormhole = new THREE.Mesh(geometryWormhole, materialWormhole);
  wormhole.position.set(0, 0, -8);
  wormhole.rotation.x = Math.PI / 2;
  scene.add(wormhole);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
  dirLight.position.set(5, 10, 5);
  dirLight.castShadow = true;
  dirLight.shadow.bias = -0.0001;
  scene.add(dirLight);
  const pointLight1 = new THREE.PointLight(0x99ccff, 1.2, 10);
  pointLight1.position.set(4, 0, 0);
  scene.add(pointLight1);
  const pointLight2 = new THREE.PointLight(0x66aaff, 1.2, 10);
  pointLight2.position.set(-4, 0, 0);
  scene.add(pointLight2);

  let time = 0;
  let isAnimating = false;

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function animate() {
    if (isElementInViewport(container)) {
      time += 0.016;
      moon.rotation.y += 0.002;
      moon.rotation.x += 0.001;
      const spiralPositions = spiral.geometry.attributes.position.array;
      for (let i = 0; i < spiralPoints.length; i++) {
        const theta = (i / 100) * Math.PI * 4 + time * 0.2;
        spiralPositions[i * 3] = spiralRadius * Math.cos(theta);
        spiralPositions[i * 3 + 2] = spiralRadius * Math.sin(theta);
      }
      spiral.geometry.attributes.position.needsUpdate = true;

      waveLines.forEach((line, index) => {
        const points = line.geometry.attributes.position.array;
        for (let j = 0; j < 50; j++) {
          const theta = (j / 50) * Math.PI * 2;
          points[j * 3 + 1] = Math.sin(theta + time * 0.5 + index) * 0.4;
        }
        line.geometry.attributes.position.needsUpdate = true;
      });

      wormhole.rotation.z += 0.01;
      pointLight1.position.x = 4 * Math.cos(time * 0.3);
      pointLight1.position.z = 4 * Math.sin(time * 0.3);
      pointLight2.position.x = -4 * Math.cos(time * 0.3);
      pointLight2.position.z = -4 * Math.sin(time * 0.3);

      renderer.render(scene, camera);
    }
    if (isAnimating) requestAnimationFrame(animate);
  }

  function startAnimation() {
    if (!isAnimating) {
      isAnimating = true;
      animate();
    }
  }

  function stopAnimation() {
    isAnimating = false;
  }

  startAnimation();

  const handleResize = debounce(updateRendererSize, 100);
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
    stopAnimation();
  };
}

// Inicializar el formulario con reCAPTCHA
function initForm() {
  const formulario = document.getElementById("contactForm") as HTMLFormElement | null;
  const clearButton = document.getElementById("clear-form") as HTMLButtonElement | null;
  const mensaje = document.getElementById("mensaje") as HTMLDivElement | null;
  const recaptchaInput = document.getElementById("recaptcha_token") as HTMLInputElement | null;
  const submitButton = formulario?.querySelector('button[type="submit"]') as HTMLButtonElement | null;

  if (!formulario) {
    return () => {};
  }

  const setMessage = (text: string, type: "error" | "success" = "error") => {
    if (!mensaje) return;
    mensaje.textContent = text;
    mensaje.dataset.state = type;
    mensaje.classList.remove("hidden");
  };

  const clearMessage = () => {
    if (!mensaje) return;
    mensaje.textContent = "";
    mensaje.classList.add("hidden");
    delete mensaje.dataset.state;
  };

  const setSubmitting = (isSubmitting: boolean) => {
    if (!submitButton) return;
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? "Enviando..." : "Enviar";
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    clearMessage();
    setSubmitting(true);

    try {
      const siteKeyResponse = await fetchFromApi("/api/recaptcha-site-key");
      const siteKeyContentType = siteKeyResponse.headers.get("content-type") || "";

      if (!siteKeyResponse.ok) {
        if (siteKeyContentType.includes("application/json")) {
          const errorData = await siteKeyResponse.json().catch(() => null);
          throw new Error(
            errorData?.message || "No se pudo obtener la clave de reCAPTCHA."
          );
        }

        const errorText = await siteKeyResponse.text();
        throw new Error(
          errorText ||
            "No se pudo obtener la clave de reCAPTCHA. Verifica que el backend este corriendo en http://localhost:3000."
        );
      }

      if (!siteKeyContentType.includes("application/json")) {
        throw new Error("La API de reCAPTCHA no respondio JSON.");
      }

      const { siteKey } = await siteKeyResponse.json();

      if (!siteKey) {
        throw new Error("La clave de reCAPTCHA no esta configurada.");
      }

      await ensureRecaptchaScript(siteKey);

      const token = await new Promise<string>((resolve, reject) => {
        grecaptcha.ready(function () {
          grecaptcha
            .execute(siteKey, { action: "submit" })
            .then(resolve)
            .catch(reject);
        });
      });

      if (recaptchaInput) {
        recaptchaInput.value = token;
      }

      const formData = new FormData(formulario);
      const payload = Object.fromEntries(formData.entries());

      const submitResponse = await fetchFromApi("/api/formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!submitResponse.ok) {
        const contentType = submitResponse.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const errorData = await submitResponse.json();
          const firstError = errorData?.errors?.[0]?.message;
          throw new Error(firstError || "No se pudo enviar el formulario.");
        }

        const errorText = await submitResponse.text();
        throw new Error(errorText || "No se pudo enviar el formulario.");
      }

      const submitContentType = submitResponse.headers.get("content-type") || "";
      if (!submitContentType.includes("application/json")) {
        const responseText = await submitResponse.text();
        throw new Error(responseText || "La API del formulario no respondio JSON.");
      }

      const result = await submitResponse.json();
      sessionStorage.setItem("prevPage", window.location.pathname);
      window.location.assign(result.redirectTo || "/formulario");
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar el formulario o conectar con el backend.",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleClear = () => {
    formulario.reset();
    if (recaptchaInput) {
      recaptchaInput.value = "";
    }
    clearMessage();
  };

  formulario.addEventListener("submit", handleSubmit);
  clearButton?.addEventListener("click", handleClear);

  return () => {
    formulario.removeEventListener("submit", handleSubmit);
    clearButton?.removeEventListener("click", handleClear);
  };
}

// Inicialización para React (sin alterar la lógica interna)
export function initContactanosPage() {
  if (typeof window === "undefined") {
    return () => {};
  }

  const cleanupHeader = setupHeaderAndTabs();
  const cleanupServices = initServicesScene("three-container-contact");
  const cleanupForm = initForm();

  const cleanup = () => {
    cleanupHeader();
    cleanupServices();
    cleanupForm();
  };

  const handleUnload = () => cleanup();
  window.addEventListener("unload", handleUnload);

  return () => {
    window.removeEventListener("unload", handleUnload);
    cleanup();
  };
}
