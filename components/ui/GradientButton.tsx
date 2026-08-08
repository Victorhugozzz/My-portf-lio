import Link from "next/link";
import type { ReactNode } from "react";

interface GradientButtonProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: "primary" | "secondary" | "quiet";
  readonly className?: string;
  readonly external?: boolean;
  readonly arrow?: boolean;
}

export function GradientButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  arrow = false,
}: GradientButtonProps) {
  const classes = `button button--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <span aria-hidden="true" className="button__arrow">↗</span> : null}
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
