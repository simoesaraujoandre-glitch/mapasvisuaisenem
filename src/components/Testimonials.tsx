import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { testimonials } from '../data/contentData';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  item: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div className="w-[320px] sm:w-[360px] md:w-[380px] bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between flex-shrink-0 mx-3">
      <div>
        {/* 5 Stars + Gain Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-700 ml-1">5.0</span>
          </div>

          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
            {item.scoreOrGain}
          </span>
        </div>

        {/* Testimonial Quote */}
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 font-sans italic">
          {item.text}
        </p>
      </div>

      {/* Author Info with Photo */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs flex-shrink-0"
              onError={(e) => {
                // Fallback se a imagem não carregar
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <div className={`w-10 h-10 rounded-full ${item.avatarBg} font-bold text-xs flex items-center justify-center flex-shrink-0`}>
              {item.avatarInitial}
            </div>
          )}
          <div>
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight flex items-center gap-1">
              {item.name}
              <CheckCircle className="w-3.5 h-3.5 text-blue-600 fill-blue-100 flex-shrink-0" />
            </h4>
            <p className="text-[11px] text-slate-500">{item.city}</p>
          </div>
        </div>

        <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded max-w-[130px] truncate text-right">
          {item.targetCourse}
        </span>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  // Dividindo os depoimentos entre linha de cima (1º scroll) e linha de baixo (2º scroll)
  // Total de 8 depoimentos: 6 mulheres e 2 homens
  const topRowTestimonials = [
    testimonials[0], // Mulher 1 (Mariana)
    testimonials[1], // Homem 1 (Lucas)
    testimonials[2], // Mulher 2 (Beatriz)
    testimonials[3], // Mulher 3 (Camila)
  ];

  const bottomRowTestimonials = [
    testimonials[4], // Homem 2 (Gabriel)
    testimonials[5], // Mulher 4 (Larissa)
    testimonials[6], // Mulher 5 (Juliana)
    testimonials[7], // Mulher 6 (Fernanda)
  ];

  // Duplicando para efeito de loop infinito contínuo sem cortes
  const topLoop = [...topRowTestimonials, ...topRowTestimonials, ...topRowTestimonials, ...topRowTestimonials];
  const bottomLoop = [...bottomRowTestimonials, ...bottomRowTestimonials, ...bottomRowTestimonials, ...bottomRowTestimonials];

  return (
    <section id="depoimentos" className="bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 md:mb-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl leading-tight mb-4">
            Veja o que estudantes estão achando do material
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-xl mx-auto">
            Estudantes de todo o Brasil que destravaram a Matemática e estão revisando com muito mais agilidade.
          </p>
        </div>

      </div>

      {/* Carrosséis Infinitos em Sentidos Opostos */}
      <div className="relative w-full space-y-6">
        {/* Gradientes laterais para transição suave */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        {/* 1º Scroll: Passando para a DIREITA (scrollRight) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-right flex py-1">
            {topLoop.map((item, idx) => (
              <TestimonialCard key={`top-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* 2º Scroll: Passando para a ESQUERDA (scrollLeft / Sentido Contrário) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-left flex py-1">
            {bottomLoop.map((item, idx) => (
              <TestimonialCard key={`bottom-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Trust summary counter */}
      <div className="text-center mt-12 px-4">
        <p className="text-xs sm:text-sm font-semibold text-slate-600 tracking-wide uppercase">
          ⭐ Mais de 4.800 estudantes já baixaram e aprovaram o material
        </p>
      </div>
    </section>
  );
};

