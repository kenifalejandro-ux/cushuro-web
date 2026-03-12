import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Building2,
  HardHat,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Factory
} from "lucide-react";
import { ImageStack } from "../ui/ImageStack";

const CONTACT_EMAIL = "administracion@cushuro.com";
const WHATSAPP_LABEL = "+51 986 671 128";
const WHATSAPP_URL = "https://wa.me/51986671128";
const CONTACT_IMAGE =
  "/contacto/imagenes/flota-calera";

export default function App() {
  return (
    <div className="relative bg-zinc-50 text-zinc-50 font-sans overflow-hidden selection:bg-emerald-500/30">
      
     {/* Fondo de Imagen Industrial Profesional */}
<div className="fixed inset-0 w-screen h-screen z-0">
  <ImageStack
  layout="stacked"
  fullScreen
  images={[
    {
      src: "/contacto/imagenes/flota-calera",
      alt: "Trabajo operativo",
    },
  ]}
/>

  {/* Overlay oscuro profesional */}
  <div className="absolute inset-0 bg-black/70" />
</div>

      <main className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Columna Izquierda - Texto Principal */}
            <div className="space-y-10">
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
                >
                  <Factory size={16} className="text-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-300">
                    División Minera No Metálica
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
                >
                  Solicite una <br className="hidden sm:block" />
                  <span className="text-emerald-400">Cotización</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-xl text-lg text-zinc-400 leading-relaxed font-light"
                >
                  Producción y suministro de Óxido de Calcio, Cal Hidratada, Cal Agrícola y Piedra Caliza para el sector minero e industrial. Capacidad operativa continua y sólido respaldo institucional.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                {[
                  { text: "5 hornos operativos – 176 TM diarias", bold: "176 TM diarias" },
                  { text: "Registro vigente en Bienes Fiscalizados", bold: "Bienes Fiscalizados" },
                  { text: "Facturación electrónica – RUC 20482610944", bold: "RUC 20482610944" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    </div>
                    <span className="font-medium text-zinc-300">
                      {item.text.split(item.bold).map((part, index, array) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < array.length - 1 && <span className="text-white font-semibold">{item.bold}</span>}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Columna Derecha - Tarjeta de Contacto (Glassmorphism Profesional) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 sm:p-10 shadow-2xl"
            >
              {/* Opciones de Contacto */}
              <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
                
                {/* Email Card */}
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/5 border border-white/5 p-6 transition-all hover:bg-white/10 hover:border-emerald-500/30"
                >
                  <div className="mb-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Correo Corporativo</p>
                    <p className="text-xs  text-white break-all">{CONTACT_EMAIL}</p>
                  </div>
                  <div className="flex items-center text-xs font-medium text-emerald-400">
                    Enviar requerimiento <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6 transition-all hover:bg-emerald-500/20"
                >
                  <div className="mb-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                      <MessageCircle size={24} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200/70 mb-1">WhatsApp Comercial</p>
                    <p className="text-sm text-white">{WHATSAPP_LABEL}</p>
                  </div>
                  <div className="flex items-center text-xs font-medium text-emerald-400">
                    Atención rápida <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </a>

              </div>

              {/* Información Institucional */}
              <div className="mt-8 border-t border-white/10 pt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <Building2 className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold leading-relaxed text-zinc-400 uppercase tracking-wide">
                    Empresa de Transportes y Servicios Santa Isabel de Cushuro S.A.C.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <div className="space-y-2 text-sm text-zinc-400">
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-zinc-300">Oficina:</span> 
                      <span>Av. Vía Aviación Oeste N°155 – Huamachuco, La Libertad</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-zinc-300">Planta:</span> 
                      <span>Centro de Producción Cas. Rodeopampa – Marcabal</span>
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}
