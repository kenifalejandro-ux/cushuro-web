// client/src/components/sections/IntiPintaySection.tsx

import { OptimizedImage } from "../ui/OptimizedImage";

export function ContentSection (){
return(
        <section className="dark-image spirit-fade mb-32">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="mb-6 text-black/70">El Espíritu de los Andes</h2>
            <p className="text-xl text-black/70 mb-8">
              Inti Pintay fusiona tradición ancestral con técnicas modernas de destilación. 
              Creamos una identidad visual que captura la mística y pureza de los licores de altura, 
              celebrando la herencia cultural y la excelencia artesanal.
            </p>
          </div>
        </section>
);
}

export function SplitContent (){
return(
        <section className="dark-image spirit-fade mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="spirit-reveal overflow-hidden rounded-4xl mt-10">
              <OptimizedImage
            src="/imagenes-optim/trabajos/inti-pintay/image-nuesto-proceso/logo-intipintay"
                alt="Spirits Detail"
                className="w-full h-full  object-cover hover:scale-120 transition-transform duration-1000"
                              priority
    sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           1920px"
              />
            </div>
            <div className="dark-image flex flex-col justify-center text-black/90">
              <h3 className="text-3xl mb-6">Diseño Distintivo</h3>
              <p className="text-lg text-black/70 mb-6">
                El diseño del logo integra elementos andinos contemporáneo con una paleta de colores 
                inspirada en el color del sol.
              </p>
              <div className="space-y-4 text-white">
                {["Identidad de Marca", "Diseño de Etiquetas", "Packaging Lujo", "Experiencia Digital"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-amber-400 rounded-lg backdrop-blur-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-white to-white rounded-full"></div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
);
}
export function CardContents (){
return(
        <section className="dark-image spirit-fade mb-32">
          <h2 className="text-center mb-16 text-white">Elementos Clave</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Herencia Cultural", desc: "Símbolos ancestrales reinterpretados" },
              { title: "Artesanía Premium", desc: "Cada detalle cuenta una historia" },
              { title: "Innovación Visual", desc: "Técnicas modernas de diseño" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-10 bg-gradient-to-br from-amber-400 to-indigo-900 rounded-2xl overflow-hidden backdrop-blur-sm hover:scale-105 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-white to-white rounded-full mb-6 flex items-center justify-center text-2xl text-amber-400">
                    {i + 1}
                  </div>
                  <h3 className="text-xl mb-4 text-white">{item.title}</h3>
                  <p className="text-white">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
);
}
export function ShowCase (){
return(
        <section className="dark-image spirit-reveal mb-32">
          <div className="overflow-hidden rounded-3xl">
            <OptimizedImage
            src="/imagenes-optim/trabajos/imagenes/inti-pintay/inti-pintay"
              alt="Inti Pintay Collection"
              className="w-full h-[700px] object-cover"
                            priority
    sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           1920px"
            />
          </div>
        </section>
);
}
export function ResultsSection (){
return(
        <section className="dark-image  spirit-fade">
          <div className="relative p-16 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-400 animate-[gradient_8s_ease_infinite]"></div>
            <div className="relative z-10">
              <h2 className="text-center mb-16 text-white">Impacto del Proyecto(datos no reales)</h2>
              <div className="grid md:grid-cols-3 gap-12 text-center text-white">
                <div>
                  <div className="text-7xl mb-4">+80%</div>
                  <p className="text-2xl opacity-90">Reconocimiento Internacional</p>
                </div>
                <div>
                  <div className="text-7xl mb-4">+50%</div>
                  <p className="text-2xl opacity-90">Ventas Premium</p>
                </div>
                <div>
                  <div className="text-7xl mb-4">2</div>
                  <p className="text-2xl opacity-90">Premios de Diseño</p>
                </div>
              </div>
            </div>
          </div>
        </section>
);
}