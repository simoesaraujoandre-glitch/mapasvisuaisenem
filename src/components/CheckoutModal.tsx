import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CreditCard, QrCode, ArrowRight } from 'lucide-react';
import { OFFER_SECTION_DATA } from '../data/copyData';
import { redirectToCheckout } from '../utils/checkout';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedPlanId: 'basico' | 'completo';
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  selectedPlanId,
  onClose,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const plan = OFFER_SECTION_DATA.plans.find((p) => p.id === selectedPlanId) || OFFER_SECTION_DATA.plans[0];

  const handleSimulatedCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (plan && plan.checkoutUrl) {
      redirectToCheckout(plan.checkoutUrl);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-[#E5E7EB] relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-[#F97316] uppercase bg-[#FFF1E8] px-2.5 py-0.5 rounded-full">
              CHECKOUT SEGURO
            </span>
            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#16A34A]" /> 256-bit SSL
            </span>
          </div>

          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold text-[#172554] tracking-tight pr-8">
            Finalizar Pedido: <span className="text-[#F97316]">{plan.name}</span>
          </h3>

          {/* Plan Summary Card */}
          <div className="bg-[#FFF9F5] rounded-2xl p-3.5 sm:p-4 border border-[#F97316]/20 my-3.5 sm:my-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#172554] block">{plan.badge}</span>
              <span className="text-[11px] sm:text-xs text-gray-500">
                {plan.id === 'completo' ? '100 Mapas + 5 Bônus Exclusivos' : '100 Mapas Visuais de Redação'}
              </span>
            </div>
            <div className="text-right">
              {plan.totalPackageValue ? (
                <span className="text-[11px] text-gray-400 font-semibold line-through block">
                  {plan.totalPackageValue}
                </span>
              ) : plan.oldPrice ? (
                <span className="text-[11px] text-gray-400 font-semibold line-through block">
                  {plan.oldPrice}
                </span>
              ) : null}
              <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#F97316]">{plan.price}</span>
              <span className="text-[10px] text-gray-400 block">Pagamento Único</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSimulatedCheckout} className="space-y-3.5 sm:space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#172554] mb-1">Seu Nome Completo</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Ana Silva"
                className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-[#E5E7EB] text-base sm:text-sm focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#172554] mb-1">Seu Melhor E-mail (para envio do material)</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: ana.silva@email.com"
                className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-[#E5E7EB] text-base sm:text-sm focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
              />
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-bold text-[#172554] mb-1.5">Forma de Pagamento</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-3 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px] ${
                    paymentMethod === 'pix'
                      ? 'border-[#F97316] bg-[#FFF1E8] text-[#F97316]'
                      : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <QrCode className="w-4 h-4 shrink-0" />
                  <span>PIX (Imediato)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-3 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px] ${
                    paymentMethod === 'card'
                      ? 'border-[#F97316] bg-[#FFF1E8] text-[#F97316]'
                      : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 shrink-0" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full min-h-[48px] bg-[#F97316] hover:bg-[#ea580c] text-white font-heading font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <span>IR PARA PAGAMENTO SEGURO ({plan.price})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-4 pt-3 border-t border-gray-100 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>Garantia de 7 dias com devolução integral.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
