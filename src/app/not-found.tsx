import Link from "next/link";

export default function NotFound() { return <main id="conteudo" className="not-found container"><p className="eyebrow">PÁGINA NÃO ENCONTRADA</p><h1>Vamos voltar<br />ao caminho certo.</h1><p>O endereço pode ter mudado. Acesse a página inicial para conhecer nossas linhas de fornecimento.</p><Link href="/" className="button button-navy">Voltar ao início</Link></main>; }
