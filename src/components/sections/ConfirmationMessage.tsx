// src/components/sections/ConfirmationMessage.tsx
"use client";

import { useLocalizedContent } from "../../context/SiteLanguageContext";

export default function ConfirmationMessage() {
  const copy = useLocalizedContent({
    es: {
      title: "Gracias por tu mensaje",
      description:
        "Tu formulario fue enviado correctamente y pronto nos pondremos en contacto contigo.",
      button: "Regresar",
    },
    en: {
      title: "Thank you for your message",
      description:
        "Your form was submitted successfully and we will contact you shortly.",
      button: "Go back",
    },
  });

  const goBack = () => {
    const prev = sessionStorage.getItem("prevPage");
    if (prev) {
      window.location.href = prev;
    } else {
      window.history.back();
    }
  };

  return (
    <div className="relative z-10 text-center text-[#1c2526] p-8 bg-white/90 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-w-[600px] m-4">
      <h1 className="text-[2.5rem] max-md:text-[2rem] font-bold mb-4 text-[#111]">
        {copy.title}
      </h1>
      <p className="text-[1.2rem] max-md:text-[1rem] mb-8 text-[#333]">
        {copy.description}
      </p>
      <button
        className="px-6 py-3 rounded-lg bg-[#111] text-white text-base font-medium transition-colors duration-200 hover:bg-[#222]"
        onClick={goBack}
      >
        {copy.button}
      </button>
    </div>
  );
}
