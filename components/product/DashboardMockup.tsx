import { dashboardDemo } from "@/data/products";

interface DashboardMockupProps {
  readonly variant?: "portfolio" | "product";
}

const chartHeights = ["chart-bar--one", "chart-bar--two", "chart-bar--three", "chart-bar--four", "chart-bar--five", "chart-bar--six", "chart-bar--seven"];

export function DashboardMockup({ variant = "product" }: DashboardMockupProps) {
  return (
    <div className={`dashboard-mockup dashboard-mockup--${variant}`}>
      <div className="dashboard-mockup__sidebar">
        <div className="dashboard-mockup__brand">a.</div>
        <div className="dashboard-mockup__nav">
          <span className="dashboard-mockup__nav-item dashboard-mockup__nav-item--active" />
          <span className="dashboard-mockup__nav-item" />
          <span className="dashboard-mockup__nav-item" />
          <span className="dashboard-mockup__nav-item" />
          <span className="dashboard-mockup__nav-item" />
        </div>
        <span className="dashboard-mockup__avatar">M</span>
      </div>

      <div className="dashboard-mockup__main">
        <div className="dashboard-mockup__topbar">
          <div>
            <p className="dashboard-mockup__demo">{dashboardDemo.label}</p>
            <h3>{dashboardDemo.title}</h3>
          </div>
          <span className="dashboard-mockup__month">Março 2026 <b>⌄</b></span>
        </div>

        <div className="dashboard-mockup__metrics">
          {dashboardDemo.metrics.map((metric, index) => (
            <div className="dashboard-metric" key={metric.label}>
              <span className={`metric-icon metric-icon--${index + 1}`} aria-hidden="true" />
              <p>{metric.label}</p>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>

        <div className="dashboard-mockup__content">
          <div className="dashboard-chart">
            <div className="dashboard-chart__heading">
              <p>{dashboardDemo.chartLabel}</p>
              <span>Recebimentos</span>
            </div>
            <div aria-label="Gráfico demonstrativo de evolução mensal" className="dashboard-chart__bars" role="img">
              {chartHeights.map((height, index) => (
                <span className={`chart-bar ${height}`} key={`bar-${index}`} />
              ))}
            </div>
            <div className="dashboard-chart__labels">
              <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
            </div>
          </div>

          <div className="dashboard-clients">
            <div className="dashboard-clients__heading">
              <p>Clientes recentes</p>
              <span>Ver todos</span>
            </div>
            {dashboardDemo.recentClients.map((client, index) => (
              <div className="dashboard-client" key={client}>
                <span className={`client-avatar client-avatar--${index + 1}`}>
                  {client.split(" ").map((part) => part[0]).join("")}
                </span>
                <div><strong>{client}</strong><span>Atendimento confirmado</span></div>
                <b>{index === 1 ? "14:30" : index === 2 ? "Amanhã" : "Hoje"}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
