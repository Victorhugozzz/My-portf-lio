import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de Victor em APIs, backend, automações e produtos web.",
};

export default function ProjectsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Header />
      <main className="inner-page" id="main-content">
        <section className="page-hero section">
          <div className="container">
            <p className="eyebrow"><span aria-hidden="true" className="eyebrow__line" />projetos</p>
            <h1>Laboratórios onde a ideia ganha estrutura.</h1>
            <p>Uma coleção inicial de projetos focados em backend, APIs, automação e produtos digitais — todos em evolução contínua.</p>
            <Link className="text-link" href="/#contato">Tem uma ideia para conversar? <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
        <section className="section projects-page-list">
          <div className="container project-grid project-grid--full">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
