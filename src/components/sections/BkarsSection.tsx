// client/src/components/Paginas/bkars/BkarsSection.tsx

import { OptimizedImage } from "../ui/OptimizedImage";


      
   export function ContentSection (){
   return(
        <section className="garage-fade mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="garage-slide-left">
              <h2 className="mb-6 text-white">Precisión Mecánica</h2>
              <p className="text-lg text-gray-300 mb-4">
                BKARS representa la excelencia en mecánica automotriz. Diseñamos una identidad 
                que comunica profesionalismo, tecnología de punta y pasión por los vehículos.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                El proyecto abarcó logo dinámico, paleta industrial, señalización del taller, 
                uniformes técnicos, y plataforma digital para reservas y seguimiento de servicios.
              </p>
              <div className="flex gap-4">
                <div className="w-20 h-1 bg-amber-600"></div>
                <div className="w-10 h-1 bg-amber-600/50"></div>
                <div className="w-6 h-1 bg-amber-600/30"></div>
              </div>
            </div>
            <div className="garage-slide-right">
              <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                <OptimizedImage
                  src="/imagenes-optim/trabajos/bkars/logo-bkars/logo-bkars"
                  alt="Logo de bkars elaborado por Zincel"                                     
                  className="w-full h-400 object-cover hover:scale-110 transition-transform duration-700"
                                priority
    sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           1920px"

                />
              </div>
            </div>
          </div>
        </section>
        );
        }

   export function  SplitContent (){
   return(
        <section className="garage-fade mb-32">
          <h2 className="text-center mb-16 text-white">Servicios de Diseño</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Logo & Marca", icon: "⚡" },
              { title: "App - bkars", icon: "📱" },
              { title: "Digital web", icon: "💻" },
              { title: "Uniformes", icon: "👔" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 hover:border-amber-600 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-600/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl text-white mb-2">{item.title}</h3>
                <div className="w-12 h-1 bg-amber-600 mt-4"></div>
              </div>
            ))}
          </div>
        </section>
   );
}

export function ShowCase() {
  const images = [
    {
      src: "/imagenes-optim/trabajos/bkars/logo-bkars/logo-bkars",
      alt: "Taller Bkars – Área de trabajo",
    },
    {
      src: "/imagenes-optim/trabajos/bkars/app-bkars/BKARS-APP",
      alt: "Taller Bkars – Diagnóstico",
    },
    {
      src: "/imagenes-optim/trabajos/bkars/bkars-web/BKARS-WEB",
      alt: "Taller Bkars – Detalle automotriz",
    },
  ];

  return (
    <section className="garage-fade mb-32">
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="group overflow-hidden rounded-xl border border-zinc-800"
          >
            <OptimizedImage
              src={img.src}
              alt={img.alt}
              className="h-100 w-full object-cover transition-transform duration-1000 group-hover:scale-100"
                            priority
    sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           1920px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

    export function  CardContents (){
   return(
        <section className="garage-fade mb-32">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 rounded-3xl p-12 border border-zinc-800">
            <h2 className="mb-12 text-white">Especificaciones Técnicas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <div>
                    <div className="text-sm text-gray-500">Paleta de Colores</div>
                    <div className="text-white">Rojo Racing, Negro Carbono, Gris Metalizado</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <div>
                    <div className="text-sm text-gray-500">Tipografía</div>
                    <div className="text-white">Industrial Sans, Monospace Técnica</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <div>
                    <div className="text-sm text-gray-500">Estilo Visual</div>
                    <div className="text-white">Minimalista Técnico, Alto Contraste</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <div>
                    <div className="text-sm text-gray-500">Aplicaciones</div>
                    <div className="text-white">Digital, Print, Señalización, Textil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
   );
}
export function  ResultsSection (){
   return(
        <section className="garage-fade">
          <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1)),linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1))] bg-[size:20px_20px] bg-[position:0_0,10px_10px]"></div>
            <div className="relative">
              <h2 className="text-center mb-16 text-white">Resultados de Rendimiento</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                <div>
                  <div className="text-6xl mb-3">+40%</div>
                  <p className="text-xl opacity-90">Reservas Online</p>
                </div>
                <div>
                  <div className="text-6xl mb-3">+35%</div>
                  <p className="text-xl opacity-90">Reconocimiento de Marca</p>
                </div>
                <div>
                  <div className="text-6xl mb-3">+30%</div>
                  <p className="text-xl opacity-90">Clientes Nuevos</p>
                </div>
                <div>
                  <div className="text-6xl mb-3">80%</div>
                  <p className="text-xl opacity-90">Satisfacción Cliente</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}