export type ProductGroup = "Mecânica" | "Elétrica e automação" | "Operação e segurança";
export type ProductLine = { title: string; group: ProductGroup; description: string; examples: string[]; icon: string };

export const productLines: ProductLine[] = [
  { title: "Válvulas e atuadores", group: "Mecânica", description: "Componentes para controle de fluxo e manutenção de sistemas industriais.", examples: ["Kits de reparo", "Vedações", "Posicionadores"], icon: "valve" },
  { title: "Instrumentação e automação", group: "Elétrica e automação", description: "Medição, controle e acionamento para acompanhar cada etapa da operação.", examples: ["Sensores", "Transmissores", "CLPs"], icon: "gauge" },
  { title: "Elétricos e eletrônicos", group: "Elétrica e automação", description: "Materiais para distribuição, proteção e alimentação elétrica.", examples: ["Cabos", "Disjuntores", "Fontes"], icon: "electric" },
  { title: "Bombas e compressores", group: "Mecânica", description: "Peças e conjuntos para manutenção de equipamentos de bombeamento e compressão.", examples: ["Selos mecânicos", "Rotores", "Rolamentos"], icon: "pump" },
  { title: "Hidráulica e pneumática", group: "Mecânica", description: "Conexões e componentes para sistemas de potência e ar comprimido.", examples: ["Mangueiras", "Cilindros", "Reguladores"], icon: "hydraulic" },
  { title: "Combate a incêndio", group: "Operação e segurança", description: "Materiais para manutenção dos sistemas de detecção e combate a incêndio.", examples: ["Detectores", "Mangueiras", "Sprinklers"], icon: "fire" },
  { title: "Elevação offshore", group: "Operação e segurança", description: "Componentes para guindastes e sistemas de elevação em operações offshore.", examples: ["Redutores", "Freios", "Cabos de aço"], icon: "crane" },
  { title: "Comunicação e navegação", group: "Elétrica e automação", description: "Equipamentos e acessórios para comunicação e orientação marítima.", examples: ["Rádios VHF/UHF", "Antenas", "GPS"], icon: "radio" },
  { title: "Turbinas industriais", group: "Mecânica", description: "Componentes sobressalentes para manutenção de turbinas a gás e a vapor.", examples: ["Palhetas", "Eixos", "Rolamentos"], icon: "turbine" },
  { title: "Ventilação e troca térmica", group: "Mecânica", description: "Componentes para ventiladores, trocadores de calor e permutadores.", examples: ["Hélices", "Serpentinas", "Mancais"], icon: "fan" },
  { title: "Materiais de vedação", group: "Mecânica", description: "Soluções de vedação conforme a aplicação e a especificação do material.", examples: ["Juntas", "Anéis O-ring", "Retentores"], icon: "seal" },
  { title: "Movimentação de cargas", group: "Operação e segurança", description: "Acessórios para içamento e movimentação de materiais.", examples: ["Manilhas", "Cintas", "Olhais"], icon: "load" },
  { title: "Filtros e elementos filtrantes", group: "Mecânica", description: "Elementos para sistemas hidráulicos, de ar comprimido e filtração industrial.", examples: ["Cartuchos", "Coalescentes", "Pré-filtros"], icon: "filter" },
  { title: "Baleeiras e salvatagem", group: "Operação e segurança", description: "Peças para manutenção de equipamentos de emergência e segurança marítima.", examples: ["Baleeiras", "Sistemas de emergência", "Reposição"], icon: "safety" },
];
