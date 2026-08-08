import { featuredProject, projectStatusLabels } from "@/data/projects";
import { productOfferings } from "@/data/products";
import { DashboardMockup } from "@/components/product/DashboardMockup";
import { GradientButton } from "@/components/ui/GradientButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function FeaturedProject() {
  return (
    <article className="featured-project">
      <div className="featured-project__intro">
        <div>
          <StatusBadge>{projectStatusLabels[featuredProject.status]}</StatusBadge>
          <p className="featured-project__label">Projeto em destaque</p>
          <h3>{featuredProject.title}</h3>
          <p className="featured-project__description">{featuredProject.description}</p>
        </div>
        <div className="featured-project__actions">
          <GradientButton href="/autonomo-pro">Conhecer o produto</GradientButton>
          <a className="text-link" href="#contato">Quero acompanhar <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div className="featured-project__showcase">
        <DashboardMockup variant="portfolio" />
        <div className="featured-project__callout">
          <span className="callout-spark" aria-hidden="true">✦</span>
          <p>Construído para substituir o improviso por clareza.</p>
        </div>
      </div>

      <div className="featured-project__details">
        <div className="featured-project__problem">
          <p className="detail-label">Problema que resolve</p>
          <p>{featuredProject.problem}</p>
        </div>
        <div>
          <p className="detail-label">Funcionalidades planejadas</p>
          <ul className="feature-list">
            {featuredProject.features.map((feature) => (
              <li key={feature}><span aria-hidden="true">✦</span>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="detail-label">Tecnologias planejadas</p>
          <ul className="tag-list tag-list--large">
            {featuredProject.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="featured-project__offers">
        {productOfferings.map((offering) => (
          <div className={`offer-strip ${offering.featured ? "offer-strip--featured" : ""}`} key={offering.id}>
            <p>{offering.title}</p>
            <span>{offering.features.slice(0, 3).join(" · ")}</span>
            {offering.featured ? <b>visão completa ↗</b> : null}
          </div>
        ))}
      </div>
    </article>
  );
}
