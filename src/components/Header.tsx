"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import { company } from "@/lib/company";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    function dismiss(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, []);
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div className="utility-bar"><div className="container utility-inner">
      <span>SUPRIMENTOS INDUSTRIAIS · OFFSHORE & ONSHORE</span>
      <div><a href={`mailto:${company.email}`}><Mail size={13} aria-hidden="true" />{company.email}</a><a href={`tel:${company.phoneHref}`}><Phone size={13} aria-hidden="true" />{company.phone}</a></div>
    </div></div>
    <header className="header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="OFFSEA — página inicial"><img src="/images/offsea-logo.svg" alt="OFFSEA" width="164" height="55" /></Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Início</Link>
          <Link href="/quemsomos" aria-current={pathname === "/quemsomos" ? "page" : undefined}>Quem somos</Link>
          <Link href="/#produtos">Produtos</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
        <Link className="button button-navy nav-quote" href="/#cotacao">Solicitar cotação</Link>
        <button className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação no celular" onClick={() => setOpen(false)}>
        <Link href="/">Início</Link><Link href="/quemsomos">Quem somos</Link><Link href="/#produtos">Produtos</Link><Link href="/#contato">Contato</Link><Link className="button button-navy" href="/#cotacao">Solicitar cotação</Link>
      </nav>}
    </header>
  </>;
}
