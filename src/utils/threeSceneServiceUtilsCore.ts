/** client/src/utils/threeSceneServiceUtilsCore.ts */

import * as THREE from "three";

export async function initServicesSceneCore(
  container: HTMLElement,
  sectionClass?: string,
  theme: "dark" | "light" = "light"
): Promise<() => void> {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true, // ← Importante: permite transparencia
  });

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // FONDO SIEMPRE TRANSPARENTE
  renderer.setClearColor(0x000000, 0); // alpha = 0 → se ve el fondo del contenedor HTML

  container.appendChild(renderer.domElement);

  // === Color del cubo según el tema ===
  const cubeColor = theme === "dark" ? 0xFFFFF4 : 0x000000; // blanco en oscuro, negro en claro

  const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
  const material = new THREE.MeshStandardMaterial({ color: cubeColor });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // === Luces ajustadas al tema ===
  const directionalIntensity = theme === "dark" ? 4 : 2.5;   // más fuerte en oscuro
  const ambientIntensity = theme === "dark" ? 1.5 : 0.8;

  const light = new THREE.DirectionalLight(0xffffff, directionalIntensity);
  light.position.set(5, 5, 5);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0xffffff, ambientIntensity));

  let rafId: number | null = null;
  let isActive = false;

  const animate = () => {
    if (!isActive) return;

    cube.rotation.x += 0.002;
    cube.rotation.y += 0.002;

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(animate);
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!isActive) {
          isActive = true;
          animate();
        }
      } else {
        isActive = false;
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(container);

  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    observer.disconnect();
    if (rafId !== null) cancelAnimationFrame(rafId);
    window.removeEventListener("resize", handleResize);

    geometry.dispose();
    material.dispose();
    renderer.dispose();
    container.innerHTML = "";
  };
}