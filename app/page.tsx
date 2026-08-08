import Link from "next/link";

import { ContactForm } from "@/components/portfolio/ContactForm";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { HeroVisual } from "@/components/portfolio/HeroVisual";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { contactMethods, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { technologyCategories } from "@/data/technologies";

const services = [
  {
    code: "01",
    title: "APIs & backends",
    description: "Estruturas pensadas para transformar regras de negócio em serviços claros e evolutivos.",
  },
  {
    code: "02",
    title: "Automações com Python",
    description: "Fluxos para processar informações, organizar rotinas e reduzir trabalho repetitivo.",
  },
  {
    code: "03",
    title: "Sistemas web",
    description: "Interfaces e bases de produto para sair da ideia e colocar uma solução em movimento.",
  },
  {
    code: "04",
    title: "Landing pages",
    description: "Páginas objetivas para apresentar uma ideia, um produto ou um serviço com clareza.",
  },
  {
    code: "05",
    title: "Integrações",
    description: "Conexões entre ferramentas e dados para evitar retrabalho e criar fluxos mais úteis.",
  },
  {
    code: "06",
    title: "Evolução de projetos",
    description: "Apoio na manutenção, organização e próximas etapas de projetos de pequeno e médio porte.",
  },
] as const;

const processSteps = [
  ["01", "Entendimento do problema", "Mapear o contexto, as pessoas e o resultado que realmente importa."],
  ["02", "Planejamento da solução", "Definir o caminho mais simples, as prioridades e uma base sustentável."],
  ["03", "Desenvolvimento e testes", "Construir em ciclos curtos, validar os fluxos e ajustar com intenção."],
  ["04", "Entrega e evolução", "Colocar a solução em uso e enxergar o que merece evoluir depois."],
] as const;

const publicPosts = [
  ["interface", "Do rascunho ao fluxo", "Como decisões de interface deixam um produto mais direto."],
  ["backend", "Uma API começa no problema", "Organizando entidades antes de pensar na rota."],
  ["build", "Autônomo Pro: em construção", "Pequenos passos para tirar a operação do improviso."],
] as const;

function contactHref(channel: "email" | "whatsapp", value: string): string {
  if (channel === "email") {
    return "mailto:" + value;
  }

  return "https://wa.me/" + value.replace(/\D/g, "");
}

export default function Home() {
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Header />
      <main id="main-content">
        <section className="hero section" id="inicio">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow hero__eyebrow">
                <span aria-hidden="true" className="eyebrow__line" />
                {profile.hero.greeting}
              </p>
              <div className="hero__badge">
                <span aria-hidden="true">✦</span>
                {profile.hero.badge}
              </div>
              <h1>{profile.hero.title}</h1>
              <p className="hero__description">{profile.hero.description}</p>
              <div className="hero__actions">
                <GradientButton arrow href="#projetos">Ver meus projetos</GradientButton>
                <GradientButton href="/autonomo-pro" variant="secondary">
                  Conhecer o Autônomo Pro
                </GradientButton>
              </div>
              <div className="hero__social-area">
                <p>Conecte-se e acompanhe a evolução.</p>
                <SocialLinks compact />
              </div>
            </div>
            <HeroVisual portraitImage={profile.portraitImage} />
          </div>
          <div aria-hidden="true" className="hero__scroll">
            <span>explore</span><i />
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="container about__grid">
            <SectionHeading
              description={profile.about.description}
              eyebrow="sobre mim"
              title={profile.about.title}
            />
            <div className="about__highlights">
              {profile.about.highlights.map((highlight, index) => (
                <article className="about-card" key={highlight.label}>
                  <span className="about-card__number">0{index + 1}</span>
                  <p>{highlight.label}</p>
                  <h3>{highlight.value}</h3>
                  <span aria-hidden="true" className="about-card__corner" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="tecnologias-title" className="technology section">
          <div className="container">
            <SectionHeading
              description="Uma base de ferramentas que cresce junto com cada novo projeto — sem promessas de domínio que ainda não existem."
              eyebrow="tecnologias"
              title="Ferramentas para transformar ideias em sistemas."
            />
            <div className="technology__grid">
              {technologyCategories.map((category) => (
                <article className="technology-group" key={category.id}>
                  <p id={category.id}>{category.label}</p>
                  <div>
                    {category.technologies.map((technology) => (
                      <span className="technology-badge" key={technology.name}>
                        <b>{technology.shortLabel}</b>
                        {technology.name}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projetos">
          <div className="container">
            <SectionHeading
              description="Projetos em que estudo arquitetura, experiência, automação e a disciplina de transformar uma ideia em algo útil."
              eyebrow="projetos selecionados"
              title="Construindo em público, evoluindo em código."
            />
            <FeaturedProject />
            <div className="projects__heading">
              <div>
                <p className="eyebrow"><span aria-hidden="true" className="eyebrow__line" />mais em construção</p>
                <h3>Outros laboratórios de produto.</h3>
              </div>
              <Link className="text-link" href="/projetos">Ver todos os projetos <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="project-grid">
              {otherProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </div>
        </section>

        <section className="services section" id="servicos">
          <div className="container">
            <SectionHeading
              description="Estou construindo experiência por meio de projetos reais e disponível para colaborar em soluções de pequeno e médio porte."
              eyebrow="como posso colaborar"
              title="Tecnologia que respeita o tamanho do seu problema."
            />
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.code}>
                  <span className="service-card__code">{service.code}</span>
                  <span aria-hidden="true" className="service-card__spark">✦</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-card__line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process section">
          <div className="container process__layout">
            <SectionHeading
              description="Um processo direto, aberto a ajustes e orientado pela utilidade da solução."
              eyebrow="modo de trabalhar"
              title="Da pergunta certa à próxima versão."
            />
            <ol className="process-list">
              {processSteps.map(([number, title, description]) => (
                <li className="process-step" key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="public-building section" id="publico">
          <div className="container public-building__layout">
            <div className="public-building__copy">
              <p className="eyebrow"><span aria-hidden="true" className="eyebrow__line" />construindo em público</p>
              <h2>Acompanhe a construção dos projetos.</h2>
              <p>Compartilho estudos, decisões técnicas, interfaces, erros, aprendizados e a evolução do Autônomo Pro.</p>
              <GradientButton external href="https://www.instagram.com/victorhugolab/" arrow>
                Me acompanhar no Instagram
              </GradientButton>
            </div>
            <div aria-label="Prévia de conteúdos do Instagram" className="social-posts">
              {publicPosts.map(([kind, title, description], index) => (
                <article className={`social-post social-post--${index + 1}`} key={title}>
                  <div className="social-post__top"><span>@victorhugolab</span><i>•••</i></div>
                  <span className="social-post__kind">{kind}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="social-post__footer"><span>♡  ·  ↗</span><span>ver post</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="container contact__layout">
            <div className="contact__copy">
              <p className="eyebrow"><span aria-hidden="true" className="eyebrow__line" />contato</p>
              <h2>Uma ideia boa merece sair do papel.</h2>
              <p>Se você tem um projeto, um fluxo para melhorar ou uma ideia para tirar do papel, vamos conversar sobre o próximo passo.</p>
              <SocialLinks />
              <div className="contact-channels">
                {contactMethods.map((method) =>
                  method.value ? (
                    <a href={contactHref(method.channel, method.value)} key={method.channel}>
                      <span>{method.label}</span><b>↗</b>
                    </a>
                  ) : (
                    <button className="contact-channel--pending" disabled key={method.channel} title={method.placeholder} type="button">
                      <span>{method.label}</span><small>Em breve</small>
                    </button>
                  ),
                )}
              </div>
            </div>
            <div className="contact__form-wrap">
              <p className="contact__form-label">Envie uma mensagem</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
