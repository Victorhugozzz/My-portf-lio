import type { ProductOffering } from "@/data/products";

interface ProductCardProps {
  readonly product: ProductOffering;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={`product-card ${product.featured ? "product-card--featured" : ""}`}>
      {product.featured ? <span className="product-card__flag">O ecossistema completo</span> : null}
      <div className="product-card__index" aria-hidden="true">
        {product.id === "orcamentos-cobrancas" ? "01" : product.id === "agenda-confirmacoes" ? "02" : "03"}
      </div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <ul>
        {product.features.map((feature) => (
          <li key={feature}><span aria-hidden="true">✦</span>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
