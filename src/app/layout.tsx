import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OffSea — Suprimentos Industriais",
  description: "Suprimentos sob medida para sua operação.",
  icons: {
    icon: [
      { url: "/favicon1.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }, // opcional para telas retina
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, // opcional fallback
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fallback para browsers que não leem metadata */}
        <link rel="icon" href="/favicon1.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#09192f]`}
      >
        {/* NAVBAR global */}
        <header className="sticky top-0 z-40 backdrop-blur bg-white/90 border-b border-[#004048]/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/OFFSEA.svg"
                  alt="OffSea"
                  width={250}
                  height={250}
                  priority
                />
                <span className="text-xs px-2 py-1 rounded-full bg-[#004048]/10 ml-2 text-[#004048]">
                  Suprimentos
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-[#09192f]/80">
              <a href="/#produtos" className="hover:text-[#004048]">
                Produtos
              </a>
              <Link href="/quemsomos" className="hover:text-[#004048]">
                Quem Somos
              </Link>
              <a href="/#cotacao" className="hover:text-[#004048]">
                Cotação
              </a>
              <a href="/#contato" className="hover:text-[#004048]">
                Contato
              </a>
              <a
                href="/#cotacao"
                className="rounded-2xl bg-[#004048] text-white px-4 py-2 font-medium hover:opacity-90"
              >
                Solicitar Cotação
              </a>
            </nav>
          </div>
        </header>

        {/* Conteúdo das páginas */}
        {children}

        {/* FOOTER global */}
        <footer className="py-10 border-t border-[#004048]/20 text-center text-[#09192f]/70 text-sm">
          © {new Date().getFullYear()} OFFSEA — Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
