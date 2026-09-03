import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { UPSELL_OFFER_DATA } from '../data/copyData';
import type { PlanItem } from '../types';
import { redirectToCheckout } from '../utils/checkout';

interface UpgradeOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** O Plano Completo original — usamos as features dele na listagem. */
  completePlan: PlanItem;
  /** URL de checkout do Plano Básico, usada quando a pessoa recusa o upgrade. */
  basicPlanCheckoutUrl: string;
}

export const UpgradeOfferModal: React.FC<UpgradeOfferModalProps> = ({
  isOpen,
  onClose,
  completePlan,
  basicPlanCheckoutUrl,
}) => {
  const [isRedirecting, setIsRedirecting] = useState<'upgrade' | 'basic' | null>(null);

  if (!isOpen) return null;

  const handleUpgrade = () => {
    setIsRedirecting('upgrade');
    redirectToCheckout(UPSELL_OFFER_DATA.checkoutUrl);
  };

  const handleKeepBasic = () => {
    setIsRedirecting('basic');
    redirectToCheckout(basicPlanCheckoutUrl);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upgrade-modal-title"
    >
      <div className="relative w-full max-w-[380px] bg-white rounded-2xl shadow-2xl border border-[#FBE3D3] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Fechar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 border border-[#E5E7EB] text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto px-5 sm:px-6 pt-7 pb-5">
          {/* Cabeçalho */}
          <div className="text-center mb-3">
            <h2
              id="upgrade-modal-title"
              className="font-heading text-2xl font-extrabold text-[#F97316] tracking-tight"
            >
              ESPERE!
            </h2>
            <p className="text-sm text-[#475569] mt-1">
              Temos uma oferta especial pra você!
            </p>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-block bg-[#172554] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
              Upgrade Completo
            </span>
          </div>

          {/* Preço */}
          <div className="text-center mb-5">
            <p className="text-sm text-[#94A3B8] line-through">
              De {UPSELL_OFFER_DATA.oldPrice}
            </p>
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#16A34A]">
                {UPSELL_OFFER_DATA.price}
              </span>
              <span className="bg-[#DCFCE7] text-[#16A34A] text-xs font-bold px-2 py-1 rounded-md">
                {UPSELL_OFFER_DATA.discountBadge}
              </span>
            </div>
          </div>

          {/* O que ganha */}
          <div className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl p-4 mb-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
              O que você ganha no Plano Completo:
            </p>
            <ul className="space-y-2">
              {completePlan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <button
            type="button"
            onClick={handleUpgrade}
            disabled={isRedirecting !== null}
            className="w-full min-h-[48px] bg-[#16A34A] hover:bg-[#15803d] disabled:opacity-80 disabled:cursor-not-allowed text-white font-heading font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {isRedirecting === 'upgrade'
              ? 'Redirecionando...'
              : `QUERO O COMPLETO POR ${UPSELL_OFFER_DATA.price}`}
          </button>

          <button
            type="button"
            onClick={handleKeepBasic}
            disabled={isRedirecting !== null}
            className="w-full text-center text-xs text-[#94A3B8] hover:text-[#64748B] underline underline-offset-2 mt-3 disabled:opacity-60"
          >
            {isRedirecting === 'basic'
              ? 'Redirecionando...'
              : 'Não, quero somente o Plano Básico'}
          </button>
        </div>
      </div>
    </div>
  );
};
