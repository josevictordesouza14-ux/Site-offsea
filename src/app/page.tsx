import Link from "next/link";
import { Anchor, Factory, HardHat, ClipboardList, SearchCheck, PackageCheck, ShieldCheck, Layers, Headphones } from "lucide-react";
import ProductCatalog from "@/components/ProductCatalog";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <main id="conteudo">
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src="/images/hero-offshore.webp" alt="Navio porta-contêineres e guindastes em terminal portuário" fetchPriority="high" width="1800" height="1011" />
      <div className="hero-shade" />
      <div className="container hero-content"><p className="eyebrow light">CONEXÃO ENTRE NECESSIDADE E SOLUÇÃO</p><h1 id="hero-title">Sua operação<br />não para.<br /><span>A OFFSEA acompanha.</span></h1><p className="hero-description">Suprimentos industriais para quem precisa de precisão na escolha e confiança no fornecimento.</p><div className="hero-actions"><Link className="button button-cyan" href="#cotacao">Solicitar cotação</Link><Link className="button button-glass" href="#produtos">Conhecer produtos</Link></div></div>
      <div className="container hero-foot"><span>INDÚSTRIA EM MOVIMENTO</span><span>OFFSHORE / ONSHORE / INDUSTRIAL</span></div>
    </section>
    <div className="sectors"><div className="container sector-grid"><div><Anchor aria-hidden="true" /><span>Offshore e marítimo</span></div><div><Factory aria-hidden="true" /><span>Indústria e energia</span></div><div><HardHat aria-hidden="true" /><span>Construção e manutenção</span></div></div></div>
    <section className="intro section"><div className="container intro-grid"><div><p className="eyebrow">A SUA OPERAÇÃO, O NOSSO FOCO</p><h2>Mais do que fornecer.<br />Entender o que importa.</h2></div><div className="intro-copy"><p>Da reposição de uma peça à lista de materiais de um projeto, cada demanda começa pela especificação certa.</p><p>A OFFSEA conecta sua empresa a materiais e equipamentos para a indústria, construção e operações offshore e onshore, com atendimento próximo em cada etapa.</p><Link className="text-link" href="/quemsomos">Conheça a OFFSEA</Link></div></div></section>
    <ProductCatalog />
    <section className="approach section"><div className="container approach-grid"><div className="approach-photo"><img src="/images/industrial.webp" alt="Infraestrutura de operação industrial" loading="lazy" width="1100" height="1000" /><div className="photo-label"><span>OFFSEA</span><p>Conectados à sua operação.</p></div></div><div className="approach-copy"><p className="eyebrow">DO PEDIDO AO FORNECIMENTO</p><h2>Um parceiro para<br />cada etapa.</h2><p className="section-description">Uma conversa direta, atenção aos detalhes e foco na sua necessidade.</p><div className="approach-points"><div><ShieldCheck aria-hidden="true" /><div><h3>Atenção à especificação</h3><p>Fabricante, modelo, aplicação e requisitos técnicos orientam a busca pelo material.</p></div></div><div><Layers aria-hidden="true" /><div><h3>Diferentes linhas, um contato</h3><p>Reúna as demandas de manutenção e projeto em uma única solicitação.</p></div></div><div><Headphones aria-hidden="true" /><div><h3>Atendimento próximo</h3><p>Fale com nossa equipe para alinhar disponibilidade, documentação e entrega.</p></div></div></div></div></div></section>
    <section className="process section"><div className="container"><div className="section-heading"><div><p className="eyebrow">SIMPLES DESDE O PRIMEIRO CONTATO</p><h2>Do que você precisa<br />ao que podemos fornecer.</h2></div><p>Três etapas para transformar sua necessidade em uma cotação.</p></div><div className="process-grid"><article><div className="process-top"><span>01</span><ClipboardList aria-hidden="true" /></div><h3>Compartilhe a demanda</h3><p>Envie a lista de materiais, quantidades, referências e requisitos da aplicação.</p></article><article><div className="process-top"><span>02</span><SearchCheck aria-hidden="true" /></div><h3>Alinhamos os detalhes</h3><p>Verificamos as especificações, a disponibilidade e as condições de fornecimento.</p></article><article><div className="process-top"><span>03</span><PackageCheck aria-hidden="true" /></div><h3>Receba sua proposta</h3><p>Avalie a cotação e combine os próximos passos com nossa equipe comercial.</p></article></div></div></section>
    <QuoteForm />
  </main>;
}
