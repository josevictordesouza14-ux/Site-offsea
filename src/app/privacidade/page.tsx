import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Privacidade", alternates: { canonical: "/privacidade" } };

export default function Privacy() {
  return <main id="conteudo" className="privacy-page container prose"><p className="eyebrow">Informações do site</p><h1>Privacidade</h1><p>Esta página explica como funciona o contato com a OFFSEA por este site.</p><h2>Solicitação de cotação</h2><p>Os botões de cotação abrem o WhatsApp com uma sugestão de mensagem. Você pode editar o texto e decide se deseja enviá-lo. Não há formulário de coleta de dados pessoais neste site.</p><h2>Contato com a OFFSEA</h2><p>Ao enviar uma mensagem pelo WhatsApp ou por e-mail, as informações compartilhadas são recebidas pela equipe comercial para atender à sua solicitação e tratar do fornecimento de materiais. Compartilhe apenas as informações necessárias à cotação.</p><h2>Serviços externos</h2><p>Os links para WhatsApp abrem um serviço externo, que possui suas próprias condições de uso e privacidade. A infraestrutura de hospedagem também pode registrar informações técnicas de acesso necessárias para entregar e proteger o site.</p><h2>Cookies e medição</h2><p>Esta versão do site não instala ferramentas de publicidade ou análise de audiência e não usa cookies próprios para acompanhar sua navegação.</p><h2>Dúvidas e solicitações</h2><p>Entre em contato pelo e-mail <a href={`mailto:${company.email}`}>{company.email}</a>.</p></main>;
}
