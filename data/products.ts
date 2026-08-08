export type ProductInterest =
  | "orcamentos-cobrancas"
  | "agenda-confirmacoes"
  | "autonomo-pro";

export interface ProductOffering {
  readonly id: ProductInterest;
  readonly title: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly featured: boolean;
}

export interface ProductFaqItem {
  readonly question: string;
  readonly answer: string;
}

export const productInterestOptions: readonly {
  readonly value: ProductInterest;
  readonly label: string;
}[] = [
  { value: "orcamentos-cobrancas", label: "Orçamentos & Cobranças" },
  { value: "agenda-confirmacoes", label: "Agenda & Confirmações" },
  { value: "autonomo-pro", label: "Autônomo Pro" },
];

export const productOfferings: readonly ProductOffering[] = [
  {
    id: "orcamentos-cobrancas",
    title: "Orçamentos & Cobranças",
    description:
      "Organize clientes, serviços, orçamentos, PDFs, pagamentos e valores pendentes.",
    features: [
      "Clientes",
      "Serviços",
      "Orçamentos",
      "PDF",
      "Pagamentos",
      "Valores pendentes",
    ],
    featured: false,
  },
  {
    id: "agenda-confirmacoes",
    title: "Agenda & Confirmações",
    description:
      "Centralize horários, agendamentos, confirmações, reagendamentos e lembretes.",
    features: [
      "Horários disponíveis",
      "Agendamentos",
      "Confirmações",
      "Reagendamentos",
      "Lembretes",
    ],
    featured: false,
  },
  {
    id: "autonomo-pro",
    title: "Autônomo Pro",
    description:
      "A visão completa do negócio, reunindo todos os recursos em um painel unificado e uma página profissional.",
    features: [
      "Todos os recursos",
      "Painel unificado",
      "Página profissional",
      "Visão completa do negócio",
    ],
    featured: true,
  },
];

export const autonomoProContent = {
  status: "Em desenvolvimento",
  hero: {
    title:
      "Organize clientes, orçamentos, cobranças e agendamentos em um só lugar.",
    description:
      "Uma plataforma em desenvolvimento para ajudar profissionais autônomos a trabalhar com mais organização, profissionalismo e controle.",
  },
  problems: [
    "Clientes espalhados em conversas",
    "Orçamentos feitos manualmente",
    "Cobranças esquecidas",
    "Horários desorganizados",
    "Faltas e cancelamentos",
    "Falta de controle financeiro",
  ],
  benefits: [
    "Economizar tempo",
    "Transmitir mais profissionalismo",
    "Reduzir esquecimentos",
    "Controlar valores a receber",
    "Organizar informações",
    "Acessar pelo computador ou celular",
  ],
  howItWorks: [
    "Cadastre seus serviços.",
    "Organize clientes e atendimentos.",
    "Acompanhe agenda, orçamentos e pagamentos.",
  ],
  faq: [
    {
      question: "A plataforma já está disponível?",
      answer:
        "Ainda não. O produto está em desenvolvimento, e a lista de espera reúne pessoas interessadas em acompanhar os próximos testes.",
    },
    {
      question: "Preciso instalar alguma coisa?",
      answer:
        "A proposta é acessar a plataforma pelo navegador. Os detalhes da experiência serão comunicados durante o desenvolvimento.",
    },
    {
      question: "Funcionará pelo celular?",
      answer:
        "A experiência está sendo planejada para funcionar bem no computador e no celular.",
    },
    {
      question: "Para quais profissionais ela serve?",
      answer:
        "Para profissionais autônomos que querem organizar clientes, atendimentos, orçamentos e cobranças em um só lugar.",
    },
    {
      question: "Quanto custará?",
      answer:
        "Os planos e valores ainda serão definidos e comunicados antes do lançamento.",
    },
    {
      question: "Como participar dos testes?",
      answer:
        "Entre na lista de espera para demonstrar interesse e receber novidades sobre as próximas etapas.",
    },
  ] satisfies readonly ProductFaqItem[],
} as const;

export const dashboardDemo = {
  label: "Demonstração visual",
  title: "Visão geral",
  metrics: [
    { label: "Total a receber", value: "R$ 3.240,00" },
    { label: "Orçamentos aguardando aprovação", value: "05" },
    { label: "Próximos agendamentos", value: "04" },
  ],
  recentClients: ["Cliente demo 01", "Cliente demo 02", "Cliente demo 03"],
  chartLabel: "Evolução mensal",
} as const;

export function isProductInterest(value: string): value is ProductInterest {
  return productInterestOptions.some((option) => option.value === value);
}
