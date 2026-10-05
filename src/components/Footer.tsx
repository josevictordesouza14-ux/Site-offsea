import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { company, whatsappUrl } from "@/lib/company";

export default function Footer() {
  return <footer className="footer" id="contato">
    <div className="container footer-main">
      <div className="footer-brand"><Link href="/" aria-label="OFFSEA — página inicial"><img src="/images/offsea-logo.svg" width="185" height="62" alt="OFFSEA" /></Link><p>Os materiais certos.<br />Uma operação em movimento.</p></div>
      <div><h2>Explore</h2><Link href="/">Início</Link><Link href="/quemsomos">Quem somos</Link><Link href="/#produtos">Linhas de fornecimento</Link><Link href="/#cotacao">Solicitar cotação</Link></div>
      <div className="footer-contact"><h2>Fale com a OFFSEA</h2><a href={`mailto:${company.email}`}><Mail size={17} aria-hidden="true" />{company.email}</a><a href={`tel:${company.phoneHref}`}><Phone size={17} aria-hidden="true" />{company.phone}</a><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Atendimento pelo WhatsApp</a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {company.legalName}</span><Link href="/privacidade">Privacidade</Link></div>
  </footer>;
}
