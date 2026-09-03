import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { LearnSection } from './components/LearnSection';
import { BonusSection } from './components/BonusSection';
import { OfferSection } from './components/OfferSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { UpgradeOfferModal } from './components/UpgradeOfferModal';
import { OFFER_SECTION_DATA } from './data/copyData';
import { redirectToCheckout } from './utils/checkout';

export default function App() {
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getFullYear()).slice(-2)}`;

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [basicPlan, completePlan] = OFFER_SECTION_DATA.plans;

  const scrollToOffer = () => {
    const offerEl = document.getElementById('oferta');
    if (offerEl) {
      offerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planId: 'basico' | 'completo' = 'completo') => {
    // Clicou no Plano Básico: NÃO redireciona direto. Mostra a oferta de
    // upgrade primeiro; o redirecionamento só acontece depois que a pessoa
    // escolher uma opção dentro do pop-up.
    if (planId === 'basico') {
      setIsUpgradeModalOpen(true);
      return;
    }

    // Clicou no Plano Completo: segue direto pro checkout, como sempre foi.
    const plan = OFFER_SECTION_DATA.plans.find((p) => p.id === planId);
    if (plan && plan.checkoutUrl) {
      redirectToCheckout(plan.checkoutUrl);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col selection:bg-[#F97316]/20 selection:text-[#172554]">
      {/* Faixa Vermelha no Topo */}
      <div className="w-full bg-red-600 text-white text-center py-2 px-4 text-xs sm:text-sm font-bold uppercase tracking-wide shadow-xs flex items-center justify-center gap-2">
        <span>OFERTA VÁLIDA SOMENTE HOJE DIA {formattedDate}</span>
        <span>•</span>
        <span className="bg-white/20 px-2 py-0.5 rounded-sm">ATÉ 87% OFF</span>
      </div>

      <main className="flex-1">
        {/* 1. HERO */}
        <HeroSection onCtaClick={scrollToOffer} />

        {/* 2. TUDO O QUE VOCÊ VAI APRENDER */}
        <LearnSection />

        {/* 3. BÔNUS */}
        <BonusSection />

        {/* 4. OFERTA */}
        <OfferSection onSelectPlan={(id) => handleSelectPlan(id as 'basico' | 'completo')} />

        {/* 5. DEPOIMENTOS */}
        <TestimonialsSection />

        {/* 6. GARANTIA DE 7 DIAS */}
        <GuaranteeSection />

        {/* 7. FAQ + CTA FINAL */}
        <FaqSection onFinalCtaClick={scrollToOffer} />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Pop-up de upgrade: só aparece depois que a pessoa clica no Plano Básico */}
      <UpgradeOfferModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        completePlan={completePlan}
        basicPlanCheckoutUrl={basicPlan.checkoutUrl}
      />
    </div>
  );
}
