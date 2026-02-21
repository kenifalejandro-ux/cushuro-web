/**client/src/components/sections/TiestoCoffeeSections.tsx */


import { OptimizedImage } from "../ui/OptimizedImage";

export function StorySection() {
  return (
    <section className="light-image coffee-fade mb-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <OptimizedImage
             src="/imagenes-optim/trabajos/imagenes/tiesto-coffee/branding/tiesto-coffee"
             alt="Coffee Detail"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              priority
    sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           1920px"
            />
          </div>
        </div>
        <div className="order-1 md:order-2 text-white">
          <h2 className="mb-6">El Arte del Café</h2>
          <p className="text-lg text-gray-300 mb-4">
            Tiesto Café es más que una tienda: es un destino para amantes del café
            de especialidad, donde cada detalle importa.
          </p>
          <p className="text-lg text-gray-300">
            El branding combina diseño minimalista, tonos terrosos y una narrativa
            visual coherente.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="coffee-slide mb-32">
      <h2 className="text-center mb-12 text-white">Proceso Creativo</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Investigación", desc: "Análisis del mercado premium" },
          { title: "Diseño", desc: "Identidad visual sofisticada" },
          { title: "Implementación", desc: "Aplicación consistente" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl hover:scale-105 transition-transform duration-500"
          >
            <div className="text-6xl text-amber-500 opacity-20 mb-4">
              0{i + 1}
            </div>
            <h3 className="text-xl text-white mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const coffeeShowcaseImages = [
  {
    id: 1,
    src: "/imagenes-optim/trabajos/imagenes/tiesto-coffee/localimage/tiesto-coffe-1",
    alt: "Coffee showcase – grano tostado",
  },
  {
    id: 2,
    src: "/imagenes-optim/trabajos/imagenes/tiesto-coffee/localimage/tiesto-coffee-2",
    alt: "Coffee showcase – empaque premium",
  },
];

export function ShowcaseSection() {
  return (
    <section className="coffee-fade mb-32 grid md:grid-cols-2 gap-4">
      {coffeeShowcaseImages.map((img) => (
        <div key={img.id} className="overflow-hidden rounded-2xl">
          <OptimizedImage
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                          priority
    sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           1920px"
          />
        </div>
      ))}
    </section>
  );
}


export function ImpactSection() {
  return (
    <section className="coffee-fade">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-16">
        <h2 className="text-center mb-12 text-white">Impacto Medible</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          {[
            ["+40%", "Tráfico Web"],
            ["+35%", "Engagement"],
            ["+25%", "Ventas"],
            ["4★", "Valoración"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-5xl mb-3">{value}</div>
              <p className="opacity-90">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
