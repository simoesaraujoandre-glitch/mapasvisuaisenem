import React, { useState } from 'react';
import { X, Check, ShieldCheck, Lock, QrCode, CreditCard, Sparkles, Copy, CheckCircle2, ArrowRight, Download, Smartphone, ExternalLink } from 'lucide-react';
import { CHECKOUT_URLS } from '../data/contentData';
import { useModalBehavior } from '../hooks/useModalBehavior';

interface CheckoutModalProps {
  initialPlan: 'basic' | 'complete';
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ initialPlan, onClose }) => {
  useModalBehavior(true, onClose);

  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete'>(initialPlan);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const price = selectedPlan === 'basic' ? 'R$ 10,00' : 'R$ 27,90';
  const planTitle = selectedPlan === 'basic' ? 'Plano Básico • Matemática Visual ENEM' : 'Plano Completo • Preparação Visual ENEM';
  const checkoutUrl = selectedPlan === 'basic' ? CHECKOUT_URLS.basic : CHECKOUT_URLS.complete;

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = checkoutUrl;
  };

  const handleCopyPix = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Checkout"
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span className="font-heading font-bold text-slate-900 text-base">
              Checkout Seguro (SSL)
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {!isCompleted ? (
            <form onSubmit={handleSimulatePayment} className="space-y-5">
              
              {/* Plan Selector / Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Selecione o seu plano:
                </label>
                
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setSelectedPlan('basic')}
                    className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      selectedPlan === 'basic'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase text-slate-700">Plano Básico</span>
                        {selectedPlan === 'basic' && <Check className="w-4 h-4 text-blue-600" />}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Matemática</p>
                    </div>
                    <span className="font-heading font-extrabold text-blue-600 text-lg mt-2">
                      R$ 10,00
                    </span>
                  </div>

                  <div
                    onClick={() => setSelectedPlan('complete')}
                    className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between relative ${
                      selectedPlan === 'complete'
                        ? 'border-blue-600 bg-blue-50/70 shadow-2xs'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="absolute -top-2.5 right-2 bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                      +4 BÔNUS
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase text-slate-900">Plano Completo</span>
                        {selectedPlan === 'complete' && <Check className="w-4 h-4 text-blue-600" />}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Tudo incluso</p>
                    </div>
                    <span className="font-heading font-extrabold text-blue-700 text-lg mt-2">
                      R$ 27,90
                    </span>
                  </div>
                </div>
              </div>

              {/* Special Upgrade Offer if Basic Selected */}
              {selectedPlan === 'basic' && (
                <div 
                  onClick={() => setSelectedPlan('complete')}
                  className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 flex items-center justify-between gap-3 cursor-pointer hover:bg-amber-100/70 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Levar também <strong>Linguagens, Redação, 50 Exercícios e Cronograma</strong> por apenas +R$ 17,90?</span>
                  </div>
                  <span className="text-[11px] font-bold text-blue-600 whitespace-nowrap bg-white px-2 py-1 rounded border border-amber-200">
                    Mudar para Completo
                  </span>
                </div>
              )}

              {/* Student Details */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Lucas Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Seu Melhor E-mail (Para envio imediato do PDF):
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: lucas@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp (Para backup do acesso):
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: (11) 98765-4321"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2 pt-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Forma de Pagamento:
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>Pix (Aprovação Instantânea)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-blue-600 bg-blue-50 text-blue-800'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Payment details preview */}
              {paymentMethod === 'pix' ? (
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-emerald-900 font-bold">
                    <span>Chave Pix Copia e Cola Gerada</span>
                    <span className="text-[11px] bg-emerald-200/60 px-2 py-0.5 rounded">Válida por 15 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value="00020126580014br.gov.bcb.pix0136matematica-visual-enem@pix.edu5204000053039865802BR5920MATEMATICA VISUAL6009SAO PAULO62070503***6304E8F2"
                      className="bg-white border border-emerald-200 rounded-lg px-2.5 py-1.5 font-mono text-[10px] text-slate-600 w-full select-all"
                    />
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer transition-colors whitespace-nowrap"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-emerald-800">
                    ⚡ Após o pagamento, seu acesso aos Mapas em PDF é liberado imediatamente.
                  </p>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Número do Cartão"
                      className="col-span-2 px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      defaultValue="4532 •••• •••• 8821"
                    />
                    <input
                      type="text"
                      placeholder="Validade (MM/AA)"
                      className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      defaultValue="12/28"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      defaultValue="842"
                    />
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-heading font-bold text-base rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>LIBERAR ACESSO IMEDIATO • {price}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Trust disclaimer */}
              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  Garantia de 7 Dias
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  Privacidade Garantida
                </span>
              </div>

            </form>
          ) : (
            /* Success / Delivery Screen Simulation */
            <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide bg-emerald-50 px-3 py-1 rounded-full">
                  Pagamento Confirmado com Sucesso!
                </span>
                <h3 className="font-heading font-extrabold text-slate-900 text-2xl mt-3">
                  Parabéns! Seus Mapas Visuais Estão Prontos.
                </h3>
                <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                  Enviamos o link de download e instruções para <strong>{email || 'seu e-mail'}</strong>.
                </p>
              </div>

              {/* Simulated Download Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Pacote Digital Liberado:</span>
                  <span className="text-blue-600 font-mono">PDFs HD 300 DPI</span>
                </div>

                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                        PDF
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Mapas_Matematica_ENEM.pdf</p>
                        <p className="text-[10px] text-slate-400">Completo • 24 Mapas Esquematizados</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => alert('Download do material de demonstração iniciado com sucesso!')}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar</span>
                    </button>
                  </div>

                  {selectedPlan === 'complete' && (
                    <>
                      <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                            PDF
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">Bonus_Linguagens_Redacao.pdf</p>
                            <p className="text-[10px] text-slate-400">Bônus Inclusos</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => alert('Download dos bônus iniciado com sucesso!')}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Baixar</span>
                        </button>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                            PDF
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">Cronograma_Revisao_ENEM.pdf</p>
                            <p className="text-[10px] text-slate-400">Roteiro 7, 15 e 30 dias</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => alert('Download do cronograma iniciado!')}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Baixar</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl cursor-pointer"
              >
                Fechar e Acessar Material
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
