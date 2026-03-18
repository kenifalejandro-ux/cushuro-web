/**client/components/Paginas/la-empresa.tsx */

import PageSEO from "../global/PageSEO";
import { MiningStats } from "../ui/MiningStats";
import { Mision } from "../ui/Mision";
import Nosotros from "../ui/Nosotros";
import { Vision } from "../ui/Vision";
import Politicas from "../ui/Politicas";
import Objetivos from "../ui/Objetivos";

export default function LaEmpresa() {
  return (
    <>
      <PageSEO pageId="la-empresa" />

      <div className="relative bg-gradient-to-b from-white via-stone-100/50 to-[#f6f2ea]">
             {/* Sección de Estadísticas */}
        <div className="relative z-30 bg-gradient-to-b from-stone-100/30 via-emerald-50/10 to-stone-100/20">

          <MiningStats />
        </div>

        {/* Sección Nosotros */}
        <div className="">
          <Nosotros />
        </div>

        {/* Sección Misión */}
        <div className="-mt-0">
          <Mision />
        </div>

        {/* Sección Visión */}
        <div className="-mt-60">
          <Vision />
        </div>
          {/* Sección Objetivos */}
        <div className="-mt-0">
          <Objetivos />
        </div>
        {/* Sección politicas */}
        <div className="-mt-0">
          <Politicas />
        </div>

      </div>
    </>
  );
}
