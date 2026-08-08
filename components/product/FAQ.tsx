"use client";

import { autonomoProContent } from "@/data/products";

export function FAQ() {
  return (
    <div className="faq-list">
      {autonomoProContent.faq.map((item, index) => (
        <details className="faq-item" key={item.question} open={index === 0}>
          <summary>
            <span>{item.question}</span>
            <span aria-hidden="true" className="faq-item__icon">+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
