import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GarantiaSection: React.FC = () => {
  return (
    <section
      id="garantia"
      className="py-14 md:py-16 lg:py-20 bg-[#FFF8DD] relative overflow-hidden"
    >
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left bg-white p-6 sm:p-7 md:p-8 rounded-2xl border border-[#0E2A62]/10 shadow-sm">
          
          {/* Shield Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFF8D9] border-2 border-[#F6C945] flex items-center justify-center text-[#0E2A62] shadow-xs flex-shrink-0">
            <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#0E2A62] stroke-[2]" />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-display font-black text-xl sm:text-2xl text-[#0E2A62] tracking-tight">
              Experimente essa forma de estudar por 7 dias.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#0E2A62]/80 font-medium mt-1.5 max-w-2xl leading-relaxed">
              Acesse o material, veja como os 160 conteúdos estão explicados e sinta a diferença de estudar de forma visual. Se por qualquer motivo achar que o material não ajudou na sua preparação, basta solicitar o reembolso dentro do prazo de 7 dias.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
