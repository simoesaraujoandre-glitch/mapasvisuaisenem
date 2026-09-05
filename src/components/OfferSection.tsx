import React from 'react';
import { Check, Sparkles, ShieldCheck } from 'lucide-react';
import { OFFER_SECTION_DATA } from '../data/copyData';
import { ProductMockupCard } from './ProductMockupCard';
import { getCheckoutUrlWithParams } from '../utils/checkout';

interface OfferSectionProps {
  onSelectPlan?: (planId: string) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onSelectPlan }) => {
  const [basicPlan, completePlan] = OFFER_SECTION_DATA.plans;

  const handleAction = (planId: 'basico' | 'completo', e?: React.MouseEvent) => {
    if (onSelectPlan) {
      e?.preventDefault();
      onSelectPlan(planId);
    }
  };

  return (
    <section id="oferta" className="bg-[#FFF9F5] py-12 sm:py-20 lg:py-24 border-b border-[#E5E7EB]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block bg-[#FFF1E8] border border-[#F97316]/20 px-3.5 py-1 rounded-full mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              PLANOS DE ACESSO
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight">
            {OFFER_SECTION_DATA.headline}
          </h2>
        </div>

        {/* OS DOIS PLANOS LADO A LADO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* ==============================
              PLANO BÁSICO (R$10)
             ============================== */}
          <div 
            id="plano-basico"
            className="bg-white rounded-3xl border border-[#E5E7EB] hover:border-[#F97316]/30 p-5 sm:p-7 md:p-8 shadow-xs flex flex-col justify-between transition-all"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col items-center justify-center text-center mb-5">
                <span className="text-xs sm:text-sm font-extrabold text-[#F97316] bg-[#FFF7ED] border border-[#FFEDD5] px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  {basicPlan.name}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#172554] mb-1">
                  REDAÇÃO ENEM VISUAL
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  {basicPlan.subtitle}
                </p>
              </div>

              {/* Mockup do Produto Básico */}
              <div className="mb-6">
                <ProductMockupCard type="offer-basic" />
              </div>

              {/* VOCÊ RECEBE: Checklist */}
              <div className="mb-6">
                <span className="text-xs font-bold text-[#172554] uppercase tracking-wider block mb-3">
                  VOCÊ RECEBE:
                </span>
                <ul className="space-y-2.5">
                  {basicPlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937] font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PREÇO E CTA DO BÁSICO */}
            <div className="pt-6 border-t border-gray-100 text-center">
              <div className="mb-4 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  {basicPlan.oldPrice && (
                    <span className="text-xs text-gray-400 font-semibold line-through">
                      {basicPlan.oldPrice}
                    </span>
                  )}
                  {basicPlan.discountBadge && (
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded">
                      {basicPlan.discountBadge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-xs text-gray-500 font-medium">POR APENAS:</span>
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F97316] tracking-tight">
                    {basicPlan.price}
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium block mt-0.5">
                  {basicPlan.period}
                </span>
              </div>

              <a
                href={getCheckoutUrlWithParams(basicPlan.checkoutUrl)}
                onClick={(e) => handleAction('basico', e)}
                id="btn-plano-basico"
                className="w-full min-h-[48px] bg-[#F97316] hover:bg-[#ea580c] active:scale-[0.99] text-white font-heading font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-xs transition-all text-center cursor-pointer tracking-wide flex items-center justify-center gap-2"
              >
                <span>{basicPlan.ctaText}</span>
              </a>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                <span>Garantia incondicional de 7 dias</span>
              </div>
            </div>
          </div>

          {/* ==============================
              PLANO COMPLETO (R$27,90) - DESTACADO
             ============================== */}
          <div 
            id="plano-completo"
            className="bg-[#FFF9F5] rounded-3xl border-2 border-[#F97316] p-5 sm:p-7 md:p-8 shadow-md relative flex flex-col justify-between transition-all"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col items-center justify-center text-center mb-5">
                <span className="text-xs sm:text-sm font-extrabold text-white bg-[#F97316] px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-2 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {completePlan.badge || "MELHOR CUSTO-BENEFÍCIO"}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#172554] mb-1">
                  PACOTE COMPLETO ENEM
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  {completePlan.subtitle}
                </p>
              </div>

              {/* Mockup do Pacote Completo */}
              <div className="mb-6">
                <ProductMockupCard type="offer-complete" />
              </div>

              {/* VOCÊ RECEBE: Checklist */}
              <div className="mb-6">
                <span className="text-xs font-bold text-[#172554] uppercase tracking-wider block mb-3">
                  VOCÊ RECEBE:
                </span>
                <ul className="space-y-2.5">
                  {completePlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937] font-semibold">
                      <div className="w-4 h-4 rounded-full bg-[#16A34A]/20 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PREÇO E CTA DO COMPLETO */}
            <div className="pt-6 border-t border-[#F97316]/20 bg-[#FFF1E8]/70 -mx-5 sm:-mx-7 md:-mx-8 -mb-5 sm:-mb-7 md:-mb-8 p-5 sm:p-7 md:p-8 rounded-b-3xl text-center">
              <div className="mb-4 flex flex-col items-center justify-center">
                {/* Ancoragem de Valor Total do Pacote */}
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    VALOR TOTAL:
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 font-bold line-through">
                    {completePlan.totalPackageValue}
                  </span>
                  {completePlan.discountBadge && (
                    <span className="text-[11px] font-extrabold text-white bg-red-600 px-2 py-0.5 rounded-full shadow-2xs">
                      {completePlan.discountBadge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-xs font-bold text-[#172554]">HOJE POR APENAS:</span>
                  <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F97316] tracking-tight">
                    {completePlan.price}
                  </span>
                </div>
                <span className="text-xs text-gray-600 font-medium block mt-0.5">
                  {completePlan.period}
                </span>
                {completePlan.anchorNote && (
                  <span className="text-xs text-[#9A3412] font-semibold block mt-2 max-w-xs">
                    {completePlan.anchorNote}
                  </span>
                )}
              </div>

              <a
                href={getCheckoutUrlWithParams(completePlan.checkoutUrl)}
                onClick={(e) => handleAction('completo', e)}
                id="btn-plano-completo"
                className="w-full min-h-[48px] bg-[#F97316] hover:bg-[#ea580c] active:scale-[0.99] text-white font-heading font-bold text-base sm:text-lg py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center cursor-pointer tracking-wide flex items-center justify-center gap-2"
              >
                <span>{completePlan.ctaText}</span>
              </a>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                <span>Garantia de 7 dias • Acesso imediato a todos os bônus</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
