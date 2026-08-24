import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, BookOpen } from 'lucide-react';
import { LANDING_CONFIG } from '../config';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBFAF6]/90 backdrop-blur-md shadow-xs border-b border-[#0E2A62]/10 py-3'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Left: Brand */}
        <a
          href="#"
          id="header-brand-logo"
          className="flex items-center gap-2 group text-[#0E2A62] no-underline focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[#0E2A62] text-[#F6C945] flex items-center justify-center shadow-sm group-hover:rotate-3 transition-transform duration-200">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tight leading-none text-[#0E2A62]">
              Mapas Visuais <span className="text-[#0E2A62] bg-[#F6C945] px-1 rounded-sm text-sm md:text-base">ENEM</span>
            </span>
            <span className="text-[10px] font-bold text-[#0E2A62]/70 tracking-wider uppercase font-sans">
              Matemática & Linguagens
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#0E2A62]/85">
          <a
            href="#como-funciona"
            onClick={(e) => scrollToSection(e, 'como-funciona')}
            className="hover:text-[#0E2A62] transition-colors py-1 relative group"
          >
            Como funciona
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F6C945] transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#o-que-recebe"
            onClick={(e) => scrollToSection(e, 'o-que-recebe')}
            className="hover:text-[#0E2A62] transition-colors py-1 relative group"
          >
            O que você recebe
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F6C945] transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#bonus"
            onClick={(e) => scrollToSection(e, 'bonus')}
            className="hover:text-[#0E2A62] transition-colors py-1 relative group"
          >
            Bônus
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F6C945] transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#faq"
            onClick={(e) => scrollToSection(e, 'faq')}
            className="hover:text-[#0E2A62] transition-colors py-1 relative group"
          >
            Dúvidas
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F6C945] transition-all duration-200 group-hover:w-full" />
          </a>
        </nav>

        {/* Right: CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#oferta"
            id="header-cta-button"
            onClick={(e) => scrollToSection(e, 'oferta')}
            className="bg-[#F6C945] hover:bg-[#ebd538] text-[#0E2A62] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-[14px] shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 active:scale-95"
          >
            <span>QUERO ACESSAR</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="header-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0E2A62] hover:bg-black/5 focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#FBFAF6] border-b border-[#0E2A62]/10 px-6 py-5 shadow-lg flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <a
            href="#como-funciona"
            onClick={(e) => scrollToSection(e, 'como-funciona')}
            className="text-base font-semibold text-[#0E2A62] py-2 border-b border-[#0E2A62]/5"
          >
            Como funciona
          </a>
          <a
            href="#o-que-recebe"
            onClick={(e) => scrollToSection(e, 'o-que-recebe')}
            className="text-base font-semibold text-[#0E2A62] py-2 border-b border-[#0E2A62]/5"
          >
            O que você recebe
          </a>
          <a
            href="#bonus"
            onClick={(e) => scrollToSection(e, 'bonus')}
            className="text-base font-semibold text-[#0E2A62] py-2 border-b border-[#0E2A62]/5"
          >
            Bônus
          </a>
          <a
            href="#faq"
            onClick={(e) => scrollToSection(e, 'faq')}
            className="text-base font-semibold text-[#0E2A62] py-2"
          >
            Dúvidas
          </a>

          <a
            href="#oferta"
            onClick={(e) => scrollToSection(e, 'oferta')}
            className="w-full text-center bg-[#F6C945] text-[#0E2A62] font-extrabold py-3 rounded-xl shadow-xs"
          >
            QUERO ACESSAR OS MAPAS
          </a>
        </div>
      )}
    </header>
  );
};
