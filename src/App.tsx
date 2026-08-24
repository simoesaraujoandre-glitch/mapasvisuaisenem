/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CarouselSection } from './components/CarouselSection';
import { OQueRecebeSection } from './components/OQueRecebeSection';
import { AntesDepoisSection } from './components/AntesDepoisSection';
import { TransformacaoSection } from './components/TransformacaoSection';
import { BonusSection } from './components/BonusSection';
import { OfertaSection } from './components/OfertaSection';
import { GarantiaSection } from './components/GarantiaSection';
import { FaqSection } from './components/FaqSection';
import { CtaFinalSection } from './components/CtaFinalSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0E2A62] flex flex-col selection:bg-[#F6C945] selection:text-[#0E2A62]">
      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. CARROSSEL */}
        <CarouselSection />

        {/* 3. O QUE VOCÊ VAI APRENDER */}
        <OQueRecebeSection />

        {/* 4. ANTES × DEPOIS */}
        <AntesDepoisSection />

        {/* 5. TRANSFORMAÇÃO */}
        <TransformacaoSection />

        {/* 6. BÔNUS */}
        <BonusSection />

        {/* 7. PLANOS */}
        <OfertaSection />

        {/* 8. GARANTIA */}
        <GarantiaSection />

        {/* 9. FAQ */}
        <FaqSection />

        {/* 10. CTA FINAL */}
        <CtaFinalSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
