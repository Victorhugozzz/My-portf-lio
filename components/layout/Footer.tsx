import Link from "next/link";

import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Link aria-label="Victor.dev — Início" className="brand" href="/">
            Victor<span>.dev</span>
          </Link>
          <p className="site-footer__statement">
            Construindo sistemas, aprendizados e produtos digitais com intenção.
          </p>
        </div>
        <div className="site-footer__links">
          <p className="footer-label">Navegação</p>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/autonomo-pro">Autônomo Pro</Link>
          <Link href="/#contato">Contato</Link>
        </div>
        <div>
          <p className="footer-label">Vamos conversar</p>
          <SocialLinks compact />
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {year} {profile.brand}. Feito para evoluir junto.</p>
        <Link href="/autonomo-pro">Conhecer o Autônomo Pro ↗</Link>
      </div>
    </footer>
  );
}
