import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Si ya lo cambiaste, genial; si no, hacelo ahora
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr"; // ← Nueva importación
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({ exportAsDefault: true }) // ⚡ Esto asegura que default export sea componente React
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "three-examples": path.resolve(__dirname, "node_modules/three/examples/jsm"),
    },
  },
  server: {
    host: true,        // 🔥 ESTO ES LA CLAVE
    port: 5173,
    open: false,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
