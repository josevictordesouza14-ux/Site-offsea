import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/company";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: { default: "OFFSEA | Suprimentos industriais, offshore e onshore", template: "%s | OFFSEA" },
  description: "Materiais e equipamentos para a indústria e operações offshore e onshore. Conheça as linhas de fornecimento da OFFSEA e solicite sua cotação.",
  icons: { icon: "/favicon.svg" },
  openGraph: { type: "website", locale: "pt_BR", siteName: "OFFSEA", title: "OFFSEA | Suprimentos industriais", description: "Os materiais certos para uma operação em movimento." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header />{children}<Footer /></body></html>;
}
