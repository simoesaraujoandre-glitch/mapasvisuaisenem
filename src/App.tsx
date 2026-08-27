import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Curriculum } from './components/Curriculum';
import { MethodComparison } from './components/MethodComparison';
import { BonusSection } from './components/BonusSection';
import { OfferSection } from './components/OfferSection';
import { Testimonials } from './components/Testimonials';
import { FinalCta } from './components/FinalCta';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { VisualSampleModal } from './components/VisualSampleModal';
import { CheckoutModal } from './components/CheckoutModal';
import { VisualSheetSample } from './types';

export default function App() {
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<'basic' | 'complete' | null>(null);
  const [activeSampleModal, setActiveSampleModal] = useState<VisualSheetSample | null>(null);

  const handleOpenCheckout = (plan: 'basic' | 'complete' = 'basic') => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedPlanForCheckout(plan);
    }
  };

  const handleCloseCheckout = () => {
    setSelectedPlanForCheckout(null);
  };

  const handleOpenSample = (sample: VisualSheetSample) => {
    setActiveSampleModal(sample);
  };

  const handleCloseSample = () => {
    setActiveSampleModal(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-700 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <main className="flex-grow">
        {/* 1. HERO */}
        <Hero 
          onCtaClick={() => handleOpenCheckout('basic')} 
          onOpenSample={handleOpenSample} 
        />

        {/* 2. POR QUE A MAIORIA TRAVA NA MATEMÁTICA DO ENEM? */}
        <PainPoints />

        {/* 3. O QUE VOCÊ VAI DOMINAR NA PRÁTICA */}
        <Curriculum 
          onOpenSample={handleOpenSample}
          onCtaClick={() => handleOpenCheckout('basic')}
        />

        {/* 4. MÉTODO TRADICIONAL × MÉTODO VISUAL */}
        <MethodComparison />

        {/* 5. BÔNUS */}
        <BonusSection />

        {/* 6. OFERTA */}
        <OfferSection onSelectPlan={(plan) => handleOpenCheckout(plan)} />

        {/* 7. DEPOIMENTOS */}
        <Testimonials />

        {/* 8. CTA FINAL */}
        <FinalCta onCtaClick={() => handleOpenCheckout('basic')} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Visual Map Zoom Modal */}
      <VisualSampleModal 
        sample={activeSampleModal} 
        onClose={handleCloseSample}
        onSelectPlan={(plan) => handleOpenCheckout(plan)}
      />

      {/* Interactive Checkout Modal (Pix & Card) */}
      {selectedPlanForCheckout && (
        <CheckoutModal 
          initialPlan={selectedPlanForCheckout} 
          onClose={handleCloseCheckout} 
        />
      )}
    </div>
  );
}
