/* client/src/components/lobal/SectorHero.tsx */


import { useRef } from 'react';
import { rubrosData } from '@/data/sectores';
// IMPORTANTE: Importar los tipos desde tu archivo de tipos
import { RubroKey } from '@/types/rubros'; 
import { useVideoInView } from '../ui/useVideoInView';
import { VideoPreview } from '../ui/VideoPreview';

export const SectorHero = ({ rubroKey }: { rubroKey: RubroKey }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  
  // Ahora TypeScript reconocerá rubroKey y no marcará error en rubrosData
  const config = rubrosData[rubroKey];

  // Lógica de Viewport aplicada al video del rubro correspondiente
  useVideoInView(videoRef);

  // Si por alguna razón el rubro no existe en la data, evitamos el crash
  if (!config) return null;

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen w-full overflow-hidden Líderes en Infraestructura y Obra Civil"
    >
      <VideoPreview
        ref={videoRef}
        key={config.src} // <--- AGREGA ESTO: Fuerza al video a recargar si cambia el rubro
        src={config.src}   
        poster={config.img} 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
          {config.titulo}
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300">
          {config.descripcion}
        </p>
      </div>
    </section>
  );
};
