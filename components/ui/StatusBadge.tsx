interface StatusBadgeProps {
  readonly children: string;
  readonly tone?: "violet" | "blue" | "muted";
}

export function StatusBadge({ children, tone = "violet" }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${tone}`}>
      <span aria-hidden="true" className="status-badge__dot" />
      {children}
    </span>
  );
}
