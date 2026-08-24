import React from 'react';
import { MarcaTexto } from './MarcaTexto';

export const BeneficioCentralSection: React.FC = () => {
  return (
    <section
      id="beneficio-central"
      className="py-14 sm:py-16 md:py-20 bg-[#FFF8D9] relative overflow-hidden"
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Headlines */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0E2A62] tracking-tight leading-tight mb-2 sm:mb-3">
            Menos energia tentando organizar.
          </h2>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0E2A62] tracking-tight leading-tight">
            Mais energia para{' '}
            <MarcaTexto color="yellow" className="bg-[#F6C945] text-[#0E2A62] px-2 py-0.5">
              entender e revisar.
            </MarcaTexto>
          </h2>
        </div>

      </div>
    </section>
  );
};

