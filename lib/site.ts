export const siteConfig = {
  name: "Victor.dev",
  description:
    "Portfólio de Victor, desenvolvedor focado em APIs, automações, sistemas web e produtos digitais.",
  /**
   * Replace with the definitive domain before public launch when it differs.
   * Keeping it central avoids duplicating the base URL across metadata files.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://victor.dev",
} as const;
