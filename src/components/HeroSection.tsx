import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MarcaTexto } from './MarcaTexto';
import { ImagePlaceholder } from './ImagePlaceholder';
import { LANDING_CONFIG } from '../config';

export const HeroSection: React.FC = () => {
  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-10 pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-[#FBFAF6]"
    >
      {/* Subtle math doodles scattered in background */}
      <div className="absolute top-20 left-8 hidden lg:block opacity-35 pointer-events-none">
        <span className="font-hand text-lg text-[#0E2A62]">f(x) = ax + b</span>
      </div>
      <div className="absolute top-36 right-12 hidden lg:block opacity-35 pointer-events-none">
        <span className="font-hand text-lg text-[#0E2A62]">π ≅ 3,14</span>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10">
          
          {/* Main Headline & Promise */}
          <h1
            id="hero-headline"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.18] tracking-tight text-[#0E2A62] mb-3 sm:mb-4"
          >
            Chega de travar em Matemática e Linguagens.{' '}
            <span className="block mt-1.5 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0E2A62]">
              Aprenda de forma visual e prepare-se para buscar os{' '}
              <span className="relative inline-block whitespace-nowrap">
                <MarcaTexto color="yellow" className="text-[#0E2A62] px-2 py-0.5">
                  900+ no ENEM.
                </MarcaTexto>
              </span>
            </span>
          </h1>

          {/* Mockup */}
          <div className="relative w-full max-w-[540px] my-3 sm:my-4">
            <div className="relative w-full">
              <ImagePlaceholder
                id="hero-main-mockup"
                tag="[HERO_MOCKUP]"
                label="Mockup Principal do Produto"
                sublabel="Mapas Visuais Matemática + Linguagens"
                aspectRatio="custom"
                theme="light"
                src={LANDING_CONFIG.IMAGES.HERO_MOCKUP}
                priority={true}
                className="w-full shadow-2xl bg-white border border-[#0E2A62]/10"
              />
            </div>
          </div>

          {/* Subheadline */}
          <p
            id="hero-subheadline"
            className="text-base sm:text-lg md:text-xl text-[#0E2A62]/85 leading-relaxed font-medium mb-6 sm:mb-7 max-w-[700px]"
          >
            160 conteúdos explicados de forma direta e visual para você entender, memorizar e aplicar com mais facilidade.
          </p>

          {/* 3 Transformational Benefits */}
          <div id="hero-microbenefits" className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-7 sm:mb-8 text-sm sm:text-base font-semibold text-[#0E2A62]/90">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#3FA654]/15 text-[#3FA654] flex items-center justify-center font-bold text-xs flex-shrink-0">
                ✓
              </span>
              <span>Destrave conteúdos que hoje parecem difíceis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#3FA654]/15 text-[#3FA654] flex items-center justify-center font-bold text-xs flex-shrink-0">
                ✓
              </span>
              <span>Memorize conceitos, fórmulas e relações com mais facilidade</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#3FA654]/15 text-[#3FA654] flex items-center justify-center font-bold text-xs flex-shrink-0">
                ✓
              </span>
              <span>Reconheça mais rápido o que a questão está cobrando</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full sm:w-auto flex flex-col items-center gap-2.5">
            <a
              href="#oferta"
              id="hero-cta-btn"
              onClick={handleScrollToOffer}
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-3 bg-[#F6C945] hover:bg-[#ebce38] text-[#0E2A62] font-black text-base sm:text-lg px-8 py-3.5 sm:py-4 rounded-[14px] shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>QUERO ME PREPARAR COM MAPAS VISUAIS</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>

            {/* Trust Indicators below CTA */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0E2A62]/70 font-medium px-1">
              <span>Acesso imediato</span>
              <span>•</span>
              <span>Material digital</span>
              <span>•</span>
              <span>Garantia de 7 dias</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
