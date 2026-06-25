/**client/components/Paginas/la-empresa.tsx */

import PageSEO from "../global/PageSEO";
import { MiningStats } from "../ui/MiningStats";
import { UnifiedMissionSection } from "../ui/UnifiedMissionSection";
import Nosotros from "../ui/Nosotros";
import Politicas from "../ui/Politicas";
import GarantiasSuministro from "../ui/GarantiasSuministro";
import ProductosBeneficiosTable from "../ui/ProductosBeneficiosTable";

export default function LaEmpresa() {
  return (
    <>
      <PageSEO pageId="la-empresa" />

      <div className="light-image relative bg-gradient-to-b from-white via-stone-100/50 to-[#f6f2ea]">

        {/* BLOQUE 1 — Identidad Corporativa y Propósito Técnico */}

        {/* Estadísticas clave */}
        <div className="relative z-30 bg-gradient-to-b from-stone-100/30 via-emerald-50/10 to-stone-100/20">
          <MiningStats />
        </div>

        {/* Quiénes Somos — nuevo mensaje de posicionamiento */}
        <div>
          <Nosotros />
        </div>

        {/* BLOQUE 2 — Capacidad Industrial e Infraestructura Operativa */}

        {/* Garantía de Suministro: 100% propio, 24/7, resiliencia */}
        <div>
          <GarantiasSuministro />
        </div>

        {/* BLOQUE 4 — Compliance, Sostenibilidad y Cierre Corporativo */}

        {/* Tabla: Productos → Beneficio directo en la mina */}
        <div>
          <ProductosBeneficiosTable />
        </div>
        
        {/* Misión, Visión & Objetivos — bloque unificado con diseño Minera Boroo */}
        <div>
          <UnifiedMissionSection />
        </div>

        {/* Garantías de Homologación (Políticas) */}
        <div>
          <Politicas />
        </div>

      </div>
    </>
  );
}
