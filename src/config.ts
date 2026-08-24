/**
 * Configurações da Landing Page dos Mapas Visuais ENEM
 * 
 * Substitua os valores abaixo quando tiver o link de checkout final, preços definidos
 * ou quando desejar inserir as URLs das suas imagens reais.
 */

export const LANDING_CONFIG = {
  // Links de pagamento/checkout
  CHECKOUT_URL: "#oferta", // Link padrão / âncora
  CHECKOUT_URL_COMPLETO: "https://pay.hotmart.com/YOUR_CODE_COMPLETO", // Link do Plano Completo [CHECKOUT_COMPLETO]
  CHECKOUT_URL_BASICO: "https://pay.hotmart.com/YOUR_CODE_BASICO",     // Link do Plano Básico [CHECKOUT_BASICO]

  // Preços
  PRECO_ANTERIOR: "R$ 184,90",
  PRECO_ATUAL: "R$ 27,90",
  PARCELAMENTO: "Pagamento único",

  PRECO_BASICO_ANTERIOR: "R$ 59,90",
  PRECO_BASICO_ATUAL: "R$ 10,00",

  // Mapeamento de imagens e mockups do produto
  IMAGES: {
    HERO_MOCKUP: "/images/mickuo_11zon.png",           // Mockup principal do dispositivo/livro aberto
    HERO_MAP_PAGE_1: "",       // Página 1 flutuando ao fundo
    HERO_MAP_PAGE_2: "",       // Página 2 flutuando ao fundo
    HERO_MAP_PAGE_3: "",       // Página 3 flutuando ao fundo
    
    // Carrossel de demonstração e Mapas Visuais
    LINGUAGENS_01: "/images/lingiagens  (1)_11zon.png",
    LINGUAGENS_02: "/images/lingiagens  (2)_11zon.png",
    LINGUAGENS_03: "/images/lingiagens  (3)_11zon.png",
    LINGUAGENS_04: "/images/lingiagens  (4)_11zon.png",
    LINGUAGENS_05: "/images/lingiagens  (5)_11zon.png",
    LINGUAGENS_06: "/images/lingiagens  (6)_11zon.png",

    MATEMATICA_01: "/images/Juros simples_ crescimento linear no ENEM_1_11zon.png",
    MATEMATICA_02: "/images/Percentagem_ parte de cada 100_2_11zon.png",
    MATEMATICA_03: "/images/MMC e MDC_ ciclos ou grupos__3_11zon.png",
    MATEMATICA_04: "/images/Notação científica para o ENEM_4.png",
    MATEMATICA_05: "/images/Proporção_ razões em equilíbrio_5.png",
    MATEMATICA_06: "/images/Razão_ comparar, dividir e simplificar_6.png",

    // Seção Antes x Depois
    ANTES_MAPA_EXEMPLO: "/images/antes_11zon.png",     // Página tradicional densa / antes
    DEPOIS_MAPA_EXEMPLO: "/images/depois_11zon.png",   // Página real demonstrando clareza visual

    // Bônus
    REDACAO_MOCKUP: "/images/redação-removebg-preview.png",     // Bônus 1 - Redação
    BONUS_EXERCICIOS_MOCKUP: "/images/exercicios-removebg-preview.png", // Bônus 2 - 50 Exercícios de Fixação
    PLANO_REVISAO_MOCKUP: "/images/revisao-removebg-preview.png",  // Bônus 3 - Plano de Revisão

    // Oferta
    OFERTA_MOCKUP_PRINCIPAL: "/images/mickuo_11zon.png", // Mockup completo do pacote
  }
};
