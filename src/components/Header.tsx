"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    }
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [open]);
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="OFFSEA — página inicial" onClick={() => setOpen(false)}><Image src="/images/offsea-logo.svg" alt="OFFSEA" width={150} height={50} /></Link>
        <nav className="desktop-nav" aria-label="Navegação principal"><Link href="/#produtos">Nossas linhas</Link><Link href="/quemsomos" aria-current={pathname === "/quemsomos" ? "page" : undefined}>Quem somos</Link></nav>
        <Link className="nav-contact" href="/#cotacao">Vamos conversar<ArrowUpRight size={17} aria-hidden="true" /></Link>
        <button ref={toggle} className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação no celular" hidden={!open} onClick={() => setOpen(false)}><Link href="/">Início</Link><Link href="/#produtos">Nossas linhas</Link><Link href="/quemsomos">Quem somos</Link><Link href="/#cotacao">Vamos conversar<ArrowUpRight size={17} aria-hidden="true" /></Link></nav>
    </header>
  </>;
}
