// Versión estática (sin bundler) para contactanos.html

declare const THREE: typeof import("three");
declare const grecaptcha: any;

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
  const banner = document.getElementById("banner");
  const tabs = document.getElementById("tabs");
  const floatingIcon = document.getElementById("floating-icon");
  const modalBackground = document.getElementById("modal-background");
  const modalContact = document.getElementById("modal-contact");

  let lastScrollTop = 0;

  if (!banner || !tabs || !floatingIcon) {
    console.warn("Elementos del header no encontrados:", { banner, tabs, floatingIcon });
    return () => {};
  }

  // Detección de pestaña activa
  function setupActiveTab() {
    const links = document.querySelectorAll(".tab-link");
    const currentPath = window.location.pathname.replace(/\/$/, "");
    links.forEach((link) => {
      const linkPath = link.getAttribute("href").replace(/\/$/, "");
      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
    banner.classList.remove("active");
  }

  // Manejo de scroll para banner, tabs, logo y efectos de scroll
  const handleScroll = debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Lógica de visibilidad del banner y tabs
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      banner.classList.add("hidden");
      banner.classList.remove("active");
      tabs.classList.add("hidden");
      if (window.innerWidth <= 430 && !modalContact.classList.contains("active")) {
        floatingIcon.classList.add("hidden");
      }
    } else {
      banner.classList.remove("hidden");
      tabs.classList.remove("hidden");
      if (window.innerWidth <= 430) {
        floatingIcon.classList.remove("hidden");
      }
      banner.classList.toggle("active", scrollTop > 50);
    }
    lastScrollTop = scrollTop;
  }, 10);

  // Eventos del modal
  if (floatingIcon && modalBackground && modalContact) {
    floatingIcon.addEventListener("click", () => {
      modalContact.classList.toggle("active");
      modalBackground.classList.toggle("active");
      floatingIcon.classList.toggle("active");
    });

    modalBackground.addEventListener("click", () => {
      modalContact.classList.remove("active");
      modalBackground.classList.remove("active");
      floatingIcon.classList.remove("active");
    });
  }

  // Inicializar pestaña activa al cargar
  setupActiveTab();

  // Agregar eventos de scroll, resize y load
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  window.addEventListener("load", handleScroll);

  // Devolver función de limpieza
  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
    window.removeEventListener("load", handleScroll);
  };
}

// Escena 3D para servicios (usa THREE global desde CDN)
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
    emissiveIntensity: 0.4,
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
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 1,
      transparent: true,
      opacity: 0.5,
    });
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
    emissiveIntensity: 0.5,
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
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    stopAnimation();
  };
}

// Inicializar el formulario con reCAPTCHA
function initForm() {
  const formulario = document.getElementById("contactForm");
  const clearButton = document.getElementById("clear-form");
  const mensaje = document.getElementById("mensaje"); // si tienes un div de alerta

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // detenemos el envío por defecto
      fetch("http://localhost:3000/api/recaptcha-site-key")
        .then((response) => {
          console.log("Respuesta del fetch:", response.status, response.ok); // Depuración
          if (!response.ok) throw new Error("Error en la respuesta del servidor");
          return response.json();
        })
        .then((data) => {
          console.log("Clave obtenida:", data.siteKey); // Depuración
          grecaptcha.ready(function () {
            grecaptcha
              .execute(data.siteKey, { action: "submit" })
              .then(function (token) {
                console.log("Token de reCAPTCHA:", token); // Depuración
                document.getElementById("recaptcha_token").value = token;
                formulario.submit();
              })
              .catch((error) => {
                console.error("Error en grecaptcha.execute:", error);
                if (mensaje) mensaje.innerText = "Error al verificar reCAPTCHA";
              });
          });
        })
        .catch((error) => {
          console.error("Error al obtener la RECAPTCHA_SITE_KEY:", error);
          if (mensaje) mensaje.innerText = "Error al conectar con el servidor";
        });
    });
  }

  // Botón de limpiar
  if (clearButton) {
    clearButton.addEventListener("click", function () {
      formulario.reset();
      if (mensaje) mensaje.classList.add("hidden");
    });
  }
}

function initContactanosPage() {
  const cleanupHeader = setupHeaderAndTabs();
  const cleanupServices = initServicesScene("three-container-contact");
  initForm();

  const cleanup = () => {
    cleanupHeader();
    cleanupServices();
  };

  const handleUnload = () => cleanup();
  window.addEventListener("unload", handleUnload);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initContactanosPage();
  });
} else {
  initContactanosPage();
}

export {};
