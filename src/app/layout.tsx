import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const siteUrl = "https://gitcar.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GitCar | Sistema de gestão e anúncios para revendas de veículos",
    template: "%s | GitCar",
  },
  description:
    "Avaliação, preparo, estoque, anúncios, CRM, contratos, comissões e financeiro da sua revenda em um só sistema, no celular.",
  applicationName: "GitCar",
  keywords: [
    "revenda de veículos",
    "gestão de estoque",
    "anúncios de carros",
    "CRM automotivo",
    "contratos de venda",
    "comissão de vendedores",
    "gestão financeira",
    "loja de carros",
    "sistema para revendas",
  ],
  authors: [{ name: "GitCar" }],
  creator: "GitCar",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "GitCar",
    title: "GitCar | Sistema de gestão e anúncios para revendas de veículos",
    description:
      "Avaliação, preparo, estoque, anúncios, CRM, contratos, comissões e financeiro da sua revenda em um só sistema.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitCar | Sistema de gestão e anúncios para revendas de veículos",
    description:
      "Avaliação, preparo, estoque, anúncios, CRM, contratos, comissões e financeiro da sua revenda em um só sistema.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = { themeColor: "#0b2140" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
