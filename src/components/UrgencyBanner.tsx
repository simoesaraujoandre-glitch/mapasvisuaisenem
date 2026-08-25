import React, { useEffect, useState } from 'react';

/**
 * Faixa fixa no topo avisando que a oferta é válida só no dia de hoje.
 * A data é calculada em tempo real no navegador do visitante — nunca
 * precisa ser editada manualmente, ela sempre mostra o dia atual.
 */
function getTodayLabel(): string {
  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.toLocaleDateString('pt-BR', { month: 'long' });
  return `${dia} de ${mes}`;
}

export const UrgencyBanner: React.FC = () => {
  const [dataHoje, setDataHoje] = useState(getTodayLabel());

  useEffect(() => {
    // Recalcula a data caso a aba fique aberta passando da meia-noite
    const interval = setInterval(() => {
      setDataHoje(getTodayLabel());
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="banner"
      className="w-full bg-[#D32F2F] text-white text-center py-2 px-3 text-xs sm:text-sm font-bold tracking-tight shadow-md"
    >
      ⏰ Oferta válida somente hoje, dia {dataHoje}!
    </div>
  );
};
