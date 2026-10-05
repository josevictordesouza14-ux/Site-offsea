import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ProductCatalog from "@/components/ProductCatalog";
import { company, whatsappUrl } from "@/lib/company";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const { hero, contact } = siteContent;
  return (
    <main id="conteudo">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />{hero.label}</p>
          <h1 id="hero-title">{hero.title[0]}<br /><span>{hero.title[1]}</span></h1>
          <p className="hero-description">{hero.description}</p>
          <a className="button button-dark" href="#cotacao">{hero.action}<ArrowUpRight size={19} aria-hidden="true" /></a>
          <a className="hero-explore" href="#produtos"><span className="round-icon"><ArrowDown size={17} aria-hidden="true" /></span>Conheça nossas linhas</a>
        </div>
        <div className="hero-visual">
          <Image src="/images/hero-offshore.webp" alt="Navio e guindastes em uma operação portuária" fill sizes="(max-width: 760px) 100vw, 48vw" loading="eager" fetchPriority="high" />
          <div className="photo-caption"><span>OFFSHORE & ONSHORE</span><span>Conectando sua operação.</span></div>
        </div>
      </section>
      <ProductCatalog />
      <section id="cotacao" className="contact-section container" aria-labelledby="contact-title">
        <div className="contact-panel" id="contato">
          <div><p className="eyebrow">{contact.label}</p><h2 id="contact-title">{contact.title}</h2><p className="contact-description">{contact.description}</p></div>
          <div className="contact-actions">
            <a className="button button-mint" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{contact.action}<ArrowUpRight size={19} aria-hidden="true" /></a>
            <a className="contact-email" href={`mailto:${company.email}`}>{company.email}<ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="contact-phone" href={`tel:${company.phoneHref}`}>{company.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
