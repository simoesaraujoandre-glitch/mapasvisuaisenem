import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface MockupProps {
  type: 'hero' | 'offer-basic' | 'offer-complete';
  className?: string;
}

export const ProductMockupCard: React.FC<MockupProps> = ({
  type,
  className = "",
}) => {
  // HERO MOCKUP
  if (type === 'hero') {
    return (
      <div 
        id="hero-product-mockup"
        className={`relative w-full flex flex-col items-center justify-center select-none ${className}`}
      >
        {/* Soft atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Mockup Image */}
        <div className="relative inline-flex items-center justify-center">
          <img
            src="/images/moockup.webp"
            alt="Mockup Redação ENEM Completa"
            width={900}
            height={600}
            className="w-auto h-auto max-h-[320px] sm:max-h-[460px] lg:max-h-[520px] max-w-full object-contain block drop-shadow-xl"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Caption below hero mockup */}
        <div className="mt-3 sm:mt-4 text-center px-2">
          <p className="text-[11px] sm:text-xs text-gray-500 font-medium flex items-center justify-center gap-1.5 leading-snug">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
            <span>Material organizado em mapas visuais prontos para download e impressão</span>
          </p>
        </div>
      </div>
    );
  }

  // OFFER BASIC MOCKUP
  if (type === 'offer-basic') {
    return (
      <div className={`relative rounded-2xl bg-white border border-[#E5E7EB] p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-2xs overflow-hidden ${className}`}>
        <div className="w-full max-w-[240px] sm:max-w-[260px] flex flex-col items-center justify-center">
          <img
            src="/images/capa-redacao.webp"
            alt="Capa Redação ENEM Visual"
            width={600}
            height={600}
            className="w-full h-auto max-h-48 sm:max-h-56 object-contain rounded-lg shadow-sm drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    );
  }

  // OFFER COMPLETE MOCKUP
  return (
    <div className={`relative rounded-2xl bg-white border border-[#F97316]/30 p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-2xs overflow-hidden ${className}`}>
      <div className="w-full max-w-[260px] sm:max-w-[280px] flex flex-col items-center justify-center">
        <img
          src="/images/produto-bonus.webp"
          alt="Pacote Completo ENEM Visual + Bônus"
          width={600}
          height={400}
          className="w-full h-auto max-h-48 sm:max-h-56 object-contain rounded-lg shadow-sm drop-shadow-sm"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};
