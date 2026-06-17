// src/components/section/ConfirmationPage.tsx

import ConfirmationMessage from "../sections/ConfirmationMessage";
import ThreeWrapperFormulario from "../sections/ThreeWrapperFormulario";
import { LCPImage } from "../ui/LCPImage";

export default function ConfirmationPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 z-0">
         <LCPImage
          src="img-inicio/hero/cantera001"
          alt="Imagen hero principal"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="opacity-40"
        />
      </div>

      {/* Three.js encima del fondo */}
      <div className="absolute inset-0 z-10">
        <ThreeWrapperFormulario />
      </div>

      {/* UI encima de todo */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <ConfirmationMessage />
      </div>

    </div>
  );
}