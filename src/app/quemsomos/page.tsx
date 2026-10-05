import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Quem somos", description: "Conheça a OFFSEA, fornecedora de materiais e equipamentos para a indústria e operações offshore e onshore.", alternates: { canonical: "/quemsomos" } };

export default function About() {
  return <main id="conteudo" className="about-page container">
    <div className="about-heading"><p className="eyebrow">Quem somos</p><h1>Próximos da sua operação.<br /><span>Do início ao fornecimento.</span></h1></div>
    <div className="about-grid"><div className="about-photo"><Image src="/images/industrial.webp" alt="Instalações industriais" fill sizes="(max-width: 760px) 100vw, 45vw" /></div><div className="about-copy"><h2>Somos a OFFSEA.</h2><p>Conectamos demandas de materiais e equipamentos a linhas de fornecimento para a indústria, construção e operações offshore e onshore.</p><p>Nosso ponto de partida é entender sua aplicação, os requisitos técnicos e o que cada projeto precisa.</p><p>Atendimento próximo. Comunicação direta. Atenção a cada especificação.</p><Link className="button button-dark" href="/#cotacao">Converse com a gente<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div>
  </main>;
}
