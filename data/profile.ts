export type SocialNetwork = "github" | "instagram" | "linkedin";
export type ContactChannel = "email" | "whatsapp";

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly network: SocialNetwork;
  readonly label: string;
  readonly href: string;
}

export interface ContactMethod {
  readonly channel: ContactChannel;
  readonly label: string;
  /**
   * `null` deliberately prevents the UI from rendering an invented or broken
   * contact link until Victor provides the real address or number.
   */
  readonly value: string | null;
  readonly placeholder: string;
}

export interface ProfileData {
  readonly name: string;
  readonly brand: string;
  readonly role: string;
  readonly hero: {
    readonly greeting: string;
    readonly title: string;
    readonly description: string;
    readonly badge: string;
  };
  readonly about: {
    readonly title: string;
    readonly description: string;
    readonly highlights: readonly {
      readonly label: string;
      readonly value: string;
    }[];
  };
  readonly navigation: readonly NavigationItem[];
  readonly socialLinks: readonly SocialLink[];
  readonly contactMethods: readonly ContactMethod[];
}

/**
 * All supplied public links live here. Keep unpublished contact details as
 * `null`; components should only render an actionable link when `value` exists.
 */
export const socialLinks: readonly SocialLink[] = [
  {
    network: "github",
    label: "GitHub",
    href: "https://github.com/Victorhugozzz",
  },
  {
    network: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/victorhugolab/",
  },
  {
    network: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-hugo-correa-4294881a9",
  },
];

/**
 * Replace these clearly marked placeholders before enabling the related CTAs.
 * No email address or WhatsApp number was provided in the brief.
 */
export const contactMethods: readonly ContactMethod[] = [
  {
    channel: "email",
    label: "E-mail",
    value: null,
    placeholder: "PENDENTE: adicione o e-mail profissional de Victor",
  },
  {
    channel: "whatsapp",
    label: "WhatsApp",
    value: null,
    placeholder: "PENDENTE: adicione o número de WhatsApp com DDI e DDD",
  },
];

export const profile: ProfileData = {
  name: "Victor",
  brand: "Victor.dev",
  role: "Desenvolvedor em evolução",
  hero: {
    greeting: "Olá, eu sou Victor.",
    title: "Desenvolvo sistemas, APIs e produtos digitais.",
    description:
      "Estudo Python e Java e transformo ideias em aplicações web, automações e soluções para problemas reais.",
    badge: "Construindo produtos reais",
  },
  about: {
    title: "Mais do que aprender código, estou aprendendo a construir soluções.",
    description:
      "Sou estudante e desenvolvedor focado em Python, Java, APIs, backend e desenvolvimento web. Meu objetivo é criar projetos completos, aprender boas práticas de engenharia de software e transformar alguns desses projetos em produtos reais.",
    highlights: [
      { label: "Foco atual", value: "Backend e produtos web" },
      { label: "Principais linguagens", value: "Python e Java" },
      { label: "Interesse", value: "Automações, APIs e SaaS" },
      {
        label: "Objetivo",
        value: "Desenvolver soluções reais e escaláveis",
      },
    ],
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Produto", href: "/autonomo-pro" },
    { label: "Contato", href: "#contato" },
  ],
  socialLinks,
  contactMethods,
};

export function getContactMethod(channel: ContactChannel): ContactMethod {
  const contactMethod = contactMethods.find(
    (method) => method.channel === channel,
  );

  if (!contactMethod) {
    throw new Error(`Canal de contato não configurado: ${channel}`);
  }

  return contactMethod;
}
