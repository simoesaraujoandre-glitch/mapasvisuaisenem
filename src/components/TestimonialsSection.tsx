import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/copyData';

export const TestimonialsSection: React.FC = () => {
  const items = TESTIMONIALS_DATA.items;

  return (
    <section id="depoimentos" className="bg-white py-12 sm:py-20 border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight mb-3 sm:mb-4">
            Veja o que estudantes estão achando dos <span className="text-[#172554] underline decoration-[#172554]/30 decoration-2 underline-offset-4">Mapas Visuais</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4B5563] leading-relaxed">
            {TESTIMONIALS_DATA.subheadline}
          </p>
        </div>

      </div>

      {/* CARROSSEL DE DEPOIMENTOS EM AUTO-SCROLL (GPU ACCELERATED & SMOOTH 60FPS) */}
      <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
        <div className="animate-marquee-testimonials pause-on-hover flex items-stretch gap-4 sm:gap-6 py-3 px-4 select-none gpu-accelerated">
          {[...items, ...items].map((dep, index) => (
            <div
              key={`${dep.id}-${index}`}
              id={`depoimento-${dep.id}-${index}`}
              className="w-[280px] sm:w-[340px] md:w-[380px] shrink-0 bg-white rounded-2xl p-5 sm:p-7 border border-[#E2E8F0] shadow-2xs hover:border-[#F97316]/40 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Estrelas */}
                <div className="flex items-center gap-1 mb-3.5 sm:mb-4">
                  {[...Array(dep.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>

                {/* Depoimento */}
                <p className="text-xs sm:text-sm md:text-[15px] text-[#374151] leading-relaxed mb-5 sm:mb-6 font-normal">
                  "{dep.text}"
                </p>
              </div>

              {/* Foto + Nome */}
              <div className="flex items-center gap-3 pt-3.5 sm:pt-4 border-t border-[#F1F5F9]">
                <img
                  src={dep.avatarUrl}
                  alt={dep.name}
                  referrerPolicy="no-referrer"
                  width={80}
                  height={80}
                  className="w-10 h-10 rounded-full object-cover border border-[#E2E8F0]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-sm font-bold text-[#172554]">
                  {dep.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
