import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { LANDING_CONFIG } from '../config';

export const AntesDepoisSection: React.FC = () => {
  return (
    <section
      id="antes-depois"
      className="py-16 md:py-20 lg:py-24 bg-[#FFF8DD] relative overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Eyebrow & Headlines */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 text-[#0E2A62] font-black text-xs tracking-wider uppercase mb-3 sm:mb-3.5 border border-[#0E2A62]/10 shadow-2xs">
            <span>MUDE A FORMA DE ESTUDAR</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] leading-tight tracking-tight mb-3 sm:mb-4">
            Chega de apostilas cheias de conteúdo que cansam seus estudos e demoram para chegar ao que realmente importa.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#0E2A62]/85 font-medium max-w-2xl mx-auto leading-relaxed">
            Aprenda de forma visual, com o essencial direto ao ponto e muito mais fácil de entender e memorizar.
          </p>
        </div>

        {/* Compact Comparison Layout: ANTES → DEPOIS */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-6 max-w-4xl mx-auto">
          
          {/* LADO ESQUERDO — ANTES */}
          <div
            id="card-antes"
            className="w-full lg:w-1/2 rounded-2xl bg-white border-2 border-[#F1645D]/30 p-4 sm:p-5 shadow-xs flex flex-col justify-between"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F1645D]/15 text-[#F1645D] font-extrabold text-xs uppercase tracking-wider">
                <X className="w-3.5 h-3.5 stroke-[3]" />
                ANTES
              </span>
              <span className="text-xs font-bold text-[#F1645D]/90">
                Estudo tradicional
              </span>
            </div>

            {/* Imagem Antes */}
            <div className="mb-3.5 overflow-hidden rounded-xl border border-[#F1645D]/20 bg-white">
              <ImagePlaceholder
                tag="[ANTES_MAPA_EXEMPLO]"
                label="Página Tradicional de Estudo"
                sublabel="Texto denso e desestruturado"
                aspectRatio="square"
                theme="light"
                src={LANDING_CONFIG.IMAGES.ANTES_MAPA_EXEMPLO}
                className="w-full bg-white"
              />
            </div>

            {/* 4 Pontos ANTES */}
            <ul className="space-y-1.5 text-xs sm:text-sm font-bold text-[#0E2A62]/90">
              <li className="flex items-center gap-2 bg-[#FFF1ED] p-2.5 rounded-xl border border-[#F1645D]/20">
                <span className="w-4 h-4 rounded-full bg-[#F1645D] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                  ✕
                </span>
                <span>Páginas e páginas de conteúdo</span>
              </li>
              <li className="flex items-center gap-2 bg-[#FFF1ED] p-2.5 rounded-xl border border-[#F1645D]/20">
                <span className="w-4 h-4 rounded-full bg-[#F1645D] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                  ✕
                </span>
                <span>Informação importante espalhada</span>
              </li>
              <li className="flex items-center gap-2 bg-[#FFF1ED] p-2.5 rounded-xl border border-[#F1645D]/20">
                <span className="w-4 h-4 rounded-full bg-[#F1645D] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                  ✕
                </span>
                <span>Mais cansativo para aprender e revisar</span>
              </li>
              <li className="flex items-center gap-2 bg-[#FFF1ED] p-2.5 rounded-xl border border-[#F1645D]/20">
                <span className="w-4 h-4 rounded-full bg-[#F1645D] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                  ✕
                </span>
                <span>Difícil encontrar rapidamente o essencial</span>
              </li>
            </ul>
          </div>

          {/* Seta divisória central (desktop) */}
          <div className="hidden lg:flex items-center justify-center text-[#0E2A62]/40">
            <ArrowRight className="w-7 h-7 stroke-[3]" />
          </div>

          {/* LADO DIREITO — DEPOIS */}
          <div
            id="card-depois"
            className="w-full lg:w-1/2 rounded-2xl bg-[#FFFDF0] border-2 border-[#3FA654]/50 p-4 sm:p-5 shadow-md flex flex-col justify-between"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#3FA654] text-white font-extrabold text-xs uppercase tracking-wider shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                DEPOIS
              </span>
              <span className="text-xs font-bold text-[#0E2A62] bg-[#F6C945] px-2.5 py-0.5 rounded-md">
                Mapas Visuais
              </span>
            </div>

            {/* Imagem Depois */}
            <div className="mb-3.5 overflow-hidden rounded-xl border border-[#3FA654]/30 bg-white">
              <ImagePlaceholder
                id="depois-mapa-placeholder"
                tag="[DEPOIS_MAPA_EXEMPLO]"
                label="Página de Mapa Visual Organizada"
                sublabel="Conceito + Exemplo + Destaque"
                aspectRatio="square"
                theme="yellow"
                src={LANDING_CONFIG.IMAGES.DEPOIS_MAPA_EXEMPLO}
                className="w-full bg-white"
              />
            </div>

            {/* 4 Pontos DEPOIS */}
            <ul className="space-y-1.5 text-xs sm:text-sm font-bold text-[#0E2A62]">
              <li className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#3FA654]/25 shadow-2xs">
                <span className="w-4 h-4 rounded-full bg-[#3FA654] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                  ✓
                </span>
                <span>Conteúdo direto ao ponto</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#3FA654]/25 shadow-2xs">
                <span className="w-4 h-4 rounded-full bg-[#3FA654] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                  ✓
                </span>
                <span>Explicações organizadas visualmente</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#3FA654]/25 shadow-2xs">
                <span className="w-4 h-4 rounded-full bg-[#3FA654] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                  ✓
                </span>
                <span>Mais fácil entender e memorizar</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#3FA654]/25 shadow-2xs">
                <span className="w-4 h-4 rounded-full bg-[#3FA654] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                  ✓
                </span>
                <span>O essencial fácil de encontrar e revisar</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Fechamento Antes x Depois */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center max-w-2xl mx-auto bg-white/90 border border-[#0E2A62]/10 p-5 sm:p-6 rounded-2xl shadow-2xs">
          <p className="font-display font-black text-base sm:text-lg md:text-xl text-[#0E2A62] tracking-tight">
            Menos páginas para decifrar.{' '}
            <span className="bg-[#F6C945] px-2 py-0.5 rounded-md">
              Mais clareza para entender, lembrar e aplicar.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
