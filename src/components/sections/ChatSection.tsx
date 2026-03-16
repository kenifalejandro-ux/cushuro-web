// src/components/sections/ChatSection.tsx
import Section from '../Section';
import './ChatSection.css';  


// Import directo del wrapper (no lazy aquí, ya que el inner lazy maneja el heavy lifting)


export default function ChatSection() {


  return (
    <>
      {/* Wrapper full-width que mantiene la estructura */}
      <div className="full-width-wrapper dark-image">
        <Section
          sectionClass="chat-section"
          id="chat-section"
          ariaLabel="Asistente virtual de Zincel"
          content={
            <div className="chat-text">
              <h2>Hablemos de tu visión digital</h2>
              <p>Pregunta cómo podemos dar
                 vida a tu marca <br />con diseño y tecnología.</p>
              
              <div id="chatbot-banner-wrapper">
              
              </div>
            </div>
          }
          imageContent={
            <div className="model-experience-bot">
              {/* Usa directamente ModelWithPlaceholder – su Suspense maneja todo */}
             
            </div>
          }
          reverse={false}
        />
      </div>

      {/* Chatbot desactivado temporalmente – igual */}
      {/*
      <section id="chatbot-container" className="chatbot-container" aria-label="Chatbot interactivo de zincel">
        ...
      </section>
      */}
    </>
  );
}