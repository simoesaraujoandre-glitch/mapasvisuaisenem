import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../data/copyData';
import { ProductMockupCard } from './ProductMockupCard';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const images = [
    { src: '/images/red1.webp', alt: 'Página de Redação 1', w: 480, h: 339 },
    { src: '/images/red2.webp', alt: 'Página de Redação 2', w: 480, h: 339 },
    { src: '/images/red3.webp', alt: 'Página de Redação 3', w: 480, h: 339 },
    { src: '/images/red4.webp', alt: 'Página de Redação 4', w: 480, h: 320 },
    { src: '/images/red5.webp', alt: 'Página de Redação 5', w: 480, h: 339 },
    { src: '/images/red6.webp', alt: 'Página de Redação 6', w: 480, h: 339 },
    { src: '/images/red7.webp', alt: 'Página de Redação 7', w: 480, h: 339 },
  ];

  return (
    <section id="hero" className="relative bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#E5E7EB]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* HEADLINE */}
        <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#172554] leading-[1.22] tracking-tight mb-5 sm:mb-6 max-w-3xl">
          Domine toda a Redação do ENEM com <span className="text-[#F97316]">100 Mapas Visuais</span> simples, práticos e diretos ao ponto.
        </h1>

        {/* MOCKUP DO PRODUTO */}
        <div className="w-full max-w-lg mb-5 sm:mb-6 flex justify-center">
          <ProductMockupCard type="hero" />
        </div>

        {/* SUBHEADLINE */}
        <p className="text-sm sm:text-lg lg:text-xl text-[#334155] leading-relaxed max-w-2xl sm:max-w-3xl mb-6 sm:mb-8 font-normal">
          {HERO_DATA.subheadline}
        </p>

        {/* CTA + APOIO */}
        <div className="w-full sm:w-auto flex flex-col items-center gap-3 mb-8 sm:mb-10">
          <button
            onClick={onCtaClick}
            id="hero-cta-button"
            className="w-full sm:w-auto min-h-[48px] bg-[#F97316] hover:bg-[#ea580c] active:scale-[0.99] text-white font-heading font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-center cursor-pointer tracking-wide flex items-center justify-center gap-2.5"
          >
            <span>{HERO_DATA.cta}</span>
          </button>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>{HERO_DATA.support}</span>
          </div>
        </div>

        {/* CARROSSEL DE IMAGENS DO PRODUTO (GPU-ACCELERATED & ULTRA CLEAN) */}
        <div className="w-full overflow-hidden pointer-events-none mt-2 sm:mt-4 my-2 [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <div className="animate-marquee-hero gap-3 sm:gap-4 py-1 select-none gpu-accelerated">
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="shrink-0 rounded-xl overflow-hidden border border-[#E2E8F0] shadow-2xs bg-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  className="h-52 sm:h-64 md:h-72 w-auto object-contain block aspect-[3/4]"
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index < 2 ? "high" : "auto"}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
