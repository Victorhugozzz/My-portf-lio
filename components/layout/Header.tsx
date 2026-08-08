"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { profile } from "@/data/profile";

function destinationFor(pathname: string, href: string): string {
  if (href.startsWith("#") && pathname !== "/") {
    return `/${href}`;
  }

  return href;
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (activeEntry?.target.id) {
          setActiveSection(activeEntry.target.id);
        }
      },
      { rootMargin: "-26% 0px -62% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link aria-label="Victor.dev — Início" className="brand" href="/">
          Victor<span>.dev</span>
        </Link>

        <nav aria-label="Navegação principal" className="desktop-nav">
          {profile.navigation.map((item) => {
            const isProduct = item.href === "/autonomo-pro";
            const sectionId = item.href.startsWith("#") ? item.href.slice(1) : "";
            const isActive = isProduct
              ? pathname === "/autonomo-pro"
              : pathname === "/" && activeSection === sectionId;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                href={destinationFor(pathname, item.href)}
                key={item.label}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="header-cta" href={pathname === "/" ? "#contato" : "/#contato"}>
          Falar comigo <span aria-hidden="true">↗</span>
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        id="mobile-navigation"
      >
        <nav aria-label="Navegação mobile">
          {profile.navigation.map((item) => (
            <Link
              className="mobile-menu__link"
              href={destinationFor(pathname, item.href)}
              key={item.label}
              onClick={closeMenu}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link
            className="button button--primary mobile-menu__cta"
            href={pathname === "/" ? "#contato" : "/#contato"}
            onClick={closeMenu}
          >
            Falar comigo
          </Link>
        </nav>
      </div>
    </header>
  );
}
