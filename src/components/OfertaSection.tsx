import React from 'react';
import { Check, ArrowRight, Lock } from 'lucide-react';
import { LANDING_CONFIG } from '../config';

export const OfertaSection: React.FC = () => {
  return (
    <section
      id="oferta"
      className="py-16 md:py-20 lg:py-24 bg-[#FBFAF6] text-[#0E2A62] relative overflow-hidden scroll-mt-10"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#0E2A62] font-black text-xs tracking-wider uppercase mb-3 sm:mb-3.5 border border-[#0E2A62]/10 shadow-2xs">
            <span>ESCOLHA SEU PLANO</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#0E2A62] tracking-tight leading-tight mb-2.5">
            Escolha como quer se preparar para o ENEM.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#0E2A62]/80 leading-relaxed font-medium max-w-2xl mx-auto">
            Comece com os 160 Mapas Visuais ou leve o pacote completo com os 3 bônus.
          </p>
        </div>

        {/* Stacked Plans Container (Vertical layout: Exactly 2 plans, NO third plan) */}
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[600px] mx-auto">
          
          {/* ========================================================================= */}
          {/* 1. PLANO COMPLETO — PRINCIPAL */}
          {/* ========================================================================= */}
          <div
            id="card-plano-completo"
            className="w-full bg-white rounded-[24px] border-[3px] border-[#F6C945] p-5 sm:p-7 md:p-8 shadow-xl transition-all duration-300 relative flex flex-col text-[#0E2A62]"
          >
            {/* Top Badge: Sits partially over the top border */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#F6C945] text-[#0E2A62] font-display font-black text-xs sm:text-sm tracking-wide shadow-md border border-[#0E2A62]/20">
                ⭐ MAIS POPULAR • MELHOR CUSTO-BENEFÍCIO
              </span>
            </div>

            {/* Plan Identification */}
            <div className="text-center pt-2 mb-3">
              <div className="mb-1.5">
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#EAF4FF] text-[#0E2A62] border border-[#0E2A62]/20 font-extrabold text-xs tracking-wider uppercase">
                  PLANO COMPLETO
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0E2A62] tracking-tight mb-1">
                Mapas Visuais ENEM — Completo
              </h3>
            </div>

            {/* Mechanism Tagline */}
            <div className="text-center mb-3.5 py-1.5 px-3 bg-[#FFF8D9] rounded-lg border border-[#F6C945]/60 text-xs sm:text-sm font-black text-[#0E2A62]">
              Entenda. Pratique. Organize. Chegue mais preparado.
            </div>

            {/* "Você recebe:" Section with stacked vertical list */}
            <div className="mb-4 bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-[#0E2A62]/10">
              <h4 className="font-display font-black text-xs sm:text-sm text-[#0E2A62] uppercase tracking-wider mb-2.5 pb-1.5 border-b border-[#0E2A62]/10">
                VOCÊ RECEBE:
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-bold text-[#0E2A62]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>80 Mapas Visuais de Matemática</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>80 Mapas Visuais de Linguagens</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>Mapas Visuais de Redação</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>50 Exercícios de Fixação</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>Plano de Revisão ENEM — 7, 15 e 30 dias</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>
            </div>

            {/* Price Block */}
            <div className="text-center mb-5">
              <div className="text-xs sm:text-sm font-semibold text-gray-400 line-through mb-0.5">
                De: {LANDING_CONFIG.PRECO_ANTERIOR}
              </div>
              <p className="text-[11px] sm:text-xs font-extrabold text-[#0E2A62]/75 uppercase tracking-wider mb-0.5">
                HOJE POR APENAS:
              </p>
              <div className="inline-flex items-baseline justify-center">
                <span className="font-display font-black text-3xl sm:text-4xl md:text-[48px] text-[#0E2A62] tracking-tight bg-gradient-to-r from-[#F6C945]/30 to-[#F6C945]/60 px-3 py-0.5 rounded-xl">
                  {LANDING_CONFIG.PRECO_ATUAL}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 font-bold mt-1">
                {LANDING_CONFIG.PARCELAMENTO}
              </p>
            </div>

            {/* Primary CTA */}
            <div className="mb-3.5">
              <a
                href={LANDING_CONFIG.CHECKOUT_URL_COMPLETO}
                id="cta-plano-completo"
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#F6C945] hover:bg-[#ebd038] text-[#0E2A62] font-black text-base sm:text-lg px-6 py-3.5 sm:py-4 rounded-[14px] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>QUERO O PLANO COMPLETO</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>

            {/* Microcopy Security & Delivery */}
            <div className="text-center space-y-0.5">
              <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0E2A62]/80">
                <Lock className="w-3.5 h-3.5 text-[#3FA654]" />
                <span>Compra segura • Acesso imediato</span>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
                Material digital enviado por e-mail • Celular, tablet e computador
              </p>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 2. PLANO BÁSICO */}
          {/* ========================================================================= */}
          <div
            id="card-plano-basico"
            className="w-full bg-white rounded-[24px] border-2 border-[#0E2A62]/15 p-5 sm:p-7 md:p-8 shadow-md transition-all duration-300 relative flex flex-col text-[#0E2A62]"
          >
            {/* Plan Identification */}
            <div className="text-center mb-4">
              <div className="mb-1.5">
                <span className="inline-block px-3 py-0.5 rounded-full bg-gray-100 text-[#0E2A62] border border-[#0E2A62]/15 font-extrabold text-xs tracking-wider uppercase">
                  PLANO BÁSICO
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0E2A62] tracking-tight mb-1">
                Mapas Visuais ENEM — Básico
              </h3>
              <p className="text-xs sm:text-sm text-[#0E2A62]/80 font-medium max-w-md mx-auto">
                Para quem quer aprender Matemática e Linguagens de uma forma muito mais visual e direta.
              </p>
            </div>

            {/* "Você recebe:" Section */}
            <div className="mb-4 bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-[#0E2A62]/10">
              <h4 className="font-display font-black text-xs sm:text-sm text-[#0E2A62] uppercase tracking-wider mb-2.5 pb-1.5 border-b border-[#0E2A62]/10">
                VOCÊ RECEBE:
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-bold text-[#0E2A62]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>80 Mapas Visuais de Matemática</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>80 Mapas Visuais de Linguagens</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>160 Mapas Visuais no total</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>Acesso imediato</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3FA654] stroke-[3] flex-shrink-0" />
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>

              {/* Discreet Notice */}
              <div className="mt-2.5 pt-2 border-t border-[#0E2A62]/10 text-center">
                <p className="text-xs text-gray-500 font-semibold">
                  Não inclui os 3 bônus.
                </p>
              </div>
            </div>

            {/* Price Block */}
            <div className="text-center mb-4">
              <div className="text-xs sm:text-sm font-semibold text-gray-400 line-through mb-0.5">
                De: {LANDING_CONFIG.PRECO_BASICO_ANTERIOR}
              </div>
              <p className="text-[11px] sm:text-xs font-extrabold text-[#0E2A62]/75 uppercase tracking-wider mb-0.5">
                HOJE POR APENAS:
              </p>
              <div className="inline-flex items-baseline justify-center">
                <span className="font-display font-black text-3xl sm:text-4xl md:text-[44px] text-[#0E2A62] tracking-tight">
                  {LANDING_CONFIG.PRECO_BASICO_ATUAL}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 font-bold mt-1">
                {LANDING_CONFIG.PARCELAMENTO}
              </p>
            </div>

            {/* Secondary CTA */}
            <div className="mb-3.5">
              <a
                href={LANDING_CONFIG.CHECKOUT_URL_BASICO}
                id="cta-plano-basico"
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#0E2A62] hover:bg-[#183d87] text-white font-black text-base sm:text-lg px-6 py-3.5 sm:py-4 rounded-[14px] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>QUERO O PLANO BÁSICO</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>

            {/* Microcopy Security & Delivery */}
            <div className="text-center space-y-0.5">
              <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0E2A62]/80">
                <Lock className="w-3.5 h-3.5 text-[#3FA654]" />
                <span>Compra segura • Acesso imediato</span>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
                Material digital enviado por e-mail • Celular, tablet e computador
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
