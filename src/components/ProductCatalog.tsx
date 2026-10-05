import { ArrowUpRight, ChevronDown } from "lucide-react";
import { productLines, type ProductGroup } from "@/lib/products";
import { siteContent } from "@/lib/site-content";
import { whatsappUrl } from "@/lib/company";

const groups: ProductGroup[] = ["Mecânica", "Elétrica e automação", "Operação e segurança"];

export default function ProductCatalog() {
  const { catalog } = siteContent;
  return (
    <section id="produtos" className="catalog-section container" aria-labelledby="catalog-title">
      <div className="catalog-intro"><p className="eyebrow">{catalog.label}</p><h2 id="catalog-title">{catalog.title}</h2><p>{catalog.description}</p></div>
      <div className="catalog-groups">
        {groups.map((group, index) => (
          <details className="catalog-group" name="product-groups" key={group}>
            <summary><span className="group-number">0{index + 1}</span><span className="group-name">{group}</span><ChevronDown className="group-chevron" size={21} aria-hidden="true" /></summary>
            <ul className="product-list">
              {productLines.filter((product) => product.group === group).map((product) => (
                <li key={product.title}><a href={whatsappUrl(`Olá! Gostaria de uma cotação de ${product.title.toLocaleLowerCase("pt-BR")}.`)} target="_blank" rel="noopener noreferrer"><span>{product.title}</span><ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> — solicitar cotação no WhatsApp</span></a></li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
