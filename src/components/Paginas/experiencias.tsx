/**client/src/components/Paginas/experiencias.tsx */

import React from 'react';
import { GeneradorWeb } from '@/views/GeneradorWeb';
import { ExperienciasHamburgerNav } from '../global/ExperienciasHamburgerNav';

const Experiencias: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <ExperienciasHamburgerNav />
      {/* Encabezado Profesional */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 py-8 px-8 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                Simulador Web Profesional
                <span className="ml-3 text-cyan-400 text-lg">v2.0</span>
              </h1>
              <p className="text-slate-300 text-sm max-w-2xl">
                Crea experiencias digitales completas en tiempo real. Personaliza cada aspecto y visualiza 
                cómo tu empresa se vería en línea con nuestro simulador de alto nivel.
              </p>
            </div>
            
            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-cyan-400 uppercase tracking-wider">Personalizable</div>
              </div>
              <div className="w-px h-12 bg-cyan-700"></div>
              <div className="text-right">
                <div className="text-2xl font-black text-white">19</div>
                <div className="text-xs text-cyan-400 uppercase tracking-wider">Rubros</div>
              </div>
              <div className="w-px h-12 bg-cyan-700"></div>
              <div className="text-right">
                <div className="text-2xl font-black text-white">GSAP</div>
                <div className="text-xs text-cyan-400 uppercase tracking-wider">Animaciones</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* El Generador Interactivo */}
      <div className="flex-1 overflow-hidden">
        <GeneradorWeb />
      </div>
    </div>
  );
};

export default Experiencias;
