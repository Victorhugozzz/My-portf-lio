import type { Metadata } from "next";

import { PointerAura } from "@/components/ui/PointerAura";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Victor | Desenvolvedor Python, Java e Web",
    template: "%s | Victor.dev",
  },
  description: siteConfig.description,
  keywords: [
    "Victor",
    "desenvolvedor Python",
    "desenvolvedor Java",
    "APIs",
    "automação",
    "sistemas web",
    "Autônomo Pro",
  ],
  openGraph: {
    title: "Victor | Desenvolvedor Python, Java e Web",
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og.png",
        width: 1800,
        height: 1013,
        alt: "Victor.dev — Desenvolvo sistemas, APIs e produtos digitais.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor | Desenvolvedor Python, Java e Web",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <PointerAura />
        {children}
      </body>
    </html>
  );
}
