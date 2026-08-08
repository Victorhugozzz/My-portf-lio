export type TechnologyCategoryId =
  | "linguagens"
  | "backend"
  | "frontend"
  | "banco-de-dados"
  | "ferramentas";

export interface Technology {
  readonly name: string;
  readonly shortLabel: string;
}

export interface TechnologyCategory {
  readonly id: TechnologyCategoryId;
  readonly label: string;
  readonly technologies: readonly Technology[];
}

/**
 * A compact, categorized list for badges. It intentionally describes the
 * technologies Victor studies and uses, not arbitrary proficiency levels.
 */
export const technologyCategories: readonly TechnologyCategory[] = [
  {
    id: "linguagens",
    label: "Linguagens",
    technologies: [
      { name: "Python", shortLabel: "Py" },
      { name: "Java", shortLabel: "Java" },
      { name: "JavaScript", shortLabel: "JS" },
      { name: "TypeScript", shortLabel: "TS" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    technologies: [
      { name: "FastAPI", shortLabel: "FastAPI" },
      { name: "Spring Boot", shortLabel: "Spring" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    technologies: [
      { name: "HTML", shortLabel: "HTML" },
      { name: "CSS", shortLabel: "CSS" },
      { name: "React", shortLabel: "React" },
      { name: "Next.js", shortLabel: "Next" },
    ],
  },
  {
    id: "banco-de-dados",
    label: "Banco de dados",
    technologies: [
      { name: "PostgreSQL", shortLabel: "Postgres" },
      { name: "SQL", shortLabel: "SQL" },
    ],
  },
  {
    id: "ferramentas",
    label: "Ferramentas",
    technologies: [
      { name: "Git", shortLabel: "Git" },
      { name: "GitHub", shortLabel: "GitHub" },
      { name: "Docker", shortLabel: "Docker" },
    ],
  },
];

export const technologies: readonly Technology[] = technologyCategories.flatMap(
  (category) => category.technologies,
);
