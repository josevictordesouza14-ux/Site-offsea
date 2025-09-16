"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Star, Users, ChevronRight } from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, margin: "-100px" },
});

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#09192f]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero2.svg')" }}
        />
        <div className="absolute inset-0 bg-[#09192f]/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.h1
            {...fadeIn(0)}
            className="text-3xl md:text-5xl font-semibold text-white"
          >
            Quem Somos
          </motion.h1>
          <motion.p
            {...fadeIn(0.1)}
            className="mt-3 max-w-3xl text-white/80 text-lg"
          >
            Especialistas em <span className="text-white">suprimentos</span> para
            operações que não podem parar — atendendo indústrias, construção e projetos
            de energia com qualidade, prazos confiáveis e suporte ágil.
          </motion.p>
        </div>
      </section>

      {/* SOBRE A EMPRESA */}
      <section className="py-16 md:py-24 bg-[#004048]/5 border-y border-[#004048]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <motion.div {...fadeIn(0)}>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#004048]">
              Nossa essência
            </h2>
            <p className="mt-3 text-[#09192f]/80 leading-relaxed">
              Com atuação consistente no mercado, somos o parceiro confiável para quem
              precisa de materiais certos, no momento certo. Trabalhamos próximos aos
              principais fabricantes e distribuidores para garantir tecnologia atualizada,
              conformidade e rastreabilidade — do pedido à entrega.
            </p>
            <p className="mt-3 text-[#09192f]/80 leading-relaxed">
              Atendemos desde reposições críticas até demandas completas de projeto,
              sempre com atendimento consultivo e foco absoluto no resultado do cliente.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#produtos"
                className="rounded-2xl border border-[#004048] text-[#004048] px-4 py-2 font-medium hover:bg-[#004048]/10"
              >
                Ver produtos
              </a>
              <a
                href="/#cotacao"
                className="rounded-2xl bg-[#004048] text-white px-4 py-2 font-medium inline-flex items-center hover:opacity-90"
              >
                Solicitar cotação
                <ChevronRight className="ml-1 size-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn(0.1)}
            className="relative rounded-2xl overflow-hidden border border-[#004048]/20"
          >
            {/* Troque a imagem abaixo por uma foto da empresa/equipe se quiser */}
            <Image
              src="/hero3.svg"
              alt="OffSea - Estrutura"
              width={1280}
              height={800}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#004048]/20 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* MISSÃO / VISÃO / VALORES */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              {...fadeIn(0)}
              className="rounded-2xl border border-[#004048]/20 bg-white p-6"
            >
              <div className="flex items-center gap-2 text-[#004048]">
                <Shield /> <h3 className="text-lg font-semibold">Missão</h3>
              </div>
              <p className="mt-2 text-[#09192f]/80">
                Fornecer produtos e soluções que elevem a segurança e a produtividade
                dos nossos clientes, com atendimento rápido e suporte especializado —
                mantendo suas operações em ritmo contínuo.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn(0.05)}
              className="rounded-2xl border border-[#004048]/20 bg-white p-6"
            >
              <div className="flex items-center gap-2 text-[#004048]">
                <Target /> <h3 className="text-lg font-semibold">Visão</h3>
              </div>
              <p className="mt-2 text-[#09192f]/80">
                Ser referência no Brasil e no exterior em soluções de suprimentos
                industriais, reconhecida por confiabilidade, inovação e parcerias
                estratégicas duradouras.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn(0.1)}
              className="rounded-2xl border border-[#004048]/20 bg-white p-6"
            >
              <div className="flex items-center gap-2 text-[#004048]">
                <Star /> <h3 className="text-lg font-semibold">Valores</h3>
              </div>
              <ul className="mt-2 space-y-2 text-[#09192f]/80">
                <li>
                  <strong className="text-[#004048]">Ética & Responsabilidade:</strong>{" "}
                  transparência em cada etapa e respeito aos compromissos.
                </li>
                <li>
                  <strong className="text-[#004048]">Inovação:</strong> buscamos
                  continuamente soluções e tecnologias que acompanhem a dinâmica do
                  mercado.
                </li>
                <li>
                  <strong className="text-[#004048]">Excelência:</strong> alto padrão de
                  qualidade do orçamento à entrega.
                </li>
                <li className="flex items-start gap-2">
                  <Users className="mt-1 shrink-0 text-[#004048]" />
                  <span>
                    <strong className="text-[#004048]">Foco no Cliente:</strong>{" "}
                    atendimento dedicado, soluções sob medida e prazos confiáveis.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 md:py-16 bg-[#004048]/5 border-t border-[#004048]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            {...fadeIn(0)}
            className="text-2xl md:text-3xl font-semibold text-[#004048]"
          >
            Precisa de suprimentos para sua operação?
          </motion.h3>
          <motion.p {...fadeIn(0.05)} className="mt-2 text-[#09192f]/80">
            Envie sua lista e receba nossa proposta com rapidez e transparência.
          </motion.p>
          <motion.div {...fadeIn(0.1)} className="mt-6">
            <a
              href="/#cotacao"
              className="inline-flex items-center rounded-2xl bg-[#004048] text-white px-5 py-3 font-medium hover:opacity-90"
            >
              Solicitar cotação
              <ChevronRight className="ml-1 size-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
