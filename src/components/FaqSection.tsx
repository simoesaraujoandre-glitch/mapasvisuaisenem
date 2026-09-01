import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQ_DATA, FINAL_CTA_DATA } from '../data/copyData';

interface FaqSectionProps {
  onFinalCtaClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onFinalCtaClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-12 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* CABEÇALHO DO FAQ */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FFF1E8] border border-[#F97316]/20 px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              PERGUNTAS FREQUENTES
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight">
            Ainda ficou alguma dúvida?
          </h2>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-3 sm:space-y-4 mb-14 sm:mb-20">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="rounded-2xl border border-[#E5E7EB] bg-white transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full min-h-[52px] py-4 px-4 sm:py-5 sm:px-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-[#FFF9F5]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm sm:text-base md:text-lg font-bold text-[#172554] leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF1E8] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#F97316]' : ''}`}>
                    <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-[#F97316]'}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm md:text-base text-[#475569] leading-relaxed border-t border-gray-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BLOCO FINAL DE CTA */}
        <div 
          id="final-cta-block"
          className="bg-[#FFF1E8] rounded-3xl p-6 sm:p-10 md:p-12 text-center border border-[#F97316]/20 shadow-xs relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#F97316]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto">
            {/* HEADLINE */}
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight mb-3 sm:mb-4">
              {FINAL_CTA_DATA.headline}
            </h3>

            {/* TEXTO */}
            <p className="text-xs sm:text-sm md:text-base text-[#475569] leading-relaxed mb-5 sm:mb-6">
              {FINAL_CTA_DATA.text}
            </p>

            {/* DESTAQUE */}
            <div className="mb-6 sm:mb-7">
              <span className="inline-block bg-white border border-[#F97316]/30 px-4 sm:px-5 py-2 rounded-full font-heading font-extrabold text-sm sm:text-base md:text-lg text-[#172554] shadow-2xs">
                Comece por apenas <span className="text-[#F97316]">R$10</span>.
              </span>
            </div>

            {/* BOTÃO CTA */}
            <div className="flex justify-center mb-4 sm:mb-5">
              <button
                onClick={onFinalCtaClick}
                id="btn-final-cta"
                className="w-full sm:w-auto min-w-[280px] min-h-[48px] bg-[#F97316] hover:bg-[#ea580c] active:scale-[0.99] text-white font-heading font-bold text-sm sm:text-base md:text-lg px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-center cursor-pointer tracking-wide flex items-center justify-center gap-2"
              >
                <span>{FINAL_CTA_DATA.cta}</span>
              </button>
            </div>

            {/* APOIO */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#475569] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
              <span>{FINAL_CTA_DATA.support}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
