"use client";

import { useState } from "react";
import { CircleDot, Gauge, Zap, Cog, Waves, Flame, Anchor, Radio, Fan, Circle, Package, Filter, LifeBuoy, ChevronDown, ChevronUp } from "lucide-react";
import { productLines, type ProductGroup } from "@/lib/products";

const icons = { valve: CircleDot, gauge: Gauge, electric: Zap, pump: Cog, hydraulic: Waves, fire: Flame, crane: Anchor, radio: Radio, turbine: Fan, fan: Fan, seal: Circle, load: Package, filter: Filter, safety: LifeBuoy };
const groups = ["Todas as linhas", "Mecânica", "Elétrica e automação", "Operação e segurança"] as const;

export default function ProductCatalog() {
  const [group, setGroup] = useState<ProductGroup | "Todas as linhas">("Todas as linhas");
  const [expanded, setExpanded] = useState(false);
  const filtered = productLines.filter(line => group === "Todas as linhas" || line.group === group);
  const visible = expanded ? filtered : filtered.slice(0, 6);
  return <section className="section products" id="produtos" aria-labelledby="products-title">
    <div className="container">
      <div className="section-heading"><div><p className="eyebrow">O QUE FORNECEMOS</p><h2 id="products-title">Da peça essencial<br />ao conjunto completo.</h2></div><p>Linhas de fornecimento para manutenção, reposição e projetos. Envie a especificação e consulte nossa equipe.</p></div>
      <div className="product-filters" aria-label="Filtrar linhas de fornecimento">{groups.map(item => <button key={item} type="button" className={group === item ? "selected" : ""} aria-pressed={group === item} onClick={() => { setGroup(item); setExpanded(false); }}>{item}</button>)}</div>
      <p className="sr-only" aria-live="polite">{filtered.length} linhas de fornecimento. Exibindo {visible.length}.</p>
      <div className="product-grid" id="product-list">
        {visible.map(line => {
          const Icon = icons[line.icon as keyof typeof icons];
          return <article className="product-card" key={line.title}>
            <div className="product-card-top"><Icon size={28} strokeWidth={1.45} aria-hidden="true" /><span>{String(productLines.indexOf(line) + 1).padStart(2, "0")}</span></div>
            <h3>{line.title}</h3><p>{line.description}</p>
            <ul aria-label="Exemplos de materiais">{line.examples.map(example => <li key={example}>{example}</li>)}</ul>
          </article>;
        })}
      </div>
      <div className="catalog-bottom"><p>Não encontrou o material que procura? <a href="#cotacao">Envie sua especificação.</a></p>{filtered.length > 6 && <button type="button" className="button button-outline" aria-expanded={expanded} aria-controls="product-list" onClick={() => setExpanded(!expanded)}>{expanded ? "Mostrar menos" : `Ver todas as ${filtered.length} linhas`}{expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</button>}</div>
    </div>
  </section>;
}
