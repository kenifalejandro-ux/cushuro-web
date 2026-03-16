// src/components/sections/ThreeWrapperFormulario.tsx
import { useEffect } from "react";
import { ConfirmationScene } from "../../utils/ConfirmationScene";

export default function ThreeWrapperFormulario() {
  useEffect(() => {
    ConfirmationScene("three-container"); // lo inicializas después del render
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <div id="three-container" className="w-full h-full" />
    </div>
  );
}
