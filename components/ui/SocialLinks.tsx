import { socialLinks } from "@/data/profile";

interface SocialLinksProps {
  readonly label?: string;
  readonly compact?: boolean;
}

export function SocialLinks({
  label = "Encontre Victor nas redes",
  compact = false,
}: SocialLinksProps) {
  return (
    <nav aria-label={label} className={`social-links ${compact ? "social-links--compact" : ""}`}>
      {socialLinks.map((link) => (
        <a
          className="social-link"
          href={link.href}
          key={link.network}
          rel="noreferrer"
          target="_blank"
        >
          <span aria-hidden="true" className="social-link__mark">
            {link.network === "github" ? "GH" : link.network === "instagram" ? "IG" : "in"}
          </span>
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  );
}
