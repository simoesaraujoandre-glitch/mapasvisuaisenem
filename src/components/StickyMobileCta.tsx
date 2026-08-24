import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LANDING_CONFIG } from '../config';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const offerEl = document.getElementById('oferta');

      if (!heroEl || !offerEl) return;

      const heroRect = heroEl.getBoundingClientRect();
      const offerRect = offerEl.getBoundingClientRect();

      // Show after scrolling past hero (hero bottom < 50px)
      const passedHero = heroRect.bottom < 50;

      // Hide when offer section is in view
      const offerInView = offerRect.top <= window.innerHeight && offerRect.bottom >= 100;

      setIsVisible(passedHero && !offerInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (LANDING_CONFIG.CHECKOUT_URL === '#oferta') {
      e.preventDefault();
      const offer = document.getElementById('oferta');
      if (offer) {
        offer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div
      id="sticky-mobile-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FBFAF6]/95 backdrop-blur-md border-t border-[#0E2A62]/15 p-3 px-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-200"
    >
      <div className="flex flex-col">
        <span className="font-display font-black text-xs text-[#0E2A62] leading-tight">
          Mapas Visuais ENEM
        </span>
        <span className="text-[10px] text-[#0E2A62]/70 font-semibold">
          Matemática + Linguagens
        </span>
      </div>

      <a
        href={LANDING_CONFIG.CHECKOUT_URL}
        onClick={handleClick}
        className="flex-1 max-w-[200px] bg-[#F6C945] active:bg-[#ebce38] text-[#0E2A62] font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap"
      >
        <span>Quero acessar</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
