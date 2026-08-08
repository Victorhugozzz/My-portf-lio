import Image from "next/image";

import { projectStatusLabels, type Project } from "@/data/projects";
import { GradientButton } from "@/components/ui/GradientButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__visual">
        {project.image ? (
          <Image
            alt={`Prévia do projeto ${project.title}`}
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
            src={project.image}
          />
        ) : (
          <div aria-hidden="true" className="project-card__placeholder">
            <span className="project-card__placeholder-grid" />
            <span className="project-card__placeholder-orb" />
            <span className="project-card__placeholder-line project-card__placeholder-line--one" />
            <span className="project-card__placeholder-line project-card__placeholder-line--two" />
            <span className="project-card__placeholder-code">{"{ }"}</span>
          </div>
        )}
        <StatusBadge tone={project.accent === "cyan" ? "blue" : "violet"}>
          {projectStatusLabels[project.status]}
        </StatusBadge>
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul aria-label={`Tecnologias de ${project.title}`} className="tag-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-card__footer">
          {project.demoUrl ? (
            <GradientButton arrow href={project.demoUrl} variant="quiet">
              {project.slug === "autonomo-pro" ? "Conhecer produto" : "Ver projeto"}
            </GradientButton>
          ) : (
            <span className="project-card__soon">Detalhes em breve</span>
          )}
          {project.githubUrl ? (
            <GradientButton external href={project.githubUrl} variant="quiet">
              GitHub
            </GradientButton>
          ) : null}
        </div>
      </div>
    </article>
  );
}
