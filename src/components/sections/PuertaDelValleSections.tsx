// client/src/components/sections/PuertaDelValleSections.tsx

import { OptimizedImage } from "../ui/OptimizedImage";

export function IntroSection() {
  return (
    <section className="dark-image mb-20 md:mb-32 lg:mb-40">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        {/* Texto primero en móvil, segundo en desktop */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Una Tradición Renovada
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Puerta del Valle representa la excelencia en la producción de quesos artesanales. 
            Nuestro trabajo creó una identidad que honra la tradición mientras proyecta modernidad 
            y sofisticación.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            El proyecto incluyó un logo distintivo, paleta de colores tierra, sistema de packaging 
            premium, y una experiencia web envolvente que cuenta la historia de cada queso.
          </p>
        </div>

        {/* Imagen centrada y con mejor presentación */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg aspect-square rounded-2xl overflow-hidden  group">
            {/* Overlay sutil para profundidad */}
            <div className="absolute inset-0  z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <OptimizedImage
              src="/imagenes-optim/trabajos/puerta-del-valle/image/puerta-del-valle-etiqueta"
              alt="Etiqueta de queso artesanal Puerta del Valle – Detalle del diseño premium"
              fill // Si usas next/image con fill, o sino usa className="w-full h-full"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              priority // Opcional: si es above the fold
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

export function ServicesSection() {
  const services = [
    {
      title: "Estrategia de Marca",
      description: "Desarrollo de una identidad sólida que conecta la tradición ancashina con una visión moderna y sofisticada, posicionando a Puerta del Valle como referente de excelencia artesanal."
    },
    {
      title: "Diseño de Logo",
      description: "Creación de un logotipo distintivo y memorable que captura la esencia de los Andes, la pureza de la leche y el valor artesanal del producto."
    },
    {
      title: "Packaging Premium",
      description: "Diseño de empaques elegantes y funcionales que protegen el queso, resaltan su origen natural y transmiten calidad premium en cada detalle."
    },
    {
      title: "Experiencia Web",
      description: "Sitio web inmersivo y responsive que narra la historia detrás de cada queso, conectando emocionalmente al consumidor con el origen y el proceso artesanal."
    }
  ];

  return (
    <section className="dark-image py-16 md:py-24 lg:py-32">
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Servicios Entregados
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Cada etapa del proyecto fue pensada para elevar la presencia de Puerta del Valle con diseño estratégico y artesanía visual.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
          >
            {/* Decoración superior sutil */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="p-8 text-center">
              {/* Icono decorativo personalizado por servicio (puedes cambiar colores o usar SVGs reales después) */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Efecto sutil en hover */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-amber-500/0 group-hover:ring-amber-500/30 transition-all duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}



export function ResultsSection() {
  return (
    <section>
      <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-3xl p-16 text-white">
        <h2 className="mb-12 text-center">Resultados Excepcionales</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-6xl mb-4">+65%</div>
            <p className="text-xl opacity-90">Reconocimiento de Marca</p>
          </div>
          <div>
            <div className="text-6xl mb-4">+85%</div>
            <p className="text-xl opacity-90">Ventas Premium</p>
          </div>
          <div>
            <div className="text-6xl mb-4">+50%</div>
            <p className="text-xl opacity-90">Engagement Digital</p>
          </div>
        </div>
      </div>
    </section>
  );
}
