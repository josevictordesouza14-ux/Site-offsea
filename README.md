# OFFSEA — novo site institucional

Projeto em Next.js, React, TypeScript e Tailwind CSS, preparado para a Vercel.

## Abrir no computador

1. Instale o Node.js 22 ou superior, se ainda não estiver instalado.
2. Extraia o ZIP. No VS Code, abra a pasta `offsea-site` que contém `package.json`.
3. Abra o terminal do VS Code e execute:

```bash
npm ci
npm run dev
```

4. Abra http://localhost:3000 no navegador.

Para encerrar a prévia, pressione Ctrl+C no terminal.

## Verificar e publicar na Vercel

```bash
npm run build
```

O projeto não precisa de banco de dados, chaves de API nem variáveis de ambiente. A Vercel reconhece o framework Next.js.

No projeto existente `site-offsea`, consulte a conexão Git para identificar o repositório completo. O print fornecido mostra a conta `josevictordesouza14-ux` e um nome de repositório truncado como `Site-offs...`; não presuma a URL completa.

Para preservar o histórico, clone o repositório existente e faça a substituição dos arquivos do aplicativo em uma nova branch. Mantenha a pasta `.git` do repositório. Envie a branch para gerar uma prévia na Vercel e revise a prévia antes de atualizar a branch de produção. Confira os contatos e o conteúdo comercial.

Use o projeto da Vercel que já contém o domínio `www.offsea.com.br`. Não é necessário criar outro domínio para revisar esta versão. Este pacote não foi publicado na conta da Vercel.

## Onde editar

| Conteúdo | Arquivo |
|---|---|
| Página inicial | `src/app/page.tsx` |
| Quem somos | `src/app/quemsomos/page.tsx` |
| Linhas de fornecimento | `src/lib/products.ts` |
| E-mail, telefone, WhatsApp e domínio | `src/lib/company.ts` |
| Cores e estilos responsivos | `src/app/globals.css` |
| Menu | `src/components/Header.tsx` |
| Rodapé | `src/components/Footer.tsx` |
| Formulário de cotação | `src/components/QuoteForm.tsx` |
| Informações sobre privacidade | `src/app/privacidade/page.tsx` |
| Logo e fotos | `public/images/` |

## O que está incluído

- Início, Quem Somos, privacidade e página de endereço não encontrado.
- As 14 linhas de fornecimento do site anterior, com filtros por área.
- Menu responsivo e links de telefone e e-mail.
- Formulário com validação de nome e descrição do material.
- Mensagem de cotação preparada no WhatsApp, com confirmação de envio feita pelo visitante no próprio WhatsApp.
- Metadados, favicon, sitemap e robots.txt.
- Logo original da OFFSEA e imagens reaproveitadas do site anterior, com fotos otimizadas em WebP.
- Fonte Manrope fornecida localmente; não requer Google Fonts na abertura do site.

## Dados comerciais usados

Os contatos abaixo foram obtidos do site público da OFFSEA em 02/10/2026:

- E-mail: comercial@offsea.com.br
- Telefone e WhatsApp: +55 (21) 97539-6623
- Domínio: https://www.offsea.com.br

Os textos institucionais foram reescritos para esta primeira versão. Não foram adicionados números de clientes, selos, certificações ou depoimentos. As fotos são referências de operações e logística; não estão identificadas como instalações próprias da OFFSEA.

## Funcionamento e privacidade

O site não possui painel administrativo, catálogo de estoque, envio automático de e-mail nem banco de cotações. A lista apresenta linhas de fornecimento, sujeitas à consulta de disponibilidade. O formulário somente prepara uma mensagem e abre o WhatsApp; ele não afirma que a cotação já foi recebida. Há um link para reabrir a mensagem caso o navegador bloqueie a nova janela. Não há integração de analytics ou publicidade.

Se adicionar armazenamento de leads, analytics, cookies ou outro serviço, atualize as informações de privacidade para refletir o funcionamento real.

## Fontes dos ativos

Ativos recuperados da versão pública anterior da própria OFFSEA:

- Logo: https://www.offsea.com.br/OFFSEA.svg
- Fotografias incorporadas: https://www.offsea.com.br/hero1.svg
- Referência adicional: https://www.offsea.com.br/hero2.svg

O viewBox da logo foi ajustado para remover margens vazias, sem redesenhar a marca. As fotografias incorporadas foram extraídas e convertidas para WebP. A fonte e os ícones mantêm suas licenças nos respectivos pacotes npm.

## Manutenção

Guarde o código em um repositório Git e preserve `package-lock.json`. As pastas `node_modules` e `.next` são geradas e não fazem parte do ZIP. Execute `npm ci` depois de extrair para reinstalar as dependências.
