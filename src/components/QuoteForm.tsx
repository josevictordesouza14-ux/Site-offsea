"use client";

import { type FormEvent, useState } from "react";
import { MessageCircle, Check, Mail } from "lucide-react";
import Link from "next/link";
import { company, whatsappUrl } from "@/lib/company";
import { productLines } from "@/lib/products";

export default function QuoteForm() {
  const [preparedUrl, setPreparedUrl] = useState("");
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("company") || "").trim();
    const line = String(data.get("line") || "");
    const material = String(data.get("material") || "").trim();
    if (!name || !material) { setError("Preencha seu nome e descreva o material para preparar a cotação."); return; }
    const message = ["Olá, equipe OFFSEA! Gostaria de solicitar uma cotação.", `Nome: ${name}`, business && `Empresa: ${business}`, line && `Linha: ${line}`, `Material / especificação:\n${material}`].filter(Boolean).join("\n\n");
    const url = whatsappUrl(message);
    setError(""); setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return <section className="quote-section section" id="cotacao" aria-labelledby="quote-title"><div className="container quote-grid">
    <div className="quote-copy"><p className="eyebrow">VAMOS ENCONTRAR O QUE VOCÊ PRECISA</p><h2 id="quote-title">Sua próxima<br />cotação começa<br /><span>aqui.</span></h2><p>Conte com a OFFSEA para buscar os materiais da sua operação. Compartilhe sua necessidade com nossa equipe comercial.</p><ul className="quote-tips"><li><Check size={18} aria-hidden="true" />Descrição ou código do fabricante</li><li><Check size={18} aria-hidden="true" />Quantidade e especificações técnicas</li><li><Check size={18} aria-hidden="true" />Local e prazo desejado de entrega</li></ul><a className="quote-email" href={`mailto:${company.email}`}><Mail size={20} aria-hidden="true" />{company.email}</a></div>
    <form className="quote-form" onSubmit={submit} onChange={() => { if (preparedUrl) setPreparedUrl(""); if (error) setError(""); }}>
      <h3>O que sua operação precisa?</h3><p>Preencha os dados e continue no WhatsApp.</p>
      <div className="form-row"><div className="field"><label htmlFor="name">Seu nome <span>*</span></label><input id="name" name="name" autoComplete="name" placeholder="Nome completo" maxLength={100} required /></div><div className="field"><label htmlFor="company">Empresa <span className="optional">(opcional)</span></label><input id="company" name="company" autoComplete="organization" placeholder="Nome da empresa" maxLength={150} /></div></div>
      <div className="field"><label htmlFor="line">Linha de fornecimento <span className="optional">(opcional)</span></label><select id="line" name="line" defaultValue=""><option value="">Selecione uma linha</option>{productLines.map(line => <option key={line.title}>{line.title}</option>)}<option>Outro material</option></select></div>
      <div className="field"><label htmlFor="material">Material e especificações <span>*</span></label><textarea id="material" name="material" rows={4} maxLength={3000} required placeholder="Ex.: válvula, fabricante/modelo, quantidade, aplicação e local de entrega." /></div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-cyan submit-button" type="submit"><MessageCircle size={19} aria-hidden="true" />Continuar no WhatsApp</button>
      <p className="form-note">A mensagem será preparada no WhatsApp. Você confere e confirma o envio por lá. <Link href="/privacidade">Saiba como usamos seus dados.</Link></p>
      {preparedUrl && <div className="form-success" role="status"><strong>Sua solicitação está preparada.</strong><span>Confirme o envio no WhatsApp.</span><a href={preparedUrl} target="_blank" rel="noopener noreferrer">Abrir a mensagem novamente</a></div>}
    </form>
  </div></section>;
}
