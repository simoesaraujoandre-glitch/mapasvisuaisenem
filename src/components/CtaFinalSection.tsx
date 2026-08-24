import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MarcaTexto } from './MarcaTexto';

export const CtaFinalSection: React.FC = () => {
  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta-final"
      className="py-16 md:py-20 lg:py-24 bg-[#FFF8DD] relative overflow-hidden"
    >
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        
        {/* Headlines */}
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] tracking-tight leading-tight mb-3 sm:mb-4">
          Você não precisa chegar ao ENEM ainda travando nos mesmos conteúdos.
        </h2>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg text-[#0E2A62]/85 font-medium max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Comece hoje a estudar com os Mapas Visuais e prepare-se com mais clareza para buscar os{' '}
          <MarcaTexto color="yellow" className="bg-[#F6C945] text-[#0E2A62] px-2 py-0.5 font-black">
            900+
          </MarcaTexto>
          .
        </p>

        {/* Big CTA */}
        <div className="flex flex-col items-center gap-3 max-w-lg mx-auto">
          <a
            href="#oferta"
            id="cta-final-button"
            onClick={handleScrollToOffer}
            className="w-full inline-flex items-center justify-center gap-3 bg-[#F6C945] hover:bg-[#ebce38] text-[#0E2A62] font-black text-base sm:text-lg px-8 py-3.5 sm:py-4 rounded-[14px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>QUERO ME PREPARAR COM MAPAS VISUAIS</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          {/* Microcopy */}
          <div className="text-xs sm:text-sm font-semibold text-[#0E2A62]/70">
            160 Mapas Visuais • Acesso imediato • Garantia de 7 dias
          </div>
        </div>

      </div>
    </section>
  );
};
