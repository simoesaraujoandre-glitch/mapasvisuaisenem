import React from 'react';
import { Check, ShieldCheck, Zap, Sparkles, Lock, CreditCard, QrCode } from 'lucide-react';
import { CHECKOUT_URLS } from '../data/contentData';

interface OfferSectionProps {
  onSelectPlan: (plan: 'basic' | 'complete') => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="oferta" className="bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Escolha sua preparação para o ENEM
          </h2>
        </div>

        {/* 2 Offer Pricing Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch mb-14">
          
          {/* ======================================================== */}
          {/* PLANO 1: PLANO BÁSICO - MATEMÁTICA VISUAL ENEM (R$ 10) */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border-2 border-blue-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between relative hover:border-blue-400 hover:shadow-md transition-all">
            
            <div>
              {/* Header */}
              <div className="border-b border-slate-100 pb-4 mb-4 text-center">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  PLANO BÁSICO
                </span>
                <h3 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl">
                  MATEMÁTICA VISUAL ENEM
                </h3>
                <p className="text-slate-600 text-sm mt-1.5 leading-snug">
                  Ideal para quem quer focar totalmente em destravar Matemática.
                </p>
              </div>

              {/* Product Image */}
              <div className="w-full flex items-center justify-center mb-6 py-2 px-4 bg-gradient-to-b from-slate-50 to-blue-50/30 rounded-2xl border border-slate-100/90 group">
                <img
                  src="/img/produto-basico.webp"
                  alt="Matemática Visual ENEM - Plano Básico"
                  width={420}
                  height={420}
                  loading="lazy"
                  decoding="async"
                  className="h-40 sm:h-44 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Todo o material visual de Matemática</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Conteúdos do básico ao avançado</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Fórmulas, conceitos e exemplos</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Material 100% digital</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Acesso pelo celular, tablet ou computador</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Acesso imediato</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Garantia de 7 dias</span>
                </div>
              </div>
            </div>

            {/* Pricing and Button */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-4 mb-5 text-center border border-slate-100">
                <div className="text-xs text-slate-600 font-medium">
                  De <span className="line-through">R$ 59,90</span>
                </div>
                <div className="flex items-baseline justify-center gap-1 mt-1">
                  <span className="text-sm font-bold text-slate-700">Hoje por apenas</span>
                  <span className="font-heading font-extrabold text-blue-600 text-4xl sm:text-5xl tracking-tight">
                    R$ 10
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium block mt-1">
                  Pagamento único • Sem mensalidade
                </span>
              </div>

              <a
                href={CHECKOUT_URLS.basic}
                onClick={(e) => {
                  onSelectPlan('basic');
                }}
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-heading font-bold text-base sm:text-lg rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg transition-all cursor-pointer text-center block"
              >
                QUERO DESTRAVAR A MATEMÁTICA
              </a>
            </div>

          </div>

          {/* ======================================================== */}
          {/* PLANO 2: PLANO COMPLETO - PREPARAÇÃO VISUAL ENEM (R$ 27,90) */}
          {/* ======================================================== */}
          <div className="bg-gradient-to-b from-blue-50/70 to-white rounded-3xl border-2 border-blue-600 p-6 sm:p-8 shadow-lg flex flex-col justify-between relative ring-2 ring-blue-600/20">
            
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-heading font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              <span>Mais Completo • Melhor Escolha</span>
            </div>

            <div>
              {/* Header */}
              <div className="border-b border-blue-100 pb-4 mb-4 pt-2 text-center">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  PLANO COMPLETO
                </span>
                <h3 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl">
                  PREPARAÇÃO VISUAL ENEM
                </h3>
                <p className="text-slate-600 text-sm mt-1.5 leading-snug">
                  A preparação definitiva com todos os 4 bônus para elevar sua nota.
                </p>
              </div>

              {/* Product Image */}
              <div className="w-full flex items-center justify-center mb-6 py-2 px-4 bg-gradient-to-b from-blue-100/50 to-white rounded-2xl border border-blue-200/80 shadow-xs group">
                <img
                  src="/img/produto-completo.webp"
                  alt="Preparação Visual ENEM Completa com Bônus"
                  width={420}
                  height={420}
                  loading="lazy"
                  decoding="async"
                  className="h-40 sm:h-44 w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm font-semibold">Todo o material visual de Matemática</span>
                </div>

                <div className="flex items-start gap-3 bg-blue-100/50 p-1.5 rounded-lg">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-blue-900 text-sm font-bold">🎁 Mapas Visuais de Linguagens</span>
                </div>

                <div className="flex items-start gap-3 bg-blue-100/50 p-1.5 rounded-lg">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-blue-900 text-sm font-bold">🎁 Mapas Visuais de Redação</span>
                </div>

                <div className="flex items-start gap-3 bg-blue-100/50 p-1.5 rounded-lg">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-blue-900 text-sm font-bold">🎁 50 Exercícios de Fixação</span>
                </div>

                <div className="flex items-start gap-3 bg-blue-100/50 p-1.5 rounded-lg">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-blue-900 text-sm font-bold">🎁 Plano de Revisão de 7, 15 e 30 dias</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Material 100% digital</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Acesso imediato</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Garantia de 7 dias</span>
                </div>
              </div>
            </div>

            {/* Pricing and Button */}
            <div>
              <div className="bg-blue-100/60 rounded-2xl p-4 mb-5 text-center border border-blue-200">
                <div className="text-xs text-slate-500 font-medium">
                  Valor dos materiais: <span className="line-through">R$ 184,90</span>
                </div>
                <div className="flex items-baseline justify-center gap-1 mt-1">
                  <span className="text-sm font-bold text-slate-700">Hoje por</span>
                  <span className="font-heading font-extrabold text-blue-700 text-4xl sm:text-5xl tracking-tight">
                    R$ 27,90
                  </span>
                </div>
                <span className="text-[11px] text-blue-700 font-semibold block mt-1">
                  Economia de R$ 157,00 (85% OFF)
                </span>
              </div>

              <a
                href={CHECKOUT_URLS.complete}
                onClick={(e) => {
                  onSelectPlan('complete');
                }}
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-heading font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all cursor-pointer text-center block"
              >
                QUERO A PREPARAÇÃO COMPLETA
              </a>
            </div>

          </div>

        </div>

        {/* Security & Guarantee Badges Footer inside Offer */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>Compra 100% Segura (SSL 256-bit)</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Garantia Incondicional de 7 Dias</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
            <QrCode className="w-4 h-4 text-slate-700" />
            <span>Pix Instantâneo ou Cartão</span>
          </div>
        </div>

      </div>
    </section>
  );
};
