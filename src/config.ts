/**
 * Configurações da Landing Page dos Mapas Visuais ENEM
 * 
 * Substitua os valores abaixo quando tiver o link de checkout final, preços definidos
 * ou quando desejar inserir as URLs das suas imagens reais.
 */

export const LANDING_CONFIG = {
  // Links de pagamento/checkout
  CHECKOUT_URL: "#oferta", // Link padrão / âncora
  CHECKOUT_URL_COMPLETO: "https://pay.wiapy.com/5GXeu4Un98uW", // Link do Plano Completo (R$ 27,90)
  CHECKOUT_URL_BASICO: "https://pay.wiapy.com/vYSV-olUis-b",     // Link do Plano Básico (R$ 10,00)

  // Preços
  PRECO_ANTERIOR: "R$ 184,90",
  PRECO_ATUAL: "R$ 27,90",
  PARCELAMENTO: "Pagamento único",

  PRECO_BASICO_ANTERIOR: "R$ 59,90",
  PRECO_BASICO_ATUAL: "R$ 10,00",

  // Mapeamento de imagens e mockups do produto
  IMAGES: {
    HERO_MOCKUP: "/images/hero-mockup.webp",           // Mockup principal do dispositivo/livro aberto
    HERO_MAP_PAGE_1: "",       // Página 1 flutuando ao fundo
    HERO_MAP_PAGE_2: "",       // Página 2 flutuando ao fundo
    HERO_MAP_PAGE_3: "",       // Página 3 flutuando ao fundo
    
    // Carrossel de demonstração e Mapas Visuais
    LINGUAGENS_01: "/images/linguagens-01.webp",
    LINGUAGENS_02: "/images/linguagens-02.webp",
    LINGUAGENS_03: "/images/linguagens-03.webp",
    LINGUAGENS_04: "/images/linguagens-04.webp",
    LINGUAGENS_05: "/images/linguagens-05.webp",
    LINGUAGENS_06: "/images/linguagens-06.webp",

    MATEMATICA_01: "/images/matematica-01-juros-simples.webp",
    MATEMATICA_02: "/images/matematica-02-percentagem.webp",
    MATEMATICA_03: "/images/matematica-03-mmc-mdc.webp",
    MATEMATICA_04: "/images/matematica-04-notacao-cientifica.webp",
    MATEMATICA_05: "/images/matematica-05-proporcao.webp",
    MATEMATICA_06: "/images/matematica-06-razao.webp",

    // Seção Antes x Depois
    ANTES_MAPA_EXEMPLO: "/images/antes.webp",     // Página tradicional densa / antes
    DEPOIS_MAPA_EXEMPLO: "/images/depois.webp",   // Página real demonstrando clareza visual

    // Bônus
    REDACAO_MOCKUP: "/images/bonus-redacao.webp",     // Bônus 1 - Redação
    BONUS_EXERCICIOS_MOCKUP: "/images/bonus-exercicios.webp", // Bônus 2 - 50 Exercícios de Fixação
    PLANO_REVISAO_MOCKUP: "/images/bonus-revisao.webp",  // Bônus 3 - Plano de Revisão

    // Oferta
    OFERTA_MOCKUP_PRINCIPAL: "/images/hero-mockup.webp", // Mockup completo do pacote
  }
};
