// src/components/section/ConfirmationPage.tsx
import ConfirmationMessage from "../sections/ConfirmationMessage";
import ThreeWrapperFormulario from "../sections/ThreeWrapperFormulario";

export default function ConfirmationPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#ae08c4] to-[#4fa6e0] font-[var(--font-family-base)] flex items-center justify-center">
      <ThreeWrapperFormulario />
      <ConfirmationMessage />
    </div>
  );
}
