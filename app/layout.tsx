import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MetaPixel from "@/components/analytics/MetaPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MRG Caixas Térmicas | Fabricação de Caixas Térmicas Industriais e Comerciais",
  description: "MRG Caixas Térmicas - Indústria especializada na fabricação de caixas térmicas industriais e comerciais sob medida. Galvanizadas, Pintadas, Inox e Alumínio.",
  keywords: "caixas térmicas, caixas térmicas industriais, caixas térmicas comerciais, inox, alumínio, galvanizado, São José do Rio Preto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <GoogleAnalytics />
        <MetaPixel />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
