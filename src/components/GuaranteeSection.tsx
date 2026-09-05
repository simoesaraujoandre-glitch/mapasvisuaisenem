import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { GUARANTEE_DATA } from '../data/copyData';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="bg-white py-12 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Bloco Único Centralizado */}
        <div className="bg-[#FFF9F5] border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 md:p-12 text-center flex flex-col items-center">
          
          {/* Ícone de escudo */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center mb-5 sm:mb-6 shadow-2xs">
            <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#16A34A]" />
          </div>

          {/* Etiqueta */}
          <span className="text-xs font-bold uppercase tracking-wider text-[#172554] bg-white border border-[#E2E8F0] px-3.5 py-1 rounded-full mb-3.5 sm:mb-4">
            {GUARANTEE_DATA.badge}
          </span>

          {/* Headline */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight mb-3 sm:mb-4">
            Você tem <span className="text-[#F97316]">7 dias</span> pra testar o material com calma.
          </h2>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-[#374151] max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6 font-medium">
            {GUARANTEE_DATA.subheadline}
          </p>

          {/* Texto Curto */}
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto leading-relaxed mb-6">
            {GUARANTEE_DATA.text}
          </p>

          {/* Destaque */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#E2E8F0] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#172554] tracking-wide uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            <span>{GUARANTEE_DATA.highlight}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
