"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, Shield, ChevronRight } from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, margin: "-100px" },
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#09192f]">
     
      {/* HERO alternando imagens */}
      <section className="relative overflow-hidden h-[80vh] flex items-center">
        {["/hero1.svg", "/hero2.svg"].map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${img}')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: i * 5 }}
          >
            {/* Overlay escuro p/ contraste do texto */}
            <div className="absolute inset-0 bg-[#09192f]/80" />
          </motion.div>
        ))}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn(0)}>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Suprimentos sob medida para sua operação
            </h1>

            <p className="mt-2 text-white/80 text-lg">
              Materiais de qualidade, prazos confiáveis e atendimento ágil para o seu negócio
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cotacao"
                className="rounded-2xl bg-[#004048] text-white px-4 py-2 font-medium inline-flex items-center group hover:opacity-90"
              >
                Pedir Cotação
                <ChevronRight className="ml-1 size-4" />
              </a>

              <a
                href="#produtos"
                className="rounded-2xl border border-white text-white px-4 py-2 font-medium hover:bg-white/10"
              >
                Ver produtos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-20 md:py-28 bg-[#004048]/5 border-y border-[#004048]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn(0)} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#004048]">
              Nossos Produtos
            </h2>
            <p className="text-[#09192f]/80 mt-3">
              Materiais com qualidade e conformidade para indústria, construção e operações offshore/onshore.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { title: "Válvulas e Atuadores", desc: "Kits de reparo, selos, gaxetas, molas, diafragmas, posicionadores, bobinas, vedações especiais." },
              { title: "Baleiras e Equipamentos de Salvategem", desc: "Peças para manutenção e inspeção de sistemas de emergência e segurança." },
              { title: "Bombas e Compressores", desc: "Rolamentos, selos mecânicos, rotores, estatores, buchas, acoplamentos, kits de vedação, palhetas, pistões." },
              { title: "Combate a Incêndio", desc: "Cilindros, detectores, mangueiras de incêndio, sprinklers, válvulas de alívio, bicos nebulizadores, acionadores manuais, sinalizadores ópticos e sonoros." },
              { title: "Guindastes e Equipamentos de Elevação Offshore", desc: "Ganchos, manilhas, roldanas, motores de içamento, freios, cabos de aço, redutores, limitadores de carga, painéis de controle e sistemas hidráulicos completos." },
              { title: "Comunicação e Navegação", desc: "Antenas, equipamentos SATCOM, rádios marítimos, repetidores, transceptores VHF/UHF, unidades GPS, bússolas giroscópicas, radares." },
              { title: "Turbinas Industriais", desc: "Componentes sobressalentes para turbinas a gás ou vapor, palhetas, eixos, rolamentos." },
              { title: "Ventiladores Industriais, Trocadores de Calor e Permutadores", desc: "Motores, hélices, mancais, suportes, serpentinas, tubos de transferência térmica, filtros, vedantes e controladores de temperatura." },
              { title: "Instrumentação e Automação", desc: "Sensores, transmissores, indicadores, conversores, módulos de controle, válvulas solenóides, chaves fim de curso, CLPs, medidores de vazão e nível." },
              { title: "Elétricos e Eletrônicos", desc: "Cabos, conectores, relés, disjuntores, fusíveis, baterias, inversores, módulos eletrônicos, interruptores, fontes de alimentação." },
              { title: "Materiais Hidráulicos e Pneumáticos", desc: "Mangueiras, conexões, cilindros hidráulicos, válvulas reguladoras de pressão, unidades de tratamento de ar, filtros pneumáticos, acumuladores hidráulicos, pressostatos." },
              { title: "Materiais de Vedação", desc: "Juntas, anéis O-ring, juntas metálicas, juntas espirais, vedações mecânicas especiais, retentores, selos labiais" },
              { title: "Equipamentos de Movimentação de Carga", desc: "Manilhas, ganchos, cabos de aço, cintas de elevação, moitões, olhais de suspensão, esticadores, grampos." },
              { title: "Filtros e Elementos Filtrantes", desc: "Filtros hidráulicos, filtros de ar comprimido, filtros coalescentes, elementos filtrantes descartáveis, cartuchos de filtração, pré-filtros." },
            ].map((p, i) => (
              <motion.div
                key={i}
                {...fadeIn(0.05 * i)}
                className="rounded-2xl border border-[#004048]/20 bg-white p-6 hover:bg-[#004048]/5 transition"
              >
                <div className="text-lg font-medium text-[#004048]">{p.title}</div>
                <p className="text-[#09192f]/80 text-sm mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COTAÇÃO (WhatsApp direto) */}
      <section id="cotacao" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <motion.div {...fadeIn(0)}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#004048]">Solicitar Cotação</h2>
            <p className="text-[#09192f]/80 mt-3">
              Preencha os dados e envie seu pedido direto pelo WhatsApp. Nosso time responde rápido. 
            </p>
          </motion.div>

          <motion.form
            id="cotacao-form"
            {...fadeIn(0.1)}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-[#004048]/20 bg-[#004048]/5 p-6 space-y-4"
          >
            <input
              name="name"
              placeholder="Seu nome"
              className="w-full bg-white border border-[#004048]/20 rounded-xl px-3 py-2"
              required
            />
            <input
              name="company"
              placeholder="Empresa (opcional)"
              className="w-full bg-white border border-[#004048]/20 rounded-xl px-3 py-2"
            />
            <textarea
              name="message"
              placeholder="Descreva os materiais (quantidade, padrão, prazo, etc.)"
              className="w-full bg-white border border-[#004048]/20 rounded-xl px-3 py-2 min-h-[120px]"
              required
            />

            <button
              type="button"
              onClick={() => {
                const form = document.getElementById("cotacao-form") as HTMLFormElement;
                const data = new FormData(form);
                const name = String(data.get("name") || "");
                const company = String(data.get("company") || "");
                const message = String(data.get("message") || "");

                // Ajuste o número abaixo se necessário (DDI+DDD+número, só dígitos).
                const phone = "5521975396623";

                const text = encodeURIComponent(
                  `Olá! Quero solicitar uma cotação.\n\n` +
                  `Nome: ${name}\n` +
                  (company ? `Empresa: ${company}\n` : "") +
                  `Pedido:\n${message}`
                );

                window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
              }}
              className="w-full rounded-xl bg-[#25D366] text-[#09192f] px-4 py-3 font-medium"
            >
              Enviar pelo WhatsApp
            </button>

            <p className="text-xs text-[#09192f]/70">
              * Você será redirecionado para o WhatsApp com sua mensagem já preenchida.
            </p>
          </motion.form>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <motion.div {...fadeIn(0)}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#004048]">Contato</h2>
            <p className="text-[#09192f]/80 mt-3">
              Preferir e-mail ou ligação? Fale com a gente pelos canais abaixo.
            </p>

            <div className="mt-6 space-y-3 text-[#09192f]">
              <div className="flex items-center gap-2">
                <PhoneCall className="text-[#004048]" /> +55 (21) 97539-6623
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[#004048]" /> comercial@offsea.com.br
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
