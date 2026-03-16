// src/utils/ConfirmationScene.ts

import * as THREE from "three";

export function ConfirmationScene(containerId: string = "three-container") {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Contenedor ${containerId} no encontrado`);
    return;
  }

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  camera.position.set(0, 0, 20);

  // Partículas
  const particleCount = 200;
  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 50;
    positions[i + 1] = (Math.random() - 0.5) * 50;
    positions[i + 2] = (Math.random() - 0.5) * 50;
  }
  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xf5f5f5,
    size: 0.2,
    transparent: true,
    opacity: 0.8,
  });
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  // Anillo central
  const ringGeometry = new THREE.TorusGeometry(5, 0.2, 16, 100);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x99ccff,
    transparent: true,
    opacity: 0.7,
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);

  // Luces
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0x99ccff, 1, 50);
  pointLight.position.set(0, 0, 10);
  scene.add(pointLight);

  // Animación
  let time = 0;
  function animate() {
    time += 0.01;
    particles.rotation.y += 0.002;
    ring.rotation.z += 0.01;
    pointLight.position.x = 5 * Math.cos(time);
    pointLight.position.z = 5 * Math.sin(time);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  // Redimensionamiento
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}