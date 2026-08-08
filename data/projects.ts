export type ProjectStatus = "em-desenvolvimento" | "planejado" | "concluido";
export type ProjectAccent = "violet" | "blue" | "cyan";

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly status: ProjectStatus;
  /** A future local image path; `null` means the UI should use its CSS visual. */
  readonly image: string | null;
  /** Only render this CTA when a real repository URL is available. */
  readonly githubUrl: string | null;
  /** A live demo or an internal project landing page, when available. */
  readonly demoUrl: string | null;
  readonly featured: boolean;
  readonly accent: ProjectAccent;
  readonly problem: string;
  readonly features: readonly string[];
}

export const projectStatusLabels: Record<ProjectStatus, string> = {
  "em-desenvolvimento": "Em desenvolvimento",
  planejado: "Planejado",
  concluido: "Concluído",
};

/**
 * Edit this array to update the portfolio cards. URLs intentionally remain
 * `null` until a repository or public demo exists, so the UI can avoid broken
 * buttons.
 */
export const projects: readonly Project[] = [
  {
    slug: "autonomo-pro",
    title: "Autônomo Pro",
    description:
      "Uma plataforma modular para ajudar profissionais autônomos a organizar clientes, orçamentos, cobranças e agendamentos.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Next.js"],
    status: "em-desenvolvimento",
    image: null,
    githubUrl: null,
    demoUrl: "/autonomo-pro",
    featured: true,
    accent: "violet",
    problem:
      "Centralizar tarefas que costumam ficar espalhadas entre conversas, planilhas e anotações.",
    features: [
      "Cadastro de clientes",
      "Criação de orçamentos",
      "Geração de PDF",
      "Controle de cobranças",
      "Agenda e confirmação de horários",
      "Painel unificado",
      "Página profissional",
    ],
  },
  {
    slug: "api-de-pedidos",
    title: "API de Pedidos",
    description:
      "Uma API REST para organizar usuários, pedidos e autenticação com foco em boas práticas de backend.",
    technologies: ["Python", "FastAPI", "API REST", "Testes automatizados"],
    status: "em-desenvolvimento",
    image: null,
    githubUrl: null,
    demoUrl: null,
    featured: false,
    accent: "blue",
    problem:
      "Estruturar o fluxo de pedidos de forma segura, testável e fácil de evoluir.",
    features: ["Autenticação", "Usuários", "Pedidos", "Testes automatizados"],
  },
  {
    slug: "sistema-backend-java",
    title: "Sistema Backend em Java",
    description:
      "Um backend em Java pensado para explorar arquitetura em camadas, persistência e APIs REST.",
    technologies: ["Java", "Spring Boot", "API REST", "Banco de dados"],
    status: "em-desenvolvimento",
    image: null,
    githubUrl: null,
    demoUrl: null,
    featured: false,
    accent: "cyan",
    problem:
      "Praticar uma base organizada para serviços Java que precisam crescer com clareza.",
    features: [
      "Arquitetura em camadas",
      "API REST",
      "Banco de dados",
      "Autenticação",
    ],
  },
  {
    slug: "automacao-com-python",
    title: "Automação com Python",
    description:
      "Uma automação voltada ao processamento de arquivos e geração de relatórios para reduzir tarefas repetitivas.",
    technologies: ["Python", "Processamento de arquivos", "Relatórios"],
    status: "em-desenvolvimento",
    image: null,
    githubUrl: null,
    demoUrl: null,
    featured: false,
    accent: "violet",
    problem:
      "Diminuir trabalho manual em rotinas repetitivas de organização e consolidação de informações.",
    features: [
      "Processamento de arquivos",
      "Relatórios",
      "Redução de tarefas repetitivas",
    ],
  },
];

export const featuredProject: Project = projects[0];
