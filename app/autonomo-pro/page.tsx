import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DashboardMockup } from "@/components/product/DashboardMockup";
import { FAQ } from "@/components/product/FAQ";
import { ProductCard } from "@/components/product/ProductCard";
import { WaitlistForm } from "@/components/product/WaitlistForm";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { autonomoProContent, productOfferings } from "@/data/products";

export const metadata: Metadata = {
  title: "Autônomo Pro | Gestão para Profissionais Autônomos",
  description:
    "Uma plataforma em desenvolvimento para ajudar profissionais autônomos a organizar clientes, orçamentos, cobranças e agendamentos.",
  openGraph: {
    title: "Autônomo Pro | Gestão para Profissionais Autônomos",
    description:
      "Organize clientes, orçamentos, cobranças e agendamentos em um só lugar.",
  },
};

export default function AutonomoProPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Header />
      <main className="product-page" id="main-content">
        <section className="product-hero section">
          <div className="container product-hero__grid">
            <div className="product-hero__content">
              <StatusBadge>{autonomoProContent.status}</StatusBadge>
              <p className="eyebrow"><span aria-hidden="true" className="eyebrow__line" />gestão simples para quem faz acontecer</p>
              <h1>{autonomoProContent.hero.title}</h1>
              <p>{autonomoProContent.hero.description}</p>
              <div className="hero__actions">
                <GradientButton arrow href="#lista-espera">Entrar na lista de espera</GradientButton>
                <GradientButton href="#solucoes" variant="secondary">Conhecer as soluções</GradientButton>
              </div>
              <p className="product-hero__note"><span aria-hidden="true">✦</span> Sem promessas vazias: uma primeira versão em desenvolvimento, guiada por problemas reais.</p>
            </div>
            <div className="product-hero__visual">
              <DashboardMockup />
              <span aria-hidden="true" className="product-hero__glow product-hero__glow--one" />
              <span aria-hidden="true" className="product-hero__glow product-hero__glow--two" />
            </div>
          </div>
        </section>

        <section className="problem-section section">
          <div className="container">
            <SectionHeading
              align="center"
              description="Quando as informações ficam espalhadas, a rotina perde tempo e o cliente percebe. O Autônomo Pro nasce para reunir o essencial."
              eyebrow="o problema"
              title="Seu trabalho não deveria depender da memória."
            />
            <div className="problem-grid">
              {autonomoProContent.problems.map((problem, index) => (
                <article className="problem-card" key={problem}>
                  <span>0{index + 1}</span>
                  <p>{problem}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="products-section section" id="solucoes">
          <div className="container">
            <SectionHeading
              description="Comece pelo ponto que mais trava sua operação ou conecte tudo em uma única visão."
              eyebrow="soluções modulares"
              title="Um produto que cresce com a sua rotina."
            />
            <div className="product-offering-grid">
              {productOfferings.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>

        <section className="benefits section">
          <div className="container benefits__layout">
            <div className="benefits__visual">
              <span className="benefits__ring benefits__ring--one" />
              <span className="benefits__ring benefits__ring--two" />
              <div><span>menos</span><strong>caos.</strong><span>mais clareza.</span></div>
            </div>
            <div>
              <SectionHeading
                description="O objetivo não é adicionar uma nova tarefa. É abrir espaço para você cuidar melhor do trabalho e de quem confia nele."
                eyebrow="resultados"
                title="Controle para trabalhar com mais leveza."
              />
              <ul className="benefit-list">
                {autonomoProContent.benefits.map((benefit) => (
                  <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="how-it-works section">
          <div className="container">
            <SectionHeading
              align="center"
              eyebrow="como funciona"
              title="Comece em três passos claros."
            />
            <ol className="how-it-works__list">
              {autonomoProContent.howItWorks.map((step, index) => (
                <li key={step}>
                  <span>0{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="waitlist-section section" id="lista-espera">
          <div className="container waitlist-section__layout">
            <div className="waitlist-section__copy">
              <p className="eyebrow"><span aria-hidden="true" className="eyebrow__line" />lista de espera</p>
              <h2>Ajude a construir uma ferramenta que faça sentido para você.</h2>
              <p>Conte o que mais dificulta sua rotina hoje. Seu interesse ajuda a priorizar os primeiros testes e módulos do Autônomo Pro.</p>
              <div className="waitlist-section__assurance">
                <span aria-hidden="true">↗</span>
                <p>Produto em desenvolvimento. Sem cobrança e sem compromisso nesta etapa.</p>
              </div>
            </div>
            <div className="waitlist-section__form">
              <WaitlistForm />
            </div>
          </div>
        </section>

        <section className="faq-section section">
          <div className="container faq-section__layout">
            <SectionHeading
              description="Respostas honestas sobre o estágio atual do produto."
              eyebrow="perguntas frequentes"
              title="Clareza desde o início."
            />
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
