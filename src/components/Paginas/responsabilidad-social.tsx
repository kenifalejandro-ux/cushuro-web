/**client/src/components/Paginas/responsabilidad-social.tsx */


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Sprout, Users, BookOpen, Activity, Palette, Trophy, Quote } from 'lucide-react';
import PilaresGrid from '../ui/PilaresGrid';
import ReorderImageStack from '../ui/ReorderImageStack';
import { ImageStack } from '../ui/ImageStack';



if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ResponsabilidadSocial: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-title-social', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
      });

      gsap.from('.hero-line-social', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.inOut',
      });

      // Entrance + parallax for image blocks
      imageRefs.current.forEach((img, index) => {
        if (!img) return;

        gsap.fromTo(
          img,
          { y: 56, autoAlpha: 0, scale: 0.95, filter: 'blur(8px)' },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.1,
            delay: index * 0.08,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
              trigger: img,
              start: 'top 88%',
              once: true,
            },
          }
        );

        const innerLayers = img.querySelectorAll<HTMLElement>('.parallax-inner');
        innerLayers.forEach((inner) => {
          gsap.to(inner, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      });

      // Section reveals
      gsap.utils.toArray<HTMLElement>('.reveal-social').forEach((section) => {
        gsap.fromTo(
          section,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // Pillar animations
      gsap.utils.toArray<HTMLElement>('.pillar-social').forEach((pillar, index) => {
        gsap.fromTo(
          pillar,
          { y: 60, autoAlpha: 0, scale: 0.95 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            immediateRender: false,
            scrollTrigger: {
              trigger: pillar,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  type PillarItem = {
    icon: React.ElementType;
    title: string;
    desc: string;
    commitments?: string[];
  };

  const pillars: PillarItem[] = [
    {
      icon: GraduationCap,
      title: ' Trabajo comunitario',
      desc: 'Asumimos la educación como eje del desarrollo humano en nuestros distritos.',
      commitments: [
        'Mejorar la calidad educativa en todos los niveles.',
        'Articular la educación con la salud.',
        'Disminuir el analfabetismo.',
        'Promover la educación por el trabajo.',
      ],
    },
    {
      icon: Users,
      title: 'Cultura e Interculturalidad',
      desc: 'Fortalecemos las raíces locales y la convivencia intercultural regional.',
      commitments: [
        'Fortalecer la identidad cultural regional.',
        'Cultivar y consolidar la interculturalidad regional.',
      ],
    },
    {
      icon: Sprout,
      title: 'Medio Ambiente',
      desc: 'Defender el entorno natural es parte esencial de nuestra responsabilidad social.',
      commitments: ['Preservar y defender el medio ambiente.'],
    },
    {
      icon: Trophy,
      title: 'Deporte y Recreación',
      desc: 'Impulsamos hábitos saludables e integración social mediante la actividad deportiva.',
      commitments: ['Impulsar la práctica y la cultura deportiva y de recreación.'],
    },
  ];

  const areas = [
    {
      icon: BookOpen,
      title: 'Educación y Cultura',
      items: ['Calidad educativa desde la base', 'Articulación educación-salud-trabajo', 'Combate al analfabetismo'],
      accent: 'blue',
    },
    {
      icon: Activity,
      title: 'Salud y Bienestar',
      items: ['Reducción desnutrición infantil', 'Atención materna de calidad', 'Salud ambiental'],
      accent: 'emerald',
    },
    {
      icon: Palette,
      title: 'Arte y Recreación',
      items: ['Expresiones artísticas locales', 'Espacios de recreación', 'Preservación de tradiciones'],
      accent: 'blue',
    },
    {
      icon: Trophy,
      title: 'Deporte y Desarrollo',
      items: ['Práctica deportiva inclusiva', 'Vida saludable', 'Talentos locales'],
      accent: 'emerald',
    },
  ];

  return (
    <div ref={containerRef} className="bg-white text-zinc-900 font-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="hero-title-social text-6xl md:text-8xl font-light tracking-tighter text-zinc-800">
            Compromiso<br />
            <span className="text-blue-600">Social</span>
          </h1>
          <div className="hero-line-social h-[1px] w-48 bg-emerald-500 mx-auto" />
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            En Santa Isabel de Cushuro no alteramos vidas; las transformamos. No cambiamos entornos; los mejoramos. 
            No alteramos sus costumbres, lo ayudamos a preservarlas. Nuestro compromiso es con las personas y su futuro.
          </p>
        </div>
      </section>

      {/* Filosofía Section */}
      <section className="reveal-social py-24 px-6 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-zinc-800 tracking-tight leading-tight">
              Más que minería, <br />
              <span className="text-emerald-600">es humanidad</span>
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                Entendemos que cada proyecto minero toca vidas reales. Por eso, nuestro compromiso social 
                no es un añadido: es el corazón de nuestra operación.
              </p>
              <p>
                Respetamos costumbres, celebramos culturas, protegemos la salud y el ambiente. 
                Sin distinción de raza, religión o posición económica.
              </p>
              <div className="pl-6 border-l-2 border-blue-500 py-2 italic text-zinc-700 text-lg">
                "La verdadera riqueza no está en lo que extraemos, sino en lo que construimos con las comunidades."
              </div>
            </div>
          </div>
          <div 
            ref={(el) => { imageRefs.current[0] = el }}
              className="relative h-[600px]  overflow-hidden  order-2 md:order-1"
            >
            <ReorderImageStack
                  images={[
                    {
                      src: "/img-responsabilidad-social/mineria/imagenes/img-001",
                      alt: "Monitoreo ambiental",
                    },
                    {
                      src: "/img-medio-ambiente/hero/medio-ambiente/reforestacion-medio-ambiente",
                      alt: "Control de emisiones",
                    },
                    {
                      src: "/img-responsabilidad-social/mineria/imagenes/img-002",
                      alt: "Gestión de residuos",
                    },
                  ]}
                />
            <div className="parallax-inner absolute inset-[-20%] flex items-center justify-center">
              <div className="text-center opacity-30">
                <Users className="w-20  h-20 mx-auto mb-4" />
              </div>
            </div>
          </div>
        </div>
      </section>        

      {/* Pilares Grid */}
      <section   className="relative min-h-screen rounded-t-[520px] py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-zinc-800">
        <h2 className="text-center text-4xl font-light text-emerald-600 mb-20 uppercase tracking-widest reveal-social">
          Nuestros Pilares
        </h2>
        <p className="reveal-social max-w-4xl mx-auto text-center text-zinc-100 leading-relaxed mb-14">
          En educación, cultura, deportes y recreación, esta propuesta surge como un compromiso y una
          responsabilidad de nuestra empresa frente al reto del desarrollo humano en nuestros
          distritos.
        </p>
        <div className="pillars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;

            return (
              <div
                key={i}
                className="pillar-social p-15 w-[350px]  transition-all duration-100 group  hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 transition-colors">
                  <Icon className="w-7 h-7 text-emerald-600 group-hover:text-zinc-600 transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-zinc-100 mb-4">{pillar.title}</h3>
                <p className="text-zinc-100 leading-relaxed text-sm">{pillar.desc}</p>
                {(pillar.commitments ?? []).length > 0 ? (
                  <ul className="mt-5 space-y-2">
                    {(pillar.commitments ?? []).map((commitment, j) => (
                      <li key={j} className="flex items-start gap-2 text-zinc-100 text-sm leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                        {commitment}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      {/* Pilares Grid */}
      <PilaresGrid/>
    
         </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-zinc-800 text-white overflow-hidden relative reveal-social">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
          <Quote className="w-12 h-12 text-emerald-500/40 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Construimos una convivencia de <br />
            <span className="text-emerald-400">respeto y equidad</span>, donde la empresa y <br />
            la comunidad crecen juntas.
          </h2>
        </div>
      </section>

      {/* Educación por el Trabajo Section */}
      <section className="py-32 px-6 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div 
            ref={(el) => { imageRefs.current[1] = el }}
              className="relative h-[600px]  overflow-hidden  order-2 md:order-1"
            >
            <ImageStack
                  images={[
                    {
                      src: "/img-responsabilidad-social/educacion-trabajo/imagenes/img001",
                      alt: "Monitoreo ambiental",
                    },  
                  ]}
                />
          </div>
          <div className="reveal-social space-y-10 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-zinc-800 tracking-tight leading-tight">
              Educación <br /> <span className="text-blue-600 tracking-tighter italic">por el Trabajo</span>
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-light">
              <p>
                No solo generamos empleos; formamos profesionales. Cada trabajador es una oportunidad de desarrollo, 
                cada capacitación es una inversión en el futuro.
              </p>
              <p>
                Articulamos educación con trabajo, salud con productividad y cultura con desarrollo integral. 
              </p>
              <div className="p-10 bg-white border border-blue-100 rounded-3xl shadow-sm">
                <p className="text-zinc-800 font-medium mb-3 italic">Nuestro compromiso:</p>
                <p className="text-sm">
                  Formar con el apoyo de la inversión privada para construir puentes de desarrollo sostenible y paz social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsabilidadSocial;
